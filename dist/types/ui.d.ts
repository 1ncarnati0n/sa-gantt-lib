import { ViewMode, ZoomLevel, ConstructionTask } from './core';

export interface TaskSelectOptions {
    /** Ctrl/Cmd 키 누름 상태 */
    ctrlKey?: boolean;
    /** Shift 키 누름 상태 */
    shiftKey?: boolean;
    /** 현재 보이는 Task 목록 (Shift 범위 선택용) */
    visibleTasks?: ConstructionTask[];
}
export interface GanttUIState {
    viewMode: ViewMode;
    activeCPId: string | null;
    zoomLevel: ZoomLevel;
    selectedTaskIds: Set<string>;
    focusedTaskId: string | null;
    lastClickedIndex: number | null;
    hoveredTaskId: string | null;
    expandedTaskIds: Set<string>;
    sidebarWidth: number;
    isDragging: boolean;
    dragType: 'MOVE' | 'RESIZE_PRE' | 'RESIZE_POST' | 'RESIZE_NET' | 'LINK' | null;
    dragTaskId: string | null;
    isCompactMode: boolean;
}
export interface GanttUIActions {
    setViewMode: (mode: ViewMode, cpId?: string | null) => void;
    setZoomLevel: (level: ZoomLevel) => void;
    selectTask: (taskId: string, options?: TaskSelectOptions) => void;
    selectMultipleTasks: (taskIds: string[]) => void;
    clearSelection: () => void;
    setFocusedTask: (taskId: string | null) => void;
    moveFocus: (direction: 'up' | 'down', visibleTasks: ConstructionTask[]) => void;
    hoverTask: (taskId: string | null) => void;
    toggleTask: (taskId: string) => void;
    expandAll: (taskIds: string[]) => void;
    collapseAll: () => void;
    setExpandedTaskIds: (ids: Set<string>) => void;
    setSidebarWidth: (width: number) => void;
    startDrag: (type: GanttUIState['dragType'], taskId: string) => void;
    endDrag: () => void;
    toggleCompactMode: () => void;
    setCompactMode: (isCompact: boolean) => void;
}
export type GanttStore = GanttUIState & GanttUIActions;
/** 에러 발생 컨텍스트 정보 */
export interface GanttErrorContext {
    /** 에러가 발생한 작업 유형 */
    action: 'task_update' | 'task_create' | 'task_delete' | 'task_reorder' | 'task_move' | 'task_group' | 'task_ungroup' | 'dependency_create' | 'dependency_delete' | 'milestone_create' | 'milestone_update' | 'milestone_delete' | 'bar_drag' | 'unknown';
    /** 관련된 Task ID (있는 경우) */
    taskId?: string;
    /** 관련된 Milestone ID (있는 경우) */
    milestoneId?: string;
    /** 추가 정보 */
    details?: Record<string, unknown>;
}
