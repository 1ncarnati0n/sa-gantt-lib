'use client';

import React, { useMemo } from 'react';
import { addDays } from 'date-fns';
import { GANTT_LAYOUT, GANTT_COLORS } from '../../types';
import { dateToX } from '../../utils/dateUtils';
import { calculateCriticalPath } from '../../utils/criticalPathUtils';
import { collectDescendantTasks } from '../../utils/groupUtils';
import type { ConstructionTask, CalendarSettings } from '../../types';

const { BAR_HEIGHT } = GANTT_LAYOUT;

/**
 * MasterTaskBar Props (Level 1 전용)
 */
export interface MasterTaskBarProps {
    task: ConstructionTask;
    y: number;
    minDate: Date;
    pixelsPerDay: number;
    renderMode?: 'full' | 'bar' | 'label';
    allTasks?: ConstructionTask[];
    holidays?: Date[];
    calendarSettings?: CalendarSettings;
    /** 드래그 상태 (날짜 변경 시) */
    dragInfo?: { startDate: Date; endDate: Date } | null;
    /** 그룹 드래그 델타 (일수) */
    groupDragDeltaDays?: number;
    /** 그룹 드래그 스냅 날짜 */
    groupDragInfo?: { startDate: Date; endDate: Date } | null;
    /** 키보드 포커스 상태 */
    isFocused?: boolean;
}

/**
 * Master View 전용 태스크 바 컴포넌트 (Level 1: CP 바)
 * 
 * 공구 공정표에서 CP(Critical Path) 바를 렌더링합니다.
 * 작업일(주황)과 비작업일(청록)을 시각적으로 구분하여 표시합니다.
 */
export const MasterTaskBar: React.FC<MasterTaskBarProps> = React.memo(({
    task,
    y,
    minDate,
    pixelsPerDay,
    renderMode = 'full',
    allTasks = [],
    holidays = [],
    calendarSettings,
    dragInfo,
    groupDragDeltaDays = 0,
    groupDragInfo,
    isFocused = false,
}) => {
    const showBar = renderMode === 'full' || renderMode === 'bar';
    const showLabel = renderMode === 'full' || renderMode === 'label';

    // GROUP 타입은 렌더링하지 않음
    if (task.type === 'GROUP') return null;

    const radius = 0;

    // effectiveDates 계산 (드래그 우선순위 적용)
    const { effectiveStartDate } = useMemo(() => {
        if (dragInfo) {
            return { effectiveStartDate: dragInfo.startDate };
        }
        if (groupDragInfo) {
            return { effectiveStartDate: groupDragInfo.startDate };
        }
        if (groupDragDeltaDays !== 0) {
            return { effectiveStartDate: addDays(task.startDate, groupDragDeltaDays) };
        }
        return { effectiveStartDate: task.startDate };
    }, [task.startDate, dragInfo, groupDragInfo, groupDragDeltaDays]);

    const startX = dateToX(effectiveStartDate, minDate, pixelsPerDay);

    // CP Summary 계산
    const childTasks = collectDescendantTasks(task.id, allTasks, { wbsLevel: 2 });
    const cpSummary = calculateCriticalPath(
        childTasks,
        holidays,
        calendarSettings || { workOnSaturdays: true, workOnSundays: false, workOnHolidays: false }
    );

    const workDays = cpSummary.workDays;
    const nonWorkDays = cpSummary.nonWorkDays;
    const totalDays = cpSummary.totalDays;

    if (totalDays === 0) return null;

    const workWidth = workDays * pixelsPerDay;
    const nonWorkWidth = nonWorkDays * pixelsPerDay;
    const totalWidth = workWidth + nonWorkWidth;

    return (
        <g transform={`translate(${startX}, ${y})`} className="group cursor-pointer">
            {/* Focus Highlight Effect */}
            {isFocused && showBar && (
                <rect
                    x={-3}
                    y={-3}
                    width={totalWidth + 6}
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

            {/* Work Days Bar (Vermilion) */}
            {showBar && (
                <>
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
                    {/* Non-Work Days Bar (Teal) */}
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
                </>
            )}

            {/* Label */}
            {showLabel && (
                <text
                    x={-8}
                    y={BAR_HEIGHT / 2 + 4}
                    textAnchor="end"
                    className="pointer-events-none select-none text-[11px] font-bold"
                    fill={GANTT_COLORS.textSecondary}
                >
                    {task.name}
                </text>
            )}
        </g>
    );
});

MasterTaskBar.displayName = 'MasterTaskBar';
