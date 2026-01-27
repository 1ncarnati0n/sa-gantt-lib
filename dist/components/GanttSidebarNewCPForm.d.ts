import { default as React } from 'react';
import { ConstructionTask } from '../types';

interface GanttSidebarNewCPFormProps {
    columns: Array<{
        id: string;
        label: string;
        width: number;
        minWidth: number;
    }>;
    tasks: ConstructionTask[];
    onTaskCreate?: (task: Partial<ConstructionTask>) => void | Promise<void>;
    onCancel: () => void;
    isVirtualized?: boolean;
    virtualRowIndex?: number;
    dragHandleWidth?: number;
}
/**
 * 새 CP 추가 폼 컴포넌트
 *
 * Master View (Level 1)에서 새 CP를 추가할 때 사용되는 입력 폼입니다.
 */
export declare const GanttSidebarNewCPForm: React.FC<GanttSidebarNewCPFormProps>;
export {};
