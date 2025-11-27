import React, { useMemo, forwardRef } from 'react';
import { useConstructionStore } from '../../store/useConstructionStore';
import { format, addDays, getDay, getYear, differenceInDays, isSameMonth, isSameWeek, startOfWeek, endOfWeek, getISOWeek } from 'date-fns';
import { ConstructionTask, Milestone, Dependency, CalendarSettings } from '../../types/gantt';
import { calculateDualCalendarDates, getAnchorDate, isHoliday } from '../../utils/dateUtils';

const ROW_HEIGHT = 40;
const MILESTONE_LANE_HEIGHT = 40; // Height reserved for milestones within the SVG

// --- Sub-components ---

const Defs = () => (
    <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#9CA3AF" />
        </marker>
    </defs>
);

interface DependencyLinkProps {
    dependency: Dependency;
    sourceTask: ConstructionTask;
    targetTask: ConstructionTask;
    sourceIndex: number;
    targetIndex: number;
    dateToX: (date: Date) => number;
    holidays: Date[];
    calendarSettings: CalendarSettings;
}

const DependencyLink: React.FC<DependencyLinkProps> = ({ dependency, sourceTask, targetTask, sourceIndex, targetIndex, dateToX, holidays, calendarSettings }) => {
    const sourceDates = calculateDualCalendarDates(sourceTask, holidays, calendarSettings);
    const targetDates = calculateDualCalendarDates(targetTask, holidays, calendarSettings);

    const sourceDate = getAnchorDate(sourceTask, dependency.sourceAnchor, sourceDates);
    const targetDate = getAnchorDate(targetTask, dependency.targetAnchor, targetDates);

    const x1 = dateToX(sourceDate);
    const y1 = sourceIndex * ROW_HEIGHT + (ROW_HEIGHT - 24) / 2 + MILESTONE_LANE_HEIGHT + 12; // Center of bar

    const x2 = dateToX(targetDate);
    const y2 = targetIndex * ROW_HEIGHT + (ROW_HEIGHT - 24) / 2 + MILESTONE_LANE_HEIGHT + 12;

    // Bezier Curve Logic
    const controlPointOffset = 30;
    const path = `M ${x1} ${y1} C ${x1 + controlPointOffset} ${y1}, ${x2 - controlPointOffset} ${y2}, ${x2} ${y2}`;

    return (
        <path
            d={path}
            fill="none"
            stroke="#9CA3AF"
            strokeWidth="1.5"
            markerEnd="url(#arrowhead)"
            className="hover:stroke-gray-600 transition-colors cursor-pointer"
        >
            <title>{`${sourceTask.name} -> ${targetTask.name}`}</title>
        </path>
    );
};

interface GanttBarProps {
    task: ConstructionTask;
    y: number;
    dateToX: (date: Date) => number;
    isMasterView: boolean;
    pixelsPerDay: number;
    headerHeight: number; // Added headerHeight prop
}

const GanttBar: React.FC<GanttBarProps> = ({ task, y, dateToX, isMasterView, pixelsPerDay, headerHeight }) => {
    const height = 24;
    const radius = 4;
    const startX = dateToX(task.startDate);

    // Adjust Y based on header height difference if needed, but usually Y is relative to SVG content start
    // Here y is passed from parent loop which accounts for headerHeight? No, SVG is inside scrollable div.
    // The SVG starts AFTER the header. So y is relative to SVG top.

    if (isMasterView) {
        // Level 1: Aggregate Bar (Vermilion/Teal)
        const workDays = task.summary?.workDaysTotal || 0;
        const nonWorkDays = task.summary?.nonWorkDaysTotal || 0;
        const totalDays = workDays + nonWorkDays;

        if (totalDays === 0) return null;

        const totalWidth = totalDays * pixelsPerDay;
        const workWidth = workDays * pixelsPerDay;
        const nonWorkWidth = nonWorkDays * pixelsPerDay;

        return (
            <g transform={`translate(${startX}, ${y})`} className="cursor-pointer group">
                {/* Work Part */}
                <rect
                    x={0}
                    y={0}
                    width={workWidth}
                    height={height}
                    fill="var(--color-vermilion)"
                    rx={radius}
                    ry={radius}
                    className="opacity-90 hover:opacity-100 transition-opacity"
                />
                {/* Non-Work Part */}
                <rect
                    x={workWidth}
                    y={0}
                    width={nonWorkWidth}
                    height={height}
                    fill="var(--color-teal)"
                    rx={radius}
                    ry={radius}
                    className="opacity-90 hover:opacity-100 transition-opacity"
                />

                {/* Label */}
                <text x={totalWidth + 8} y={height / 2 + 5} className="text-xs fill-gray-700 font-bold pointer-events-none">
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
            <g transform={`translate(${startX}, ${y})`} className="cursor-pointer group">
                {/* Indirect Work (Blue) */}
                {indirectWorkDays > 0 && (
                    <rect
                        x={indirectX}
                        y={0}
                        width={indirectWidth}
                        height={height}
                        fill="#448AFF" // Blue
                        rx={radius}
                        ry={radius}
                        className="opacity-90 hover:opacity-100 transition-opacity"
                    />
                )}

                {/* Net Work (Red) */}
                {netWorkDays > 0 && (
                    <rect
                        x={netX}
                        y={0}
                        width={netWidth}
                        height={height}
                        fill="#FF5252" // Red
                        rx={radius}
                        ry={radius}
                        className="opacity-90 hover:opacity-100 transition-opacity"
                    />
                )}

                {/* Label */}
                <text x={netWidth + indirectWidth + 8} y={height / 2 + 5} className="text-xs fill-gray-700 font-medium pointer-events-none">
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
    const size = 14;
    const y = MILESTONE_LANE_HEIGHT / 2; // Center vertically in milestone lane

    return (
        <g transform={`translate(${x}, ${y})`} className="cursor-pointer group z-20">
            {/* Inverted Triangle Symbol */}
            <path
                d={`M ${-size / 2} ${-size / 2} L ${size / 2} ${-size / 2} L 0 ${size / 2} Z`}
                fill="#333"
                className="transition-all duration-150 group-hover:scale-125 hover:fill-blue-600"
            />
            {/* Vertical Guide Line */}
            <line x1="0" y1={size / 2} x2="0" y2={1000} stroke="#333" strokeDasharray="3, 3" opacity="0.3" pointerEvents="none" />

            <text x={10} y={5} className="text-xs font-bold fill-gray-800">{milestone.name}</text>
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

    // 1. Top Row: Year (or Year + Month for Day view)
    const topRow = useMemo(() => {
        if (zoomLevel === 'DAY') {
            // Group by Month (Year + Month)
            const groups: { label: string, days: number }[] = [];
            let currentMonth = headerDays[0];
            let count = 0;

            headerDays.forEach(date => {
                if (!isSameMonth(date, currentMonth)) {
                    groups.push({ label: format(currentMonth, 'yyyy년 M월'), days: count });
                    currentMonth = date;
                    count = 1;
                } else {
                    count++;
                }
            });
            groups.push({ label: format(currentMonth, 'yyyy년 M월'), days: count });

            return (
                <div className="flex h-[30px] bg-gray-700 text-white text-xs font-bold items-center">
                    {groups.map((g, i) => (
                        <div
                            key={i}
                            className="border-r border-gray-600 pl-2 flex items-center justify-center"
                            style={{ width: g.days * pixelsPerDay }}
                        >
                            {g.label}
                        </div>
                    ))}
                </div>
            );
        } else {
            // Group by Year
            const groups: { year: number, days: number }[] = [];
            let currentYear = getYear(headerDays[0]);
            let count = 0;

            headerDays.forEach(date => {
                if (getYear(date) !== currentYear) {
                    groups.push({ year: currentYear, days: count });
                    currentYear = getYear(date);
                    count = 1;
                } else {
                    count++;
                }
            });
            groups.push({ year: currentYear, days: count });

            return (
                <div className="flex h-6 bg-gray-700 text-white text-xs font-bold items-center">
                    {groups.map((g, i) => (
                        <div
                            key={i}
                            className="border-r border-gray-600 pl-2 flex items-center"
                            style={{ width: g.days * pixelsPerDay }}
                        >
                            {g.year}년차
                        </div>
                    ))}
                </div>
            );
        }
    }, [headerDays, zoomLevel, pixelsPerDay]);

    // 2. Middle Row: Week (Only for Day View)
    const middleRow = useMemo(() => {
        if (zoomLevel !== 'DAY') return null;

        const groups: { label: string, days: number }[] = [];
        let currentWeek = startOfWeek(headerDays[0], { weekStartsOn: 0 }); // Start of week for the first day
        let count = 0;

        headerDays.forEach(date => {
            if (!isSameWeek(date, currentWeek, { weekStartsOn: 0 })) {
                groups.push({ label: `${getISOWeek(currentWeek)}주`, days: count });
                currentWeek = startOfWeek(date, { weekStartsOn: 0 });
                count = 1;
            } else {
                count++;
            }
        });
        groups.push({ label: `${getISOWeek(currentWeek)}주`, days: count });

        return (
            <div className="flex h-[30px] bg-gray-100 text-gray-600 text-xs font-medium items-center border-b border-gray-200">
                {groups.map((g, i) => (
                    <div
                        key={i}
                        className="border-r border-gray-300 flex items-center justify-center"
                        style={{ width: g.days * pixelsPerDay }}
                    >
                        {g.label}
                    </div>
                ))}
            </div>
        );
    }, [headerDays, zoomLevel, pixelsPerDay]);

    // 3. Bottom Row: Day/Week/Month
    const bottomRow = useMemo(() => {
        if (zoomLevel === 'MONTH') {
            // Group by Month
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
                <div className="flex h-9 items-end pb-1">
                    {groups.map((g, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-center border-r border-gray-100 h-full text-xs font-medium text-gray-600"
                            style={{ width: g.days * pixelsPerDay }}
                        >
                            {g.label}
                        </div>
                    ))}
                </div>
            );
        } else if (zoomLevel === 'WEEK') {
            // Group by Week
            const groups: { label: string, days: number }[] = [];
            let currentWeek = headerDays[0];
            let count = 0;

            headerDays.forEach(date => {
                if (!isSameWeek(date, currentWeek, { weekStartsOn: 0 })) { // Sunday start
                    groups.push({ label: format(currentWeek, 'w주'), days: count });
                    currentWeek = date;
                    count = 1;
                } else {
                    count++;
                }
            });
            groups.push({ label: format(currentWeek, 'w주'), days: count });

            return (
                <div className="flex h-9 items-end pb-1">
                    {groups.map((g, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-center border-r border-gray-100 h-full text-xs font-medium text-gray-600"
                            style={{ width: g.days * pixelsPerDay }}
                        >
                            {g.label}
                        </div>
                    ))}
                </div>
            );
        } else {
            // Day View (Default)
            return (
                <div className="flex h-[30px] items-center">
                    {headerDays.map((date, index) => {
                        const day = getDay(date); // 0: Sun, 6: Sat
                        const isHol = isHoliday(date, holidays, calendarSettings);
                        const dayClasses = isHol ? 'text-red-500 bg-red-50/30' : 'text-gray-600';

                        return (
                            <div
                                key={index}
                                className={`flex flex-col justify-center items-center font-medium border-r border-gray-100 h-full ${dayClasses}`}
                                style={{ width: `${pixelsPerDay}px`, minWidth: `${pixelsPerDay}px` }}
                            >
                                <span className="text-[10px] leading-none">{format(date, 'd')}</span>
                                <span className="text-[9px] font-bold leading-none mt-0.5">
                                    {['일', '월', '화', '수', '목', '금', '토'][day]}
                                </span>
                            </div>
                        );
                    })}
                </div>
            );
        }
    }, [headerDays, zoomLevel, pixelsPerDay, holidays, calendarSettings]);

    return (
        <div className="flex flex-col bg-white border-b border-gray-300 sticky top-0 z-20 shadow-sm" style={{ height: headerHeight }}>
            {topRow}
            {middleRow}
            {bottomRow}
        </div>
    );
};

// --- Main Timeline Component ---

export const GanttTimeline = forwardRef<HTMLDivElement>((_, ref) => {
    const { tasks, milestones, currentView, activeSummaryId, holidays, calendarSettings, zoomLevel } = useConstructionStore();

    const pixelsPerDay = useMemo(() => {
        switch (zoomLevel) {
            case 'DAY': return 30;
            case 'WEEK': return 10;
            case 'MONTH': return 4;
            default: return 30;
        }
    }, [zoomLevel]);

    // Filter tasks based on view
    const visibleTasks = useMemo(() => {
        if (currentView === 'MASTER') {
            return tasks.filter(t => t.wbsLevel === 1);
        } else {
            return tasks.filter(t => t.wbsLevel === 2 && t.parentId === activeSummaryId);
        }
    }, [tasks, currentView, activeSummaryId]);

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

    const chartHeight = Math.max(visibleTasks.length * ROW_HEIGHT + 100, 500);
    const chartWidth = totalDays * pixelsPerDay;

    // Generate Links (Only in Detail View for now, or if we want L1 dependencies later)
    const links = useMemo(() => {
        if (currentView === 'MASTER') return [];

        const linkElements: React.ReactNode[] = [];

        visibleTasks.forEach((currentTask, currentIndex) => {
            currentTask.dependencies.forEach(dep => {
                // Dependency: currentTask depends on predecessor.
                // Link direction: Predecessor (Source) -> CurrentTask (Target)

                const predecessorTask = visibleTasks.find(t => t.id === dep.predecessorId);
                const predecessorIndex = visibleTasks.findIndex(t => t.id === dep.predecessorId);

                if (predecessorTask && predecessorIndex !== -1) {
                    linkElements.push(
                        <DependencyLink
                            key={`${predecessorTask.id}-${currentTask.id}`}
                            dependency={dep}
                            sourceTask={predecessorTask}
                            targetTask={currentTask}
                            sourceIndex={predecessorIndex}
                            targetIndex={currentIndex}
                            dateToX={dateToX}
                            holidays={holidays}
                            calendarSettings={calendarSettings}
                        />
                    );
                }
            });
        });
        return linkElements;
    }, [visibleTasks, currentView, dateToX, holidays, calendarSettings]);

    const headerHeight = useMemo(() => {
        return zoomLevel === 'DAY' ? 90 : 60; // 30*3 for Day, 30*2 for others
    }, [zoomLevel]);

    const MILESTONE_LANE_HEIGHT = 40; // Define the constant here

    return (
        <div className="flex flex-col h-full w-full overflow-hidden bg-white">
            <div
                ref={ref}
                className="flex-1 overflow-auto relative"
            >
                <TimelineHeader effectiveMinDate={effectiveMinDate} totalDays={totalDays} pixelsPerDay={pixelsPerDay} headerHeight={headerHeight} />

                <svg width={chartWidth} height={chartHeight} className="bg-white block">
                    <Defs />

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

                    {/* 4. Links (Layered below bars) */}
                    {links}

                    {/* 5. Task Bars */}
                    {visibleTasks.map((task, index) => {
                        const y = index * ROW_HEIGHT + (ROW_HEIGHT - 24) / 2 + MILESTONE_LANE_HEIGHT; // Center vertically + offset
                        return (
                            <GanttBar
                                key={task.id}
                                task={task}
                                y={y}
                                dateToX={dateToX}
                                isMasterView={currentView === 'MASTER'}
                                pixelsPerDay={pixelsPerDay}
                                headerHeight={headerHeight}
                            />
                        );
                    })}
                </svg>
            </div>
        </div>
    );
});

GanttTimeline.displayName = 'GanttTimeline';
