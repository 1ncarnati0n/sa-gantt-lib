import React, { useMemo } from 'react';
import { useConstructionStore } from '../../store/useConstructionStore';
import { format, addDays, getDay, isWeekend } from 'date-fns';
import { ConstructionTask, Milestone } from '../../types/gantt';

const PIXELS_PER_DAY = 30;
const ROW_HEIGHT = 40;

// --- Sub-components adapted from MVP ---

interface GanttBarProps {
    task: ConstructionTask;
    y: number;
    dateToX: (date: Date) => number;
}

const GanttBar: React.FC<GanttBarProps> = ({ task, y, dateToX }) => {
    const { workDays, nonWorkDays, nonWorkPlacement, startDate, type } = task;

    if (type !== 'TASK') return null;

    const totalDays = workDays + nonWorkDays;
    const barWidth = totalDays * PIXELS_PER_DAY;
    const x = dateToX(startDate);
    const height = 18;
    const radius = 3;

    // Segment Widths
    const workWidth = workDays * PIXELS_PER_DAY;
    const nonWorkWidth = nonWorkDays * PIXELS_PER_DAY;

    // Calculate relative positions
    let workX: number, nonWorkX: number;

    if (nonWorkPlacement === 'PRE') {
        // PRE: Teal -> Vermilion
        nonWorkX = 0;
        workX = nonWorkWidth;
    } else {
        // POST: Vermilion -> Teal
        workX = 0;
        nonWorkX = workWidth;
    }

    return (
        <g transform={`translate(${x}, ${y})`} className="cursor-pointer group">
            {/* Non-Work (Teal) Rect */}
            {nonWorkDays > 0 && (
                <rect
                    x={nonWorkX}
                    y={0}
                    width={nonWorkWidth}
                    height={height}
                    fill="var(--color-teal)"
                    rx={radius}
                    ry={radius}
                    className="transition-all duration-150 hover:opacity-90"
                />
            )}
            {/* Work (Vermilion) Rect */}
            {workDays > 0 && (
                <rect
                    x={workX}
                    y={0}
                    width={workWidth}
                    height={height}
                    fill="var(--color-vermilion)"
                    rx={radius}
                    ry={radius}
                    className="transition-all duration-150 hover:opacity-90"
                />
            )}

            {/* Label */}
            <text x={barWidth + 5} y={height / 2 + 4} className="text-xs fill-gray-700 font-medium pointer-events-none">
                {task.name}
            </text>

            {/* Tooltip */}
            <title>
                {task.name}
                {"\n"}Start: {format(startDate, 'yy-MM-dd')}
                {"\n"}Work: {workDays} days
                {"\n"}Non-Work: {nonWorkDays} days
            </title>
        </g>
    );
};

interface MilestoneMarkerProps {
    milestone: Milestone;
    y: number;
    dateToX: (date: Date) => number;
}

const MilestoneMarker: React.FC<MilestoneMarkerProps> = ({ milestone, y, dateToX }) => {
    const x = dateToX(milestone.date);
    const size = 12;
    const markerY = y + 10;

    return (
        <g transform={`translate(${x}, ${markerY})`} className="cursor-pointer group z-20">
            {/* Diamond Symbol */}
            <rect
                x={-size / 2}
                y={-size / 2}
                width={size}
                height={size}
                fill="#333"
                transform="rotate(45)"
                className="transition-all duration-150 group-hover:scale-125 hover:fill-blue-600"
            />
            {/* Vertical Guide Line */}
            <line x1="0" y1={size / 2} x2="0" y2={1000} stroke="#333" strokeDasharray="3, 3" opacity="0.3" pointerEvents="none" />

            <title>
                {milestone.name}
                {"\n"}Date: {format(milestone.date, 'yy-MM-dd')}
            </title>
        </g>
    );
};

interface WeekendGridProps {
    effectiveMinDate: Date;
    totalDays: number;
    chartHeight: number;
    dateToX: (date: Date) => number;
}

const WeekendGrid: React.FC<WeekendGridProps> = ({ effectiveMinDate, totalDays, chartHeight, dateToX }) => {
    const { holidays } = useConstructionStore();

    const holidayRects = useMemo(() => {
        const rects: React.ReactNode[] = [];
        for (let i = 0; i < totalDays; i++) {
            const date = addDays(effectiveMinDate, i);
            const isWeekendOrHoliday = isWeekend(date) || holidays.some(h => format(h, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd'));

            if (isWeekendOrHoliday) {
                const x = dateToX(date);
                rects.push(
                    <rect
                        key={`holiday-${i}`}
                        x={x}
                        y="0"
                        width={PIXELS_PER_DAY}
                        height={chartHeight}
                        fill="#f9fafb" // Very light gray
                        className="pointer-events-none"
                    />
                );
                // Optional: Add hatch pattern or darker overlay for holidays specifically?
                if (!isWeekend(date)) {
                    // It's a specific holiday
                    rects.push(
                        <rect
                            key={`holiday-spec-${i}`}
                            x={x}
                            y="0"
                            width={PIXELS_PER_DAY}
                            height={chartHeight}
                            fill="rgba(255, 0, 0, 0.05)"
                            className="pointer-events-none"
                        />
                    )
                }
            }
        }
        return rects;
    }, [effectiveMinDate, totalDays, chartHeight, dateToX, holidays]);

    return <g>{holidayRects}</g>;
};

interface TimelineHeaderProps {
    effectiveMinDate: Date;
    totalDays: number;
}

const TimelineHeader: React.FC<TimelineHeaderProps> = ({ effectiveMinDate, totalDays }) => {
    const { holidays } = useConstructionStore();
    const headerDays = Array.from({ length: totalDays }, (_, i) => addDays(effectiveMinDate, i));

    return (
        <div className="flex bg-gray-50 border-b border-gray-300 h-8 sticky top-0 z-10 text-xs text-gray-600 shadow-sm">
            {headerDays.map((date, index) => {
                const day = getDay(date); // 0: Sun, 6: Sat
                const isHol = isWeekend(date) || holidays.some(h => format(h, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd'));
                const dayClasses = isHol ? 'bg-red-50/50 text-red-500' : 'text-gray-600';

                return (
                    <div
                        key={index}
                        className={`flex flex-col justify-center items-center font-medium border-r border-gray-100 ${dayClasses}`}
                        style={{ width: `${PIXELS_PER_DAY}px`, minWidth: `${PIXELS_PER_DAY}px` }}
                    >
                        <span className="text-[10px] leading-none">{format(date, 'MM/dd')}</span>
                        <span className="text-[9px] font-bold leading-none mt-0.5">
                            {['일', '월', '화', '수', '목', '금', '토'][day]}
                        </span>
                    </div>
                );
            })}
        </div>
    );
};

// --- Main Timeline Component ---

export const GanttTimeline: React.FC = () => {
    const { tasks, milestones } = useConstructionStore();

    // Calculate Scales (adapted from MVP hook)
    const { effectiveMinDate, totalDays, dateToX } = useMemo(() => {
        const allDates = [
            ...tasks.flatMap(t => [t.startDate, t.endDate].filter(Boolean) as Date[]),
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
            const diffDays = Math.ceil((date.getTime() - effectiveMin.getTime()) / (1000 * 60 * 60 * 24));
            return diffDays * PIXELS_PER_DAY;
        };

        return { effectiveMinDate: effectiveMin, effectiveMaxDate: effectiveMax, totalDays: days, dateToX: toX };
    }, [tasks, milestones]);

    const chartHeight = Math.max(tasks.length * ROW_HEIGHT + 50, 500);
    const chartWidth = totalDays * PIXELS_PER_DAY;

    return (
        <div className="flex flex-col h-full w-full overflow-hidden bg-white">
            {/* Header */}
            <div className="overflow-hidden flex-shrink-0" style={{ width: '100%' }}>
                {/* We need the header to scroll with the body horizontally. 
                     Usually this is done by putting them in the same scroll container or syncing scroll.
                     For simplicity in this MVP upgrade, let's put them in the same container.
                 */}
            </div>

            <div className="flex-1 overflow-auto relative">
                <TimelineHeader effectiveMinDate={effectiveMinDate} totalDays={totalDays} />

                <svg width={chartWidth} height={chartHeight} className="bg-white block">
                    {/* 1. Background Grid */}
                    <WeekendGrid effectiveMinDate={effectiveMinDate} totalDays={totalDays} chartHeight={chartHeight} dateToX={dateToX} />

                    {/* 2. Horizontal Lines */}
                    {tasks.map((_, index) => (
                        <line
                            key={`line-${index}`}
                            x1="0"
                            y1={index * ROW_HEIGHT + ROW_HEIGHT}
                            x2={chartWidth}
                            y2={index * ROW_HEIGHT + ROW_HEIGHT}
                            stroke="#f3f4f6"
                            strokeWidth="1"
                        />
                    ))}

                    {/* 3. Task Bars */}
                    {tasks.map((task, index) => {
                        const y = index * ROW_HEIGHT + (ROW_HEIGHT - 18) / 2; // Center vertically
                        return <GanttBar key={task.id} task={task} y={y} dateToX={dateToX} />;
                    })}

                    {/* 4. Milestones */}
                    {milestones.map((m) => {
                        const y = 5; // Top padding
                        return <MilestoneMarker key={m.id} milestone={m} y={y} dateToX={dateToX} />;
                    })}
                </svg>
            </div>
        </div>
    );
};
