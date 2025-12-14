// ============================================
// 드래그 공통 유틸리티
// ============================================

import { addDays, differenceInDays } from 'date-fns';
import { isHoliday, snapToWorkingDay, countWorkingDays, addWorkingDays } from '../../../utils/dateUtils';
import type { CalendarSettings, ConstructionTask } from '../../../types';
import type { DragType } from '../types';

// ============================================
// 드래그 계산 유틸리티
// ============================================

/**
 * 드래그 방향 계산
 */
export const calculateDragDirection = (deltaX: number): 'left' | 'right' => {
    return deltaX < 0 ? 'left' : 'right';
};

/**
 * Delta Days 계산 (픽셀 → 일수)
 */
export const calculateDeltaDays = (deltaX: number, pixelsPerDay: number): number => {
    return Math.round(deltaX / pixelsPerDay);
};

/**
 * 휴일 스냅 계산
 * @returns adjustedDeltaDays: 휴일 회피 후 조정된 일수, skippedDays: 스킵된 휴일 수
 */
export const calculateHolidaySnap = (
    originalDate: Date,
    deltaDays: number,
    dragDirection: 'left' | 'right',
    holidays: Date[],
    calendarSettings: CalendarSettings
): { adjustedDeltaDays: number; skippedDays: number } => {
    const tentativeDate = addDays(originalDate, deltaDays);

    if (isHoliday(tentativeDate, holidays, calendarSettings)) {
        const snappedDate = snapToWorkingDay(tentativeDate, dragDirection, holidays, calendarSettings);
        const adjustedDeltaDays = differenceInDays(snappedDate, originalDate);
        const skippedDays = Math.abs(adjustedDeltaDays - deltaDays);
        return { adjustedDeltaDays, skippedDays };
    }

    return { adjustedDeltaDays: deltaDays, skippedDays: 0 };
};

// ============================================
// Cursor 유틸리티
// ============================================

/**
 * DragType에 따른 커서 스타일 결정
 */
export const getDragCursor = (dragType: DragType): 'grabbing' | 'ew-resize' | 'col-resize' => {
    if (dragType === 'move' || dragType === 'move-net') {
        return 'grabbing';
    }
    if (dragType === 'resize-pre-net' || dragType === 'resize-net-post') {
        return 'col-resize';
    }
    return 'ew-resize';
};

// ============================================
// 이벤트 리스너 유틸리티
// ============================================

/**
 * 드래그 이벤트 리스너 등록
 * @returns cleanup 함수
 */
export const setupDragListeners = (
    onMove: (e: MouseEvent) => void,
    onUp: () => void,
    cursor: 'grabbing' | 'ew-resize' | 'col-resize' = 'grabbing'
): (() => void) => {
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    document.body.style.cursor = cursor;
    document.body.style.userSelect = 'none';

    return () => {
        window.removeEventListener('mousemove', onMove);
        window.removeEventListener('mouseup', onUp);
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
    };
};

// ============================================
// 최종 휴일 스냅 유틸리티
// ============================================

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
export const applyFinalHolidaySnap = (
    date: Date,
    direction: 'left' | 'right',
    holidays: Date[],
    calendarSettings: CalendarSettings
): { adjustedDate: Date; adjustment: number } => {
    if (!isHoliday(date, holidays, calendarSettings)) {
        return { adjustedDate: date, adjustment: 0 };
    }

    const snappedDate = snapToWorkingDay(date, direction, holidays, calendarSettings);
    const adjustment = differenceInDays(snappedDate, date);

    return { adjustedDate: snappedDate, adjustment };
};

// ============================================
// 그룹 드래그 통합 스냅 유틸리티
// ============================================

/**
 * 그룹 드래그 시 기준 Task 선정 및 작업일 오프셋 계산
 *
 * @param affectedTasks - 영향받는 Task 배열
 * @param holidays - 공휴일 목록
 * @param calendarSettings - 캘린더 설정
 * @returns referenceTask: 기준 Task, workingDaysOffsets: 각 Task의 작업일 오프셋
 */
export const calculateWorkingDaysOffsets = (
    affectedTasks: ConstructionTask[],
    holidays: Date[],
    calendarSettings: CalendarSettings
): {
    referenceTask: ConstructionTask | null;
    workingDaysOffsets: Map<string, number>;
} => {
    if (affectedTasks.length === 0) {
        return { referenceTask: null, workingDaysOffsets: new Map() };
    }

    // 기준 Task 선정 (가장 빠른 시작일)
    const sortedTasks = [...affectedTasks].sort(
        (a, b) => a.startDate.getTime() - b.startDate.getTime()
    );
    const referenceTask = sortedTasks[0];

    // 각 Task의 기준 Task 대비 작업일 오프셋 계산
    const workingDaysOffsets = new Map<string, number>();
    for (const task of affectedTasks) {
        const offset = countWorkingDays(
            referenceTask.startDate,
            task.startDate,
            holidays,
            calendarSettings
        );
        workingDaysOffsets.set(task.id, offset);
    }

    return { referenceTask, workingDaysOffsets };
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
export const calculateGroupHolidaySnap = (
    referenceTask: ConstructionTask,
    workingDaysOffsets: Map<string, number>,
    affectedTasks: ConstructionTask[],
    deltaDays: number,
    direction: 'left' | 'right',
    holidays: Date[],
    calendarSettings: CalendarSettings
): Map<string, Date> => {
    const result = new Map<string, Date>();

    if (affectedTasks.length === 0) return result;

    // 1. 기준 Task의 새 위치 계산
    const referenceTentativeDate = addDays(referenceTask.startDate, deltaDays);

    // 2. 기준 Task가 휴일에 떨어지면 스냅
    const referenceNewDate = isHoliday(referenceTentativeDate, holidays, calendarSettings)
        ? snapToWorkingDay(referenceTentativeDate, direction, holidays, calendarSettings)
        : referenceTentativeDate;

    // 3. 각 Task의 새 시작일 계산 (작업일 간격 유지)
    for (const task of affectedTasks) {
        const workingDaysOffset = workingDaysOffsets.get(task.id) ?? 0;

        // 기준 Task의 새 시작일로부터 작업일 간격만큼 이동
        const newStartDate = workingDaysOffset === 0
            ? referenceNewDate
            : addWorkingDays(referenceNewDate, workingDaysOffset, holidays, calendarSettings);

        result.set(task.id, newStartDate);
    }

    return result;
};

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
export const calculateGroupSnapDeltaDays = (
    referenceStartDate: Date,
    deltaDays: number,
    direction: 'left' | 'right',
    holidays: Date[],
    calendarSettings: CalendarSettings
): number => {
    const tentativeDate = addDays(referenceStartDate, deltaDays);

    if (!isHoliday(tentativeDate, holidays, calendarSettings)) {
        return deltaDays;
    }

    const snappedDate = snapToWorkingDay(tentativeDate, direction, holidays, calendarSettings);
    return differenceInDays(snappedDate, referenceStartDate);
};
