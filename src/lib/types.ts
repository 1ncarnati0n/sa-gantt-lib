export type ViewMode = 'day' | 'week' | 'month' | 'year';

export interface GanttTask {
  id: string;
  text: string;
  start_date: Date;
  end_date: Date; // Exclusive end date (00:00 of the next day)
  duration: number;
  progress: number;
  parent: string | number; // 0 or "0" for root
  type?: 'task' | 'project' | 'milestone';
  open?: boolean; // For tree expansion
  [key: string]: unknown;
}

export interface GanttLink {
  id: string;
  source: string;
  target: string;
  type: string; // "0" (finish_to_start), "1" (start_to_start), etc.
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
  date: (date: Date) => Date; // Normalization function
}
