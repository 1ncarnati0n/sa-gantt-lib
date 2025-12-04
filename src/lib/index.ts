/**
 * SA-Gantt-Lib
 * 건설 공정표 전문 간트 차트 라이브러리
 * 
 * @example
 * ```tsx
 * import { GanttChart, ConstructionTask, Milestone } from 'sa-gantt-lib';
 * 
 * const tasks: ConstructionTask[] = [...];
 * const milestones: Milestone[] = [...];
 * 
 * function App() {
 *   return (
 *     <GanttChart
 *       tasks={tasks}
 *       milestones={milestones}
 *       onTaskUpdate={(task) => console.log('Updated:', task)}
 *     />
 *   );
 * }
 * ```
 */

// ============================================
// Styles
// ============================================
import './style.css';

// ============================================
// Components
// ============================================
export { GanttChart } from './components/GanttChart';
export { GanttSidebar } from './components/GanttSidebar';
export { GanttTimeline } from './components/GanttTimeline';
export { TaskEditModal } from './components/TaskEditModal';
export { CriticalPathBar } from './components/CriticalPathBar';
export type { BarDragResult } from './components/GanttTimeline';

// ============================================
// Store (UI State Management)
// ============================================
export {
    useGanttStore,
    useGanttViewState,
    useGanttViewActions,
    useGanttSelection,
    useGanttExpansion,
    useGanttSidebar,
    useGanttDrag,
} from './store/useGanttStore';

// ============================================
// Hooks
// ============================================
export { useGanttVirtualization } from './hooks/useGanttVirtualization';
export type { VirtualRow, UseGanttVirtualizationOptions } from './hooks/useGanttVirtualization';

export { useHistory } from './hooks/useHistory';

// ============================================
// Types
// ============================================
export type {
    // Core Types
    ConstructionTask,
    Milestone,
    Dependency,
    
    // Data Types
    CPData,
    TaskData,
    TaskDates,
    
    // Enum Types
    WbsLevel,
    ZoomLevel,
    ViewMode,
    Placement,
    AnchorPoint,
    DependencyType,
    TaskType,
    DropPosition,
    
    // Settings
    CalendarSettings,
    Holiday,
    
    // Props
    GanttChartProps,
    GanttSidebarProps,
    GanttTimelineProps,
    
    // Store
    GanttUIState,
    GanttUIActions,
    GanttStore,
    
    // Utility Types
    DateRange,
    Point,
    Rect,

    // Critical Path Types
    CriticalPathDay,
    CriticalPathSummary,
} from './types';

// ============================================
// Constants
// ============================================
export {
    GANTT_COLORS,
    GANTT_LAYOUT,
    ZOOM_CONFIG,
} from './types';

// ============================================
// Utilities
// ============================================
export {
    // Holiday/Weekend
    isHoliday,
    isWeekend,
    
    // Working Days Calculation
    addWorkingDays,
    subtractWorkingDays,
    addCalendarDays,
    
    // Dual Calendar (Construction-specific)
    calculateDualCalendarDates,
    getAnchorDate,
    
    // Pixel/Date Conversion
    dateToX,
    xToDate,
    getDateRangeWidth,
    getPixelsPerDay,
    
    // Date Range
    calculateDateRange,
} from './utils/dateUtils';

// Critical Path Utilities
export {
    calculateCriticalPath,
    formatCriticalPathSummary,
} from './utils/criticalPathUtils';
