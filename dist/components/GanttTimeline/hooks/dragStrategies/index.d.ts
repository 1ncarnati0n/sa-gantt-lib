import { DragType } from '../../types';
import { DragStrategy, DragOriginalState, DragContext, DragCalculationResult } from './types';

export type { DragStrategy, DragOriginalState, DragContext, DragCalculationResult } from './types';
/**
 * DragType에 해당하는 전략 가져오기
 */
export declare const getDragStrategy: (dragType: DragType) => DragStrategy;
/**
 * 드래그 결과 계산 (팩토리 함수)
 *
 * 기존 calculateDragResult 함수를 대체
 * switch문 없이 전략 패턴으로 처리
 */
export declare const calculateDragResult: (dragType: DragType, state: DragOriginalState, context: DragContext) => DragCalculationResult;
export { moveStrategy } from './moveStrategy';
export { moveNetStrategy } from './moveNetStrategy';
export { resizePreStrategy } from './resizePreStrategy';
export { resizePostStrategy } from './resizePostStrategy';
export { resizePreNetStrategy, resizeNetPostStrategy } from './boundaryStrategy';
