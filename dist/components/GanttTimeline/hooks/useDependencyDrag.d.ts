import { ConstructionTask, AnchorDependency, AnchorDependencyDragResult, CalendarSettings } from '../../../types';
import { BaseDragOptions } from '../types';

interface UseDependencyDragOptions extends BaseDragOptions {
    holidays: Date[];
    calendarSettings: CalendarSettings;
    allTasks: ConstructionTask[];
    dependencies: AnchorDependency[];
    onDependencyDrag?: (result: AnchorDependencyDragResult) => void;
}
export declare const useDependencyDrag: ({ pixelsPerDay, holidays, calendarSettings, allTasks, dependencies, onDependencyDrag, }: UseDependencyDragOptions) => {
    isDragging: boolean;
    taskHasDependency: (taskId: string) => boolean;
    handleDependencyBarMouseDown: (e: React.MouseEvent, taskId: string, taskData: {
        startDate: Date;
        endDate: Date;
    }) => boolean;
    isDraggingTask: (taskId: string) => boolean;
    getTaskDeltaDays: (taskId: string) => number;
    getTaskDragInfo: (taskId: string) => {
        startDate: Date;
        endDate: Date;
    } | null;
    getConnectedTaskIds: () => string[];
};
export {};
