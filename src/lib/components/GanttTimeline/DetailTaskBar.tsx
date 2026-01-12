'use client';

import React, { useMemo, useState, useCallback } from 'react';
import { format, addDays } from 'date-fns';
import { GANTT_LAYOUT, GANTT_COLORS, GANTT_DRAG } from '../../types';
import { dateToX, getTaskCalendarSettings, getHolidayOffsetsInDateRange, isHoliday } from '../../utils/dateUtils';
import type { ConstructionTask, CalendarSettings } from '../../types';
import type { DragInfo, DragType, TaskBarRenderMode } from './types';

const { BAR_HEIGHT } = GANTT_LAYOUT;

// ============================================
// 호버 존 시스템
// ============================================

/** 호버 존 타입 (바 내부만 감지) */
export type HoverZone = 'resize-left' | 'resize-right' | 'move' | null;

/** 호버 정보 */
interface HoverInfo {
    zone: HoverZone;
    showLeftHandle: boolean;
    showRightHandle: boolean;
}

/** 호버 존 감지 상수 */
const HOVER_EDGE_WIDTH = 8;       // 끝단 클릭 영역 (px)
const HOVER_PROXIMITY_WIDTH = 30; // 끝단 근접 감지 영역 (px)

/**
 * 마우스 위치에 따른 호버 존 결정 (바 내부만)
 * @param localX 바 내 X 좌표
 * @param localY 바 내 Y 좌표
 * @param barWidth 바 전체 너비
 * @param barHeight 바 높이
 */
const getHoverZone = (
    localX: number,
    localY: number,
    barWidth: number,
    barHeight: number
): HoverInfo => {
    // 바 외부면 null
    if (localY < 0 || localY > barHeight) {
        return { zone: null, showLeftHandle: false, showRightHandle: false };
    }

    // 끝단 근접 여부 계산 (핸들 표시용)
    const showLeftHandle = localX < HOVER_PROXIMITY_WIDTH;
    const showRightHandle = localX > barWidth - HOVER_PROXIMITY_WIDTH;

    // 좌우 끝단 클릭 영역 체크 (리사이즈)
    if (localX < HOVER_EDGE_WIDTH) {
        return { zone: 'resize-left', showLeftHandle: true, showRightHandle };
    }
    if (localX > barWidth - HOVER_EDGE_WIDTH) {
        return { zone: 'resize-right', showLeftHandle, showRightHandle: true };
    }

    // 바 중앙 = 이동
    return { zone: 'move', showLeftHandle, showRightHandle };
};

/**
 * 호버 존에 따른 커서 스타일 결정
 */
const getHoverCursor = (hoverInfo: HoverInfo | null): string => {
    if (!hoverInfo) return 'default';
    switch (hoverInfo.zone) {
        case 'resize-left':
        case 'resize-right':
            return 'ew-resize';
        case 'move':
            return 'grab';
        default:
            return 'default';
    }
};

/**
 * DetailTaskBar Props (Level 2 전용)
 */
export interface DetailTaskBarProps {
    task: ConstructionTask;
    y: number;
    minDate: Date;
    pixelsPerDay: number;
    barHeight?: number;
    renderMode?: TaskBarRenderMode;
    holidays?: Date[];
    calendarSettings?: CalendarSettings;
    isDraggable?: boolean;
    dragInfo?: DragInfo | null;
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
    onDoubleClick?: () => void;
    groupDragDeltaDays?: number;
    groupDragInfo?: { startDate: Date; endDate: Date } | null;
    dependencyDragDeltaDays?: number;
    dependencyDragInfo?: { startDate: Date; endDate: Date } | null;
    onDependencyDragStart?: (
        e: React.MouseEvent,
        taskId: string,
        taskData: { startDate: Date; endDate: Date }
    ) => boolean | void;
    hasDependency?: boolean;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    isFocused?: boolean;
}

/**
 * Detail View 전용 태스크 바 컴포넌트 (Level 2: 주공정표)
 * 
 * 순작업일(빨강)과 간접작업일(파랑)을 구분하여 표시합니다.
 * 드래그 핸들, 휴일 표시, 경계 조절 등의 인터랙션을 지원합니다.
 */
export const DetailTaskBar: React.FC<DetailTaskBarProps> = React.memo(({
    task,
    y,
    minDate,
    pixelsPerDay,
    barHeight,
    renderMode = 'full',
    holidays = [],
    calendarSettings,
    isDraggable = false,
    dragInfo,
    onDragStart,
    onDoubleClick,
    groupDragDeltaDays = 0,
    groupDragInfo,
    dependencyDragDeltaDays = 0,
    dependencyDragInfo,
    onDependencyDragStart,
    hasDependency = false,
    onMouseEnter,
    onMouseLeave,
    isFocused = false,
}) => {
    const effectiveBarHeight = barHeight ?? BAR_HEIGHT;
    const showBar = renderMode === 'full' || renderMode === 'bar';
    const showLabel = renderMode === 'full' || renderMode === 'label';

    // 호버 존 상태
    const [hoverInfo, setHoverInfo] = useState<HoverInfo | null>(null);

    // GROUP 타입과 task 데이터 없으면 렌더링하지 않음
    if (task.type === 'GROUP' || !task.task) return null;

    const radius = 0;
    const isDragging = !!dragInfo;

    // effectiveDates 계산 (드래그 우선순위 적용)
    const { effectiveStartDate, effectiveEndDate } = useMemo(() => {
        if (dragInfo) {
            return { effectiveStartDate: dragInfo.startDate, effectiveEndDate: dragInfo.endDate };
        }
        if (dependencyDragInfo) {
            return { effectiveStartDate: dependencyDragInfo.startDate, effectiveEndDate: dependencyDragInfo.endDate };
        }
        if (dependencyDragDeltaDays !== 0) {
            return {
                effectiveStartDate: addDays(task.startDate, dependencyDragDeltaDays),
                effectiveEndDate: addDays(task.endDate, dependencyDragDeltaDays),
            };
        }
        if (groupDragInfo) {
            return { effectiveStartDate: groupDragInfo.startDate, effectiveEndDate: groupDragInfo.endDate };
        }
        if (groupDragDeltaDays !== 0) {
            return {
                effectiveStartDate: addDays(task.startDate, groupDragDeltaDays),
                effectiveEndDate: addDays(task.endDate, groupDragDeltaDays),
            };
        }
        return { effectiveStartDate: task.startDate, effectiveEndDate: task.endDate };
    }, [task.startDate, task.endDate, dragInfo, dependencyDragInfo, dependencyDragDeltaDays, groupDragInfo, groupDragDeltaDays]);

    const isDependencyDragging = dependencyDragDeltaDays !== 0 || !!dependencyDragInfo;
    const startX = dateToX(effectiveStartDate, minDate, pixelsPerDay);

    // 휴일 착지 감지
    const isOnHoliday = useMemo(() => {
        if (!calendarSettings) return false;
        return isHoliday(effectiveStartDate, holidays, calendarSettings);
    }, [effectiveStartDate, holidays, calendarSettings]);

    // Task 데이터 추출
    const { netWorkDays, indirectWorkDaysPre, indirectWorkDaysPost, indirectWorkNamePre, indirectWorkNamePost } = task.task;

    const effectivePreDays = dragInfo?.indirectWorkDaysPre ?? indirectWorkDaysPre;
    const effectivePostDays = dragInfo?.indirectWorkDaysPost ?? indirectWorkDaysPost;
    const effectiveNetDays = dragInfo?.netWorkDays ?? netWorkDays;

    const taskSettings = calendarSettings
        ? getTaskCalendarSettings(task.task, calendarSettings)
        : { workOnSaturdays: true, workOnSundays: false, workOnHolidays: false };

    const netStartCalendarDate = addDays(effectiveStartDate, effectivePreDays);
    const netEndCalendarDate = effectivePostDays > 0
        ? addDays(effectiveEndDate, -effectivePostDays)
        : effectiveEndDate;

    const holidayOffsetsInNet = calendarSettings && holidays
        ? getHolidayOffsetsInDateRange(netStartCalendarDate, netEndCalendarDate, holidays, taskSettings)
        : [];

    const holidayCount = holidayOffsetsInNet.length;
    const netCalendarDays = effectiveNetDays > 0 ? effectiveNetDays + holidayCount : 0;

    const preWidth = effectivePreDays * pixelsPerDay;
    const netWidth = netCalendarDays * pixelsPerDay;
    const postWidth = effectivePostDays * pixelsPerDay;
    const barWidth = preWidth + netWidth + postWidth;

    const preX = 0;
    const netX = preWidth;
    const postX = preWidth + netWidth;

    const handleWidth = GANTT_DRAG.HANDLE_WIDTH;
    const boundaryHandleWidth = GANTT_DRAG.BOUNDARY_HANDLE_WIDTH;

    const taskData = {
        startDate: effectiveStartDate,
        endDate: effectiveEndDate,
        indirectWorkDaysPre: effectivePreDays,
        netWorkDays: effectiveNetDays,
        indirectWorkDaysPost: effectivePostDays,
    };

    // 호버 존 마우스 이벤트 핸들러
    const handleBarMouseMove = useCallback((e: React.MouseEvent<SVGGElement>) => {
        if (isDragging) return; // 드래그 중에는 호버 업데이트 안함

        const svgGroup = e.currentTarget;
        const rect = svgGroup.getBoundingClientRect();
        const localX = e.clientX - rect.left;
        const localY = e.clientY - rect.top;

        const newHoverInfo = getHoverZone(localX, localY, barWidth, effectiveBarHeight);
        setHoverInfo(newHoverInfo);
    }, [barWidth, effectiveBarHeight, isDragging]);

    const handleBarMouseLeave = useCallback(() => {
        setHoverInfo(null);
        onMouseLeave?.();
    }, [onMouseLeave]);

    // 호버 존에 따른 커서 결정
    const hoverCursor = getHoverCursor(hoverInfo);

    return (
        <g
            transform={`translate(${startX}, ${y})`}
            className={`group ${isDragging || isDependencyDragging ? 'opacity-90' : ''}`}
            style={{ cursor: hoverCursor }}
            onDoubleClick={onDoubleClick}
            onMouseEnter={onMouseEnter}
            onMouseMove={handleBarMouseMove}
            onMouseLeave={handleBarMouseLeave}
        >
            {/* Connected Group Drag Indicator */}
            {isDependencyDragging && showBar && (
                <rect
                    x={-4}
                    y={-4}
                    width={barWidth + 8}
                    height={effectiveBarHeight + 8}
                    fill="none"
                    stroke={GANTT_COLORS.success}
                    strokeWidth={2}
                    strokeDasharray="6,3"
                    rx={4}
                    ry={4}
                    className="pointer-events-none"
                    style={{ animation: 'pulse 1.5s ease-in-out infinite', opacity: 0.8 }}
                />
            )}

            {/* 휴일 착지 경고 오버레이 */}
            {isOnHoliday && showBar && (
                <g className="pointer-events-none">
                    <rect
                        x={-2}
                        y={-2}
                        width={barWidth + 4}
                        height={effectiveBarHeight + 4}
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth={2}
                        strokeDasharray="4,2"
                        rx={2}
                        ry={2}
                        opacity={0.9}
                    />
                    <rect
                        x={0}
                        y={0}
                        width={barWidth}
                        height={effectiveBarHeight}
                        fill="url(#holidayHatchPattern)"
                        opacity={0.5}
                    />
                </g>
            )}

            {/* Focus Highlight Effect */}
            {isFocused && showBar && (
                <rect
                    x={-3}
                    y={-3}
                    width={barWidth + 6}
                    height={effectiveBarHeight + 6}
                    fill="none"
                    stroke={GANTT_COLORS.focus}
                    strokeWidth={2}
                    rx={radius + 2}
                    ry={radius + 2}
                    className="animate-pulse"
                    style={{ filter: `drop-shadow(0 0 6px ${GANTT_COLORS.focus})` }}
                />
            )}

            {/* Pre Indirect Work (Blue) */}
            {effectivePreDays > 0 && (
                <>
                    {showBar && (
                        <rect
                            x={preX}
                            y={0}
                            width={preWidth}
                            height={effectiveBarHeight}
                            fill={GANTT_COLORS.blue}
                            rx={radius}
                            ry={radius}
                            className={`drop-shadow-sm transition-opacity ${isDragging ? 'opacity-100' : 'opacity-90 hover:opacity-100'}`}
                            style={{ pointerEvents: 'none' }}
                        />
                    )}
                    {showLabel && indirectWorkNamePre && (
                        <text
                            x={preX + preWidth / 2}
                            y={effectiveBarHeight + 11}
                            textAnchor="middle"
                            className="pointer-events-none select-none text-[9px] font-medium"
                            fill={GANTT_COLORS.blue}
                        >
                            {indirectWorkNamePre}
                        </text>
                    )}
                </>
            )}

            {/* Net Work (Red) */}
            {showBar && effectiveNetDays > 0 && (
                <>
                    <rect
                        x={netX}
                        y={0}
                        width={netWidth}
                        height={effectiveBarHeight}
                        fill={GANTT_COLORS.red}
                        rx={radius}
                        ry={radius}
                        className={`drop-shadow-sm transition-opacity ${isDragging ? 'opacity-100' : 'opacity-90 hover:opacity-100'}`}
                        style={{ pointerEvents: 'none' }}
                    />
                    {holidayOffsetsInNet.map((holiday, idx) => (
                        <rect
                            key={`holiday-${idx}`}
                            x={netX + holiday.offset * pixelsPerDay}
                            y={0}
                            width={pixelsPerDay}
                            height={effectiveBarHeight}
                            fill="url(#holidayHatchPattern)"
                            className="pointer-events-none"
                        />
                    ))}
                </>
            )}

            {/* Post Indirect Work (Blue) */}
            {effectivePostDays > 0 && (
                <>
                    {showBar && (
                        <rect
                            x={postX}
                            y={0}
                            width={postWidth}
                            height={effectiveBarHeight}
                            fill={GANTT_COLORS.blue}
                            rx={radius}
                            ry={radius}
                            className={`drop-shadow-sm transition-opacity ${isDragging ? 'opacity-100' : 'opacity-90 hover:opacity-100'}`}
                            style={{ pointerEvents: 'none' }}
                        />
                    )}
                    {showLabel && indirectWorkNamePost && (
                        <text
                            x={postX + postWidth / 2}
                            y={-3}
                            textAnchor="middle"
                            className="pointer-events-none select-none text-[9px] font-medium"
                            fill={GANTT_COLORS.blue}
                        >
                            {indirectWorkNamePost}
                        </text>
                    )}
                </>
            )}

            {/* Drag Handles */}
            {showBar && isDraggable && effectiveNetDays > 0 && (
                <rect
                    x={netX + boundaryHandleWidth}
                    y={0}
                    width={Math.max(0, netWidth - boundaryHandleWidth * 2)}
                    height={effectiveBarHeight}
                    fill="transparent"
                    className="cursor-grab active:cursor-grabbing"
                    onMouseDown={(e) => {
                        if (hasDependency && onDependencyDragStart) {
                            const handled = onDependencyDragStart(e, task.id, {
                                startDate: effectiveStartDate,
                                endDate: effectiveEndDate,
                            });
                            if (handled) return;
                        }
                        onDragStart?.(e, task.id, 'move', taskData);
                    }}
                >
                    <title>{hasDependency ? '연결된 태스크와 함께 이동' : '전체 이동'} (드래그)</title>
                </rect>
            )}

            {showBar && isDraggable && (
                <rect
                    x={-handleWidth / 2}
                    y={0}
                    width={handleWidth}
                    height={effectiveBarHeight}
                    fill="transparent"
                    className="cursor-ew-resize"
                    onMouseDown={(e) => onDragStart?.(e, task.id, 'resize-pre', taskData)}
                >
                    <title>{effectivePreDays > 0 ? '앞 간접작업일 조절' : '순작업일 조절'} (드래그)</title>
                </rect>
            )}

            {showBar && isDraggable && effectivePreDays > 0 && effectiveNetDays > 0 && (
                <rect
                    x={preWidth - boundaryHandleWidth / 2}
                    y={0}
                    width={boundaryHandleWidth}
                    height={effectiveBarHeight}
                    fill="transparent"
                    className="cursor-col-resize"
                    onMouseDown={(e) => onDragStart?.(e, task.id, 'resize-pre-net', taskData)}
                >
                    <title>앞간접-순작업 경계 조절 (드래그)</title>
                </rect>
            )}

            {showBar && isDraggable && effectivePostDays > 0 && effectiveNetDays > 0 && (
                <rect
                    x={postX - boundaryHandleWidth / 2}
                    y={0}
                    width={boundaryHandleWidth}
                    height={effectiveBarHeight}
                    fill="transparent"
                    className="cursor-col-resize"
                    onMouseDown={(e) => onDragStart?.(e, task.id, 'resize-net-post', taskData)}
                >
                    <title>순작업-뒤간접 경계 조절 (드래그)</title>
                </rect>
            )}

            {showBar && isDraggable && (
                <rect
                    x={barWidth - handleWidth / 2}
                    y={0}
                    width={handleWidth}
                    height={effectiveBarHeight}
                    fill="transparent"
                    className="cursor-ew-resize"
                    onMouseDown={(e) => onDragStart?.(e, task.id, 'resize-post', taskData)}
                >
                    <title>{effectivePostDays > 0 ? '뒤 간접작업일 조절' : '순작업일 조절'} (드래그)</title>
                </rect>
            )}

            {/* Visual handle indicators - 호버 존에 따라 조건부 표시 */}
            {showBar && isDraggable && (
                <>
                    {/* 왼쪽 리사이즈 핸들 - 끝단 근접 시 표시 */}
                    <rect
                        x={1}
                        y={effectiveBarHeight / 2 - 6}
                        width={3}
                        height={12}
                        rx={1.5}
                        fill={GANTT_COLORS.textInverse}
                        className="pointer-events-none"
                        style={{
                            opacity: hoverInfo?.showLeftHandle ? 0.8 : 0,
                            transition: 'opacity 0.15s ease',
                        }}
                    />
                    {/* 오른쪽 리사이즈 핸들 - 끝단 근접 시 표시 */}
                    <rect
                        x={barWidth - 4}
                        y={effectiveBarHeight / 2 - 6}
                        width={3}
                        height={12}
                        rx={1.5}
                        fill={GANTT_COLORS.textInverse}
                        className="pointer-events-none"
                        style={{
                            opacity: hoverInfo?.showRightHandle ? 0.8 : 0,
                            transition: 'opacity 0.15s ease',
                        }}
                    />
                </>
            )}

            {/* Label */}
            {showLabel && (
                <text
                    x={-8}
                    y={effectiveBarHeight / 2 + 4}
                    textAnchor="end"
                    className="pointer-events-none select-none text-[11px] font-medium"
                    fill={GANTT_COLORS.textSecondary}
                >
                    {task.name}
                </text>
            )}

            {/* Drag preview */}
            {showLabel && isDragging && (
                <g>
                    <text
                        x={barWidth / 2}
                        y={-6}
                        textAnchor="middle"
                        className="pointer-events-none select-none text-[10px] font-bold"
                        fill={GANTT_COLORS.focus}
                    >
                        {format(effectiveStartDate, 'MM/dd')} ~ {format(effectiveEndDate, 'MM/dd')}
                    </text>
                    <text
                        x={barWidth / 2}
                        y={effectiveBarHeight + 12}
                        textAnchor="middle"
                        className="pointer-events-none select-none text-[9px]"
                        fill={GANTT_COLORS.textMuted}
                    >
                        앞{effectivePreDays}일 + 순{effectiveNetDays}일 + 뒤{effectivePostDays}일
                    </text>
                </g>
            )}
        </g>
    );
});

DetailTaskBar.displayName = 'DetailTaskBar';
