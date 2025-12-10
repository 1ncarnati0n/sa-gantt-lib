'use client';

import { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { addDays, differenceInDays } from 'date-fns';
import { isHoliday } from '../../../utils/dateUtils';
import {
    buildDependencyGraph,
    collectConnectedTaskGroup,
    hasAnyDependency,
} from '../../../utils/dependencyGraph';
import type {
    ConstructionTask,
    AnchorDependency,
    AnchorDependencyDragResult,
    CalendarSettings,
} from '../../../types';

/** 드래그 내부 상태 */
interface DependencyDragState {
    sourceTaskId: string;
    startX: number;
    originalStartDate: Date;
    connectedTaskIds: string[];
    connectedTasks: ConstructionTask[];
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

interface UseDependencyDragOptions {
    pixelsPerDay: number;
    holidays: Date[];
    calendarSettings: CalendarSettings;
    allTasks: ConstructionTask[];
    dependencies: AnchorDependency[];
    onDependencyDrag?: (result: AnchorDependencyDragResult) => void;
}

/**
 * 종속성 드래그 훅
 * - 종속성이 있는 태스크를 드래그하면 연결된 모든 태스크가 함께 이동
 * - useGroupDrag 패턴 기반
 */
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

    // ref 동기화
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
        (taskId: string): boolean => {
            return hasAnyDependency(taskId, dependencies);
        },
        [dependencies]
    );

    // 드래그 시작 핸들러
    const handleDependencyBarMouseDown = useCallback(
        (
            e: React.MouseEvent,
            taskId: string,
            taskData: {
                startDate: Date;
                endDate: Date;
            }
        ) => {
            if (!onDependencyDrag) return;

            // 종속성이 없으면 일반 드래그로 처리 (이 훅에서는 처리하지 않음)
            if (!taskHasDependency(taskId)) {
                return false; // 처리하지 않음을 표시
            }

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
            };

            setDragState(newState);
            dragStateRef.current = newState;

            return true; // 처리됨을 표시
        },
        [onDependencyDrag, taskHasDependency, dependencyGraph, allTasks]
    );

    // 마우스 이동 핸들러
    const handleMouseMove = useCallback(
        (e: MouseEvent) => {
            const state = dragStateRef.current;
            if (!state || !onDependencyDrag) return;

            const deltaX = e.clientX - state.startX;
            const deltaDays = Math.round(deltaX / pixelsPerDay);

            setDragState((prev) =>
                prev
                    ? {
                          ...prev,
                          currentDeltaDays: deltaDays,
                          lastDeltaX: deltaX,
                      }
                    : null
            );
        },
        [onDependencyDrag, pixelsPerDay]
    );

    // 마우스 업 핸들러
    const handleMouseUp = useCallback(() => {
        const state = dragStateRef.current;
        if (!state || !onDependencyDrag) {
            setDragState(null);
            dragStateRef.current = null;
            return;
        }

        if (state.currentDeltaDays !== 0) {
            const dragDirection: 'left' | 'right' = state.lastDeltaX < 0 ? 'left' : 'right';

            // 기준 태스크의 새 시작일 계산
            const newStartDate = addDays(state.originalStartDate, state.currentDeltaDays);

            let finalDeltaDays = state.currentDeltaDays;

            // 휴일에 걸리면 가장 가까운 작업일로 스냅
            if (isHoliday(newStartDate, holidays, calendarSettings)) {
                const snappedStart = snapToWorkingDay(
                    newStartDate,
                    dragDirection,
                    holidays,
                    calendarSettings
                );
                const adjustment = differenceInDays(snappedStart, newStartDate);
                finalDeltaDays = state.currentDeltaDays + adjustment;
            }

            // 결과 콜백 호출
            onDependencyDrag({
                sourceTaskId: state.sourceTaskId,
                deltaDays: finalDeltaDays,
                affectedTaskIds: state.connectedTaskIds,
            });
        }

        setDragState(null);
        dragStateRef.current = null;
    }, [onDependencyDrag, holidays, calendarSettings]);

    // 이벤트 리스너 등록
    useEffect(() => {
        if (dragState) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
            document.body.style.cursor = 'grabbing';

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('mouseup', handleMouseUp);
                document.body.style.cursor = '';
            };
        }
    }, [dragState, handleMouseMove, handleMouseUp]);

    // 특정 태스크가 드래그 중인지 확인
    const isDraggingTask = useCallback(
        (taskId: string): boolean => {
            if (!dragState) return false;
            return dragState.connectedTaskIds.includes(taskId);
        },
        [dragState]
    );

    // 특정 태스크의 드래그 델타 일수 가져오기
    const getTaskDeltaDays = useCallback(
        (taskId: string): number => {
            if (!dragState) return 0;
            if (!dragState.connectedTaskIds.includes(taskId)) return 0;
            return dragState.currentDeltaDays;
        },
        [dragState]
    );

    // 연결된 태스크 ID 목록 가져오기 (드래그 중일 때)
    const getConnectedTaskIds = useCallback((): string[] => {
        if (!dragState) return [];
        return dragState.connectedTaskIds;
    }, [dragState]);

    return {
        isDragging: !!dragState,
        taskHasDependency,
        handleDependencyBarMouseDown,
        isDraggingTask,
        getTaskDeltaDays,
        getConnectedTaskIds,
    };
};
