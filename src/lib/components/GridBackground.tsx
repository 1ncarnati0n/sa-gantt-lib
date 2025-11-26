'use client';

import { useGanttStore } from '../store/useGanttStore';
import { eachDayOfInterval } from 'date-fns';

export function GridBackground() {
    const { startDate, endDate, columnWidth, tasks, rowHeight } = useGanttStore();

    if (!startDate || !endDate) return null;

    const days = eachDayOfInterval({ start: startDate, end: endDate });
    const totalHeight = Math.max(tasks.length * rowHeight, 500); // Minimum height

    return (
        <div className="absolute inset-0 flex pointer-events-none z-0" style={{ height: totalHeight }}>
            {days.map((day, i) => {
                const isWeekend = day.getDay() === 0 || day.getDay() === 6;
                return (
                    <div
                        key={i}
                        className={`border-r border-gray-100 h-full shrink-0 ${isWeekend ? 'bg-red-50/30' : ''}`}
                        style={{ width: columnWidth }}
                    />
                );
            })}
        </div>
    );
}
