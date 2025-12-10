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

        {/* 종속성 화살표 마커 - 기본 (검은색) */}
        <marker
            id="dependency-arrow"
            markerWidth="5"
            markerHeight="5"
            refX="4"
            refY="2.5"
            orient="auto"
        >
            <path
                d="M0.5,0.5 L4,2.5 L0.5,4.5"
                fill="none"
                stroke="#111827"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </marker>

        {/* 종속성 화살표 마커 - 선택됨 */}
        <marker
            id="dependency-arrow-selected"
            markerWidth="5"
            markerHeight="5"
            refX="4"
            refY="2.5"
            orient="auto"
        >
            <path
                d="M0.5,0.5 L4,2.5 L0.5,4.5"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </marker>

        {/* 종속성 화살표 마커 - 연결 중 (프리뷰) */}
        <marker
            id="dependency-arrow-connecting"
            markerWidth="5"
            markerHeight="5"
            refX="4"
            refY="2.5"
            orient="auto"
        >
            <path
                d="M0.5,0.5 L4,2.5 L0.5,4.5"
                fill="none"
                stroke="#10B981"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </marker>

        {/* 종속성 화살표 마커 - 호버 (진한 검은색) */}
        <marker
            id="dependency-arrow-hover"
            markerWidth="5"
            markerHeight="5"
            refX="4"
            refY="2.5"
            orient="auto"
        >
            <path
                d="M0.5,0.5 L4,2.5 L0.5,4.5"
                fill="none"
                stroke="#000000"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </marker>
    </defs>
);
