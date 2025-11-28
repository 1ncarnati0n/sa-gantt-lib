import React, { useEffect, useRef, useState, useCallback } from 'react';
import { GanttGrid } from './gantt/GanttGrid';
import { GanttTimeline } from './gantt/GanttTimeline';
import { format } from 'date-fns';
import { useConstructionStore } from '../store/useConstructionStore';
import { GANTT_CONSTANTS } from '../utils/ganttConstants';

export const GanttChart: React.FC = () => {
    const { zoomLevel, setZoomLevel } = useConstructionStore();

    // Grid 너비 상태
    const [gridWidth, setGridWidth] = useState(GANTT_CONSTANTS.GRID_WIDTH);
    const [isResizing, setIsResizing] = useState(false);

    // Refs for scroll synchronization
    const gridScrollRef = useRef<HTMLDivElement>(null);
    const timelineScrollRef = useRef<HTMLDivElement>(null);
    const isScrollingRef = useRef<boolean>(false);
    const containerRef = useRef<HTMLDivElement>(null);

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

    // 리사이저 드래그 핸들러
    const handleResizeStart = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        setIsResizing(true);
    }, []);

    useEffect(() => {
        if (!isResizing) return;

        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const containerRect = containerRef.current.getBoundingClientRect();
            const newWidth = e.clientX - containerRect.left;
            // 최소/최대 너비 제한
            const clampedWidth = Math.max(250, Math.min(newWidth, 800));
            setGridWidth(clampedWidth);
        };

        const handleMouseUp = () => {
            setIsResizing(false);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isResizing]);

    // 리사이저 더블클릭 시 기본 너비로 리셋
    const handleResizeDoubleClick = useCallback(() => {
        setGridWidth(GANTT_CONSTANTS.GRID_WIDTH);
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

            <div ref={containerRef} className="flex flex-1 overflow-hidden relative">
                {/* Left Panel: Grid */}
                <div
                    className="shrink-0 bg-white z-10 flex flex-col"
                    style={{ width: `${gridWidth}px` }}
                >
                    <GanttGrid ref={gridScrollRef} />
                </div>

                {/* Resizer Handle */}
                <div
                    className={`w-1 cursor-col-resize hover:bg-blue-400 active:bg-blue-500 transition-colors z-20 flex-shrink-0 ${
                        isResizing ? 'bg-blue-500' : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                    onMouseDown={handleResizeStart}
                    onDoubleClick={handleResizeDoubleClick}
                    title="드래그하여 너비 조절 / 더블클릭으로 초기화"
                />

                {/* Right Panel: Timeline */}
                <div className="flex-1 overflow-hidden relative bg-white flex flex-col">
                    <GanttTimeline ref={timelineScrollRef} />
                </div>

                {/* Resize Overlay (드래그 중 다른 요소 이벤트 방지) */}
                {isResizing && (
                    <div className="fixed inset-0 z-50 cursor-col-resize" />
                )}
            </div>
        </div>
    );
};
