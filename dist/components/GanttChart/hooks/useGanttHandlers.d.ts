import { ConstructionTask, Milestone, ViewMode, CalendarSettings, GroupDragResult, GanttErrorContext } from '../../../types';
import { BarDragResult } from '../../GanttTimeline';

interface UseGanttHandlersOptions {
    tasks: ConstructionTask[];
    milestones: Milestone[];
    viewMode: ViewMode;
    activeCPId: string | null;
    holidays: Date[];
    calendarSettings: CalendarSettings;
    onTaskUpdate?: (task: ConstructionTask) => void;
    onTaskCreate?: (task: Partial<ConstructionTask>) => void;
    onTaskDelete?: (taskId: string) => void;
    onMilestoneCreate?: (milestone: Milestone) => void;
    onMilestoneUpdate?: (milestone: Milestone) => void;
    onMilestoneDelete?: (milestoneId: string) => void;
    onGroupDrag?: (result: GroupDragResult) => void;
    onViewChange?: (mode: ViewMode, cpId?: string) => void;
    onError?: (error: Error, context: GanttErrorContext) => void;
    setViewMode: (mode: ViewMode, cpId?: string) => void;
}
interface UseGanttHandlersReturn {
    editingMilestone: Milestone | null;
    isEditModalOpen: boolean;
    isNewMilestone: boolean;
    editingTask: ConstructionTask | null;
    isTaskEditModalOpen: boolean;
    handleViewChange: (mode: ViewMode, cpId?: string) => void;
    handleTaskClick: (task: ConstructionTask) => void;
    handleMilestoneDoubleClick: (milestone: Milestone) => void;
    handleStartAddMilestone: () => void;
    handleContextMenuAddMilestone: (date: Date) => void;
    handleCloseEditModal: () => void;
    handleMilestoneSave: (milestone: Milestone) => void;
    handleMilestoneDelete: (milestoneId: string) => void;
    handleTaskDoubleClick: (task: ConstructionTask) => void;
    handleContextMenuAddTask: (date: Date) => void;
    handleCloseTaskEditModal: () => void;
    handleTaskEditSave: (task: ConstructionTask) => void;
    handleTaskEditDelete: (taskId: string) => void;
    handleBarDrag: (result: BarDragResult) => Promise<void>;
    handleGroupDrag: (result: GroupDragResult) => Promise<void>;
}
export declare const useGanttHandlers: ({ tasks, milestones, viewMode, activeCPId, holidays, calendarSettings, onTaskUpdate, onTaskCreate, onTaskDelete, onMilestoneCreate, onMilestoneUpdate, onMilestoneDelete, onGroupDrag, onViewChange, onError, setViewMode, }: UseGanttHandlersOptions) => UseGanttHandlersReturn;
export {};
