'use client';

import React from 'react';
import { GANTT_LAYOUT, GANTT_COLORS, Milestone } from '../../types';
import { dateToX } from '../../utils/dateUtils';
import type { MilestoneMarkerProps, MilestoneWithLayout } from './types';

const { MILESTONE_LANE_HEIGHT } = GANTT_LAYOUT;

/**
 * 마일스톤 충돌 감지 및 레벨 할당
 * - 레벨 0: 마커 왼쪽 (기본)
 * - 레벨 1: 마커 오른쪽 (왼쪽 충돌 시)
 * - 레벨 -1: 마커 아래 (왼쪽/오른쪽 모두 충돌 시)
 */
export const calculateMilestoneLabels = (
    milestones: Milestone[],
    minDate: Date,
    pixelsPerDay: number
): MilestoneWithLayout[] => {
    if (milestones.length === 0) return [];

    const LABEL_PADDING = 25;
    const CHAR_WIDTH = 12;
    const MIN_GAP = 8;

    const milestonesWithX = milestones.map(m => ({
        milestone: m,
        x: dateToX(m.date, minDate, pixelsPerDay),
        labelLevel: 0,
        labelWidth: m.name.length * CHAR_WIDTH + LABEL_PADDING,
    })).sort((a, b) => a.x - b.x);

    const result: MilestoneWithLayout[] = [];
    const leftLabelEndX: number[] = [];
    const rightLabelRanges: Array<{ start: number; end: number }> = [];

    for (const item of milestonesWithX) {
        const labelWidth = item.labelWidth;
        const leftLabelStart = item.x - labelWidth;
        const leftLabelEnd = item.x - MIN_GAP;

        const leftCollision = leftLabelEndX.some(endX => leftLabelStart < endX + MIN_GAP);

        if (!leftCollision) {
            leftLabelEndX.push(leftLabelEnd);
            result.push({
                milestone: item.milestone,
                x: item.x,
                labelLevel: 0,
            });
        } else {
            const rightLabelStart = item.x + MIN_GAP;
            const rightLabelEnd = item.x + labelWidth;

            const rightCollision = rightLabelRanges.some(
                range => !(rightLabelEnd < range.start || rightLabelStart > range.end)
            );

            if (!rightCollision) {
                rightLabelRanges.push({ start: rightLabelStart, end: rightLabelEnd });
                result.push({
                    milestone: item.milestone,
                    x: item.x,
                    labelLevel: 1,
                });
            } else {
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

/**
 * 마일스톤 마커 컴포넌트
 */
export const MilestoneMarker: React.FC<MilestoneMarkerProps> = ({
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

    let textX: number;
    let textY: number;
    let textAnchor: 'start' | 'middle' | 'end';

    if (labelLevel === 0) {
        textX = -8;
        textY = 4;
        textAnchor = 'end';
    } else if (labelLevel === 1) {
        textX = 8;
        textY = 4;
        textAnchor = 'start';
    } else {
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
            {/* Vertical Guide Line */}
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

            {/* Triangle Symbol */}
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

            {/* Hit area */}
            <circle
                cx={0}
                cy={0}
                r={size}
                fill="transparent"
                className="cursor-ew-resize"
            />

            {/* Label */}
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
