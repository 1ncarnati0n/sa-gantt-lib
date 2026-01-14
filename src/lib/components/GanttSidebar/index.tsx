'use client';

import { forwardRef, useMemo, useState, useCallback, useEffect, memo } from 'react';
import { addDays } from 'date-fns';
import {
    ConstructionTask,
    GANTT_LAYOUT,
    CriticalPathSummary,
} from '../../types';
import { calculateCriticalPath } from '../../utils/criticalPathUtils';
import { collectDescendantTasks } from '../../utils/groupUtils';
import { GanttSidebarContextMenu } from '../GanttSidebarContextMenu';
import { GanttSidebarNewTaskForm } from '../GanttSidebarNewTaskForm';
import { GanttSidebarNewCPForm } from '../GanttSidebarNewCPForm';

// Sub-components
import { SidebarHeader } from './SidebarHeader';
import { SidebarRowMaster } from './SidebarRowMaster';
import { SidebarRowDetail } from './SidebarRowDetail';
import { SidebarRowUnified } from './SidebarRowUnified';

// Hooks
import {
    useSidebarColumns,
    useSidebarDragDrop,
    useMultiSelect,
    useClipboard,
    useInlineEdit,
} from './hooks';

// Types
import type { GanttSidebarProps } from './types';

const { ROW_HEIGHT, MILESTONE_LANE_HEIGHT } = GANTT_LAYOUT;

export const GanttSidebar = memo(forwardRef<HTMLDivElement, GanttSidebarProps>(
    ({
        tasks,
        allTasks,
        viewMode,
        expandedIds,
        onToggle,
        onTaskClick,
        onTaskUpdate,
        onTaskCreate,
        onTaskReorder,
        activeCPId,
        holidays = [],
        calendarSettings,
        virtualRows,
        totalHeight,
        onTotalWidthChange,
        onTaskGroup,
        onTaskUngroup,
        onTaskDelete,
        onTaskMove,
        isAddingTask = false,
        onCancelAddTask,
        isAddingCP = false,
        onCancelAddCP,
        onTaskDoubleClick,
        renderMode = 'all',
        rowHeight,
    }, ref) => {
        const effectiveRowHeight = rowHeight ?? ROW_HEIGHT;
        const isVirtualized = virtualRows && virtualRows.length > 0;

        // ====================================
        // Performance: O(1) 조회를 위한 Map 구조
        // find(), some() 호출을 Map.get(), Map.has()로 대체하여 O(n²) → O(n) 최적화
        // ====================================

        // Task ID → Task 매핑 (parentTask 조회용)
        const taskMap = useMemo(() =>
            new Map(allTasks.map(t => [t.id, t])),
            [allTasks]
        );

        // 동적 행 높이 계산 함수: CP/Block은 항상 30px, Group/TASK는 effectiveRowHeight
        const getRowHeight = useCallback((task: ConstructionTask) => {
            if (task.type === 'CP') {
                return ROW_HEIGHT;
            }
            // Block 판별: GROUP이면서 부모가 CP가 아닌 경우
            if (task.type === 'GROUP') {
                const parent = task.parentId ? taskMap.get(task.parentId) : null;
                const isBlock = !parent || parent.type !== 'CP';
                if (isBlock) return ROW_HEIGHT;  // Block은 항상 30px
            }
            return effectiveRowHeight;
        }, [effectiveRowHeight, taskMap]);

        // Parent ID → 자식 수 매핑 (canExpand 판단용)
        const childrenCountMap = useMemo(() => {
            const map = new Map<string, number>();
            allTasks.forEach(t => {
                if (t.parentId) {
                    map.set(t.parentId, (map.get(t.parentId) || 0) + 1);
                }
            });
            return map;
        }, [allTasks]);

        // CP별 Critical Path 요약 계산 (Master View용)
        const cpSummaryMap = useMemo(() => {
            const map = new Map<string, CriticalPathSummary>();
            if (viewMode !== 'MASTER') return map;

            allTasks.forEach(task => {
                if (task.type === 'CP') {
                    // 통합된 collectDescendantTasks 사용 (wbsLevel: 2 필터링)
                    const childTasks = collectDescendantTasks(task.id, allTasks, { wbsLevel: 2 });
                    const summary = calculateCriticalPath(
                        childTasks,
                        holidays,
                        calendarSettings || { workOnSaturdays: true, workOnSundays: false, workOnHolidays: false }
                    );
                    map.set(task.id, summary);
                }
            });

            return map;
        }, [viewMode, allTasks, holidays, calendarSettings]);

        // Hooks
        const {
            columns,
            totalWidth,
            dragHandleWidth,
            resizingIndex,
            handleColumnResizeStart,
            handleColumnResizeDoubleClick,
            getGroupDepth,
            getMasterGroupDepth,
            getUnifiedDepth,
        } = useSidebarColumns({
            viewMode,
            tasks,
            allTasks,
            activeCPId,
            cpSummaryMap,
            onTotalWidthChange,
            onTaskReorder,
        });

        const {
            draggedTaskId,
            dragOverTaskId,
            dragOverPosition,
            handleDragStart,
            handleDragOver,
            handleDragLeave,
            handleDrop,
            handleDragEnd,
        } = useSidebarDragDrop({ tasks, onTaskReorder, onTaskMove });

        const {
            selectedTaskIds,
            focusedTaskId,
            handleRowClick,
            clearSelection,
            selectTask,
        } = useMultiSelect({ tasks, draggedTaskId });

        useClipboard({
            selectedTaskIds,
            allTasks,
            viewMode,
            activeCPId,
            onTaskCreate,
        });

        const {
            editingTaskId,
            editingName,
            setEditingName,
            editInputRef,
            handleStartEdit,
            handleStartRename,
            handleSaveEdit,
            handleEditKeyDown,
        } = useInlineEdit({ tasks, onTaskUpdate });

        // 컨텍스트 메뉴 상태
        const [contextMenu, setContextMenu] = useState<{ x: number; y: number; taskId: string } | null>(null);

        // 일수 입력 필드 상태
        const [editingDays, setEditingDays] = useState<{ taskId: string; field: string; value: string } | null>(null);

        // 컨텍스트 메뉴 핸들러
        const handleContextMenu = useCallback((e: React.MouseEvent, task: ConstructionTask) => {
            e.preventDefault();
            if (!selectedTaskIds.has(task.id)) {
                selectTask(task.id);
            }
            setContextMenu({
                x: e.clientX,
                y: e.clientY,
                taskId: task.id,
            });
        }, [selectedTaskIds, selectTask]);

        // 외부 클릭 시 컨텍스트 메뉴 닫기
        useEffect(() => {
            const handleClickOutside = () => setContextMenu(null);
            if (contextMenu) {
                document.addEventListener('click', handleClickOutside);
                return () => document.removeEventListener('click', handleClickOutside);
            }
        }, [contextMenu]);

        // 키보드 단축키 (ESC)
        useEffect(() => {
            const handleKeyDown = (e: KeyboardEvent) => {
                if (e.key === 'Escape') {
                    clearSelection();
                    setContextMenu(null);
                }
            };
            document.addEventListener('keydown', handleKeyDown);
            return () => document.removeEventListener('keydown', handleKeyDown);
        }, [clearSelection]);

        // 일수 변경 핸들러 (순작업 날짜 고정, 간접작업은 앞뒤로 확장)
        const handleDurationChange = useCallback((
            task: ConstructionTask,
            field: 'indirectWorkDaysPre' | 'netWorkDays' | 'indirectWorkDaysPost',
            value: number
        ) => {
            if (!task.task || !onTaskUpdate) return;

            const oldPreDays = task.task.indirectWorkDaysPre;
            const oldPostDays = task.task.indirectWorkDaysPost;

            // 순작업 시작일 계산 (현재 startDate + 기존 선간접)
            const netWorkStartDate = addDays(task.startDate, oldPreDays);
            // 순작업 종료일 계산 (현재 endDate - 기존 후간접)
            const netWorkEndDate = addDays(task.endDate, -oldPostDays);

            let newStartDate = task.startDate;
            let newEndDate = task.endDate;

            if (field === 'indirectWorkDaysPre') {
                // 선간접 변경: 순작업 시작일 고정, startDate 조정
                newStartDate = addDays(netWorkStartDate, -value);
            } else if (field === 'indirectWorkDaysPost') {
                // 후간접 변경: 순작업 종료일 고정, endDate 조정
                newEndDate = addDays(netWorkEndDate, value);
            }
            // netWorkDays 변경 시: startDate 고정, endDate는 타임라인에서 재계산

            const updatedTask: ConstructionTask = {
                ...task,
                startDate: newStartDate,
                endDate: newEndDate,
                task: { ...task.task, [field]: value },
            };
            onTaskUpdate(updatedTask);
        }, [onTaskUpdate]);

        // Row data (비가상화 시 동적 높이 누적 계산)
        const rowData = useMemo(() => {
            if (isVirtualized) {
                return virtualRows!;
            }
            // 비가상화: 각 행의 높이를 누적 계산
            let cumulativeStart = 0;
            return tasks.map((task, i) => {
                const size = getRowHeight(task);
                const row = { index: i, start: cumulativeStart, size, key: i };
                cumulativeStart += size;
                return row;
            });
        }, [isVirtualized, virtualRows, tasks, getRowHeight]);

        // 동적 높이 기반 총 높이 계산
        const dynamicTotalHeight = useMemo(() => {
            if (rowData.length === 0) return 100;
            const lastRow = rowData[rowData.length - 1];
            return lastRow.start + lastRow.size + 100;
        }, [rowData]);

        // Active CP와 상위 그룹 정보 계산
        const { activeGroupName, activeCPName } = useMemo(() => {
            if (!activeCPId) return { activeGroupName: undefined, activeCPName: undefined };

            const activeCP = allTasks.find(t => t.id === activeCPId);
            if (!activeCP) return { activeGroupName: undefined, activeCPName: undefined };

            const cpName = activeCP.name;

            // CP의 parentId로 상위 GROUP 찾기
            if (!activeCP.parentId) {
                return { activeGroupName: undefined, activeCPName: cpName };
            }

            const parentGroup = allTasks.find(t => t.id === activeCP.parentId);

            return {
                activeGroupName: parentGroup?.name,
                activeCPName: cpName,
            };
        }, [activeCPId, allTasks]);

        // ====================================
        // Header Only 렌더링 (스크롤 외부용)
        // ====================================
        const renderHeaderOnly = () => (
            <div
                className="flex flex-col select-none shrink-0"
                style={{ backgroundColor: 'var(--gantt-bg-primary)' }}
            >
                <SidebarHeader
                    viewMode={viewMode}
                    activeGroupName={activeGroupName}
                    activeCPName={activeCPName}
                    columns={columns}
                    resizingIndex={resizingIndex}
                    selectedTaskIds={selectedTaskIds}
                    tasks={tasks}
                    onColumnResizeStart={handleColumnResizeStart}
                    onColumnResizeDoubleClick={handleColumnResizeDoubleClick}
                    onTaskGroup={onTaskGroup}
                    onTaskUngroup={onTaskUngroup}
                    onClearSelection={clearSelection}
                />

                {/* Milestone Lane Spacer */}
                <div
                    className="flex items-center"
                    style={{
                        height: MILESTONE_LANE_HEIGHT,
                        minWidth: totalWidth,
                        backgroundColor: 'var(--gantt-bg-secondary)',
                        borderBottom: '1px solid var(--gantt-border-light)',
                    }}
                >
                    {columns.map((col, idx) => (
                        <div
                            key={col.id}
                            className="flex shrink-0 items-center justify-center text-xs"
                            style={{
                                width: col.width,
                                color: 'var(--gantt-text-primary)',
                                borderRight: '1px solid var(--gantt-border-light)',
                            }}
                        >
                            {idx === 0 && 'Milestone'}
                        </div>
                    ))}
                </div>

                {resizingIndex !== null && (
                    <div className="fixed inset-0 z-50 cursor-col-resize" />
                )}
            </div>
        );

        // ====================================
        // Content Only 렌더링 (스크롤 내부용)
        // ====================================
        const renderContentOnly = (content: React.ReactNode) => (
            <div
                ref={ref}
                className="relative select-none"
                style={{ backgroundColor: 'var(--gantt-bg-primary)' }}
                onClick={clearSelection}
            >
                <div
                    style={{
                        minWidth: totalWidth,
                        height: isVirtualized ? totalHeight : dynamicTotalHeight,
                        position: 'relative',
                    }}
                    onClick={clearSelection}
                >
                    {content}
                </div>

                {contextMenu && (
                    <GanttSidebarContextMenu
                        x={contextMenu.x}
                        y={contextMenu.y}
                        taskId={contextMenu.taskId}
                        selectedTaskIds={selectedTaskIds}
                        tasks={tasks}
                        onTaskGroup={onTaskGroup}
                        onTaskUngroup={onTaskUngroup}
                        onTaskDelete={onTaskDelete}
                        onStartRename={handleStartRename}
                        onClose={() => setContextMenu(null)}
                        onDeselect={clearSelection}
                    />
                )}
            </div>
        );

        // ====================================
        // Full 렌더링 (기존 방식, 하위 호환용)
        // ====================================
        const renderContainer = (content: React.ReactNode) => (
            <div
                className="flex h-full flex-col select-none"
                style={{ backgroundColor: 'var(--gantt-bg-primary)' }}
            >
                <SidebarHeader
                    viewMode={viewMode}
                    activeGroupName={activeGroupName}
                    activeCPName={activeCPName}
                    columns={columns}
                    resizingIndex={resizingIndex}
                    selectedTaskIds={selectedTaskIds}
                    tasks={tasks}
                    onColumnResizeStart={handleColumnResizeStart}
                    onColumnResizeDoubleClick={handleColumnResizeDoubleClick}
                    onTaskGroup={onTaskGroup}
                    onTaskUngroup={onTaskUngroup}
                    onClearSelection={clearSelection}
                />

                {resizingIndex !== null && (
                    <div className="fixed inset-0 z-50 cursor-col-resize" />
                )}

                <div
                    ref={ref}
                    className="relative flex-1"
                    onClick={clearSelection}
                >
                    {/* Milestone Lane Spacer */}
                    <div
                        className="flex items-center"
                        style={{
                            height: MILESTONE_LANE_HEIGHT,
                            minWidth: totalWidth,
                            backgroundColor: 'var(--gantt-bg-secondary)',
                            borderBottom: '1px solid var(--gantt-border-light)',
                        }}
                    >
                        {columns.map((col, idx) => (
                            <div
                                key={col.id}
                                className="flex shrink-0 items-center justify-center text-xs"
                                style={{
                                    width: col.width,
                                    color: 'var(--gantt-text-primary)',
                                    borderRight: '1px solid var(--gantt-border-light)',
                                }}
                            >
                                {idx === 0 && 'Milestone'}
                            </div>
                        ))}
                    </div>

                    {/* Task Rows */}
                    <div
                        style={{
                            minWidth: totalWidth,
                            height: isVirtualized ? totalHeight : dynamicTotalHeight,
                            position: 'relative',
                        }}
                        onClick={clearSelection}
                    >
                        {content}
                    </div>
                </div>

                {contextMenu && (
                    <GanttSidebarContextMenu
                        x={contextMenu.x}
                        y={contextMenu.y}
                        taskId={contextMenu.taskId}
                        selectedTaskIds={selectedTaskIds}
                        tasks={tasks}
                        onTaskGroup={onTaskGroup}
                        onTaskUngroup={onTaskUngroup}
                        onTaskDelete={onTaskDelete}
                        onStartRename={handleStartRename}
                        onClose={() => setContextMenu(null)}
                        onDeselect={clearSelection}
                    />
                )}
            </div>
        );

        // ====================================
        // renderMode에 따른 분기 함수
        // ====================================
        const renderByMode = (content: React.ReactNode) => {
            if (renderMode === 'header') {
                return renderHeaderOnly();
            }
            if (renderMode === 'content') {
                return renderContentOnly(content);
            }
            return renderContainer(content);
        };

        // Master View
        if (viewMode === 'MASTER') {
            return renderByMode(
                <>
                    {rowData.map((row) => {
                        const task = tasks[row.index];
                        if (!task) return null;

                        const isGroup = task.type === 'GROUP';
                        // O(1) 조회: childrenCountMap 사용
                        const canExpand = isGroup && (childrenCountMap.get(task.id) || 0) > 0;
                        const cpSummary = task.type === 'CP' ? cpSummaryMap.get(task.id) || null : null;

                        return (
                            <SidebarRowMaster
                                key={row.key}
                                task={task}
                                rowIndex={row.index}
                                isVirtualized={isVirtualized!}
                                rowStart={row.start}
                                isDragging={draggedTaskId === task.id}
                                isDragOver={dragOverTaskId === task.id}
                                dragOverPosition={dragOverPosition}
                                isSelected={selectedTaskIds.has(task.id)}
                                isFocused={focusedTaskId === task.id}
                                isExpanded={expandedIds.has(task.id)}
                                canExpand={canExpand}
                                indent={getMasterGroupDepth(task) * 12}
                                isGroup={isGroup}
                                onDragStart={handleDragStart}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                                onDragEnd={handleDragEnd}
                                onRowClick={handleRowClick}
                                onContextMenu={handleContextMenu}
                                onToggle={onToggle}
                                editingTaskId={editingTaskId}
                                editingName={editingName}
                                setEditingName={setEditingName}
                                editInputRef={editInputRef}
                                onStartEdit={handleStartEdit}
                                onSaveEdit={handleSaveEdit}
                                onEditKeyDown={handleEditKeyDown}
                                columns={columns}
                                dragHandleWidth={dragHandleWidth}
                                onTaskReorder={onTaskReorder}
                                onTaskMove={onTaskMove}
                                onTaskUpdate={onTaskUpdate}
                                cpSummary={cpSummary}
                                onTaskClick={onTaskClick}
                            />
                        );
                    })}
                    {isAddingCP && (
                        <GanttSidebarNewCPForm
                            columns={columns}
                            tasks={tasks}
                            onTaskCreate={onTaskCreate}
                            onCancel={onCancelAddCP || (() => { })}
                            isVirtualized={isVirtualized!}
                            virtualRowIndex={tasks.length}
                            dragHandleWidth={dragHandleWidth}
                        />
                    )}
                </>
            );
        }

        // Unified View
        if (viewMode === 'UNIFIED') {
            return renderByMode(
                <>
                    {rowData.map((row) => {
                        const task = tasks[row.index];
                        if (!task) return null;

                        const isCP = task.type === 'CP';
                        const isGroup = task.type === 'GROUP';
                        // O(1) 조회: taskMap, childrenCountMap 사용
                        // 블록: GROUP이면서 부모가 CP가 아닌 경우 (마스터뷰의 그룹)
                        const parentTask = task.parentId ? taskMap.get(task.parentId) : null;
                        const isBlock = isGroup && (!parentTask || parentTask.type !== 'CP');
                        const canExpand = (isCP || isGroup) && (childrenCountMap.get(task.id) || 0) > 0;

                        return (
                            <SidebarRowUnified
                                key={row.key}
                                task={task}
                                rowIndex={row.index}
                                isVirtualized={isVirtualized!}
                                rowStart={row.start}
                                isDragging={draggedTaskId === task.id}
                                isDragOver={dragOverTaskId === task.id}
                                dragOverPosition={dragOverPosition}
                                isSelected={selectedTaskIds.has(task.id)}
                                isFocused={focusedTaskId === task.id}
                                isExpanded={expandedIds.has(task.id)}
                                canExpand={canExpand}
                                indent={getUnifiedDepth(task) * 16}
                                isGroup={isGroup && !isBlock}
                                isCP={isCP}
                                isBlock={isBlock}
                                onDragStart={handleDragStart}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                                onDragEnd={handleDragEnd}
                                onRowClick={handleRowClick}
                                onContextMenu={handleContextMenu}
                                onToggle={onToggle}
                                editingTaskId={editingTaskId}
                                editingName={editingName}
                                setEditingName={setEditingName}
                                editInputRef={editInputRef}
                                onStartEdit={handleStartEdit}
                                onSaveEdit={handleSaveEdit}
                                onEditKeyDown={handleEditKeyDown}
                                columns={columns}
                                dragHandleWidth={dragHandleWidth}
                                onTaskReorder={onTaskReorder}
                                onTaskMove={onTaskMove}
                                onTaskUpdate={onTaskUpdate}
                                onTaskClick={onTaskClick}
                                rowHeight={row.size}
                                onTaskDoubleClick={onTaskDoubleClick}
                            />
                        );
                    })}
                </>
            );
        }

        // Detail View
        return renderByMode(
            <>
                {rowData.map((row) => {
                    const task = tasks[row.index];
                    if (!task) return null;

                    const isGroup = task.type === 'GROUP';
                    // O(1) 조회: childrenCountMap 사용
                    const canExpand = isGroup && (childrenCountMap.get(task.id) || 0) > 0;

                    return (
                        <SidebarRowDetail
                            key={row.key}
                            task={task}
                            rowIndex={row.index}
                            isVirtualized={isVirtualized!}
                            rowStart={row.start}
                            isDragging={draggedTaskId === task.id}
                            isDragOver={dragOverTaskId === task.id}
                            dragOverPosition={dragOverPosition}
                            isSelected={selectedTaskIds.has(task.id)}
                            isFocused={focusedTaskId === task.id}
                            isExpanded={expandedIds.has(task.id)}
                            canExpand={canExpand}
                            indent={getGroupDepth(task) * 12}
                            isGroup={isGroup}
                            onDragStart={handleDragStart}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            onDragEnd={handleDragEnd}
                            onRowClick={handleRowClick}
                            onContextMenu={handleContextMenu}
                            onToggle={onToggle}
                            editingTaskId={editingTaskId}
                            editingName={editingName}
                            setEditingName={setEditingName}
                            editInputRef={editInputRef}
                            onStartEdit={handleStartEdit}
                            onSaveEdit={handleSaveEdit}
                            onEditKeyDown={handleEditKeyDown}
                            columns={columns}
                            dragHandleWidth={dragHandleWidth}
                            onTaskReorder={onTaskReorder}
                            onTaskMove={onTaskMove}
                            onTaskUpdate={onTaskUpdate}
                            onTaskDoubleClick={onTaskDoubleClick}
                            editingDays={editingDays}
                            setEditingDays={setEditingDays}
                            onDurationChange={handleDurationChange}
                            rowHeight={row.size}
                        />
                    );
                })}
                {isAddingTask && activeCPId && (
                    <GanttSidebarNewTaskForm
                        columns={columns}
                        tasks={tasks}
                        activeCPId={activeCPId}
                        onTaskCreate={onTaskCreate}
                        onCancel={onCancelAddTask || (() => { })}
                        isVirtualized={isVirtualized!}
                        virtualRowIndex={tasks.length}
                    />
                )}
            </>
        );
    }
));

GanttSidebar.displayName = 'GanttSidebar';
