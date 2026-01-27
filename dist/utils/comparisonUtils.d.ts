import { ConstructionTask, Milestone } from '../types';

/**
 * 두 ConstructionTask 배열이 얕은 수준에서 같은지 비교
 * 주요 필드만 비교하여 O(n) 복잡도로 빠르게 동등성 판단
 *
 * @param a 첫 번째 배열
 * @param b 두 번째 배열
 * @returns 얕은 비교에서 같으면 true
 */
export declare function shallowEqualTasks(a: ConstructionTask[] | undefined | null, b: ConstructionTask[] | undefined | null): boolean;
/**
 * 두 Milestone 배열이 얕은 수준에서 같은지 비교
 */
export declare function shallowEqualMilestones(a: Milestone[] | undefined | null, b: Milestone[] | undefined | null): boolean;
/**
 * 제네릭 얕은 동등성 비교
 * 객체의 최상위 키만 비교 (중첩 객체는 참조 비교)
 */
export declare function shallowEqual<T extends Record<string, unknown>>(a: T | undefined | null, b: T | undefined | null): boolean;
/**
 * useHistory에서 사용할 상태 비교 함수
 * tasks와 milestones가 포함된 상태 객체를 효율적으로 비교
 */
export declare function shallowEqualHistoryState<T extends {
    tasks?: ConstructionTask[];
    milestones?: Milestone[];
}>(a: T, b: T): boolean;
