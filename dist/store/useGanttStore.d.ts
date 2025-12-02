import { GanttStore, ViewMode, ZoomLevel } from '../types';

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
/** 선택/호버 상태만 구독 */
export declare const useGanttSelection: () => {
    selectedTaskId: string | null;
    hoveredTaskId: string | null;
    selectTask: (taskId: string | null) => void;
    hoverTask: (taskId: string | null) => void;
};
/** 확장 상태만 구독 */
export declare const useGanttExpansion: () => {
    expandedTaskIds: Set<string>;
    toggleTask: (taskId: string) => void;
    expandAll: (taskIds: string[]) => void;
    collapseAll: () => void;
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
