import { useMemo, forwardRef } from 'react';
import { useConstructionStore } from '../../store/useConstructionStore';
import { format } from 'date-fns';
import { ConstructionTask } from '../../types/gantt';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { GANTT_CONSTANTS } from '../../utils/ganttConstants';

const { ROW_HEIGHT, HEADER_HEIGHT, MILESTONE_LANE_HEIGHT } = GANTT_CONSTANTS;

const GanttGridComponent = forwardRef<HTMLDivElement>((_, ref) => {
    const { tasks, expandedTaskIds, toggleTask, updateTaskDuration, currentView, activeSummaryId, setCurrentView } = useConstructionStore();

    // Master View: Show Level 1 (GROUP + CP) with tree structure
    // Detail View: Show Level 2 Tasks of selected CP
    const visibleTasks = useMemo(() => {
        if (currentView === 'MASTER') {
            // Level 1: Show GROUP and CP in hierarchical structure
            const visible: ConstructionTask[] = [];

            tasks.forEach(task => {
                if (task.wbsLevel === 1 && !task.parentId) {
                    // Top-level GROUP or CP
                    visible.push(task);
                } else if (task.wbsLevel === 1 && task.parentId) {
                    // CP that belongs to a GROUP
                    if (expandedTaskIds.includes(task.parentId)) {
                        visible.push(task);
                    }
                }
            });

            return visible;
        } else {
            // Detail View: Show Level 2 Tasks of the active CP
            return tasks.filter(t => t.wbsLevel === 2 && t.parentId === activeSummaryId);
        }
    }, [tasks, currentView, activeSummaryId, expandedTaskIds]);

    // Master View Rendering
    if (currentView === 'MASTER') {
        return (
            <div className="flex flex-col h-full border-r border-gray-300 bg-white select-none" style={{ width: '400px', minWidth: '400px' }}>
                {/* Header */}
                <div className="flex flex-col border-b border-gray-300 bg-gray-50" style={{ height: HEADER_HEIGHT }}>
                    <div className="flex-1 flex items-center px-4 font-bold text-gray-700">
                        공구 공정표 (Level 1)
                    </div>
                    <div className="flex h-[32px] border-t border-gray-200">
                        <div className="flex-1 flex items-center justify-center border-r border-gray-200 text-xs font-medium text-gray-600">
                            CP명
                        </div>
                        <div className="w-24 flex items-center justify-center border-r border-gray-200 text-xs font-medium text-gray-600">
                            총 공기
                        </div>
                        <div className="w-20 flex items-center justify-center text-xs font-medium text-gray-600">
                            작업일수
                        </div>
                    </div>
                </div>

                {/* Grid Body */}
                <div ref={ref} className="flex-1 overflow-hidden relative">
                    {/* Spacer for Milestone Lane with subtle border */}
                    <div
                        className="border-b border-gray-200 bg-gray-50/50 w-full"
                        style={{ height: MILESTONE_LANE_HEIGHT }}
                    ></div>

                    <div className="absolute top-[40px] left-0 right-0">
                        {visibleTasks.map((task) => {
                            const isGroup = task.type === 'GROUP';
                            const hasChildren = tasks.some(t => t.parentId === task.id);
                            const isExpanded = expandedTaskIds.includes(task.id);
                            const indent = task.parentId ? 20 : 0;

                            return (
                                <div
                                    key={task.id}
                                    className={`flex items-center border-b border-gray-100 transition-colors box-border ${isGroup ? 'bg-gray-50' : 'hover:bg-blue-50 cursor-pointer'
                                        }`}
                                    style={{ height: ROW_HEIGHT }}
                                    onClick={() => {
                                        if (!isGroup && task.type === 'SUMMARY') {
                                            setCurrentView('DETAIL', task.id);
                                        }
                                    }}
                                >
                                    {/* CP Name with Indent & Toggle */}
                                    <div className="flex-1 flex items-center px-2 overflow-hidden" style={{ paddingLeft: `${indent + 8}px` }}>
                                        {hasChildren ? (
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    toggleTask(task.id);
                                                }}
                                                className="p-1 mr-1 hover:bg-gray-200 rounded text-gray-500 shrink-0"
                                            >
                                                {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                                            </button>
                                        ) : (
                                            <div className="w-6 shrink-0" />
                                        )}
                                        <span className={`truncate text-sm ${isGroup ? 'font-bold text-gray-700' : 'font-medium text-gray-800'
                                            }`}>
                                            {task.name}
                                        </span>
                                    </div>

                                    {/* Total Duration */}
                                    <div className="w-24 flex items-center justify-center border-l border-gray-100 text-xs text-gray-500 shrink-0">
                                        {isGroup ? '-' : (
                                            task.summary ? `${task.summary.workDaysTotal + task.summary.nonWorkDaysTotal}일` : '-'
                                        )}
                                    </div>

                                    {/* Work Days */}
                                    <div className="w-20 flex items-center justify-center border-l border-gray-100 text-xs text-vermilion shrink-0">
                                        {isGroup ? '-' : (
                                            task.summary ? `${task.summary.workDaysTotal}일` : '-'
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }

    // Detail View Rendering
    return (
        <div className="flex flex-col h-full border-r border-gray-300 bg-white select-none" style={{ width: '500px', minWidth: '500px' }}>
            {/* Header */}
            <div className="flex flex-col border-b border-gray-300 bg-gray-50" style={{ height: HEADER_HEIGHT }}>
                <div className="flex-1 flex items-center px-4 justify-between">
                    <span className="font-bold text-gray-700">주공정표 (Level 2)</span>
                    <button
                        onClick={() => setCurrentView('MASTER')}
                        className="text-xs bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded text-gray-700 font-medium"
                    >
                        ← 공구 공정표로
                    </button>
                </div>
                <div className="flex h-[32px] border-t border-gray-200 text-xs font-medium text-gray-600">
                    <div className="flex-1 flex items-center justify-center border-r border-gray-200">
                        단위공정명
                    </div>
                    <div className="w-20 flex items-center justify-center border-r border-gray-200">
                        순작업일
                    </div>
                    <div className="w-20 flex items-center justify-center border-r border-gray-200">
                        간접일
                    </div>
                    <div className="w-24 flex items-center justify-center border-r border-gray-200">
                        시작일
                    </div>
                    <div className="w-24 flex items-center justify-center">
                        종료일
                    </div>
                </div>
            </div>

            {/* Grid Body */}
            <div ref={ref} className="flex-1 overflow-hidden relative">
                {/* Spacer for Milestone Lane with subtle border */}
                <div
                    className="border-b border-gray-200 bg-gray-50/50 w-full"
                    style={{ height: MILESTONE_LANE_HEIGHT }}
                ></div>

                <div className="absolute top-[40px] left-0 right-0">
                    {visibleTasks.map((task) => (
                        <div
                            key={task.id}
                            className="flex items-center border-b border-gray-100 hover:bg-gray-50 transition-colors box-border"
                            style={{ height: ROW_HEIGHT }}
                        >
                            {/* Task Name */}
                            <div className="flex-1 flex items-center px-4 overflow-hidden">
                                <span className="truncate text-sm text-gray-700">
                                    {task.name}
                                </span>
                            </div>

                            {/* Net Work Days Input */}
                            <div className="w-20 flex items-center justify-center border-l border-gray-100 px-2 shrink-0">
                                {task.task ? (
                                    <input
                                        type="number"
                                        className="w-full text-xs text-center border border-gray-200 rounded py-0.5 focus:border-blue-500 focus:outline-none"
                                        value={task.task.netWorkDays}
                                        onChange={(e) => {
                                            const val = parseInt(e.target.value) || 0;
                                            updateTaskDuration(task.id, val, task.task!.indirectWorkDays);
                                        }}
                                    />
                                ) : '-'}
                            </div>

                            {/* Indirect Work Days Input */}
                            <div className="w-20 flex items-center justify-center border-l border-gray-100 px-2 shrink-0">
                                {task.task ? (
                                    <input
                                        type="number"
                                        className="w-full text-xs text-center border border-gray-200 rounded py-0.5 focus:border-blue-500 focus:outline-none"
                                        value={task.task.indirectWorkDays}
                                        onChange={(e) => {
                                            const val = parseInt(e.target.value) || 0;
                                            updateTaskDuration(task.id, task.task!.netWorkDays, val);
                                        }}
                                    />
                                ) : '-'}
                            </div>

                            {/* Start Date */}
                            <div className="w-24 flex items-center justify-center border-l border-gray-100 text-xs text-gray-500 shrink-0">
                                {format(task.startDate, 'yyyy-MM-dd')}
                            </div>

                            {/* End Date */}
                            <div className="w-24 flex items-center justify-center border-l border-gray-100 text-xs text-gray-500 shrink-0">
                                {format(task.endDate, 'yyyy-MM-dd')}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
});

GanttGridComponent.displayName = 'GanttGrid';

export const GanttGrid = GanttGridComponent;
