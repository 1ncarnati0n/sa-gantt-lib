import { default as React } from 'react';
import { ConstructionTask, AnchorDependency, CalendarSettings } from '../../types';

/** 행 데이터 타입 (동적 높이 계산용) */
interface RowData {
    index: number;
    start: number;
    size: number;
    key: string | number;
}
interface DependencyLinesProps {
    tasks: ConstructionTask[];
    dependencies: AnchorDependency[];
    minDate: Date;
    pixelsPerDay: number;
    selectedDepId?: string | null;
    hoveredDepId?: string | null;
    onDependencyClick?: (depId: string) => void;
    onDependencyHover?: (depId: string | null) => void;
    holidays?: Date[];
    calendarSettings?: CalendarSettings;
    /** 드래그 중인 태스크의 델타 일수를 반환하는 함수 */
    getTaskDeltaDays?: (taskId: string) => number;
    /** Y축 오프셋 (기본값: MILESTONE_LANE_HEIGHT) */
    offsetY?: number;
    /** 행 데이터 (동적 높이 계산용) */
    rowData?: RowData[];
    /** Compact 모드 바 높이 */
    effectiveBarHeight?: number;
    /** Compact 모드 여부 */
    isCompact?: boolean;
}
/**
 * 종속성 선 렌더링 컴포넌트
 */
export declare const DependencyLines: React.FC<DependencyLinesProps>;
/**
 * 연결 중 프리뷰 선 컴포넌트
 */
interface ConnectionPreviewLineProps {
    sourceX: number;
    sourceY: number;
    targetX: number;
    targetY: number;
    /** Compact 모드 여부 */
    isCompact?: boolean;
}
export declare const ConnectionPreviewLine: React.FC<ConnectionPreviewLineProps>;
/**
 * 태스크 바 내 앵커 연결선 컴포넌트
 * - 들어오는 종속성 끝점 → 나가는 종속성 시작점을 연결
 * - 바 하단을 따라 수평선으로 표시
 */
interface InBarConnectionLinesProps {
    tasks: ConstructionTask[];
    dependencies: AnchorDependency[];
    minDate: Date;
    pixelsPerDay: number;
    holidays?: Date[];
    calendarSettings?: CalendarSettings;
    /** 드래그 중인 태스크의 델타 일수를 반환하는 함수 */
    getTaskDeltaDays?: (taskId: string) => number;
    /** Y축 오프셋 (기본값: MILESTONE_LANE_HEIGHT) */
    offsetY?: number;
    /** 행 데이터 (동적 높이 계산용) */
    rowData?: RowData[];
    /** Compact 모드 바 높이 */
    effectiveBarHeight?: number;
    /** Compact 모드 여부 */
    isCompact?: boolean;
}
export declare const InBarConnectionLines: React.FC<InBarConnectionLinesProps>;
export {};
