/** 공정 레벨 (Level 1: 공구공정표, Level 2: 주공정표) */
export type WbsLevel = 1 | 2;
/** 뷰 모드 (줌 레벨) */
export type ZoomLevel = 'DAY' | 'WEEK' | 'MONTH';
/** 현재 활성화된 뷰 (Master: L1, Detail: L2) */
export type ViewMode = 'MASTER' | 'DETAIL';
/** @deprecated 기존 배치 타입 - 하위 호환성을 위해 유지 */
export type Placement = 'PRE' | 'POST';
/** 유연한 연결을 위한 앵커 포인트 */
export type AnchorPoint = 'START' | 'NET_WORK_START' | 'NET_WORK_END' | 'END';
/** 종속성 타입 */
export type DependencyType = 'FS' | 'SS' | 'FF' | 'SF';
/** 태스크 타입 */
export type TaskType = 'GROUP' | 'CP' | 'TASK';
export declare const GANTT_COLORS: {
    readonly vermilion: "#E34234";
    readonly teal: "#008080";
    readonly red: "#FF5252";
    readonly blue: "#448AFF";
    readonly milestone: "#4B5563";
    readonly dependency: "#9CA3AF";
    readonly grid: "#E5E7EB";
    readonly weekend: "#f3f4f6";
    readonly holiday: "#fef2f2";
};
export declare const GANTT_LAYOUT: {
    readonly ROW_HEIGHT: 40;
    readonly HEADER_HEIGHT: 80;
    readonly MILESTONE_LANE_HEIGHT: 40;
    readonly BAR_HEIGHT: 24;
    readonly SIDEBAR_WIDTH: 400;
    readonly SIDEBAR_MIN_WIDTH: 250;
    readonly SIDEBAR_MAX_WIDTH: 800;
};
export declare const ZOOM_CONFIG: Record<ZoomLevel, {
    pixelsPerDay: number;
    label: string;
}>;
export interface CalendarSettings {
    workOnSaturdays: boolean;
    workOnSundays: boolean;
    workOnHolidays: boolean;
}
export interface Holiday {
    date: string;
    name: string;
}
export interface Dependency {
    id: string;
    predecessorId: string;
    type: DependencyType;
    lag?: number;
    sourceAnchor?: AnchorPoint;
    targetAnchor?: AnchorPoint;
}
/** Level 1 전용 데이터 (공구 공정표 - CP/Aggregate) */
export interface CPData {
    workDaysTotal: number;
    nonWorkDaysTotal: number;
}
/** Level 2 전용 데이터 (주공정표 - Task Detail) */
export interface TaskData {
    netWorkDays: number;
    indirectWorkDaysPre: number;
    indirectWorkDaysPost: number;
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
    dependencies: Dependency[];
    isExpanded?: boolean;
}
export interface Milestone {
    id: string;
    date: Date;
    name: string;
    description?: string;
}
export interface TaskDates {
    startDate: Date;
    endDate: Date;
    netWorkStartDate: Date;
    netWorkEndDate: Date;
    indirectPreStartDate?: Date;
    indirectPreEndDate?: Date;
    indirectPostStartDate?: Date;
    indirectPostEndDate?: Date;
}
/** 메인 GanttChart Props */
export interface GanttChartProps {
    tasks: ConstructionTask[];
    milestones?: Milestone[];
    holidays?: Date[];
    calendarSettings?: CalendarSettings;
    initialView?: ViewMode;
    initialZoomLevel?: ZoomLevel;
    initialExpandedIds?: string[];
    onTaskUpdate?: (task: ConstructionTask) => void | Promise<void>;
    onTaskCreate?: (task: Partial<ConstructionTask>) => void | Promise<void>;
    onTaskDelete?: (taskId: string) => void | Promise<void>;
    onTaskReorder?: (taskId: string, newIndex: number) => void | Promise<void>;
    onDependencyCreate?: (taskId: string, dependency: Dependency) => void | Promise<void>;
    onDependencyDelete?: (taskId: string, dependencyId: string) => void | Promise<void>;
    onViewChange?: (view: ViewMode, activeCPId?: string) => void;
    onTaskGroup?: (taskIds: string[]) => void | Promise<void>;
    onTaskUngroup?: (groupId: string) => void | Promise<void>;
    onMilestoneUpdate?: (milestone: Milestone) => void | Promise<void>;
    onSave?: () => void;
    onReset?: () => void;
    hasUnsavedChanges?: boolean;
    saveStatus?: 'idle' | 'saving' | 'saved';
    className?: string;
    style?: React.CSSProperties;
}
/** Sidebar Props */
export interface GanttSidebarProps {
    tasks: ConstructionTask[];
    viewMode: ViewMode;
    expandedIds: Set<string>;
    onToggle: (taskId: string) => void;
    onTaskClick: (task: ConstructionTask) => void;
}
/** Timeline Props */
export interface GanttTimelineProps {
    tasks: ConstructionTask[];
    milestones: Milestone[];
    viewMode: ViewMode;
    zoomLevel: ZoomLevel;
    holidays: Date[];
    calendarSettings: CalendarSettings;
    onTaskUpdate?: (task: ConstructionTask) => void;
}
export interface GanttUIState {
    viewMode: ViewMode;
    activeCPId: string | null;
    zoomLevel: ZoomLevel;
    selectedTaskId: string | null;
    hoveredTaskId: string | null;
    expandedTaskIds: Set<string>;
    sidebarWidth: number;
    isDragging: boolean;
    dragType: 'MOVE' | 'RESIZE_PRE' | 'RESIZE_POST' | 'RESIZE_NET' | 'LINK' | null;
    dragTaskId: string | null;
}
export interface GanttUIActions {
    setViewMode: (mode: ViewMode, cpId?: string | null) => void;
    setZoomLevel: (level: ZoomLevel) => void;
    selectTask: (taskId: string | null) => void;
    hoverTask: (taskId: string | null) => void;
    toggleTask: (taskId: string) => void;
    expandAll: (taskIds: string[]) => void;
    collapseAll: () => void;
    setSidebarWidth: (width: number) => void;
    startDrag: (type: GanttUIState['dragType'], taskId: string) => void;
    endDrag: () => void;
}
export type GanttStore = GanttUIState & GanttUIActions;
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
