/**
 * useHistory 훅 반환 타입
 */
interface UseHistoryReturn<T> {
    /** 현재 상태 */
    present: T;
    /** 상태 변경 (히스토리에 기록) */
    set: (newState: T | ((prev: T) => T)) => void;
    /** 실행 취소 */
    undo: () => void;
    /** 다시 실행 */
    redo: () => void;
    /** 실행 취소 가능 여부 */
    canUndo: boolean;
    /** 다시 실행 가능 여부 */
    canRedo: boolean;
    /** 히스토리 초기화 (새 초기값으로) */
    reset: (initialState: T) => void;
    /** 히스토리 전체 초기화 (현재 상태 유지) */
    clearHistory: () => void;
    /** 히스토리 개수 정보 */
    historyLength: {
        past: number;
        future: number;
    };
}
/**
 * Undo/Redo 기능을 제공하는 히스토리 관리 훅
 *
 * Immer의 patches 기능을 활용하여 전체 상태 대신 변경 패치만 저장합니다.
 * 이를 통해 메모리 사용량을 크게 줄이면서 동일한 기능을 제공합니다.
 *
 * @param initialState 초기 상태
 * @returns 히스토리 관리 함수들과 현재 상태
 *
 * @example
 * ```tsx
 * const { present, set, undo, redo, canUndo, canRedo } = useHistory({ count: 0 });
 *
 * // 상태 변경 (히스토리에 기록됨)
 * set({ count: 1 });
 *
 * // 이전 값으로 되돌리기
 * undo(); // count: 0
 *
 * // 다시 실행
 * redo(); // count: 1
 * ```
 */
export declare function useHistory<T>(initialState: T): UseHistoryReturn<T>;
export default useHistory;
