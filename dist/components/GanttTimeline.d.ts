import { Virtualizer } from '@tanstack/react-virtual';

interface GanttTimelineProps {
    containerRef: React.RefObject<HTMLDivElement | null>;
    virtualizer: Virtualizer<HTMLDivElement, Element>;
}
export declare function GanttTimeline({ containerRef, virtualizer }: GanttTimelineProps): import("react/jsx-runtime").JSX.Element;
export {};
