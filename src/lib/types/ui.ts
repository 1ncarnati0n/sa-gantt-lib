// ============================================
// SA-Gantt-Lib: UI 상태 타입 정의
// ============================================

import type { ViewMode, ZoomLevel } from './core';

// ============================================
// Store State 인터페이스 (UI 상태만)
// ============================================

export interface GanttUIState {
    // View State
    viewMode: ViewMode;
    activeCPId: string | null;        // Detail 뷰에서 선택된 CP ID
    zoomLevel: ZoomLevel;

    // UI Interaction State
    selectedTaskId: string | null;
    hoveredTaskId: string | null;
    expandedTaskIds: Set<string>;

    // Sidebar
    sidebarWidth: number;

    // Drag State
    isDragging: boolean;
    dragType: 'MOVE' | 'RESIZE_PRE' | 'RESIZE_POST' | 'RESIZE_NET' | 'LINK' | null;
    dragTaskId: string | null;
}

export interface GanttUIActions {
    // View Actions
    setViewMode: (mode: ViewMode, cpId?: string | null) => void;
    setZoomLevel: (level: ZoomLevel) => void;

    // Task UI Actions
    selectTask: (taskId: string | null) => void;
    hoverTask: (taskId: string | null) => void;
    toggleTask: (taskId: string) => void;
    expandAll: (taskIds: string[]) => void;
    collapseAll: () => void;

    // Sidebar Actions
    setSidebarWidth: (width: number) => void;

    // Drag Actions
    startDrag: (type: GanttUIState['dragType'], taskId: string) => void;
    endDrag: () => void;
}

export type GanttStore = GanttUIState & GanttUIActions;

// ============================================
// 에러 컨텍스트
// ============================================

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
