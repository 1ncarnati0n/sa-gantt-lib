import { default as React } from 'react';
import { ConstructionTask } from '../types';

interface GanttSidebarContextMenuProps {
    x: number;
    y: number;
    taskId: string;
    selectedTaskIds: Set<string>;
    tasks: ConstructionTask[];
    onTaskGroup?: (taskIds: string[]) => void;
    onTaskUngroup?: (groupId: string) => void;
    onTaskDelete?: (taskId: string) => void;
    onStartRename?: (taskId: string) => void;
    onClose: () => void;
    onDeselect: () => void;
}
/**
 * 사이드바 컨텍스트 메뉴 컴포넌트
 *
 * 우클릭 시 표시되는 메뉴로, 태스크 그룹화/해제/삭제 기능을 제공합니다.
 */
export declare const GanttSidebarContextMenu: React.FC<GanttSidebarContextMenuProps>;
export {};
