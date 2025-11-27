import { create } from 'zustand';
import { ConstructionTask, Milestone, CalendarRule } from '../types/gantt';
import { addDays, getDay, format, parseISO } from 'date-fns';

interface ConstructionStore {
    tasks: ConstructionTask[];
    milestones: Milestone[];
    holidays: Date[];

    calculateDates: (task: ConstructionTask) => Date;
    updateTaskDuration: (id: string, newWorkDays: number, newNonWorkDays: number) => void;
    updateMilestone: (id: string, newDate: Date) => void;
    setTasks: (tasks: ConstructionTask[]) => void; // For flexibility
}

// Initial Data from MVP
const initialTasks: ConstructionTask[] = [
    { id: 'g-1', parentId: null, type: 'SUMMARY', name: '가시설 및 터파기', workDays: 0, nonWorkDays: 0, nonWorkPlacement: 'POST', startDate: parseISO('2025-10-01'), dependencies: [] },
    { id: 't-1-1', parentId: 'g-1', type: 'TASK', name: '말뚝박기용 천공 (H-Pile)', workDays: 2, nonWorkDays: 3, nonWorkPlacement: 'PRE', startDate: parseISO('2025-10-01'), dependencies: [], workDayRule: 'WORKING_DAY_ONLY', nonWorkDayRule: 'INCLUDE_HOLIDAYS' },
    { id: 't-1-2', parentId: 'g-1', type: 'TASK', name: '토사 굴착 (터파기)', workDays: 15, nonWorkDays: 2, nonWorkPlacement: 'POST', startDate: parseISO('2025-10-06'), dependencies: [{ predecessorId: 't-1-1', type: 'FS', lag: 0 }], workDayRule: 'WORKING_DAY_ONLY', nonWorkDayRule: 'INCLUDE_HOLIDAYS' },
    { id: 't-1-3', parentId: 'g-1', type: 'TASK', name: '수평 지보공 설치', workDays: 7, nonWorkDays: 0, nonWorkPlacement: 'POST', startDate: parseISO('2025-10-10'), dependencies: [], workDayRule: 'WORKING_DAY_ONLY', nonWorkDayRule: 'INCLUDE_HOLIDAYS' },

    { id: 'g-2', parentId: null, type: 'SUMMARY', name: '기초 공사', workDays: 0, nonWorkDays: 0, nonWorkPlacement: 'POST', startDate: parseISO('2025-10-28'), dependencies: [{ predecessorId: 't-1-2', type: 'FS', lag: 0 }] },
    { id: 't-2-1', parentId: 'g-2', type: 'TASK', name: '기성말뚝 기초', workDays: 9, nonWorkDays: 5, nonWorkPlacement: 'POST', startDate: parseISO('2025-10-28'), dependencies: [], workDayRule: 'WORKING_DAY_ONLY', nonWorkDayRule: 'INCLUDE_HOLIDAYS' },
    { id: 't-2-2', parentId: 'g-2', type: 'TASK', name: '콘크리트 말뚝 두부 정리', workDays: 4, nonWorkDays: 1, nonWorkPlacement: 'POST', startDate: parseISO('2025-11-08'), dependencies: [{ predecessorId: 't-2-1', type: 'FS', lag: 0 }], workDayRule: 'WORKING_DAY_ONLY', nonWorkDayRule: 'INCLUDE_HOLIDAYS' },
];

const initialMilestones: Milestone[] = [
    { id: 'm-1', date: parseISO('2025-09-30'), name: '공사 착공', type: 'MILESTONE' },
    { id: 'm-2', date: parseISO('2025-11-20'), name: '기초 완료', type: 'MILESTONE' },
];

export const useConstructionStore = create<ConstructionStore>((set, get) => ({
    tasks: initialTasks,
    milestones: initialMilestones,
    holidays: [parseISO('2025-10-03'), parseISO('2025-10-09')],

    setTasks: (tasks) => set({ tasks }),

    calculateDates: (task: ConstructionTask): Date => {
        const { startDate, workDays, nonWorkDays, nonWorkPlacement } = task;

        const getNextWorkDay = (currentDate: Date, daysToAdd: number, rule: CalendarRule = 'WORKING_DAY_ONLY'): Date => {
            let count = 0;
            let date = currentDate;
            while (count < daysToAdd) {
                date = addDays(date, 1);
                const dayOfWeek = getDay(date);
                const isHoliday = get().holidays.some(h => format(h, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd'));

                if (rule === 'WORKING_DAY_ONLY' && (dayOfWeek === 0 || dayOfWeek === 6 || isHoliday)) {
                    continue; // Skip weekends/holidays
                }
                count++;
            }
            return date;
        };

        const calculateSegment = (segmentStart: Date, duration: number, rule?: CalendarRule): Date =>
            getNextWorkDay(segmentStart, duration, rule || 'WORKING_DAY_ONLY');

        const finalStart = startDate;
        let finalEnd: Date;

        if (nonWorkPlacement === 'PRE') {
            const nonWorkEnd = calculateSegment(finalStart, nonWorkDays, task.nonWorkDayRule);
            finalEnd = calculateSegment(nonWorkEnd, workDays, task.workDayRule);
        } else {
            const workEnd = calculateSegment(finalStart, workDays, task.workDayRule);
            finalEnd = calculateSegment(workEnd, nonWorkDays, task.nonWorkDayRule);
        }

        return finalEnd;
    },

    updateTaskDuration: (id: string, newWorkDays: number, newNonWorkDays: number) => {
        set(state => {
            const updatedTasks = state.tasks.map(task => {
                if (task.id === id && task.type === 'TASK') {
                    const updatedTask: ConstructionTask = {
                        ...task,
                        workDays: newWorkDays,
                        nonWorkDays: newNonWorkDays
                    };
                    // Recalculate dates
                    updatedTask.endDate = get().calculateDates(updatedTask);
                    return updatedTask;
                }
                return task;
            });
            return { tasks: updatedTasks };
        });
    },

    updateMilestone: (id: string, newDate: Date) => {
        set(state => ({
            milestones: state.milestones.map(m => m.id === id ? { ...m, date: newDate } : m)
        }));
    }
}));
