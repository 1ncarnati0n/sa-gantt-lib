import React, { useEffect } from 'react';
import { GanttGrid } from './gantt/GanttGrid';
import { GanttTimeline } from './gantt/GanttTimeline';
import { format } from 'date-fns';

export const GanttChart: React.FC = () => {
    // const { tasks, calculateDates } = useConstructionStore(); // Not strictly needed here if we don't use them directly in this container


    // Initial Calculation on Mount (if needed)
    useEffect(() => {
        // Force recalculate all dates to ensure consistency
        // In a real app, this might be done in the store init
    }, []);

    return (
        <div className="flex h-screen w-full flex-col bg-gray-50">
            <header className="p-4 bg-white border-b border-gray-200 shadow-sm flex justify-between items-center z-20">
                <h1 className="text-xl font-extrabold text-gray-800">
                    <span className='text-[var(--color-teal)]'>건설</span> <span className='text-[var(--color-vermilion)]'>표준공정표</span> 관리 시스템
                </h1>
                <div className="text-sm text-gray-500">
                    기준일: {format(new Date(), 'yyyy-MM-dd')}
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden">
                {/* Left Panel: Grid */}
                <div className="w-[620px] flex-shrink-0 border-r border-gray-200 bg-white shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-10">
                    <GanttGrid />
                </div>

                {/* Right Panel: Timeline */}
                <div className="flex-1 overflow-hidden relative bg-white">
                    <GanttTimeline />
                </div>
            </div>
        </div>
    );
};
