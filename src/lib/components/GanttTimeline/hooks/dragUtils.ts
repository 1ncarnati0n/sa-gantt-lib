// ============================================
// 드래그 공통 유틸리티
// ============================================

import { addDays, differenceInDays } from 'date-fns';
import { isHoliday, snapToWorkingDay } from '../../../utils/dateUtils';
import type { CalendarSettings } from '../../../types';
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
