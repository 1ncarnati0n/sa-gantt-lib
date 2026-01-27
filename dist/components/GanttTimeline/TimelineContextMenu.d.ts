import { default as React } from 'react';
import { ViewMode } from '../../types';

interface TimelineContextMenuProps {
    x: number;
    y: number;
    clickedDate: Date;
    viewMode: ViewMode;
    onAddTask?: (date: Date) => void;
    onAddMilestone: (date: Date) => void;
    onClose: () => void;
    selectedDependencyId?: string | null;
    onDeleteDependency?: (depId: string) => void;
}
export declare const TimelineContextMenu: React.FC<TimelineContextMenuProps>;
export {};
