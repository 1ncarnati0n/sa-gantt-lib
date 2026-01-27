import { ConstructionTask, ViewMode } from '../types';

interface UseKeyboardNavigationOptions {
    /** 현재 보이는 Task 목록 */
    visibleTasks: ConstructionTask[];
    /** 현재 뷰 모드 */
    viewMode: ViewMode;
    /** 뷰 변경 핸들러 */
    onViewChange: (mode: ViewMode, cpId?: string) => void;
    /** Task 포커스 함수 (양방향 스크롤) */
    focusTask: (taskId: string) => void;
    /** Task 편집 핸들러 (Enter 키) */
    onTaskEdit?: (task: ConstructionTask) => void;
    /** 키보드 네비게이션 활성화 여부 */
    enabled?: boolean;
}
/**
 * 키보드 네비게이션 훅
 *
 * 화살표 키로 Task 간 이동, Enter로 편집 모달 열기 등을 지원합니다.
 *
 * 키 바인딩:
 * - ArrowUp: 이전 Task로 이동
 * - ArrowDown: 다음 Task로 이동
 * - ArrowLeft: CP/GROUP 접기 (펼쳐져 있을 때)
 * - ArrowRight: CP/GROUP 펼치기 (접혀 있을 때)
 * - Enter: 선택된 Task 편집 모달 열기
 * - Escape: 선택 해제
 * - Backspace: Detail View에서 Master View로 복귀
 * - Home: 첫 번째 Task로 이동
 * - End: 마지막 Task로 이동
 */
export declare function useKeyboardNavigation({ visibleTasks, viewMode, onViewChange, focusTask, onTaskEdit, enabled, }: UseKeyboardNavigationOptions): {
    focusedTaskId: string | null;
    selectedTaskIds: Set<string>;
};
export {};
