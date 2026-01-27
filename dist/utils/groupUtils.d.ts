import { ConstructionTask, TaskType, WbsLevel } from '../types';

/**
 * Parent ID → Children 매핑 생성 (O(1) 조회용)
 * @param allTasks - 전체 Task 배열
 * @returns Map<parentId, children[]>
 */
export declare const buildChildrenMap: (allTasks: ConstructionTask[]) => Map<string | null | undefined, ConstructionTask[]>;
/**
 * collectDescendantTasks 함수의 옵션
 */
export interface CollectDescendantTasksOptions {
    /** 특정 wbsLevel만 필터링 (undefined면 모두 포함) */
    wbsLevel?: WbsLevel;
    /** 수집할 타입 배열 (기본: ['TASK']) */
    includeTypes?: TaskType[];
    /** GROUP도 결과에 포함할지 (기본: false) */
    includeGroups?: boolean;
    /** 미리 계산된 childrenMap (성능 최적화용) */
    childrenMap?: Map<string | null | undefined, ConstructionTask[]>;
}
/**
 * 재귀적으로 GROUP의 모든 자손 TASK 수집
 *
 * 성능 최적화: childrenMap을 전달하면 O(n) 스캔 대신 O(1) 조회 사용
 *
 * @param parentId - 부모 ID (GROUP 또는 CP)
 * @param allTasks - 전체 Task 배열
 * @param options - 필터링 옵션 (선택적)
 * @returns 하위의 모든 TASK 타입 배열
 *
 * @example
 * // 기본 사용 (기존과 동일 - 하위 호환성 유지)
 * collectDescendantTasks(groupId, allTasks);
 *
 * @example
 * // 성능 최적화: childrenMap 전달
 * const childrenMap = buildChildrenMap(allTasks);
 * collectDescendantTasks(groupId, allTasks, { childrenMap });
 *
 * @example
 * // wbsLevel 2인 TASK만 수집
 * collectDescendantTasks(cpId, allTasks, { wbsLevel: 2 });
 *
 * @example
 * // GROUP도 포함하여 수집
 * collectDescendantTasks(parentId, allTasks, { includeGroups: true });
 */
export declare const collectDescendantTasks: (parentId: string, allTasks: ConstructionTask[], options?: CollectDescendantTasksOptions) => ConstructionTask[];
/**
 * GROUP의 하위 Task들로부터 시작일/종료일 계산
 *
 * @param groupId - GROUP ID
 * @param allTasks - 전체 Task 배열
 * @param childrenMap - 미리 계산된 childrenMap (성능 최적화용)
 * @returns { startDate, endDate, totalDays } 또는 하위 Task가 없으면 null
 */
export declare const calculateGroupDateRange: (groupId: string, allTasks: ConstructionTask[], childrenMap?: Map<string | null | undefined, ConstructionTask[]>) => {
    startDate: Date;
    endDate: Date;
    totalDays: number;
} | null;
