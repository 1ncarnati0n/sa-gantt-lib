import { ConstructionTask, ViewMode } from '../types';
import { VirtualRow } from '../hooks/useGanttVirtualization';

interface GanttSidebarProps {
    tasks: ConstructionTask[];
    allTasks: ConstructionTask[];
    viewMode: ViewMode;
    expandedIds: Set<string>;
    onToggle: (taskId: string) => void;
    onTaskClick: (task: ConstructionTask) => void;
    onBackToMaster: () => void;
    onTaskUpdate?: (task: ConstructionTask) => void;
    /** 새 Task 생성 콜백 */
    onTaskCreate?: (task: Partial<ConstructionTask>) => void | Promise<void>;
    /** Task 순서 변경 콜백 */
    onTaskReorder?: (taskId: string, newIndex: number) => void;
    /** 첫 번째 Task로 스크롤 콜백 */
    onScrollToFirstTask?: () => void;
    /** 현재 선택된 CP ID (Detail View) */
    activeCPId?: string | null;
    /** 가상화된 행 목록 */
    virtualRows?: VirtualRow[];
    /** 전체 높이 */
    totalHeight?: number;
    /** 사이드바 총 너비 변경 콜백 */
    onTotalWidthChange?: (width: number) => void;
}
/**
 * 간트 차트 사이드바 (왼쪽 그리드)
 *
 * - Master View: CP명, 총 공기, 작업일수 컬럼
 * - Detail View: 단위공정명, 순작업일, 간접일, 시작일, 종료일 컬럼
 * - 컬럼 너비 드래그로 조절 가능
 */
export declare const GanttSidebar: import('react').ForwardRefExoticComponent<GanttSidebarProps & import('react').RefAttributes<HTMLDivElement>>;
export {};
