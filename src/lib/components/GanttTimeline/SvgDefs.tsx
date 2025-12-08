'use client';

import React from 'react';
import { GANTT_COLORS } from '../../types';

/**
 * SVG 정의 (마커, 패턴 등)
 */
export const SvgDefs: React.FC = () => (
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

        {/* 휴일 빗금 패턴 (간접작업 색상 + 반투명 배경) */}
        <pattern
            id="holidayHatchPattern"
            patternUnits="userSpaceOnUse"
            width="6"
            height="6"
            patternTransform="rotate(45)"
        >
            <rect width="6" height="6" fill="rgba(255, 255, 255, 0.6)" />
            <line x1="0" y1="0" x2="0" y2="6" stroke={GANTT_COLORS.blue} strokeWidth="2" />
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
