'use client';

import { Virtualizer } from '@tanstack/react-virtual';
// import { useGanttStore } from '../store/useGanttStore';
import { TimelineHeader } from './TimelineHeader';
import { GridBackground } from './GridBackground';
import { TaskBars } from './TaskBars';
import { DependencyLines } from './DependencyLines';

interface GanttTimelineProps {
    containerRef: React.RefObject<HTMLDivElement | null>;
    virtualizer: Virtualizer<HTMLDivElement, Element>;
}

export function GanttTimeline({ containerRef, virtualizer }: GanttTimelineProps) {
    // const { scrollX, scrollY } = useGanttStore();

    return (
        <div className="h-full flex flex-col">
            {/* Header (Sticky) */}
            <div className="flex-shrink-0 z-20 bg-white border-b border-gray-200 sticky top-0">
                <TimelineHeader />
            </div>

            {/* Scrollable Chart Area */}
            <div
                ref={containerRef}
                className="flex-1 relative overflow-auto"
            // We will attach scroll listeners here later to sync with store
            >
                <div className="relative min-h-full">
                    <GridBackground />
                    <DependencyLines />
                    <TaskBars virtualizer={virtualizer} />
                </div>
            </div>
        </div>
    );
}
