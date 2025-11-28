import { useMemo, forwardRef, useState, useCallback, useRef, useEffect } from 'react';
import { useConstructionStore } from '../../store/useConstructionStore';
import { format } from 'date-fns';
import { ConstructionTask } from '../../types/gantt';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { GANTT_CONSTANTS } from '../../utils/ganttConstants';

const { ROW_HEIGHT, HEADER_HEIGHT, MILESTONE_LANE_HEIGHT } = GANTT_CONSTANTS;

// 컬럼 너비 측정을 위한 유틸리티
const measureTextWidth = (text: string, font: string = '14px sans-serif'): number => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) return 100;
    context.font = font;
    return context.measureText(text).width;
};

// 컬럼 설정 타입
interface ColumnConfig {
    id: string;
    label: string;
    width: number;
    minWidth: number;
    getValue: (task: ConstructionTask, isGroup: boolean) => string;
}

const GanttGridComponent = forwardRef<HTMLDivElement>((_, ref) => {
    const { tasks, expandedTaskIds, toggleTask, updateTaskDuration, currentView, activeSummaryId, setCurrentView } = useConstructionStore();

    // Master View 컬럼 너비 상태
    const [masterColumns, setMasterColumns] = useState<ColumnConfig[]>([
        { id: 'name', label: 'CP명', width: 180, minWidth: 100, getValue: (t) => t.name },
        { id: 'total', label: '총 공기', width: 80, minWidth: 60, getValue: (t, isGroup) => isGroup ? '-' : (t.summary ? `${t.summary.workDaysTotal + t.summary.nonWorkDaysTotal}일` : '-') },
        { id: 'workDays', label: '작업일수', width: 80, minWidth: 60, getValue: (t, isGroup) => isGroup ? '-' : (t.summary ? `${t.summary.workDaysTotal}일` : '-') },
    ]);

    // Detail View 컬럼 너비 상태
    const [detailColumns, setDetailColumns] = useState<ColumnConfig[]>([
        { id: 'name', label: '단위공정명', width: 150, minWidth: 100, getValue: (t) => t.name },
        { id: 'netWork', label: '순작업일', width: 80, minWidth: 60, getValue: (t) => t.task ? `${t.task.netWorkDays}` : '-' },
        { id: 'indirect', label: '간접일', width: 80, minWidth: 60, getValue: (t) => t.task ? `${t.task.indirectWorkDays}` : '-' },
        { id: 'startDate', label: '시작일', width: 100, minWidth: 90, getValue: (t) => format(t.startDate, 'yyyy-MM-dd') },
        { id: 'endDate', label: '종료일', width: 100, minWidth: 90, getValue: (t) => format(t.endDate, 'yyyy-MM-dd') },
    ]);

    // 컬럼 리사이징 상태
    const [resizingColumn, setResizingColumn] = useState<string | null>(null);
    const resizeStartX = useRef<number>(0);
    const resizeStartWidth = useRef<number>(0);

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

    // 컬럼 리사이징 핸들러
    const handleColumnResizeStart = useCallback((e: React.MouseEvent, columnId: string, currentWidth: number) => {
        e.preventDefault();
        e.stopPropagation();
        setResizingColumn(columnId);
        resizeStartX.current = e.clientX;
        resizeStartWidth.current = currentWidth;
    }, []);

    useEffect(() => {
        if (!resizingColumn) return;

        const handleMouseMove = (e: MouseEvent) => {
            const delta = e.clientX - resizeStartX.current;
            const columns = currentView === 'MASTER' ? masterColumns : detailColumns;
            const setColumns = currentView === 'MASTER' ? setMasterColumns : setDetailColumns;
            
            setColumns(columns.map(col => {
                if (col.id === resizingColumn) {
                    const newWidth = Math.max(col.minWidth, resizeStartWidth.current + delta);
                    return { ...col, width: newWidth };
                }
                return col;
            }));
        };

        const handleMouseUp = () => {
            setResizingColumn(null);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [resizingColumn, currentView, masterColumns, detailColumns]);

    // 컬럼 자동 맞춤 (더블클릭)
    const handleColumnAutoFit = useCallback((columnId: string) => {
        const columns = currentView === 'MASTER' ? masterColumns : detailColumns;
        const setColumns = currentView === 'MASTER' ? setMasterColumns : setDetailColumns;
        
        // 해당 컬럼의 모든 값 중 최대 너비 계산
        let maxWidth = 0;
        
        // 헤더 텍스트 너비
        const column = columns.find(c => c.id === columnId);
        if (column) {
            maxWidth = measureTextWidth(column.label, 'bold 12px sans-serif') + 24; // padding
        }
        
        // 각 행의 값 너비
        visibleTasks.forEach(task => {
            const isGroup = task.type === 'GROUP';
            const value = column?.getValue(task, isGroup) || '';
            const textWidth = measureTextWidth(value, '14px sans-serif') + 32; // padding + indent
            maxWidth = Math.max(maxWidth, textWidth);
        });

        // 최소/최대 제한
        maxWidth = Math.max(column?.minWidth || 60, Math.min(maxWidth, 300));

        setColumns(columns.map(col => 
            col.id === columnId ? { ...col, width: maxWidth } : col
        ));
    }, [currentView, masterColumns, detailColumns, visibleTasks]);

    // 컬럼 헤더 렌더링 (리사이저 포함)
    const renderColumnHeader = (column: ColumnConfig, isLast: boolean) => (
        <div
            key={column.id}
            className={`flex items-center justify-center text-xs font-medium text-gray-600 relative select-none shrink-0 ${!isLast ? 'border-r border-gray-200' : ''}`}
            style={{ width: column.width, minWidth: column.width }}
            onDoubleClick={() => handleColumnAutoFit(column.id)}
            title="더블클릭: 자동 맞춤"
        >
            <span className="truncate px-1">{column.label}</span>
            {/* 컬럼 리사이저 */}
            {!isLast && (
                <div
                    className="absolute right-0 top-0 bottom-0 w-1 cursor-col-resize hover:bg-blue-400 z-10"
                    onMouseDown={(e) => handleColumnResizeStart(e, column.id, column.width)}
                />
            )}
        </div>
    );

    // Master View Rendering
    if (currentView === 'MASTER') {
        const totalWidth = masterColumns.reduce((sum, col) => sum + col.width, 0);
        
        return (
            <div className="flex flex-col h-full bg-white select-none" style={{ width: '100%' }}>
                {/* Header */}
                <div className="flex flex-col border-b border-gray-300 bg-gray-50" style={{ height: HEADER_HEIGHT }}>
                    <div className="flex-1 flex items-center px-4 font-bold text-gray-700">
                        공구 공정표 (Level 1)
                    </div>
                    <div className="flex h-[32px] border-t border-gray-200">
                        {masterColumns.map((col, idx) => renderColumnHeader(col, idx === masterColumns.length - 1))}
                    </div>
                </div>

                {/* Grid Body */}
                <div ref={ref} className="flex-1 overflow-auto relative">
                    {/* Spacer for Milestone Lane with subtle border */}
                    <div
                        className="border-b border-gray-200 bg-gray-50/50"
                        style={{ height: MILESTONE_LANE_HEIGHT, minWidth: totalWidth }}
                    ></div>

                    <div style={{ minWidth: totalWidth }}>
                        {visibleTasks.map((task) => {
                            const isGroup = task.type === 'GROUP';
                            // GROUP만 펼치기/접기 가능 (CP는 기본 단위이므로 펼치기 없음)
                            const canExpand = isGroup && tasks.some(t => t.parentId === task.id);
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
                                    <div 
                                        className="flex items-center px-2 overflow-hidden shrink-0 border-r border-gray-100" 
                                        style={{ width: masterColumns[0].width, minWidth: masterColumns[0].width, paddingLeft: `${indent + 8}px` }}
                                    >
                                        {canExpand ? (
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
                                    <div 
                                        className="flex items-center justify-center border-r border-gray-100 text-xs text-gray-500 shrink-0"
                                        style={{ width: masterColumns[1].width, minWidth: masterColumns[1].width }}
                                    >
                                        {isGroup ? '-' : (
                                            task.summary ? `${task.summary.workDaysTotal + task.summary.nonWorkDaysTotal}일` : '-'
                                        )}
                                    </div>

                                    {/* Work Days */}
                                    <div 
                                        className="flex items-center justify-center text-xs text-vermilion shrink-0"
                                        style={{ width: masterColumns[2].width, minWidth: masterColumns[2].width }}
                                    >
                                        {isGroup ? '-' : (
                                            task.summary ? `${task.summary.workDaysTotal}일` : '-'
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* 리사이징 오버레이 */}
                {resizingColumn && (
                    <div className="fixed inset-0 z-50 cursor-col-resize" />
                )}
            </div>
        );
    }

    // Detail View Rendering
    const detailTotalWidth = detailColumns.reduce((sum, col) => sum + col.width, 0);
    
    return (
        <div className="flex flex-col h-full bg-white select-none" style={{ width: '100%' }}>
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
                    {detailColumns.map((col, idx) => renderColumnHeader(col, idx === detailColumns.length - 1))}
                </div>
            </div>

            {/* Grid Body */}
            <div ref={ref} className="flex-1 overflow-auto relative">
                {/* Spacer for Milestone Lane with subtle border */}
                <div
                    className="border-b border-gray-200 bg-gray-50/50"
                    style={{ height: MILESTONE_LANE_HEIGHT, minWidth: detailTotalWidth }}
                ></div>

                <div style={{ minWidth: detailTotalWidth }}>
                    {visibleTasks.map((task) => (
                        <div
                            key={task.id}
                            className="flex items-center border-b border-gray-100 hover:bg-gray-50 transition-colors box-border"
                            style={{ height: ROW_HEIGHT }}
                        >
                            {/* Task Name */}
                            <div 
                                className="flex items-center px-4 overflow-hidden shrink-0 border-r border-gray-100"
                                style={{ width: detailColumns[0].width, minWidth: detailColumns[0].width }}
                            >
                                <span className="truncate text-sm text-gray-700">
                                    {task.name}
                                </span>
                            </div>

                            {/* Net Work Days Input */}
                            <div 
                                className="flex items-center justify-center border-r border-gray-100 px-2 shrink-0"
                                style={{ width: detailColumns[1].width, minWidth: detailColumns[1].width }}
                            >
                                {task.task ? (
                                    <input
                                        type="number"
                                        className="w-full max-w-[60px] text-sm text-center text-gray-800 border border-gray-300 rounded py-1 px-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
                                        value={task.task.netWorkDays}
                                        onChange={(e) => {
                                            const val = parseInt(e.target.value) || 0;
                                            updateTaskDuration(task.id, val, task.task!.indirectWorkDays);
                                        }}
                                    />
                                ) : <span className="text-sm text-gray-400">-</span>}
                            </div>

                            {/* Indirect Work Days Input */}
                            <div 
                                className="flex items-center justify-center border-r border-gray-100 px-2 shrink-0"
                                style={{ width: detailColumns[2].width, minWidth: detailColumns[2].width }}
                            >
                                {task.task ? (
                                    <input
                                        type="number"
                                        className="w-full max-w-[60px] text-sm text-center text-gray-800 border border-gray-300 rounded py-1 px-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
                                        value={task.task.indirectWorkDays}
                                        onChange={(e) => {
                                            const val = parseInt(e.target.value) || 0;
                                            updateTaskDuration(task.id, task.task!.netWorkDays, val);
                                        }}
                                    />
                                ) : <span className="text-sm text-gray-400">-</span>}
                            </div>

                            {/* Start Date */}
                            <div 
                                className="flex items-center justify-center border-r border-gray-100 text-xs text-gray-500 shrink-0"
                                style={{ width: detailColumns[3].width, minWidth: detailColumns[3].width }}
                            >
                                {format(task.startDate, 'yyyy-MM-dd')}
                            </div>

                            {/* End Date */}
                            <div 
                                className="flex items-center justify-center text-xs text-gray-500 shrink-0"
                                style={{ width: detailColumns[4].width, minWidth: detailColumns[4].width }}
                            >
                                {format(task.endDate, 'yyyy-MM-dd')}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 리사이징 오버레이 */}
            {resizingColumn && (
                <div className="fixed inset-0 z-50 cursor-col-resize" />
            )}
        </div>
    );
});

GanttGridComponent.displayName = 'GanttGrid';

export const GanttGrid = GanttGridComponent;
