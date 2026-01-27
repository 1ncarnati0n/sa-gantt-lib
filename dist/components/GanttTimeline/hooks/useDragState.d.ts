import { RefObject } from 'react';

export interface UseDragStateOptions<T> {
    /** 드래그 중 마우스 이동 핸들러 */
    onMove: (e: MouseEvent, state: T, setState: React.Dispatch<React.SetStateAction<T | null>>) => void;
    /** 드래그 완료 핸들러 */
    onEnd: (state: T) => void;
    /** 드래그 중 커서 스타일 */
    cursor?: 'grabbing' | 'ew-resize' | 'col-resize';
}
export interface UseDragStateReturn<T> {
    /** 현재 드래그 상태 (null이면 드래그 중이 아님) */
    state: T | null;
    /** 상태 ref (이벤트 핸들러에서 최신 상태 접근용) */
    stateRef: RefObject<T | null>;
    /** 상태 setter (드래그 중 상태 업데이트용) */
    setState: React.Dispatch<React.SetStateAction<T | null>>;
    /** 드래그 시작 */
    start: (initialState: T) => void;
    /** 드래그 종료 (수동 종료 필요시) */
    stop: () => void;
    /** 드래그 중 여부 */
    isDragging: boolean;
}
/**
 * 공통 드래그 상태 관리 훅
 *
 * @example
 * ```typescript
 * const { state, stateRef, setState, start, isDragging } = useDragState({
 *     onMove: (e, state, setState) => {
 *         // 드래그 중 상태 업데이트
 *         setState(prev => prev ? { ...prev, deltaX: e.clientX } : null);
 *     },
 *     onEnd: (state) => {
 *         // 드래그 완료 처리
 *     },
 *     cursor: 'grabbing',
 * });
 * ```
 */
export declare function useDragState<T extends object>({ onMove, onEnd, cursor, }: UseDragStateOptions<T>): UseDragStateReturn<T>;
/**
 * 드래그 상태 업데이트 헬퍼
 * 기존 상태에서 일부만 업데이트할 때 사용
 */
export declare function updateDragState<T extends object>(setState: React.Dispatch<React.SetStateAction<T | null>>, updates: Partial<T>): void;
