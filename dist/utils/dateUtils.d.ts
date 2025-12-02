import { CalendarSettings, ConstructionTask, TaskDates, AnchorPoint, ZoomLevel } from '../types';

/**
 * 주어진 날짜가 휴일인지 판정
 */
export declare const isHoliday: (date: Date, holidays: Date[] | undefined, settings: CalendarSettings) => boolean;
/**
 * 주말인지 판정 (설정 무관하게)
 */
export declare const isWeekend: (date: Date) => boolean;
/**
 * 작업일 기준으로 날짜 추가 (휴일 건너뛰기)
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
 * - 앞 간접작업일(indirectWorkDaysPre): 달력일 기준으로 계산
 * - 순작업일(netWorkDays): 휴일을 건너뛰고 계산
 * - 뒤 간접작업일(indirectWorkDaysPost): 달력일 기준으로 계산
 *
 * 바 구조: [앞간접 Blue] - [순작업 Red] - [뒤간접 Blue]
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
