import { ConstructionTask } from '../../../types';

interface UseInlineEditOptions {
    tasks: ConstructionTask[];
    onTaskUpdate?: (task: ConstructionTask) => void;
}
export declare const useInlineEdit: ({ tasks, onTaskUpdate }: UseInlineEditOptions) => {
    editingTaskId: string | null;
    editingName: string;
    setEditingName: import('react').Dispatch<import('react').SetStateAction<string>>;
    editInputRef: import('react').RefObject<HTMLInputElement | null>;
    handleStartEdit: (task: ConstructionTask) => void;
    handleStartRename: (taskId: string) => void;
    handleSaveEdit: () => void;
    handleCancelEdit: () => void;
    handleEditKeyDown: (e: React.KeyboardEvent) => void;
};
export {};
