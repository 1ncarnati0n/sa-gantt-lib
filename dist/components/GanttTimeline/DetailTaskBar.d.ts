import { default as React } from 'react';
import { ConstructionTask, CalendarSettings } from '../../types';
import { DragInfo, DragType, TaskBarRenderMode } from './types';
import { HoverInfo } from './hooks';

export type { HoverInfo };
export type HoverZone = 'resize-left' | 'resize-right' | 'move' | null;
/**
 * DetailTaskBar Props (Level 2 전용)
 */
export interface DetailTaskBarProps {
    task: ConstructionTask;
    y: number;
    minDate: Date;
    pixelsPerDay: number;
    barHeight?: number;
    renderMode?: TaskBarRenderMode;
    holidays?: Date[];
    calendarSettings?: CalendarSettings;
    isDraggable?: boolean;
    dragInfo?: DragInfo | null;
    onDragStart?: (e: React.MouseEvent, taskId: string, dragType: DragType, taskData: {
        startDate: Date;
        endDate: Date;
        indirectWorkDaysPre: number;
        netWorkDays: number;
        indirectWorkDaysPost: number;
    }) => void;
    onDoubleClick?: () => void;
    groupDragDeltaDays?: number;
    groupDragInfo?: {
        startDate: Date;
        endDate: Date;
    } | null;
    dependencyDragDeltaDays?: number;
    dependencyDragInfo?: {
        startDate: Date;
        endDate: Date;
    } | null;
    onDependencyDragStart?: (e: React.MouseEvent, taskId: string, taskData: {
        startDate: Date;
        endDate: Date;
    }) => boolean | void;
    hasDependency?: boolean;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    isFocused?: boolean;
}
/**
 * Detail View 전용 태스크 바 컴포넌트 (Level 2: 주공정표)
 */
export declare const DetailTaskBar: React.FC<DetailTaskBarProps>;
