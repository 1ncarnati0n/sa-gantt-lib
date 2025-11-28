import React, { useEffect, useRef } from 'react';
import { GanttGrid } from './gantt/GanttGrid';
import { GanttTimeline } from './gantt/GanttTimeline';
import { format } from 'date-fns';
import { useConstructionStore } from '../store/useConstructionStore';
import { GANTT_CONSTANTS } from '../utils/ganttConstants';

export const GanttChart: React.FC = () => {
    const { zoomLevel, setZoomLevel } = useConstructionStore();

    // Refs for scroll synchronization
    const gridScrollRef = useRef<HTMLDivElement>(null);
    const timelineScrollRef = useRef<HTMLDivElement>(null);
    const isScrollingRef = useRef<boolean>(false);

    // Initial Calculation on Mount (if needed)
    useEffect(() => {
        // Force recalculate all dates to ensure consistency
        // In a real app, this might be done in the store init
    }, []);

    // Scroll Synchronization
    useEffect(() => {
        const grid = gridScrollRef.current;
        const timeline = timelineScrollRef.current;

        if (!grid || !timeline) return;

        const handleGridScroll = () => {
            if (isScrollingRef.current) return;
            isScrollingRef.current = true;
            timeline.scrollTop = grid.scrollTop;
            setTimeout(() => { isScrollingRef.current = false; }, 10);
        };

        const handleTimelineScroll = () => {
            if (isScrollingRef.current) return;
            isScrollingRef.current = true;
            grid.scrollTop = timeline.scrollTop;
            setTimeout(() => { isScrollingRef.current = false; }, 10);
        };

        grid.addEventListener('scroll', handleGridScroll);
        timeline.addEventListener('scroll', handleTimelineScroll);

        return () => {
            grid.removeEventListener('scroll', handleGridScroll);
            timeline.removeEventListener('scroll', handleTimelineScroll);
        };
    }, []);

    return (
        <div className="flex h-screen w-full flex-col bg-gray-50">
            <header className="p-4 bg-white border-b border-gray-200 shadow-sm flex justify-between items-center z-20 h-[60px]">
                <h1 className="text-xl font-extrabold text-gray-800 flex items-center gap-2">
                    <span><span className='text-teal'>건설</span> <span className='text-vermilion'>표준공정표</span> 관리 시스템</span>
                </h1>

                <div className="flex items-center gap-4">
                    {/* Zoom Controls */}
                    <div className="flex bg-gray-100 rounded p-1">
                        {(['DAY', 'WEEK', 'MONTH'] as const).map((level) => (
                            <button
                                key={level}
                                onClick={() => setZoomLevel(level)}
                                className={`px-3 py-1 text-xs font-medium rounded transition-colors ${zoomLevel === level
                                    ? 'bg-white text-gray-800 shadow-sm'
                                    : 'text-gray-500 hover:text-gray-700'
                                    }`}
                            >
                                {level === 'DAY' ? '일' : level === 'WEEK' ? '주' : '월'}
                            </button>
                        ))}
                    </div>

                    <div className="text-sm text-gray-500">
                        기준일: {format(new Date(), 'yyyy-MM-dd')}
                    </div>
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden">
                {/* Left Panel: Grid - Using GANTT_CONSTANTS.GRID_WIDTH for consistency */}
                <div
                    className="shrink-0 border-r border-gray-200 bg-white shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-10 flex flex-col"
                    style={{ width: `${GANTT_CONSTANTS.GRID_WIDTH}px` }}
                >
                    <GanttGrid ref={gridScrollRef} />
                </div>

                {/* Right Panel: Timeline */}
                <div className="flex-1 overflow-hidden relative bg-white flex flex-col">
                    <GanttTimeline ref={timelineScrollRef} />
                </div>
            </div>
        </div>
    );
};
