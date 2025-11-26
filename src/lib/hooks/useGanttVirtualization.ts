import { useVirtualizer } from '@tanstack/react-virtual';
import { useGanttStore } from '../store/useGanttStore';
import { RefObject } from 'react';

export function useGanttVirtualization(containerRef: RefObject<HTMLDivElement | null>) {
    const { getVisibleTasks, rowHeight } = useGanttStore();
    const visibleTasks = getVisibleTasks ? getVisibleTasks() : []; // Safety check if selector not ready

    const rowVirtualizer = useVirtualizer({
        count: visibleTasks.length,
        getScrollElement: () => containerRef.current,
        estimateSize: () => rowHeight,
        overscan: 5,
    });

    return rowVirtualizer as unknown as import('@tanstack/react-virtual').Virtualizer<HTMLDivElement, Element>;
}
