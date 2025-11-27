import { addDays, isSaturday, isSunday, isSameDay } from 'date-fns';

export const isHoliday = (date: Date, holidays: Date[] = []): boolean => {
    if (isSaturday(date) || isSunday(date)) return true;
    return holidays.some(h => isSameDay(h, date));
};

/**
 * Adds working days to a date, skipping weekends and holidays.
 * Returns the date after 'days' working days have passed.
 */
export const addWorkingDays = (startDate: Date, days: number, holidays: Date[] = []): Date => {
    let currentDate = new Date(startDate);
    let daysAdded = 0;

    if (days <= 0) return currentDate;

    while (daysAdded < days) {
        currentDate = addDays(currentDate, 1);
        if (!isHoliday(currentDate, holidays)) {
            daysAdded++;
        } else {
            // It's a holiday, we just advanced the date but didn't count it as a working day
            // So we continue loop
        }
    }

    // If the final date lands on a holiday/weekend (because we just added a day to reach count),
    // we might need to push it to the next working day? 
    // Usually "End Date" is exclusive in time calculations, or inclusive in day calculations.
    // Let's assume exclusive for now (00:00 of the next day).

    return currentDate;
};

/**
 * Adds calendar days (including holidays).
 */
export const addCalendarDays = (startDate: Date, days: number): Date => {
    return addDays(startDate, days);
};

export const calculateTaskDates = (
    startDate: Date,
    workDays: number,
    nonWorkDays: number,
    placement: 'PRE' | 'POST',
    holidays: Date[] = []
) => {
    let workStartDate: Date;
    let workEndDate: Date;
    let nonWorkStartDate: Date;
    let nonWorkEndDate: Date;
    let finalEndDate: Date;

    if (placement === 'PRE') {
        // Non-work days come first (Teal)
        nonWorkStartDate = new Date(startDate);
        nonWorkEndDate = addCalendarDays(nonWorkStartDate, nonWorkDays);

        // Work days follow (Vermilion)
        // If nonWorkDays ends on a holiday, does work start immediately or wait for next working day?
        // Usually work must start on a working day.
        workStartDate = nonWorkEndDate;
        // Adjust workStartDate to next working day if it falls on a holiday?
        // For now, let's keep it simple. If the previous phase ends, the next starts.
        // But if "Work" cannot happen on Sat, and Non-Work ended on Fri night (Sat 00:00),
        // Work starts Sat 00:00? No, work starts Mon 00:00.

        while (isHoliday(workStartDate, holidays) && workDays > 0) {
            workStartDate = addDays(workStartDate, 1);
        }

        workEndDate = addWorkingDays(workStartDate, workDays, holidays);
        finalEndDate = workEndDate;

    } else {
        // Work days come first (Vermilion)
        workStartDate = new Date(startDate);
        // Ensure start date is a working day
        while (isHoliday(workStartDate, holidays) && workDays > 0) {
            workStartDate = addDays(workStartDate, 1);
        }

        workEndDate = addWorkingDays(workStartDate, workDays, holidays);

        // Non-work days follow (Teal)
        nonWorkStartDate = workEndDate;
        nonWorkEndDate = addCalendarDays(nonWorkStartDate, nonWorkDays);
        finalEndDate = nonWorkEndDate;
    }

    return {
        startDate,
        endDate: finalEndDate,
        workStartDate,
        workEndDate,
        nonWorkStartDate,
        nonWorkEndDate
    };
};
