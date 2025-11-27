export type CalendarRule = 'WORKING_DAY_ONLY' | 'INCLUDE_HOLIDAYS';
export type Placement = 'PRE' | 'POST';
export type TaskType = 'MILESTONE' | 'SUMMARY' | 'TASK';
export type WbsLevel = 1 | 2;
export type AnchorPoint = 'START' | 'NET_WORK_START' | 'NET_WORK_END' | 'END';

export interface CalendarSettings {
  workOnSaturdays: boolean;
  workOnSundays: boolean;
  workOnHolidays: boolean; // If true, specific holidays are treated as working days
}

export interface Dependency {
  id: string; // Unique ID for the dependency
  predecessorId: string;
  type: 'FS' | 'SS' | 'FF' | 'SF';
  lag: number;
  sourceAnchor: AnchorPoint;
  targetAnchor: AnchorPoint;
}

export interface ConstructionTask {
  id: string;
  parentId: string | null;
  wbsLevel: WbsLevel; // 1: Lot Schedule (CP), 2: CP Schedule (Task)
  type: TaskType;
  name: string;

  // --- Level 1 Fields (Lot Schedule) ---
  // Aggregated data from children
  summary?: {
    workDaysTotal: number;    // Vermilion
    nonWorkDaysTotal: number; // Teal
  };

  // --- Level 2 Fields (CP Schedule) ---
  // Detailed unit task data
  task?: {
    netWorkDays: number;      // Red (Direct Work)
    indirectWorkDays: number; // Blue (Indirect Work)
    placement: Placement;     // PRE or POST

    // Engineering Data (for Phase 2 automation)
    quantity?: number;
    dailyOutput?: number;
    crew?: number;
  };

  // Common Scheduling Results
  startDate: Date;
  endDate: Date;

  dependencies: Dependency[];

  // UI State
  isExpanded?: boolean;
}

export interface Milestone {
  id: string;
  date: Date;
  name: string;
  type: 'MILESTONE';
  description?: string;
}
