import { create } from 'zustand';
import { GanttTask, GanttLink, ViewMode } from '../types';
import { addDays, startOfDay } from 'date-fns';

interface GanttState {
    // Data
    tasks: GanttTask[];
    links: GanttLink[];

    // View Settings
    viewMode: ViewMode;
    columnWidth: number;
    rowHeight: number;

    // Time Range (Computed from tasks or set manually)
    startDate: Date | null;
    endDate: Date | null;

    // UI State
    scrollX: number;
    scrollY: number;
    selectedTaskId: string | null;
    expandedTaskIds: Set<string | number>;

    // Actions
    setTasks: (tasks: GanttTask[]) => void;
    setLinks: (links: GanttLink[]) => void;
    setViewMode: (mode: ViewMode) => void;
    toggleTask: (taskId: string | number) => void;
    updateTask: (taskId: string, updates: Partial<GanttTask>) => void;
    getVisibleTasks: () => GanttTask[];
}

export const useGanttStore = create<GanttState>((set, get) => ({
    tasks: [],
    links: [],
    viewMode: 'day',
    columnWidth: 50,
    rowHeight: 40,
    startDate: null,
    endDate: null,
    scrollX: 0,
    scrollY: 0,
    selectedTaskId: null,
    expandedTaskIds: new Set(),

    setTasks: (tasks) => {
        // Calculate global start/end dates
        if (tasks.length === 0) {
            set({ tasks, startDate: new Date(), endDate: addDays(new Date(), 30) });
            return;
        }

        const startDates = tasks.map(t => t.start_date.getTime());
        const endDates = tasks.map(t => t.end_date.getTime());

        // Buffer days
        const minDate = startOfDay(new Date(Math.min(...startDates)));
        const maxDate = startOfDay(new Date(Math.max(...endDates)));

        set({
            tasks,
            startDate: addDays(minDate, -7),
            endDate: addDays(maxDate, 7)
        });
    },

    setLinks: (links) => set({ links }),

    setViewMode: (mode) => {
        let newWidth = 50;
        switch (mode) {
            case 'day': newWidth = 50; break;
            case 'week': newWidth = 40; break; // per day
            case 'month': newWidth = 30; break; // per day
        }
        set({ viewMode: mode, columnWidth: newWidth });
    },

    toggleTask: (taskId) => set((state) => {
        const newExpanded = new Set(state.expandedTaskIds);
        if (newExpanded.has(taskId)) {
            newExpanded.delete(taskId);
        } else {
            newExpanded.add(taskId);
        }
        return { expandedTaskIds: newExpanded };
    }),

    updateTask: (taskId, updates) => set((state) => ({
        tasks: state.tasks.map(t => t.id === taskId ? { ...t, ...updates } : t)
    })),

    getVisibleTasks: () => {
        const state = get();
        // const visibleTasks: GanttTask[] = [];
        const { tasks, expandedTaskIds } = state;

        // Helper to check if all parents are expanded
        // This assumes tasks are flat but have parent pointers. 
        // For better performance, we might want to build a tree or map, but for now linear scan is okay for < 1000 tasks?
        // Actually, a better way is to iterate and skip children of collapsed parents.
        // But tasks might not be sorted by hierarchy.
        // Let's assume we need to check ancestry.

        // Optimization: Create a map for quick lookup
        // const taskMap = new Map(tasks.map(t => [t.id, t]));

        // Simple approach: Filter
        // A task is visible if its parent is 0 OR (parent is expanded AND parent is visible)
        // This requires top-down traversal or recursive check.

        // Let's assume tasks are sorted by display order (DFS).
        // If so, we can just maintain a "skipping" state.
        // But we can't guarantee sort order yet.

        // Robust approach:
        const isVisible = (taskId: string | number): boolean => {
            const task = tasks.find(t => t.id === taskId);
            if (!task) return false;
            if (task.parent === 0 || task.parent === "0") return true;
            return expandedTaskIds.has(task.parent) && isVisible(task.parent);
        };

        return tasks.filter(t => {
            if (t.parent === 0 || t.parent === "0") return true;
            return expandedTaskIds.has(t.parent) && isVisible(t.parent);
        });
    }
}));
