'use client';

import { forwardRef, useMemo, useCallback, useState } from 'react';
import { addDays, getDay } from 'date-fns';
import {
    ConstructionTask,
    Milestone,
    ViewMode,
    ZoomLevel,
    CalendarSettings,
    GANTT_LAYOUT,
    GANTT_COLORS,
    ZOOM_CONFIG,
    GroupDragResult,
    AnchorDependency,
    AnchorDependencyDragResult,
} from '../../types';
import { calculateDateRange, xToDate } from '../../utils/dateUtils';
import type { VirtualRow } from '../../hooks/useGanttVirtualization';

// Sub-components
import { TimelineHeader } from './TimelineHeader';
import { TimelineGrid } from './TimelineGrid';
import { MilestoneMarker, calculateMilestoneLabels } from './MilestoneMarker';
import { SvgDefs } from './SvgDefs';
import { TaskBar } from './TaskBar';
import { TimelineContextMenu } from './TimelineContextMenu';
import { DependencyLines, ConnectionPreviewLine, InBarConnectionLines } from './DependencyLines';
import { AnchorPoints, getAnchorPosition } from './AnchorPoints';

// Hooks
import { useBarDrag } from './hooks/useBarDrag';
import { useMilestoneDrag } from './hooks/useMilestoneDrag';
import { useGroupDrag } from './hooks/useGroupDrag';
import { useAnchorConnection } from './hooks/useAnchorConnection';
import { useDependencyDrag } from './hooks/useDependencyDrag';

// External components
import { CriticalPathBar } from '../CriticalPathBar';
import { GroupSummaryBar } from '../GroupSummaryBar';

// Types
import type { BarDragResult } from './types';

const { ROW_HEIGHT, MILESTONE_LANE_HEIGHT, BAR_HEIGHT } = GANTT_LAYOUT;

export type { BarDragResult };

interface GanttTimelineProps {
    tasks: ConstructionTask[];
    allTasks?: ConstructionTask[];
    milestones: Milestone[];
    viewMode: ViewMode;
    zoomLevel: ZoomLevel;
    holidays: Date[];
    calendarSettings: CalendarSettings;
    onTaskUpdate?: (task: ConstructionTask) => void;
    onBarDrag?: (result: BarDragResult) => void;
    onGroupDrag?: (result: GroupDragResult) => void;
    onMilestoneUpdate?: (milestone: Milestone) => void;
    onMilestoneDoubleClick?: (milestone: Milestone) => void;
    onTaskDoubleClick?: (task: ConstructionTask) => void;
    virtualRows?: VirtualRow[];
    totalHeight?: number;
    showCriticalPath?: boolean;
    onGroupToggle?: (taskId: string) => void;
    activeCPId?: string | null;
    onContextMenuAddTask?: (date: Date) => void;
    onContextMenuAddMilestone?: (date: Date) => void;
    // 앵커 종속성 관련 Props
    anchorDependencies?: AnchorDependency[];
    onAnchorDependencyCreate?: (dependency: AnchorDependency) => void;
    onAnchorDependencyDelete?: (depId: string) => void;
    onAnchorDependencyDrag?: (result: AnchorDependencyDragResult) => void;
}

export const GanttTimeline = forwardRef<HTMLDivElement, GanttTimelineProps>(
    ({
        tasks,
        allTasks,
        milestones,
        viewMode,
        zoomLevel,
        holidays,
        calendarSettings,
        onBarDrag,
        onGroupDrag,
        onMilestoneUpdate,
        onMilestoneDoubleClick,
        onTaskDoubleClick,
        virtualRows,
        totalHeight: virtualTotalHeight,
        showCriticalPath = true,
        onGroupToggle,
        activeCPId,
        onContextMenuAddTask,
        onContextMenuAddMilestone,
        anchorDependencies = [],
        onAnchorDependencyCreate,
        onAnchorDependencyDelete,
        onAnchorDependencyDrag,
    }, ref) => {
        const pixelsPerDay = ZOOM_CONFIG[zoomLevel].pixelsPerDay;
        const isMasterView = viewMode === 'MASTER';
        const isVirtualized = virtualRows && virtualRows.length > 0;

        // 컨텍스트 메뉴 상태
        const [contextMenu, setContextMenu] = useState<{
            x: number;
            y: number;
            clickedDate: Date;
        } | null>(null);


        // Calculate date range
        const { minDate, totalDays } = useMemo(() => {
            return calculateDateRange(tasks, milestones, 60);
        }, [tasks, milestones]);

        // viewMode에 따라 마일스톤 필터링
        const filteredMilestones = useMemo(() => {
            if (isMasterView) {
                // Master View: MASTER 또는 타입 미지정 마일스톤만
                return milestones.filter(m => !m.milestoneType || m.milestoneType === 'MASTER');
            } else {
                // Detail View: 모든 마일스톤 표시 (MASTER + DETAIL)
                return milestones;
            }
        }, [milestones, isMasterView]);

        // 마일스톤 레이아웃 계산 (충돌 감지 적용)
        const milestoneLayouts = useMemo(() => {
            return calculateMilestoneLabels(filteredMilestones, minDate, pixelsPerDay);
        }, [filteredMilestones, minDate, pixelsPerDay]);

        const chartWidth = totalDays * pixelsPerDay;
        const chartHeight = isVirtualized
            ? Math.max((virtualTotalHeight || 0) + MILESTONE_LANE_HEIGHT + 100, 500)
            : Math.max(tasks.length * ROW_HEIGHT + MILESTONE_LANE_HEIGHT + 100, 500);

        // ====================================
        // Drag Hooks
        // ====================================
        const {
            handleBarMouseDown,
            getDragInfo,
        } = useBarDrag({
            pixelsPerDay,
            holidays,
            calendarSettings,
            onBarDrag,
        });

        const {
            handleMilestoneMouseDown,
            getMilestoneDragX,
            isMilestoneDragging,
        } = useMilestoneDrag({
            minDate,
            pixelsPerDay,
            milestones,
            onMilestoneUpdate,
        });

        const {
            handleGroupBarMouseDown,
            getGroupDragDeltaDays,
            getTaskGroupDragDeltaDays,
        } = useGroupDrag({
            pixelsPerDay,
            holidays,
            calendarSettings,
            allTasks: allTasks || tasks,
            onGroupDrag,
        });

        // ====================================
        // Anchor Dependency Hooks
        // ====================================
        const {
            connectingFrom,
            hoveredAnchor,
            selectedDepId,
            hoveredDepId,
            isConnecting,
            handleAnchorClick,
            handleAnchorHover,
            handleDependencyClick,
            handleDependencyHover,
            cancelConnection: _cancelConnection,
            clearSelection,
        } = useAnchorConnection({
            dependencies: anchorDependencies,
            onDependencyCreate: onAnchorDependencyCreate,
            onDependencyDelete: onAnchorDependencyDelete,
        });

        const {
            taskHasDependency,
            handleDependencyBarMouseDown,
            getTaskDeltaDays: getDependencyDragDeltaDays,
            isDraggingTask: _isDependencyDraggingTask,
        } = useDependencyDrag({
            pixelsPerDay,
            holidays,
            calendarSettings,
            allTasks: allTasks || tasks,
            dependencies: anchorDependencies,
            onDependencyDrag: onAnchorDependencyDrag,
        });

        // 호버된 태스크 ID 상태 (앵커 표시용)
        const [hoveredTaskId, setHoveredTaskId] = useState<string | null>(null);

        const handleMilestoneDoubleClick = useCallback((milestone: Milestone) => {
            if (onMilestoneDoubleClick) {
                onMilestoneDoubleClick(milestone);
            }
        }, [onMilestoneDoubleClick]);

        // 타임라인 우클릭 핸들러
        const handleContextMenu = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
            // 컨텍스트 메뉴 콜백이 없으면 기본 동작
            if (!onContextMenuAddTask && !onContextMenuAddMilestone) return;

            e.preventDefault();

            // SVG 요소의 위치 계산
            const svg = e.currentTarget;
            const rect = svg.getBoundingClientRect();

            // 클릭한 X 좌표 (SVG 내부 좌표)
            const svgX = e.clientX - rect.left;

            // X 좌표를 날짜로 변환
            const clickedDate = xToDate(svgX, minDate, pixelsPerDay);

            setContextMenu({
                x: e.clientX,
                y: e.clientY,
                clickedDate,
            });
        }, [minDate, pixelsPerDay, onContextMenuAddTask, onContextMenuAddMilestone]);

        // 컨텍스트 메뉴 닫기 핸들러 (memoized)
        const handleContextMenuClose = useCallback(() => {
            setContextMenu(null);
        }, []);

        // 종속성 삭제 핸들러
        const handleDepDelete = useCallback((depId: string) => {
            onAnchorDependencyDelete?.(depId);
        }, [onAnchorDependencyDelete]);

        // SVG 빈 공간 클릭 시 선택 해제
        const handleSvgClick = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
            // 클릭된 요소가 SVG 자체일 때만 선택 해제 (task bar, anchor, dependency line 등이 아닐 때)
            if (e.target === e.currentTarget) {
                clearSelection();
            }
        }, [clearSelection]);

        // Row data (virtualized or full)
        const rowData = isVirtualized
            ? virtualRows!
            : tasks.map((_, i) => ({ index: i, start: i * ROW_HEIGHT, size: ROW_HEIGHT, key: i }));

        return (
            <div className="flex h-full w-full flex-col overflow-hidden bg-white">
                <div ref={ref} className="relative flex-1">
                    <TimelineHeader
                        minDate={minDate}
                        totalDays={totalDays}
                        pixelsPerDay={pixelsPerDay}
                        zoomLevel={zoomLevel}
                        holidays={holidays}
                        calendarSettings={calendarSettings}
                    />

                    <svg
                        width={chartWidth}
                        height={chartHeight}
                        className="block bg-white"
                        onContextMenu={handleContextMenu}
                        onClick={handleSvgClick}
                    >
                        <SvgDefs />

                        {/* Layer 1: 배경 */}
                        <TimelineGrid
                            minDate={minDate}
                            totalDays={totalDays}
                            chartHeight={chartHeight}
                            pixelsPerDay={pixelsPerDay}
                            holidays={holidays}
                            calendarSettings={calendarSettings}
                            zoomLevel={zoomLevel}
                        />

                        {/* GROUP Row Background */}
                        {rowData.map((row) => {
                            const task = tasks[row.index];
                            if (!task || task.type !== 'GROUP') return null;

                            const rowY = row.start + MILESTONE_LANE_HEIGHT;
                            return (
                                <rect
                                    key={`group-bg-${row.key}`}
                                    x={0}
                                    y={rowY}
                                    width={chartWidth}
                                    height={ROW_HEIGHT}
                                    fill="rgba(249, 250, 251, 0.6)"
                                    className="pointer-events-none"
                                />
                            );
                        })}

                        {/* Layer 2: 그리드 라인 */}
                        {Array.from({ length: totalDays }, (_, i) => {
                            const x = (i + 1) * pixelsPerDay;
                            const date = addDays(minDate, i);
                            const dayOfWeek = getDay(date);

                            let showLine = false;
                            let strokeColor = '#f0f0f0';

                            if (zoomLevel === 'DAY') {
                                showLine = true;
                                strokeColor = dayOfWeek === 0 ? '#e0e0e0' : '#f0f0f0';
                            } else if (zoomLevel === 'WEEK') {
                                showLine = dayOfWeek === 0;
                                strokeColor = '#e5e7eb';
                            } else if (zoomLevel === 'MONTH') {
                                showLine = dayOfWeek === 0;
                                strokeColor = '#f0f0f0';
                            }

                            if (!showLine) return null;

                            return (
                                <line
                                    key={`vline-${i}`}
                                    x1={x}
                                    y1={0}
                                    x2={x}
                                    y2={chartHeight}
                                    stroke={strokeColor}
                                    strokeWidth={1}
                                />
                            );
                        })}

                        {/* Horizontal Lines */}
                        {rowData.map((row) => (
                            <line
                                key={`line-${row.key}`}
                                x1={0}
                                y1={row.start + ROW_HEIGHT + MILESTONE_LANE_HEIGHT}
                                x2={chartWidth}
                                y2={row.start + ROW_HEIGHT + MILESTONE_LANE_HEIGHT}
                                stroke="#f3f4f6"
                                strokeWidth={1}
                            />
                        ))}

                        {/* Layer 3: 마일스톤 */}
                        <rect x={0} y={0} width={chartWidth} height={MILESTONE_LANE_HEIGHT} fill="transparent" />
                        {milestoneLayouts.map((layout) => {
                            const isDragging = isMilestoneDragging(layout.milestone.id);
                            return (
                                <MilestoneMarker
                                    key={layout.milestone.id}
                                    milestone={layout.milestone}
                                    x={layout.x}
                                    labelLevel={layout.labelLevel}
                                    isDragging={isDragging}
                                    dragX={getMilestoneDragX(layout.milestone.id)}
                                    onMouseDown={onMilestoneUpdate ? handleMilestoneMouseDown : undefined}
                                    onDoubleClick={onMilestoneDoubleClick ? handleMilestoneDoubleClick : undefined}
                                />
                            );
                        })}
                        <line
                            x1={0}
                            y1={MILESTONE_LANE_HEIGHT}
                            x2={chartWidth}
                            y2={MILESTONE_LANE_HEIGHT}
                            stroke={GANTT_COLORS.grid}
                            strokeWidth={1}
                        />

                        {/* Layer 4: 태스크 바 (bar만) */}
                        {rowData.map((row) => {
                            const task = tasks[row.index];
                            if (!task) return null;

                            const y = row.start + (ROW_HEIGHT - BAR_HEIGHT) / 2 + MILESTONE_LANE_HEIGHT;

                            // Detail View에서 GROUP 타입이면 GroupSummaryBar 렌더링
                            if (!isMasterView && task.type === 'GROUP') {
                                return (
                                    <GroupSummaryBar
                                        key={`group-${row.key}`}
                                        group={task}
                                        allTasks={allTasks || tasks}
                                        y={y}
                                        minDate={minDate}
                                        pixelsPerDay={pixelsPerDay}
                                        isDraggable={!!onGroupDrag}
                                        currentDeltaDays={getGroupDragDeltaDays(task.id)}
                                        onDragStart={handleGroupBarMouseDown}
                                        onToggle={onGroupToggle}
                                    />
                                );
                            }

                            return (
                                <TaskBar
                                    key={row.key}
                                    task={task}
                                    y={y}
                                    minDate={minDate}
                                    pixelsPerDay={pixelsPerDay}
                                    isMasterView={isMasterView}
                                    renderMode="bar"
                                    allTasks={allTasks || tasks}
                                    holidays={holidays}
                                    calendarSettings={calendarSettings}
                                    isDraggable={!isMasterView && !!onBarDrag}
                                    dragInfo={getDragInfo(task.id)}
                                    groupDragDeltaDays={getTaskGroupDragDeltaDays(task.id)}
                                    dependencyDragDeltaDays={getDependencyDragDeltaDays(task.id)}
                                    onDragStart={handleBarMouseDown}
                                    onDependencyDragStart={handleDependencyBarMouseDown}
                                    hasDependency={taskHasDependency(task.id)}
                                    onDoubleClick={!isMasterView && task.type === 'TASK' && onTaskDoubleClick
                                        ? () => onTaskDoubleClick(task)
                                        : undefined}
                                    onMouseEnter={() => setHoveredTaskId(task.id)}
                                    onMouseLeave={() => setHoveredTaskId(null)}
                                />
                            );
                        })}

                        {/* Layer 5: 종속성 선 */}
                        {!isMasterView && anchorDependencies.length > 0 && (
                            <DependencyLines
                                tasks={tasks}
                                dependencies={anchorDependencies}
                                minDate={minDate}
                                pixelsPerDay={pixelsPerDay}
                                selectedDepId={selectedDepId}
                                hoveredDepId={hoveredDepId}
                                onDependencyClick={handleDependencyClick}
                                onDependencyHover={handleDependencyHover}
                                holidays={holidays}
                                calendarSettings={calendarSettings}
                            />
                        )}

                        {/* Layer 5.5: 바 내 앵커 연결선 (들어오는 끝점 → 나가는 시작점) */}
                        {!isMasterView && anchorDependencies.length > 0 && (
                            <InBarConnectionLines
                                tasks={tasks}
                                dependencies={anchorDependencies}
                                minDate={minDate}
                                pixelsPerDay={pixelsPerDay}
                                holidays={holidays}
                                calendarSettings={calendarSettings}
                            />
                        )}

                        {/* Layer 6: 앵커 포인트 */}
                        {!isMasterView && rowData.map((row) => {
                            const task = tasks[row.index];
                            if (!task || task.type !== 'TASK') return null;

                            const isTaskHovered = hoveredTaskId === task.id;

                            return (
                                <AnchorPoints
                                    key={`anchor-${row.key}`}
                                    task={task}
                                    rowIndex={row.index}
                                    minDate={minDate}
                                    pixelsPerDay={pixelsPerDay}
                                    isHovered={isTaskHovered}
                                    isConnecting={isConnecting}
                                    connectingFrom={connectingFrom}
                                    dependencies={anchorDependencies}
                                    onAnchorClick={handleAnchorClick}
                                    onAnchorHover={handleAnchorHover}
                                    holidays={holidays}
                                    calendarSettings={calendarSettings}
                                />
                            );
                        })}

                        {/* Layer 6.5: 태스크 라벨 (종속선 위에 표시) */}
                        {rowData.map((row) => {
                            const task = tasks[row.index];
                            if (!task) return null;
                            // GROUP은 별도 처리 (GroupSummaryBar에서 라벨 포함)
                            if (!isMasterView && task.type === 'GROUP') return null;

                            const y = row.start + (ROW_HEIGHT - BAR_HEIGHT) / 2 + MILESTONE_LANE_HEIGHT;

                            return (
                                <TaskBar
                                    key={`label-${row.key}`}
                                    task={task}
                                    y={y}
                                    minDate={minDate}
                                    pixelsPerDay={pixelsPerDay}
                                    isMasterView={isMasterView}
                                    renderMode="label"
                                    allTasks={allTasks || tasks}
                                    holidays={holidays}
                                    calendarSettings={calendarSettings}
                                    dragInfo={getDragInfo(task.id)}
                                    groupDragDeltaDays={getTaskGroupDragDeltaDays(task.id)}
                                    dependencyDragDeltaDays={getDependencyDragDeltaDays(task.id)}
                                />
                            );
                        })}

                        {/* Layer 7: 연결 프리뷰 선 */}
                        {!isMasterView && connectingFrom && hoveredAnchor && connectingFrom.taskId !== hoveredAnchor.taskId && (() => {
                            const sourceTask = tasks.find(t => t.id === connectingFrom.taskId);
                            const targetTask = tasks.find(t => t.id === hoveredAnchor.taskId);
                            const sourceIndex = tasks.findIndex(t => t.id === connectingFrom.taskId);
                            const targetIndex = tasks.findIndex(t => t.id === hoveredAnchor.taskId);

                            if (!sourceTask || !targetTask || sourceIndex < 0 || targetIndex < 0) return null;

                            const sourcePos = getAnchorPosition(sourceTask, connectingFrom.dayIndex, sourceIndex, minDate, pixelsPerDay, holidays, calendarSettings);
                            const targetPos = getAnchorPosition(targetTask, hoveredAnchor.dayIndex, targetIndex, minDate, pixelsPerDay, holidays, calendarSettings);

                            return (
                                <ConnectionPreviewLine
                                    sourceX={sourcePos.x}
                                    sourceY={sourcePos.y}
                                    targetX={targetPos.x}
                                    targetY={targetPos.y}
                                />
                            );
                        })()}
                    </svg>

                    {/* Critical Path Bar (Level 2에서만 표시) */}
                    {!isMasterView && showCriticalPath && (
                        <CriticalPathBar
                            tasks={allTasks || tasks}
                            holidays={holidays}
                            calendarSettings={calendarSettings}
                            minDate={minDate}
                            pixelsPerDay={pixelsPerDay}
                            totalWidth={chartWidth}
                            activeCPId={activeCPId}
                        />
                    )}

                    {/* 컨텍스트 메뉴 */}
                    {contextMenu && onContextMenuAddMilestone && (
                        <TimelineContextMenu
                            x={contextMenu.x}
                            y={contextMenu.y}
                            clickedDate={contextMenu.clickedDate}
                            viewMode={viewMode}
                            onAddTask={onContextMenuAddTask}
                            onAddMilestone={onContextMenuAddMilestone}
                            onClose={handleContextMenuClose}
                            selectedDependencyId={selectedDepId}
                            onDeleteDependency={onAnchorDependencyDelete ? handleDepDelete : undefined}
                        />
                    )}
                </div>
            </div>
        );
    }
);

GanttTimeline.displayName = 'GanttTimeline';
