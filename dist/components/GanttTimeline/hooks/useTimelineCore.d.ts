import { ConstructionTask, Milestone, ViewMode, ZoomLevel, CalendarSettings, AnchorDependency, AnchorDependencyDragResult, GroupDragResult } from '../../../types';
import { VirtualRow } from '../../../hooks/useGanttVirtualization';
import { useGanttSelection } from '../../../store/useGanttStore';
import { BarDragResult, DragInfo, DragType, MilestoneWithLayout } from '../types';

export interface UseTimelineCoreProps {
    tasks: ConstructionTask[];
    allTasks?: ConstructionTask[];
    milestones: Milestone[];
    viewMode: ViewMode;
    zoomLevel: ZoomLevel;
    holidays: Date[];
    calendarSettings: CalendarSettings;
    virtualRows?: VirtualRow[];
    totalHeight?: number;
    rowHeight?: number;
    barHeight?: number;
    focusedTaskId?: string | null;
    onBarDrag?: (result: BarDragResult) => void;
    onGroupDrag?: (result: GroupDragResult) => void;
    onMilestoneUpdate?: (milestone: Milestone) => void;
    onMilestoneDoubleClick?: (milestone: Milestone) => void;
    onTaskDoubleClick?: (task: ConstructionTask) => void;
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
}
export interface TimelineCoreValues {
    pixelsPerDay: number;
    isMasterView: boolean;
    isUnifiedView: boolean;
    isVirtualized: boolean;
    isCompact: boolean;
    effectiveRowHeight: number;
    effectiveBarHeight: number;
    minDate: Date;
    totalDays: number;
    chartWidth: number;
    chartHeight: number;
    taskAreaHeight: number;
    dynamicTotalHeight: number;
    taskMap: Map<string, ConstructionTask>;
    rowData: VirtualRow[];
    fullRowData: VirtualRow[];
    filteredMilestones: Milestone[];
    milestoneLayouts: MilestoneWithLayout[];
    getRowHeight: (task: ConstructionTask) => number;
    isBlockTask: (task: ConstructionTask) => boolean;
}
export interface TimelineDragHandlers {
    handleBarMouseDown: (e: React.MouseEvent, taskId: string, dragType: DragType, taskData: {
        startDate: Date;
        endDate: Date;
        indirectWorkDaysPre: number;
        netWorkDays: number;
        indirectWorkDaysPost: number;
    }) => void;
    getDragInfo: (taskId: string) => DragInfo | null;
    handleMilestoneMouseDown: (e: React.MouseEvent, milestone: Milestone) => void;
    getMilestoneDragX: (milestoneId: string) => number | undefined;
    isMilestoneDragging: (milestoneId: string) => boolean;
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
    handleDependencyBarMouseDown: (e: React.MouseEvent, taskId: string, taskData: {
        startDate: Date;
        endDate: Date;
    }) => boolean | void;
    isDependencyDragging: boolean;
    taskHasDependency: (taskId: string) => boolean;
    getDependencyDragDeltaDays: (taskId: string) => number;
    getDependencyDragInfo: (taskId: string) => {
        startDate: Date;
        endDate: Date;
    } | null;
    getConnectedTaskIds: () => string[];
    getCombinedTaskDeltaDays: (taskId: string) => number;
    connectingFrom: {
        taskId: string;
        dayIndex: number;
    } | null;
    hoveredAnchor: {
        taskId: string;
        dayIndex: number;
    } | null;
    selectedDepId: string | null;
    hoveredDepId: string | null;
    handleAnchorClick: (taskId: string, dayIndex: number) => void;
    handleAnchorHover: (taskId: string, dayIndex: number | null) => void;
    handleDependencyClick: (depId: string) => void;
    handleDependencyHover: (depId: string | null) => void;
    clearSelection: () => void;
}
export interface TimelineEventHandlers {
    selectTask: ReturnType<typeof useGanttSelection>['selectTask'];
    clearTaskSelection: ReturnType<typeof useGanttSelection>['clearSelection'];
    handleMilestoneDoubleClick: (milestone: Milestone) => void;
    handleContextMenu: (e: React.MouseEvent<SVGSVGElement>) => void;
    handleContextMenuClose: () => void;
    handleSvgClick: (e: React.MouseEvent<SVGSVGElement>) => void;
    handleDepDelete: (depId: string) => void;
    setHoveredTaskId: (taskId: string | null) => void;
}
export interface TimelineContextMenuState {
    contextMenu: {
        x: number;
        y: number;
        clickedDate: Date;
    } | null;
}
export interface UseTimelineCoreReturn {
    values: TimelineCoreValues;
    dragHandlers: TimelineDragHandlers;
    eventHandlers: TimelineEventHandlers;
    contextMenuState: TimelineContextMenuState;
}
export declare const useTimelineCore: (props: UseTimelineCoreProps) => UseTimelineCoreReturn;
