import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';
import {
    GanttStore,
    ViewMode,
    ZoomLevel,
    GANTT_LAYOUT,
} from '../types';

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
export const useGanttStore = create<GanttStore>((set, get) => ({
    // ====================================
    // Initial State
    // ====================================

    // View State
    viewMode: 'MASTER',
    activeCPId: null,
    zoomLevel: 'MONTH',  // Master View 기본: 월

    // UI Interaction State
    selectedTaskId: null,
    hoveredTaskId: null,
    expandedTaskIds: new Set<string>(),

    // Sidebar
    sidebarWidth: GANTT_LAYOUT.SIDEBAR_WIDTH,

    // Drag State
    isDragging: false,
    dragType: null,
    dragTaskId: null,

    // ====================================
    // View Actions
    // ====================================

    setViewMode: (mode: ViewMode, cpId?: string | null) => {
        set({
            viewMode: mode,
            activeCPId: cpId ?? null,
            // 뷰 모드에 따른 기본 줌 레벨 설정
            // Master (Level 1): 월 / Detail (Level 2): 일
            zoomLevel: mode === 'DETAIL' ? 'DAY' : 'MONTH',
        });
    },

    setZoomLevel: (level: ZoomLevel) => {
        set({ zoomLevel: level });
    },

    // ====================================
    // Task UI Actions
    // ====================================

    selectTask: (taskId: string | null) => {
        set({ selectedTaskId: taskId });
    },

    hoverTask: (taskId: string | null) => {
        set({ hoveredTaskId: taskId });
    },

    toggleTask: (taskId: string) => {
        const { expandedTaskIds } = get();
        const newExpanded = new Set(expandedTaskIds);

        if (newExpanded.has(taskId)) {
            newExpanded.delete(taskId);
        } else {
            newExpanded.add(taskId);
        }

        set({ expandedTaskIds: newExpanded });
    },

    expandAll: (taskIds: string[]) => {
        set({ expandedTaskIds: new Set(taskIds) });
    },

    collapseAll: () => {
        set({ expandedTaskIds: new Set() });
    },

    // ====================================
    // Sidebar Actions
    // ====================================

    setSidebarWidth: (width: number) => {
        const clampedWidth = Math.max(
            GANTT_LAYOUT.SIDEBAR_MIN_WIDTH,
            Math.min(width, GANTT_LAYOUT.SIDEBAR_MAX_WIDTH)
        );
        set({ sidebarWidth: clampedWidth });
    },

    // ====================================
    // Drag Actions
    // ====================================

    startDrag: (type, taskId) => {
        set({
            isDragging: true,
            dragType: type,
            dragTaskId: taskId,
        });
    },

    endDrag: () => {
        set({
            isDragging: false,
            dragType: null,
            dragTaskId: null,
        });
    },
}));

// ====================================
// Selector Hooks (성능 최적화)
// Zustand의 shallow 비교를 사용하여 불필요한 리렌더링 방지
// ====================================

/** 뷰 상태만 구독 */
export const useGanttViewState = () =>
    useGanttStore(
        useShallow((state) => ({
            viewMode: state.viewMode,
            activeCPId: state.activeCPId,
            zoomLevel: state.zoomLevel,
        }))
    );

/** 뷰 액션만 구독 */
export const useGanttViewActions = () =>
    useGanttStore(
        useShallow((state) => ({
            setViewMode: state.setViewMode,
            setZoomLevel: state.setZoomLevel,
        }))
    );

/** 선택/호버 상태만 구독 */
export const useGanttSelection = () =>
    useGanttStore(
        useShallow((state) => ({
            selectedTaskId: state.selectedTaskId,
            hoveredTaskId: state.hoveredTaskId,
            selectTask: state.selectTask,
            hoverTask: state.hoverTask,
        }))
    );

/** 확장 상태만 구독 */
export const useGanttExpansion = () =>
    useGanttStore(
        useShallow((state) => ({
            expandedTaskIds: state.expandedTaskIds,
            toggleTask: state.toggleTask,
            expandAll: state.expandAll,
            collapseAll: state.collapseAll,
        }))
    );

/** 사이드바 상태만 구독 */
export const useGanttSidebar = () =>
    useGanttStore(
        useShallow((state) => ({
            sidebarWidth: state.sidebarWidth,
            setSidebarWidth: state.setSidebarWidth,
        }))
    );

/** 드래그 상태만 구독 */
export const useGanttDrag = () =>
    useGanttStore(
        useShallow((state) => ({
            isDragging: state.isDragging,
            dragType: state.dragType,
            dragTaskId: state.dragTaskId,
            startDrag: state.startDrag,
            endDrag: state.endDrag,
        }))
    );
