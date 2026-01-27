/** 공정 레벨 (Level 1: 공구공정표, Level 2: 주공정표) */
export type WbsLevel = 1 | 2;
/** 뷰 모드 (줌 레벨) */
export type ZoomLevel = 'DAY' | 'WEEK' | 'MONTH';
/** 현재 활성화된 뷰 (Master: L1, Detail: L2, Unified: 통합) */
export type ViewMode = 'MASTER' | 'DETAIL' | 'UNIFIED';
/** @deprecated 기존 배치 타입 - 하위 호환성을 위해 유지 */
export type Placement = 'PRE' | 'POST';
/** 유연한 연결을 위한 앵커 포인트 */
export type AnchorPoint = 'START' | 'NET_WORK_START' | 'NET_WORK_END' | 'END';
/** 종속성 타입 */
export type DependencyType = 'FS' | 'SS' | 'FF' | 'SF';
/** 태스크 타입 */
export type TaskType = 'GROUP' | 'CP' | 'TASK';
/** 드래그 앤 드롭 위치 타입 */
export type DropPosition = 'before' | 'after' | 'into';
export interface Dependency {
    id: string;
    predecessorId: string;
    type: DependencyType;
    lag?: number;
    sourceAnchor?: AnchorPoint;
    targetAnchor?: AnchorPoint;
}
/** 앵커 기반 종속성 (양방향 연결 이동 지원) */
export interface AnchorDependency {
    id: string;
    sourceTaskId: string;
    targetTaskId: string;
    sourceDayIndex: number;
    targetDayIndex: number;
    lag?: number;
}
/** 앵커 종속성 드래그 결과 */
export interface AnchorDependencyDragResult {
    sourceTaskId: string;
    deltaDays: number;
    affectedTaskIds: string[];
    /** 각 태스크의 스냅된 새 날짜 정보 (신규: 휴일 스냅 적용됨) */
    taskUpdates?: Array<{
        taskId: string;
        newStartDate: Date;
        newEndDate: Date;
    }>;
}
/** Level 1 전용 데이터 (공구 공정표 - CP/Aggregate) */
export interface CPData {
    workDaysTotal: number;
    nonWorkDaysTotal: number;
}
/** GROUP 전용 데이터 (진행도 관리) */
export interface GroupData {
    progress?: number;
}
/** Level 2 전용 데이터 (주공정표 - Task Detail) */
export interface TaskData {
    netWorkDays: number;
    indirectWorkDaysPre: number;
    indirectWorkDaysPost: number;
    indirectWorkNamePre?: string;
    indirectWorkNamePost?: string;
    workOnSaturdays?: boolean;
    workOnSundays?: boolean;
    workOnHolidays?: boolean;
    quantity?: number;
    unit?: string;
    dailyOutput?: number;
    crew?: number;
}
export interface ConstructionTask {
    id: string;
    parentId: string | null;
    wbsLevel: WbsLevel;
    type: TaskType;
    name: string;
    startDate: Date;
    endDate: Date;
    cp?: CPData;
    task?: TaskData;
    group?: GroupData;
    dependencies: Dependency[];
    isExpanded?: boolean;
}
/** 마일스톤 타입 (MASTER: Master View용, DETAIL: Detail View용) */
export type MilestoneType = 'MASTER' | 'DETAIL';
export interface Milestone {
    id: string;
    date: Date;
    name: string;
    description?: string;
    milestoneType?: MilestoneType;
}
/** 날짜 범위 */
export interface DateRange {
    start: Date;
    end: Date;
}
/** 픽셀 좌표 */
export interface Point {
    x: number;
    y: number;
}
/** 사각형 영역 */
export interface Rect {
    x: number;
    y: number;
    width: number;
    height: number;
}
/** Critical Path 일별 상태 */
export interface CriticalPathDay {
    date: Date;
    workDayValue: number;
    nonWorkDayValue: number;
    hasNetWork: boolean;
    hasIndirectWork: boolean;
    isHoliday: boolean;
    contributingTaskIds: string[];
}
/** Group Summary 바 드래그 결과 */
export interface GroupDragResult {
    groupId: string;
    deltaDays: number;
    affectedTaskIds: string[];
    /** 각 task의 새 날짜 정보 (하위 Task 업데이트용) */
    taskUpdates?: Array<{
        taskId: string;
        newStartDate: Date;
    }>;
}
/** Critical Path 요약 정보 */
export interface CriticalPathSummary {
    startDate: Date;
    endDate: Date;
    totalDays: number;
    workDays: number;
    nonWorkDays: number;
    netWorkDaysTotal: number;
    indirectWorkDaysTotal: number;
    dailyBreakdown: CriticalPathDay[];
}
