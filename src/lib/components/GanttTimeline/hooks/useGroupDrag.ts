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
        // 개별 휴일 스냅: 드래그 중에는 순수 deltaDays만 추적
        // (각 태스크별 휴일 스냅은 드래그 완료 시점에 개별 적용)
        onMove: (e, state, setState) => {
            if (!onGroupDrag) return;

            const deltaX = e.clientX - state.startX;
            const deltaDays = calculateDeltaDays(deltaX, pixelsPerDay);

            // 상태 업데이트 - 휴일 스냅 없이 순수 deltaDays
            updateDragState(setState, {
                currentDeltaDays: deltaDays,
                lastDeltaX: deltaX,
            });
        },
        // 드래그 완료 처리
        // 개별 휴일 스냅: 각 태스크별로 개별 휴일 스냅 적용
        onEnd: (state) => {
            if (!onGroupDrag || state.currentDeltaDays === 0) return;

            const direction = calculateDragDirection(state.lastDeltaX);

            // 각 태스크별 개별 휴일 스냅 적용
            const taskUpdates = state.affectedTasks.map(task => {
                const tentativeDate = addDays(task.startDate, state.currentDeltaDays);
                const { adjustedDate } = applyFinalHolidaySnap(
                    tentativeDate,
                    direction,
                    holidays,
                    calendarSettings
                );
                return {
                    taskId: task.id,
                    newStartDate: adjustedDate,
                };
            });

            onGroupDrag({
                groupId: state.groupId,
                deltaDays: state.currentDeltaDays, // 기본 이동량 (참고용)
                affectedTaskIds: state.affectedTasks.map(t => t.id),
                taskUpdates,
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

    // 개별 휴일 스냅: 드래그 중에도 각 태스크별 개별 휴일 스냅 적용
    const getTaskDragDeltaDays = useCallback((taskId: string): number => {
        if (!dragState) return 0;

        const task = dragState.affectedTasks.find(t => t.id === taskId);
        if (!task) return 0;

        // 각 태스크의 시작일 기준으로 개별 휴일 스냅 계산
        const direction = calculateDragDirection(dragState.lastDeltaX);
        const { adjustedDeltaDays } = calculateHolidaySnap(
            task.startDate,
            dragState.currentDeltaDays,
            direction,
            holidays,
            calendarSettings
        );

        return adjustedDeltaDays;
    }, [dragState, holidays, calendarSettings]);

    return {
        isDragging,
        handleGroupBarMouseDown: handleMouseDown,
        getGroupDragDeltaDays: getDragInfo,
        getTaskGroupDragDeltaDays: getTaskDragDeltaDays,
    };
};
