'use client';

import { useEffect, useRef } from 'react';
import { useGanttStore } from './store/useGanttStore';
import { GanttTask, GanttLink } from './types';
import { GanttTimeline } from './components/GanttTimeline';
import { GanttSidebar } from './components/GanttSidebar';
import { useGanttVirtualization } from './hooks/useGanttVirtualization';

interface GanttRootProps {
    tasks: GanttTask[];
    links?: GanttLink[];
}

export function GanttRoot({ tasks, links = [] }: GanttRootProps) {
    const { setTasks, setLinks } = useGanttStore();

    // Refs for scroll sync
    const sidebarRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);

    // Initialize store with data
    useEffect(() => {
        setTasks(tasks);
        setLinks(links);
    }, [tasks, links, setTasks, setLinks]);

    // Virtualization
    const rowVirtualizer = useGanttVirtualization(timelineRef);

    // Sync Scroll: Timeline -> Sidebar
    useEffect(() => {
        const timeline = timelineRef.current;
        const sidebar = sidebarRef.current;
        if (!timeline || !sidebar) return;

        const handleScroll = () => {
            sidebar.scrollTop = timeline.scrollTop;
        };

        timeline.addEventListener('scroll', handleScroll);
        return () => timeline.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="flex h-full w-full border border-gray-200 rounded-lg overflow-hidden bg-white">
            {/* Sidebar (Task List) */}
            <div
                ref={sidebarRef}
                className="w-[300px] shrink-0 border-r border-gray-200 bg-white z-10 overflow-hidden"
            >
                <GanttSidebar virtualizer={rowVirtualizer} />
            </div>

            {/* Main Timeline Area */}
            <div className="flex-1 relative overflow-hidden">
                <GanttTimeline containerRef={timelineRef} virtualizer={rowVirtualizer} />
            </div>
        </div>
    );
}
