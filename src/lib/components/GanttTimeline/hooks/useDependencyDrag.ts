'use client';

import { useCallback, useMemo } from 'react';
import {
    buildDependencyGraph,
    collectConnectedTaskGroup,
    hasAnyDependency,
} from '../../../utils/dependencyGraph';
import {
    calculateDragDirection,
    calculateDeltaDays,
    calculateHolidaySnap,
    applyFinalHolidaySnap,
} from './dragUtils';
import { useDragState, updateDragState } from './useDragState';
import type {
    ConstructionTask,
    AnchorDependency,
    AnchorDependencyDragResult,
    CalendarSettings,
} from '../../../types';
import type { DependencyDragState, BaseDragOptions } from '../types';

// ============================================
// Hook Options
// ============================================

interface UseDependencyDragOptions extends BaseDragOptions {
    holidays: Date[];
    calendarSettings: CalendarSettings;
    allTasks: ConstructionTask[];
    dependencies: AnchorDependency[];
    onDependencyDrag?: (result: AnchorDependencyDragResult) => void;
}

// ============================================
// useDependencyDrag Hook (리팩토링됨)
// ============================================
// UX 개선: 드래그 중에는 모든 연결된 task가 동일한 deltaDays로 이동
// 드래그 완료 시에만 최종 위치 계산

export const useDependencyDrag = ({
    pixelsPerDay,
    holidays,
    calendarSettings,
    allTasks,
    dependencies,
    onDependencyDrag,
}: UseDependencyDragOptions) => {
    // 종속성 그래프 메모이제이션
    const dependencyGraph = useMemo(
        () => buildDependencyGraph(allTasks, dependencies),
        [allTasks, dependencies]
    );

    // 태스크가 종속성을 가지고 있는지 확인
    const taskHasDependency = useCallback(
        (taskId: string): boolean => hasAnyDependency(taskId, dependencies),
        [dependencies]
    );

    // ========================================
    // 공통 드래그 상태 관리 훅 사용
    // ========================================
    const { state: dragState, start, isDragging } = useDragState<DependencyDragState>({
        // 드래그 중 처리
        onMove: (e, state, setState) => {
            if (!onDependencyDrag) return;

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

            // UX 개선: 모든 task가 동일한 deltaDays로 이동
            // taskDeltaMap 계산 제거 → 자연스러운 그룹 이동
            updateDragState(setState, {
                currentDeltaDays: adjustedDeltaDays,
                lastDeltaX: deltaX,
            });
        },
        // 드래그 완료 처리
        onEnd: (state) => {
            if (!onDependencyDrag || state.currentDeltaDays === 0) return;

            const direction = calculateDragDirection(state.lastDeltaX);

            // 최종 휴일 스냅 적용 (공통 유틸 사용)
            const { adjustment } = applyFinalHolidaySnap(
                new Date(state.originalStartDate.getTime() + state.currentDeltaDays * 86400000),
                direction,
                holidays,
                calendarSettings
            );
            const finalDeltaDays = state.currentDeltaDays + adjustment;

            onDependencyDrag({
                sourceTaskId: state.sourceTaskId,
                deltaDays: finalDeltaDays,
                affectedTaskIds: state.connectedTaskIds,
            });
        },
        cursor: 'grabbing',
    });

    // ========================================
    // 드래그 시작
    // ========================================
    const handleMouseDown = useCallback(
        (
            e: React.MouseEvent,
            taskId: string,
            taskData: { startDate: Date; endDate: Date }
        ): boolean => {
            if (!onDependencyDrag) return false;

            // 종속성이 없으면 처리하지 않음
            if (!taskHasDependency(taskId)) return false;

            e.preventDefault();
            e.stopPropagation();

            // 양방향으로 연결된 모든 태스크 수집
            const connectedTaskIds = collectConnectedTaskGroup(taskId, dependencyGraph);
            const connectedTasks = allTasks.filter((t) => connectedTaskIds.includes(t.id));

            start({
                sourceTaskId: taskId,
                startX: e.clientX,
                originalStartDate: taskData.startDate,
                connectedTaskIds,
                connectedTasks,
                currentDeltaDays: 0,
                lastDeltaX: 0,
                taskDeltaMap: new Map(), // 하위 호환성을 위해 유지
            });

            return true;
        },
        [onDependencyDrag, taskHasDependency, dependencyGraph, allTasks, start]
    );

    // ========================================
    // 드래그 정보 조회
    // ========================================
    const isDraggingTask = useCallback(
        (taskId: string): boolean => {
            if (!dragState) return false;
            return dragState.connectedTaskIds.includes(taskId);
        },
        [dragState]
    );

    // UX 개선: 모든 연결된 task에 동일한 deltaDays 반환
    const getTaskDeltaDays = useCallback(
        (taskId: string): number => {
            if (!dragState || !dragState.connectedTaskIds.includes(taskId)) return 0;
            // 기존: taskDeltaMap.get(taskId) ?? currentDeltaDays
            // 개선: 항상 currentDeltaDays (모든 task 동일 속도 이동)
            return dragState.currentDeltaDays;
        },
        [dragState]
    );

    const getConnectedTaskIds = useCallback((): string[] => {
        if (!dragState) return [];
        return dragState.connectedTaskIds;
    }, [dragState]);

    return {
        isDragging,
        taskHasDependency,
        handleDependencyBarMouseDown: handleMouseDown,
        isDraggingTask,
        getTaskDeltaDays,
        getConnectedTaskIds,
    };
};
