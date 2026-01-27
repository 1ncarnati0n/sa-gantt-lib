import { ConstructionTask, Milestone, ViewMode, ZoomLevel, CalendarSettings, GroupDragResult, AnchorDependency, AnchorDependencyDragResult } from '../../types';
import { VirtualRow } from '../../hooks/useGanttVirtualization';
import { BarDragResult } from './types';

export type { BarDragResult };
interface GanttTimelineProps {
    tasks: ConstructionTask[];
    allTasks?: ConstructionTask[];
    milestones: Milestone[];
    viewMode: ViewMode;
    zoomLevel: ZoomLevel;
    holidays: Date[];
    calendarSettings: CalendarSettings;
    onTaskUpdate?: (task: ConstructionTask) => void;
    onBarDrag?: (result: BarDragResult) => void;
    onGroupDrag?: (result: GroupDragResult) => void;
    onMilestoneUpdate?: (milestone: Milestone) => void;
    onMilestoneDoubleClick?: (milestone: Milestone) => void;
    onTaskDoubleClick?: (task: ConstructionTask) => void;
    virtualRows?: VirtualRow[];
    totalHeight?: number;
    showCriticalPath?: boolean;
    onGroupToggle?: (taskId: string) => void;
    activeCPId?: string | null;
    onContextMenuAddTask?: (date: Date) => void;
    onContextMenuAddMilestone?: (date: Date) => void;
    anchorDependencies?: AnchorDependency[];
    onAnchorDependencyCreate?: (dependency: AnchorDependency) => void;
    onAnchorDependencyDelete?: (depId: string) => void;
    onAnchorDependencyDrag?: (result: AnchorDependencyDragResult) => void;
    onCycleDetected?: (info: {
        sourceTaskId: string;
        targetTaskId: string;
    }) => void;
    focusedTaskId?: string | null;
    renderMode?: 'header' | 'content' | 'all';
    rowHeight?: number;
    barHeight?: number;
}
export declare const GanttTimeline: import('react').ForwardRefExoticComponent<GanttTimelineProps & import('react').RefAttributes<HTMLDivElement>>;
