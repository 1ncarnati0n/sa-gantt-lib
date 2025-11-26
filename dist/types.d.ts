export type ViewMode = 'day' | 'week' | 'month' | 'year';
export interface GanttTask {
    id: string;
    text: string;
    start_date: Date;
    end_date: Date;
    duration: number;
    progress: number;
    parent: string | number;
    type?: 'task' | 'project' | 'milestone';
    open?: boolean;
    [key: string]: unknown;
}
export interface GanttLink {
    id: string;
    source: string;
    target: string;
    type: string;
}
export interface ColumnConfig {
    id: string;
    header: string;
    width: number;
    template?: (task: GanttTask) => React.ReactNode;
}
export interface TimeScale {
    unit: ViewMode;
    step: number;
    cellWidth: number;
    date: (date: Date) => Date;
}
