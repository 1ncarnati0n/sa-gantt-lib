'use client';

import React, { forwardRef, useMemo } from 'react';
import { format, addDays, getDay, getYear, isSameMonth, isSameWeek, getWeekOfMonth } from 'date-fns';
import {
    ConstructionTask,
    Milestone,
    ViewMode,
    ZoomLevel,
    CalendarSettings,
    GANTT_LAYOUT,
    GANTT_COLORS,
    ZOOM_CONFIG,
} from '../types';
import {
    isHoliday,
    calculateDateRange,
    dateToX,
} from '../utils/dateUtils';
import type { VirtualRow } from '../hooks/useGanttVirtualization';

const { ROW_HEIGHT, HEADER_HEIGHT, MILESTONE_LANE_HEIGHT, BAR_HEIGHT } = GANTT_LAYOUT;

// ============================================
// Sub Components
// ============================================

interface TimelineHeaderProps {
    minDate: Date;
    totalDays: number;
    pixelsPerDay: number;
    zoomLevel: ZoomLevel;
    holidays: Date[];
    calendarSettings: CalendarSettings;
}

const TimelineHeader: React.FC<TimelineHeaderProps> = ({
    minDate,
    totalDays,
    pixelsPerDay,
    zoomLevel,
    holidays,
    calendarSettings,
}) => {
    const headerDays = Array.from({ length: totalDays }, (_, i) => addDays(minDate, i));
    const totalWidth = totalDays * pixelsPerDay;

    // Top Row: Year
    const yearGroups = useMemo(() => {
        const groups: { label: string; days: number }[] = [];
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

        return groups;
    }, [headerDays]);

    // Middle Row: Month
    const monthGroups = useMemo(() => {
        const groups: { label: string; days: number }[] = [];
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

        return groups;
    }, [headerDays]);

    // Bottom Row: Week or Day (MONTH 줌 레벨에서는 주 표기 없음)
    const bottomRow = useMemo(() => {
        if (zoomLevel === 'MONTH') {
            // MONTH 줌 레벨: 주 표기 없음, null 반환
            return null;
        } else if (zoomLevel === 'DAY') {
            return (
                <div className="flex h-[32px] items-center bg-white" style={{ minWidth: totalWidth }}>
                    {headerDays.map((date, index) => {
                        const day = getDay(date);
                        const isHol = isHoliday(date, holidays, calendarSettings);
                        const isSunday = day === 0;
                        const isSaturday = day === 6;

                        let textColor = 'text-gray-600';
                        if (isSunday) textColor = 'text-red-500';
                        if (isSaturday) textColor = 'text-blue-500';
                        if (isHol && !isSunday && !isSaturday) textColor = 'text-red-500';

                        return (
                            <div
                                key={index}
                                className={`flex h-full shrink-0 flex-col items-center justify-center border-r border-gray-100 font-medium ${
                                    isHol ? 'bg-red-50/30' : ''
                                }`}
                                style={{ width: pixelsPerDay, minWidth: pixelsPerDay }}
                            >
                                <span className={`text-[10px] leading-none ${textColor}`}>
                                    {format(date, 'd')}
                                </span>
                                <span className={`mt-0.5 text-[9px] font-bold leading-none ${textColor}`}>
                                    {['일', '월', '화', '수', '목', '금', '토'][day]}
                                </span>
                            </div>
                        );
                    })}
                </div>
            );
        } else {
            // WEEK View (월별 주차로 표시)
            const groups: { label: string; days: number }[] = [];
            let currentWeek = headerDays[0];
            let count = 0;

            headerDays.forEach(date => {
                if (!isSameWeek(date, currentWeek, { weekStartsOn: 0 })) {
                    groups.push({ label: `${getWeekOfMonth(currentWeek, { weekStartsOn: 0 })}주`, days: count });
                    currentWeek = date;
                    count = 1;
                } else {
                    count++;
                }
            });
            groups.push({ label: `${getWeekOfMonth(currentWeek, { weekStartsOn: 0 })}주`, days: count });

            return (
                <div className="flex h-[32px] items-center bg-white" style={{ minWidth: totalWidth }}>
                    {groups.map((g, i) => (
                        <div
                            key={i}
                            className="flex h-full shrink-0 items-center justify-center border-r border-gray-100 text-xs font-medium text-gray-600"
                            style={{ width: g.days * pixelsPerDay }}
                        >
                            {g.label}
                        </div>
                    ))}
                </div>
            );
        }
    }, [headerDays, zoomLevel, pixelsPerDay, holidays, calendarSettings, totalWidth]);

    // MONTH 줌 레벨: 연도 2줄(48px) + 월 1줄(32px)
    // WEEK/DAY 줌 레벨: 연도 1줄(24px) + 월 1줄(24px) + 주/일 1줄(32px)
    const isMonthView = zoomLevel === 'MONTH';

    return (
        <div
            className="sticky top-0 z-20 flex flex-col border-b border-gray-300 bg-white shadow-sm"
            style={{ height: HEADER_HEIGHT, minWidth: totalWidth }}
        >
            {isMonthView ? (
                <>
                    {/* MONTH View: Year Row (2줄 높이 = 48px) */}
                    <div 
                        className="flex h-[48px] items-center border-b border-gray-300 bg-gray-100 text-sm font-bold text-gray-800" 
                        style={{ minWidth: totalWidth }}
                    >
                        {yearGroups.map((g, i) => (
                            <div
                                key={i}
                                className="flex h-full shrink-0 items-center justify-center border-r border-gray-300"
                                style={{ width: g.days * pixelsPerDay }}
                            >
                                {g.label}
                            </div>
                        ))}
                    </div>

                    {/* MONTH View: Month Row (1줄 높이 = 32px, 각 월이 한 칸) */}
                    <div 
                        className="flex h-[32px] items-center bg-white text-xs font-medium text-gray-700" 
                        style={{ minWidth: totalWidth }}
                    >
                        {monthGroups.map((g, i) => (
                            <div
                                key={i}
                                className="flex h-full shrink-0 items-center justify-center border-r border-gray-200"
                                style={{ width: g.days * pixelsPerDay }}
                            >
                                {g.label}
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <>
                    {/* WEEK/DAY View: Year Row */}
                    <div 
                        className="flex h-[24px] items-center border-b border-gray-300 bg-gray-100 text-xs font-bold text-gray-800" 
                        style={{ minWidth: totalWidth }}
                    >
                        {yearGroups.map((g, i) => (
                            <div
                                key={i}
                                className="flex shrink-0 items-center border-r border-gray-300 pl-2"
                                style={{ width: g.days * pixelsPerDay }}
                            >
                                {g.label}
                            </div>
                        ))}
                    </div>

                    {/* WEEK/DAY View: Month Row */}
                    <div 
                        className="flex h-[24px] items-center border-b border-gray-200 bg-gray-100 text-xs font-medium text-gray-700" 
                        style={{ minWidth: totalWidth }}
                    >
                        {monthGroups.map((g, i) => (
                            <div
                                key={i}
                                className="flex shrink-0 items-center justify-center border-r border-gray-300"
                                style={{ width: g.days * pixelsPerDay }}
                            >
                                {g.label}
                            </div>
                        ))}
                    </div>

                    {/* WEEK/DAY View: Day/Week Row */}
                    {bottomRow}
                </>
            )}
        </div>
    );
};

// ============================================
// Weekend/Holiday Grid
// ============================================

interface WeekendGridProps {
    minDate: Date;
    totalDays: number;
    chartHeight: number;
    pixelsPerDay: number;
    holidays: Date[];
    calendarSettings: CalendarSettings;
    zoomLevel: ZoomLevel;
}

const WeekendGrid: React.FC<WeekendGridProps> = ({
    minDate,
    totalDays,
    chartHeight,
    pixelsPerDay,
    holidays,
    calendarSettings,
    zoomLevel,
}) => {
    const holidayRects = useMemo(() => {
        if (zoomLevel === 'MONTH') return []; // Too dense

        const rects: React.ReactNode[] = [];
        for (let i = 0; i < totalDays; i++) {
            const date = addDays(minDate, i);
            const isHol = isHoliday(date, holidays, calendarSettings);

            if (isHol) {
                const x = i * pixelsPerDay;
                rects.push(
                    <rect
                        key={`holiday-${i}`}
                        x={x}
                        y={0}
                        width={pixelsPerDay}
                        height={chartHeight}
                        fill={GANTT_COLORS.weekend}
                        className="pointer-events-none"
                    />
                );
            }
        }
        return rects;
    }, [minDate, totalDays, chartHeight, pixelsPerDay, holidays, calendarSettings, zoomLevel]);

    return <g>{holidayRects}</g>;
};

// ============================================
// Milestone Marker
// ============================================

interface MilestoneMarkerProps {
    milestone: Milestone;
    x: number;
}

const MilestoneMarker: React.FC<MilestoneMarkerProps> = ({ milestone, x }) => {
    const size = 12;
    const y = MILESTONE_LANE_HEIGHT / 2;

    return (
        <g transform={`translate(${x}, ${y})`} className="group cursor-pointer">
            {/* Vertical Guide Line */}
            <line
                x1={0}
                y1={0}
                x2={0}
                y2={1000}
                stroke={GANTT_COLORS.grid}
                strokeWidth={2}
                strokeDasharray="4, 4"
                className="opacity-0 transition-opacity duration-200 group-hover:opacity-100"
            />

            {/* Triangle Symbol */}
            <path
                d={`M ${-size / 2} ${-size / 2} L ${size / 2} ${-size / 2} L 0 ${size / 2} Z`}
                fill={GANTT_COLORS.milestone}
                stroke="white"
                strokeWidth={1}
                className="drop-shadow-sm transition-all duration-150 group-hover:scale-125 group-hover:fill-blue-600"
            />

            {/* Label */}
            <text
                x={8}
                y={4}
                className="select-none text-[11px] font-bold fill-gray-600 transition-colors group-hover:fill-blue-700"
            >
                {milestone.name}
            </text>
        </g>
    );
};

// ============================================
// Task Bar (Level 1 & Level 2)
// ============================================

interface TaskBarProps {
    task: ConstructionTask;
    y: number;
    minDate: Date;
    pixelsPerDay: number;
    isMasterView: boolean;
}

const TaskBar: React.FC<TaskBarProps> = ({
    task,
    y,
    minDate,
    pixelsPerDay,
    isMasterView,
}) => {
    // GROUP은 바를 렌더링하지 않음
    if (task.type === 'GROUP') return null;

    const radius = 4;
    const startX = dateToX(task.startDate, minDate, pixelsPerDay);

    if (isMasterView) {
        // Level 1: Aggregate Bar (Vermilion/Teal)
        const workDays = task.summary?.workDaysTotal || 0;
        const nonWorkDays = task.summary?.nonWorkDaysTotal || 0;
        const totalDays = workDays + nonWorkDays;

        if (totalDays === 0) return null;

        const workWidth = workDays * pixelsPerDay;
        const nonWorkWidth = nonWorkDays * pixelsPerDay;
        const totalWidth = workWidth + nonWorkWidth;

        return (
            <g transform={`translate(${startX}, ${y})`} className="group cursor-pointer">
                {/* Work Part (Vermilion) */}
                <rect
                    x={0}
                    y={0}
                    width={workWidth}
                    height={BAR_HEIGHT}
                    fill={GANTT_COLORS.vermilion}
                    rx={radius}
                    ry={radius}
                    className="drop-shadow-sm opacity-90 transition-opacity hover:opacity-100"
                />
                {/* Non-Work Part (Teal) */}
                <rect
                    x={workWidth}
                    y={0}
                    width={nonWorkWidth}
                    height={BAR_HEIGHT}
                    fill={GANTT_COLORS.teal}
                    rx={radius}
                    ry={radius}
                    className="drop-shadow-sm opacity-90 transition-opacity hover:opacity-100"
                />

                {/* Label */}
                <text
                    x={totalWidth + 8}
                    y={BAR_HEIGHT / 2 + 4}
                    className="pointer-events-none select-none text-[11px] font-bold fill-gray-700"
                >
                    {task.name}
                </text>
            </g>
        );
    } else {
        // Level 2: Detail Bar (Red/Blue)
        if (!task.task) return null;

        const { netWorkDays, indirectWorkDays, placement } = task.task;
        const netWidth = netWorkDays * pixelsPerDay;
        const indirectWidth = indirectWorkDays * pixelsPerDay;

        let netX = 0;
        let indirectX = 0;

        if (placement === 'PRE') {
            indirectX = 0;
            netX = indirectWidth;
        } else {
            netX = 0;
            indirectX = netWidth;
        }

        return (
            <g transform={`translate(${startX}, ${y})`} className="group cursor-pointer">
                {/* Indirect Work (Blue) */}
                {indirectWorkDays > 0 && (
                    <rect
                        x={indirectX}
                        y={0}
                        width={indirectWidth}
                        height={BAR_HEIGHT}
                        fill={GANTT_COLORS.blue}
                        rx={radius}
                        ry={radius}
                        className="drop-shadow-sm opacity-90 transition-opacity hover:opacity-100"
                    />
                )}

                {/* Net Work (Red) */}
                {netWorkDays > 0 && (
                    <rect
                        x={netX}
                        y={0}
                        width={netWidth}
                        height={BAR_HEIGHT}
                        fill={GANTT_COLORS.red}
                        rx={radius}
                        ry={radius}
                        className="drop-shadow-sm opacity-90 transition-opacity hover:opacity-100"
                    />
                )}

                {/* Label */}
                <text
                    x={netWidth + indirectWidth + 8}
                    y={BAR_HEIGHT / 2 + 4}
                    className="pointer-events-none select-none text-[11px] font-medium fill-gray-700"
                >
                    {task.name}
                </text>
            </g>
        );
    }
};

// ============================================
// SVG Defs
// ============================================

const SvgDefs: React.FC = () => (
    <defs>
        <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
        >
            <polygon points="0 0, 10 3.5, 0 7" fill={GANTT_COLORS.dependency} />
        </marker>
    </defs>
);

// ============================================
// Main Timeline Component
// ============================================

interface GanttTimelineProps {
    tasks: ConstructionTask[];
    milestones: Milestone[];
    viewMode: ViewMode;
    zoomLevel: ZoomLevel;
    holidays: Date[];
    calendarSettings: CalendarSettings;
    onTaskUpdate?: (task: ConstructionTask) => void;
    /** 가상화된 행 목록 */
    virtualRows?: VirtualRow[];
    /** 전체 높이 */
    totalHeight?: number;
}

export const GanttTimeline = forwardRef<HTMLDivElement, GanttTimelineProps>(
    ({ tasks, milestones, viewMode, zoomLevel, holidays, calendarSettings, virtualRows, totalHeight: virtualTotalHeight }, ref) => {
        const pixelsPerDay = ZOOM_CONFIG[zoomLevel].pixelsPerDay;
        const isMasterView = viewMode === 'MASTER';
        
        // 가상화가 활성화되었는지 확인
        const isVirtualized = virtualRows && virtualRows.length > 0;

        // Calculate date range
        const { minDate, totalDays } = useMemo(() => {
            return calculateDateRange(tasks, milestones, 60);
        }, [tasks, milestones]);

        const chartWidth = totalDays * pixelsPerDay;
        const chartHeight = isVirtualized 
            ? Math.max((virtualTotalHeight || 0) + MILESTONE_LANE_HEIGHT + 100, 500)
            : Math.max(tasks.length * ROW_HEIGHT + MILESTONE_LANE_HEIGHT + 100, 500);

        return (
            <div className="flex h-full w-full flex-col overflow-hidden bg-white">
                <div ref={ref} className="relative flex-1 overflow-auto">
                    <TimelineHeader
                        minDate={minDate}
                        totalDays={totalDays}
                        pixelsPerDay={pixelsPerDay}
                        zoomLevel={zoomLevel}
                        holidays={holidays}
                        calendarSettings={calendarSettings}
                    />

                    <svg width={chartWidth} height={chartHeight} className="block bg-white">
                        <SvgDefs />

                        {/* Weekend/Holiday Grid */}
                        <WeekendGrid
                            minDate={minDate}
                            totalDays={totalDays}
                            chartHeight={chartHeight}
                            pixelsPerDay={pixelsPerDay}
                            holidays={holidays}
                            calendarSettings={calendarSettings}
                            zoomLevel={zoomLevel}
                        />

                        {/* Milestone Lane */}
                        <rect x={0} y={0} width={chartWidth} height={MILESTONE_LANE_HEIGHT} fill="transparent" />
                        {milestones.map((m) => (
                            <MilestoneMarker
                                key={m.id}
                                milestone={m}
                                x={dateToX(m.date, minDate, pixelsPerDay)}
                            />
                        ))}
                        <line
                            x1={0}
                            y1={MILESTONE_LANE_HEIGHT}
                            x2={chartWidth}
                            y2={MILESTONE_LANE_HEIGHT}
                            stroke={GANTT_COLORS.grid}
                            strokeWidth={1}
                        />

                        {/* Horizontal Lines (가상화 적용) */}
                        {(isVirtualized ? virtualRows : tasks.map((_, i) => ({ index: i, start: i * ROW_HEIGHT, size: ROW_HEIGHT, key: i }))).map((row) => (
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

                        {/* GROUP Row Background (가상화 적용) */}
                        {(isVirtualized ? virtualRows : tasks.map((_, i) => ({ index: i, start: i * ROW_HEIGHT, size: ROW_HEIGHT, key: i }))).map((row) => {
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
                                    fill="#f9fafb"
                                    className="pointer-events-none"
                                />
                            );
                        })}

                        {/* Task Bars (가상화 적용) */}
                        {(isVirtualized ? virtualRows : tasks.map((_, i) => ({ index: i, start: i * ROW_HEIGHT, size: ROW_HEIGHT, key: i }))).map((row) => {
                            const task = tasks[row.index];
                            if (!task) return null;
                            
                            const y = row.start + (ROW_HEIGHT - BAR_HEIGHT) / 2 + MILESTONE_LANE_HEIGHT;
                            return (
                                <TaskBar
                                    key={row.key}
                                    task={task}
                                    y={y}
                                    minDate={minDate}
                                    pixelsPerDay={pixelsPerDay}
                                    isMasterView={isMasterView}
                                />
                            );
                        })}
                    </svg>
                </div>
            </div>
        );
    }
);

GanttTimeline.displayName = 'GanttTimeline';
