'use client';

import React, { useMemo } from 'react';
import { format, addDays, getDay, getYear, isSameMonth, isSameWeek, getWeekOfMonth } from 'date-fns';
import { GANTT_LAYOUT } from '../../types';
import { isHoliday } from '../../utils/dateUtils';
import type { TimelineHeaderProps } from './types';

const { HEADER_HEIGHT } = GANTT_LAYOUT;

export const TimelineHeader: React.FC<TimelineHeaderProps> = ({
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
            // WEEK View
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

    const isMonthView = zoomLevel === 'MONTH';

    return (
        <div
            className="sticky top-0 z-5 flex shrink-0 flex-col border-b border-gray-300 bg-white shadow-sm"
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

                    {/* MONTH View: Month Row (1줄 높이 = 32px) */}
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
