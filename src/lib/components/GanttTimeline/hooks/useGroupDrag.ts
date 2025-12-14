'use client';

import { useCallback } from 'react';
import { addDays } from 'date-fns';
import { collectDescendantTasks } from '../../../utils/groupUtils';
import { calculateDeltaDays } from './dragUtils';
import { useDragState, updateDragState } from './useDragState';
import type { ConstructionTask, GroupDragResult } from '../../../types';

// ============================================
// Hook Options
// ============================================

interface UseGroupDragOptions {
    pixelsPerDay: number;
    allTasks: ConstructionTask[];
    onGroupDrag?: (result: GroupDragResult) => void;
}

// ============================================
// 단순화된 그룹 드래그 상태
// ============================================

interface SimpleGroupDragState {
    groupId: string;
    startX: number;
    originalStartDate: Date;
    originalEndDate: Date;
    affectedTasks: ConstructionTask[];
    currentDeltaDays: number;
}

// ============================================
// useGroupDrag Hook (D-2: 완전 투과 방식)
// ============================================
// 핵심 원리:
// 1. 모든 task에 동일한 deltaDays 적용
// 2. 휴일 스냅 없음 - 휴일에 착지해도 그대로
// 3. 휴일 착지는 UI에서 빗금으로 표시

export const useGroupDrag = ({
    pixelsPerDay,
    allTasks,
    onGroupDrag,
}: UseGroupDragOptions) => {
    // ========================================
    // 드래그 상태 관리
    // ========================================
    const { state: dragState, start, isDragging } = useDragState<SimpleGroupDragState>({
        // 드래그 중: 단순히 deltaDays만 계산
        onMove: (e, state, setState) => {
            if (!onGroupDrag) return;

            const deltaX = e.clientX - state.startX;
            const deltaDays = calculateDeltaDays(deltaX, pixelsPerDay);

            updateDragState(setState, {
                currentDeltaDays: deltaDays,
            });
        },
        // 드래그 완료: 모든 task에 동일한 deltaDays 적용
        onEnd: (state) => {
            if (!onGroupDrag || state.currentDeltaDays === 0) return;

            // 모든 task에 동일한 deltaDays 적용 (휴일 스냅 없음!)
            const taskUpdates = state.affectedTasks.map(task => ({
                taskId: task.id,
                newStartDate: addDays(task.startDate, state.currentDeltaDays),
            }));

            onGroupDrag({
                groupId: state.groupId,
                deltaDays: state.currentDeltaDays,
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

    // 모든 task에 동일한 deltaDays 반환 (휴일 스냅 없음)
    const getTaskDragDeltaDays = useCallback((taskId: string): number => {
        if (!dragState) return 0;

        const task = dragState.affectedTasks.find(t => t.id === taskId);
        if (!task) return 0;

        // 핵심: 모든 task에 동일한 deltaDays
        return dragState.currentDeltaDays;
    }, [dragState]);

    return {
        isDragging,
        handleGroupBarMouseDown: handleMouseDown,
        getGroupDragDeltaDays: getDragInfo,
        getTaskGroupDragDeltaDays: getTaskDragDeltaDays,
    };
};
