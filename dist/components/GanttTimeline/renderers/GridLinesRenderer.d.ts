import { ZoomLevel } from '../../../types';
import { VirtualRow } from '../../../hooks/useGanttVirtualization';

interface VerticalGridLinesProps {
    minDate: Date;
    totalDays: number;
    chartHeight: number;
    pixelsPerDay: number;
    zoomLevel: ZoomLevel;
}
/**
 * 수직 그리드 라인 렌더러
 *
 * - DAY 줌: 매일 선 표시, 일요일에 진한 선
 * - WEEK/MONTH 줌: 주 시작(일요일)에만 선 표시
 */
export declare const VerticalGridLines: import('react').NamedExoticComponent<VerticalGridLinesProps>;
interface HorizontalGridLinesProps {
    rowData: VirtualRow[];
    chartWidth: number;
    /** Y축 오프셋 (마일스톤 레인 높이) */
    offsetY?: number;
}
/**
 * 수평 그리드 라인 렌더러 (행 구분선)
 */
export declare const HorizontalGridLines: import('react').NamedExoticComponent<HorizontalGridLinesProps>;
interface GroupRowBackgroundProps {
    tasks: {
        id: string;
        type: string;
    }[];
    rowData: VirtualRow[];
    chartWidth: number;
    /** Y축 오프셋 (마일스톤 레인 높이) */
    offsetY?: number;
}
/**
 * GROUP 행 배경색 렌더러
 */
export declare const GroupRowBackground: import('react').NamedExoticComponent<GroupRowBackgroundProps>;
export {};
