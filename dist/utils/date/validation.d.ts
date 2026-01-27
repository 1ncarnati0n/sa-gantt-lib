import { ConstructionTask } from '../../types';

/**
 * 유효한 Date 객체인지 확인
 *
 * @param date - 검사할 값
 * @returns Date 객체이고 유효한 날짜인 경우 true
 *
 * @example
 * isValidDate(new Date())         // true
 * isValidDate(new Date('invalid')) // false (Invalid Date)
 * isValidDate('2025-01-01')       // false (문자열)
 * isValidDate(null)               // false
 */
export declare const isValidDate: (date: unknown) => date is Date;
/**
 * 날짜 범위의 유효성 검증
 * 시작일이 종료일보다 이전이거나 같아야 함
 *
 * @param startDate - 시작일
 * @param endDate - 종료일
 * @returns 유효한 범위인 경우 true
 *
 * @example
 * isValidDateRange(new Date('2025-01-01'), new Date('2025-01-31')) // true
 * isValidDateRange(new Date('2025-01-31'), new Date('2025-01-01')) // false
 */
export declare const isValidDateRange: (startDate: Date, endDate: Date) => boolean;
/**
 * Task의 날짜 유효성 검증
 *
 * @param task - 검사할 ConstructionTask
 * @returns Task의 시작일/종료일이 유효한 경우 true
 *
 * @example
 * const task = { startDate: new Date('2025-01-01'), endDate: new Date('2025-01-10'), ... };
 * validateTaskDates(task) // true
 */
export declare const validateTaskDates: (task: ConstructionTask) => boolean;
/**
 * 날짜 문자열을 Date 객체로 안전하게 변환
 * 변환 실패 시 null 반환
 *
 * @param dateString - ISO 형식 날짜 문자열 (e.g., '2025-01-15')
 * @returns 유효한 Date 객체 또는 null
 *
 * @example
 * parseDateSafe('2025-01-15')   // Date object
 * parseDateSafe('invalid')      // null
 * parseDateSafe('')             // null
 */
export declare const parseDateSafe: (dateString: string) => Date | null;
/**
 * 두 날짜가 같은 날인지 확인 (시간 무시)
 *
 * @param date1 - 첫 번째 날짜
 * @param date2 - 두 번째 날짜
 * @returns 같은 날이면 true
 *
 * @example
 * isSameDay(new Date('2025-01-15T10:00:00'), new Date('2025-01-15T23:59:59')) // true
 */
export declare const isSameDay: (date1: Date, date2: Date) => boolean;
