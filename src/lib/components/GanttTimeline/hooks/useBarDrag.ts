'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { addDays, differenceInDays } from 'date-fns';
import { isHoliday, snapToWorkingDay } from '../../../utils/dateUtils';
import {
    calculateDragDirection,
    calculateDeltaDays,
    calculateHolidaySnap,
    getDragCursor,
    setupDragListeners,
} from './dragUtils';
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
// useBarDrag Hook
// ============================================

export const useBarDrag = ({
    pixelsPerDay,
    holidays,
    calendarSettings,
    onBarDrag,
}: UseBarDragOptions) => {
    const [dragState, setDragState] = useState<BarDragState | null>(null);
    const dragStateRef = useRef<BarDragState | null>(null);

    // State-Ref 동기화
    useEffect(() => {
        dragStateRef.current = dragState;
    }, [dragState]);

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

        const newDragState: BarDragState = {
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
        };

        setDragState(newDragState);
        dragStateRef.current = newDragState;
    }, [onBarDrag]);

    // ========================================
    // 드래그 중
    // ========================================
    const handleMouseMove = useCallback((e: MouseEvent) => {
        const state = dragStateRef.current;
        if (!state || !onBarDrag) return;

        const deltaX = e.clientX - state.startX;
        const deltaDays = calculateDeltaDays(deltaX, pixelsPerDay);
        const direction = calculateDragDirection(deltaX);

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

        setDragState(prev => prev ? {
            ...prev,
            currentStartDate: newStartDate,
            currentEndDate: newEndDate,
            currentIndirectWorkDaysPre: newPreDays,
            currentNetWorkDays: newNetDays,
            currentIndirectWorkDaysPost: newPostDays,
            lastDeltaX: deltaX,
            skippedHolidayDays: skippedDays,
            dragDirection: direction,
        } : null);
    }, [onBarDrag, pixelsPerDay, holidays, calendarSettings]);

    // ========================================
    // 드래그 완료
    // ========================================
    const handleMouseUp = useCallback(() => {
        const state = dragStateRef.current;
        if (!state || !onBarDrag) {
            setDragState(null);
            dragStateRef.current = null;
            return;
        }

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

        setDragState(null);
        dragStateRef.current = null;
    }, [onBarDrag, holidays, calendarSettings]);

    // ========================================
    // 이벤트 리스너 관리
    // ========================================
    useEffect(() => {
        if (dragState) {
            const cursor = getDragCursor(dragState.dragType);
            return setupDragListeners(handleMouseMove, handleMouseUp, cursor);
        }
    }, [dragState, handleMouseMove, handleMouseUp]);

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
        isDragging: !!dragState,
        handleBarMouseDown: handleMouseDown,
        getDragInfo,
    };
};
