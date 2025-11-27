import { addDays, isSaturday, isSunday, isSameDay } from 'date-fns';
import { ConstructionTask, AnchorPoint, CalendarSettings } from '../types/gantt';

export const isHoliday = (date: Date, holidays: Date[] = [], settings: CalendarSettings): boolean => {
    if (!settings.workOnSaturdays && isSaturday(date)) return true;
    if (!settings.workOnSundays && isSunday(date)) return true;
    if (!settings.workOnHolidays && holidays.some(h => isSameDay(h, date))) return true;
    return false;
};

/**
 * Adds working days (skipping holidays based on settings).
 */
export const addWorkingDays = (startDate: Date, days: number, holidays: Date[] = [], settings: CalendarSettings): Date => {
    let currentDate = new Date(startDate);
    let daysAdded = 0;

    if (days <= 0) return currentDate;

    // If start date itself is a holiday, move to next working day first
    while (isHoliday(currentDate, holidays, settings)) {
        currentDate = addDays(currentDate, 1);
    }

    while (daysAdded < days) {
        if (!isHoliday(currentDate, holidays, settings)) {
            daysAdded++;
        }
        if (daysAdded < days) {
            currentDate = addDays(currentDate, 1);
        }
    }

    return currentDate;
};

/**
 * Adds calendar days (including holidays).
 */
export const addCalendarDays = (startDate: Date, days: number): Date => {
    if (days <= 0) return startDate;
    return addDays(startDate, days - 1);
};

export interface TaskDates {
    startDate: Date;
    endDate: Date;
    netWorkStartDate: Date;
    netWorkEndDate: Date;
    indirectStartDate?: Date;
    indirectEndDate?: Date;
}

export const calculateDualCalendarDates = (
    task: ConstructionTask,
    holidays: Date[] = [],
    settings: CalendarSettings
): TaskDates => {
    // Default fallback
    if (!task.task) {
        // Level 1 or Milestone or Summary without details
        return {
            startDate: task.startDate,
            endDate: task.endDate,
            netWorkStartDate: task.startDate,
            netWorkEndDate: task.endDate
        };
    }

    const { netWorkDays, indirectWorkDays, placement } = task.task;
    const baseStartDate = new Date(task.startDate);

    let netStart: Date;
    let netEnd: Date;
    let indirectStart: Date;
    let indirectEnd: Date;
    let totalStart: Date;
    let totalEnd: Date;

    if (placement === 'PRE') {
        // Indirect (Blue) -> Net Work (Red)

        // 1. Calculate Indirect (Include Holidays)
        indirectStart = baseStartDate;
        indirectEnd = addCalendarDays(indirectStart, indirectWorkDays);

        // 2. Calculate Net Work (Skip Holidays)
        if (indirectWorkDays > 0) {
            netStart = addDays(indirectEnd, 1);
        } else {
            netStart = baseStartDate;
        }

        // Ensure net work starts on a working day
        while (isHoliday(netStart, holidays, settings)) {
            netStart = addDays(netStart, 1);
        }

        netEnd = addWorkingDays(netStart, netWorkDays, holidays, settings);

        totalStart = indirectStart;
        totalEnd = netEnd;

    } else {
        // Net Work (Red) -> Indirect (Blue)

        // 1. Calculate Net Work (Skip Holidays)
        netStart = baseStartDate;
        // Ensure start is working day
        while (isHoliday(netStart, holidays, settings)) {
            netStart = addDays(netStart, 1);
        }

        netEnd = addWorkingDays(netStart, netWorkDays, holidays, settings);

        // 2. Calculate Indirect (Include Holidays)
        if (netWorkDays > 0) {
            indirectStart = addDays(netEnd, 1);
        } else {
            indirectStart = baseStartDate;
        }

        indirectEnd = addCalendarDays(indirectStart, indirectWorkDays);

        totalStart = netStart;
        totalEnd = indirectEnd;
    }

    return {
        startDate: totalStart,
        endDate: totalEnd,
        netWorkStartDate: netStart,
        netWorkEndDate: netEnd,
        indirectStartDate: indirectStart,
        indirectEndDate: indirectEnd
    };
};

export const getAnchorDate = (_task: ConstructionTask, anchor: AnchorPoint, dates: TaskDates): Date => {
    switch (anchor) {
        case 'START': return dates.startDate;
        case 'NET_WORK_START': return dates.netWorkStartDate;
        case 'NET_WORK_END': return dates.netWorkEndDate;
        case 'END': return dates.endDate;
        default: return dates.endDate;
    }
};
