'use client';

import { useRef, useCallback, useMemo, useState, useEffect } from 'react';
import { addDays, differenceInDays } from 'date-fns';
import { isHoliday, snapToWorkingDay, KOREAN_HOLIDAYS_ALL } from '../../utils/dateUtils';
import { GanttSidebar } from '../GanttSidebar';
import { GanttTimeline, BarDragResult } from '../GanttTimeline';
import { MilestoneEditModal } from '../MilestoneEditModal';
import { TaskEditModal } from '../TaskEditModal';
import { useGanttViewState, useGanttViewActions, useGanttSidebar, useGanttExpansion, useGanttSelection, useGanttCompactMode } from '../../store/useGanttStore';
import { useGanttVirtualization } from '../../hooks/useGanttVirtualization';
import { useTaskFocus } from '../../hooks/useTaskFocus';
import { useKeyboardNavigation } from '../../hooks/useKeyboardNavigation';
import { calculateDateRange } from '../../utils/dateUtils';
import {
    GanttChartProps,
    ConstructionTask,
    Milestone,
    CalendarSettings,
    GroupDragResult,
    ZOOM_CONFIG,
    getLayoutValues,
    ViewMode,
} from '../../types';

// Sub-components
import { GanttHeader } from './GanttHeader';

// Hooks
import { useGanttInit, useScrollToDate, useSidebarResize } from './hooks';

export type { BarDragResult };

const DEFAULT_CALENDAR_SETTINGS: CalendarSettings = {
    workOnSaturdays: true,  // 건설 현장: 토요일 작업
    workOnSundays: false,   // 일요일 휴일
    workOnHolidays: false,  // 공휴일 휴일
};

export function GanttChart({
    tasks,
    milestones = [],
    holidays = KOREAN_HOLIDAYS_ALL,
    calendarSettings = DEFAULT_CALENDAR_SETTINGS,
    initialView = 'MASTER',
    initialZoomLevel = 'MONTH',
    initialExpandedIds,
    onTaskUpdate,
    onTaskCreate,
    onTaskDelete,
    onTaskReorder,
    onTaskGroup,
    onTaskUngroup,
    onTaskMove,
    onGroupDrag,
    onViewChange,
    // 앵커 종속성 Props
    anchorDependencies = [],
    onAnchorDependencyCreate,
    onAnchorDependencyDelete,
    onAnchorDependencyDrag,
    onCycleDetected,
    onMilestoneCreate,
    onMilestoneUpdate,
    onMilestoneDelete,
    onSave,
    onReset,
    hasUnsavedChanges,
    saveStatus,
    onExport,
    onExportExcel,
    onImport,
    loadedFileName,
    onError,
    className,
    style,
}: GanttChartProps) {
    // Store State & Actions
    const { viewMode, activeCPId, zoomLevel } = useGanttViewState();
    const { setViewMode, setZoomLevel } = useGanttViewActions();
    const { sidebarWidth, setSidebarWidth } = useGanttSidebar();
    const { expandedTaskIds, toggleTask, expandAll, collapseAll, setExpandedTaskIds } = useGanttExpansion();
    const { focusedTaskId } = useGanttSelection();
    const { isCompactMode, toggleCompactMode } = useGanttCompactMode();

    // Compact Mode Layout Values (Detail/Unified View)
    const layoutValues = useMemo(() =>
        getLayoutValues((viewMode === 'DETAIL' || viewMode === 'UNIFIED') && isCompactMode),
        [viewMode, isCompactMode]
    );

    // Refs
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const headerTimelineRef = useRef<HTMLDivElement>(null);

    // Local States
    const [isAddingTask, setIsAddingTask] = useState(false);
    const [isAddingCP, setIsAddingCP] = useState(false);
    const [editingMilestone, setEditingMilestone] = useState<Milestone | null>(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isNewMilestone, setIsNewMilestone] = useState(false);
    const [editingTask, setEditingTask] = useState<ConstructionTask | null>(null);
    const [isTaskEditModalOpen, setIsTaskEditModalOpen] = useState(false);
    const [sidebarTotalWidth, setSidebarTotalWidth] = useState<number | null>(null);

    // 좌우 스크롤 동기화 핸들러
    const handleContentScroll = useCallback(() => {
        if (scrollRef.current && headerTimelineRef.current) {
            headerTimelineRef.current.scrollLeft = scrollRef.current.scrollLeft;
        }
    }, []);

    // Initialize
    useGanttInit({
        tasks,
        initialView,
        initialZoomLevel,
        initialExpandedIds,
        setViewMode,
        setZoomLevel,
        expandAll,
        collapseAll,
    });

    // Parent → Children 맵
    const childrenMap = useMemo(() => {
        const map = new Map<string | null, ConstructionTask[]>();
        tasks.forEach(task => {
            const parentId = task.parentId;
            if (!map.has(parentId)) {
                map.set(parentId, []);
            }
            map.get(parentId)!.push(task);
        });
        return map;
    }, [tasks]);

    // Task ID → Task 매핑 (O(1) 조회용)
    const taskMap = useMemo(() =>
        new Map(tasks.map(t => [t.id, t])),
        [tasks]
    );

    // 뷰에 따른 태스크 필터링
    const visibleTasks = useMemo(() => {
        if (viewMode === 'MASTER') {
            const visible: ConstructionTask[] = [];
            const collectVisible = (parentId: string | null) => {
                const children = childrenMap.get(parentId) || [];
                children.forEach(task => {
                    if (task.wbsLevel !== 1) return;
                    if (parentId === null || expandedTaskIds.has(parentId)) {
                        visible.push(task);
                        if (task.type === 'GROUP') {
                            collectVisible(task.id);
                        }
                    }
                });
            };
            collectVisible(null);
            return visible;
        } else if (viewMode === 'DETAIL') {
            const visible: ConstructionTask[] = [];
            const collectVisible = (parentId: string | null) => {
                const children = childrenMap.get(parentId) || [];
                children.forEach(task => {
                    if (task.wbsLevel !== 2) return;
                    if (parentId === activeCPId || expandedTaskIds.has(parentId!)) {
                        visible.push(task);
                        if (task.type === 'GROUP') {
                            collectVisible(task.id);
                        }
                    }
                });
            };
            collectVisible(activeCPId!);
            return visible;
        } else {
            // UNIFIED: CP(Level 1)와 Task(Level 2)를 계층 구조로 표시
            const visible: ConstructionTask[] = [];
            const collectUnified = (parentId: string | null) => {
                const children = childrenMap.get(parentId) || [];
                children.forEach(task => {
                    // Level 1 (CP) 또는 Level 2 (Task/GROUP)
                    if (task.wbsLevel === 1) {
                        // CP는 항상 표시 (루트 또는 확장된 부모)
                        if (parentId === null || expandedTaskIds.has(parentId)) {
                            visible.push(task);
                            // CP가 확장되어 있으면 하위 Level 2 수집
                            if (expandedTaskIds.has(task.id)) {
                                collectUnified(task.id);
                            }
                        }
                    } else if (task.wbsLevel === 2) {
                        // Level 2는 재귀 호출을 통해 확장된 부모의 자식만 도달
                        visible.push(task);
                        // GROUP이면 재귀적으로 하위 수집
                        if (task.type === 'GROUP' && expandedTaskIds.has(task.id)) {
                            collectUnified(task.id);
                        }
                    }
                });
            };
            collectUnified(null);
            return visible;
        }
    }, [childrenMap, viewMode, activeCPId, expandedTaskIds]);

    // Virtualization (동적 행 높이: GROUP은 30px, TASK는 compact ? 12px : 30px)
    const { virtualRows, totalHeight, virtualizer } = useGanttVirtualization({
        containerRef: scrollRef,
        count: visibleTasks.length,
        overscan: 30, // 스크롤 시 렌더링 지연 방지를 위해 오버스캔 증가
        rowHeight: layoutValues.rowHeight,
        tasks: visibleTasks, // 동적 행 높이 계산을 위해 tasks 전달
    });

    // 날짜 범위 계산 (포커싱에 필요)
    const { minDate } = useMemo(() =>
        calculateDateRange(tasks, milestones, 60),
        [tasks, milestones]
    );

    // Task 포커스 훅
    const { focusTask } = useTaskFocus({
        scrollContainerRef: scrollRef,
        virtualizer,
        visibleTasks,
        allTasks: tasks,
        minDate,
        pixelsPerDay: ZOOM_CONFIG[zoomLevel].pixelsPerDay,
        sidebarWidth,
    });

    // Sidebar Resize
    const { isResizing, handleResizeStart, handleResizeDoubleClick } = useSidebarResize({
        sidebarWidth,
        setSidebarWidth,
        viewMode,
        sidebarTotalWidth,
    });

    // Scroll
    const { scrollToFirstTask } = useScrollToDate({
        scrollRef,
        viewMode,
        activeCPId,
        zoomLevel,
        sidebarWidth,
        tasks,
        visibleTasks,
        milestones,
    });

    // Handlers
    const handleViewChange = useCallback((mode: ViewMode, cpId?: string) => {
        setViewMode(mode, cpId);
        onViewChange?.(mode, cpId);
    }, [setViewMode, onViewChange]);

    // ====================================
    // 단계별 접기/펼치기
    // ====================================

    // depth 계산 함수 (viewMode별) - O(1) 조회로 최적화
    const getDepthForTask = useCallback((task: ConstructionTask): number => {
        if (viewMode === 'UNIFIED') {
            // UNIFIED: Block=0, CP=1, DetailGroup=2+
            if (task.type === 'GROUP') {
                // O(1) 조회: taskMap 사용
                const parent = task.parentId ? taskMap.get(task.parentId) : null;
                if (!parent || parent.type !== 'CP') return 0; // Block
                return 2; // Detail Group
            }
            if (task.type === 'CP') return 1;
            return 2; // Task
        }

        // MASTER / DETAIL: GROUP 중첩 깊이 - O(depth) 복잡도
        let depth = 0;
        let currentId: string | null | undefined = task.parentId;
        while (currentId) {
            // O(1) 조회: taskMap 사용 (기존 O(n) find 대체)
            const parent = taskMap.get(currentId);
            if (!parent) break;
            if (parent.type === 'GROUP') depth++;
            currentId = parent.parentId;
        }
        return depth;
    }, [viewMode, taskMap]);

    // 확장 가능한 항목들 (GROUP, CP)
    const expandableItems = useMemo(() => {
        const filterByView = (task: ConstructionTask) => {
            if (viewMode === 'MASTER') {
                return task.wbsLevel === 1 && (task.type === 'GROUP' || task.type === 'CP');
            } else if (viewMode === 'DETAIL') {
                return task.wbsLevel === 2 && task.type === 'GROUP';
            } else {
                // UNIFIED: Block (부모 없는 GROUP), CP, Detail Group 모두
                return task.type === 'GROUP' || task.type === 'CP';
            }
        };

        return tasks
            .filter(filterByView)
            .map(t => ({
                id: t.id,
                depth: getDepthForTask(t),
                parentId: t.parentId,
            }));
    }, [tasks, viewMode, getDepthForTask]);

    // 부모가 확장되어 있는지 확인
    const isParentExpanded = useCallback((taskId: string): boolean => {
        const item = expandableItems.find(i => i.id === taskId);
        if (!item) return false;

        // 부모가 없으면 항상 확장 가능
        if (!item.parentId) return true;

        // 뷰모드에 따라 체크
        if (viewMode === 'DETAIL') {
            // Detail 뷰에서 부모가 activeCPId면 항상 가능
            if (item.parentId === activeCPId) return true;
        }

        // 부모가 확장되어 있어야 함
        return expandedTaskIds.has(item.parentId);
    }, [expandableItems, viewMode, activeCPId, expandedTaskIds]);

    // 단계별 펼치기
    const handleExpandNextLevel = useCallback(() => {
        // 1. 현재 확장된 항목들의 depth 확인
        const expandedDepths = expandableItems
            .filter(item => expandedTaskIds.has(item.id))
            .map(item => item.depth);

        // 2. 다음 레벨 결정
        const currentMaxDepth = expandedDepths.length > 0
            ? Math.max(...expandedDepths)
            : -1;
        const nextDepth = currentMaxDepth + 1;

        // 3. 해당 depth의 항목들 중 부모가 확장된 것만 추가
        const itemsToExpand = expandableItems
            .filter(item => item.depth === nextDepth)
            .filter(item => isParentExpanded(item.id))
            .map(item => item.id);

        if (itemsToExpand.length > 0) {
            const newExpanded = new Set([...expandedTaskIds, ...itemsToExpand]);
            setExpandedTaskIds(newExpanded);
        }
    }, [expandableItems, expandedTaskIds, isParentExpanded, setExpandedTaskIds]);

    // 단계별 접기
    const handleCollapseLastLevel = useCallback(() => {
        // 1. 현재 확장된 항목들의 depth 계산
        const expandedItems = expandableItems.filter(item => expandedTaskIds.has(item.id));

        if (expandedItems.length === 0) return;

        // 2. 가장 깊은 depth 찾기
        const maxDepth = Math.max(...expandedItems.map(item => item.depth));

        // 3. 가장 깊은 depth의 항목들을 확장에서 제거
        const newExpanded = new Set(
            [...expandedTaskIds].filter(id => {
                const item = expandedItems.find(i => i.id === id);
                return item ? item.depth < maxDepth : true;
            })
        );

        setExpandedTaskIds(newExpanded);
    }, [expandableItems, expandedTaskIds, setExpandedTaskIds]);

    const handleTaskClick = useCallback((task: ConstructionTask) => {
        if (viewMode === 'MASTER' && task.type === 'CP') {
            handleViewChange('DETAIL', task.id);
        }
    }, [viewMode, handleViewChange]);

    const handleMilestoneDoubleClick = useCallback((milestone: Milestone) => {
        setEditingMilestone(milestone);
        setIsNewMilestone(false);
        setIsEditModalOpen(true);
    }, []);

    const handleStartAddMilestone = useCallback(() => {
        const newMilestone: Milestone = {
            id: `milestone-${Date.now()}`,
            name: '',
            date: new Date(),
            description: '',
        };
        setEditingMilestone(newMilestone);
        setIsNewMilestone(true);
        setIsEditModalOpen(true);
    }, []);

    // 컨텍스트 메뉴에서 Task 추가 (날짜 지정)
    const handleContextMenuAddTask = useCallback((date: Date) => {
        if (!activeCPId || !onTaskCreate) return;

        const newTask: Partial<ConstructionTask> = {
            id: `task-${Date.now()}`,
            parentId: activeCPId,
            wbsLevel: 2,
            type: 'TASK',
            name: '새 공정',
            startDate: date,
            endDate: date,
            task: {
                netWorkDays: 1,
                indirectWorkDaysPre: 0,
                indirectWorkDaysPost: 0,
            },
            dependencies: [],
        };
        onTaskCreate(newTask);
    }, [activeCPId, onTaskCreate]);

    // 컨텍스트 메뉴에서 마일스톤 추가 (날짜 지정)
    const handleContextMenuAddMilestone = useCallback((date: Date) => {
        const newMilestone: Milestone = {
            id: `milestone-${Date.now()}`,
            name: '',
            date: date,
            description: '',
            milestoneType: viewMode === 'MASTER' ? 'MASTER' : 'DETAIL',
        };
        setEditingMilestone(newMilestone);
        setIsNewMilestone(true);
        setIsEditModalOpen(true);
    }, [viewMode]);

    const handleCloseEditModal = useCallback(() => {
        setIsEditModalOpen(false);
        setEditingMilestone(null);
        setIsNewMilestone(false);
    }, []);

    const handleMilestoneSave = useCallback((updatedMilestone: Milestone) => {
        if (isNewMilestone && onMilestoneCreate) {
            onMilestoneCreate(updatedMilestone);
            // 새 마일스톤 저장 후 isNew를 false로 변경 (삭제 버튼 활성화)
            setIsNewMilestone(false);
        } else if (onMilestoneUpdate) {
            onMilestoneUpdate(updatedMilestone);
        }
        // 모달 닫기는 MilestoneEditModal 내부에서 처리
    }, [isNewMilestone, onMilestoneCreate, onMilestoneUpdate]);

    const handleMilestoneDelete = useCallback((milestoneId: string) => {
        if (onMilestoneDelete) {
            onMilestoneDelete(milestoneId);
        }
        handleCloseEditModal();
    }, [onMilestoneDelete, handleCloseEditModal]);

    const handleTaskDoubleClick = useCallback((task: ConstructionTask) => {
        setEditingTask(task);
        setIsTaskEditModalOpen(true);
    }, []);

    // 키보드 네비게이션 훅 (handleTaskDoubleClick 정의 후에 호출)
    useKeyboardNavigation({
        visibleTasks,
        viewMode,
        onViewChange: handleViewChange,
        focusTask,
        onTaskEdit: handleTaskDoubleClick,
    });

    const handleCloseTaskEditModal = useCallback(() => {
        setIsTaskEditModalOpen(false);
        setEditingTask(null);
    }, []);

    const handleTaskEditSave = useCallback((updatedTask: ConstructionTask) => {
        if (onTaskUpdate) {
            onTaskUpdate(updatedTask);
        }
    }, [onTaskUpdate]);

    const handleTaskEditDelete = useCallback((taskId: string) => {
        if (onTaskDelete) {
            onTaskDelete(taskId);
        }
        handleCloseTaskEditModal();
    }, [onTaskDelete, handleCloseTaskEditModal]);

    // tasks가 변경될 때 editingTask 동기화
    // 의도적으로 tasks만 의존성으로 설정 - 저장 후 hasChanges 계산을 위해
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (editingTask && isTaskEditModalOpen) {
            const updatedTask = tasks.find(t => t.id === editingTask.id);
            if (updatedTask) {
                setEditingTask(updatedTask);
            }
        }
    }, [tasks]);

    // milestones가 변경될 때 editingMilestone 동기화
    // 의도적으로 milestones만 의존성으로 설정 - 저장 후 hasChanges 계산을 위해
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (editingMilestone && isEditModalOpen) {
            const updatedMilestone = milestones.find(m => m.id === editingMilestone.id);
            if (updatedMilestone) {
                setEditingMilestone(updatedMilestone);
            }
        }
    }, [milestones]);

    // Bar Drag Handler
    const handleBarDrag = useCallback(async (result: BarDragResult) => {
        if (!onTaskUpdate) return;

        try {
            const task = tasks.find(t => t.id === result.taskId);
            if (!task || !task.task) return;

            const updatedTask: ConstructionTask = {
                ...task,
                startDate: result.newStartDate,
                endDate: result.newEndDate,
                task: {
                    ...task.task,
                    indirectWorkDaysPre: result.newIndirectWorkDaysPre,
                    indirectWorkDaysPost: result.newIndirectWorkDaysPost,
                    netWorkDays: result.newNetWorkDays,
                },
            };

            await onTaskUpdate(updatedTask);
        } catch (error) {
            console.error('Failed to update task:', error);
            onError?.(error as Error, { action: 'bar_drag', taskId: result.taskId });
        }
    }, [tasks, onTaskUpdate, onError]);

    // Group Drag Handler
    // 통합 스냅: taskUpdates에 이미 계산된 새 시작일을 사용
    const handleGroupDrag = useCallback(async (result: GroupDragResult) => {
        if (!onTaskUpdate && !onGroupDrag) return;

        try {
            if (onGroupDrag) {
                await onGroupDrag(result);
                return;
            }

            if (onTaskUpdate) {
                // taskUpdates가 있으면 그대로 사용 (이미 통합 스냅 적용됨)
                if (result.taskUpdates && result.taskUpdates.length > 0) {
                    for (const update of result.taskUpdates) {
                        const task = tasks.find(t => t.id === update.taskId);
                        if (!task) continue;

                        // 종료일은 시작일 기준으로 동일한 기간 유지
                        const duration = differenceInDays(task.endDate, task.startDate);
                        const newEndDate = addDays(update.newStartDate, duration);

                        const updatedTask: ConstructionTask = {
                            ...task,
                            startDate: update.newStartDate,
                            endDate: newEndDate,
                        };

                        await onTaskUpdate(updatedTask);
                    }
                } else {
                    // fallback: taskUpdates가 없으면 기존 방식 (호환성 유지)
                    const dragDirection: 'left' | 'right' = result.deltaDays >= 0 ? 'right' : 'left';

                    for (const taskId of result.affectedTaskIds) {
                        const task = tasks.find(t => t.id === taskId);
                        if (!task) continue;

                        let newStartDate = addDays(task.startDate, result.deltaDays);

                        if (isHoliday(newStartDate, holidays, calendarSettings)) {
                            newStartDate = snapToWorkingDay(newStartDate, dragDirection, holidays, calendarSettings);
                        }

                        const duration = differenceInDays(task.endDate, task.startDate);
                        const newEndDate = addDays(newStartDate, duration);

                        const updatedTask: ConstructionTask = {
                            ...task,
                            startDate: newStartDate,
                            endDate: newEndDate,
                        };

                        await onTaskUpdate(updatedTask);
                    }
                }
            }
        } catch (error) {
            console.error('Failed to update group tasks:', error);
            onError?.(error as Error, {
                action: 'bar_drag',
                taskId: result.groupId,
                details: { affectedTaskIds: result.affectedTaskIds },
            });
        }
    }, [tasks, onTaskUpdate, onGroupDrag, onError, holidays, calendarSettings]);

    return (
        <div
            ref={containerRef}
            className={`flex h-full w-full flex-col ${className || ''}`}
            style={{ backgroundColor: 'var(--gantt-bg-secondary)', ...style }}
        >
            <GanttHeader
                viewMode={viewMode}
                zoomLevel={zoomLevel}
                activeCPId={activeCPId}
                isAddingTask={isAddingTask}
                isAddingCP={isAddingCP}
                hasUnsavedChanges={hasUnsavedChanges}
                saveStatus={saveStatus}
                isCompactMode={(viewMode === 'DETAIL' || viewMode === 'UNIFIED') ? isCompactMode : false}
                onViewChange={handleViewChange}
                onZoomChange={setZoomLevel}
                onToggleCompact={(viewMode === 'DETAIL' || viewMode === 'UNIFIED') ? toggleCompactMode : undefined}
                onStartAddTask={() => setIsAddingTask(true)}
                onStartAddCP={() => setIsAddingCP(true)}
                onStartAddMilestone={handleStartAddMilestone}
                onScrollToFirst={scrollToFirstTask}
                onCollapseAll={handleCollapseLastLevel}
                onExpandAll={handleExpandNextLevel}
                onSave={onSave}
                onReset={onReset}
                onExport={onExport}
                onExportExcel={onExportExcel}
                onImport={onImport}
                loadedFileName={loadedFileName}
                canCreateTask={!!onTaskCreate}
                canCreateMilestone={!!onMilestoneCreate}
            />

            {/* ====================================
             * Main Content Area (Header + Scrollable)
             * 통합 리사이저를 위한 relative 컨테이너
             * ==================================== */}
            <div className="relative flex flex-1 flex-col overflow-hidden">
                {/* 통합 리사이저 (전체 높이 커버) */}
                <div
                    className="absolute z-30 cursor-col-resize transition-colors"
                    style={{
                        left: sidebarWidth,
                        top: 0,
                        bottom: 0,
                        width: 4,
                        backgroundColor: isResizing
                            ? 'var(--gantt-resizer-active)'
                            : 'var(--gantt-resizer)',
                    }}
                    onMouseDown={handleResizeStart}
                    onDoubleClick={handleResizeDoubleClick}
                    onMouseEnter={(e) => {
                        if (!isResizing) {
                            e.currentTarget.style.backgroundColor = 'var(--gantt-resizer-hover)';
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (!isResizing) {
                            e.currentTarget.style.backgroundColor = 'var(--gantt-resizer)';
                        }
                    }}
                    title="드래그하여 너비 조절 / 더블클릭으로 초기화"
                />

                {/* ====================================
                 * FIXED HEADER ROW (스크롤 외부)
                 * Sidebar Header + Timeline Header + Milestone Lane
                 * ==================================== */}
                <div
                    className="flex shrink-0 shadow-sm relative z-20"
                    style={{ backgroundColor: 'var(--gantt-bg-primary)' }}
                >
                    {/* Sidebar Header */}
                    <div
                        className="shrink-0 relative"
                        style={{ width: sidebarWidth + 4, overflow: 'hidden', willChange: 'width', backgroundColor: 'var(--gantt-bg-primary)' }}
                    >
                        <GanttSidebar
                            tasks={visibleTasks}
                            allTasks={tasks}
                            viewMode={viewMode}
                            expandedIds={expandedTaskIds}
                            onToggle={toggleTask}
                            onTaskClick={handleTaskClick}
                            onTaskUpdate={onTaskUpdate}
                            onTaskCreate={onTaskCreate}
                            onTaskReorder={onTaskReorder}
                            onTaskGroup={onTaskGroup}
                            onTaskUngroup={onTaskUngroup}
                            onTaskDelete={onTaskDelete}
                            onTaskMove={onTaskMove}
                            activeCPId={activeCPId}
                            holidays={holidays}
                            calendarSettings={calendarSettings}
                            virtualRows={virtualRows}
                            totalHeight={totalHeight}
                            onTotalWidthChange={setSidebarTotalWidth}
                            isAddingTask={isAddingTask}
                            onCancelAddTask={() => setIsAddingTask(false)}
                            isAddingCP={isAddingCP}
                            onCancelAddCP={() => setIsAddingCP(false)}
                            onTaskDoubleClick={handleTaskDoubleClick}
                            renderMode="header"
                            rowHeight={layoutValues.rowHeight}
                        />
                    </div>

                    {/* Timeline Header - overflowX:hidden(스크롤동기화) + overflowY:visible(마일스톤확장) */}
                    <div
                        ref={headerTimelineRef}
                        className="flex-1"
                        style={{
                            overflowX: 'hidden',
                            overflowY: 'visible',
                            backgroundColor: 'var(--gantt-bg-primary)'
                        }}
                    >
                        <GanttTimeline
                            tasks={visibleTasks}
                            allTasks={tasks}
                            milestones={milestones}
                            viewMode={viewMode}
                            zoomLevel={zoomLevel}
                            holidays={holidays}
                            calendarSettings={calendarSettings}
                            onTaskUpdate={onTaskUpdate}
                            onBarDrag={handleBarDrag}
                            onGroupDrag={handleGroupDrag}
                            onMilestoneUpdate={onMilestoneUpdate}
                            onMilestoneDoubleClick={handleMilestoneDoubleClick}
                            onTaskDoubleClick={handleTaskDoubleClick}
                            virtualRows={virtualRows}
                            totalHeight={totalHeight}
                            onGroupToggle={toggleTask}
                            activeCPId={activeCPId}
                            onContextMenuAddTask={
                                viewMode === 'DETAIL' && activeCPId && onTaskCreate
                                    ? handleContextMenuAddTask
                                    : undefined
                            }
                            onContextMenuAddMilestone={
                                onMilestoneCreate ? handleContextMenuAddMilestone : undefined
                            }
                            anchorDependencies={anchorDependencies}
                            onAnchorDependencyCreate={onAnchorDependencyCreate}
                            onCycleDetected={onCycleDetected}
                            rowHeight={layoutValues.rowHeight}
                            barHeight={layoutValues.barHeight}
                            onAnchorDependencyDelete={onAnchorDependencyDelete}
                            onAnchorDependencyDrag={onAnchorDependencyDrag}
                            focusedTaskId={focusedTaskId}
                            renderMode="header"
                        />
                    </div>
                </div>

                {/* ====================================
             * SCROLLABLE CONTENT ROW
             * Sidebar Tasks + Timeline Tasks
             * ==================================== */}
                <div ref={scrollRef} className="relative flex flex-1 overflow-auto scrollbar-hide" onScroll={handleContentScroll}>
                    <div
                        className="sticky left-0 z-10 flex shrink-0"
                        style={{ width: sidebarWidth + 4, willChange: 'width', alignSelf: 'flex-start' }}
                    >
                        <div
                            className="flex shrink-0 flex-col"
                            style={{ width: sidebarWidth, clipPath: 'inset(0)', backgroundColor: 'var(--gantt-bg-primary)' }}
                        >
                            <GanttSidebar
                                tasks={visibleTasks}
                                allTasks={tasks}
                                viewMode={viewMode}
                                expandedIds={expandedTaskIds}
                                onToggle={toggleTask}
                                onTaskClick={handleTaskClick}
                                onTaskUpdate={onTaskUpdate}
                                onTaskCreate={onTaskCreate}
                                onTaskReorder={onTaskReorder}
                                onTaskGroup={onTaskGroup}
                                onTaskUngroup={onTaskUngroup}
                                onTaskDelete={onTaskDelete}
                                onTaskMove={onTaskMove}
                                activeCPId={activeCPId}
                                holidays={holidays}
                                calendarSettings={calendarSettings}
                                virtualRows={virtualRows}
                                totalHeight={totalHeight}
                                onTotalWidthChange={setSidebarTotalWidth}
                                isAddingTask={isAddingTask}
                                onCancelAddTask={() => setIsAddingTask(false)}
                                isAddingCP={isAddingCP}
                                onCancelAddCP={() => setIsAddingCP(false)}
                                onTaskDoubleClick={handleTaskDoubleClick}
                                renderMode="content"
                                rowHeight={layoutValues.rowHeight}
                            />

                            {/* DETAIL 뷰: CriticalPathBar 높이(20px) + 하단 여백(50px) 동기화 */}
                            {viewMode !== 'MASTER' && (
                                <div
                                    style={{
                                        height: 70,
                                        backgroundColor: 'var(--gantt-bg-secondary)',
                                        borderTop: '2px solid var(--gantt-border)',
                                    }}
                                />
                            )}
                        </div>
                    </div>

                    <div
                        className="relative flex flex-1 flex-col"
                        style={{ backgroundColor: 'var(--gantt-bg-primary)' }}
                    >
                        <GanttTimeline
                            tasks={visibleTasks}
                            allTasks={tasks}
                            milestones={milestones}
                            viewMode={viewMode}
                            zoomLevel={zoomLevel}
                            holidays={holidays}
                            calendarSettings={calendarSettings}
                            onTaskUpdate={onTaskUpdate}
                            onBarDrag={handleBarDrag}
                            onGroupDrag={handleGroupDrag}
                            onMilestoneUpdate={onMilestoneUpdate}
                            onMilestoneDoubleClick={handleMilestoneDoubleClick}
                            onTaskDoubleClick={handleTaskDoubleClick}
                            virtualRows={virtualRows}
                            totalHeight={totalHeight}
                            onGroupToggle={toggleTask}
                            activeCPId={activeCPId}
                            onContextMenuAddTask={
                                viewMode === 'DETAIL' && activeCPId && onTaskCreate
                                    ? handleContextMenuAddTask
                                    : undefined
                            }
                            onContextMenuAddMilestone={
                                onMilestoneCreate ? handleContextMenuAddMilestone : undefined
                            }
                            anchorDependencies={anchorDependencies}
                            onAnchorDependencyCreate={onAnchorDependencyCreate}
                            onAnchorDependencyDelete={onAnchorDependencyDelete}
                            onAnchorDependencyDrag={onAnchorDependencyDrag}
                            onCycleDetected={onCycleDetected}
                            focusedTaskId={focusedTaskId}
                            renderMode="content"
                            rowHeight={layoutValues.rowHeight}
                            barHeight={layoutValues.barHeight}
                        />
                    </div>

                    {isResizing && (
                        <div className="fixed inset-0 z-50 cursor-col-resize" />
                    )}
                </div>
            </div>

            <MilestoneEditModal
                milestone={editingMilestone}
                isOpen={isEditModalOpen}
                isNew={isNewMilestone}
                onClose={handleCloseEditModal}
                onSave={handleMilestoneSave}
                onDelete={handleMilestoneDelete}
            />

            <TaskEditModal
                task={editingTask}
                isOpen={isTaskEditModalOpen}
                onClose={handleCloseTaskEditModal}
                onSave={handleTaskEditSave}
                onDelete={onTaskDelete ? handleTaskEditDelete : undefined}
            />
        </div>
    );
}
