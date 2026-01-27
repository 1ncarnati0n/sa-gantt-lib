import { CalendarSettings, ConstructionTask, CriticalPathSummary } from '../../types';

/**
 * Level 2 Task들의 Critical Path 계산
 *
 * 산정 기준:
 * 1. 순작업 → 작업일
 * 2. 간접작업 → 비작업일
 * 3. 순작업 중 휴일 → 비작업일
 * 4. 여러 순작업 겹침 → 하나의 작업일 (max 1)
 * 5. 순작업 + 간접작업 겹침 → 작업일
 * 6. 여러 간접작업 겹침 → 하나의 비작업일 (max 1)
 * 7. 소수점 처리: 해당일에 0.5일씩이면 각각 0.5로 계산
 *
 * @param tasks - Level 2 Task 배열 (type === 'TASK')
 * @param holidays - 공휴일 목록
 * @param calendarSettings - 전역 캘린더 설정
 * @returns CriticalPathSummary
 */
export declare const calculateCriticalPath: (tasks: ConstructionTask[], holidays?: Date[], calendarSettings?: CalendarSettings) => CriticalPathSummary;
