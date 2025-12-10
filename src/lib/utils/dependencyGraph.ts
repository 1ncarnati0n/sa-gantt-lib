// ============================================
// 종속성 그래프 유틸리티
// 양방향 연결 이동을 위한 그래프 탐색 로직
// ============================================

import type { ConstructionTask, AnchorDependency } from '../types';

/** 종속성 그래프 구조 */
export interface DependencyGraph {
    nodes: Map<string, ConstructionTask>;
    // taskId -> 해당 태스크에서 나가는 종속성들
    outgoingEdges: Map<string, AnchorDependency[]>;
    // taskId -> 해당 태스크로 들어오는 종속성들
    incomingEdges: Map<string, AnchorDependency[]>;
}

/**
 * 종속성 그래프 구축
 * @param tasks 모든 태스크 목록
 * @param dependencies 앵커 종속성 목록
 */
export const buildDependencyGraph = (
    tasks: ConstructionTask[],
    dependencies: AnchorDependency[]
): DependencyGraph => {
    const nodes = new Map<string, ConstructionTask>();
    const outgoingEdges = new Map<string, AnchorDependency[]>();
    const incomingEdges = new Map<string, AnchorDependency[]>();

    // 노드 초기화
    tasks.forEach(task => {
        nodes.set(task.id, task);
        outgoingEdges.set(task.id, []);
        incomingEdges.set(task.id, []);
    });

    // 엣지 추가
    dependencies.forEach(dep => {
        const outgoing = outgoingEdges.get(dep.sourceTaskId);
        const incoming = incomingEdges.get(dep.targetTaskId);

        if (outgoing) {
            outgoing.push(dep);
        }
        if (incoming) {
            incoming.push(dep);
        }
    });

    return { nodes, outgoingEdges, incomingEdges };
};

/**
 * 양방향으로 연결된 모든 태스크 수집 (BFS)
 * "하나의 간트바처럼" 이동하기 위해 연결된 모든 태스크를 찾음
 *
 * @param taskId 시작 태스크 ID
 * @param graph 종속성 그래프
 * @returns 연결된 모든 태스크 ID 배열 (시작 태스크 포함)
 */
export const collectConnectedTaskGroup = (
    taskId: string,
    graph: DependencyGraph
): string[] => {
    const visited = new Set<string>();
    const queue: string[] = [taskId];

    while (queue.length > 0) {
        const currentId = queue.shift()!;

        if (visited.has(currentId)) continue;
        visited.add(currentId);

        // 나가는 방향 탐색 (sourceTask -> targetTask)
        const outgoing = graph.outgoingEdges.get(currentId) || [];
        outgoing.forEach(dep => {
            if (!visited.has(dep.targetTaskId)) {
                queue.push(dep.targetTaskId);
            }
        });

        // 들어오는 방향 탐색 (sourceTask <- targetTask)
        const incoming = graph.incomingEdges.get(currentId) || [];
        incoming.forEach(dep => {
            if (!visited.has(dep.sourceTaskId)) {
                queue.push(dep.sourceTaskId);
            }
        });
    }

    return Array.from(visited);
};

/**
 * 단방향 후행 태스크만 수집 (선행 -> 후행 방향만)
 *
 * @param taskId 시작 태스크 ID
 * @param graph 종속성 그래프
 * @returns 후행 태스크 ID 배열 (시작 태스크 미포함)
 */
export const collectSuccessorTasks = (
    taskId: string,
    graph: DependencyGraph
): string[] => {
    const visited = new Set<string>();
    const queue: string[] = [taskId];
    visited.add(taskId); // 시작 태스크는 결과에서 제외

    while (queue.length > 0) {
        const currentId = queue.shift()!;

        const outgoing = graph.outgoingEdges.get(currentId) || [];
        outgoing.forEach(dep => {
            if (!visited.has(dep.targetTaskId)) {
                visited.add(dep.targetTaskId);
                queue.push(dep.targetTaskId);
            }
        });
    }

    // 시작 태스크 제거 후 반환
    visited.delete(taskId);
    return Array.from(visited);
};

/**
 * 단방향 선행 태스크만 수집 (후행 -> 선행 방향만)
 *
 * @param taskId 시작 태스크 ID
 * @param graph 종속성 그래프
 * @returns 선행 태스크 ID 배열 (시작 태스크 미포함)
 */
export const collectPredecessorTasks = (
    taskId: string,
    graph: DependencyGraph
): string[] => {
    const visited = new Set<string>();
    const queue: string[] = [taskId];
    visited.add(taskId);

    while (queue.length > 0) {
        const currentId = queue.shift()!;

        const incoming = graph.incomingEdges.get(currentId) || [];
        incoming.forEach(dep => {
            if (!visited.has(dep.sourceTaskId)) {
                visited.add(dep.sourceTaskId);
                queue.push(dep.sourceTaskId);
            }
        });
    }

    visited.delete(taskId);
    return Array.from(visited);
};

/**
 * 두 태스크 간 종속성 존재 여부 확인
 */
export const hasDependencyBetween = (
    sourceTaskId: string,
    targetTaskId: string,
    dependencies: AnchorDependency[]
): boolean => {
    return dependencies.some(
        dep =>
            (dep.sourceTaskId === sourceTaskId && dep.targetTaskId === targetTaskId) ||
            (dep.sourceTaskId === targetTaskId && dep.targetTaskId === sourceTaskId)
    );
};

/**
 * 특정 태스크와 연결된 모든 종속성 가져오기
 */
export const getDependenciesForTask = (
    taskId: string,
    dependencies: AnchorDependency[]
): AnchorDependency[] => {
    return dependencies.filter(
        dep => dep.sourceTaskId === taskId || dep.targetTaskId === taskId
    );
};

/**
 * 종속성이 있는 태스크인지 확인
 */
export const hasAnyDependency = (
    taskId: string,
    dependencies: AnchorDependency[]
): boolean => {
    return dependencies.some(
        dep => dep.sourceTaskId === taskId || dep.targetTaskId === taskId
    );
};
