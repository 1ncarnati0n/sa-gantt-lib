import { ConstructionTask } from '../../../types';

interface UseMultiSelectOptions {
    tasks: ConstructionTask[];
    draggedTaskId: string | null;
}
/**
 * 다중 선택 훅 (Store 연동)
 *
 * Zustand Store를 사용하여 선택 상태를 전역으로 관리합니다.
 * Ctrl/Cmd + 클릭: 토글 선택
 * Shift + 클릭: 범위 선택
 * 단순 클릭: 단일 선택
 */
export declare const useMultiSelect: ({ tasks, draggedTaskId }: UseMultiSelectOptions) => {
    selectedTaskIds: Set<string>;
    focusedTaskId: string | null;
    handleRowClick: (e: React.MouseEvent, task: ConstructionTask, _rowIndex: number) => void;
    clearSelection: () => void;
    selectTask: (taskId: string) => void;
    selectMultipleTasks: (taskIds: string[]) => void;
};
export {};
