import { addDays, differenceInDays, format, endOfMonth, eachDayOfInterval, eachMonthOfInterval } from 'date-fns';
import { ko } from 'date-fns/locale';

export const getX = (date: Date, startDate: Date, columnWidth: number): number => {
    const diff = differenceInDays(date, startDate);
    return diff * columnWidth;
};

export const getDateAtX = (x: number, startDate: Date, columnWidth: number): Date => {
    const days = Math.floor(x / columnWidth);
    return addDays(startDate, days);
};

export const getWidth = (startDate: Date, endDate: Date, columnWidth: number): number => {
    const diff = differenceInDays(endDate, startDate);
    return diff * columnWidth;
};

export const generateTimeScales = (startDate: Date, endDate: Date, viewMode: 'day' | 'week' | 'month') => {
    // Ensure valid dates
    if (!startDate || !endDate) return { top: [], bottom: [] };

    const days = eachDayOfInterval({ start: startDate, end: endDate });
    // const weeks = eachWeekOfInterval({ start: startDate, end: endDate });
    const months = eachMonthOfInterval({ start: startDate, end: endDate });

    if (viewMode === 'day') {
        return {
            top: months.map(d => ({
                date: d,
                label: format(d, 'yyyy년 M월', { locale: ko }),
                width: differenceInDays(endOfMonth(d), d) + 1 // Approximate for now, needs refinement
            })),
            bottom: days.map(d => ({
                date: d,
                label: format(d, 'd'),
                isWeekend: d.getDay() === 0 || d.getDay() === 6
            }))
        };
    }

    // Implement other modes later
    return { top: [], bottom: [] };
};
