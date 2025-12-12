'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { addDays, differenceInDays } from 'date-fns';
import { isHoliday } from '../../../utils/dateUtils';
import type { CalendarSettings } from '../../../types';
import type { DragType, DragInfo, BarDragResult } from '../types';

/** 바 드래그 내부 상태 */
interface BarDragState {
    taskId: string;
    dragType: DragType;
    startX: number;
    // 원본 값
    originalStartDate: Date;
    originalEndDate: Date;
    originalIndirectWorkDaysPre: number;
    originalNetWorkDays: number;
    originalIndirectWorkDaysPost: number;
    // 현재 값
    currentStartDate: Date;
    currentEndDate: Date;
    currentIndirectWorkDaysPre: number;
    currentNetWorkDays: number;
    currentIndirectWorkDaysPost: number;
    // 마지막 드래그 방향 (휴일 회피용)
    lastDeltaX: number;
    // 스킵된 휴일 정보 (빗금 표시용)
    skippedHolidayDays: number;
    dragDirection: 'left' | 'right';
}

/**
 * 드래그 방향에 따라 휴일을 피해 가장 가까운 작업일로 스냅
 */
const snapToWorkingDay = (
    date: Date,
    direction: 'left' | 'right',
    holidays: Date[],
    settings: CalendarSettings
): Date => {
    let current = new Date(date);
    const step = direction === 'right' ? 1 : -1;

    while (isHoliday(current, holidays, settings)) {
        current = addDays(current, step);
    }

    return current;
};

interface UseBarDragOptions {
    pixelsPerDay: number;
    holidays: Date[];
    calendarSettings: CalendarSettings;
    onBarDrag?: (result: BarDragResult) => void;
}

export const useBarDrag = ({
    pixelsPerDay,
    holidays,
    calendarSettings,
    onBarDrag,
}: UseBarDragOptions) => {
    const [dragState, setDragState] = useState<BarDragState | null>(null);
    const dragStateRef = useRef<BarDragState | null>(null);

    // dragState 변경 시 ref도 업데이트
    useEffect(() => {
        dragStateRef.current = dragState;
    }, [dragState]);

    const handleBarMouseDown = useCallback((
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

    const handleMouseMove = useCallback((e: MouseEvent) => {
        const currentDragState = dragStateRef.current;
        if (!currentDragState || !onBarDrag) return;

        const deltaX = e.clientX - currentDragState.startX;
        const deltaDays = Math.round(deltaX / pixelsPerDay);

        let newStartDate = currentDragState.originalStartDate;
        let newEndDate = currentDragState.originalEndDate;
        let newPreDays = currentDragState.originalIndirectWorkDaysPre;
        let newNetDays = currentDragState.originalNetWorkDays;
        let newPostDays = currentDragState.originalIndirectWorkDaysPost;

        let skippedDays = 0;
        let direction: 'left' | 'right' = deltaX < 0 ? 'left' : 'right';

        if (currentDragState.dragType === 'move') {
            // 드래그 방향 결정 (handleMouseUp과 동일한 로직)
            const dragDirection: 'left' | 'right' = deltaX < 0 ? 'left' : 'right';
            direction = dragDirection;

            let adjustedDeltaDays = deltaDays;
            const tentativeStart = addDays(currentDragState.originalStartDate, deltaDays);

            // 휴일이면 드래그 방향에 따라 스냅
            if (isHoliday(tentativeStart, holidays, calendarSettings)) {
                const snappedStart = snapToWorkingDay(tentativeStart, dragDirection, holidays, calendarSettings);
                adjustedDeltaDays = differenceInDays(snappedStart, currentDragState.originalStartDate);
                // 스킵된 휴일 일수 계산
                skippedDays = Math.abs(adjustedDeltaDays - deltaDays);
            }

            newStartDate = addDays(currentDragState.originalStartDate, adjustedDeltaDays);
            newEndDate = addDays(currentDragState.originalEndDate, adjustedDeltaDays);
        } else if (currentDragState.dragType === 'move-net') {
            const maxPreIncrease = currentDragState.originalIndirectWorkDaysPost;
            const maxPreDecrease = currentDragState.originalIndirectWorkDaysPre;
            const constrainedDelta = Math.max(-maxPreDecrease, Math.min(maxPreIncrease, deltaDays));

            newPreDays = currentDragState.originalIndirectWorkDaysPre + constrainedDelta;
            newPostDays = currentDragState.originalIndirectWorkDaysPost - constrainedDelta;
            newStartDate = currentDragState.originalStartDate;
            newEndDate = currentDragState.originalEndDate;
        } else if (currentDragState.dragType === 'resize-pre') {
            if (currentDragState.originalIndirectWorkDaysPre > 0) {
                newPreDays = Math.max(0, currentDragState.originalIndirectWorkDaysPre - deltaDays);
                const netWorkStartDate = addDays(currentDragState.originalStartDate, currentDragState.originalIndirectWorkDaysPre);
                newStartDate = addDays(netWorkStartDate, -newPreDays);
                newEndDate = currentDragState.originalEndDate;
            } else {
                newNetDays = Math.max(1, currentDragState.originalNetWorkDays - deltaDays);
                const netWorkEndDate = addDays(
                    currentDragState.originalStartDate,
                    currentDragState.originalNetWorkDays - 1
                );
                newStartDate = addDays(netWorkEndDate, -(newNetDays - 1));
                newEndDate = currentDragState.originalEndDate;
            }
        } else if (currentDragState.dragType === 'resize-post') {
            if (currentDragState.originalIndirectWorkDaysPost > 0) {
                newPostDays = Math.max(0, currentDragState.originalIndirectWorkDaysPost + deltaDays);
                const netWorkEndDate = addDays(currentDragState.originalEndDate, -currentDragState.originalIndirectWorkDaysPost);
                newEndDate = addDays(netWorkEndDate, newPostDays);
                newStartDate = currentDragState.originalStartDate;
            } else {
                newNetDays = Math.max(1, currentDragState.originalNetWorkDays + deltaDays);
                newEndDate = addDays(currentDragState.originalStartDate, newNetDays - 1);
                newStartDate = currentDragState.originalStartDate;
            }
        } else if (currentDragState.dragType === 'resize-pre-net') {
            const maxPreIncrease = currentDragState.originalNetWorkDays - 1;
            const maxPreDecrease = currentDragState.originalIndirectWorkDaysPre;
            const constrainedDelta = Math.max(-maxPreDecrease, Math.min(maxPreIncrease, deltaDays));

            newPreDays = currentDragState.originalIndirectWorkDaysPre + constrainedDelta;
            newNetDays = currentDragState.originalNetWorkDays - constrainedDelta;
            newStartDate = currentDragState.originalStartDate;
            newEndDate = currentDragState.originalEndDate;
        } else if (currentDragState.dragType === 'resize-net-post') {
            const maxNetIncrease = currentDragState.originalIndirectWorkDaysPost;
            const maxNetDecrease = currentDragState.originalNetWorkDays - 1;
            const constrainedDelta = Math.max(-maxNetDecrease, Math.min(maxNetIncrease, deltaDays));

            newNetDays = currentDragState.originalNetWorkDays + constrainedDelta;
            newPostDays = currentDragState.originalIndirectWorkDaysPost - constrainedDelta;
            newStartDate = currentDragState.originalStartDate;
            newEndDate = currentDragState.originalEndDate;
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

    const handleMouseUp = useCallback(() => {
        const currentDragState = dragStateRef.current;
        if (!currentDragState || !onBarDrag) {
            setDragState(null);
            dragStateRef.current = null;
            return;
        }

        const dragDirection: 'left' | 'right' = currentDragState.lastDeltaX < 0 ? 'left' : 'right';

        let finalStartDate = currentDragState.currentStartDate;
        let finalEndDate = currentDragState.currentEndDate;

        // 'move' 타입일 때만 휴일 회피 처리
        if (currentDragState.dragType === 'move') {
            if (isHoliday(finalStartDate, holidays, calendarSettings)) {
                const snappedStart = snapToWorkingDay(finalStartDate, dragDirection, holidays, calendarSettings);
                const daysDiff = differenceInDays(snappedStart, finalStartDate);
                finalStartDate = snappedStart;
                finalEndDate = addDays(finalEndDate, daysDiff);
            }
        }

        const hasDateChange =
            finalStartDate.getTime() !== currentDragState.originalStartDate.getTime() ||
            finalEndDate.getTime() !== currentDragState.originalEndDate.getTime();
        const hasDaysChange =
            currentDragState.currentIndirectWorkDaysPre !== currentDragState.originalIndirectWorkDaysPre ||
            currentDragState.currentNetWorkDays !== currentDragState.originalNetWorkDays ||
            currentDragState.currentIndirectWorkDaysPost !== currentDragState.originalIndirectWorkDaysPost;

        if (hasDateChange || hasDaysChange) {
            onBarDrag({
                taskId: currentDragState.taskId,
                dragType: currentDragState.dragType,
                newStartDate: finalStartDate,
                newEndDate: finalEndDate,
                newIndirectWorkDaysPre: currentDragState.currentIndirectWorkDaysPre,
                newIndirectWorkDaysPost: currentDragState.currentIndirectWorkDaysPost,
                newNetWorkDays: currentDragState.currentNetWorkDays,
            });
        }

        setDragState(null);
        dragStateRef.current = null;

        // 드래그 완료 후 포커스 해제
        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }
    }, [onBarDrag, holidays, calendarSettings]);

    // 전역 마우스 이벤트 리스너
    useEffect(() => {
        if (dragState) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);

            let cursor = 'ew-resize';
            if (dragState.dragType === 'move' || dragState.dragType === 'move-net') {
                cursor = 'grabbing';
            } else if (dragState.dragType === 'resize-pre-net' || dragState.dragType === 'resize-net-post') {
                cursor = 'col-resize';
            }
            document.body.style.cursor = cursor;
            document.body.style.userSelect = 'none';

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('mouseup', handleMouseUp);
                document.body.style.cursor = '';
                document.body.style.userSelect = '';
            };
        }
    }, [dragState, handleMouseMove, handleMouseUp]);

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
        handleBarMouseDown,
        getDragInfo,
    };
};
