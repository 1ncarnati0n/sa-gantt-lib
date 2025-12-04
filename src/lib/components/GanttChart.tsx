'use client';

import React, { useEffect, useRef, useCallback, useMemo, useState } from 'react';
import { format } from 'date-fns';
import { GanttSidebar } from './GanttSidebar';
import { GanttTimeline, BarDragResult } from './GanttTimeline';
import { MilestoneEditModal } from './MilestoneEditModal';
import { TaskEditModal } from './TaskEditModal';
import { useGanttViewState, useGanttViewActions, useGanttSidebar, useGanttExpansion } from '../store/useGanttStore';
import { useGanttVirtualization } from '../hooks/useGanttVirtualization';
import {
    GanttChartProps,
    ConstructionTask,
    Milestone,
    GANTT_LAYOUT,
    ZOOM_CONFIG,
    CalendarSettings,
} from '../types';
import { calculateDateRange, dateToX } from '../utils/dateUtils';

// 기본 캘린더 설정
const DEFAULT_CALENDAR_SETTINGS: CalendarSettings = {
    workOnSaturdays: false,
    workOnSundays: false,
    workOnHolidays: false,
};

/**
 * SA-Gantt-Lib 메인 컴포넌트
 * 
 * 건설 공정표 전문 간트 차트 라이브러리
 * 
 * @example
 * ```tsx
 * // 기본 사용
 * <GanttChart tasks={tasks} />
 * 
 * // Supabase 연동 시
 * <GanttChart
 *   tasks={tasks}
 *   milestones={milestones}
 *   onTaskUpdate={async (task) => {
 *     await supabase.from('tasks').update(task).eq('id', task.id);
 *   }}
 * />
 * ```
 */
export function GanttChart({
    tasks,
    milestones = [],
    holidays = [],
    calendarSettings = DEFAULT_CALENDAR_SETTINGS,
    initialView = 'MASTER',
    initialZoomLevel = 'MONTH',  // Master View 기본: 월
    initialExpandedIds,
    onTaskUpdate,
    onTaskCreate,
    onTaskDelete,
    onTaskReorder,
    onTaskGroup,
    onTaskUngroup,
    onTaskMove,
    onViewChange,
    onMilestoneCreate,
    onMilestoneUpdate,
    onMilestoneDelete,
    onSave,
    onReset,
    hasUnsavedChanges,
    saveStatus,
    onExport,
    onImport,
    onError,
    className,
    style,
}: GanttChartProps) {
    // ====================================
    // Store State & Actions
    // ====================================
    const { viewMode, activeCPId, zoomLevel } = useGanttViewState();
    const { setViewMode, setZoomLevel } = useGanttViewActions();
    const { sidebarWidth, setSidebarWidth } = useGanttSidebar();
    const { expandedTaskIds, toggleTask, expandAll, collapseAll } = useGanttExpansion();

    // ====================================
    // Refs
    // ====================================
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null); // 단일 스크롤 컨테이너
    const isResizingRef = useRef(false);
    const [isResizing, setIsResizing] = useState(false);

    // 이벤트 리스너 참조 (메모리 누수 방지용)
    const mouseMoveListenerRef = useRef<((e: MouseEvent) => void) | null>(null);
    const mouseUpListenerRef = useRef<(() => void) | null>(null);

    // ====================================
    // 새 Task/CP 추가 상태 (헤더에서 제어)
    // ====================================
    const [isAddingTask, setIsAddingTask] = useState(false);
    const [isAddingCP, setIsAddingCP] = useState(false);

    const handleStartAddTask = useCallback(() => {
        setIsAddingTask(true);
    }, []);

    const handleCancelAddTask = useCallback(() => {
        setIsAddingTask(false);
    }, []);

    const handleStartAddCP = useCallback(() => {
        setIsAddingCP(true);
    }, []);

    const handleCancelAddCP = useCallback(() => {
        setIsAddingCP(false);
    }, []);

    // ====================================
    // 마일스톤 편집 모달 상태
    // ====================================
    const [editingMilestone, setEditingMilestone] = useState<Milestone | null>(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isNewMilestone, setIsNewMilestone] = useState(false);

    const handleMilestoneDoubleClick = useCallback((milestone: Milestone) => {
        setEditingMilestone(milestone);
        setIsNewMilestone(false);
        setIsEditModalOpen(true);
    }, []);

    // ====================================
    // Task 편집 모달 상태
    // ====================================
    const [editingTask, setEditingTask] = useState<ConstructionTask | null>(null);
    const [isTaskEditModalOpen, setIsTaskEditModalOpen] = useState(false);

    const handleTaskDoubleClick = useCallback((task: ConstructionTask) => {
        setEditingTask(task);
        setIsTaskEditModalOpen(true);
    }, []);

    const handleCloseTaskEditModal = useCallback(() => {
        setIsTaskEditModalOpen(false);
        setEditingTask(null);
    }, []);

    const handleTaskEditSave = useCallback((updatedTask: ConstructionTask) => {
        if (onTaskUpdate) {
            onTaskUpdate(updatedTask);
        }
        handleCloseTaskEditModal();
    }, [onTaskUpdate, handleCloseTaskEditModal]);

    const handleTaskEditDelete = useCallback((taskId: string) => {
        if (onTaskDelete) {
            onTaskDelete(taskId);
        }
        handleCloseTaskEditModal();
    }, [onTaskDelete, handleCloseTaskEditModal]);

    const handleStartAddMilestone = useCallback(() => {
        // 새 마일스톤 기본 데이터
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

    const handleCloseEditModal = useCallback(() => {
        setIsEditModalOpen(false);
        setEditingMilestone(null);
        setIsNewMilestone(false);
    }, []);

    const handleMilestoneSave = useCallback((updatedMilestone: Milestone) => {
        if (isNewMilestone && onMilestoneCreate) {
            onMilestoneCreate(updatedMilestone);
        } else if (onMilestoneUpdate) {
            onMilestoneUpdate(updatedMilestone);
        }
        handleCloseEditModal();
    }, [isNewMilestone, onMilestoneCreate, onMilestoneUpdate, handleCloseEditModal]);

    const handleMilestoneDelete = useCallback((milestoneId: string) => {
        if (onMilestoneDelete) {
            onMilestoneDelete(milestoneId);
        }
        handleCloseEditModal();
    }, [onMilestoneDelete, handleCloseEditModal]);

    // ====================================
    // 초기화 (마운트 시 1회만)
    // ====================================
    const isInitialized = useRef(false);
    
    // tasks의 id 배열을 메모이제이션 (의존성 배열 최적화)
    const taskIds = useMemo(() => tasks.map(t => t.id), [tasks]);
    
    useEffect(() => {
        if (isInitialized.current) return;
        isInitialized.current = true;

        // 초기 뷰 모드 설정
        setViewMode(initialView);

        // 초기 줌 레벨 설정
        setZoomLevel(initialZoomLevel);

        // 초기 확장 상태 설정 (먼저 클리어 후 추가)
        collapseAll();
        if (initialExpandedIds && initialExpandedIds.length > 0) {
            expandAll(initialExpandedIds);
        } else if (taskIds.length > 0) {
            // 기본적으로 모든 태스크 확장
            expandAll(taskIds);
        }
    }, [taskIds, initialExpandedIds, initialView, initialZoomLevel, setViewMode, setZoomLevel, expandAll, collapseAll]);

    // ====================================
    // 이벤트 리스너 Cleanup (메모리 누수 방지)
    // ====================================
    useEffect(() => {
        return () => {
            // 컴포넌트 언마운트 시 드래그 이벤트 리스너 정리
            if (mouseMoveListenerRef.current) {
                document.removeEventListener('mousemove', mouseMoveListenerRef.current);
            }
            if (mouseUpListenerRef.current) {
                document.removeEventListener('mouseup', mouseUpListenerRef.current);
            }
        };
    }, []);

    // ====================================
    // 새로 생성된 GROUP 자동 확장
    // ====================================
    const prevTaskIdsRef = useRef<Set<string>>(new Set());
    
    useEffect(() => {
        const currentIds = new Set(tasks.map(t => t.id));
        const prevIds = prevTaskIdsRef.current;
        
        // 새로 추가된 GROUP 찾기
        const newGroupIds: string[] = [];
        tasks.forEach(task => {
            if (task.type === 'GROUP' && !prevIds.has(task.id)) {
                newGroupIds.push(task.id);
            }
        });
        
        // 새 GROUP이 있으면 확장
        if (newGroupIds.length > 0) {
            expandAll(newGroupIds);
        }
        
        prevTaskIdsRef.current = currentIds;
    }, [tasks, expandAll]);

    // ====================================
    // Parent → Children 맵 생성 (O(n) 조회를 위한 최적화)
    // ====================================
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

    // ====================================
    // 뷰에 따른 태스크 필터링 (O(n) 최적화)
    // ====================================
    const visibleTasks = useMemo(() => {
        if (viewMode === 'MASTER') {
            // Master View: Level 1 (GROUP + CP)
            const visible: ConstructionTask[] = [];

            // childrenMap을 활용한 재귀 수집 (O(n))
            const collectVisible = (parentId: string | null) => {
                const children = childrenMap.get(parentId) || [];

                children.forEach(task => {
                    // Level 1 태스크만 처리
                    if (task.wbsLevel !== 1) return;

                    // 최상위(parentId === null) 또는 부모가 확장된 경우
                    if (parentId === null || expandedTaskIds.has(parentId)) {
                        visible.push(task);

                        // GROUP인 경우 자식들도 재귀적으로 수집
                        if (task.type === 'GROUP') {
                            collectVisible(task.id);
                        }
                    }
                });
            };

            collectVisible(null);
            return visible;
        } else {
            // Detail View: Level 2 Tasks of selected CP
            const visible: ConstructionTask[] = [];

            // childrenMap을 활용한 재귀 수집 (O(n))
            const collectVisible = (parentId: string | null) => {
                const children = childrenMap.get(parentId) || [];

                children.forEach(task => {
                    // Level 2 태스크만 처리
                    if (task.wbsLevel !== 2) return;

                    // activeCPId의 자식이거나 부모가 확장된 경우
                    if (parentId === activeCPId || expandedTaskIds.has(parentId!)) {
                        visible.push(task);

                        // GROUP인 경우 자식들도 재귀적으로 수집
                        if (task.type === 'GROUP') {
                            collectVisible(task.id);
                        }
                    }
                });
            };

            // 먼저 activeCPId의 직접 자식들 수집
            collectVisible(activeCPId!);
            return visible;
        }
    }, [childrenMap, viewMode, activeCPId, expandedTaskIds]);

    // ====================================
    // 가상화 (대규모 공정표 성능 최적화)
    // ====================================
    const { virtualRows, totalHeight } = useGanttVirtualization({
        containerRef: scrollRef, // 단일 스크롤 컨테이너 참조
        count: visibleTasks.length,
    });

    // ====================================
    // 사이드바 리사이즈
    // ====================================
    const [sidebarTotalWidth, setSidebarTotalWidth] = useState<number | null>(null);

    const handleResizeStart = useCallback((e: React.MouseEvent) => {
        // 더블클릭 시 드래그 시작 방지
        if (e.detail >= 2) return;

        e.preventDefault();
        isResizingRef.current = true;
        setIsResizing(true);

        const startX = e.clientX;
        const startWidth = sidebarWidth;

        const handleMouseMove = (e: MouseEvent) => {
            if (!isResizingRef.current) return;
            const delta = e.clientX - startX;
            setSidebarWidth(startWidth + delta);
        };

        const handleMouseUp = () => {
            isResizingRef.current = false;
            setIsResizing(false);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            // 리스너 참조 초기화
            mouseMoveListenerRef.current = null;
            mouseUpListenerRef.current = null;
        };

        // 리스너 참조 저장 (cleanup용)
        mouseMoveListenerRef.current = handleMouseMove;
        mouseUpListenerRef.current = handleMouseUp;

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    }, [sidebarWidth, setSidebarWidth]);

    const handleResizeDoubleClick = useCallback(() => {
        // 사이드바의 마지막 컬럼 끝에 맞추기
        if (sidebarTotalWidth !== null) {
            setSidebarWidth(sidebarTotalWidth);
        } else {
            // 폴백: 뷰 모드에 따른 기본값 사용
            const defaultWidth = viewMode === 'MASTER'
                ? GANTT_LAYOUT.SIDEBAR_MASTER_WIDTH
                : GANTT_LAYOUT.SIDEBAR_DETAIL_WIDTH;
            setSidebarWidth(defaultWidth);
        }
    }, [sidebarTotalWidth, setSidebarWidth, viewMode]);

    // ====================================
    // 뷰 전환 핸들러
    // ====================================
    const handleViewChange = useCallback((mode: 'MASTER' | 'DETAIL', cpId?: string) => {
        setViewMode(mode, cpId);
        onViewChange?.(mode, cpId);
    }, [setViewMode, onViewChange]);

    // ====================================
    // 타임라인 스크롤 함수
    // ====================================
    
    // 특정 날짜로 타임라인 스크롤
    const scrollToDate = useCallback((targetDate: Date) => {
        const container = scrollRef.current;
        if (!container) return;
        
        // 현재 줌 레벨의 pixelsPerDay 사용
        const pxPerDay = ZOOM_CONFIG[zoomLevel].pixelsPerDay;
        
        // minDate 계산 (calculateDateRange 사용)
        const { minDate } = calculateDateRange(tasks, milestones, 60);
        
        // X 좌표 계산
        const x = dateToX(targetDate, minDate, pxPerDay);

        // 약간의 여유를 두고 스크롤 (왼쪽 50px 마진)
        container.scrollLeft = Math.max(0, x - 50);
    }, [zoomLevel, tasks, milestones]);

    // 첫 번째 Task/CP로 스크롤 (버튼용)
    const scrollToFirstTask = useCallback(() => {
        if (viewMode === 'MASTER') {
            // Master View: 모든 CP 중 가장 빠른 시작일로 스크롤
            const cpTasks = visibleTasks.filter(t => t.type === 'CP');
            if (cpTasks.length > 0) {
                const firstCP = cpTasks.reduce((a, b) => 
                    a.startDate < b.startDate ? a : b
                );
                // 시작일보다 5일 전으로 스크롤 (여유 있게 보기)
                const targetDate = new Date(firstCP.startDate);
                targetDate.setDate(targetDate.getDate() - 5);
                scrollToDate(targetDate);
            }
        } else if (viewMode === 'DETAIL' && activeCPId) {
            // Detail View: 선택된 CP의 하위 task 중 가장 빠른 시작일로 스크롤
            const childTasks = tasks.filter(t => t.parentId === activeCPId);
            if (childTasks.length > 0) {
                const firstTask = childTasks.reduce((a, b) => 
                    a.startDate < b.startDate ? a : b
                );
                // 시작일보다 5일 전으로 스크롤 (여유 있게 보기)
                const targetDate = new Date(firstTask.startDate);
                targetDate.setDate(targetDate.getDate() - 5);
                scrollToDate(targetDate);
            }
        }
    }, [viewMode, activeCPId, tasks, visibleTasks, scrollToDate]);

    const handleTaskClick = useCallback((task: ConstructionTask) => {
        if (viewMode === 'MASTER' && task.type === 'CP') {
            handleViewChange('DETAIL', task.id);
        }
    }, [viewMode, handleViewChange]);

    // ====================================
    // Detail View 진입 시 자동 스크롤
    // ====================================
    useEffect(() => {
        if (viewMode === 'DETAIL' && activeCPId) {
            // 뷰 전환 후 렌더링이 완료되면 첫 번째 task로 스크롤
            const timer = setTimeout(() => {
                scrollToFirstTask();
            }, GANTT_LAYOUT.SCROLL_DELAY_MS);
            return () => clearTimeout(timer);
        }
    }, [viewMode, activeCPId, scrollToFirstTask]);

    // Bar 드래그로 날짜/일수 변경 핸들러
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
            // 에러 콜백 호출 (사용자 알림용)
            onError?.(error as Error, {
                action: 'bar_drag',
                taskId: result.taskId,
            });
        }
    }, [tasks, onTaskUpdate, onError]);

    // ====================================
    // 렌더링
    // ====================================
    return (
        <div
            ref={containerRef}
            className={`flex h-full w-full flex-col bg-gray-50 ${className || ''}`}
            style={style}
        >
            {/* Header */}
            <header className="flex h-[60px] shrink-0 items-center justify-between border-b border-gray-200 bg-white px-4 shadow-sm">
                {/* 왼쪽: 상위 공정표로 버튼 + 추가 버튼 (고정 배치) */}
                <div className="flex items-center gap-3 shrink-0">
                    {viewMode === 'DETAIL' ? (
                        <>
                            <button
                                onClick={() => handleViewChange('MASTER')}
                                className="rounded bg-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-300 transition-colors"
                            >
                                ← 상위 공정표로
                            </button>
                            {/* Task 추가 버튼 */}
                            {onTaskCreate && !isAddingTask && (
                                <button
                                    onClick={handleStartAddTask}
                                    className="flex items-center gap-1 rounded bg-blue-500 px-2 py-1.5 text-xs font-medium text-white hover:bg-blue-600 transition-colors"
                                    title="새 공정 추가"
                                >
                                    + Task 추가
                                </button>
                            )}
                        </>
                    ) : (
                        <>
                            {/* CP 추가 버튼 (Master View) */}
                            {onTaskCreate && !isAddingCP && (
                                <button
                                    onClick={handleStartAddCP}
                                    className="flex items-center gap-1 rounded bg-blue-500 px-2 py-1.5 text-xs font-medium text-white hover:bg-blue-600 transition-colors"
                                    title="새 CP 추가"
                                >
                                    + CP 추가
                                </button>
                            )}
                            {/* 마일스톤 추가 버튼 (Master View) */}
                            {onMilestoneCreate && (
                                <button
                                    onClick={handleStartAddMilestone}
                                    className="flex items-center gap-1 rounded bg-purple-500 px-2 py-1.5 text-xs font-medium text-white hover:bg-purple-600 transition-colors"
                                    title="새 마일스톤 추가"
                                >
                                    + 마일스톤
                                </button>
                            )}
                            {isAddingCP && (
                                <span className="text-xs text-gray-500 italic">CP 추가 중... (Enter 저장 / Esc 취소)</span>
                            )}
                        </>
                    )}
                </div>

                {/* 중앙: Focusing 버튼 + 줌 컨트롤 + 기준일 */}
                <div className="flex items-center gap-4">
                    {/* Focusing 버튼 (모든 View에서 표시) */}
                    <button
                        onClick={scrollToFirstTask}
                        className="flex items-center gap-1 rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 hover:bg-gray-200 transition-colors"
                        title={viewMode === 'MASTER' ? '첫 번째 CP로 스크롤' : '첫 번째 작업으로 스크롤'}
                    >
                        Focusing
                    </button>

                    {/* Zoom Controls - 뷰 모드에 따라 다른 옵션 표시 */}
                    <div className="flex rounded bg-gray-100 p-1">
                        {(viewMode === 'MASTER' 
                            ? (['WEEK', 'MONTH'] as const)  // Level 1: 주, 월만
                            : (['DAY', 'WEEK'] as const)    // Level 2: 일, 주만
                        ).map((level) => (
                            <button
                                key={level}
                                onClick={() => setZoomLevel(level)}
                                className={`rounded px-3 py-1 text-xs font-medium transition-colors ${
                                    zoomLevel === level
                                        ? 'bg-white text-gray-800 shadow-sm'
                                        : 'text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                {ZOOM_CONFIG[level].label}
                            </button>
                        ))}
                    </div>

                    {/* 기준일 */}
                    <div className="text-sm text-gray-500">
                        기준일: {format(new Date(), 'yyyy-MM-dd')}
                    </div>
                </div>

                {/* 오른쪽: 저장/초기화 버튼 */}
                <div className="flex items-center gap-2">
                    {onSave && (
                        <button
                            onClick={onSave}
                            disabled={!hasUnsavedChanges || saveStatus === 'saving'}
                            className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                                hasUnsavedChanges
                                    ? 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700'
                                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            }`}
                        >
                            {saveStatus === 'saving' ? (
                                <>
                                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    저장 중...
                                </>
                            ) : (
                                <>
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                                    </svg>
                                    저장
                                </>
                            )}
                        </button>
                    )}
                    
                    {onReset && (
                        <button
                            onClick={onReset}
                            className="flex items-center gap-1.5 rounded-md bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200 active:bg-gray-300"
                        >
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            초기화
                        </button>
                    )}
                    
                    {/* 구분선 */}
                    {(onExport || onImport) && (
                        <div className="h-6 w-px bg-gray-300" />
                    )}
                    
                    {/* 내보내기 버튼 */}
                    {onExport && (
                        <button
                            onClick={onExport}
                            className="flex items-center gap-1.5 rounded-md bg-green-500 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-green-600 active:bg-green-700"
                            title="현재 데이터를 JSON 파일로 내보내기"
                        >
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            내보내기
                        </button>
                    )}
                    
                    {/* 가져오기 버튼 */}
                    {onImport && (
                        <label className="flex cursor-pointer items-center gap-1.5 rounded-md bg-amber-500 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-amber-600 active:bg-amber-700">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                            </svg>
                            가져오기
                            <input
                                type="file"
                                accept=".json"
                                className="hidden"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                        onImport(file);
                                        e.target.value = ''; // 같은 파일 재선택 가능하도록
                                    }
                                }}
                            />
                        </label>
                    )}
                </div>
            </header>

            {/* Main Content - 단일 스크롤 컨테이너 */}
            <div ref={scrollRef} className="relative flex flex-1 overflow-auto">
                {/* Sidebar + Resizer 컨테이너 (sticky - 깨짐 현상 방지) */}
                <div
                    className="sticky left-0 z-10 flex shrink-0 relative"
                    style={{ width: sidebarWidth + 4 }}
                >
                    {/* Sidebar */}
                    <div
                        className="flex shrink-0 flex-col bg-white overflow-hidden"
                        style={{ width: sidebarWidth }}
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
                            onCancelAddTask={handleCancelAddTask}
                            isAddingCP={isAddingCP}
                            onCancelAddCP={handleCancelAddCP}
                            onTaskDoubleClick={handleTaskDoubleClick}
                        />
                    </div>

                    {/* Resizer - 사이드바 위에 overlay로 배치 */}
                    <div
                        className={`absolute top-0 right-0 h-full w-1 cursor-col-resize z-20 transition-colors ${
                            isResizing
                                ? 'bg-blue-500'
                                : 'bg-gray-200 hover:bg-gray-300'
                        }`}
                        onMouseDown={handleResizeStart}
                        onDoubleClick={handleResizeDoubleClick}
                        title="드래그하여 너비 조절 / 더블클릭으로 초기화"
                    />
                </div>

                {/* Timeline */}
                <div className="relative flex flex-1 flex-col bg-white">
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
                        onMilestoneUpdate={onMilestoneUpdate}
                        onMilestoneDoubleClick={handleMilestoneDoubleClick}
                        onTaskDoubleClick={handleTaskDoubleClick}
                        virtualRows={virtualRows}
                        totalHeight={totalHeight}
                    />
                </div>

                {/* Resize Overlay */}
                {isResizing && (
                    <div className="fixed inset-0 z-50 cursor-col-resize" />
                )}
            </div>

            {/* Milestone Edit Modal */}
            <MilestoneEditModal
                milestone={editingMilestone}
                isOpen={isEditModalOpen}
                isNew={isNewMilestone}
                onClose={handleCloseEditModal}
                onSave={handleMilestoneSave}
                onDelete={handleMilestoneDelete}
            />

            {/* Task Edit Modal */}
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

