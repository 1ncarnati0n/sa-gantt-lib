import { default as React } from 'react';
import { ConstructionTask } from '../types';

export interface TaskEditModalProps {
    task: ConstructionTask | null;
    isOpen: boolean;
    onClose: () => void;
    onSave: (task: ConstructionTask) => void | Promise<void>;
    onDelete?: (taskId: string) => void | Promise<void>;
}
/**
 * Task 편집 모달
 *
 * Task의 간접작업일/작업명과 순작업일을 편집할 수 있는 모달 컴포넌트입니다.
 */
export declare const TaskEditModal: React.FC<TaskEditModalProps>;
