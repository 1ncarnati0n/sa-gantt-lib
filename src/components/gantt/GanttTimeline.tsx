import React, { useMemo, forwardRef } from 'react';
import { useConstructionStore } from '../../store/useConstructionStore';
import { format, addDays, getDay, getYear, differenceInDays, isSameMonth, isSameWeek, getISOWeek } from 'date-fns';
import { ConstructionTask, Milestone, Dependency, CalendarSettings, AnchorPoint } from '../../types/gantt';
import { calculateDualCalendarDates, getAnchorDate, isHoliday } from '../../utils/dateUtils';
import { GANTT_CONSTANTS } from '../../utils/ganttConstants';

const { ROW_HEIGHT, MILESTONE_LANE_HEIGHT, BAR_HEIGHT } = GANTT_CONSTANTS;

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

    // Determine anchors based on dependency type if not explicitly provided
    const defaultSourceAnchor = dependency.type === 'SS' || dependency.type === 'SF' ? 'START' : 'END';
    const defaultTargetAnchor = dependency.type === 'SS' || dependency.type === 'FS' ? 'START' : 'END';

    const sourceAnchor = dependency.sourceAnchor || defaultSourceAnchor;
    const targetAnchor = dependency.targetAnchor || defaultTargetAnchor;

    const sourceDate = getAnchorDate(sourceTask, sourceAnchor, sourceDates);
    const targetDate = getAnchorDate(targetTask, targetAnchor, targetDates);

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

// --- Interaction Helpers ---

interface DragState {
    taskId: string;
    type: 'RESIZE_NET' | 'RESIZE_INDIRECT' | 'MOVE' | 'LINK';
    initialX: number;
    initialNetDays?: number;
    initialIndirectDays?: number;
    initialStartDate?: Date;
    // For Link
    sourceAnchor?: AnchorPoint;
    currentX?: number;
    currentY?: number;
    sourceY?: number;
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
    onAnchorMouseDown: (e: React.MouseEvent, task: ConstructionTask, anchor: AnchorPoint) => void;
    onAnchorMouseUp: (e: React.MouseEvent, task: ConstructionTask, anchor: AnchorPoint) => void;
}> = ({ task, y, dateToX, isMasterView, pixelsPerDay, onMouseDown, onAnchorMouseDown, onAnchorMouseUp }) => {
    const height = BAR_HEIGHT;
    const radius = 4;
    const startX = dateToX(task.startDate);

    // Helper to render an anchor point
    const renderAnchor = (x: number, type: AnchorPoint) => (
        <circle
            cx={x}
            cy={height / 2}
            r={4}
            fill="white"
            stroke="#6B7280"
            strokeWidth={2}
            className="opacity-0 group-hover:opacity-100 hover:fill-blue-500 hover:scale-125 transition-all cursor-crosshair z-30"
            onMouseDown={(e) => {
                e.stopPropagation();
                onAnchorMouseDown(e, task, type);
            }}
            onMouseUp={(e) => {
                e.stopPropagation();
                onAnchorMouseUp(e, task, type);
            }}
        >
            <title>{type}</title>
        </circle>
    );

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
        let anchors: { x: number, type: AnchorPoint }[] = [];

        if (placement === 'PRE') {
            // Indirect -> Net
            indirectX = 0;
            netX = indirectWidth;

            anchors = [
                { x: 0, type: 'START' }, // Start of Indirect
                { x: indirectWidth, type: 'NET_WORK_START' }, // Start of Net (End of Indirect)
                { x: indirectWidth + netWidth, type: 'NET_WORK_END' }, // End of Net
                { x: indirectWidth + netWidth, type: 'END' } // End of Task (Same as Net End here)
            ];
        } else {
            // Net -> Indirect
            netX = 0;
            indirectX = netWidth;

            anchors = [
                { x: 0, type: 'START' }, // Start of Net
                { x: 0, type: 'NET_WORK_START' }, // Start of Net (Same as Start)
                { x: netWidth, type: 'NET_WORK_END' }, // End of Net (Start of Indirect)
                { x: netWidth + indirectWidth, type: 'END' } // End of Indirect
            ];
        }

        // Deduplicate anchors at same position (e.g. START == NET_WORK_START)
        // We prioritize specific anchors: NET_WORK_START/END over START/END if they overlap visually?
        // Actually, for linking, we might want to offer all logical points, but visually overlapping is bad.
        // Let's just render them. If they overlap, the last one rendered (top) catches events.
        // Better strategy: Filter out duplicates based on X position to avoid visual clutter, 
        // but wait, the user needs to select specific logic. 
        // For now, let's render unique X positions, mapping to the most "inner" logic (Net Work) as priority.

        // Simplified: Just render START, MIDDLE (Boundary), END.
        // But the requirement says 4 points. Let's render them all but shift slightly if needed?
        // No, let's just render them. Overlapping is fine for now, usually they are distinct unless duration is 0.

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

                {/* Anchor Points */}
                {anchors.map((anchor, i) => (
                    <React.Fragment key={i}>
                        {renderAnchor(anchor.x, anchor.type)}
                    </React.Fragment>
                ))}
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
            <div className="flex h-[24px] bg-gray-800 text-white text-xs font-bold items-center border-b border-gray-700">
                {groups.map((g, i) => (
                    <div
                        key={i}
                        className="border-r border-gray-600 pl-2 flex items-center"
                        style={{ width: g.days * pixelsPerDay }}
                    >
                        {g.label}
                    </div>
                ))}
            </div>
        );
    }, [headerDays, pixelsPerDay]);

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
            <div className="flex h-[24px] bg-gray-100 text-gray-700 text-xs font-medium items-center border-b border-gray-200">
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
    }, [headerDays, pixelsPerDay]);

    // 3. Bottom Row: Week/Day based on Zoom
    const bottomRow = useMemo(() => {
        if (zoomLevel === 'DAY') {
            // Day View: Show Days
            return (
                <div className="flex h-[32px] items-center bg-white">
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
                                className={`flex flex-col justify-center items-center font-medium border-r border-gray-100 h-full ${dayClasses}`}
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
                <div className="flex h-[32px] items-center bg-white">
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

const GanttTimelineComponent = forwardRef<HTMLDivElement>((_, ref) => {
    const { tasks, milestones, expandedTaskIds, currentView, activeSummaryId, holidays, calendarSettings, zoomLevel, updateTaskDuration, addDependency } = useConstructionStore();
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
    const visibleTasks = useMemo(() => {
        if (currentView === 'MASTER') {
            // Master View: Show only Level 1 CP (exclude GROUP, they have no bars)
            const visible: ConstructionTask[] = [];

            tasks.forEach(task => {
                if (task.wbsLevel === 1 && task.type !== 'GROUP') {
                    // Only show CP, not GROUP
                    if (!task.parentId) {
                        // Top-level CP
                        visible.push(task);
                    } else if (task.parentId) {
                        // CP under a GROUP - show only if GROUP is expanded
                        if (expandedTaskIds.includes(task.parentId)) {
                            visible.push(task);
                        }
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

    const handleAnchorMouseDown = (e: React.MouseEvent, task: ConstructionTask, anchor: AnchorPoint) => {
        e.stopPropagation();
        const taskIndex = visibleTasks.findIndex(t => t.id === task.id);
        const y = taskIndex * ROW_HEIGHT + (ROW_HEIGHT - 24) / 2 + MILESTONE_LANE_HEIGHT + 12; // Center of bar

        // Calculate initial X based on anchor type
        const dates = calculateDualCalendarDates(task, holidays, calendarSettings);
        const date = getAnchorDate(task, anchor, dates);
        const x = dateToX(date);

        setDragState({
            taskId: task.id,
            type: 'LINK',
            initialX: x,
            sourceAnchor: anchor,
            sourceY: y,
            currentX: x,
            currentY: y
        });
    };

    const handleMouseMove = React.useCallback((e: MouseEvent) => {
        if (!dragState) return;

        if (dragState.type === 'RESIZE_NET' || dragState.type === 'RESIZE_INDIRECT' || dragState.type === 'MOVE') {
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
        }
    }, [dragState, pixelsPerDay, updateTaskDuration]);

    const handleAnchorMouseUp = (e: React.MouseEvent, targetTask: ConstructionTask, targetAnchor: AnchorPoint) => {
        if (dragState?.type === 'LINK' && dragState.sourceAnchor) {
            e.stopPropagation();

            // Prevent self-linking
            if (dragState.taskId === targetTask.id) {
                setDragState(null);
                return;
            }

            // Determine dependency type based on anchors (fallback)
            // Start -> Start: SS, End -> End: FF, End -> Start: FS, Start -> End: SF
            // But we store exact anchors now.
            let type: 'FS' | 'SS' | 'FF' | 'SF' = 'FS';
            const src = dragState.sourceAnchor;
            const tgt = targetAnchor;

            if (src.includes('START') && tgt.includes('START')) type = 'SS';
            else if (src.includes('END') && tgt.includes('END')) type = 'FF';
            else if (src.includes('START') && tgt.includes('END')) type = 'SF';
            else type = 'FS'; // Default End -> Start

            const newDependency: Dependency = {
                id: crypto.randomUUID(),
                predecessorId: dragState.taskId,
                type: type,
                lag: 0,
                sourceAnchor: dragState.sourceAnchor,
                targetAnchor: targetAnchor
            };

            addDependency(targetTask.id, newDependency);
            setDragState(null);
        }
    };

    const handleMouseUp = React.useCallback(() => {
        // Global mouse up clears drag state if not handled by anchor
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

    // Generate Links (Only for visible tasks)
    const links = useMemo(() => {
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
    }, [visibleTasks, dateToX, holidays, calendarSettings]);

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

                    {/* Ghost Line for Linking */}
                    {dragState?.type === 'LINK' && dragState.currentX !== undefined && dragState.currentY !== undefined && (
                        <line
                            x1={dragState.initialX}
                            y1={dragState.sourceY}
                            x2={dragState.currentX}
                            y2={dragState.currentY}
                            stroke="#9CA3AF"
                            strokeWidth="2"
                            strokeDasharray="5, 5"
                            pointerEvents="none"
                        />
                    )}

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
                                onAnchorMouseDown={handleAnchorMouseDown}
                                onAnchorMouseUp={handleAnchorMouseUp}
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
