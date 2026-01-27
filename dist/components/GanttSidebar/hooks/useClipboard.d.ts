import { ConstructionTask, ViewMode } from '../../../types';

interface UseClipboardOptions {
    selectedTaskIds: Set<string>;
    allTasks: ConstructionTask[];
    viewMode: ViewMode;
    activeCPId?: string | null;
    onTaskCreate?: (task: Partial<ConstructionTask>) => void | Promise<void>;
}
export declare const useClipboard: ({ selectedTaskIds, allTasks, viewMode, activeCPId, onTaskCreate, }: UseClipboardOptions) => {
    clipboardTasks: ConstructionTask[];
    handleCopy: () => void;
    handlePaste: () => void;
};
export {};
