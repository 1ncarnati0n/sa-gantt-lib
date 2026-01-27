import { ConstructionTask, AnchorDependency } from '../types';

/** 종속성 그래프 구조 */
export interface DependencyGraph {
    nodes: Map<string, ConstructionTask>;
    outgoingEdges: Map<string, AnchorDependency[]>;
    incomingEdges: Map<string, AnchorDependency[]>;
}
/**
 * 종속성 그래프 구축
 * @param tasks 모든 태스크 목록
 * @param dependencies 앵커 종속성 목록
 */
export declare const buildDependencyGraph: (tasks: ConstructionTask[], dependencies: AnchorDependency[]) => DependencyGraph;
/**
 * 양방향으로 연결된 모든 태스크 수집 (BFS)
 * "하나의 간트바처럼" 이동하기 위해 연결된 모든 태스크를 찾음
 *
 * @param taskId 시작 태스크 ID
 * @param graph 종속성 그래프
 * @returns 연결된 모든 태스크 ID 배열 (시작 태스크 포함)
 */
export declare const collectConnectedTaskGroup: (taskId: string, graph: DependencyGraph) => string[];
/**
 * 단방향 후행 태스크만 수집 (선행 -> 후행 방향만)
 *
 * @param taskId 시작 태스크 ID
 * @param graph 종속성 그래프
 * @returns 후행 태스크 ID 배열 (시작 태스크 미포함)
 */
export declare const collectSuccessorTasks: (taskId: string, graph: DependencyGraph) => string[];
/**
 * 단방향 선행 태스크만 수집 (후행 -> 선행 방향만)
 *
 * @param taskId 시작 태스크 ID
 * @param graph 종속성 그래프
 * @returns 선행 태스크 ID 배열 (시작 태스크 미포함)
 */
export declare const collectPredecessorTasks: (taskId: string, graph: DependencyGraph) => string[];
/**
 * 두 태스크 간 종속성 존재 여부 확인
 */
export declare const hasDependencyBetween: (sourceTaskId: string, targetTaskId: string, dependencies: AnchorDependency[]) => boolean;
/**
 * 특정 태스크와 연결된 모든 종속성 가져오기
 */
export declare const getDependenciesForTask: (taskId: string, dependencies: AnchorDependency[]) => AnchorDependency[];
/**
 * 종속성이 있는 태스크인지 확인
 */
export declare const hasAnyDependency: (taskId: string, dependencies: AnchorDependency[]) => boolean;
/**
 * 순환 참조 감지 결과
 */
export interface CycleDetectionResult {
    /** 순환 참조 존재 여부 */
    hasCycle: boolean;
    /** 순환 경로 (taskId 배열). 순환이 없으면 빈 배열 */
    cyclePath: string[];
}
/**
 * 종속성 그래프에서 순환 참조 감지 (DFS 기반)
 *
 * @param graph 종속성 그래프
 * @returns 순환 감지 결과 (순환 여부 + 순환 경로)
 *
 * @example
 * const graph = buildDependencyGraph(tasks, dependencies);
 * const result = detectCyclicDependency(graph);
 * if (result.hasCycle) {
 *     console.log('Cycle detected:', result.cyclePath.join(' -> '));
 * }
 */
export declare const detectCyclicDependency: (graph: DependencyGraph) => CycleDetectionResult;
/**
 * 새 종속성 추가 시 순환이 발생하는지 미리 검사
 *
 * @param sourceTaskId 출발 태스크 ID
 * @param targetTaskId 도착 태스크 ID
 * @param tasks 모든 태스크 목록
 * @param existingDependencies 기존 종속성 목록
 * @returns 순환 발생 시 true
 */
export declare const wouldCreateCycle: (sourceTaskId: string, targetTaskId: string, tasks: ConstructionTask[], existingDependencies: AnchorDependency[]) => boolean;
/**
 * 연결된 task 그룹 내에서 위상 정렬 수행
 * @param connectedTaskIds 연결된 task ID 목록
 * @param graph 종속성 그래프
 * @returns 위상 정렬된 task ID 배열 (선행 → 후행 순서)
 */
export declare const topologicalSortConnectedTasks: (connectedTaskIds: string[], graph: DependencyGraph) => string[];
/**
 * 겹침 방지를 위한 task별 개별 deltaDays 계산
 * 후행 task가 선행 task 끝 이후에만 배치되도록 보장
 *
 * @param draggedTaskId 드래그 중인 task ID
 * @param baseDeltaDays 기본 이동량 (드래그로 인한 일수)
 * @param connectedTaskIds 연결된 모든 task ID
 * @param graph 종속성 그래프
 * @param tasks task 목록
 * @returns taskId -> 개별 조정된 deltaDays Map
 */
export declare const calculateChainedDeltaDays: (_draggedTaskId: string, // 향후 확장용 (현재 미사용)
baseDeltaDays: number, connectedTaskIds: string[], graph: DependencyGraph, tasks: ConstructionTask[]) => Map<string, number>;
