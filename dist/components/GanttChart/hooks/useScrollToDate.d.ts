import { ConstructionTask, Milestone, ViewMode, ZoomLevel } from '../../../types';

interface UseScrollToDateOptions {
    scrollRef: React.RefObject<HTMLDivElement | null>;
    viewMode: ViewMode;
    activeCPId: string | null;
    zoomLevel: ZoomLevel;
    sidebarWidth: number;
    tasks: ConstructionTask[];
    visibleTasks: ConstructionTask[];
    milestones: Milestone[];
}
export declare const useScrollToDate: ({ scrollRef, viewMode, activeCPId, zoomLevel, sidebarWidth, tasks, visibleTasks, milestones, }: UseScrollToDateOptions) => {
    scrollToDate: (targetDate: Date, align?: "left" | "center") => void;
    scrollToFirstTask: () => void;
};
export {};
