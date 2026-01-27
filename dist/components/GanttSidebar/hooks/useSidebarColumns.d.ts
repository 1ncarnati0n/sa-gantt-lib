import { ConstructionTask, ViewMode, CriticalPathSummary } from '../../../types';

interface UseSidebarColumnsOptions {
    viewMode: ViewMode;
    tasks: ConstructionTask[];
    allTasks: ConstructionTask[];
    activeCPId?: string | null;
    cpSummaryMap: Map<string, CriticalPathSummary>;
    onTotalWidthChange?: (width: number) => void;
    onTaskReorder?: (taskId: string, newIndex: number) => void;
}
export declare const useSidebarColumns: ({ viewMode, tasks, allTasks, activeCPId, cpSummaryMap, onTotalWidthChange, onTaskReorder, }: UseSidebarColumnsOptions) => {
    columns: {
        width: number;
        id: string;
        label: string;
        minWidth: number;
    }[];
    totalWidth: number;
    dragHandleWidth: number;
    resizingIndex: number | null;
    handleColumnResizeStart: (e: React.MouseEvent, columnIndex: number) => void;
    handleColumnResizeDoubleClick: (e: React.MouseEvent, columnIndex: number) => void;
    getGroupDepth: (task: ConstructionTask) => number;
    getMasterGroupDepth: (task: ConstructionTask) => number;
    getUnifiedDepth: (task: ConstructionTask) => number;
    calculateOptimalWidth: (columnIndex: number) => number;
};
export {};
