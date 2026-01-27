import { ConstructionTask, ViewMode, CalendarSettings, CriticalPathSummary } from '../../../types';

interface VirtualRow {
    index: number;
    start: number;
    size: number;
    key: string | number;
}
interface UseSidebarDataOptions {
    tasks: ConstructionTask[];
    allTasks: ConstructionTask[];
    viewMode: ViewMode;
    activeCPId: string | null | undefined;
    holidays: Date[];
    calendarSettings: CalendarSettings;
    effectiveRowHeight: number;
    virtualRows?: VirtualRow[];
}
interface UseSidebarDataReturn {
    /** Task ID → Task 매핑 (O(1) 조회) */
    taskMap: Map<string, ConstructionTask>;
    /** Parent ID → 자식 수 매핑 (canExpand 판단용) */
    childrenCountMap: Map<string, number>;
    /** CP ID → Critical Path 요약 (MASTER View용) */
    cpSummaryMap: Map<string, CriticalPathSummary>;
    /** 동적 행 높이 계산 함수 */
    getRowHeight: (task: ConstructionTask) => number;
    /** 행 데이터 (가상화/비가상화 통합) */
    rowData: VirtualRow[];
    /** 동적 총 높이 */
    dynamicTotalHeight: number;
    /** Active CP 이름 */
    activeCPName: string | undefined;
    /** Active CP의 상위 그룹 이름 */
    activeGroupName: string | undefined;
    /** 가상화 사용 여부 */
    isVirtualized: boolean;
    /** 컴팩트 모드 여부 */
    isCompact: boolean;
}
export declare const useSidebarData: ({ tasks, allTasks, viewMode, activeCPId, holidays, calendarSettings, effectiveRowHeight, virtualRows, }: UseSidebarDataOptions) => UseSidebarDataReturn;
export {};
