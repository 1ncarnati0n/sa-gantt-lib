import { CalendarSettings } from '../../../types';
import { DragType, DragInfo, BarDragResult, BaseDragOptions } from '../types';

interface UseBarDragOptions extends BaseDragOptions {
    holidays: Date[];
    calendarSettings: CalendarSettings;
    onBarDrag?: (result: BarDragResult) => void;
}
export declare const useBarDrag: ({ pixelsPerDay, holidays, calendarSettings, onBarDrag, }: UseBarDragOptions) => {
    isDragging: boolean;
    handleBarMouseDown: (e: React.MouseEvent, taskId: string, dragType: DragType, taskData: {
        startDate: Date;
        endDate: Date;
        indirectWorkDaysPre: number;
        netWorkDays: number;
        indirectWorkDaysPost: number;
    }) => void;
    getDragInfo: (taskId: string) => DragInfo | null;
};
export {};
