/** 호버 존 타입 (바 내부만 감지) */
export type HoverZone = 'resize-left' | 'resize-right' | 'move' | null;
/** 호버 정보 */
export interface HoverInfo {
    zone: HoverZone;
    showLeftHandle: boolean;
    showRightHandle: boolean;
}
/**
 * 호버 존에 따른 커서 스타일 결정
 */
export declare const getHoverCursor: (hoverInfo: HoverInfo | null) => string;
interface UseHoverZoneOptions {
    barWidth: number;
    barHeight: number;
    isDragging: boolean;
    onMouseLeave?: () => void;
}
interface UseHoverZoneReturn {
    /** 현재 호버 정보 */
    hoverInfo: HoverInfo | null;
    /** 호버 존에 따른 커서 스타일 */
    cursor: string;
    /** 마우스 이동 핸들러 (SVGGElement용) */
    handleMouseMove: (e: React.MouseEvent<SVGGElement>) => void;
    /** 마우스 떠남 핸들러 */
    handleMouseLeave: () => void;
}
export declare const useHoverZone: ({ barWidth, barHeight, isDragging, onMouseLeave, }: UseHoverZoneOptions) => UseHoverZoneReturn;
export {};
