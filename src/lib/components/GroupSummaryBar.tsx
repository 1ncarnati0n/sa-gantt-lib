'use client';

import React, { useMemo } from 'react';
import { addDays } from 'date-fns';
import { ConstructionTask, GANTT_LAYOUT } from '../types';
import { dateToX } from '../utils/dateUtils';
import { calculateGroupDateRange, collectDescendantTasks } from '../utils/groupUtils';

const { BAR_HEIGHT } = GANTT_LAYOUT;

// Summary 바 스타일 상수
const SUMMARY_BAR_HEIGHT = 10;
const SUMMARY_BAR_COLOR = '#9CA3AF';      // gray-400
const PROGRESS_COLOR = '#6B7280';         // gray-500

interface GroupSummaryBarProps {
    group: ConstructionTask;
    allTasks: ConstructionTask[];
    y: number;
    minDate: Date;
    pixelsPerDay: number;
    isDraggable?: boolean;
    currentDeltaDays?: number;
    onDragStart?: (
        e: React.MouseEvent,
        groupId: string,
        taskData: {
            startDate: Date;
            endDate: Date;
            affectedTaskIds: string[];
        }
    ) => void;
    onToggle?: (groupId: string) => void;
}

export const GroupSummaryBar: React.FC<GroupSummaryBarProps> = ({
    group,
    allTasks,
    y,
    minDate,
    pixelsPerDay,
    isDraggable = false,
    currentDeltaDays = 0,
    onDragStart,
    onToggle,
}) => {
    // 그룹의 날짜 범위 계산
    const dateRange = useMemo(
        () => calculateGroupDateRange(group.id, allTasks),
        [group.id, allTasks]
    );

    // 하위 Task ID 목록 (groupUtils의 collectDescendantTasks 재사용)
    const affectedTaskIds = useMemo(
        () => collectDescendantTasks(group.id, allTasks).map(t => t.id),
        [group.id, allTasks]
    );

    if (!dateRange) return null;

    const { startDate, endDate, totalDays } = dateRange;
    const progress = group.group?.progress ?? 0;

    // 드래그 중이면 deltaDays 적용
    const adjustedStartDate = currentDeltaDays !== 0
        ? addDays(startDate, currentDeltaDays)
        : startDate;

    const startX = dateToX(adjustedStartDate, minDate, pixelsPerDay);
    const totalWidth = totalDays * pixelsPerDay;
    const progressWidth = totalWidth * (progress / 100);

    // Summary 바 Y 위치 (행 중앙 아래에 배치)
    // +4 오프셋: TaskBar보다 살짝 아래에 위치시켜 그룹 구분을 명확하게 함
    const VERTICAL_OFFSET = 4;
    const barY = (BAR_HEIGHT - SUMMARY_BAR_HEIGHT) / 2 + VERTICAL_OFFSET;

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!isDraggable || !onDragStart) return;
        e.preventDefault();
        e.stopPropagation();

        onDragStart(e, group.id, {
            startDate,
            endDate,
            affectedTaskIds,
        });
    };

    const handleDoubleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        onToggle?.(group.id);
    };

    return (
        <g
            transform={`translate(${startX}, ${y})`}
            className={isDraggable ? 'cursor-grab active:cursor-grabbing' : ''}
        >
            {/* Summary 바 배경 (전체 기간) */}
            <rect
                x={0}
                y={barY}
                width={totalWidth}
                height={SUMMARY_BAR_HEIGHT}
                fill={SUMMARY_BAR_COLOR}
                rx={2}
                ry={2}
                opacity={0.4}
            />

            {/* 진행도 바 */}
            {progress > 0 && (
                <rect
                    x={0}
                    y={barY}
                    width={progressWidth}
                    height={SUMMARY_BAR_HEIGHT}
                    fill={PROGRESS_COLOR}
                    rx={2}
                    ry={2}
                />
            )}

            {/* 그룹명 (바 위에 표시) */}
            <text
                x={0}
                y={barY - 3}
                className="fill-gray-600 font-medium"
                style={{ fontSize: '10px' }}
            >
                {group.name}
            </text>

            {/* 진행도 텍스트 (바 오른쪽) */}
            <text
                x={totalWidth + 8}
                y={barY + SUMMARY_BAR_HEIGHT / 2 + 3}
                className="fill-gray-500"
                style={{ fontSize: '9px' }}
            >
                {progress}%
            </text>

            {/* 히트 영역 (투명) - 더블클릭 및 드래그 */}
            <rect
                x={0}
                y={0}
                width={totalWidth}
                height={BAR_HEIGHT}
                fill="transparent"
                className={isDraggable ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer'}
                onMouseDown={handleMouseDown}
                onDoubleClick={handleDoubleClick}
            />
        </g>
    );
};
