'use client';

import React, { forwardRef, useMemo, useState, useCallback, useEffect, useRef } from 'react';
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
    getTaskCalendarSettings,
    getHolidayOffsetsInDateRange,
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
// Milestone Collision Detection
// ============================================

interface MilestoneWithLayout {
    milestone: Milestone;
    x: number;
    labelLevel: number;
}

/**
 * 마일스톤 충돌 감지 및 레벨 할당
 * - 레벨 0: 마커 왼쪽 (기본)
 * - 레벨 1: 마커 오른쪽 (왼쪽 충돌 시)
 * - 레벨 -1: 마커 아래 (왼쪽/오른쪽 모두 충돌 시)
 */
const calculateMilestoneLabels = (
    milestones: Milestone[],
    minDate: Date,
    pixelsPerDay: number
): MilestoneWithLayout[] => {
    if (milestones.length === 0) return [];
    
    // 텍스트 너비 추정값 (한글 기준 약 12px per character + 여백)
    const LABEL_PADDING = 25;
    const CHAR_WIDTH = 12;
    const MIN_GAP = 8; // 최소 간격
    
    // x 좌표 계산 및 정렬
    const milestonesWithX = milestones.map(m => ({
        milestone: m,
        x: dateToX(m.date, minDate, pixelsPerDay),
        labelLevel: 0,
        labelWidth: m.name.length * CHAR_WIDTH + LABEL_PADDING,
    })).sort((a, b) => a.x - b.x);
    
    // 충돌 감지 및 레벨 할당
    const result: MilestoneWithLayout[] = [];
    
    // 레벨 0 (왼쪽): 라벨 끝 x 좌표 추적
    // 레벨 1 (오른쪽): 라벨 시작 x 좌표 추적 (역방향 체크)
    const leftLabelEndX: number[] = []; // 왼쪽 라벨들의 끝 위치
    const rightLabelRanges: Array<{ start: number; end: number }> = []; // 오른쪽 라벨들의 범위
    
    for (const item of milestonesWithX) {
        const labelWidth = item.labelWidth;
        
        // 레벨 0 (왼쪽) 충돌 체크
        const leftLabelStart = item.x - labelWidth;
        const leftLabelEnd = item.x - MIN_GAP;
        
        // 이전 왼쪽 라벨들과 충돌 체크
        const leftCollision = leftLabelEndX.some(endX => leftLabelStart < endX + MIN_GAP);
        
        if (!leftCollision) {
            // 왼쪽에 배치 가능
            leftLabelEndX.push(leftLabelEnd);
            result.push({
                milestone: item.milestone,
                x: item.x,
                labelLevel: 0,
            });
        } else {
            // 레벨 1 (오른쪽) 충돌 체크
            const rightLabelStart = item.x + MIN_GAP;
            const rightLabelEnd = item.x + labelWidth;
            
            // 이전 오른쪽 라벨들과 충돌 체크
            const rightCollision = rightLabelRanges.some(
                range => !(rightLabelEnd < range.start || rightLabelStart > range.end)
            );
            
            if (!rightCollision) {
                // 오른쪽에 배치 가능
                rightLabelRanges.push({ start: rightLabelStart, end: rightLabelEnd });
                result.push({
                    milestone: item.milestone,
                    x: item.x,
                    labelLevel: 1,
                });
            } else {
                // 아래에 배치 (항상 가능)
                result.push({
                    milestone: item.milestone,
                    x: item.x,
                    labelLevel: -1,
                });
            }
        }
    }
    
    return result;
};

// ============================================
// Milestone Marker
// ============================================

interface MilestoneMarkerProps {
    milestone: Milestone;
    x: number;
    labelLevel?: number; // 0: 왼쪽(기본), 1: 오른쪽, -1: 아래
    isDragging?: boolean;
    dragX?: number; // 드래그 중일 때 현재 X 위치
    onMouseDown?: (e: React.MouseEvent, milestone: Milestone) => void;
    onDoubleClick?: (milestone: Milestone) => void;
}

const MilestoneMarker: React.FC<MilestoneMarkerProps> = ({ 
    milestone, 
    x, 
    labelLevel = 0,
    isDragging = false,
    dragX,
    onMouseDown,
    onDoubleClick,
}) => {
    const size = 12;
    const y = MILESTONE_LANE_HEIGHT / 2;
    const currentX = isDragging && dragX !== undefined ? dragX : x;
    
    // 레벨에 따른 라벨 위치 계산
    let textX: number;
    let textY: number;
    let textAnchor: 'start' | 'middle' | 'end';
    
    if (labelLevel === 0) {
        // 기본: 마커 왼쪽
        textX = -8;
        textY = 4;
        textAnchor = 'end';
    } else if (labelLevel === 1) {
        // 충돌 시: 마커 오른쪽
        textX = 8;
        textY = 4;
        textAnchor = 'start';
    } else {
        // 더 많은 충돌 시: 마커 아래
        textX = 0;
        textY = 18;
        textAnchor = 'middle';
    }

    const handleMouseDown = (e: React.MouseEvent) => {
        if (onMouseDown) {
            e.preventDefault();
            e.stopPropagation();
            onMouseDown(e, milestone);
        }
    };

    const handleDoubleClick = (e: React.MouseEvent) => {
        if (onDoubleClick) {
            e.preventDefault();
            e.stopPropagation();
            onDoubleClick(milestone);
        }
    };

    return (
        <g 
            transform={`translate(${currentX}, ${y})`} 
            className={`group ${onMouseDown ? 'cursor-ew-resize' : 'cursor-pointer'} ${isDragging ? 'cursor-ew-resize' : ''}`}
            onMouseDown={handleMouseDown}
            onDoubleClick={handleDoubleClick}
        >
            {/* Vertical Guide Line - 기본으로 표시 */}
            <line
                x1={0}
                y1={0}
                x2={0}
                y2={1000}
                stroke={isDragging ? '#3B82F6' : '#9CA3AF'}
                strokeWidth={isDragging ? 3 : 2}
                strokeDasharray="4, 4"
                className={isDragging ? 'opacity-100' : 'opacity-80'}
            />

            {/* Triangle Symbol - 호버 시 1.3배 확대 */}
            <path
                d={`M ${-size / 2} ${-size / 2} L ${size / 2} ${-size / 2} L 0 ${size / 2} Z`}
                fill={isDragging ? '#3B82F6' : GANTT_COLORS.milestone}
                stroke="white"
                strokeWidth={1}
                className="drop-shadow-sm transition-transform duration-150 group-hover:scale-[1.3]"
                style={{ 
                    transformOrigin: 'center', 
                    transformBox: 'fill-box',
                    transform: isDragging ? 'scale(1.3)' : undefined,
                }}
            />

            {/* 히트 영역 (클릭/드래그 감지용) */}
            <circle
                cx={0}
                cy={0}
                r={size}
                fill="transparent"
                className="cursor-ew-resize"
            />

            {/* Label - 레벨에 따라 위치 변경 */}
            <text
                x={textX}
                y={textY}
                textAnchor={textAnchor}
                className={`select-none text-[11px] font-bold transition-colors ${isDragging ? 'fill-blue-700' : 'fill-gray-600 group-hover:fill-blue-700'}`}
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
type DragType = 
    | 'move'           // 전체 이동
    | 'resize-pre'     // 왼쪽 끝 - 앞간접 또는 순작업 조절
    | 'resize-post'    // 오른쪽 끝 - 뒤간접 또는 순작업 조절
    | 'resize-pre-net' // 앞간접-순작업 경계
    | 'resize-net-post' // 순작업-뒤간접 경계
    | 'move-net';      // 순작업만 이동

/** 드래그 상태 정보 */
interface DragInfo {
    startDate: Date;
    endDate: Date;
    indirectWorkDaysPre: number;
    indirectWorkDaysPost: number;
    netWorkDays: number;
}

interface TaskBarProps {
    task: ConstructionTask;
    y: number;
    minDate: Date;
    pixelsPerDay: number;
    isMasterView: boolean;
    /** 휴일 목록 (순작업 바 내 휴일 표시용) */
    holidays?: Date[];
    /** 전역 캘린더 설정 */
    calendarSettings?: CalendarSettings;
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
    /** 더블클릭 핸들러 (설정 모달 열기) */
    onDoubleClick?: () => void;
}

const TaskBar: React.FC<TaskBarProps> = ({
    task,
    y,
    minDate,
    pixelsPerDay,
    isMasterView,
    holidays = [],
    calendarSettings,
    isDraggable = false,
    dragInfo,
    onDragStart,
    onDoubleClick,
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

                {/* Label - 좌측에 우측 정렬 */}
                <text
                    x={-8}
                    y={BAR_HEIGHT / 2 + 4}
                    textAnchor="end"
                    className="pointer-events-none select-none text-[11px] font-bold fill-gray-700"
                >
                    {task.name}
                </text>
            </g>
        );
    } else {
        // Level 2: Detail Bar (Blue Pre - Red - Blue Post)
        if (!task.task) return null;

        const { netWorkDays, indirectWorkDaysPre, indirectWorkDaysPost, indirectWorkNamePre, indirectWorkNamePost } = task.task;
        
        // 드래그 중이면 드래그된 값 사용
        const effectivePreDays = dragInfo?.indirectWorkDaysPre ?? indirectWorkDaysPre;
        const effectivePostDays = dragInfo?.indirectWorkDaysPost ?? indirectWorkDaysPost;
        const effectiveNetDays = dragInfo?.netWorkDays ?? netWorkDays;
        
        // Task별 캘린더 설정 적용
        const taskSettings = calendarSettings 
            ? getTaskCalendarSettings(task.task, calendarSettings) 
            : { workOnSaturdays: true, workOnSundays: false, workOnHolidays: false };
        
        // 순작업의 실제 캘린더 날짜 계산 (간접작업일은 캘린더일 기준)
        const netStartCalendarDate = addDays(effectiveStartDate, effectivePreDays);
        const netEndCalendarDate = effectivePostDays > 0 
            ? addDays(effectiveEndDate, -effectivePostDays)
            : effectiveEndDate;
        
        // 순작업 구간 내 휴일 찾기
        const holidayOffsetsInNet = calendarSettings && holidays 
            ? getHolidayOffsetsInDateRange(netStartCalendarDate, netEndCalendarDate, holidays, taskSettings)
            : [];
        
        // 순작업 구간 내 휴일 수
        const holidayCount = holidayOffsetsInNet.length;
        
        // 순작업 바의 캘린더 일수 = 순작업일 + 휴일 수 (소수점 반영)
        // 기존: Math.max(1, ...) 때문에 소수점이 무시되고 최소 1일 강제됨
        // 수정: 소수점 순작업일을 직접 사용하고, 휴일 수만큼 추가
        const netCalendarDays = effectiveNetDays > 0 
            ? effectiveNetDays + holidayCount
            : 0;
        
        // 너비 계산 (순작업은 실제 캘린더 일수 사용)
        const preWidth = effectivePreDays * pixelsPerDay;
        const netWidth = netCalendarDays * pixelsPerDay;
        const postWidth = effectivePostDays * pixelsPerDay;
        const barWidth = preWidth + netWidth + postWidth;

        // X 위치 계산 (항상 Pre -> Net -> Post 순서)
        const preX = 0;
        const netX = preWidth;
        const postX = preWidth + netWidth;
        
        const handleWidth = 8;
        const boundaryHandleWidth = 6;

        // 드래그 시작 시 전달할 데이터
        const taskData = {
            startDate: effectiveStartDate,
            endDate: effectiveEndDate,
            indirectWorkDaysPre: effectivePreDays,
            netWorkDays: effectiveNetDays,
            indirectWorkDaysPost: effectivePostDays,
        };

        return (
            <g 
                transform={`translate(${startX}, ${y})`} 
                className={`group ${isDragging ? 'opacity-90' : ''} ${onDoubleClick ? 'cursor-pointer' : ''}`}
                onDoubleClick={onDoubleClick}
            >
                {/* Pre Indirect Work (Blue - 왼쪽) */}
                {effectivePreDays > 0 && (
                    <>
                        <rect
                            x={preX}
                            y={0}
                            width={preWidth}
                            height={BAR_HEIGHT}
                            fill={GANTT_COLORS.blue}
                            rx={radius}
                            ry={radius}
                            className={`drop-shadow-sm transition-opacity ${isDragging ? 'opacity-100' : 'opacity-90 hover:opacity-100'}`}
                            style={{ pointerEvents: 'none' }}
                        />
                        {/* 앞 간접작업명 표시 */}
                        {indirectWorkNamePre && (
                            <text
                                x={preX + preWidth / 2}
                                y={BAR_HEIGHT + 11}
                                textAnchor="middle"
                                className="pointer-events-none select-none text-[9px] fill-blue-600 font-medium"
                            >
                                {indirectWorkNamePre}
                            </text>
                        )}
                    </>
                )}

                {/* Net Work (Red - 가운데) */}
                {effectiveNetDays > 0 && (
                    <>
                        <rect
                            x={netX}
                            y={0}
                            width={netWidth}
                            height={BAR_HEIGHT}
                            fill={GANTT_COLORS.red}
                            rx={radius}
                            ry={radius}
                            className={`drop-shadow-sm transition-opacity ${isDragging ? 'opacity-100' : 'opacity-90 hover:opacity-100'}`}
                            style={{ pointerEvents: 'none' }}
                        />
                        {/* 순작업 바 내 휴일 빗금 오버레이 */}
                        {holidayOffsetsInNet.map((holiday, idx) => (
                            <rect
                                key={`holiday-${idx}`}
                                x={netX + holiday.offset * pixelsPerDay}
                                y={0}
                                width={pixelsPerDay}
                                height={BAR_HEIGHT}
                                fill="url(#holidayHatchPattern)"
                                className="pointer-events-none"
                            />
                        ))}
                    </>
                )}
                
                {/* Post Indirect Work (Blue - 오른쪽) */}
                {effectivePostDays > 0 && (
                    <>
                        <rect
                            x={postX}
                            y={0}
                            width={postWidth}
                            height={BAR_HEIGHT}
                            fill={GANTT_COLORS.blue}
                            rx={radius}
                            ry={radius}
                            className={`drop-shadow-sm transition-opacity ${isDragging ? 'opacity-100' : 'opacity-90 hover:opacity-100'}`}
                            style={{ pointerEvents: 'none' }}
                        />
                        {/* 뒤 간접작업명 표시 */}
                        {indirectWorkNamePost && (
                            <text
                                x={postX + postWidth / 2}
                                y={BAR_HEIGHT + 11}
                                textAnchor="middle"
                                className="pointer-events-none select-none text-[9px] fill-blue-600 font-medium"
                            >
                                {indirectWorkNamePost}
                            </text>
                        )}
                    </>
                )}
                
                {/* ========================================
                    드래그 핸들 영역
                ======================================== */}
                
                {/* 순작업 영역 드래그 (move: 전체 바 이동, 간접작업 종속) */}
                {isDraggable && effectiveNetDays > 0 && (
                    <rect
                        x={netX + boundaryHandleWidth}
                        y={0}
                        width={Math.max(0, netWidth - boundaryHandleWidth * 2)}
                        height={BAR_HEIGHT}
                        fill="transparent"
                        className="cursor-grab active:cursor-grabbing"
                        onMouseDown={(e) => onDragStart?.(e, task.id, 'move', taskData)}
                    >
                        <title>전체 이동 (드래그)</title>
                    </rect>
                )}
                
                {/* 왼쪽 끝 리사이즈 핸들 (resize-pre: 앞간접 또는 순작업 조절) */}
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
                        <title>{effectivePreDays > 0 ? '앞 간접작업일 조절' : '순작업일 조절'} (드래그)</title>
                    </rect>
                )}
                
                {/* 앞간접-순작업 경계 핸들 (resize-pre-net) */}
                {isDraggable && effectivePreDays > 0 && effectiveNetDays > 0 && (
                    <rect
                        x={preWidth - boundaryHandleWidth / 2}
                        y={0}
                        width={boundaryHandleWidth}
                        height={BAR_HEIGHT}
                        fill="transparent"
                        className="cursor-col-resize"
                        onMouseDown={(e) => onDragStart?.(e, task.id, 'resize-pre-net', taskData)}
                    >
                        <title>앞간접-순작업 경계 조절 (드래그)</title>
                    </rect>
                )}
                
                {/* 순작업-뒤간접 경계 핸들 (resize-net-post) */}
                {isDraggable && effectivePostDays > 0 && effectiveNetDays > 0 && (
                    <rect
                        x={postX - boundaryHandleWidth / 2}
                        y={0}
                        width={boundaryHandleWidth}
                        height={BAR_HEIGHT}
                        fill="transparent"
                        className="cursor-col-resize"
                        onMouseDown={(e) => onDragStart?.(e, task.id, 'resize-net-post', taskData)}
                    >
                        <title>순작업-뒤간접 경계 조절 (드래그)</title>
                    </rect>
                )}
                
                {/* 오른쪽 끝 리사이즈 핸들 (resize-post: 뒤간접 또는 순작업 조절) */}
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
                        <title>{effectivePostDays > 0 ? '뒤 간접작업일 조절' : '순작업일 조절'} (드래그)</title>
                    </rect>
                )}
                
                {/* 리사이즈 핸들 시각적 표시 (hover 시) */}
                {isDraggable && (
                    <>
                        {/* 왼쪽 끝 핸들 표시 */}
                        <rect
                            x={1}
                            y={BAR_HEIGHT / 2 - 6}
                            width={3}
                            height={12}
                            rx={1}
                            fill="white"
                            className="pointer-events-none opacity-0 group-hover:opacity-80 transition-opacity"
                        />
                        {/* 오른쪽 끝 핸들 표시 */}
                        <rect
                            x={barWidth - 4}
                            y={BAR_HEIGHT / 2 - 6}
                            width={3}
                            height={12}
                            rx={1}
                            fill="white"
                            className="pointer-events-none opacity-0 group-hover:opacity-80 transition-opacity"
                        />
                        {/* 앞간접-순작업 경계 핸들 표시 */}
                        {effectivePreDays > 0 && effectiveNetDays > 0 && (
                            <rect
                                x={preWidth - 1.5}
                                y={BAR_HEIGHT / 2 - 4}
                                width={3}
                                height={8}
                                rx={1}
                                fill="white"
                                className="pointer-events-none opacity-0 group-hover:opacity-60 transition-opacity"
                            />
                        )}
                        {/* 순작업-뒤간접 경계 핸들 표시 */}
                        {effectivePostDays > 0 && effectiveNetDays > 0 && (
                            <rect
                                x={postX - 1.5}
                                y={BAR_HEIGHT / 2 - 4}
                                width={3}
                                height={8}
                                rx={1}
                                fill="white"
                                className="pointer-events-none opacity-0 group-hover:opacity-60 transition-opacity"
                            />
                        )}
                    </>
                )}

                {/* Label - 좌측에 우측 정렬 */}
                <text
                    x={-8}
                    y={BAR_HEIGHT / 2 + 4}
                    textAnchor="end"
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
                            앞{effectivePreDays}일 + 순{effectiveNetDays}일 + 뒤{effectivePostDays}일
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
        
        {/* 휴일 점 패턴 */}
        <pattern
            id="holidayHatchPattern"
            patternUnits="userSpaceOnUse"
            width="6"
            height="6"
        >
            <rect width="6" height="6" fill="rgba(0, 0, 0, 0.15)" />
            <circle cx="3" cy="3" r="1.5" fill="white" />
        </pattern>
        
        {/* 휴일 빗금 패턴 (더 진한 버전) */}
        <pattern
            id="holidayHatchPatternDark"
            patternUnits="userSpaceOnUse"
            width="8"
            height="8"
            patternTransform="rotate(45)"
        >
            <line
                x1="0"
                y1="0"
                x2="0"
                y2="8"
                stroke="rgba(0, 0, 0, 0.5)"
                strokeWidth="3"
            />
        </pattern>
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
    newNetWorkDays: number;
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
    /** 마일스톤 업데이트 콜백 */
    onMilestoneUpdate?: (milestone: Milestone) => void;
    /** 마일스톤 더블클릭 콜백 */
    onMilestoneDoubleClick?: (milestone: Milestone) => void;
    /** Task 더블클릭 콜백 (설정 모달 열기) */
    onTaskDoubleClick?: (task: ConstructionTask) => void;
    /** 가상화된 행 목록 */
    virtualRows?: VirtualRow[];
    /** 전체 높이 */
    totalHeight?: number;
}

export const GanttTimeline = forwardRef<HTMLDivElement, GanttTimelineProps>(
    ({ tasks, milestones, viewMode, zoomLevel, holidays, calendarSettings, onBarDrag, onMilestoneUpdate, onMilestoneDoubleClick, onTaskDoubleClick, virtualRows, totalHeight: virtualTotalHeight }, ref) => {
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
            currentNetWorkDays: number;
            currentIndirectWorkDaysPost: number;
        } | null>(null);

        // ====================================
        // 마일스톤 드래그 상태 관리
        // ====================================
        const [milestoneDragState, setMilestoneDragState] = useState<{
            milestoneId: string;
            startX: number;
            originalDate: Date;
            currentX: number;
        } | null>(null);

        const milestoneDragStateRef = useRef<typeof milestoneDragState>(null);
        
        useEffect(() => {
            milestoneDragStateRef.current = milestoneDragState;
        }, [milestoneDragState]);

        // Calculate date range
        const { minDate, totalDays } = useMemo(() => {
            return calculateDateRange(tasks, milestones, 60);
        }, [tasks, milestones]);

        // 마일스톤 레이아웃 계산 (충돌 감지 적용)
        const milestoneLayouts = useMemo(() => {
            return calculateMilestoneLabels(milestones, minDate, pixelsPerDay);
        }, [milestones, minDate, pixelsPerDay]);

        const chartWidth = totalDays * pixelsPerDay;
        const chartHeight = isVirtualized 
            ? Math.max((virtualTotalHeight || 0) + MILESTONE_LANE_HEIGHT + 100, 500)
            : Math.max(tasks.length * ROW_HEIGHT + MILESTONE_LANE_HEIGHT + 100, 500);

        // ====================================
        // Bar 드래그 핸들러
        // ====================================
        
        // dragState를 ref로 관리하여 handleMouseMove/handleMouseUp이 재생성되지 않도록 최적화
        const dragStateRef = useRef<typeof dragState>(null);
        
        // dragState 변경 시 ref도 업데이트
        useEffect(() => {
            dragStateRef.current = dragState;
        }, [dragState]);

        // ====================================
        // 마일스톤 드래그 핸들러
        // ====================================
        const handleMilestoneMouseDown = useCallback((e: React.MouseEvent, milestone: Milestone) => {
            if (!onMilestoneUpdate) return;
            e.preventDefault();
            e.stopPropagation();
            
            const milestoneX = dateToX(milestone.date, minDate, pixelsPerDay);
            
            const newState = {
                milestoneId: milestone.id,
                startX: e.clientX,
                originalDate: milestone.date,
                currentX: milestoneX,
            };
            
            setMilestoneDragState(newState);
        }, [onMilestoneUpdate, minDate, pixelsPerDay]);

        const handleMilestoneMouseMove = useCallback((e: MouseEvent) => {
            const state = milestoneDragStateRef.current;
            if (!state) return;
            
            const deltaX = e.clientX - state.startX;
            const originalX = dateToX(state.originalDate, minDate, pixelsPerDay);
            const newX = Math.max(0, originalX + deltaX);
            
            setMilestoneDragState(prev => prev ? { ...prev, currentX: newX } : null);
        }, [minDate, pixelsPerDay]);

        const handleMilestoneMouseUp = useCallback((e: MouseEvent) => {
            const state = milestoneDragStateRef.current;
            if (!state || !onMilestoneUpdate) {
                setMilestoneDragState(null);
                return;
            }
            
            const deltaX = e.clientX - state.startX;
            const deltaDays = Math.round(deltaX / pixelsPerDay);
            
            if (deltaDays !== 0) {
                const newDate = addDays(state.originalDate, deltaDays);
                const updatedMilestone = milestones.find(m => m.id === state.milestoneId);
                
                if (updatedMilestone) {
                    onMilestoneUpdate({
                        ...updatedMilestone,
                        date: newDate,
                    });
                }
            }
            
            setMilestoneDragState(null);
        }, [onMilestoneUpdate, pixelsPerDay, milestones]);

        // 마일스톤 드래그 이벤트 리스너 등록
        useEffect(() => {
            if (milestoneDragState) {
                window.addEventListener('mousemove', handleMilestoneMouseMove);
                window.addEventListener('mouseup', handleMilestoneMouseUp);
                
                return () => {
                    window.removeEventListener('mousemove', handleMilestoneMouseMove);
                    window.removeEventListener('mouseup', handleMilestoneMouseUp);
                };
            }
        }, [milestoneDragState, handleMilestoneMouseMove, handleMilestoneMouseUp]);

        const handleMilestoneDoubleClick = useCallback((milestone: Milestone) => {
            if (onMilestoneDoubleClick) {
                onMilestoneDoubleClick(milestone);
            }
        }, [onMilestoneDoubleClick]);
        
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
            
            const newDragState = {
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
                currentNetWorkDays: taskData.netWorkDays,
                currentIndirectWorkDaysPost: taskData.indirectWorkDaysPost,
            };
            
            setDragState(newDragState);
            dragStateRef.current = newDragState;
        }, [onBarDrag]);

        const handleMouseMove = useCallback((e: MouseEvent) => {
            const currentDragState = dragStateRef.current;
            if (!currentDragState || !onBarDrag) return;
            
            const deltaX = e.clientX - currentDragState.startX;
            // 정수 단위로만 반영 (드래그 시)
            const deltaDays = Math.round(deltaX / pixelsPerDay);
            
            let newStartDate = currentDragState.originalStartDate;
            let newEndDate = currentDragState.originalEndDate;
            let newPreDays = currentDragState.originalIndirectWorkDaysPre;
            let newNetDays = currentDragState.originalNetWorkDays;
            let newPostDays = currentDragState.originalIndirectWorkDaysPost;
            
            if (currentDragState.dragType === 'move') {
                // 전체 이동: 시작일과 종료일 동시 이동, 일수는 유지
                newStartDate = addDays(currentDragState.originalStartDate, deltaDays);
                newEndDate = addDays(currentDragState.originalEndDate, deltaDays);
            } else if (currentDragState.dragType === 'move-net') {
                // 순작업만 이동: 순작업 시작점을 이동하고, 간접작업일을 자동 재계산
                // deltaDays 양수 = 순작업이 오른쪽으로 이동 = 앞간접 증가, 뒤간접 감소
                // deltaDays 음수 = 순작업이 왼쪽으로 이동 = 앞간접 감소, 뒤간접 증가
                
                const maxPreIncrease = currentDragState.originalIndirectWorkDaysPost; // 뒤간접을 0까지만 줄일 수 있음
                const maxPreDecrease = currentDragState.originalIndirectWorkDaysPre; // 앞간접을 0까지만 줄일 수 있음
                
                const constrainedDelta = Math.max(-maxPreDecrease, Math.min(maxPreIncrease, deltaDays));
                
                newPreDays = currentDragState.originalIndirectWorkDaysPre + constrainedDelta;
                newPostDays = currentDragState.originalIndirectWorkDaysPost - constrainedDelta;
                
                // 시작일/종료일은 유지 (총 기간 동일)
                newStartDate = currentDragState.originalStartDate;
                newEndDate = currentDragState.originalEndDate;
            } else if (currentDragState.dragType === 'resize-pre') {
                // 왼쪽 끝 드래그: 앞 간접작업일 또는 순작업일 조절
                if (currentDragState.originalIndirectWorkDaysPre > 0) {
                    // 앞간접이 있으면 앞간접 조절
                    newPreDays = Math.max(0, currentDragState.originalIndirectWorkDaysPre - deltaDays);
                    
                    // 시작일 재계산: 원래 순작업 시작일 - 새 선간접일수
                    const netWorkStartDate = addDays(currentDragState.originalStartDate, currentDragState.originalIndirectWorkDaysPre);
                    newStartDate = addDays(netWorkStartDate, -newPreDays);
                    newEndDate = currentDragState.originalEndDate;
                } else {
                    // 앞간접이 0이면 순작업일 조절
                    newNetDays = Math.max(1, currentDragState.originalNetWorkDays - deltaDays);
                    
                    // 시작일 재계산
                    const netWorkEndDate = addDays(
                        currentDragState.originalStartDate, 
                        currentDragState.originalNetWorkDays - 1
                    );
                    newStartDate = addDays(netWorkEndDate, -(newNetDays - 1));
                    newEndDate = currentDragState.originalEndDate;
                }
            } else if (currentDragState.dragType === 'resize-post') {
                // 오른쪽 끝 드래그: 후 간접작업일 또는 순작업일 조절
                if (currentDragState.originalIndirectWorkDaysPost > 0) {
                    // 뒤간접이 있으면 뒤간접 조절
                    newPostDays = Math.max(0, currentDragState.originalIndirectWorkDaysPost + deltaDays);
                    
                    // 종료일 재계산: 원래 순작업 종료일 + 새 후간접일수
                    const netWorkEndDate = addDays(currentDragState.originalEndDate, -currentDragState.originalIndirectWorkDaysPost);
                    newEndDate = addDays(netWorkEndDate, newPostDays);
                    newStartDate = currentDragState.originalStartDate;
                } else {
                    // 뒤간접이 0이면 순작업일 조절
                    newNetDays = Math.max(1, currentDragState.originalNetWorkDays + deltaDays);
                    
                    // 종료일 재계산
                    newEndDate = addDays(currentDragState.originalStartDate, newNetDays - 1);
                    newStartDate = currentDragState.originalStartDate;
                }
            } else if (currentDragState.dragType === 'resize-pre-net') {
                // 앞간접-순작업 경계 조절: 총 기간 유지, 앞간접과 순작업 사이에서 조절
                // deltaDays 양수 = 경계가 오른쪽으로 = 앞간접 증가, 순작업 감소
                // deltaDays 음수 = 경계가 왼쪽으로 = 앞간접 감소, 순작업 증가
                
                const maxPreIncrease = currentDragState.originalNetWorkDays - 1; // 순작업 최소 1일
                const maxPreDecrease = currentDragState.originalIndirectWorkDaysPre; // 앞간접 0까지
                
                const constrainedDelta = Math.max(-maxPreDecrease, Math.min(maxPreIncrease, deltaDays));
                
                newPreDays = currentDragState.originalIndirectWorkDaysPre + constrainedDelta;
                newNetDays = currentDragState.originalNetWorkDays - constrainedDelta;
                
                // 시작일/종료일은 유지
                newStartDate = currentDragState.originalStartDate;
                newEndDate = currentDragState.originalEndDate;
            } else if (currentDragState.dragType === 'resize-net-post') {
                // 순작업-뒤간접 경계 조절: 총 기간 유지, 순작업과 뒤간접 사이에서 조절
                // deltaDays 양수 = 경계가 오른쪽으로 = 순작업 증가, 뒤간접 감소
                // deltaDays 음수 = 경계가 왼쪽으로 = 순작업 감소, 뒤간접 증가
                
                const maxNetIncrease = currentDragState.originalIndirectWorkDaysPost; // 뒤간접 0까지
                const maxNetDecrease = currentDragState.originalNetWorkDays - 1; // 순작업 최소 1일
                
                const constrainedDelta = Math.max(-maxNetDecrease, Math.min(maxNetIncrease, deltaDays));
                
                newNetDays = currentDragState.originalNetWorkDays + constrainedDelta;
                newPostDays = currentDragState.originalIndirectWorkDaysPost - constrainedDelta;
                
                // 시작일/종료일은 유지
                newStartDate = currentDragState.originalStartDate;
                newEndDate = currentDragState.originalEndDate;
            }
            
            setDragState(prev => prev ? {
                ...prev,
                currentStartDate: newStartDate,
                currentEndDate: newEndDate,
                currentIndirectWorkDaysPre: newPreDays,
                currentNetWorkDays: newNetDays,
                currentIndirectWorkDaysPost: newPostDays,
            } : null);
        }, [onBarDrag, pixelsPerDay]);

        const handleMouseUp = useCallback(() => {
            const currentDragState = dragStateRef.current;
            if (!currentDragState || !onBarDrag) {
                setDragState(null);
                dragStateRef.current = null;
                return;
            }
            
            // 변경이 있을 때만 콜백 호출
            const hasDateChange = 
                currentDragState.currentStartDate.getTime() !== currentDragState.originalStartDate.getTime() ||
                currentDragState.currentEndDate.getTime() !== currentDragState.originalEndDate.getTime();
            const hasDaysChange =
                currentDragState.currentIndirectWorkDaysPre !== currentDragState.originalIndirectWorkDaysPre ||
                currentDragState.currentNetWorkDays !== currentDragState.originalNetWorkDays ||
                currentDragState.currentIndirectWorkDaysPost !== currentDragState.originalIndirectWorkDaysPost;
            
            if (hasDateChange || hasDaysChange) {
                onBarDrag({
                    taskId: currentDragState.taskId,
                    dragType: currentDragState.dragType,
                    newStartDate: currentDragState.currentStartDate,
                    newEndDate: currentDragState.currentEndDate,
                    newIndirectWorkDaysPre: currentDragState.currentIndirectWorkDaysPre,
                    newIndirectWorkDaysPost: currentDragState.currentIndirectWorkDaysPost,
                    newNetWorkDays: currentDragState.currentNetWorkDays,
                });
            }
            
            setDragState(null);
            dragStateRef.current = null;
        }, [onBarDrag]);

        // 전역 마우스 이벤트 리스너
        useEffect(() => {
            if (dragState) {
                window.addEventListener('mousemove', handleMouseMove);
                window.addEventListener('mouseup', handleMouseUp);
                
                // 드래그 타입에 따른 커서 스타일
                let cursor = 'ew-resize';
                if (dragState.dragType === 'move' || dragState.dragType === 'move-net') {
                    cursor = 'grabbing';
                } else if (dragState.dragType === 'resize-pre-net' || dragState.dragType === 'resize-net-post') {
                    cursor = 'col-resize';
                }
                document.body.style.cursor = cursor;
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
                    netWorkDays: dragState.currentNetWorkDays,
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

                        {/* ========================================
                            Layer 1: 배경 (가장 뒤)
                        ======================================== */}
                        
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

                        {/* GROUP Row Background - 그리드보다 뒤, 투명도 적용 */}
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
                                    fill="rgba(249, 250, 251, 0.6)"
                                    className="pointer-events-none"
                                />
                            );
                        })}

                        {/* ========================================
                            Layer 2: 그리드 라인
                        ======================================== */}

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

                        {/* Horizontal Lines (가로 그리드) */}
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

                        {/* ========================================
                            Layer 3: 마일스톤 (그리드 위)
                        ======================================== */}

                        {/* Milestone Lane */}
                        <rect x={0} y={0} width={chartWidth} height={MILESTONE_LANE_HEIGHT} fill="transparent" />
                        {milestoneLayouts.map((layout) => {
                            const isDragging = milestoneDragState?.milestoneId === layout.milestone.id;
                            return (
                                <MilestoneMarker
                                    key={layout.milestone.id}
                                    milestone={layout.milestone}
                                    x={layout.x}
                                    labelLevel={layout.labelLevel}
                                    isDragging={isDragging}
                                    dragX={isDragging ? milestoneDragState?.currentX : undefined}
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

                        {/* ========================================
                            Layer 4: 태스크 바 (가장 위)
                        ======================================== */}

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
                                    holidays={holidays}
                                    calendarSettings={calendarSettings}
                                    isDraggable={!isMasterView && !!onBarDrag}
                                    dragInfo={getDragInfo(task.id)}
                                    onDragStart={handleBarMouseDown}
                                    onDoubleClick={!isMasterView && task.type === 'TASK' && onTaskDoubleClick 
                                        ? () => onTaskDoubleClick(task) 
                                        : undefined}
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
