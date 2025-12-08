'use client';

import { useState, useCallback } from 'react';
import type { ConstructionTask } from '../../../types';

interface UseMultiSelectOptions {
    tasks: ConstructionTask[];
    draggedTaskId: string | null;
}

export const useMultiSelect = ({ tasks, draggedTaskId }: UseMultiSelectOptions) => {
    const [selectedTaskIds, setSelectedTaskIds] = useState<Set<string>>(new Set());
    const [lastClickedIndex, setLastClickedIndex] = useState<number | null>(null);

    const handleRowClick = useCallback((e: React.MouseEvent, task: ConstructionTask, rowIndex: number) => {
        e.stopPropagation();

        if (draggedTaskId) return;

        const isCtrlOrCmd = e.ctrlKey || e.metaKey;
        const isShift = e.shiftKey;

        if (isCtrlOrCmd) {
            setSelectedTaskIds(prev => {
                const newSet = new Set(prev);
                if (newSet.has(task.id)) {
                    newSet.delete(task.id);
                } else {
                    newSet.add(task.id);
                }
                return newSet;
            });
            setLastClickedIndex(rowIndex);
        } else if (isShift && lastClickedIndex !== null) {
            const start = Math.min(lastClickedIndex, rowIndex);
            const end = Math.max(lastClickedIndex, rowIndex);

            setSelectedTaskIds(prev => {
                const newSet = new Set(prev);
                for (let i = start; i <= end; i++) {
                    if (tasks[i]) {
                        newSet.add(tasks[i].id);
                    }
                }
                return newSet;
            });
        } else {
            setSelectedTaskIds(new Set([task.id]));
            setLastClickedIndex(rowIndex);
        }
    }, [draggedTaskId, lastClickedIndex, tasks]);

    const clearSelection = useCallback(() => {
        setSelectedTaskIds(new Set());
    }, []);

    const selectTask = useCallback((taskId: string) => {
        if (!selectedTaskIds.has(taskId)) {
            setSelectedTaskIds(new Set([taskId]));
        }
    }, [selectedTaskIds]);

    return {
        selectedTaskIds,
        setSelectedTaskIds,
        handleRowClick,
        clearSelection,
        selectTask,
    };
};
