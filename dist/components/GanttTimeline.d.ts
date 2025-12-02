import { default as React } from 'react';
import { ConstructionTask, Milestone, ViewMode, ZoomLevel, CalendarSettings } from '../types';
import { VirtualRow } from '../hooks/useGanttVirtualization';

/** 드래그 타입 */
type DragType = 'move' | 'resize-pre' | 'resize-post';
/** Bar 드래그 결과 콜백 파라미터 */
export interface BarDragResult {
    taskId: string;
    dragType: DragType;
    newStartDate: Date;
    newEndDate: Date;
    newIndirectWorkDaysPre: number;
    newIndirectWorkDaysPost: number;
}
interface GanttTimelineProps {
    tasks: ConstructionTask[];
    milestones: Milestone[];
    viewMode: ViewMode;
    zoomLevel: ZoomLevel;
    holidays: Date[];
    calendarSettings: CalendarSettings;
    onTaskUpdate?: (task: ConstructionTask) => void;
    /** Bar 드래그로 날짜/일수 변경 콜백 */
    onBarDrag?: (result: BarDragResult) => void;
    /** 가상화된 행 목록 */
    virtualRows?: VirtualRow[];
    /** 전체 높이 */
    totalHeight?: number;
}
export declare const GanttTimeline: React.ForwardRefExoticComponent<GanttTimelineProps & React.RefAttributes<HTMLDivElement>>;
export {};
