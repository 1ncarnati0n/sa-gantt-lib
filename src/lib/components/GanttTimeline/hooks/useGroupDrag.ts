'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { addDays, differenceInDays } from 'date-fns';
import { isHoliday, snapToWorkingDay } from '../../../utils/dateUtils';
import { collectDescendantTasks } from '../../../utils/groupUtils';
import {
    calculateDragDirection,
    calculateDeltaDays,
    calculateHolidaySnap,
    setupDragListeners,
} from './dragUtils';
import type { ConstructionTask, CalendarSettings, GroupDragResult } from '../../../types';
import type { GroupDragState, BaseDragOptions } from '../types';

// ============================================
// Hook Options
// ============================================

interface UseGroupDragOptions extends BaseDragOptions {
    holidays: Date[];
    calendarSettings: CalendarSettings;
    allTasks: ConstructionTask[];
    onGroupDrag?: (result: GroupDragResult) => void;
}

// ============================================
// useGroupDrag Hook
// ============================================

export const useGroupDrag = ({
    pixelsPerDay,
    holidays,
    calendarSettings,
    allTasks,
    onGroupDrag,
}: UseGroupDragOptions) => {
    const [dragState, setDragState] = useState<GroupDragState | null>(null);
    const dragStateRef = useRef<GroupDragState | null>(null);

    // State-Ref 동기화
    useEffect(() => {
        dragStateRef.current = dragState;
    }, [dragState]);

    // ========================================
    // 드래그 시작
    // ========================================
    const handleMouseDown = useCallback((
        e: React.MouseEvent,
        groupId: string,
        taskData: {
            startDate: Date;
            endDate: Date;
        }
    ) => {
        if (!onGroupDrag) return;
        e.preventDefault();
        e.stopPropagation();

        const affectedTasks = collectDescendantTasks(groupId, allTasks);

        const newState: GroupDragState = {
            groupId,
            startX: e.clientX,
            originalStartDate: taskData.startDate,
            originalEndDate: taskData.endDate,
            affectedTasks,
            currentDeltaDays: 0,
            lastDeltaX: 0,
        };

        setDragState(newState);
        dragStateRef.current = newState;
    }, [onGroupDrag, allTasks]);

    // ========================================
    // 드래그 중
    // ========================================
    const handleMouseMove = useCallback((e: MouseEvent) => {
        const state = dragStateRef.current;
        if (!state || !onGroupDrag) return;

        const deltaX = e.clientX - state.startX;
        const deltaDays = calculateDeltaDays(deltaX, pixelsPerDay);
        const direction = calculateDragDirection(deltaX);

        const { adjustedDeltaDays } = calculateHolidaySnap(
            state.originalStartDate,
            deltaDays,
            direction,
            holidays,
            calendarSettings
        );

        setDragState(prev => prev ? {
            ...prev,
            currentDeltaDays: adjustedDeltaDays,
            lastDeltaX: deltaX,
        } : null);
    }, [onGroupDrag, pixelsPerDay, holidays, calendarSettings]);

    // ========================================
    // 드래그 완료
    // ========================================
    const handleMouseUp = useCallback(() => {
        const state = dragStateRef.current;
        if (!state || !onGroupDrag) {
            setDragState(null);
            dragStateRef.current = null;
            return;
        }

        if (state.currentDeltaDays !== 0) {
            const direction = calculateDragDirection(state.lastDeltaX);
            const newGroupStartDate = addDays(state.originalStartDate, state.currentDeltaDays);

            let finalDeltaDays = state.currentDeltaDays;
            if (isHoliday(newGroupStartDate, holidays, calendarSettings)) {
                const snappedStart = snapToWorkingDay(newGroupStartDate, direction, holidays, calendarSettings);
                const adjustment = differenceInDays(snappedStart, newGroupStartDate);
                finalDeltaDays = state.currentDeltaDays + adjustment;
            }

            onGroupDrag({
                groupId: state.groupId,
                deltaDays: finalDeltaDays,
                affectedTaskIds: state.affectedTasks.map(t => t.id),
            });
        }

        setDragState(null);
        dragStateRef.current = null;
    }, [onGroupDrag, holidays, calendarSettings]);

    // ========================================
    // 이벤트 리스너 관리
    // ========================================
    useEffect(() => {
        if (dragState) {
            return setupDragListeners(handleMouseMove, handleMouseUp, 'grabbing');
        }
    }, [dragState, handleMouseMove, handleMouseUp]);

    // ========================================
    // 드래그 정보 조회
    // ========================================
    const getDragInfo = useCallback((groupId: string): number => {
        if (dragState && dragState.groupId === groupId) {
            return dragState.currentDeltaDays;
        }
        return 0;
    }, [dragState]);

    const getTaskDragDeltaDays = useCallback((taskId: string): number => {
        if (!dragState) return 0;
        const isAffected = dragState.affectedTasks.some(t => t.id === taskId);
        return isAffected ? dragState.currentDeltaDays : 0;
    }, [dragState]);

    return {
        isDragging: !!dragState,
        handleGroupBarMouseDown: handleMouseDown,
        getGroupDragDeltaDays: getDragInfo,
        getTaskGroupDragDeltaDays: getTaskDragDeltaDays,
    };
};
