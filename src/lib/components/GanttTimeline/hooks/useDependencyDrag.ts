'use client';

import { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { addDays, differenceInDays } from 'date-fns';
import { isHoliday, snapToWorkingDay } from '../../../utils/dateUtils';
import {
    buildDependencyGraph,
    collectConnectedTaskGroup,
    hasAnyDependency,
    calculateChainedDeltaDays,
} from '../../../utils/dependencyGraph';
import {
    calculateDragDirection,
    calculateDeltaDays,
    calculateHolidaySnap,
    setupDragListeners,
} from './dragUtils';
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
// useDependencyDrag Hook
// ============================================

export const useDependencyDrag = ({
    pixelsPerDay,
    holidays,
    calendarSettings,
    allTasks,
    dependencies,
    onDependencyDrag,
}: UseDependencyDragOptions) => {
    const [dragState, setDragState] = useState<DependencyDragState | null>(null);
    const dragStateRef = useRef<DependencyDragState | null>(null);

    // State-Ref 동기화
    useEffect(() => {
        dragStateRef.current = dragState;
    }, [dragState]);

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

            const newState: DependencyDragState = {
                sourceTaskId: taskId,
                startX: e.clientX,
                originalStartDate: taskData.startDate,
                connectedTaskIds,
                connectedTasks,
                currentDeltaDays: 0,
                lastDeltaX: 0,
                taskDeltaMap: new Map(),
            };

            setDragState(newState);
            dragStateRef.current = newState;
            return true;
        },
        [onDependencyDrag, taskHasDependency, dependencyGraph, allTasks]
    );

    // ========================================
    // 드래그 중
    // ========================================
    const handleMouseMove = useCallback(
        (e: MouseEvent) => {
            const state = dragStateRef.current;
            if (!state || !onDependencyDrag) return;

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

            // 겹침 방지를 위한 task별 개별 deltaDays 계산
            const taskDeltaMap = calculateChainedDeltaDays(
                state.sourceTaskId,
                adjustedDeltaDays,
                state.connectedTaskIds,
                dependencyGraph,
                allTasks
            );

            setDragState((prev) =>
                prev
                    ? {
                          ...prev,
                          currentDeltaDays: adjustedDeltaDays,
                          lastDeltaX: deltaX,
                          taskDeltaMap,
                      }
                    : null
            );
        },
        [onDependencyDrag, pixelsPerDay, dependencyGraph, allTasks, holidays, calendarSettings]
    );

    // ========================================
    // 드래그 완료
    // ========================================
    const handleMouseUp = useCallback(() => {
        const state = dragStateRef.current;
        if (!state || !onDependencyDrag) {
            setDragState(null);
            dragStateRef.current = null;
            return;
        }

        if (state.currentDeltaDays !== 0) {
            const direction = calculateDragDirection(state.lastDeltaX);
            const newStartDate = addDays(state.originalStartDate, state.currentDeltaDays);

            let finalDeltaDays = state.currentDeltaDays;
            if (isHoliday(newStartDate, holidays, calendarSettings)) {
                const snappedStart = snapToWorkingDay(newStartDate, direction, holidays, calendarSettings);
                const adjustment = differenceInDays(snappedStart, newStartDate);
                finalDeltaDays = state.currentDeltaDays + adjustment;
            }

            onDependencyDrag({
                sourceTaskId: state.sourceTaskId,
                deltaDays: finalDeltaDays,
                affectedTaskIds: state.connectedTaskIds,
            });
        }

        setDragState(null);
        dragStateRef.current = null;
    }, [onDependencyDrag, holidays, calendarSettings]);

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
    const isDraggingTask = useCallback(
        (taskId: string): boolean => {
            if (!dragState) return false;
            return dragState.connectedTaskIds.includes(taskId);
        },
        [dragState]
    );

    const getTaskDeltaDays = useCallback(
        (taskId: string): number => {
            if (!dragState || !dragState.connectedTaskIds.includes(taskId)) return 0;
            return dragState.taskDeltaMap.get(taskId) ?? dragState.currentDeltaDays;
        },
        [dragState]
    );

    const getConnectedTaskIds = useCallback((): string[] => {
        if (!dragState) return [];
        return dragState.connectedTaskIds;
    }, [dragState]);

    return {
        isDragging: !!dragState,
        taskHasDependency,
        handleDependencyBarMouseDown: handleMouseDown,
        isDraggingTask,
        getTaskDeltaDays,
        getConnectedTaskIds,
    };
};
