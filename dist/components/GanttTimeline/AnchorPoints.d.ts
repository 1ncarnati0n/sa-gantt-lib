import { default as React } from 'react';
import { ConstructionTask, AnchorDependency, CalendarSettings } from '../../types';

/** 앵커 위치 정보 (dayIndex 기반) */
export interface AnchorPosition {
    taskId: string;
    dayIndex: number;
    x: number;
    y: number;
}
/**
 * 순작업 기준 dayIndex → 달력일 오프셋 변환
 *
 * dayIndex 규칙 (순작업 시작일 = 0 기준):
 * - 앞 간접작업 영역: -indirectWorkDaysPre ~ -1
 * - 순작업 영역: 0 ~ netWorkDays - 1
 * - 뒤 간접작업 영역: netWorkDays ~ ...
 *
 * 반환값은 task.startDate 기준 달력일 오프셋
 */
export declare const workingDayToCalendarOffset: (task: ConstructionTask, netBasedDayIndex: number, holidays?: Date[], calendarSettings?: CalendarSettings) => number;
interface AnchorPointsProps {
    task: ConstructionTask;
    rowIndex: number;
    minDate: Date;
    pixelsPerDay: number;
    connectingFrom?: {
        taskId: string;
        dayIndex: number;
    } | null;
    dependencies: AnchorDependency[];
    onAnchorClick?: (taskId: string, dayIndex: number) => void;
    onAnchorHover?: (taskId: string, dayIndex: number | null) => void;
    holidays?: Date[];
    calendarSettings?: CalendarSettings;
    /** 종속성 드래그 중 델타 (일 단위) - 앵커 실시간 동기화용 */
    dependencyDragDeltaDays?: number;
    /** Y축 오프셋 (기본값: MILESTONE_LANE_HEIGHT) */
    offsetY?: number;
    /** 행 시작 Y 위치 (동적 높이 계산용) */
    rowStart?: number;
    /** 실제 행 높이 (동적 높이 계산용) */
    rowHeight?: number;
    /** Compact 모드 바 높이 */
    effectiveBarHeight?: number;
    /** Compact 모드 여부 */
    isCompact?: boolean;
    /** 호버 활성화 상태 (바 하단 호버 시 앵커 표시 강화) */
    isHoverActive?: boolean;
}
/**
 * 태스크 바 하단에 표시되는 앵커 포인트
 * - 모든 Day 경계에 앵커 배치 (0.5일 단위)
 * - N일 태스크 → (N * 2) + 1개 앵커
 */
export declare const AnchorPoints: React.FC<AnchorPointsProps>;
/**
 * 앵커 위치 계산 유틸리티 함수
 * 외부에서 종속성 선 그리기에 사용
 * dayIndex는 작업일 기준, 렌더링 시 달력일로 변환
 */
export declare const getAnchorPosition: (task: ConstructionTask, workingDayIndex: number, rowIndex: number, minDate: Date, pixelsPerDay: number, holidays?: Date[], calendarSettings?: CalendarSettings, offsetY?: number, rowStart?: number, rowHeight?: number, effectiveBarHeight?: number) => AnchorPosition;
export {};
