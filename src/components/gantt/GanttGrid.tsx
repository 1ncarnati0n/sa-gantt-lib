import React, { useMemo, forwardRef } from 'react';
import { useConstructionStore } from '../../store/useConstructionStore';
import { ConstructionTask } from '../../types/gantt';
import { format } from 'date-fns';

interface TaskRowProps {
    task: ConstructionTask;
    onDrillDown?: (id: string) => void;
    isMasterView: boolean;
}

const TaskRow: React.FC<TaskRowProps> = ({ task, onDrillDown, isMasterView }) => {
    const { updateTaskDuration } = useConstructionStore();

    const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!task.task) return;
        const { name, value } = e.target;
        const numValue = parseInt(value) || 0;

        if (name === 'netWorkDays') {
            updateTaskDuration(task.id, numValue, task.task.indirectWorkDays);
        } else if (name === 'indirectWorkDays') {
            updateTaskDuration(task.id, task.task.netWorkDays, numValue);
        }
    };

    const rowClasses = "border-b border-gray-100 hover:bg-gray-50 transition-colors h-[40px]";

    if (isMasterView) {
        // Level 1: Lot Schedule Row
        const totalDays = (task.summary?.workDaysTotal || 0) + (task.summary?.nonWorkDaysTotal || 0);

        return (
            <div
                className={`flex items-center w-full min-w-[500px] text-sm cursor-pointer ${rowClasses}`}
                onDoubleClick={() => onDrillDown?.(task.id)}
            >
                {/* CP Name */}
                <div className="w-[200px] px-4 font-bold text-gray-800 truncate border-r border-gray-100 flex items-center h-full">
                    {task.name}
                </div>

                {/* Total Duration */}
                <div className="w-[100px] text-center px-2 border-r border-gray-100 flex items-center justify-center h-full">
                    <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs font-medium">
                        {totalDays}일
                    </span>
                </div>

                {/* Work Days (Vermilion) */}
                <div className="w-[100px] text-center px-2 border-r border-gray-100 text-vermilion font-medium flex items-center justify-center h-full">
                    {task.summary?.workDaysTotal || 0}
                </div>

                {/* Non-Work Days (Teal) */}
                <div className="w-[100px] text-center px-2 text-teal font-medium flex items-center justify-center h-full">
                    {task.summary?.nonWorkDaysTotal || 0}
                </div>
            </div>
        );
    } else {
        // Level 2: CP Schedule Row
        return (
            <div className={`flex items-center w-full min-w-[600px] text-sm ${rowClasses}`}>
                {/* Task Name */}
                <div className="w-[200px] px-4 truncate border-r border-gray-100 flex items-center h-full pl-6">
                    {task.name}
                </div>

                {/* Net Work Days (Red Input) */}
                <div className="w-[100px] text-center px-2 border-r border-gray-100 flex items-center justify-center h-full">
                    <input
                        type="number"
                        name="netWorkDays"
                        value={task.task?.netWorkDays || 0}
                        onChange={handleDurationChange}
                        className="w-full text-center p-1 rounded border border-vermilion/30 bg-vermilion/5 focus:outline-none focus:ring-1 focus:ring-vermilion text-vermilion font-medium"
                    />
                </div>

                {/* Indirect Days (Blue Input) */}
                <div className="w-[100px] text-center px-2 border-r border-gray-100 flex items-center justify-center h-full">
                    <input
                        type="number"
                        name="indirectWorkDays"
                        value={task.task?.indirectWorkDays || 0}
                        onChange={handleDurationChange}
                        className="w-full text-center p-1 rounded border border-teal/30 bg-teal/5 focus:outline-none focus:ring-1 focus:ring-teal text-teal font-medium"
                    />
                </div>

                {/* Start Date */}
                <div className="w-[100px] text-center px-2 text-gray-500 text-xs flex items-center justify-center h-full">
                    {format(task.startDate, 'MM-dd')}
                </div>

                {/* End Date */}
                <div className="w-[100px] text-center px-2 text-gray-500 text-xs flex items-center justify-center h-full">
                    {format(task.endDate, 'MM-dd')}
                </div>
            </div>
        );
    }
};

export const GanttGrid = forwardRef<HTMLDivElement>((_, ref) => {
    const { tasks, currentView, activeSummaryId, setCurrentView, zoomLevel } = useConstructionStore();

    const visibleTasks = useMemo(() => {
        if (currentView === 'MASTER') {
            return tasks.filter(t => t.wbsLevel === 1);
        } else {
            return tasks.filter(t => t.wbsLevel === 2 && t.parentId === activeSummaryId);
        }
    }, [tasks, currentView, activeSummaryId]);

    const activeSummaryName = useMemo(() => {
        if (!activeSummaryId) return '';
        return tasks.find(t => t.id === activeSummaryId)?.name || '';
    }, [tasks, activeSummaryId]);

    const headerHeight = zoomLevel === 'DAY' ? 90 : 60;

    return (
        <div className="flex flex-col h-full bg-white select-none">
            {/* Header (Matches Timeline Header Height) */}
            <div
                className="flex items-center bg-gray-50 border-b border-gray-200 text-xs font-bold text-gray-500 sticky top-0 z-10"
                style={{ height: headerHeight }}
            >
                {currentView === 'MASTER' ? (
                    <>
                        <div className="w-[200px] px-4 border-r border-gray-200 h-full flex items-center">CP명 (공구)</div>
                        <div className="w-[100px] text-center border-r border-gray-200 h-full flex items-center justify-center">총 공기</div>
                        <div className="w-[100px] text-center border-r border-gray-200 h-full flex items-center justify-center text-vermilion">작업일수</div>
                        <div className="w-[100px] text-center h-full flex items-center justify-center text-teal">비작업일수</div>
                    </>
                ) : (
                    <>
                        <div className="w-[200px] px-4 border-r border-gray-200 h-full flex items-center shrink-0">
                            <button
                                onClick={() => setCurrentView('MASTER')}
                                className="mr-2 p-1 hover:bg-gray-200 rounded text-gray-600"
                            >
                                ←
                            </button>
                            {activeSummaryName}
                        </div>
                        <div className="w-[100px] text-center border-r border-gray-200 h-full flex items-center justify-center">순작업</div>
                        <div className="w-[100px] text-center border-r border-gray-200 h-full flex items-center justify-center">간접작업</div>
                        <div className="w-[100px] text-center border-r border-gray-200 h-full flex items-center justify-center">시작일</div>
                        <div className="w-[100px] text-center h-full flex items-center justify-center">종료일</div>
                    </>
                )}
            </div>

            {/* Scrollable Content */}
            <div
                ref={ref}
                className="flex-1 overflow-y-auto"
            >
                {/* Spacer for Milestone Lane (40px) */}
                <div className="h-[40px] border-b border-gray-100 bg-gray-50/50 w-full"></div>

                {visibleTasks.map(task => (
                    <TaskRow
                        key={task.id}
                        task={task}
                        isMasterView={currentView === 'MASTER'}
                        onDrillDown={(id) => setCurrentView('DETAIL', id)}
                    />
                ))}

                {visibleTasks.length === 0 && (
                    <div className="p-8 text-center text-gray-400 text-sm">
                        표시할 공정이 없습니다.
                    </div>
                )}
            </div>
        </div>
    );
});

GanttGrid.displayName = 'GanttGrid';
