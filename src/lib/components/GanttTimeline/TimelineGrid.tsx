'use client';

import React, { useMemo } from 'react';
import { addDays, getDay } from 'date-fns';
import { isHoliday } from '../../utils/dateUtils';
import type { TimelineGridProps } from './types';

/**
 * 주말/휴일 배경 그리드 컴포넌트
 */
export const TimelineGrid: React.FC<TimelineGridProps> = ({
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

            if (isHol || isSaturday) {
                const x = i * pixelsPerDay;
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
