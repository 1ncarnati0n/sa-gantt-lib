import { ConstructionTask, ViewMode, ZoomLevel } from '../../../types';

interface UseGanttInitOptions {
    tasks: ConstructionTask[];
    initialView: ViewMode;
    initialZoomLevel: ZoomLevel;
    initialExpandedIds?: string[];
    setViewMode: (mode: ViewMode, cpId?: string) => void;
    setZoomLevel: (level: ZoomLevel) => void;
    expandAll: (ids: string[]) => void;
    collapseAll: () => void;
}
export declare const useGanttInit: ({ tasks, initialView, initialZoomLevel, initialExpandedIds, setViewMode, setZoomLevel, expandAll, collapseAll, }: UseGanttInitOptions) => void;
export {};
