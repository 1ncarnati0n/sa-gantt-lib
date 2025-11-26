import { GanttTask, GanttLink } from './types';

interface GanttRootProps {
    tasks: GanttTask[];
    links?: GanttLink[];
}
export declare function GanttRoot({ tasks, links }: GanttRootProps): import("react/jsx-runtime").JSX.Element;
export {};
