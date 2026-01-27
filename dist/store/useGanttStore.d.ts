import { ConstructionTask, GanttStore, ViewMode, ZoomLevel, TaskSelectOptions } from '../types';

/**
 * 간트 차트 UI 상태 관리 Store
 *
 * 이 Store는 UI 상태만 관리합니다.
 * 실제 데이터(tasks, milestones 등)는 Props로 전달받습니다.
 *
 * Next.js + Supabase 환경에서는:
 * - 데이터: React Query / SWR로 관리
 * - UI 상태: 이 Store로 관리
 */
export declare const useGanttStore: import('zustand').UseBoundStore<import('zustand').StoreApi<GanttStore>>;
/** 뷰 상태만 구독 */
export declare const useGanttViewState: () => {
    viewMode: ViewMode;
    activeCPId: string | null;
    zoomLevel: ZoomLevel;
};
/** 뷰 액션만 구독 */
export declare const useGanttViewActions: () => {
    setViewMode: (mode: ViewMode, cpId?: string | null) => void;
    setZoomLevel: (level: ZoomLevel) => void;
};
/** 선택 상태만 구독 */
export declare const useGanttSelection: () => {
    selectedTaskIds: Set<string>;
    focusedTaskId: string | null;
    lastClickedIndex: number | null;
    selectTask: (taskId: string, options?: TaskSelectOptions) => void;
    selectMultipleTasks: (taskIds: string[]) => void;
    clearSelection: () => void;
    setFocusedTask: (taskId: string | null) => void;
    moveFocus: (direction: "up" | "down", visibleTasks: ConstructionTask[]) => void;
};
/** 호버 상태만 구독 */
export declare const useGanttHover: () => {
    hoveredTaskId: string | null;
    hoverTask: (taskId: string | null) => void;
};
/** 확장 상태만 구독 */
export declare const useGanttExpansion: () => {
    expandedTaskIds: Set<string>;
    toggleTask: (taskId: string) => void;
    expandAll: (taskIds: string[]) => void;
    collapseAll: () => void;
    setExpandedTaskIds: (ids: Set<string>) => void;
};
/** 사이드바 상태만 구독 */
export declare const useGanttSidebar: () => {
    sidebarWidth: number;
    setSidebarWidth: (width: number) => void;
};
/** 드래그 상태만 구독 */
export declare const useGanttDrag: () => {
    isDragging: boolean;
    dragType: "MOVE" | "RESIZE_PRE" | "RESIZE_POST" | "RESIZE_NET" | "LINK" | null;
    dragTaskId: string | null;
    startDrag: (type: import('..').GanttUIState["dragType"], taskId: string) => void;
    endDrag: () => void;
};
/** Compact 모드 상태만 구독 */
export declare const useGanttCompactMode: () => {
    isCompactMode: boolean;
    toggleCompactMode: () => void;
    setCompactMode: (isCompact: boolean) => void;
};
