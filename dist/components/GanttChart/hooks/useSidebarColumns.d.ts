import { ViewMode, ColumnConfig } from '../../../types';

interface UseSidebarColumnsOptions {
    viewMode: ViewMode;
    hasReorder: boolean;
}
interface UseSidebarColumnsReturn {
    /** 현재 뷰모드에 맞는 컬럼 설정 (너비 포함) */
    columns: ColumnConfig[];
    /** 드래그 핸들 너비 (reorder 가능 여부에 따라) */
    dragHandleWidth: number;
    /** 현재 리사이징 중인 컬럼 인덱스 */
    resizingIndex: number | null;
    /** 컬럼 리사이즈 시작 핸들러 */
    handleColumnResizeStart: (e: React.MouseEvent, columnIndex: number) => void;
    /** 컬럼 리사이즈 더블클릭 핸들러 */
    handleColumnResizeDoubleClick: (e: React.MouseEvent, columnIndex: number) => void;
    /** 최적 컬럼 너비 설정 콜백 */
    handleOptimalColumnWidth: (columnIndex: number, width: number) => void;
}
export declare const useSidebarColumns: ({ viewMode, hasReorder, }: UseSidebarColumnsOptions) => UseSidebarColumnsReturn;
export {};
