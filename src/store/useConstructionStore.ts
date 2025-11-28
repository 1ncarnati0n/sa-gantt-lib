import { create } from 'zustand';
import { ConstructionTask, Milestone, Placement, CalendarSettings, Dependency } from '../types/gantt';
import { calculateDualCalendarDates } from '../utils/dateUtils';
import { parseISO } from 'date-fns';
import mockData from '../data/mock.json';

interface ConstructionStore {
    tasks: ConstructionTask[];
    milestones: Milestone[];
    holidays: Date[];
    calendarSettings: CalendarSettings;
    currentView: 'MASTER' | 'DETAIL';
    activeSummaryId: string | null;
    zoomLevel: 'DAY' | 'WEEK' | 'MONTH';

    setTasks: (tasks: ConstructionTask[]) => void;
    setCurrentView: (view: 'MASTER' | 'DETAIL', summaryId?: string | null) => void;
    setCalendarSettings: (settings: Partial<CalendarSettings>) => void;
    setZoomLevel: (level: 'DAY' | 'WEEK' | 'MONTH') => void;

    updateTaskDuration: (id: string, netWorkDays: number, indirectWorkDays: number) => void;
    updateTaskPlacement: (id: string, placement: Placement) => void;

    addDependency: (taskId: string, dependency: Dependency) => void;

    // Tree Grid State
    expandedTaskIds: string[];
    toggleTask: (taskId: string) => void;
    expandAll: () => void;
    collapseAll: () => void;

    // Helper to trigger recalculation
    recalculateAll: () => void;
}

// Parse Mock Data
const parseMockData = () => {
    const milestones = mockData.milestones.map(m => ({
        ...m,
        date: parseISO(m.date),
        type: 'MILESTONE' as const
    }));

    const tasks = mockData.tasks.map(t => ({
        ...t,
        wbsLevel: t.wbsLevel as 1 | 2,
        type: t.type as 'GROUP' | 'SUMMARY' | 'TASK',
        startDate: parseISO(t.startDate),
        endDate: parseISO(t.endDate),
        summary: t.summary ? { ...t.summary } : undefined,
        task: t.task ? {
            ...t.task,
            placement: t.task.placement as 'PRE' | 'POST'
        } : undefined,
        dependencies: t.dependencies.map(d => ({
            ...d,
            type: d.type as 'FS' | 'SS' | 'FF' | 'SF',
            sourceAnchor: d.sourceAnchor as any,
            targetAnchor: d.targetAnchor as any
        }))
    }));

    return { milestones, tasks };
};

const { milestones: initialMilestones, tasks: initialTasks } = parseMockData();

export const useConstructionStore = create<ConstructionStore>((set, get) => ({
    tasks: initialTasks,
    milestones: initialMilestones,
    holidays: [parseISO('2024-05-05'), parseISO('2024-06-06'), parseISO('2024-08-15'), parseISO('2024-10-03'), parseISO('2024-12-25')],
    calendarSettings: {
        workOnSaturdays: false,
        workOnSundays: false,
        workOnHolidays: false
    },
    currentView: 'MASTER',
    activeSummaryId: null,
    zoomLevel: 'DAY',

    // Initialize with all tasks expanded
    expandedTaskIds: initialTasks.map(t => t.id),

    toggleTask: (taskId) => set((state) => {
        const isExpanded = state.expandedTaskIds.includes(taskId);
        return {
            expandedTaskIds: isExpanded
                ? state.expandedTaskIds.filter(id => id !== taskId)
                : [...state.expandedTaskIds, taskId]
        };
    }),

    expandAll: () => set((state) => ({
        expandedTaskIds: state.tasks.map(t => t.id)
    })),

    collapseAll: () => set({ expandedTaskIds: [] }),


    setTasks: (tasks) => set({ tasks }),

    setCurrentView: (view, summaryId) => set({ currentView: view, activeSummaryId: summaryId }),

    setCalendarSettings: (newSettings) => {
        set(state => ({
            calendarSettings: { ...state.calendarSettings, ...newSettings }
        }));
        get().recalculateAll();
    },

    setZoomLevel: (level) => set({ zoomLevel: level }),

    updateTaskDuration: (id, netWorkDays, indirectWorkDays) => {
        set(state => {
            const updatedTasks = state.tasks.map(t => {
                if (t.id === id && t.task) {
                    return {
                        ...t,
                        task: { ...t.task, netWorkDays, indirectWorkDays }
                    };
                }
                return t;
            });
            return { tasks: updatedTasks };
        });
        get().recalculateAll();
    },

    updateTaskPlacement: (id, placement) => {
        set(state => {
            const updatedTasks = state.tasks.map(t => {
                if (t.id === id && t.task) {
                    return {
                        ...t,
                        task: { ...t.task, placement }
                    };
                }
                return t;
            });
            return { tasks: updatedTasks };
        });
        get().recalculateAll();
    },

    addDependency: (taskId: string, dependency: Dependency) => {
        set(state => {
            const updatedTasks = state.tasks.map(t => {
                if (t.id === taskId) {
                    return {
                        ...t,
                        dependencies: [...t.dependencies, dependency]
                    };
                }
                return t;
            });
            return { tasks: updatedTasks };
        });
        get().recalculateAll();
    },

    recalculateAll: () => {
        const { tasks, holidays, calendarSettings } = get();

        // 1. Recalculate L2 Tasks (Dates)
        const calculatedL2 = tasks.map(t => {
            if (t.wbsLevel === 2 && t.task) {
                const dates = calculateDualCalendarDates(t, holidays, calendarSettings);
                return { ...t, startDate: dates.startDate, endDate: dates.endDate };
            }
            return t;
        });

        // 2. Aggregate to L1 (Summary)
        const summaryMap = new Map<string, { work: number, nonWork: number, minStart: Date, maxEnd: Date }>();

        calculatedL2.forEach(t => {
            if (t.parentId && t.wbsLevel === 2 && t.task) {
                const current = summaryMap.get(t.parentId) || {
                    work: 0,
                    nonWork: 0,
                    minStart: new Date(8640000000000000),
                    maxEnd: new Date(-8640000000000000)
                };

                current.work += t.task.netWorkDays;
                current.nonWork += t.task.indirectWorkDays;
                if (t.startDate < current.minStart) current.minStart = t.startDate;
                if (t.endDate > current.maxEnd) current.maxEnd = t.endDate;

                summaryMap.set(t.parentId, current);
            }
        });

        // 3. Update L1 Tasks
        const finalTasks = calculatedL2.map(t => {
            if (t.wbsLevel === 1 && summaryMap.has(t.id)) {
                const agg = summaryMap.get(t.id)!;
                return {
                    ...t,
                    startDate: agg.minStart,
                    endDate: agg.maxEnd,
                    summary: {
                        workDaysTotal: agg.work,
                        nonWorkDaysTotal: agg.nonWork
                    }
                };
            }
            return t;
        });

        set({ tasks: finalTasks });
    }
}));
