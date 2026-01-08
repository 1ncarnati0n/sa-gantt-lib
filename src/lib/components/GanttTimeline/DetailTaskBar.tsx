'use client';

import React, { useMemo } from 'react';
import { format, addDays } from 'date-fns';
import { GANTT_LAYOUT, GANTT_COLORS, GANTT_DRAG } from '../../types';
import { dateToX, getTaskCalendarSettings, getHolidayOffsetsInDateRange, isHoliday } from '../../utils/dateUtils';
import type { ConstructionTask, CalendarSettings } from '../../types';
import type { DragInfo, DragType, TaskBarRenderMode } from './types';

const { BAR_HEIGHT } = GANTT_LAYOUT;

/**
 * DetailTaskBar Props (Level 2 전용)
 */
export interface DetailTaskBarProps {
    task: ConstructionTask;
    y: number;
    minDate: Date;
    pixelsPerDay: number;
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
    const showBar = renderMode === 'full' || renderMode === 'bar';
    const showLabel = renderMode === 'full' || renderMode === 'label';

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

    return (
        <g
            transform={`translate(${startX}, ${y})`}
            className={`group ${isDragging || isDependencyDragging ? 'opacity-90' : ''} ${onDoubleClick ? 'cursor-pointer' : ''}`}
            onDoubleClick={onDoubleClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {/* Connected Group Drag Indicator */}
            {isDependencyDragging && showBar && (
                <rect
                    x={-4}
                    y={-4}
                    width={barWidth + 8}
                    height={BAR_HEIGHT + 8}
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
                        height={BAR_HEIGHT + 4}
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
                        height={BAR_HEIGHT}
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
                    height={BAR_HEIGHT + 6}
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
                            height={BAR_HEIGHT}
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
                            y={BAR_HEIGHT + 11}
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
                        height={BAR_HEIGHT}
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
                            height={BAR_HEIGHT}
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
                            height={BAR_HEIGHT}
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
                            y={BAR_HEIGHT + 11}
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
                    height={BAR_HEIGHT}
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
                    height={BAR_HEIGHT}
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
                    height={BAR_HEIGHT}
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
                    height={BAR_HEIGHT}
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
                    height={BAR_HEIGHT}
                    fill="transparent"
                    className="cursor-ew-resize"
                    onMouseDown={(e) => onDragStart?.(e, task.id, 'resize-post', taskData)}
                >
                    <title>{effectivePostDays > 0 ? '뒤 간접작업일 조절' : '순작업일 조절'} (드래그)</title>
                </rect>
            )}

            {/* Visual handle indicators */}
            {showBar && isDraggable && (
                <>
                    <rect
                        x={1}
                        y={BAR_HEIGHT / 2 - 6}
                        width={3}
                        height={12}
                        rx={1}
                        fill={GANTT_COLORS.textInverse}
                        className="pointer-events-none opacity-0 group-hover:opacity-80 transition-opacity"
                    />
                    <rect
                        x={barWidth - 4}
                        y={BAR_HEIGHT / 2 - 6}
                        width={3}
                        height={12}
                        rx={1}
                        fill={GANTT_COLORS.textInverse}
                        className="pointer-events-none opacity-0 group-hover:opacity-80 transition-opacity"
                    />
                    {effectivePreDays > 0 && effectiveNetDays > 0 && (
                        <rect
                            x={preWidth - 1.5}
                            y={BAR_HEIGHT / 2 - 4}
                            width={3}
                            height={8}
                            rx={1}
                            fill={GANTT_COLORS.textInverse}
                            className="pointer-events-none opacity-0 group-hover:opacity-60 transition-opacity"
                        />
                    )}
                    {effectivePostDays > 0 && effectiveNetDays > 0 && (
                        <rect
                            x={postX - 1.5}
                            y={BAR_HEIGHT / 2 - 4}
                            width={3}
                            height={8}
                            rx={1}
                            fill={GANTT_COLORS.textInverse}
                            className="pointer-events-none opacity-0 group-hover:opacity-60 transition-opacity"
                        />
                    )}
                </>
            )}

            {/* Label */}
            {showLabel && (
                <text
                    x={-8}
                    y={BAR_HEIGHT / 2 + 4}
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
                        y={BAR_HEIGHT + 12}
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
