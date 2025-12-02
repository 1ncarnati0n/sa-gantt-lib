'use client';

import React, { forwardRef, useMemo, useState, useCallback, useRef, useEffect } from 'react';
import { format, addDays, getDay, getYear, isSameMonth, isSameWeek, getWeekOfMonth, differenceInDays } from 'date-fns';
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

                        // 배경색 결정: 일요일/휴일=빨간색, 토요일=파란색
                        let bgColor = '';
                        if (isSunday || (isHol && !isSaturday)) {
                            bgColor = 'bg-red-50/50';
                        } else if (isSaturday) {
                            bgColor = 'bg-blue-50/50';
                        }

                        return (
                            <div
                                key={index}
                                className={`flex h-full shrink-0 flex-col items-center justify-center border-r border-gray-100 font-medium ${bgColor}`}
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
            const dayOfWeek = getDay(date);
            const isSunday = dayOfWeek === 0;
            const isSaturday = dayOfWeek === 6;
            const isHol = isHoliday(date, holidays, calendarSettings);

            // 일요일/휴일 또는 토요일인 경우 배경색 적용
            if (isHol || isSaturday) {
                const x = i * pixelsPerDay;
                // 일요일/휴일: 연한 빨간색, 토요일: 연한 파란색 (헤더와 동일한 농도)
                let fillColor = 'rgba(254, 242, 242, 0.5)'; // 기본 휴일 색상 (red-50/50)
                if (isSaturday && !isSunday) {
                    fillColor = 'rgba(239, 246, 255, 0.5)'; // 토요일 색상 (blue-50/50)
                }
                if (isSunday) {
                    fillColor = 'rgba(254, 242, 242, 0.5)'; // 일요일 색상 (red-50/50)
                }
                
                rects.push(
                    <rect
                        key={`weekend-${i}`}
                        x={x}
                        y={0}
                        width={pixelsPerDay}
                        height={chartHeight}
                        fill={fillColor}
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

/** 드래그 타입 */
type DragType = 'move' | 'resize-pre' | 'resize-post';

/** 드래그 상태 정보 */
interface DragInfo {
    startDate: Date;
    endDate: Date;
    indirectWorkDaysPre: number;
    indirectWorkDaysPost: number;
}

interface TaskBarProps {
    task: ConstructionTask;
    y: number;
    minDate: Date;
    pixelsPerDay: number;
    isMasterView: boolean;
    /** 드래그 기능 활성화 여부 */
    isDraggable?: boolean;
    /** 드래그 중인 정보 (드래그 중일 때만 값이 있음) */
    dragInfo?: DragInfo | null;
    /** 드래그 시작 핸들러 */
    onDragStart?: (
        e: React.MouseEvent,
        taskId: string,
        dragType: DragType,
        taskData: {
            startDate: Date;
            endDate: Date;
            indirectWorkDaysPre: number;
            netWorkDays: number;
            indirectWorkDaysPost: number;
        }
    ) => void;
}

const TaskBar: React.FC<TaskBarProps> = ({
    task,
    y,
    minDate,
    pixelsPerDay,
    isMasterView,
    isDraggable = false,
    dragInfo,
    onDragStart,
}) => {
    // GROUP은 바를 렌더링하지 않음
    if (task.type === 'GROUP') return null;

    const radius = 4;
    const isDragging = !!dragInfo;
    
    // 드래그 중이면 드래그된 날짜 사용
    const effectiveStartDate = dragInfo?.startDate || task.startDate;
    const effectiveEndDate = dragInfo?.endDate || task.endDate;
    const startX = dateToX(effectiveStartDate, minDate, pixelsPerDay);

    if (isMasterView) {
        // Level 1: Aggregate Bar (Vermilion/Teal)
        const workDays = task.cp?.workDaysTotal || 0;
        const nonWorkDays = task.cp?.nonWorkDaysTotal || 0;
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
        // Level 2: Detail Bar (Blue Pre - Red - Blue Post)
        if (!task.task) return null;

        const { netWorkDays, indirectWorkDaysPre, indirectWorkDaysPost } = task.task;
        
        // 드래그 중이면 드래그된 값 사용
        const effectivePreDays = dragInfo?.indirectWorkDaysPre ?? indirectWorkDaysPre;
        const effectivePostDays = dragInfo?.indirectWorkDaysPost ?? indirectWorkDaysPost;
        
        // 너비 계산
        const preWidth = effectivePreDays * pixelsPerDay;
        const netWidth = netWorkDays * pixelsPerDay;
        const postWidth = effectivePostDays * pixelsPerDay;
        const barWidth = preWidth + netWidth + postWidth;

        // X 위치 계산 (항상 Pre -> Net -> Post 순서)
        const preX = 0;
        const netX = preWidth;
        const postX = preWidth + netWidth;
        
        const handleWidth = 8;

        // 드래그 시작 시 전달할 데이터
        const taskData = {
            startDate: effectiveStartDate,
            endDate: effectiveEndDate,
            indirectWorkDaysPre: effectivePreDays,
            netWorkDays,
            indirectWorkDaysPost: effectivePostDays,
        };

        return (
            <g 
                transform={`translate(${startX}, ${y})`} 
                className={`group ${isDragging ? 'opacity-90' : ''}`}
            >
                {/* 투명한 드래그 영역 (전체 바 - 가운데 영역) */}
                {isDraggable && (
                    <rect
                        x={preWidth}
                        y={0}
                        width={netWidth}
                        height={BAR_HEIGHT}
                        fill="transparent"
                        className="cursor-grab active:cursor-grabbing"
                        onMouseDown={(e) => onDragStart?.(e, task.id, 'move', taskData)}
                    />
                )}
                
                {/* Pre Indirect Work (Blue - 왼쪽) */}
                {effectivePreDays > 0 && (
                    <rect
                        x={preX}
                        y={0}
                        width={preWidth}
                        height={BAR_HEIGHT}
                        fill={GANTT_COLORS.blue}
                        rx={radius}
                        ry={radius}
                        className={`drop-shadow-sm transition-opacity ${isDragging ? 'opacity-100' : 'opacity-90 hover:opacity-100'}`}
                        style={{ pointerEvents: isDraggable ? 'none' : 'auto' }}
                    />
                )}

                {/* Net Work (Red - 가운데) */}
                {netWorkDays > 0 && (
                    <rect
                        x={netX}
                        y={0}
                        width={netWidth}
                        height={BAR_HEIGHT}
                        fill={GANTT_COLORS.red}
                        rx={radius}
                        ry={radius}
                        className={`drop-shadow-sm transition-opacity ${isDragging ? 'opacity-100' : 'opacity-90 hover:opacity-100'}`}
                        style={{ pointerEvents: isDraggable ? 'none' : 'auto' }}
                    />
                )}
                
                {/* Post Indirect Work (Blue - 오른쪽) */}
                {effectivePostDays > 0 && (
                    <rect
                        x={postX}
                        y={0}
                        width={postWidth}
                        height={BAR_HEIGHT}
                        fill={GANTT_COLORS.blue}
                        rx={radius}
                        ry={radius}
                        className={`drop-shadow-sm transition-opacity ${isDragging ? 'opacity-100' : 'opacity-90 hover:opacity-100'}`}
                        style={{ pointerEvents: isDraggable ? 'none' : 'auto' }}
                    />
                )}
                
                {/* 왼쪽 리사이즈 핸들 (앞 간접작업일 조절) */}
                {isDraggable && (
                    <rect
                        x={-handleWidth / 2}
                        y={0}
                        width={handleWidth}
                        height={BAR_HEIGHT}
                        fill="transparent"
                        className="cursor-ew-resize"
                        onMouseDown={(e) => onDragStart?.(e, task.id, 'resize-pre', taskData)}
                    >
                        <title>앞 간접작업일 조절 (드래그)</title>
                    </rect>
                )}
                
                {/* 오른쪽 리사이즈 핸들 (뒤 간접작업일 조절) */}
                {isDraggable && (
                    <rect
                        x={barWidth - handleWidth / 2}
                        y={0}
                        width={handleWidth}
                        height={BAR_HEIGHT}
                        fill="transparent"
                        className="cursor-ew-resize"
                        onMouseDown={(e) => onDragStart?.(e, task.id, 'resize-post', taskData)}
                    >
                        <title>뒤 간접작업일 조절 (드래그)</title>
                    </rect>
                )}
                
                {/* 리사이즈 핸들 시각적 표시 (hover 시) */}
                {isDraggable && (
                    <>
                        <rect
                            x={1}
                            y={BAR_HEIGHT / 2 - 6}
                            width={3}
                            height={12}
                            rx={1}
                            fill="white"
                            className="pointer-events-none opacity-0 group-hover:opacity-80 transition-opacity"
                        />
                        <rect
                            x={barWidth - 4}
                            y={BAR_HEIGHT / 2 - 6}
                            width={3}
                            height={12}
                            rx={1}
                            fill="white"
                            className="pointer-events-none opacity-0 group-hover:opacity-80 transition-opacity"
                        />
                    </>
                )}

                {/* Label */}
                <text
                    x={barWidth + 8}
                    y={BAR_HEIGHT / 2 + 4}
                    className="pointer-events-none select-none text-[11px] font-medium fill-gray-700"
                >
                    {task.name}
                </text>
                
                {/* 드래그 중 정보 프리뷰 */}
                {isDragging && (
                    <g>
                        <text
                            x={barWidth / 2}
                            y={-6}
                            textAnchor="middle"
                            className="pointer-events-none select-none text-[10px] font-bold fill-blue-600"
                        >
                            {format(effectiveStartDate, 'MM/dd')} ~ {format(effectiveEndDate, 'MM/dd')}
                        </text>
                        <text
                            x={barWidth / 2}
                            y={BAR_HEIGHT + 12}
                            textAnchor="middle"
                            className="pointer-events-none select-none text-[9px] fill-gray-500"
                        >
                            앞{effectivePreDays}일 + 순{netWorkDays}일 + 뒤{effectivePostDays}일
                        </text>
                    </g>
                )}
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

/** Bar 드래그 결과 콜백 파라미터 */
export interface BarDragResult {
    taskId: string;
    dragType: DragType;
    newStartDate: Date;
    newEndDate: Date;
    newIndirectWorkDaysPre: number;
    newIndirectWorkDaysPost: number;
}

interface GanttTimelineProps {
    tasks: ConstructionTask[];
    milestones: Milestone[];
    viewMode: ViewMode;
    zoomLevel: ZoomLevel;
    holidays: Date[];
    calendarSettings: CalendarSettings;
    onTaskUpdate?: (task: ConstructionTask) => void;
    /** Bar 드래그로 날짜/일수 변경 콜백 */
    onBarDrag?: (result: BarDragResult) => void;
    /** 가상화된 행 목록 */
    virtualRows?: VirtualRow[];
    /** 전체 높이 */
    totalHeight?: number;
}

export const GanttTimeline = forwardRef<HTMLDivElement, GanttTimelineProps>(
    ({ tasks, milestones, viewMode, zoomLevel, holidays, calendarSettings, onBarDrag, virtualRows, totalHeight: virtualTotalHeight }, ref) => {
        const pixelsPerDay = ZOOM_CONFIG[zoomLevel].pixelsPerDay;
        const isMasterView = viewMode === 'MASTER';
        
        // 가상화가 활성화되었는지 확인
        const isVirtualized = virtualRows && virtualRows.length > 0;
        
        // ====================================
        // Bar 드래그 상태 관리
        // ====================================
        const [dragState, setDragState] = useState<{
            taskId: string;
            dragType: DragType;
            startX: number;
            // 원본 값
            originalStartDate: Date;
            originalEndDate: Date;
            originalIndirectWorkDaysPre: number;
            originalNetWorkDays: number;
            originalIndirectWorkDaysPost: number;
            // 현재 값
            currentStartDate: Date;
            currentEndDate: Date;
            currentIndirectWorkDaysPre: number;
            currentIndirectWorkDaysPost: number;
        } | null>(null);
        
        const svgRef = useRef<SVGSVGElement>(null);

        // Calculate date range
        const { minDate, totalDays } = useMemo(() => {
            return calculateDateRange(tasks, milestones, 60);
        }, [tasks, milestones]);

        const chartWidth = totalDays * pixelsPerDay;
        const chartHeight = isVirtualized 
            ? Math.max((virtualTotalHeight || 0) + MILESTONE_LANE_HEIGHT + 100, 500)
            : Math.max(tasks.length * ROW_HEIGHT + MILESTONE_LANE_HEIGHT + 100, 500);

        // ====================================
        // Bar 드래그 핸들러
        // ====================================
        
        const handleBarMouseDown = useCallback((
            e: React.MouseEvent,
            taskId: string,
            dragType: DragType,
            taskData: {
                startDate: Date;
                endDate: Date;
                indirectWorkDaysPre: number;
                netWorkDays: number;
                indirectWorkDaysPost: number;
            }
        ) => {
            if (!onBarDrag) return;
            e.preventDefault();
            e.stopPropagation();
            
            setDragState({
                taskId,
                dragType,
                startX: e.clientX,
                originalStartDate: taskData.startDate,
                originalEndDate: taskData.endDate,
                originalIndirectWorkDaysPre: taskData.indirectWorkDaysPre,
                originalNetWorkDays: taskData.netWorkDays,
                originalIndirectWorkDaysPost: taskData.indirectWorkDaysPost,
                currentStartDate: taskData.startDate,
                currentEndDate: taskData.endDate,
                currentIndirectWorkDaysPre: taskData.indirectWorkDaysPre,
                currentIndirectWorkDaysPost: taskData.indirectWorkDaysPost,
            });
        }, [onBarDrag]);

        const handleMouseMove = useCallback((e: MouseEvent) => {
            if (!dragState || !onBarDrag) return;
            
            const deltaX = e.clientX - dragState.startX;
            const deltaDays = Math.round(deltaX / pixelsPerDay);
            
            let newStartDate = dragState.originalStartDate;
            let newEndDate = dragState.originalEndDate;
            let newPreDays = dragState.originalIndirectWorkDaysPre;
            let newPostDays = dragState.originalIndirectWorkDaysPost;
            
            if (dragState.dragType === 'move') {
                // 전체 이동: 시작일과 종료일 동시 이동, 일수는 유지
                newStartDate = addDays(dragState.originalStartDate, deltaDays);
                newEndDate = addDays(dragState.originalEndDate, deltaDays);
            } else if (dragState.dragType === 'resize-pre') {
                // 왼쪽 끝 드래그: 앞 간접작업일 조절
                // deltaDays가 음수면 바가 왼쪽으로 확장 (일수 증가)
                // deltaDays가 양수면 바가 오른쪽으로 축소 (일수 감소)
                newPreDays = Math.max(0, dragState.originalIndirectWorkDaysPre - deltaDays);
                newStartDate = addDays(dragState.originalStartDate, -(-deltaDays + (newPreDays - dragState.originalIndirectWorkDaysPre)));
                
                // 시작일 재계산: 원래 순작업 시작일 - 새 앞간접일수
                const netWorkStartDate = addDays(dragState.originalStartDate, dragState.originalIndirectWorkDaysPre);
                newStartDate = addDays(netWorkStartDate, -newPreDays);
                
                // 종료일은 유지
                newEndDate = dragState.originalEndDate;
            } else if (dragState.dragType === 'resize-post') {
                // 오른쪽 끝 드래그: 뒤 간접작업일 조절
                // deltaDays가 양수면 바가 오른쪽으로 확장 (일수 증가)
                // deltaDays가 음수면 바가 왼쪽으로 축소 (일수 감소)
                newPostDays = Math.max(0, dragState.originalIndirectWorkDaysPost + deltaDays);
                
                // 종료일 재계산: 원래 순작업 종료일 + 새 뒤간접일수
                const netWorkEndDate = addDays(dragState.originalEndDate, -dragState.originalIndirectWorkDaysPost);
                newEndDate = addDays(netWorkEndDate, newPostDays);
                
                // 시작일은 유지
                newStartDate = dragState.originalStartDate;
            }
            
            setDragState(prev => prev ? {
                ...prev,
                currentStartDate: newStartDate,
                currentEndDate: newEndDate,
                currentIndirectWorkDaysPre: newPreDays,
                currentIndirectWorkDaysPost: newPostDays,
            } : null);
        }, [dragState, onBarDrag, pixelsPerDay]);

        const handleMouseUp = useCallback(() => {
            if (!dragState || !onBarDrag) {
                setDragState(null);
                return;
            }
            
            // 변경이 있을 때만 콜백 호출
            const hasDateChange = 
                dragState.currentStartDate.getTime() !== dragState.originalStartDate.getTime() ||
                dragState.currentEndDate.getTime() !== dragState.originalEndDate.getTime();
            const hasDaysChange =
                dragState.currentIndirectWorkDaysPre !== dragState.originalIndirectWorkDaysPre ||
                dragState.currentIndirectWorkDaysPost !== dragState.originalIndirectWorkDaysPost;
            
            if (hasDateChange || hasDaysChange) {
                onBarDrag({
                    taskId: dragState.taskId,
                    dragType: dragState.dragType,
                    newStartDate: dragState.currentStartDate,
                    newEndDate: dragState.currentEndDate,
                    newIndirectWorkDaysPre: dragState.currentIndirectWorkDaysPre,
                    newIndirectWorkDaysPost: dragState.currentIndirectWorkDaysPost,
                });
            }
            
            setDragState(null);
        }, [dragState, onBarDrag]);

        // 전역 마우스 이벤트 리스너
        useEffect(() => {
            if (dragState) {
                window.addEventListener('mousemove', handleMouseMove);
                window.addEventListener('mouseup', handleMouseUp);
                document.body.style.cursor = dragState.dragType === 'move' ? 'grabbing' : 'ew-resize';
                document.body.style.userSelect = 'none';
                
                return () => {
                    window.removeEventListener('mousemove', handleMouseMove);
                    window.removeEventListener('mouseup', handleMouseUp);
                    document.body.style.cursor = '';
                    document.body.style.userSelect = '';
                };
            }
        }, [dragState, handleMouseMove, handleMouseUp]);

        // 드래그 중인 task의 현재 정보 가져오기
        const getDragInfo = useCallback((taskId: string): DragInfo | null => {
            if (dragState && dragState.taskId === taskId) {
                return {
                    startDate: dragState.currentStartDate,
                    endDate: dragState.currentEndDate,
                    indirectWorkDaysPre: dragState.currentIndirectWorkDaysPre,
                    indirectWorkDaysPost: dragState.currentIndirectWorkDaysPost,
                };
            }
            return null;
        }, [dragState]);

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

                        {/* Vertical Grid Lines (세로 그리드) */}
                        {Array.from({ length: totalDays }, (_, i) => {
                            const x = (i + 1) * pixelsPerDay;
                            const date = addDays(minDate, i);
                            const dayOfWeek = getDay(date);
                            
                            // 줌 레벨에 따라 다른 간격으로 라인 표시
                            let showLine = false;
                            let strokeColor = '#f0f0f0'; // 기본 연한 색상
                            
                            if (zoomLevel === 'DAY') {
                                // 일 단위: 모든 날짜에 라인, 일요일은 진하게
                                showLine = true;
                                strokeColor = dayOfWeek === 0 ? '#e0e0e0' : '#f0f0f0';
                            } else if (zoomLevel === 'WEEK') {
                                // 주 단위: 일요일에만 진한 라인
                                showLine = dayOfWeek === 0;
                                strokeColor = '#e5e7eb';
                            } else if (zoomLevel === 'MONTH') {
                                // 월 단위: 매주 일요일에 연한 라인
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
                                    isDraggable={!isMasterView && !!onBarDrag}
                                    dragInfo={getDragInfo(task.id)}
                                    onDragStart={handleBarMouseDown}
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
