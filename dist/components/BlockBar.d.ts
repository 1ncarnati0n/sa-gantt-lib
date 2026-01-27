import { default as React } from 'react';
import { ConstructionTask } from '../types';

interface BlockBarProps {
    block: ConstructionTask;
    allTasks: ConstructionTask[];
    y: number;
    minDate: Date;
    pixelsPerDay: number;
    currentDeltaDays?: number;
    onToggle?: (blockId: string) => void;
    onClick?: (e: React.MouseEvent, blockId: string) => void;
    isFocused?: boolean;
}
/**
 * Block 행 전용 바 컴포넌트
 *
 * 양 끝에 포인트(원)가 있고 대시선으로 연결된 스타일
 * 라벨은 바 위 중앙에 표시
 */
export declare const BlockBar: React.FC<BlockBarProps>;
export {};
