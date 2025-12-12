'use client';

import { useCallback } from 'react';
import { addDays } from 'date-fns';
import { collectDescendantTasks } from '../../../utils/groupUtils';
import {
    calculateDragDirection,
    calculateDeltaDays,
    calculateHolidaySnap,
    applyFinalHolidaySnap,
} from './dragUtils';
import { useDragState, updateDragState } from './useDragState';
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
// useGroupDrag Hook (리팩토링됨)
// ============================================

export const useGroupDrag = ({
    pixelsPerDay,
    holidays,
    calendarSettings,
    allTasks,
    onGroupDrag,
}: UseGroupDragOptions) => {
    // ========================================
    // 공통 드래그 상태 관리 훅 사용
    // ========================================
    const { state: dragState, start, isDragging } = useDragState<GroupDragState>({
        // 드래그 중 처리
        onMove: (e, state, setState) => {
            if (!onGroupDrag) return;

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

            // 상태 업데이트
            updateDragState(setState, {
                currentDeltaDays: adjustedDeltaDays,
                lastDeltaX: deltaX,
            });
        },
        // 드래그 완료 처리
        onEnd: (state) => {
            if (!onGroupDrag || state.currentDeltaDays === 0) return;

            const direction = calculateDragDirection(state.lastDeltaX);
            const newGroupStartDate = addDays(state.originalStartDate, state.currentDeltaDays);

            // 최종 휴일 스냅 적용
            const { adjustment } = applyFinalHolidaySnap(
                newGroupStartDate,
                direction,
                holidays,
                calendarSettings
            );
            const finalDeltaDays = state.currentDeltaDays + adjustment;

            // 버그 수정: taskUpdates 배열로 각 task의 새 날짜 정보도 전달
            onGroupDrag({
                groupId: state.groupId,
                deltaDays: finalDeltaDays,
                affectedTaskIds: state.affectedTasks.map(t => t.id),
                taskUpdates: state.affectedTasks.map(t => ({
                    taskId: t.id,
                    newStartDate: addDays(t.startDate, finalDeltaDays),
                })),
            });
        },
        cursor: 'grabbing',
    });

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

        start({
            groupId,
            startX: e.clientX,
            originalStartDate: taskData.startDate,
            originalEndDate: taskData.endDate,
            affectedTasks,
            currentDeltaDays: 0,
            lastDeltaX: 0,
        });
    }, [onGroupDrag, allTasks, start]);

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
        isDragging,
        handleGroupBarMouseDown: handleMouseDown,
        getGroupDragDeltaDays: getDragInfo,
        getTaskGroupDragDeltaDays: getTaskDragDeltaDays,
    };
};
