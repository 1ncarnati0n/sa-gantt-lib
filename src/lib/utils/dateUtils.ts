import {
    addDays,
    differenceInDays,
    isSaturday,
    isSunday,
    isSameDay,
    startOfDay,
} from 'date-fns';
import {
    CalendarSettings,
    ConstructionTask,
    TaskDates,
    AnchorPoint,
    ZoomLevel,
    ZOOM_CONFIG,
} from '../types';

// ============================================
// 휴일 판정
// ============================================

/**
 * 주어진 날짜가 휴일인지 판정
 */
export const isHoliday = (
    date: Date,
    holidays: Date[] = [],
    settings: CalendarSettings
): boolean => {
    // 토요일 체크
    if (!settings.workOnSaturdays && isSaturday(date)) return true;

    // 일요일 체크
    if (!settings.workOnSundays && isSunday(date)) return true;

    // 공휴일 체크
    if (!settings.workOnHolidays && holidays.some((h) => isSameDay(h, date))) {
        return true;
    }

    return false;
};

/**
 * 주말인지 판정 (설정 무관하게)
 */
export const isWeekend = (date: Date): boolean => {
    return isSaturday(date) || isSunday(date);
};

// ============================================
// 작업일 계산
// ============================================

/**
 * 작업일 기준으로 날짜 추가 (휴일 건너뛰기)
 */
export const addWorkingDays = (
    startDate: Date,
    days: number,
    holidays: Date[] = [],
    settings: CalendarSettings
): Date => {
    let currentDate = new Date(startDate);
    let daysAdded = 0;

    if (days <= 0) return currentDate;

    // 시작일이 휴일이면 다음 작업일로 이동
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
 * 역순으로 작업일 계산 (휴일 건너뛰기)
 */
export const subtractWorkingDays = (
    endDate: Date,
    days: number,
    holidays: Date[] = [],
    settings: CalendarSettings
): Date => {
    let currentDate = new Date(endDate);
    let daysSubtracted = 0;

    if (days <= 0) return currentDate;

    while (daysSubtracted < days) {
        currentDate = addDays(currentDate, -1);
        if (!isHoliday(currentDate, holidays, settings)) {
            daysSubtracted++;
        }
    }

    return currentDate;
};

/**
 * 달력일 기준으로 날짜 추가 (휴일 포함)
 */
export const addCalendarDays = (startDate: Date, days: number): Date => {
    if (days <= 0) return startDate;
    return addDays(startDate, days - 1);
};

// ============================================
// 듀얼 캘린더 날짜 계산 (건설 공정표 핵심 로직)
// ============================================

/**
 * Level 2 태스크의 순작업/간접작업 날짜 계산
 * 
 * 건설 공정표의 핵심 로직:
 * - 순작업일(netWorkDays): 휴일을 건너뛰고 계산
 * - 간접작업일(indirectWorkDays): 달력일 기준으로 계산
 * - placement에 따라 순서 결정 (PRE: 간접→순작업, POST: 순작업→간접)
 */
export const calculateDualCalendarDates = (
    task: ConstructionTask,
    holidays: Date[] = [],
    settings: CalendarSettings
): TaskDates => {
    // Level 1이거나 task 데이터가 없는 경우
    if (!task.task) {
        return {
            startDate: task.startDate,
            endDate: task.endDate,
            netWorkStartDate: task.startDate,
            netWorkEndDate: task.endDate,
        };
    }

    const { netWorkDays, indirectWorkDays, placement } = task.task;
    const baseStartDate = startOfDay(new Date(task.startDate));

    let netStart: Date;
    let netEnd: Date;
    let indirectStart: Date;
    let indirectEnd: Date;
    let totalStart: Date;
    let totalEnd: Date;

    if (placement === 'PRE') {
        // PRE: 간접작업(Blue) → 순작업(Red)

        // 1. 간접작업 계산 (달력일 기준)
        indirectStart = baseStartDate;
        indirectEnd = addCalendarDays(indirectStart, indirectWorkDays);

        // 2. 순작업 계산 (휴일 건너뛰기)
        if (indirectWorkDays > 0) {
            netStart = addDays(indirectEnd, 1);
        } else {
            netStart = baseStartDate;
        }

        // 순작업 시작일이 휴일이면 다음 작업일로 이동
        while (isHoliday(netStart, holidays, settings)) {
            netStart = addDays(netStart, 1);
        }

        netEnd = addWorkingDays(netStart, netWorkDays, holidays, settings);

        totalStart = indirectStart;
        totalEnd = netEnd;
    } else {
        // POST: 순작업(Red) → 간접작업(Blue)

        // 1. 순작업 계산 (휴일 건너뛰기)
        netStart = baseStartDate;

        // 시작일이 휴일이면 다음 작업일로 이동
        while (isHoliday(netStart, holidays, settings)) {
            netStart = addDays(netStart, 1);
        }

        netEnd = addWorkingDays(netStart, netWorkDays, holidays, settings);

        // 2. 간접작업 계산 (달력일 기준)
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
        indirectEndDate: indirectEnd,
    };
};

// ============================================
// 앵커 포인트 날짜 반환
// ============================================

/**
 * 앵커 포인트에 해당하는 날짜 반환
 */
export const getAnchorDate = (
    _task: ConstructionTask,
    anchor: AnchorPoint,
    dates: TaskDates
): Date => {
    switch (anchor) {
        case 'START':
            return dates.startDate;
        case 'NET_WORK_START':
            return dates.netWorkStartDate;
        case 'NET_WORK_END':
            return dates.netWorkEndDate;
        case 'END':
            return dates.endDate;
        default:
            return dates.endDate;
    }
};

// ============================================
// 픽셀/날짜 변환
// ============================================

/**
 * 날짜를 X 좌표로 변환
 */
export const dateToX = (
    date: Date,
    baseDate: Date,
    pixelsPerDay: number
): number => {
    const diffDays = differenceInDays(date, baseDate);
    return diffDays * pixelsPerDay;
};

/**
 * X 좌표를 날짜로 변환
 */
export const xToDate = (
    x: number,
    baseDate: Date,
    pixelsPerDay: number
): Date => {
    const days = Math.round(x / pixelsPerDay);
    return addDays(baseDate, days);
};

/**
 * 날짜 범위의 픽셀 너비 계산
 */
export const getDateRangeWidth = (
    startDate: Date,
    endDate: Date,
    pixelsPerDay: number
): number => {
    const days = differenceInDays(endDate, startDate) + 1;
    return days * pixelsPerDay;
};

/**
 * 줌 레벨에 따른 픽셀/일 값 반환
 */
export const getPixelsPerDay = (zoomLevel: ZoomLevel): number => {
    return ZOOM_CONFIG[zoomLevel].pixelsPerDay;
};

// ============================================
// 날짜 범위 계산
// ============================================

/**
 * 태스크 배열에서 날짜 범위 계산 (여유 포함)
 */
export const calculateDateRange = (
    tasks: ConstructionTask[],
    milestones: { date: Date }[] = [],
    buffer: number = 5
): { minDate: Date; maxDate: Date; totalDays: number } => {
    const allDates = [
        ...tasks.flatMap((t) => [t.startDate, t.endDate].filter(Boolean)),
        ...milestones.map((m) => m.date),
    ];

    if (allDates.length === 0) {
        const today = new Date();
        return {
            minDate: today,
            maxDate: addDays(today, 30),
            totalDays: 30,
        };
    }

    const minDate = new Date(Math.min(...allDates.map((d) => d.getTime())));
    const maxDate = new Date(Math.max(...allDates.map((d) => d.getTime())));

    const effectiveMin = addDays(minDate, -buffer);
    const effectiveMax = addDays(maxDate, buffer);
    const totalDays = differenceInDays(effectiveMax, effectiveMin);

    return {
        minDate: effectiveMin,
        maxDate: effectiveMax,
        totalDays,
    };
};
