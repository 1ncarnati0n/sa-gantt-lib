import React, { useMemo, forwardRef } from 'react';
import { useConstructionStore } from '../../store/useConstructionStore';
import { format, addDays, getDay, getYear, differenceInDays, isSameMonth, isSameWeek, getISOWeek } from 'date-fns';
import { ConstructionTask, Milestone } from '../../types/gantt';
import { isHoliday } from '../../utils/dateUtils';
import { GANTT_CONSTANTS } from '../../utils/ganttConstants';

const { ROW_HEIGHT, MILESTONE_LANE_HEIGHT, BAR_HEIGHT } = GANTT_CONSTANTS;

// --- Interaction Helpers ---

interface DragState {
    taskId: string;
    type: 'RESIZE_NET' | 'RESIZE_INDIRECT' | 'MOVE';
    initialX: number;
    initialNetDays?: number;
    initialIndirectDays?: number;
    initialStartDate?: Date;
}

interface GanttBarProps {
    task: ConstructionTask;
    y: number;
    dateToX: (date: Date) => number;
    isMasterView: boolean;
    pixelsPerDay: number;
}

const GanttBar: React.FC<GanttBarProps & {
    onMouseDown: (e: React.MouseEvent, task: ConstructionTask, type: 'RESIZE_NET' | 'RESIZE_INDIRECT' | 'MOVE') => void;
}> = ({ task, y, dateToX, isMasterView, pixelsPerDay, onMouseDown }) => {
    // GROUP은 바를 렌더링하지 않음 (빈 행으로 유지)
    if (task.type === 'GROUP') {
        return null;
    }

    const height = BAR_HEIGHT;
    const radius = 4;
    const startX = dateToX(task.startDate);

    if (isMasterView) {
        // Level 1: Aggregate Bar (Vermilion/Teal) - Read Only
        const workDays = task.summary?.workDaysTotal || 0;
        const nonWorkDays = task.summary?.nonWorkDaysTotal || 0;
        const totalDays = workDays + nonWorkDays;

        if (totalDays === 0) return null;

        const totalWidth = totalDays * pixelsPerDay;
        const workWidth = workDays * pixelsPerDay;
        const nonWorkWidth = nonWorkDays * pixelsPerDay;

        return (
            <g transform={`translate(${startX}, ${y})`} className="cursor-pointer group">
                {/* Work Part (Vermilion) */}
                <rect
                    x={0}
                    y={0}
                    width={workWidth}
                    height={height}
                    fill="#E34234"
                    rx={radius}
                    ry={radius}
                    className="opacity-90 hover:opacity-100 transition-opacity filter drop-shadow-sm"
                />
                {/* Non-Work Part (Teal) */}
                <rect
                    x={workWidth}
                    y={0}
                    width={nonWorkWidth}
                    height={height}
                    fill="#008080"
                    rx={radius}
                    ry={radius}
                    className="opacity-90 hover:opacity-100 transition-opacity filter drop-shadow-sm"
                />

                {/* Label */}
                <text x={totalWidth + 8} y={height / 2 + 4} className="text-[11px] fill-gray-700 font-bold pointer-events-none select-none">
                    {task.name}
                </text>
            </g>
        );
    } else {
        // Level 2: Detail Bar (Red/Blue) - Interactive
        if (!task.task) return null;

        const { netWorkDays, indirectWorkDays, placement } = task.task;
        const netWidth = netWorkDays * pixelsPerDay;
        const indirectWidth = indirectWorkDays * pixelsPerDay;

        let netX = 0;
        let indirectX = 0;

        if (placement === 'PRE') {
            // Indirect -> Net
            indirectX = 0;
            netX = indirectWidth;
        } else {
            // Net -> Indirect
            netX = 0;
            indirectX = netWidth;
        }

        return (
            <g transform={`translate(${startX}, ${y})`} className="cursor-pointer group">
                {/* Indirect Work (Blue) */}
                {indirectWorkDays > 0 && (
                    <g>
                        <rect
                            x={indirectX}
                            y={0}
                            width={indirectWidth}
                            height={height}
                            fill="#448AFF"
                            rx={radius}
                            ry={radius}
                            className="opacity-90 hover:opacity-100 transition-opacity filter drop-shadow-sm"
                            onMouseDown={(e) => {
                                e.stopPropagation();
                                onMouseDown(e, task, 'MOVE');
                            }}
                        />
                        {/* Resize Handle for Indirect */}
                        <rect
                            x={indirectX + indirectWidth - 4}
                            y={0}
                            width={8}
                            height={height}
                            fill="transparent"
                            className="cursor-col-resize hover:fill-black/10"
                            onMouseDown={(e) => {
                                e.stopPropagation();
                                onMouseDown(e, task, 'RESIZE_INDIRECT');
                            }}
                        />
                    </g>
                )}

                {/* Net Work (Red) */}
                {netWorkDays > 0 && (
                    <g>
                        <rect
                            x={netX}
                            y={0}
                            width={netWidth}
                            height={height}
                            fill="#FF5252"
                            rx={radius}
                            ry={radius}
                            className="opacity-90 hover:opacity-100 transition-opacity filter drop-shadow-sm"
                            onMouseDown={(e) => {
                                e.stopPropagation();
                                onMouseDown(e, task, 'MOVE');
                            }}
                        />
                        {/* Resize Handle for Net Work */}
                        <rect
                            x={netX + netWidth - 4}
                            y={0}
                            width={8}
                            height={height}
                            fill="transparent"
                            className="cursor-col-resize hover:fill-black/10"
                            onMouseDown={(e) => {
                                e.stopPropagation();
                                onMouseDown(e, task, 'RESIZE_NET');
                            }}
                        />
                    </g>
                )}

                {/* Label */}
                <text x={netWidth + indirectWidth + 8} y={height / 2 + 4} className="text-[11px] fill-gray-700 font-medium pointer-events-none select-none">
                    {task.name}
                </text>
            </g>
        );
    }
};

interface MilestoneMarkerProps {
    milestone: Milestone;
    dateToX: (date: Date) => number;
}

const MilestoneMarker: React.FC<MilestoneMarkerProps> = ({ milestone, dateToX }) => {
    const x = dateToX(milestone.date);
    const size = 12;
    const y = MILESTONE_LANE_HEIGHT / 2;

    return (
        <g transform={`translate(${x}, ${y})`} className="cursor-pointer group z-20">
            {/* Vertical Guide Line (Dashed) */}
            <line
                x1="0"
                y1={0}
                x2="0"
                y2={1000}
                stroke="#E5E7EB"
                strokeWidth="2"
                strokeDasharray="4, 4"
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            />

            {/* Inverted Triangle Symbol */}
            <path
                d={`M ${-size / 2} ${-size / 2} L ${size / 2} ${-size / 2} L 0 ${size / 2} Z`}
                fill="#4B5563"
                stroke="white"
                strokeWidth="1"
                className="transition-all duration-150 group-hover:scale-125 group-hover:fill-blue-600 drop-shadow-sm"
            />

            {/* Label */}
            <text
                x={8}
                y={4}
                className="text-[11px] font-bold fill-gray-600 group-hover:fill-blue-700 transition-colors select-none"
            >
                {milestone.name}
            </text>
        </g>
    );
};

interface WeekendGridProps {
    effectiveMinDate: Date;
    totalDays: number;
    chartHeight: number;
    dateToX: (date: Date) => number;
    pixelsPerDay: number;
}

const WeekendGrid: React.FC<WeekendGridProps> = ({ effectiveMinDate, totalDays, chartHeight, dateToX, pixelsPerDay }) => {
    const { holidays, calendarSettings, zoomLevel } = useConstructionStore();

    const holidayRects = useMemo(() => {
        if (zoomLevel === 'MONTH') return []; // Too dense for month view

        const rects: React.ReactNode[] = [];
        for (let i = 0; i < totalDays; i++) {
            const date = addDays(effectiveMinDate, i);
            const isHol = isHoliday(date, holidays, calendarSettings);

            if (isHol) {
                const x = dateToX(date);
                rects.push(
                    <rect
                        key={`holiday-${i}`}
                        x={x}
                        y="0"
                        width={pixelsPerDay}
                        height={chartHeight}
                        fill="#f3f4f6"
                        className="pointer-events-none"
                    />
                );
            }
        }
        return rects;
    }, [effectiveMinDate, totalDays, chartHeight, dateToX, holidays, calendarSettings, zoomLevel, pixelsPerDay]);

    return <g>{holidayRects}</g>;
};

interface TimelineHeaderProps {
    effectiveMinDate: Date;
    totalDays: number;
    pixelsPerDay: number;
    headerHeight: number;
}

const TimelineHeader: React.FC<TimelineHeaderProps> = ({ effectiveMinDate, totalDays, pixelsPerDay, headerHeight }) => {
    const { holidays, calendarSettings, zoomLevel } = useConstructionStore();
    const headerDays = Array.from({ length: totalDays }, (_, i) => addDays(effectiveMinDate, i));
    
    // 전체 헤더 너비 계산 (스크롤 영역과 동기화)
    const totalWidth = totalDays * pixelsPerDay;

    // 1. Top Row: Year
    const topRow = useMemo(() => {
        const groups: { label: string, days: number }[] = [];
        let currentYear = getYear(headerDays[0]);
        let count = 0;

        headerDays.forEach(date => {
            if (getYear(date) !== currentYear) {
                groups.push({ label: `${currentYear}년`, days: count });
                currentYear = getYear(date);
                count = 1;
            } else {
                count++;
            }
        });
        groups.push({ label: `${currentYear}년`, days: count });

        return (
            <div className="flex h-[24px] bg-gray-100 text-gray-800 text-xs font-bold items-center border-b border-gray-300" style={{ minWidth: totalWidth }}>
                {groups.map((g, i) => (
                    <div
                        key={i}
                        className="border-r border-gray-300 pl-2 flex items-center shrink-0"
                        style={{ width: g.days * pixelsPerDay }}
                    >
                        {g.label}
                    </div>
                ))}
            </div>
        );
    }, [headerDays, pixelsPerDay, totalWidth]);

    // 2. Middle Row: Month
    const middleRow = useMemo(() => {
        const groups: { label: string, days: number }[] = [];
        let currentMonth = headerDays[0];
        let count = 0;

        headerDays.forEach(date => {
            if (!isSameMonth(date, currentMonth)) {
                groups.push({ label: format(currentMonth, 'M월'), days: count });
                currentMonth = date;
                count = 1;
            } else {
                count++;
            }
        });
        groups.push({ label: format(currentMonth, 'M월'), days: count });

        return (
            <div className="flex h-[24px] bg-gray-100 text-gray-700 text-xs font-medium items-center border-b border-gray-200" style={{ minWidth: totalWidth }}>
                {groups.map((g, i) => (
                    <div
                        key={i}
                        className="border-r border-gray-300 flex items-center justify-center shrink-0"
                        style={{ width: g.days * pixelsPerDay }}
                    >
                        {g.label}
                    </div>
                ))}
            </div>
        );
    }, [headerDays, pixelsPerDay, totalWidth]);

    // 3. Bottom Row: Week/Day based on Zoom
    const bottomRow = useMemo(() => {
        if (zoomLevel === 'DAY') {
            // Day View: Show Days
            return (
                <div className="flex h-[32px] items-center bg-white" style={{ minWidth: totalWidth }}>
                    {headerDays.map((date, index) => {
                        const day = getDay(date); // 0: Sun, 6: Sat
                        const isHol = isHoliday(date, holidays, calendarSettings);
                        const dayClasses = isHol ? 'text-red-500 bg-red-50/30' : 'text-gray-600';
                        const isSundayItem = day === 0;
                        const isSaturdayItem = day === 6;

                        let textColor = 'text-gray-600';
                        if (isSundayItem) textColor = 'text-red-500';
                        if (isSaturdayItem) textColor = 'text-blue-500';
                        if (isHol && !isSundayItem && !isSaturdayItem) textColor = 'text-red-500';

                        return (
                            <div
                                key={index}
                                className={`flex flex-col justify-center items-center font-medium border-r border-gray-100 h-full shrink-0 ${dayClasses}`}
                                style={{ width: `${pixelsPerDay}px`, minWidth: `${pixelsPerDay}px` }}
                            >
                                <span className={`text-[10px] leading-none ${textColor}`}>{format(date, 'd')}</span>
                                <span className={`text-[9px] font-bold leading-none mt-0.5 ${textColor}`}>
                                    {['일', '월', '화', '수', '목', '금', '토'][day]}
                                </span>
                            </div>
                        );
                    })}
                </div>
            );
        } else {
            // Week/Month View: Show Weeks
            const groups: { label: string, days: number }[] = [];
            let currentWeek = headerDays[0];
            let count = 0;

            headerDays.forEach(date => {
                if (!isSameWeek(date, currentWeek, { weekStartsOn: 0 })) {
                    groups.push({ label: `${getISOWeek(currentWeek)}주`, days: count });
                    currentWeek = date;
                    count = 1;
                } else {
                    count++;
                }
            });
            groups.push({ label: `${getISOWeek(currentWeek)}주`, days: count });

            return (
                <div className="flex h-[32px] items-center bg-white" style={{ minWidth: totalWidth }}>
                    {groups.map((g, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-center border-r border-gray-100 h-full text-xs font-medium text-gray-600 shrink-0"
                            style={{ width: g.days * pixelsPerDay }}
                        >
                            {g.label}
                        </div>
                    ))}
                </div>
            );
        }
    }, [headerDays, zoomLevel, pixelsPerDay, holidays, calendarSettings, totalWidth]);

    return (
        <div className="flex flex-col bg-white border-b border-gray-300 sticky top-0 z-20 shadow-sm" style={{ height: headerHeight, minWidth: totalWidth }}>
            {topRow}
            {middleRow}
            {bottomRow}
        </div>
    );
};

// --- Main Timeline Component ---

const GanttTimelineComponent = forwardRef<HTMLDivElement>((_, ref) => {
    const { tasks, milestones, expandedTaskIds, currentView, activeSummaryId, holidays, calendarSettings, zoomLevel, updateTaskDuration } = useConstructionStore();
    const [dragState, setDragState] = React.useState<DragState | null>(null);

    const pixelsPerDay = useMemo(() => {
        switch (zoomLevel) {
            case 'DAY': return 30;
            case 'WEEK': return 10;
            case 'MONTH': return 4;
            default: return 30;
        }
    }, [zoomLevel]);

    // Filter tasks based on Master-Detail View (sync with Grid)
    // 그리드와 동일한 로직으로 GROUP도 포함하여 행을 일치시킴
    const visibleTasks = useMemo(() => {
        if (currentView === 'MASTER') {
            // Master View: Show Level 1 (GROUP + CP) - 그리드와 동일하게
            const visible: ConstructionTask[] = [];

            tasks.forEach(task => {
                if (task.wbsLevel === 1 && !task.parentId) {
                    // Top-level GROUP or CP
                    visible.push(task);
                } else if (task.wbsLevel === 1 && task.parentId) {
                    // CP that belongs to a GROUP - show only if GROUP is expanded
                    if (expandedTaskIds.includes(task.parentId)) {
                        visible.push(task);
                    }
                }
            });

            return visible;
        } else {
            // Detail View: Show Level 2 Tasks of selected CP
            return tasks.filter(t => t.wbsLevel === 2 && t.parentId === activeSummaryId);
        }
    }, [tasks, currentView, activeSummaryId, expandedTaskIds]);

    // Calculate Scales
    const { effectiveMinDate, totalDays, dateToX } = useMemo(() => {
        const allDates = [
            ...visibleTasks.flatMap(t => [t.startDate, t.endDate].filter(Boolean) as Date[]),
            ...milestones.map(m => m.date)
        ];

        if (allDates.length === 0) {
            const today = new Date();
            return {
                effectiveMinDate: today,
                effectiveMaxDate: addDays(today, 30),
                totalDays: 30,
                dateToX: () => 0
            };
        }

        const minDate = new Date(Math.min(...allDates.map(d => d.getTime())));
        const maxDate = new Date(Math.max(...allDates.map(d => d.getTime())));

        const effectiveMin = addDays(minDate, -5);
        const effectiveMax = addDays(maxDate, 10);
        const totalTime = effectiveMax.getTime() - effectiveMin.getTime();
        const days = Math.ceil(totalTime / (1000 * 60 * 60 * 24));

        const toX = (date: Date) => {
            const diffDays = differenceInDays(date, effectiveMin);
            return diffDays * pixelsPerDay;
        };

        return { effectiveMinDate: effectiveMin, effectiveMaxDate: effectiveMax, totalDays: days, dateToX: toX };
    }, [visibleTasks, milestones, pixelsPerDay]);


    const handleMouseDown = (e: React.MouseEvent, task: ConstructionTask, type: 'RESIZE_NET' | 'RESIZE_INDIRECT' | 'MOVE') => {
        if (!task.task) return;
        setDragState({
            taskId: task.id,
            type,
            initialX: e.clientX,
            initialNetDays: task.task.netWorkDays,
            initialIndirectDays: task.task.indirectWorkDays,
            initialStartDate: task.startDate
        });
    };

    const handleMouseMove = React.useCallback((e: MouseEvent) => {
        if (!dragState) return;

        const deltaX = e.clientX - dragState.initialX;
        const deltaDays = Math.round(deltaX / pixelsPerDay);

        if (deltaDays === 0) return;

        if (dragState.type === 'RESIZE_NET' && dragState.initialNetDays !== undefined && dragState.initialIndirectDays !== undefined) {
            const newNetDays = Math.max(1, dragState.initialNetDays + deltaDays);
            updateTaskDuration(dragState.taskId, newNetDays, dragState.initialIndirectDays);
        } else if (dragState.type === 'RESIZE_INDIRECT' && dragState.initialNetDays !== undefined && dragState.initialIndirectDays !== undefined) {
            const newIndirectDays = Math.max(0, dragState.initialIndirectDays + deltaDays);
            updateTaskDuration(dragState.taskId, dragState.initialNetDays, newIndirectDays);
        }
    }, [dragState, pixelsPerDay, updateTaskDuration]);

    const handleMouseUp = React.useCallback(() => {
        setDragState(null);
    }, []);

    React.useEffect(() => {
        if (dragState) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [dragState, handleMouseMove, handleMouseUp]);

    const chartHeight = Math.max(visibleTasks.length * ROW_HEIGHT + 100, 500);
    const chartWidth = totalDays * pixelsPerDay;

    const headerHeight = 80; // Fixed height for 3-tier header (24 + 24 + 32)

    // const MILESTONE_LANE_HEIGHT = 40; // Define the constant here - already defined globally

    return (
        <div className="flex flex-col h-full w-full overflow-hidden bg-white">
            <div
                ref={ref}
                className="flex-1 overflow-auto relative"
                onMouseMove={(e) => {
                    // Track mouse for Ghost Line if linking
                    if (dragState?.type === 'LINK') {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const x = e.clientX - rect.left + e.currentTarget.scrollLeft;
                        const y = e.clientY - rect.top + e.currentTarget.scrollTop;
                        setDragState(prev => prev ? { ...prev, currentX: x, currentY: y } : null);
                    }
                }}
            >
                <TimelineHeader effectiveMinDate={effectiveMinDate} totalDays={totalDays} pixelsPerDay={pixelsPerDay} headerHeight={headerHeight} />

                <svg width={chartWidth} height={chartHeight} className="bg-white block">
                    {/* 1. Background Grid */}
                    <WeekendGrid effectiveMinDate={effectiveMinDate} totalDays={totalDays} chartHeight={chartHeight} dateToX={dateToX} pixelsPerDay={pixelsPerDay} />

                    {/* 2. Milestone Lane (Top) */}
                    <rect x="0" y="0" width={chartWidth} height={MILESTONE_LANE_HEIGHT} fill="transparent" />
                    {milestones.map((m) => (
                        <MilestoneMarker key={m.id} milestone={m} dateToX={dateToX} />
                    ))}
                    <line x1="0" y1={MILESTONE_LANE_HEIGHT} x2={chartWidth} y2={MILESTONE_LANE_HEIGHT} stroke="#e5e7eb" strokeWidth="1" />

                    {/* 3. Horizontal Lines for Tasks */}
                    {visibleTasks.map((_, index) => (
                        <line
                            key={`line-${index}`}
                            x1="0"
                            y1={index * ROW_HEIGHT + ROW_HEIGHT + MILESTONE_LANE_HEIGHT} // +40 for milestone lane
                            x2={chartWidth}
                            y2={index * ROW_HEIGHT + ROW_HEIGHT + MILESTONE_LANE_HEIGHT}
                            stroke="#f3f4f6"
                            strokeWidth="1"
                        />
                    ))}

                    {/* 4. GROUP Row Background (to sync with Grid) */}
                    {visibleTasks.map((task, index) => {
                        if (task.type === 'GROUP') {
                            const rowY = index * ROW_HEIGHT + MILESTONE_LANE_HEIGHT;
                            return (
                                <rect
                                    key={`group-bg-${task.id}`}
                                    x={0}
                                    y={rowY}
                                    width={chartWidth}
                                    height={ROW_HEIGHT}
                                    fill="#f9fafb"
                                    className="pointer-events-none"
                                />
                            );
                        }
                        return null;
                    })}

                    {/* 5. Task Bars */}
                    {visibleTasks.map((task, index) => {
                        const y = index * ROW_HEIGHT + (ROW_HEIGHT - 24) / 2 + MILESTONE_LANE_HEIGHT; // Center vertically + offset
                        return (
                            <GanttBar
                                key={task.id}
                                task={task}
                                y={y}
                                dateToX={dateToX}
                                isMasterView={task.wbsLevel === 1}
                                pixelsPerDay={pixelsPerDay}
                                onMouseDown={handleMouseDown}
                            />
                        );
                    })}
                </svg>
            </div>
        </div>
    );
});

GanttTimelineComponent.displayName = 'GanttTimeline';

export const GanttTimeline = GanttTimelineComponent;
