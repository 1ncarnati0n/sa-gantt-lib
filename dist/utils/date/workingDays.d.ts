import { CalendarSettings, TaskData } from '../../types';

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
export declare const addWorkingDays: (startDate: Date, days: number, holidays: Date[] | undefined, settings: CalendarSettings) => Date;
/**
 * 역순으로 작업일 계산 (휴일 건너뛰기)
 */
export declare const subtractWorkingDays: (endDate: Date, days: number, holidays: Date[] | undefined, settings: CalendarSettings) => Date;
/**
 * 두 날짜 사이의 작업일 수 계산 (시작일 포함, 종료일 제외)
 *
 * @param startDate - 시작 날짜
 * @param endDate - 종료 날짜
 * @param holidays - 공휴일 목록
 * @param settings - 캘린더 설정
 * @returns 작업일 수 (endDate가 startDate보다 이전이면 음수)
 *
 * @example
 * ```ts
 * // 월요일(5/6)부터 금요일(5/10)까지의 작업일 수 (토/일 휴무)
 * const days = countWorkingDays(
 *   new Date('2024-05-06'),
 *   new Date('2024-05-10'),
 *   [],
 *   { workOnSaturdays: false, workOnSundays: false, workOnHolidays: false }
 * ); // 4 (월,화,수,목 = 4일)
 * ```
 */
export declare const countWorkingDays: (startDate: Date, endDate: Date, holidays: Date[] | undefined, settings: CalendarSettings) => number;
/**
 * 작업일 기준으로 N칸 이동 (그룹 드래그용)
 *
 * countWorkingDays와 addWorkingDays의 off-by-one 차이를 보정:
 * - countWorkingDays(A, B) = N (A부터 B 전날까지 작업일 "개수")
 * - addWorkingDays(A, N) = A에서 N번째 작업일 (A가 1번째)
 * - moveByWorkingDays(A, N) = A에서 N칸 이동한 날짜
 *
 * @param startDate - 시작 날짜
 * @param days - 이동할 작업일 수 (0=제자리, 양수=앞으로, 음수=뒤로)
 * @param holidays - 공휴일 목록
 * @param settings - 캘린더 설정
 * @returns 이동한 날짜
 *
 * @example
 * ```ts
 * // 월요일에서 1작업일 앞으로 이동 = 화요일
 * const nextDay = moveByWorkingDays(monday, 1, [], settings);
 *
 * // 금요일에서 1작업일 뒤로 이동 = 목요일
 * const prevDay = moveByWorkingDays(friday, -1, [], settings);
 *
 * // countWorkingDays와 일관성 보장:
 * // countWorkingDays(A, B) = N 이면
 * // moveByWorkingDays(A, N) = B
 * ```
 */
export declare const moveByWorkingDays: (startDate: Date, days: number, holidays: Date[] | undefined, settings: CalendarSettings) => Date;
/**
 * 달력일 기준으로 N일간 작업 후 종료일 계산 (휴일 포함)
 *
 * 건설 공정 규칙: "N일간 작업" = 시작일 포함 N일
 * - 예: 1/1 시작, 5일간 작업 → 종료일 1/5 (1/1, 1/2, 1/3, 1/4, 1/5)
 * - 계산: startDate + (N - 1)
 *
 * 소수점 일수는 올림 처리 (예: 2.3일 → 3일)
 *
 * @param startDate - 작업 시작일 (첫째 날)
 * @param days - 작업 기간 (일 수, 시작일 포함)
 * @returns 작업 종료일
 *
 * @example
 * ```ts
 * // 1/1 시작, 5일간 작업 → 1/5 종료
 * addCalendarDays(new Date('2024-01-01'), 5);
 * // 결과: 2024-01-05
 * ```
 */
export declare const addCalendarDays: (startDate: Date, days: number) => Date;
/**
 * 기본 캘린더 설정 (건설 현장 표준)
 * - 토요일: 작업일 (기본)
 * - 일요일: 휴일
 * - 공휴일: 휴일
 */
export declare const DEFAULT_CALENDAR_SETTINGS: CalendarSettings;
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
export declare const getTaskCalendarSettings: (taskData: TaskData | undefined, globalSettings?: CalendarSettings) => CalendarSettings;
