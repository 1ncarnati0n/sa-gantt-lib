import { ConstructionTask, GroupDragResult, CalendarSettings } from '../../../types';

interface UseGroupDragOptions {
    pixelsPerDay: number;
    allTasks: ConstructionTask[];
    holidays: Date[];
    calendarSettings: CalendarSettings;
    onGroupDrag?: (result: GroupDragResult) => void;
}
export declare const useGroupDrag: ({ pixelsPerDay, allTasks, holidays, calendarSettings, onGroupDrag, }: UseGroupDragOptions) => {
    isDragging: boolean;
    handleGroupBarMouseDown: (e: React.MouseEvent, groupId: string, taskData: {
        startDate: Date;
        endDate: Date;
    }) => void;
    getGroupDragDeltaDays: (groupId: string) => number;
    getTaskGroupDragDeltaDays: (taskId: string) => number;
    getTaskDragInfo: (taskId: string) => {
        startDate: Date;
        endDate: Date;
    } | null;
};
export {};
