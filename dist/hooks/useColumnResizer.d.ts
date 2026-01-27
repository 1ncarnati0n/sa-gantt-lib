import { ColumnConfig } from '../types';

/**
 * 컬럼 리사이저 훅
 *
 * 사이드바 컬럼의 너비를 조절하는 기능을 제공합니다.
 */
export declare function useColumnResizer(baseColumns: ColumnConfig[], initialWidths?: number[]): {
    columns: {
        width: number;
        id: string;
        label: string;
        minWidth: number;
    }[];
    resizingIndex: number | null;
    handleResizeStart: (e: React.MouseEvent, columnIndex: number) => void;
    setColumnWidths: import('react').Dispatch<import('react').SetStateAction<number[]>>;
};
