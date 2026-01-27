import { default as React } from 'react';
import { ConstructionTask, CalendarSettings } from '../types';

interface WorkDaysRatioBarProps {
    tasks: ConstructionTask[];
    holidays: Date[];
    calendarSettings: CalendarSettings;
    minDate: Date;
    pixelsPerDay: number;
    totalWidth: number;
}
/**
 * 작업일/비작업일 비율 바 컴포넌트 (Master View 전용)
 *
 * 전체 프로젝트 기간 동안 작업일과 비작업일의 비율을 시각적으로 표시합니다.
 * CriticalPathBar와 동일한 길이/스타일로 표시됩니다.
 */
export declare const WorkDaysRatioBar: React.FC<WorkDaysRatioBarProps>;
export default WorkDaysRatioBar;
