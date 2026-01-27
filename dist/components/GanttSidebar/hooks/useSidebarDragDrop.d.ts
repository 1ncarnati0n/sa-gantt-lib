import { ConstructionTask, DropPosition } from '../../../types';

interface UseSidebarDragDropOptions {
    tasks: ConstructionTask[];
    onTaskReorder?: (taskId: string, newIndex: number) => void;
    onTaskMove?: (taskId: string, targetId: string, position: DropPosition) => void;
}
export declare const useSidebarDragDrop: ({ tasks, onTaskReorder, onTaskMove, }: UseSidebarDragDropOptions) => {
    draggedTaskId: string | null;
    dragOverTaskId: string | null;
    dragOverPosition: DropPosition | null;
    handleDragStart: (e: React.DragEvent, taskId: string) => void;
    handleDragOver: (e: React.DragEvent, taskId: string, isTargetGroup: boolean) => void;
    handleDragLeave: () => void;
    handleDrop: (e: React.DragEvent, targetTaskId: string) => void;
    handleDragEnd: () => void;
};
export {};
