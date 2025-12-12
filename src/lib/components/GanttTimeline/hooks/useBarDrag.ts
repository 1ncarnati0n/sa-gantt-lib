'use client';

import { useCallback, useRef, useEffect } from 'react';
import { addDays, differenceInDays } from 'date-fns';
import { isHoliday, snapToWorkingDay } from '../../../utils/dateUtils';
import {
    calculateDragDirection,
    calculateDeltaDays,
    calculateHolidaySnap,
    getDragCursor,
} from './dragUtils';
import { useDragState } from './useDragState';
import type { CalendarSettings } from '../../../types';
import type { DragType, DragInfo, BarDragResult, BarDragState, BaseDragOptions } from '../types';

// ============================================
// Hook Options
// ============================================

interface UseBarDragOptions extends BaseDragOptions {
    holidays: Date[];
    calendarSettings: CalendarSettings;
    onBarDrag?: (result: BarDragResult) => void;
}

// ============================================
// 드래그 타입별 상태 계산 (분리된 순수 함수)
// ============================================
const calculateDragResult = (
    state: BarDragState,
    deltaDays: number,
    direction: 'left' | 'right',
    holidays: Date[],
    calendarSettings: CalendarSettings
): Partial<BarDragState> => {
    let newStartDate = state.originalStartDate;
    let newEndDate = state.originalEndDate;
    let newPreDays = state.originalIndirectWorkDaysPre;
    let newNetDays = state.originalNetWorkDays;
    let newPostDays = state.originalIndirectWorkDaysPost;
    let skippedDays = 0;

    switch (state.dragType) {
        case 'move': {
            const { adjustedDeltaDays, skippedDays: skipped } = calculateHolidaySnap(
                state.originalStartDate,
                deltaDays,
                direction,
                holidays,
                calendarSettings
            );
            skippedDays = skipped;
            newStartDate = addDays(state.originalStartDate, adjustedDeltaDays);
            newEndDate = addDays(state.originalEndDate, adjustedDeltaDays);
            break;
        }

        case 'move-net': {
            const maxPreIncrease = state.originalIndirectWorkDaysPost;
            const maxPreDecrease = state.originalIndirectWorkDaysPre;
            const constrainedDelta = Math.max(-maxPreDecrease, Math.min(maxPreIncrease, deltaDays));
            newPreDays = state.originalIndirectWorkDaysPre + constrainedDelta;
            newPostDays = state.originalIndirectWorkDaysPost - constrainedDelta;
            break;
        }

        case 'resize-pre': {
            if (state.originalIndirectWorkDaysPre > 0) {
                newPreDays = Math.max(0, state.originalIndirectWorkDaysPre - deltaDays);
                const netWorkStartDate = addDays(state.originalStartDate, state.originalIndirectWorkDaysPre);
                newStartDate = addDays(netWorkStartDate, -newPreDays);
            } else {
                newNetDays = Math.max(1, state.originalNetWorkDays - deltaDays);
                const netWorkEndDate = addDays(state.originalStartDate, state.originalNetWorkDays - 1);
                newStartDate = addDays(netWorkEndDate, -(newNetDays - 1));
            }
            newEndDate = state.originalEndDate;
            break;
        }

        case 'resize-post': {
            if (state.originalIndirectWorkDaysPost > 0) {
                newPostDays = Math.max(0, state.originalIndirectWorkDaysPost + deltaDays);
                const netWorkEndDate = addDays(state.originalEndDate, -state.originalIndirectWorkDaysPost);
                newEndDate = addDays(netWorkEndDate, newPostDays);
            } else {
                newNetDays = Math.max(1, state.originalNetWorkDays + deltaDays);
                newEndDate = addDays(state.originalStartDate, newNetDays - 1);
            }
            newStartDate = state.originalStartDate;
            break;
        }

        case 'resize-pre-net': {
            const maxPreIncrease = state.originalNetWorkDays - 1;
            const maxPreDecrease = state.originalIndirectWorkDaysPre;
            const constrainedDelta = Math.max(-maxPreDecrease, Math.min(maxPreIncrease, deltaDays));
            newPreDays = state.originalIndirectWorkDaysPre + constrainedDelta;
            newNetDays = state.originalNetWorkDays - constrainedDelta;
            break;
        }

        case 'resize-net-post': {
            const maxNetIncrease = state.originalIndirectWorkDaysPost;
            const maxNetDecrease = state.originalNetWorkDays - 1;
            const constrainedDelta = Math.max(-maxNetDecrease, Math.min(maxNetIncrease, deltaDays));
            newNetDays = state.originalNetWorkDays + constrainedDelta;
            newPostDays = state.originalIndirectWorkDaysPost - constrainedDelta;
            break;
        }
    }

    return {
        currentStartDate: newStartDate,
        currentEndDate: newEndDate,
        currentIndirectWorkDaysPre: newPreDays,
        currentNetWorkDays: newNetDays,
        currentIndirectWorkDaysPost: newPostDays,
        skippedHolidayDays: skippedDays,
        dragDirection: direction,
    };
};

// ============================================
// useBarDrag Hook (리팩토링됨)
// ============================================

export const useBarDrag = ({
    pixelsPerDay,
    holidays,
    calendarSettings,
    onBarDrag,
}: UseBarDragOptions) => {
    // 커서 cleanup ref (동적 커서 처리를 위해)
    const cleanupRef = useRef<(() => void) | null>(null);

    // ========================================
    // 공통 드래그 상태 관리 훅 사용
    // ========================================
    const { state: dragState, start, isDragging } = useDragState<BarDragState>({
        // 드래그 중 처리
        onMove: (e, state, setState) => {
            if (!onBarDrag) return;

            const deltaX = e.clientX - state.startX;
            const deltaDays = calculateDeltaDays(deltaX, pixelsPerDay);
            const direction = calculateDragDirection(deltaX);

            // 순수 함수로 드래그 결과 계산
            const result = calculateDragResult(state, deltaDays, direction, holidays, calendarSettings);

            setState(prev => prev ? {
                ...prev,
                ...result,
                lastDeltaX: deltaX,
            } : null);
        },
        // 드래그 완료 처리
        onEnd: (state) => {
            if (!onBarDrag) return;

            const direction = calculateDragDirection(state.lastDeltaX);
            let finalStartDate = state.currentStartDate;
            let finalEndDate = state.currentEndDate;

            // 'move' 타입일 때만 최종 휴일 회피 처리
            if (state.dragType === 'move' && isHoliday(finalStartDate, holidays, calendarSettings)) {
                const snappedStart = snapToWorkingDay(finalStartDate, direction, holidays, calendarSettings);
                const daysDiff = differenceInDays(snappedStart, finalStartDate);
                finalStartDate = snappedStart;
                finalEndDate = addDays(finalEndDate, daysDiff);
            }

            const hasDateChange =
                finalStartDate.getTime() !== state.originalStartDate.getTime() ||
                finalEndDate.getTime() !== state.originalEndDate.getTime();
            const hasDaysChange =
                state.currentIndirectWorkDaysPre !== state.originalIndirectWorkDaysPre ||
                state.currentNetWorkDays !== state.originalNetWorkDays ||
                state.currentIndirectWorkDaysPost !== state.originalIndirectWorkDaysPost;

            if (hasDateChange || hasDaysChange) {
                onBarDrag({
                    taskId: state.taskId,
                    dragType: state.dragType,
                    newStartDate: finalStartDate,
                    newEndDate: finalEndDate,
                    newIndirectWorkDaysPre: state.currentIndirectWorkDaysPre,
                    newIndirectWorkDaysPost: state.currentIndirectWorkDaysPost,
                    newNetWorkDays: state.currentNetWorkDays,
                });
            }
        },
        // 기본 커서 (동적 커서는 별도 처리)
        cursor: 'grabbing',
    });

    // ========================================
    // 동적 커서 처리 (dragType에 따라)
    // ========================================
    useEffect(() => {
        if (dragState) {
            const cursor = getDragCursor(dragState.dragType);
            document.body.style.cursor = cursor;
        }
        return () => {
            if (cleanupRef.current) {
                cleanupRef.current();
                cleanupRef.current = null;
            }
        };
    }, [dragState?.dragType]);

    // ========================================
    // 드래그 시작
    // ========================================
    const handleMouseDown = useCallback((
        e: React.MouseEvent,
        taskId: string,
        dragType: DragType,
        taskData: {
            startDate: Date;
            endDate: Date;
            indirectWorkDaysPre: number;
            netWorkDays: number;
            indirectWorkDaysPost: number;
        }
    ) => {
        if (!onBarDrag) return;
        e.preventDefault();
        e.stopPropagation();

        start({
            taskId,
            dragType,
            startX: e.clientX,
            originalStartDate: taskData.startDate,
            originalEndDate: taskData.endDate,
            originalIndirectWorkDaysPre: taskData.indirectWorkDaysPre,
            originalNetWorkDays: taskData.netWorkDays,
            originalIndirectWorkDaysPost: taskData.indirectWorkDaysPost,
            currentStartDate: taskData.startDate,
            currentEndDate: taskData.endDate,
            currentIndirectWorkDaysPre: taskData.indirectWorkDaysPre,
            currentNetWorkDays: taskData.netWorkDays,
            currentIndirectWorkDaysPost: taskData.indirectWorkDaysPost,
            lastDeltaX: 0,
            skippedHolidayDays: 0,
            dragDirection: 'right',
        });
    }, [onBarDrag, start]);

    // ========================================
    // 드래그 정보 조회
    // ========================================
    const getDragInfo = useCallback((taskId: string): DragInfo | null => {
        if (dragState && dragState.taskId === taskId) {
            return {
                startDate: dragState.currentStartDate,
                endDate: dragState.currentEndDate,
                indirectWorkDaysPre: dragState.currentIndirectWorkDaysPre,
                indirectWorkDaysPost: dragState.currentIndirectWorkDaysPost,
                netWorkDays: dragState.currentNetWorkDays,
                skippedHolidayDays: dragState.skippedHolidayDays,
                dragDirection: dragState.dragDirection,
            };
        }
        return null;
    }, [dragState]);

    return {
        isDragging,
        handleBarMouseDown: handleMouseDown,
        getDragInfo,
    };
};
