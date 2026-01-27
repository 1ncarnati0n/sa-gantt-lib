import { ConstructionTask, Milestone, Dependency, ViewMode, ZoomLevel, DropPosition, GroupDragResult, AnchorDependency, AnchorDependencyDragResult } from './core';
import { CalendarSettings } from './calendar';
import { GanttErrorContext } from './ui';

/** 메인 GanttChart Props */
export interface GanttChartProps {
    tasks: ConstructionTask[];
    milestones?: Milestone[];
    holidays?: Date[];
    calendarSettings?: CalendarSettings;
    initialView?: ViewMode;
    initialZoomLevel?: ZoomLevel;
    initialExpandedIds?: string[];
    onTaskUpdate?: (task: ConstructionTask) => void | Promise<void>;
    onTaskCreate?: (task: Partial<ConstructionTask>) => void | Promise<void>;
    onTaskDelete?: (taskId: string) => void | Promise<void>;
    onTaskReorder?: (taskId: string, newIndex: number) => void | Promise<void>;
    onDependencyCreate?: (taskId: string, dependency: Dependency) => void | Promise<void>;
    onDependencyDelete?: (taskId: string, dependencyId: string) => void | Promise<void>;
    onViewChange?: (view: ViewMode, activeCPId?: string) => void;
    onTaskGroup?: (taskIds: string[]) => void | Promise<void>;
    onTaskUngroup?: (groupId: string) => void | Promise<void>;
    onTaskMove?: (taskId: string, targetId: string, position: DropPosition) => void | Promise<void>;
    onGroupDrag?: (result: GroupDragResult) => void | Promise<void>;
    anchorDependencies?: AnchorDependency[];
    onAnchorDependencyCreate?: (dependency: AnchorDependency) => void | Promise<void>;
    onAnchorDependencyDelete?: (depId: string) => void | Promise<void>;
    onAnchorDependencyDrag?: (result: AnchorDependencyDragResult) => void | Promise<void>;
    /** 순환 종속성 감지 시 호출되는 콜백 */
    onCycleDetected?: (info: {
        sourceTaskId: string;
        targetTaskId: string;
    }) => void;
    onMilestoneCreate?: (milestone: Partial<Milestone>) => void | Promise<void>;
    onMilestoneUpdate?: (milestone: Milestone) => void | Promise<void>;
    onMilestoneDelete?: (milestoneId: string) => void | Promise<void>;
    onSave?: () => void;
    onReset?: () => void;
    hasUnsavedChanges?: boolean;
    saveStatus?: 'idle' | 'saving' | 'saved';
    onExport?: () => void;
    onExportExcel?: () => void;
    onImport?: (file: File) => void | Promise<void>;
    loadedFileName?: string | null;
    /** 에러 발생 시 호출되는 콜백 (사용자 알림용) */
    onError?: (error: Error, context: GanttErrorContext) => void;
    className?: string;
    style?: React.CSSProperties;
}
/** Sidebar Props */
export interface GanttSidebarProps {
    tasks: ConstructionTask[];
    viewMode: ViewMode;
    expandedIds: Set<string>;
    onToggle: (taskId: string) => void;
    onTaskClick: (task: ConstructionTask) => void;
}
/** Timeline Props */
export interface GanttTimelineProps {
    tasks: ConstructionTask[];
    milestones: Milestone[];
    viewMode: ViewMode;
    zoomLevel: ZoomLevel;
    holidays: Date[];
    calendarSettings: CalendarSettings;
    onTaskUpdate?: (task: ConstructionTask) => void;
}
