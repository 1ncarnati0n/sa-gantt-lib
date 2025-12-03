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
 * 
 * @param date - 판정할 날짜
 * @param holidays - 공휴일 목록
 * @param settings - 캘린더 설정 (토요일/일요일/공휴일 근무 여부)
 * @returns 휴일이면 true, 아니면 false
 * 
 * @example
 * ```ts
 * const isHolidayDate = isHoliday(
 *   new Date('2024-05-05'),
 *   [new Date('2024-05-05')],
 *   { workOnSaturdays: false, workOnSundays: false, workOnHolidays: false }
 * );
 * ```
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
 * 
 * @param date - 판정할 날짜
 * @returns 토요일 또는 일요일이면 true
 */
export const isWeekend = (date: Date): boolean => {
    return isSaturday(date) || isSunday(date);
};

// ============================================
// 작업일 계산
// ============================================

/**
 * 작업일 기준으로 날짜 추가 (휴일 건너뛰기)
 * 소수점 일수는 올림 처리하여 날짜 계산 (예: 2.3일 → 3일)
 * 
 * @param startDate - 시작 날짜
 * @param days - 추가할 작업일 수 (소수점 허용)
 * @param holidays - 공휴일 목록
 * @param settings - 캘린더 설정
 * @returns 시작일로부터 지정된 작업일 수만큼 더한 날짜 (휴일 제외)
 * 
 * @example
 * ```ts
 * const endDate = addWorkingDays(
 *   new Date('2024-05-06'), // 월요일
 *   5, // 5일
 *   [],
 *   { workOnSaturdays: false, workOnSundays: false, workOnHolidays: false }
 * ); // 다음 월요일 반환
 * ```
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

    // 소수점이 있으면 올림 처리하여 날짜 계산
    const wholeDays = Math.ceil(days);

    // 시작일이 휴일이면 다음 작업일로 이동
    while (isHoliday(currentDate, holidays, settings)) {
        currentDate = addDays(currentDate, 1);
    }

    while (daysAdded < wholeDays) {
        if (!isHoliday(currentDate, holidays, settings)) {
            daysAdded++;
        }
        if (daysAdded < wholeDays) {
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
 * 소수점 일수는 올림 처리 (예: 2.3일 → 3일)
 */
export const addCalendarDays = (startDate: Date, days: number): Date => {
    if (days <= 0) return startDate;
    // 소수점이 있으면 올림 처리하여 날짜 계산
    const wholeDays = Math.ceil(days);
    return addDays(startDate, wholeDays - 1);
};

// ============================================
// 듀얼 캘린더 날짜 계산 (건설 공정표 핵심 로직)
// ============================================

/**
 * Level 2 태스크의 순작업/간접작업 날짜 계산
 * 
 * 건설 공정표의 핵심 로직:
 * - 선 간접작업일(indirectWorkDaysPre): 달력일 기준으로 계산
 * - 순작업일(netWorkDays): 휴일을 건너뛰고 계산
 * - 후 간접작업일(indirectWorkDaysPost): 달력일 기준으로 계산
 * 
 * 바 구조: [선간접 Blue] - [순작업 Red] - [후간접 Blue]
 * 
 * @param task - 계산할 태스크 (Level 2)
 * @param holidays - 공휴일 목록
 * @param settings - 캘린더 설정
 * @returns 계산된 날짜 정보 (시작일, 종료일, 순작업 시작/종료일, 간접작업 날짜 등)
 * 
 * @example
 * ```ts
 * const dates = calculateDualCalendarDates(
 *   {
 *     id: '1',
 *     wbsLevel: 2,
 *     task: {
 *       netWorkDays: 5,
 *       indirectWorkDaysPre: 2,
 *       indirectWorkDaysPost: 2,
 *     },
 *     startDate: new Date('2024-05-06'),
 *     // ...
 *   },
 *   [],
 *   { workOnSaturdays: false, workOnSundays: false, workOnHolidays: false }
 * );
 * ```
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

    const { netWorkDays, indirectWorkDaysPre, indirectWorkDaysPost } = task.task;
    const baseStartDate = startOfDay(new Date(task.startDate));

    let currentDate = baseStartDate;
    
    // 1. 선 간접작업 계산 (달력일 기준)
    let indirectPreStart: Date | undefined;
    let indirectPreEnd: Date | undefined;
    
    if (indirectWorkDaysPre > 0) {
        indirectPreStart = currentDate;
        indirectPreEnd = addCalendarDays(currentDate, indirectWorkDaysPre);
        currentDate = addDays(indirectPreEnd, 1);
    }

    // 2. 순작업 계산 (휴일 건너뛰기)
    let netStart = currentDate;
    let netEnd = netStart;
    
    if (netWorkDays > 0) {
        // 순작업 시작일이 휴일이면 다음 작업일로 이동
        while (isHoliday(netStart, holidays, settings)) {
            netStart = addDays(netStart, 1);
        }
        netEnd = addWorkingDays(netStart, netWorkDays, holidays, settings);
        currentDate = addDays(netEnd, 1);
    } else if (indirectWorkDaysPre === 0) {
        // 순작업이 0이고 선간접도 0이면 기준일이 시작
        netStart = baseStartDate;
        netEnd = baseStartDate;
    }

    // 3. 후 간접작업 계산 (달력일 기준)
    let indirectPostStart: Date | undefined;
    let indirectPostEnd: Date | undefined;
    
    if (indirectWorkDaysPost > 0) {
        indirectPostStart = currentDate;
        indirectPostEnd = addCalendarDays(currentDate, indirectWorkDaysPost);
    }

    // 전체 시작일/종료일 계산
    const totalStart = indirectPreStart || netStart;
    const totalEnd = indirectPostEnd || netEnd;

    return {
        startDate: totalStart,
        endDate: totalEnd,
        netWorkStartDate: netStart,
        netWorkEndDate: netEnd,
        indirectPreStartDate: indirectPreStart,
        indirectPreEndDate: indirectPreEnd,
        indirectPostStartDate: indirectPostStart,
        indirectPostEndDate: indirectPostEnd,
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
