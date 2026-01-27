import { default as React } from 'react';
import { ConstructionTask, CalendarSettings } from '../types';

interface CriticalPathBarProps {
    tasks: ConstructionTask[];
    holidays: Date[];
    calendarSettings: CalendarSettings;
    minDate: Date;
    pixelsPerDay: number;
    totalWidth: number;
    activeCPId?: string | null;
}
export declare const CriticalPathBar: React.FC<CriticalPathBarProps>;
export default CriticalPathBar;
