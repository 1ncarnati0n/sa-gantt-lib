import { differenceInDays } from 'date-fns';
import { ConstructionTask, TaskType, WbsLevel } from '../types';

// ============================================
// GROUP 관련 유틸리티 함수
// ============================================

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
}

/**
 * 재귀적으로 GROUP의 모든 자손 TASK 수집
 *
 * @param parentId - 부모 ID (GROUP 또는 CP)
 * @param allTasks - 전체 Task 배열
 * @param options - 필터링 옵션 (선택적)
 * @returns 하위의 모든 TASK 타입 배열
 *
 * @example
 * // 기본 사용 (기존과 동일)
 * collectDescendantTasks(groupId, allTasks);
 *
 * @example
 * // wbsLevel 2인 TASK만 수집
 * collectDescendantTasks(cpId, allTasks, { wbsLevel: 2 });
 *
 * @example
 * // GROUP도 포함하여 수집
 * collectDescendantTasks(parentId, allTasks, { includeGroups: true });
 */
export const collectDescendantTasks = (
    parentId: string,
    allTasks: ConstructionTask[],
    options?: CollectDescendantTasksOptions
): ConstructionTask[] => {
    const {
        wbsLevel,
        includeTypes = ['TASK'],
        includeGroups = false,
    } = options ?? {};

    const result: ConstructionTask[] = [];

    allTasks.forEach(task => {
        if (task.parentId === parentId) {
            // wbsLevel 필터링 (옵션이 지정된 경우에만)
            const matchesWbsLevel = wbsLevel === undefined || task.wbsLevel === wbsLevel;

            if (task.type === 'GROUP' || task.type === 'CP') {
                // GROUP/CP 자체를 결과에 포함할지 여부
                if (includeGroups && matchesWbsLevel) {
                    result.push(task);
                }
                // 재귀적으로 GROUP/CP 하위 탐색
                result.push(...collectDescendantTasks(task.id, allTasks, options));
            } else if (includeTypes.includes(task.type) && matchesWbsLevel) {
                result.push(task);
            }
        }
    });

    return result;
};

/**
 * GROUP의 하위 Task들로부터 시작일/종료일 계산
 *
 * @param groupId - GROUP ID
 * @param allTasks - 전체 Task 배열
 * @returns { startDate, endDate, totalDays } 또는 하위 Task가 없으면 null
 */
export const calculateGroupDateRange = (
    groupId: string,
    allTasks: ConstructionTask[]
): { startDate: Date; endDate: Date; totalDays: number } | null => {
    const descendantTasks = collectDescendantTasks(groupId, allTasks);

    if (descendantTasks.length === 0) return null;

    const startDates = descendantTasks.map(t => t.startDate);
    const endDates = descendantTasks.map(t => t.endDate);

    const minStart = new Date(Math.min(...startDates.map(d => d.getTime())));
    const maxEnd = new Date(Math.max(...endDates.map(d => d.getTime())));
    const totalDays = differenceInDays(maxEnd, minStart) + 1;

    return { startDate: minStart, endDate: maxEnd, totalDays };
};
