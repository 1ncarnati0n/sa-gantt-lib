// ============================================
// SA-Gantt-Lib: 작업일 계산 유틸리티
// ============================================

import { addDays } from 'date-fns';
import type { CalendarSettings, TaskData } from '../../types';
import { isHoliday } from './holiday';

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
// 캘린더 설정
// ============================================

/**
 * 기본 캘린더 설정 (건설 현장 표준)
 * - 토요일: 작업일 (기본)
 * - 일요일: 휴일
 * - 공휴일: 휴일
 */
export const DEFAULT_CALENDAR_SETTINGS: CalendarSettings = {
    workOnSaturdays: true,
    workOnSundays: false,
    workOnHolidays: false,
};

/**
 * Task별 캘린더 설정을 전역 설정과 병합하여 최종 CalendarSettings 반환
 *
 * @param taskData - Task 데이터 (task별 설정 포함)
 * @param globalSettings - 전역 캘린더 설정
 * @returns 병합된 캘린더 설정
 *
 * @example
 * ```ts
 * const settings = getTaskCalendarSettings(
 *   { netWorkDays: 5, workOnSaturdays: false }, // 이 task는 토요일 휴무
 *   { workOnSaturdays: true, workOnSundays: false, workOnHolidays: false }
 * );
 * // settings.workOnSaturdays === false
 * ```
 */
export const getTaskCalendarSettings = (
    taskData: TaskData | undefined,
    globalSettings: CalendarSettings = DEFAULT_CALENDAR_SETTINGS
): CalendarSettings => {
    if (!taskData) {
        return globalSettings;
    }

    return {
        workOnSaturdays: taskData.workOnSaturdays ?? globalSettings.workOnSaturdays,
        workOnSundays: taskData.workOnSundays ?? globalSettings.workOnSundays,
        workOnHolidays: taskData.workOnHolidays ?? globalSettings.workOnHolidays,
    };
};
