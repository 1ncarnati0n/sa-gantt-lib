import { ViewMode } from '../../../types';

interface UseSidebarResizeOptions {
    sidebarWidth: number;
    setSidebarWidth: (width: number) => void;
    viewMode: ViewMode;
    sidebarTotalWidth: number | null;
}
export declare const useSidebarResize: ({ sidebarWidth, setSidebarWidth, viewMode, sidebarTotalWidth, }: UseSidebarResizeOptions) => {
    isResizing: boolean;
    handleResizeStart: (e: React.MouseEvent) => void;
    handleResizeDoubleClick: () => void;
};
export {};
