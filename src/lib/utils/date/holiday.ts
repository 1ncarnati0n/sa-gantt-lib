// ============================================
// SA-Gantt-Lib: 휴일 판정 유틸리티
// ============================================

import {
    addDays,
    isSaturday,
    isSunday,
    isSameDay,
    startOfDay,
} from 'date-fns';
import type { CalendarSettings } from '../../types';

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
// 휴일 정보 조회
// ============================================

/**
 * 날짜 범위 내의 휴일 목록 반환 (UI 렌더링용)
 *
 * @param startDate - 시작 날짜
 * @param endDate - 종료 날짜
 * @param holidays - 공휴일 목록
 * @param settings - 캘린더 설정
 * @returns 휴일에 해당하는 날짜 배열
 *
 * @example
 * ```ts
 * const holidays = getHolidaysInDateRange(
 *   new Date('2024-05-01'),
 *   new Date('2024-05-07'),
 *   [],
 *   { workOnSaturdays: false, workOnSundays: false, workOnHolidays: false }
 * );
 * // 2024-05-04 (토), 2024-05-05 (일) 반환
 * ```
 */
export const getHolidaysInDateRange = (
    startDate: Date,
    endDate: Date,
    holidays: Date[] = [],
    settings: CalendarSettings
): Date[] => {
    const result: Date[] = [];
    let currentDate = startOfDay(new Date(startDate));
    const end = startOfDay(new Date(endDate));

    while (currentDate <= end) {
        if (isHoliday(currentDate, holidays, settings)) {
            result.push(new Date(currentDate));
        }
        currentDate = addDays(currentDate, 1);
    }

    return result;
};

/**
 * 날짜 범위 내 휴일 정보를 상세하게 반환 (날짜 + 오프셋)
 *
 * @param startDate - 시작 날짜
 * @param endDate - 종료 날짜
 * @param holidays - 공휴일 목록
 * @param settings - 캘린더 설정
 * @returns 휴일 정보 배열 (날짜, 시작일로부터의 오프셋)
 */
export const getHolidayOffsetsInDateRange = (
    startDate: Date,
    endDate: Date,
    holidays: Date[] = [],
    settings: CalendarSettings
): { date: Date; offset: number }[] => {
    const result: { date: Date; offset: number }[] = [];
    let currentDate = startOfDay(new Date(startDate));
    const end = startOfDay(new Date(endDate));
    let offset = 0;

    while (currentDate <= end) {
        if (isHoliday(currentDate, holidays, settings)) {
            result.push({ date: new Date(currentDate), offset });
        }
        currentDate = addDays(currentDate, 1);
        offset++;
    }

    return result;
};
