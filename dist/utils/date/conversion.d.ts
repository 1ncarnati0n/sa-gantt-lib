import { ZoomLevel, ConstructionTask } from '../../types';

/**
 * 날짜를 X 좌표로 변환
 */
export declare const dateToX: (date: Date, baseDate: Date, pixelsPerDay: number) => number;
/**
 * X 좌표를 날짜로 변환
 */
export declare const xToDate: (x: number, baseDate: Date, pixelsPerDay: number) => Date;
/**
 * 날짜 범위의 픽셀 너비 계산
 */
export declare const getDateRangeWidth: (startDate: Date, endDate: Date, pixelsPerDay: number) => number;
/**
 * 줌 레벨에 따른 픽셀/일 값 반환
 */
export declare const getPixelsPerDay: (zoomLevel: ZoomLevel) => number;
/**
 * 태스크 배열에서 날짜 범위 계산 (여유 포함)
 */
export declare const calculateDateRange: (tasks: ConstructionTask[], milestones?: {
    date: Date;
}[], buffer?: number) => {
    minDate: Date;
    maxDate: Date;
    totalDays: number;
};
