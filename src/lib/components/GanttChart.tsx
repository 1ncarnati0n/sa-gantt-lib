'use client';

import React, { useEffect, useRef, useCallback, useMemo, useState } from 'react';
import { format } from 'date-fns';
import { GanttSidebar } from './GanttSidebar';
import { GanttTimeline, BarDragResult } from './GanttTimeline';
import { useGanttViewState, useGanttViewActions, useGanttSidebar, useGanttExpansion } from '../store/useGanttStore';
import { useGanttVirtualization } from '../hooks/useGanttVirtualization';
import {
    GanttChartProps,
    ConstructionTask,
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
    onTaskReorder,
    onViewChange,
    className,
    style,
}: GanttChartProps) {
    // ====================================
    // Store State & Actions
    // ====================================
    const { viewMode, activeCPId, zoomLevel } = useGanttViewState();
    const { setViewMode, setZoomLevel } = useGanttViewActions();
    const { sidebarWidth, setSidebarWidth } = useGanttSidebar();
    const { expandedTaskIds, toggleTask, expandAll } = useGanttExpansion();

    // ====================================
    // Refs
    // ====================================
    const containerRef = useRef<HTMLDivElement>(null);
    const sidebarScrollRef = useRef<HTMLDivElement>(null);
    const timelineScrollRef = useRef<HTMLDivElement>(null);
    const isScrollingRef = useRef(false);
    const isResizingRef = useRef(false);
    const [isResizing, setIsResizing] = useState(false);

    // ====================================
    // 초기화 (마운트 시 1회만)
    // ====================================
    const isInitialized = useRef(false);
    
    useEffect(() => {
        if (isInitialized.current) return;
        isInitialized.current = true;

        // 초기 뷰 모드 설정
        setViewMode(initialView);

        // 초기 줌 레벨 설정
        setZoomLevel(initialZoomLevel);

        // 초기 확장 상태 설정
        if (initialExpandedIds && initialExpandedIds.length > 0) {
            expandAll(initialExpandedIds);
        } else if (tasks.length > 0) {
            // 기본적으로 모든 태스크 확장
            expandAll(tasks.map(t => t.id));
        }
    }, [tasks.length]); // tasks가 로드된 후 1회 실행

    // ====================================
    // 뷰에 따른 태스크 필터링
    // ====================================
    const visibleTasks = useMemo(() => {
        if (viewMode === 'MASTER') {
            // Master View: Level 1 (GROUP + CP)
            const visible: ConstructionTask[] = [];

            tasks.forEach(task => {
                if (task.wbsLevel === 1 && !task.parentId) {
                    // 최상위 GROUP 또는 CP
                    visible.push(task);
                } else if (task.wbsLevel === 1 && task.parentId) {
                    // GROUP에 속한 CP - 부모가 확장된 경우에만 표시
                    if (expandedTaskIds.has(task.parentId)) {
                        visible.push(task);
                    }
                }
            });

            return visible;
        } else {
            // Detail View: Level 2 Tasks of selected CP
            return tasks.filter(t => t.wbsLevel === 2 && t.parentId === activeCPId);
        }
    }, [tasks, viewMode, activeCPId, expandedTaskIds]);

    // ====================================
    // 가상화 (대규모 공정표 성능 최적화)
    // ====================================
    const { virtualRows, totalHeight } = useGanttVirtualization({
        containerRef: timelineScrollRef,
        count: visibleTasks.length,
    });

    // ====================================
    // 스크롤 동기화
    // ====================================
    useEffect(() => {
        const sidebar = sidebarScrollRef.current;
        const timeline = timelineScrollRef.current;

        if (!sidebar || !timeline) return;

        const handleSidebarScroll = () => {
            if (isScrollingRef.current) return;
            isScrollingRef.current = true;
            timeline.scrollTop = sidebar.scrollTop;
            requestAnimationFrame(() => {
                isScrollingRef.current = false;
            });
        };

        const handleTimelineScroll = () => {
            if (isScrollingRef.current) return;
            isScrollingRef.current = true;
            sidebar.scrollTop = timeline.scrollTop;
            requestAnimationFrame(() => {
                isScrollingRef.current = false;
            });
        };

        sidebar.addEventListener('scroll', handleSidebarScroll);
        timeline.addEventListener('scroll', handleTimelineScroll);

        return () => {
            sidebar.removeEventListener('scroll', handleSidebarScroll);
            timeline.removeEventListener('scroll', handleTimelineScroll);
        };
    }, []);

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
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    }, [sidebarWidth, setSidebarWidth]);

    const handleResizeDoubleClick = useCallback(() => {
        // 사이드바의 마지막 컬럼 끝에 맞추기
        if (sidebarTotalWidth !== null) {
            setSidebarWidth(sidebarTotalWidth);
        } else {
            // 폴백: 기본값 사용
            setSidebarWidth(GANTT_LAYOUT.SIDEBAR_WIDTH);
        }
    }, [sidebarTotalWidth, setSidebarWidth]);

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
        const timeline = timelineScrollRef.current;
        if (!timeline) return;
        
        // 현재 줌 레벨의 pixelsPerDay 사용
        const pxPerDay = ZOOM_CONFIG[zoomLevel].pixelsPerDay;
        
        // minDate 계산 (calculateDateRange 사용)
        const { minDate } = calculateDateRange(tasks, milestones, 60);
        
        // X 좌표 계산
        const x = dateToX(targetDate, minDate, pxPerDay);
        
        // 약간의 여유를 두고 스크롤 (왼쪽 50px 마진)
        timeline.scrollLeft = Math.max(0, x - 50);
    }, [zoomLevel, tasks, milestones]);

    // 첫 번째 Task로 스크롤 (버튼용)
    const scrollToFirstTask = useCallback(() => {
        if (viewMode !== 'DETAIL' || !activeCPId) return;
        
        const childTasks = tasks.filter(t => t.parentId === activeCPId);
        if (childTasks.length > 0) {
            // 가장 빠른 시작일의 task 찾기
            const firstTask = childTasks.reduce((a, b) => 
                a.startDate < b.startDate ? a : b
            );
            scrollToDate(firstTask.startDate);
        }
    }, [viewMode, activeCPId, tasks, scrollToDate]);

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
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [viewMode, activeCPId]); // scrollToFirstTask는 의존성에서 제외 (무한 루프 방지)

    // Bar 드래그로 날짜/일수 변경 핸들러
    const handleBarDrag = useCallback((result: BarDragResult) => {
        if (!onTaskUpdate) return;
        
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
            },
        };
        
        onTaskUpdate(updatedTask);
    }, [tasks, onTaskUpdate]);

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
                <h1 className="flex items-center gap-2 text-xl font-extrabold text-gray-800">
                    <span>
                        <span className="text-teal">건설</span>{' '}
                        <span className="text-vermilion">표준공정표</span> 관리 시스템
                    </span>
                </h1>

                <div className="flex items-center gap-4">
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
            </header>

            {/* Main Content */}
            <div className="relative flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <div
                    className="z-10 flex shrink-0 flex-col bg-white"
                    style={{ width: sidebarWidth }}
                >
                    <GanttSidebar
                        ref={sidebarScrollRef}
                        tasks={visibleTasks}
                        allTasks={tasks}
                        viewMode={viewMode}
                        expandedIds={expandedTaskIds}
                        onToggle={toggleTask}
                        onTaskClick={handleTaskClick}
                        onBackToMaster={() => handleViewChange('MASTER')}
                        onTaskUpdate={onTaskUpdate}
                        onTaskCreate={onTaskCreate}
                        onTaskReorder={onTaskReorder}
                        onScrollToFirstTask={scrollToFirstTask}
                        activeCPId={activeCPId}
                        virtualRows={virtualRows}
                        totalHeight={totalHeight}
                        onTotalWidthChange={setSidebarTotalWidth}
                    />
                </div>

                {/* Resizer */}
                <div
                    className={`z-20 w-1 shrink-0 cursor-col-resize transition-colors ${
                        isResizing
                            ? 'bg-blue-500'
                            : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                    onMouseDown={handleResizeStart}
                    onDoubleClick={handleResizeDoubleClick}
                    title="드래그하여 너비 조절 / 더블클릭으로 초기화"
                />

                {/* Timeline */}
                <div className="relative flex flex-1 flex-col overflow-hidden bg-white">
                    <GanttTimeline
                        ref={timelineScrollRef}
                        tasks={visibleTasks}
                        milestones={milestones}
                        viewMode={viewMode}
                        zoomLevel={zoomLevel}
                        holidays={holidays}
                        calendarSettings={calendarSettings}
                        onTaskUpdate={onTaskUpdate}
                        onBarDrag={handleBarDrag}
                        virtualRows={virtualRows}
                        totalHeight={totalHeight}
                    />
                </div>

                {/* Resize Overlay */}
                {isResizing && (
                    <div className="fixed inset-0 z-50 cursor-col-resize" />
                )}
            </div>
        </div>
    );
}

