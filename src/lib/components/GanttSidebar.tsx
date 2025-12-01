'use client';

import { forwardRef, useMemo, useCallback, useState, useRef } from 'react';
import { format } from 'date-fns';
import { ChevronRight, ChevronDown } from 'lucide-react';
import {
    ConstructionTask,
    ViewMode,
    GANTT_LAYOUT,
} from '../types';
import type { VirtualRow } from '../hooks/useGanttVirtualization';

const { ROW_HEIGHT, HEADER_HEIGHT, MILESTONE_LANE_HEIGHT } = GANTT_LAYOUT;

// 컬럼 기본 설정
const DEFAULT_MASTER_COLUMNS = [
    { id: 'name', label: 'CP명', width: 180, minWidth: 100 },
    { id: 'total', label: '총 공기', width: 80, minWidth: 50 },
    { id: 'workDays', label: '작업일수', width: 80, minWidth: 50 },
];

const DEFAULT_DETAIL_COLUMNS = [
    { id: 'name', label: '단위공정명', width: 150, minWidth: 80 },
    { id: 'netWork', label: '순작업일', width: 80, minWidth: 50 },
    { id: 'indirect', label: '간접일', width: 80, minWidth: 50 },
    { id: 'startDate', label: '시작일', width: 100, minWidth: 70 },
    { id: 'endDate', label: '종료일', width: 100, minWidth: 70 },
];

interface GanttSidebarProps {
    tasks: ConstructionTask[];
    allTasks: ConstructionTask[];
    viewMode: ViewMode;
    expandedIds: Set<string>;
    onToggle: (taskId: string) => void;
    onTaskClick: (task: ConstructionTask) => void;
    onBackToMaster: () => void;
    onTaskUpdate?: (task: ConstructionTask) => void;
    /** 가상화된 행 목록 */
    virtualRows?: VirtualRow[];
    /** 전체 높이 */
    totalHeight?: number;
}

/**
 * 간트 차트 사이드바 (왼쪽 그리드)
 * 
 * - Master View: CP명, 총 공기, 작업일수 컬럼
 * - Detail View: 단위공정명, 순작업일, 간접일, 시작일, 종료일 컬럼
 * - 컬럼 너비 드래그로 조절 가능
 */
export const GanttSidebar = forwardRef<HTMLDivElement, GanttSidebarProps>(
    ({ tasks, allTasks, viewMode, expandedIds, onToggle, onTaskClick, onBackToMaster, onTaskUpdate, virtualRows, totalHeight }, ref) => {
        // 가상화가 활성화되었는지 확인
        const isVirtualized = virtualRows && virtualRows.length > 0;
        
        // 컬럼 너비 상태 관리
        const [masterColumnWidths, setMasterColumnWidths] = useState<number[]>(
            DEFAULT_MASTER_COLUMNS.map(col => col.width)
        );
        const [detailColumnWidths, setDetailColumnWidths] = useState<number[]>(
            DEFAULT_DETAIL_COLUMNS.map(col => col.width)
        );
        const [resizingIndex, setResizingIndex] = useState<number | null>(null);
        const isResizingRef = useRef(false);

        // 현재 뷰에 따른 컬럼 정보
        const baseColumns = viewMode === 'MASTER' ? DEFAULT_MASTER_COLUMNS : DEFAULT_DETAIL_COLUMNS;
        const columnWidths = viewMode === 'MASTER' ? masterColumnWidths : detailColumnWidths;
        const setColumnWidths = viewMode === 'MASTER' ? setMasterColumnWidths : setDetailColumnWidths;

        // 컬럼 정보와 현재 너비 결합
        const columns = useMemo(() => 
            baseColumns.map((col, idx) => ({
                ...col,
                width: columnWidths[idx] ?? col.width,
            })),
            [baseColumns, columnWidths]
        );

        const totalWidth = columns.reduce((sum, col) => sum + col.width, 0);

        // 컬럼 리사이즈 핸들러
        const handleColumnResizeStart = useCallback((e: React.MouseEvent, columnIndex: number) => {
            e.preventDefault();
            e.stopPropagation();
            isResizingRef.current = true;
            setResizingIndex(columnIndex);

            const startX = e.clientX;
            const startWidth = columnWidths[columnIndex];
            const minWidth = baseColumns[columnIndex].minWidth;

            const handleMouseMove = (e: MouseEvent) => {
                if (!isResizingRef.current) return;
                const delta = e.clientX - startX;
                const newWidth = Math.max(minWidth, startWidth + delta);
                
                setColumnWidths(prev => {
                    const updated = [...prev];
                    updated[columnIndex] = newWidth;
                    return updated;
                });
            };

            const handleMouseUp = () => {
                isResizingRef.current = false;
                setResizingIndex(null);
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
            };

            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }, [columnWidths, baseColumns, setColumnWidths]);

        // 텍스트 너비 측정 (Canvas API 사용)
        const measureTextWidth = useCallback((text: string, fontSize: number = 12, fontWeight: string = 'normal') => {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            if (!context) return 0;
            context.font = `${fontWeight} ${fontSize}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
            return context.measureText(text).width;
        }, []);

        // 컬럼 내용에 맞게 최적 너비 계산
        const calculateOptimalWidth = useCallback((columnIndex: number) => {
            const padding = 32; // 좌우 패딩
            const minWidth = baseColumns[columnIndex].minWidth;
            
            // 헤더 텍스트 너비
            const headerText = baseColumns[columnIndex].label;
            let maxWidth = measureTextWidth(headerText, 12, '500') + padding;

            // 각 행의 데이터 너비 계산
            tasks.forEach(task => {
                let cellText = '';
                
                if (viewMode === 'MASTER') {
                    const isGroup = task.type === 'GROUP';
                    switch (columnIndex) {
                        case 0: // CP명
                            cellText = task.name;
                            break;
                        case 1: // 총 공기
                            cellText = isGroup ? '-' : task.summary 
                                ? `${task.summary.workDaysTotal + task.summary.nonWorkDaysTotal}일` 
                                : '-';
                            break;
                        case 2: // 작업일수
                            cellText = isGroup ? '-' : task.summary 
                                ? `${task.summary.workDaysTotal}일` 
                                : '-';
                            break;
                    }
                } else {
                    // Detail View
                    switch (columnIndex) {
                        case 0: // 단위공정명
                            cellText = task.name;
                            break;
                        case 1: // 순작업일
                            cellText = task.task ? String(task.task.netWorkDays) : '-';
                            break;
                        case 2: // 간접일
                            cellText = task.task ? String(task.task.indirectWorkDays) : '-';
                            break;
                        case 3: // 시작일
                            cellText = format(task.startDate, 'yyyy-MM-dd');
                            break;
                        case 4: // 종료일
                            cellText = format(task.endDate, 'yyyy-MM-dd');
                            break;
                    }
                }

                const textWidth = measureTextWidth(cellText, 14, columnIndex === 0 ? '500' : 'normal') + padding;
                maxWidth = Math.max(maxWidth, textWidth);
            });

            // 최소 너비와 최대 너비 제한
            return Math.max(minWidth, Math.min(maxWidth, 400));
        }, [tasks, viewMode, baseColumns, measureTextWidth]);

        // 더블클릭으로 컬럼 너비 자동 최적화
        const handleColumnResizeDoubleClick = useCallback((columnIndex: number) => {
            const optimalWidth = calculateOptimalWidth(columnIndex);
            setColumnWidths(prev => {
                const updated = [...prev];
                updated[columnIndex] = optimalWidth;
                return updated;
            });
        }, [calculateOptimalWidth, setColumnWidths]);

        // 태스크 업데이트 핸들러 (Detail View에서 순작업일/간접일 편집)
        const handleDurationChange = useCallback((
            task: ConstructionTask,
            field: 'netWorkDays' | 'indirectWorkDays',
            value: number
        ) => {
            if (!task.task || !onTaskUpdate) return;

            const updatedTask: ConstructionTask = {
                ...task,
                task: {
                    ...task.task,
                    [field]: value,
                },
            };
            onTaskUpdate(updatedTask);
        }, [onTaskUpdate]);

        // 컬럼 헤더 렌더링 (리사이저 포함)
        const renderColumnHeaders = () => (
            <div className="flex h-[32px] border-t border-gray-200">
                {columns.map((col, idx) => (
                    <div
                        key={col.id}
                        className="relative flex shrink-0 items-center justify-center text-xs font-medium text-gray-600"
                        style={{ width: col.width }}
                    >
                        {col.label}
                        {/* Column Resizer (마지막 컬럼 제외) */}
                        {idx < columns.length - 1 && (
                            <div
                                className={`absolute right-0 top-0 z-10 h-full w-[5px] cursor-col-resize transition-colors ${
                                    resizingIndex === idx
                                        ? 'bg-blue-500'
                                        : 'hover:bg-blue-300'
                                }`}
                                style={{ transform: 'translateX(50%)' }}
                                onMouseDown={(e) => handleColumnResizeStart(e, idx)}
                                onDoubleClick={() => handleColumnResizeDoubleClick(idx)}
                                title="드래그하여 컬럼 너비 조절 / 더블클릭으로 내용에 맞게 자동 조절"
                            />
                        )}
                        {/* Border */}
                        {idx < columns.length - 1 && (
                            <div className="absolute right-0 top-0 h-full w-px bg-gray-200" />
                        )}
                    </div>
                ))}
            </div>
        );

        // Master View 렌더링
        if (viewMode === 'MASTER') {
            return (
                <div className="flex h-full flex-col bg-white select-none">
                    {/* Header */}
                    <div
                        className="flex flex-col border-b border-gray-300 bg-gray-50"
                        style={{ height: HEADER_HEIGHT }}
                    >
                        <div className="flex flex-1 items-center px-4 font-bold text-gray-700">
                            공구 공정표 (Level 1)
                        </div>
                        {renderColumnHeaders()}
                    </div>

                    {/* Resize Overlay */}
                    {resizingIndex !== null && (
                        <div className="fixed inset-0 z-50 cursor-col-resize" />
                    )}

                    {/* Body */}
                    <div ref={ref} className="relative flex-1 overflow-auto">
                        {/* Milestone Lane Spacer */}
                        <div
                            className="border-b border-gray-200 bg-gray-50/50"
                            style={{ height: MILESTONE_LANE_HEIGHT, minWidth: totalWidth }}
                        />

                        {/* Task Rows */}
                        <div 
                            style={{ 
                                minWidth: totalWidth,
                                height: isVirtualized ? totalHeight : undefined,
                                position: 'relative',
                            }}
                        >
                            {(isVirtualized ? virtualRows : tasks.map((_, i) => ({ index: i, start: i * ROW_HEIGHT, size: ROW_HEIGHT, key: i }))).map((row) => {
                                const task = tasks[row.index];
                                if (!task) return null;
                                
                                const isGroup = task.type === 'GROUP';
                                const canExpand = isGroup && allTasks.some(t => t.parentId === task.id);
                                const isExpanded = expandedIds.has(task.id);
                                const indent = task.parentId ? 20 : 0;

                                return (
                                    <div
                                        key={row.key}
                                        className={`box-border flex items-center border-b border-gray-100 transition-all duration-150 ${
                                            isGroup
                                                ? 'bg-gray-50'
                                                : 'cursor-pointer hover:bg-blue-50 hover:shadow-[inset_0_0_0_1px_rgba(59,130,246,0.3)] hover:pl-1'
                                        }`}
                                        style={{ 
                                            height: ROW_HEIGHT,
                                            ...(isVirtualized ? {
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                transform: `translateY(${row.start}px)`,
                                            } : {}),
                                        }}
                                        onDoubleClick={() => !isGroup && onTaskClick(task)}
                                        title={!isGroup ? '더블클릭하여 상세 공정표 보기' : undefined}
                                    >
                                        {/* CP Name */}
                                        <div
                                            className="flex shrink-0 items-center overflow-hidden border-r border-gray-100 px-2"
                                            style={{ width: columns[0].width, paddingLeft: indent + 8 }}
                                        >
                                            {canExpand ? (
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        onToggle(task.id);
                                                    }}
                                                    className="mr-1 shrink-0 rounded p-1 text-gray-500 hover:bg-gray-200"
                                                >
                                                    {isExpanded ? (
                                                        <ChevronDown size={14} />
                                                    ) : (
                                                        <ChevronRight size={14} />
                                                    )}
                                                </button>
                                            ) : (
                                                <div className="w-6 shrink-0" />
                                            )}
                                            <span
                                                className={`truncate text-sm ${
                                                    isGroup
                                                        ? 'font-bold text-gray-700'
                                                        : 'font-medium text-gray-800'
                                                }`}
                                            >
                                                {task.name}
                                            </span>
                                        </div>

                                        {/* Total Duration */}
                                        <div
                                            className="flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-gray-500"
                                            style={{ width: columns[1].width }}
                                        >
                                            {isGroup
                                                ? '-'
                                                : task.summary
                                                    ? `${task.summary.workDaysTotal + task.summary.nonWorkDaysTotal}일`
                                                    : '-'}
                                        </div>

                                        {/* Work Days */}
                                        <div
                                            className="flex shrink-0 items-center justify-center text-xs text-vermilion"
                                            style={{ width: columns[2].width }}
                                        >
                                            {isGroup
                                                ? '-'
                                                : task.summary
                                                    ? `${task.summary.workDaysTotal}일`
                                                    : '-'}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            );
        }

        // Detail View 렌더링
        return (
            <div className="flex h-full flex-col bg-white select-none">
                {/* Header */}
                <div
                    className="flex flex-col border-b border-gray-300 bg-gray-50"
                    style={{ height: HEADER_HEIGHT }}
                >
                    <div className="flex flex-1 items-center justify-between px-4">
                        <span className="font-bold text-gray-700">주공정표 (Level 2)</span>
                        <button
                            onClick={onBackToMaster}
                            className="rounded bg-gray-200 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-300"
                        >
                            ← 공구 공정표로
                        </button>
                    </div>
                    {renderColumnHeaders()}
                </div>

                {/* Resize Overlay */}
                {resizingIndex !== null && (
                    <div className="fixed inset-0 z-50 cursor-col-resize" />
                )}

                {/* Body */}
                <div ref={ref} className="relative flex-1 overflow-auto">
                    {/* Milestone Lane Spacer */}
                    <div
                        className="border-b border-gray-200 bg-gray-50/50"
                        style={{ height: MILESTONE_LANE_HEIGHT, minWidth: totalWidth }}
                    />

                    {/* Task Rows */}
                        <div 
                            style={{ 
                                minWidth: totalWidth,
                                height: isVirtualized ? totalHeight : undefined,
                                position: 'relative',
                            }}
                        >
                            {(isVirtualized ? virtualRows : tasks.map((_, i) => ({ index: i, start: i * ROW_HEIGHT, size: ROW_HEIGHT, key: i }))).map((row) => {
                                const task = tasks[row.index];
                                if (!task) return null;
                                
                                return (
                                    <div
                                        key={row.key}
                                        className="box-border flex items-center border-b border-gray-100 transition-colors hover:bg-gray-50"
                                        style={{ 
                                            height: ROW_HEIGHT,
                                            ...(isVirtualized ? {
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                transform: `translateY(${row.start}px)`,
                                            } : {}),
                                        }}
                                    >
                                        {/* Task Name */}
                                        <div
                                            className="flex shrink-0 items-center overflow-hidden border-r border-gray-100 px-4"
                                            style={{ width: columns[0].width }}
                                        >
                                            <span className="truncate text-sm text-gray-700">
                                                {task.name}
                                            </span>
                                        </div>

                                        {/* Net Work Days Input */}
                                        <div
                                            className="flex shrink-0 items-center justify-center border-r border-gray-100 px-2"
                                            style={{ width: columns[1].width }}
                                        >
                                            {task.task ? (
                                                <input
                                                    type="number"
                                                    className="w-full max-w-[60px] rounded border border-gray-300 bg-white px-2 py-1 text-center text-sm text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                                    value={task.task.netWorkDays}
                                                    onChange={(e) => {
                                                        const val = parseInt(e.target.value) || 0;
                                                        handleDurationChange(task, 'netWorkDays', val);
                                                    }}
                                                />
                                            ) : (
                                                <span className="text-sm text-gray-400">-</span>
                                            )}
                                        </div>

                                        {/* Indirect Work Days Input */}
                                        <div
                                            className="flex shrink-0 items-center justify-center border-r border-gray-100 px-2"
                                            style={{ width: columns[2].width }}
                                        >
                                            {task.task ? (
                                                <input
                                                    type="number"
                                                    className="w-full max-w-[60px] rounded border border-gray-300 bg-white px-2 py-1 text-center text-sm text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                                    value={task.task.indirectWorkDays}
                                                    onChange={(e) => {
                                                        const val = parseInt(e.target.value) || 0;
                                                        handleDurationChange(task, 'indirectWorkDays', val);
                                                    }}
                                                />
                                            ) : (
                                                <span className="text-sm text-gray-400">-</span>
                                            )}
                                        </div>

                                        {/* Start Date */}
                                        <div
                                            className="flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-gray-500"
                                            style={{ width: columns[3].width }}
                                        >
                                            {format(task.startDate, 'yyyy-MM-dd')}
                                        </div>

                                        {/* End Date */}
                                        <div
                                            className="flex shrink-0 items-center justify-center text-xs text-gray-500"
                                            style={{ width: columns[4].width }}
                                        >
                                            {format(task.endDate, 'yyyy-MM-dd')}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                </div>
            </div>
        );
    }
);

GanttSidebar.displayName = 'GanttSidebar';
