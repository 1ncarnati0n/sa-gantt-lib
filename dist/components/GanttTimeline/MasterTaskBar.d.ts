import { default as React } from 'react';
import { ConstructionTask, CalendarSettings } from '../../types';

/**
 * MasterTaskBar Props (Level 1 전용)
 */
export interface MasterTaskBarProps {
    task: ConstructionTask;
    y: number;
    minDate: Date;
    pixelsPerDay: number;
    renderMode?: 'full' | 'bar' | 'label';
    allTasks?: ConstructionTask[];
    holidays?: Date[];
    calendarSettings?: CalendarSettings;
    /** 드래그 상태 (날짜 변경 시) */
    dragInfo?: {
        startDate: Date;
        endDate: Date;
    } | null;
    /** 그룹 드래그 델타 (일수) */
    groupDragDeltaDays?: number;
    /** 그룹 드래그 스냅 날짜 */
    groupDragInfo?: {
        startDate: Date;
        endDate: Date;
    } | null;
    /** 키보드 포커스 상태 */
    isFocused?: boolean;
}
/**
 * Master View 전용 태스크 바 컴포넌트 (Level 1: CP 바)
 *
 * 공구 공정표에서 CP(Critical Path) 바를 렌더링합니다.
 * 작업일(주황)과 비작업일(청록)을 시각적으로 구분하여 표시합니다.
 */
export declare const MasterTaskBar: React.FC<MasterTaskBarProps>;
