import { GanttTask, GanttLink, ViewMode } from '../types';

interface GanttState {
    tasks: GanttTask[];
    links: GanttLink[];
    viewMode: ViewMode;
    columnWidth: number;
    rowHeight: number;
    startDate: Date | null;
    endDate: Date | null;
    scrollX: number;
    scrollY: number;
    selectedTaskId: string | null;
    expandedTaskIds: Set<string | number>;
    setTasks: (tasks: GanttTask[]) => void;
    setLinks: (links: GanttLink[]) => void;
    setViewMode: (mode: ViewMode) => void;
    toggleTask: (taskId: string | number) => void;
    updateTask: (taskId: string, updates: Partial<GanttTask>) => void;
    getVisibleTasks: () => GanttTask[];
}
export declare const useGanttStore: import('zustand').UseBoundStore<import('zustand').StoreApi<GanttState>>;
export {};
