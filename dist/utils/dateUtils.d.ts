import { CalendarSettings, ConstructionTask, TaskDates, AnchorPoint, ZoomLevel } from '../types';

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
 * 작업일 기준으로 날짜 추가 (휴일 건너뛰기)
 *
 * @param startDate - 시작 날짜
 * @param days - 추가할 작업일 수
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
export declare const addWorkingDays: (startDate: Date, days: number, holidays: Date[] | undefined, settings: CalendarSettings) => Date;
/**
 * 역순으로 작업일 계산 (휴일 건너뛰기)
 */
export declare const subtractWorkingDays: (endDate: Date, days: number, holidays: Date[] | undefined, settings: CalendarSettings) => Date;
/**
 * 달력일 기준으로 날짜 추가 (휴일 포함)
 */
export declare const addCalendarDays: (startDate: Date, days: number) => Date;
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
export declare const calculateDualCalendarDates: (task: ConstructionTask, holidays: Date[] | undefined, settings: CalendarSettings) => TaskDates;
/**
 * 앵커 포인트에 해당하는 날짜 반환
 */
export declare const getAnchorDate: (_task: ConstructionTask, anchor: AnchorPoint, dates: TaskDates) => Date;
/**
 * 날짜를 X 좌표로 변환
 */
export declare const dateToX: (date: Date, baseDate: Date, pixelsPerDay: number) => number;
/**
 * X 좌표를 날짜로 변환
 */
export declare const xToDate: (x: number, baseDate: Date, pixelsPerDay: number) => Date;
/**
 * 날짜 범위의 픽셀 너비 계산
 */
export declare const getDateRangeWidth: (startDate: Date, endDate: Date, pixelsPerDay: number) => number;
/**
 * 줌 레벨에 따른 픽셀/일 값 반환
 */
export declare const getPixelsPerDay: (zoomLevel: ZoomLevel) => number;
/**
 * 태스크 배열에서 날짜 범위 계산 (여유 포함)
 */
export declare const calculateDateRange: (tasks: ConstructionTask[], milestones?: {
    date: Date;
}[], buffer?: number) => {
    minDate: Date;
    maxDate: Date;
    totalDays: number;
};
