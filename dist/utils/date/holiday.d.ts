import { CalendarSettings } from '../../types';

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
export declare const isHoliday: (date: Date, holidays: Date[] | undefined, settings: CalendarSettings) => boolean;
/**
 * 주말인지 판정 (설정 무관하게)
 *
 * @param date - 판정할 날짜
 * @returns 토요일 또는 일요일이면 true
 */
export declare const isWeekend: (date: Date) => boolean;
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
export declare const getHolidaysInDateRange: (startDate: Date, endDate: Date, holidays: Date[] | undefined, settings: CalendarSettings) => Date[];
/**
 * 날짜 범위 내 휴일 정보를 상세하게 반환 (날짜 + 오프셋)
 *
 * @param startDate - 시작 날짜
 * @param endDate - 종료 날짜
 * @param holidays - 공휴일 목록
 * @param settings - 캘린더 설정
 * @returns 휴일 정보 배열 (날짜, 시작일로부터의 오프셋)
 */
export declare const getHolidayOffsetsInDateRange: (startDate: Date, endDate: Date, holidays: Date[] | undefined, settings: CalendarSettings) => {
    date: Date;
    offset: number;
}[];
/**
 * 드래그 방향에 따라 휴일을 피해 가장 가까운 작업일로 스냅
 *
 * @param date - 스냅할 날짜
 * @param direction - 드래그 방향 ('left': 이전 작업일, 'right': 다음 작업일)
 * @param holidays - 공휴일 목록
 * @param settings - 캘린더 설정
 * @returns 가장 가까운 작업일
 *
 * @example
 * ```ts
 * // 일요일(휴일)에서 다음 작업일로 스냅
 * const workingDay = snapToWorkingDay(
 *   new Date('2024-05-05'), // 일요일
 *   'right',
 *   [],
 *   { workOnSaturdays: false, workOnSundays: false, workOnHolidays: false }
 * );
 * // 2024-05-06 (월요일) 반환
 * ```
 */
export declare const snapToWorkingDay: (date: Date, direction: "left" | "right", holidays: Date[], settings: CalendarSettings) => Date;
