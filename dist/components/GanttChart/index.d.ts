import { BarDragResult } from '../GanttTimeline';
import { GanttChartProps } from '../../types';

export type { BarDragResult };
export declare function GanttChart({ tasks, milestones, holidays, calendarSettings, initialView, initialZoomLevel, initialExpandedIds, onTaskUpdate, onTaskCreate, onTaskDelete, onTaskReorder, onTaskGroup, onTaskUngroup, onTaskMove, onGroupDrag, onViewChange, anchorDependencies, onAnchorDependencyCreate, onAnchorDependencyDelete, onAnchorDependencyDrag, onCycleDetected, onMilestoneCreate, onMilestoneUpdate, onMilestoneDelete, onSave, onReset, hasUnsavedChanges, saveStatus, onExport, onExportExcel, onImport, loadedFileName, onError, className, style, }: GanttChartProps): import("react/jsx-runtime").JSX.Element;
