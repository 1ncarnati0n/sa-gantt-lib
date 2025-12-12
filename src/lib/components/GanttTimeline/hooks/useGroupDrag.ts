'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { addDays, differenceInDays } from 'date-fns';
import { isHoliday } from '../../../utils/dateUtils';
import { collectDescendantTasks } from '../../../utils/groupUtils';
import type { ConstructionTask, CalendarSettings, GroupDragResult } from '../../../types';

/** 그룹 드래그 내부 상태 */
interface GroupDragState {
    groupId: string;
    startX: number;
    originalStartDate: Date;
    originalEndDate: Date;
    affectedTasks: ConstructionTask[];
    currentDeltaDays: number;
    lastDeltaX: number;
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

interface UseGroupDragOptions {
    pixelsPerDay: number;
    holidays: Date[];
    calendarSettings: CalendarSettings;
    allTasks: ConstructionTask[];
    onGroupDrag?: (result: GroupDragResult) => void;
}

export const useGroupDrag = ({
    pixelsPerDay,
    holidays,
    calendarSettings,
    allTasks,
    onGroupDrag,
}: UseGroupDragOptions) => {
    const [groupDragState, setGroupDragState] = useState<GroupDragState | null>(null);
    const groupDragStateRef = useRef<GroupDragState | null>(null);

    useEffect(() => {
        groupDragStateRef.current = groupDragState;
    }, [groupDragState]);

    const handleGroupBarMouseDown = useCallback((
        e: React.MouseEvent,
        groupId: string,
        taskData: {
            startDate: Date;
            endDate: Date;
            affectedTaskIds: string[];
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

        setGroupDragState(newState);
        groupDragStateRef.current = newState;
    }, [onGroupDrag, allTasks]);

    const handleGroupMouseMove = useCallback((e: MouseEvent) => {
        const state = groupDragStateRef.current;
        if (!state || !onGroupDrag) return;

        const deltaX = e.clientX - state.startX;
        const deltaDays = Math.round(deltaX / pixelsPerDay);

        // 드래그 방향 결정
        const dragDirection: 'left' | 'right' = deltaX < 0 ? 'left' : 'right';

        let adjustedDeltaDays = deltaDays;
        const tentativeStart = addDays(state.originalStartDate, deltaDays);

        // 휴일이면 드래그 방향에 따라 스냅
        if (isHoliday(tentativeStart, holidays, calendarSettings)) {
            const snappedStart = snapToWorkingDay(tentativeStart, dragDirection, holidays, calendarSettings);
            adjustedDeltaDays = differenceInDays(snappedStart, state.originalStartDate);
        }

        setGroupDragState(prev => prev ? {
            ...prev,
            currentDeltaDays: adjustedDeltaDays,
            lastDeltaX: deltaX,
        } : null);
    }, [onGroupDrag, pixelsPerDay, holidays, calendarSettings]);

    const handleGroupMouseUp = useCallback(() => {
        const state = groupDragStateRef.current;
        if (!state || !onGroupDrag) {
            setGroupDragState(null);
            groupDragStateRef.current = null;
            return;
        }

        if (state.currentDeltaDays !== 0) {
            const dragDirection: 'left' | 'right' = state.lastDeltaX < 0 ? 'left' : 'right';
            const newGroupStartDate = addDays(state.originalStartDate, state.currentDeltaDays);

            let finalDeltaDays = state.currentDeltaDays;
            if (isHoliday(newGroupStartDate, holidays, calendarSettings)) {
                const snappedStart = snapToWorkingDay(newGroupStartDate, dragDirection, holidays, calendarSettings);
                const adjustment = differenceInDays(snappedStart, newGroupStartDate);
                finalDeltaDays = state.currentDeltaDays + adjustment;
            }

            onGroupDrag({
                groupId: state.groupId,
                deltaDays: finalDeltaDays,
                affectedTaskIds: state.affectedTasks.map(t => t.id),
            });
        }

        setGroupDragState(null);
        groupDragStateRef.current = null;
    }, [onGroupDrag, holidays, calendarSettings]);

    // 그룹 드래그 이벤트 리스너 등록
    useEffect(() => {
        if (groupDragState) {
            window.addEventListener('mousemove', handleGroupMouseMove);
            window.addEventListener('mouseup', handleGroupMouseUp);
            document.body.style.cursor = 'grabbing';

            return () => {
                window.removeEventListener('mousemove', handleGroupMouseMove);
                window.removeEventListener('mouseup', handleGroupMouseUp);
                document.body.style.cursor = '';
            };
        }
    }, [groupDragState, handleGroupMouseMove, handleGroupMouseUp]);

    const getGroupDragDeltaDays = useCallback((groupId: string): number => {
        if (groupDragState && groupDragState.groupId === groupId) {
            return groupDragState.currentDeltaDays;
        }
        return 0;
    }, [groupDragState]);

    const getTaskGroupDragDeltaDays = useCallback((taskId: string): number => {
        if (!groupDragState) return 0;
        const isAffected = groupDragState.affectedTasks.some(t => t.id === taskId);
        return isAffected ? groupDragState.currentDeltaDays : 0;
    }, [groupDragState]);

    return {
        isDragging: !!groupDragState,
        handleGroupBarMouseDown,
        getGroupDragDeltaDays,
        getTaskGroupDragDeltaDays,
    };
};
