// ============================================
// GanttTimeline 로컬 타입 정의
// ============================================

import type { Milestone, ConstructionTask, CalendarSettings } from '../../types';

/** 드래그 타입 */
export type DragType =
    | 'move'           // 전체 이동
    | 'resize-pre'     // 왼쪽 끝 - 앞간접 또는 순작업 조절
    | 'resize-post'    // 오른쪽 끝 - 뒤간접 또는 순작업 조절
    | 'resize-pre-net' // 앞간접-순작업 경계
    | 'resize-net-post' // 순작업-뒤간접 경계
    | 'move-net';      // 순작업만 이동

/** 드래그 상태 정보 */
export interface DragInfo {
    startDate: Date;
    endDate: Date;
    indirectWorkDaysPre: number;
    indirectWorkDaysPost: number;
    netWorkDays: number;
}

/** Bar 드래그 결과 콜백 파라미터 */
export interface BarDragResult {
    taskId: string;
    dragType: DragType;
    newStartDate: Date;
    newEndDate: Date;
    newIndirectWorkDaysPre: number;
    newIndirectWorkDaysPost: number;
    newNetWorkDays: number;
}

/** 마일스톤 레이아웃 (충돌 감지 결과) */
export interface MilestoneWithLayout {
    milestone: Milestone;
    x: number;
    labelLevel: number;
}

/** 바 드래그 상태 */
export interface BarDragState {
    taskId: string;
    dragType: DragType;
    startX: number;
    originalStartDate: Date;
    originalEndDate: Date;
    originalIndirectWorkDaysPre: number;
    originalNetWorkDays: number;
    originalIndirectWorkDaysPost: number;
    currentStartDate: Date;
    currentEndDate: Date;
    currentIndirectWorkDaysPre: number;
    currentNetWorkDays: number;
    currentIndirectWorkDaysPost: number;
    lastDeltaX: number;
}

/** 마일스톤 드래그 상태 */
export interface MilestoneDragState {
    milestoneId: string;
    startX: number;
    originalDate: Date;
    currentX: number;
}

/** 그룹 드래그 상태 */
export interface GroupDragState {
    groupId: string;
    startX: number;
    originalStartDate: Date;
    originalEndDate: Date;
    affectedTasks: ConstructionTask[];
    currentDeltaDays: number;
    lastDeltaX: number;
}

/** TaskBar Props */
export interface TaskBarProps {
    task: ConstructionTask;
    y: number;
    minDate: Date;
    pixelsPerDay: number;
    isMasterView: boolean;
    allTasks?: ConstructionTask[];
    holidays?: Date[];
    calendarSettings?: CalendarSettings;
    isDraggable?: boolean;
    dragInfo?: DragInfo | null;
    onDragStart?: (
        e: React.MouseEvent,
        taskId: string,
        dragType: DragType,
        taskData: {
            startDate: Date;
            endDate: Date;
            indirectWorkDaysPre: number;
            netWorkDays: number;
            indirectWorkDaysPost: number;
        }
    ) => void;
    onDoubleClick?: () => void;
    groupDragDeltaDays?: number;
}

/** MilestoneMarker Props */
export interface MilestoneMarkerProps {
    milestone: Milestone;
    x: number;
    labelLevel?: number;
    isDragging?: boolean;
    dragX?: number;
    onMouseDown?: (e: React.MouseEvent, milestone: Milestone) => void;
    onDoubleClick?: (milestone: Milestone) => void;
}

/** TimelineHeader Props */
export interface TimelineHeaderProps {
    minDate: Date;
    totalDays: number;
    pixelsPerDay: number;
    zoomLevel: 'DAY' | 'WEEK' | 'MONTH';
    holidays: Date[];
    calendarSettings: CalendarSettings;
}

/** TimelineGrid Props (WeekendGrid) */
export interface TimelineGridProps {
    minDate: Date;
    totalDays: number;
    chartHeight: number;
    pixelsPerDay: number;
    holidays: Date[];
    calendarSettings: CalendarSettings;
    zoomLevel: 'DAY' | 'WEEK' | 'MONTH';
}
