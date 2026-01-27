import { CalendarSettings, ConstructionTask } from '../../../types';
import { DragType } from '../types';

/**
 * 드래그 방향 계산
 */
export declare const calculateDragDirection: (deltaX: number) => "left" | "right";
/**
 * Delta Days 계산 (픽셀 → 일수)
 */
export declare const calculateDeltaDays: (deltaX: number, pixelsPerDay: number) => number;
/**
 * 휴일 스냅 계산
 * @returns adjustedDeltaDays: 휴일 회피 후 조정된 일수, skippedDays: 스킵된 휴일 수
 */
export declare const calculateHolidaySnap: (originalDate: Date, deltaDays: number, dragDirection: "left" | "right", holidays: Date[], calendarSettings: CalendarSettings) => {
    adjustedDeltaDays: number;
    skippedDays: number;
};
/**
 * DragType에 따른 커서 스타일 결정
 */
export declare const getDragCursor: (dragType: DragType) => "grabbing" | "ew-resize" | "col-resize";
/**
 * 드래그 이벤트 리스너 등록
 * @returns cleanup 함수
 */
export declare const setupDragListeners: (onMove: (e: MouseEvent) => void, onUp: () => void, cursor?: "grabbing" | "ew-resize" | "col-resize") => (() => void);
/**
 * 드래그 완료 시 최종 휴일 스냅 적용
 * 현재 useGroupDrag, useDependencyDrag, useBarDrag에서 중복되던 로직을 통합
 *
 * @param date 검사할 날짜
 * @param direction 드래그 방향 ('left' | 'right')
 * @param holidays 휴일 목록
 * @param calendarSettings 캘린더 설정
 * @returns adjustedDate: 조정된 날짜, adjustment: 조정된 일수
 */
export declare const applyFinalHolidaySnap: (date: Date, direction: "left" | "right", holidays: Date[], calendarSettings: CalendarSettings) => {
    adjustedDate: Date;
    adjustment: number;
};
/**
 * 그룹 드래그 시 기준 Task 선정 및 작업일 오프셋 계산
 *
 * @param affectedTasks - 영향받는 Task 배열
 * @param holidays - 공휴일 목록
 * @param calendarSettings - 캘린더 설정
 * @returns referenceTask: 기준 Task, workingDaysOffsets: 각 Task의 작업일 오프셋
 */
export declare const calculateWorkingDaysOffsets: (affectedTasks: ConstructionTask[], holidays: Date[], calendarSettings: CalendarSettings) => {
    referenceTask: ConstructionTask | null;
    workingDaysOffsets: Map<string, number>;
};
/**
 * 그룹 드래그 완료 시 통합 휴일 스냅 계산
 *
 * 핵심 원리:
 * 1. 기준 Task(가장 빠른 시작일)의 이동 후 날짜가 휴일인지 확인
 * 2. 휴일이면 드래그 방향으로 스냅
 * 3. 다른 Task들은 기준 Task의 새 위치에서 작업일 오프셋만큼 이동
 *
 * @param referenceTask - 기준 Task
 * @param workingDaysOffsets - 각 Task의 작업일 오프셋
 * @param affectedTasks - 영향받는 Task 배열
 * @param deltaDays - 이동할 달력일 수
 * @param direction - 드래그 방향
 * @param holidays - 공휴일 목록
 * @param calendarSettings - 캘린더 설정
 * @returns 각 Task의 새 시작일 Map
 */
export declare const calculateGroupHolidaySnap: (referenceTask: ConstructionTask, workingDaysOffsets: Map<string, number>, affectedTasks: ConstructionTask[], deltaDays: number, direction: "left" | "right", holidays: Date[], calendarSettings: CalendarSettings) => Map<string, Date>;
/**
 * 그룹 드래그 중 미리보기용 스냅 deltaDays 계산
 *
 * @param referenceStartDate - 기준 Task의 원래 시작일
 * @param deltaDays - 원래 이동할 달력일 수
 * @param direction - 드래그 방향
 * @param holidays - 공휴일 목록
 * @param calendarSettings - 캘린더 설정
 * @returns 스냅 적용된 deltaDays
 */
export declare const calculateGroupSnapDeltaDays: (referenceStartDate: Date, deltaDays: number, direction: "left" | "right", holidays: Date[], calendarSettings: CalendarSettings) => number;
/**
 * 단일 Task의 드래그 이동 결과 계산 (Task Bar 'move' 로직과 동일)
 *
 * 핵심 원리:
 * 1. 새 시작일 계산 (델타만큼 이동)
 * 2. 시작일이 휴일이면 드래그 방향으로 스냅
 * 3. 종료일 재계산: 선간접(달력일) + 순작업(작업일, 휴일건너뛰기) + 후간접(달력일)
 *
 * @param originalStartDate - 원래 시작일
 * @param indirectWorkDaysPre - 선간접 일수
 * @param netWorkDays - 순작업일 수
 * @param indirectWorkDaysPost - 후간접 일수
 * @param deltaDays - 이동할 달력일 수
 * @param direction - 드래그 방향
 * @param holidays - 공휴일 목록
 * @param calendarSettings - 캘린더 설정
 * @returns 새 시작일과 종료일
 */
export declare const calculateTaskMoveResult: (originalStartDate: Date, indirectWorkDaysPre: number, netWorkDays: number, indirectWorkDaysPost: number, deltaDays: number, direction: "left" | "right", holidays: Date[], calendarSettings: CalendarSettings) => {
    newStartDate: Date;
    newEndDate: Date;
};
/**
 * 그룹 드래그 시 각 Task별로 독립적인 휴일 스냅 및 종료일 재계산
 * (Task Bar 'move' 방식과 동일하게 처리)
 *
 * @param affectedTasks - 영향받는 Task 배열
 * @param deltaDays - 이동할 달력일 수
 * @param direction - 드래그 방향
 * @param holidays - 공휴일 목록
 * @param calendarSettings - 캘린더 설정
 * @returns 각 Task의 새 시작일/종료일 Map
 */
export declare const calculateGroupTasksMove: (affectedTasks: ConstructionTask[], deltaDays: number, direction: "left" | "right", holidays: Date[], calendarSettings: CalendarSettings) => Map<string, {
    newStartDate: Date;
    newEndDate: Date;
}>;
/**
 * 픽셀 이동량을 작업일 수로 변환
 *
 * @param deltaX - 픽셀 이동량
 * @param pixelsPerDay - 일당 픽셀 수
 * @param baseDate - 기준 task의 원래 시작일
 * @param holidays - 공휴일 목록
 * @param calendarSettings - 캘린더 설정
 * @returns 작업일 이동량 (음수: 왼쪽, 양수: 오른쪽)
 */
export declare const calculateDeltaWorkingDays: (deltaX: number, pixelsPerDay: number, baseDate: Date, holidays: Date[], calendarSettings: CalendarSettings) => number;
/**
 * 시작일에서 종료일 계산 (직간접 구조 반영)
 *
 * @param startDate - 시작일
 * @param indirectWorkDaysPre - 선간접 일수
 * @param netWorkDays - 순작업일 수
 * @param indirectWorkDaysPost - 후간접 일수
 * @param holidays - 공휴일 목록
 * @param calendarSettings - 캘린더 설정
 * @returns 종료일
 */
export declare const calculateEndDateFromStart: (startDate: Date, indirectWorkDaysPre: number, netWorkDays: number, indirectWorkDaysPost: number, holidays: Date[], calendarSettings: CalendarSettings) => Date;
/**
 * 그룹 드래그 시 크리티컬 패스(작업일 기준 상대 거리)를 유지하며 이동
 *
 * 핵심 원리:
 * 1. 모든 task가 같은 "작업일 수"만큼 이동
 * 2. 기준 task의 새 시작일 = addWorkingDays(원래시작일, deltaWorkingDays)
 * 3. 다른 task의 새 시작일 = addWorkingDays(기준새시작일, 원래작업일오프셋)
 * 4. → task 간 작업일 기준 상대 거리 유지됨
 *
 * @param referenceTask - 기준 Task (가장 빠른 시작일)
 * @param workingDaysOffsets - 각 Task의 기준 Task 대비 작업일 오프셋
 * @param affectedTasks - 영향받는 Task 배열
 * @param deltaWorkingDays - 이동할 작업일 수 (음수: 왼쪽, 양수: 오른쪽)
 * @param holidays - 공휴일 목록
 * @param calendarSettings - 캘린더 설정
 * @returns 각 Task의 새 시작일/종료일 Map
 */
export declare const calculateGroupTasksMoveWithCriticalPath: (referenceTask: ConstructionTask, workingDaysOffsets: Map<string, number>, affectedTasks: ConstructionTask[], deltaWorkingDays: number, holidays: Date[], calendarSettings: CalendarSettings) => Map<string, {
    newStartDate: Date;
    newEndDate: Date;
}>;
