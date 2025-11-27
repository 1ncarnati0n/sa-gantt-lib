// Native Date is used


export type CalendarRule = 'WORKING_DAY_ONLY' | 'INCLUDE_HOLIDAYS';
export type Placement = 'PRE' | 'POST';
export type TaskType = 'MILESTONE' | 'SUMMARY' | 'TASK';

export interface Dependency {
  predecessorId: string;
  type: 'FS' | 'SS' | 'FF' | 'SF';
  lag: number;
}

export interface ConstructionTask {
  id: string;
  parentId: string | null;
  type: TaskType;
  name: string;

  // Duration Data
  workDays: number;     // Vermilion
  nonWorkDays: number;  // Teal
  nonWorkPlacement: Placement;

  // Calendar Rules
  workDayRule?: CalendarRule;
  nonWorkDayRule?: CalendarRule;

  // Scheduling Results
  startDate: Date;
  endDate?: Date;

  dependencies: Dependency[];
}

export interface Milestone {
  id: string;
  date: Date;
  name: string;
  type: 'MILESTONE';
}
