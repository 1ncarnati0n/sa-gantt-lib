import { CalendarSettings, ConstructionTask, TaskDates, AnchorPoint } from '../../types';

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
