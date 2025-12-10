'use client';

import React, { useMemo } from 'react';
import { differenceInDays } from 'date-fns';
import { GANTT_LAYOUT } from '../../types';
import type { ConstructionTask, AnchorDependency, CalendarSettings } from '../../types';
import { workingDayToCalendarOffset } from './AnchorPoints';

const ANCHOR_RADIUS = 1.5;

interface DependencyLinesProps {
    tasks: ConstructionTask[];
    dependencies: AnchorDependency[];
    minDate: Date;
    pixelsPerDay: number;
    selectedDepId?: string | null;
    hoveredDepId?: string | null;
    onDependencyClick?: (depId: string) => void;
    onDependencyHover?: (depId: string | null) => void;
    holidays?: Date[];
    calendarSettings?: CalendarSettings;
}

interface DependencyPathInfo {
    id: string;
    path: string;
    sourceX: number;
    sourceY: number;
    targetX: number;
    targetY: number;
}

/**
 * 앵커 좌표 계산 (작업일 기준 dayIndex → 달력일 변환)
 */
const getAnchorCoords = (
    task: ConstructionTask,
    workingDayIndex: number,
    rowIndex: number,
    minDate: Date,
    pixelsPerDay: number,
    holidays: Date[] = [],
    calendarSettings?: CalendarSettings
): { x: number; y: number } => {
    const startOffset = differenceInDays(task.startDate, minDate);
    const calendarOffset = workingDayToCalendarOffset(task, workingDayIndex, holidays, calendarSettings);
    const x = (startOffset + calendarOffset) * pixelsPerDay;

    const y =
        GANTT_LAYOUT.MILESTONE_LANE_HEIGHT +
        rowIndex * GANTT_LAYOUT.ROW_HEIGHT +
        (GANTT_LAYOUT.ROW_HEIGHT - GANTT_LAYOUT.BAR_HEIGHT) / 2 +
        GANTT_LAYOUT.BAR_HEIGHT;

    return { x, y };
};

/**
 * 종속성 경로 생성 (수직 → 수평 → 수직 직각 경로)
 */
const createDependencyPath = (
    sourceX: number,
    sourceY: number,
    targetX: number,
    targetY: number
): string => {
    const startY = sourceY + ANCHOR_RADIUS;
    const endY = targetY - ANCHOR_RADIUS;
    const verticalDiff = targetY - sourceY;

    if (Math.abs(verticalDiff) < 5) {
        // 같은 행 - 수평선
        const endX = targetX - ANCHOR_RADIUS;
        return `M ${sourceX} ${startY} L ${endX} ${sourceY}`;
    } else if (verticalDiff > 0) {
        // 아래로 가는 경우
        const midY = startY + (endY - startY) / 2;
        return `M ${sourceX} ${startY} V ${midY} H ${targetX} V ${endY}`;
    } else {
        // 위로 가는 경우
        const dropDown = 10;
        const midX = Math.min(sourceX, targetX) - 15;
        return `M ${sourceX} ${startY} V ${startY + dropDown} H ${midX} V ${endY - dropDown} H ${targetX} V ${endY}`;
    }
};

/**
 * 종속성 선 렌더링 컴포넌트
 */
export const DependencyLines: React.FC<DependencyLinesProps> = ({
    tasks,
    dependencies,
    minDate,
    pixelsPerDay,
    selectedDepId,
    hoveredDepId,
    onDependencyClick,
    onDependencyHover,
    holidays,
    calendarSettings,
}) => {
    // 태스크 ID → 인덱스 맵
    const taskIndexMap = useMemo(() => {
        const map = new Map<string, number>();
        tasks.forEach((task, index) => {
            map.set(task.id, index);
        });
        return map;
    }, [tasks]);

    // 태스크 ID → 태스크 맵
    const taskMap = useMemo(() => {
        const map = new Map<string, ConstructionTask>();
        tasks.forEach((task) => {
            map.set(task.id, task);
        });
        return map;
    }, [tasks]);

    // 종속성 경로 계산
    const dependencyPaths = useMemo((): DependencyPathInfo[] => {
        return dependencies
            .map((dep) => {
                const sourceTask = taskMap.get(dep.sourceTaskId);
                const targetTask = taskMap.get(dep.targetTaskId);
                const sourceIndex = taskIndexMap.get(dep.sourceTaskId);
                const targetIndex = taskIndexMap.get(dep.targetTaskId);

                if (
                    !sourceTask ||
                    !targetTask ||
                    sourceIndex === undefined ||
                    targetIndex === undefined
                ) {
                    return null;
                }

                // dayIndex 기반 좌표 계산 (휴일 보정 포함)
                const sourceCoords = getAnchorCoords(
                    sourceTask,
                    dep.sourceDayIndex,
                    sourceIndex,
                    minDate,
                    pixelsPerDay,
                    holidays,
                    calendarSettings
                );
                const targetCoords = getAnchorCoords(
                    targetTask,
                    dep.targetDayIndex,
                    targetIndex,
                    minDate,
                    pixelsPerDay,
                    holidays,
                    calendarSettings
                );

                const path = createDependencyPath(
                    sourceCoords.x,
                    sourceCoords.y,
                    targetCoords.x,
                    targetCoords.y
                );

                return {
                    id: dep.id,
                    path,
                    sourceX: sourceCoords.x,
                    sourceY: sourceCoords.y,
                    targetX: targetCoords.x,
                    targetY: targetCoords.y,
                };
            })
            .filter((p): p is DependencyPathInfo => p !== null);
    }, [dependencies, taskMap, taskIndexMap, minDate, pixelsPerDay, holidays, calendarSettings]);

    return (
        <g className="dependency-lines">
            {dependencyPaths.map((pathInfo) => {
                const isSelected = selectedDepId === pathInfo.id;
                const isHovered = hoveredDepId === pathInfo.id;

                let strokeColor = '#111827'; // 기본 검은색
                let markerEnd = 'url(#dependency-arrow)';
                let strokeWidth = 1.5;

                if (isSelected) {
                    strokeColor = '#3B82F6'; // 선택됨: 파란색
                    markerEnd = 'url(#dependency-arrow-selected)';
                    strokeWidth = 2.5;
                } else if (isHovered) {
                    strokeColor = '#000000'; // 호버: 진한 검은색
                    markerEnd = 'url(#dependency-arrow-hover)';
                    strokeWidth = 2;
                }

                return (
                    <g key={`dep-${pathInfo.id}`}>
                        {/* 클릭 영역 (넓은 투명 영역) */}
                        <path
                            d={pathInfo.path}
                            fill="none"
                            stroke="transparent"
                            strokeWidth={12}
                            style={{ cursor: 'pointer' }}
                            onClick={() => onDependencyClick?.(pathInfo.id)}
                            onMouseEnter={() => onDependencyHover?.(pathInfo.id)}
                            onMouseLeave={() => onDependencyHover?.(null)}
                        />
                        {/* 실제 종속성 선 */}
                        <path
                            d={pathInfo.path}
                            fill="none"
                            stroke={strokeColor}
                            strokeWidth={strokeWidth}
                            markerEnd={markerEnd}
                            style={{
                                cursor: 'pointer',
                                transition: 'stroke 0.15s, stroke-width 0.15s',
                            }}
                            onClick={() => onDependencyClick?.(pathInfo.id)}
                            onMouseEnter={() => onDependencyHover?.(pathInfo.id)}
                            onMouseLeave={() => onDependencyHover?.(null)}
                        />
                    </g>
                );
            })}
        </g>
    );
};

/**
 * 연결 중 프리뷰 선 컴포넌트
 */
interface ConnectionPreviewLineProps {
    sourceX: number;
    sourceY: number;
    targetX: number;
    targetY: number;
}

export const ConnectionPreviewLine: React.FC<ConnectionPreviewLineProps> = ({
    sourceX,
    sourceY,
    targetX,
    targetY,
}) => {
    return (
        <line
            x1={sourceX}
            y1={sourceY + ANCHOR_RADIUS}
            x2={targetX}
            y2={targetY + ANCHOR_RADIUS}
            stroke="#10B981"
            strokeWidth={2}
            strokeDasharray="5,3"
            markerEnd="url(#dependency-arrow-connecting)"
            style={{ pointerEvents: 'none' }}
        />
    );
};

/**
 * 태스크 바 내 앵커 연결선 컴포넌트
 * - 들어오는 종속성 끝점 → 나가는 종속성 시작점을 연결
 * - 바 하단을 따라 수평선으로 표시
 */
interface InBarConnectionLinesProps {
    tasks: ConstructionTask[];
    dependencies: AnchorDependency[];
    minDate: Date;
    pixelsPerDay: number;
    holidays?: Date[];
    calendarSettings?: CalendarSettings;
}

export const InBarConnectionLines: React.FC<InBarConnectionLinesProps> = ({
    tasks,
    dependencies,
    minDate,
    pixelsPerDay,
    holidays,
    calendarSettings,
}) => {
    // 태스크 ID → 인덱스 맵
    const taskIndexMap = useMemo(() => {
        const map = new Map<string, number>();
        tasks.forEach((task, index) => {
            map.set(task.id, index);
        });
        return map;
    }, [tasks]);

    // 태스크별 바 내 연결선 계산
    const inBarConnections = useMemo(() => {
        const connections: Array<{
            taskId: string;
            fromX: number;
            toX: number;
            y: number;
        }> = [];

        tasks.forEach((task) => {
            const rowIndex = taskIndexMap.get(task.id);
            if (rowIndex === undefined) return;

            // 이 태스크로 들어오는 종속성의 targetDayIndex 찾기
            const incomingAnchors = dependencies
                .filter((dep) => dep.targetTaskId === task.id)
                .map((dep) => dep.targetDayIndex);

            // 이 태스크에서 나가는 종속성의 sourceDayIndex 찾기
            const outgoingAnchors = dependencies
                .filter((dep) => dep.sourceTaskId === task.id)
                .map((dep) => dep.sourceDayIndex);

            // 연결이 필요한 쌍 찾기 (들어오는 앵커 → 나가는 앵커)
            incomingAnchors.forEach((inDay) => {
                outgoingAnchors.forEach((outDay) => {
                    if (inDay < outDay) {
                        const fromCoords = getAnchorCoords(
                            task,
                            inDay,
                            rowIndex,
                            minDate,
                            pixelsPerDay,
                            holidays,
                            calendarSettings
                        );
                        const toCoords = getAnchorCoords(
                            task,
                            outDay,
                            rowIndex,
                            minDate,
                            pixelsPerDay,
                            holidays,
                            calendarSettings
                        );

                        connections.push({
                            taskId: task.id,
                            fromX: fromCoords.x,
                            toX: toCoords.x,
                            y: fromCoords.y, // 같은 행이므로 Y는 동일
                        });
                    }
                });
            });
        });

        return connections;
    }, [tasks, dependencies, taskIndexMap, minDate, pixelsPerDay, holidays, calendarSettings]);

    if (inBarConnections.length === 0) return null;

    return (
        <g className="in-bar-connection-lines">
            {inBarConnections.map((conn, idx) => (
                <line
                    key={`in-bar-${conn.taskId}-${idx}`}
                    x1={conn.fromX}
                    y1={conn.y}
                    x2={conn.toX}
                    y2={conn.y}
                    stroke="#111827"
                    strokeWidth={1.5}
                    style={{ pointerEvents: 'none' }}
                />
            ))}
        </g>
    );
};
