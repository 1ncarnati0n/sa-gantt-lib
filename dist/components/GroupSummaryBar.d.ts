import { default as React } from 'react';
import { ConstructionTask } from '../types';

interface GroupSummaryBarProps {
    group: ConstructionTask;
    allTasks: ConstructionTask[];
    y: number;
    minDate: Date;
    pixelsPerDay: number;
    parentBarHeight?: number;
    isDraggable?: boolean;
    currentDeltaDays?: number;
    onDragStart?: (e: React.MouseEvent, groupId: string, taskData: {
        startDate: Date;
        endDate: Date;
        affectedTaskIds: string[];
    }) => void;
    onToggle?: (groupId: string) => void;
    onClick?: (e: React.MouseEvent, groupId: string) => void;
    isFocused?: boolean;
    /** 컴팩트 모드 여부 */
    isCompact?: boolean;
}
export declare const GroupSummaryBar: React.FC<GroupSummaryBarProps>;
export {};
