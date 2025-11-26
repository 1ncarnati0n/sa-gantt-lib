'use client';

import { useGanttStore } from '../store/useGanttStore';
import { addDays, differenceInDays, format, endOfMonth, eachDayOfInterval } from 'date-fns';
import { ko } from 'date-fns/locale';

export function TimelineHeader() {
    const { columnWidth, startDate, endDate } = useGanttStore();

    if (!startDate || !endDate) return null;

    // Generate days for the bottom scale
    const days = eachDayOfInterval({ start: startDate, end: endDate });

    // Generate months for the top scale
    // We need to calculate the width of each month block based on how many days of that month are visible
    const months: { date: Date; width: number; label: string }[] = [];

    let currentMonthStart = startDate;
    while (currentMonthStart <= endDate) {
        const monthEnd = endOfMonth(currentMonthStart);
        // The actual end of the segment is either the end of the month OR the end of the view
        const segmentEnd = monthEnd > endDate ? endDate : monthEnd;

        const daysInSegment = differenceInDays(segmentEnd, currentMonthStart) + 1;

        months.push({
            date: currentMonthStart,
            width: daysInSegment * columnWidth,
            label: format(currentMonthStart, 'yyyy년 M월', { locale: ko })
        });

        // Move to next month
        currentMonthStart = addDays(monthEnd, 1);
    }

    return (
        <div className="flex flex-col bg-white text-xs text-gray-500 select-none">
            {/* Top Scale (Months) */}
            <div className="flex border-b border-gray-200 h-8 items-center">
                {months.map((month, i) => (
                    <div
                        key={i}
                        className="flex items-center justify-center border-r border-gray-200 truncate px-2 font-medium"
                        style={{ width: month.width, height: '100%' }}
                    >
                        {month.label}
                    </div>
                ))}
            </div>

            {/* Bottom Scale (Days) */}
            <div className="flex h-8 items-center">
                {days.map((day, i) => {
                    const isWeekend = day.getDay() === 0 || day.getDay() === 6;
                    return (
                        <div
                            key={i}
                            className={`flex items-center justify-center border-r border-gray-100 shrink-0 ${isWeekend ? 'text-red-400 bg-red-50/30' : ''}`}
                            style={{ width: columnWidth, height: '100%' }}
                        >
                            {format(day, 'd')}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
