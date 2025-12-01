'use client';

import { forwardRef, useMemo, useCallback } from 'react';
import { format } from 'date-fns';
import { ChevronRight, ChevronDown } from 'lucide-react';
import {
    ConstructionTask,
    ViewMode,
    GANTT_LAYOUT,
} from '../types';
import type { VirtualRow } from '../hooks/useGanttVirtualization';

const { ROW_HEIGHT, HEADER_HEIGHT, MILESTONE_LANE_HEIGHT } = GANTT_LAYOUT;

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
 */
export const GanttSidebar = forwardRef<HTMLDivElement, GanttSidebarProps>(
    ({ tasks, allTasks, viewMode, expandedIds, onToggle, onTaskClick, onBackToMaster, onTaskUpdate, virtualRows, totalHeight }, ref) => {
        // 가상화가 활성화되었는지 확인
        const isVirtualized = virtualRows && virtualRows.length > 0;
        // Master View 컬럼
        const masterColumns = useMemo(() => [
            { id: 'name', label: 'CP명', width: 180 },
            { id: 'total', label: '총 공기', width: 80 },
            { id: 'workDays', label: '작업일수', width: 80 },
        ], []);

        // Detail View 컬럼
        const detailColumns = useMemo(() => [
            { id: 'name', label: '단위공정명', width: 150 },
            { id: 'netWork', label: '순작업일', width: 80 },
            { id: 'indirect', label: '간접일', width: 80 },
            { id: 'startDate', label: '시작일', width: 100 },
            { id: 'endDate', label: '종료일', width: 100 },
        ], []);

        const columns = viewMode === 'MASTER' ? masterColumns : detailColumns;
        const totalWidth = columns.reduce((sum, col) => sum + col.width, 0);

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
                        <div className="flex h-[32px] border-t border-gray-200">
                            {columns.map((col, idx) => (
                                <div
                                    key={col.id}
                                    className={`flex shrink-0 items-center justify-center text-xs font-medium text-gray-600 ${
                                        idx < columns.length - 1 ? 'border-r border-gray-200' : ''
                                    }`}
                                    style={{ width: col.width }}
                                >
                                    {col.label}
                                </div>
                            ))}
                        </div>
                    </div>

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
                    <div className="flex h-[32px] border-t border-gray-200 text-xs font-medium text-gray-600">
                        {columns.map((col, idx) => (
                            <div
                                key={col.id}
                                className={`flex shrink-0 items-center justify-center ${
                                    idx < columns.length - 1 ? 'border-r border-gray-200' : ''
                                }`}
                                style={{ width: col.width }}
                            >
                                {col.label}
                            </div>
                        ))}
                    </div>
                </div>

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
