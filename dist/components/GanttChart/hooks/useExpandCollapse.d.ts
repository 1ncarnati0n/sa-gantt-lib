import { ConstructionTask, ViewMode } from '../../../types';

interface UseExpandCollapseOptions {
    tasks: ConstructionTask[];
    viewMode: ViewMode;
    activeCPId: string | null;
    expandedTaskIds: Set<string>;
    setExpandedTaskIds: (ids: Set<string>) => void;
}
interface UseExpandCollapseReturn {
    /** 다음 레벨 펼치기 */
    expandNextLevel: () => void;
    /** 마지막 레벨 접기 */
    collapseLastLevel: () => void;
    /** 특정 태스크의 depth 계산 */
    getDepthForTask: (task: ConstructionTask) => number;
}
export declare const useExpandCollapse: ({ tasks, viewMode, activeCPId, expandedTaskIds, setExpandedTaskIds, }: UseExpandCollapseOptions) => UseExpandCollapseReturn;
export {};
