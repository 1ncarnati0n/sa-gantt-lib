'use client';

import { useGanttStore } from '../store/useGanttStore';
import { getX } from '../utils/dateUtils';

export function DependencyLines() {
    const { getVisibleTasks, links, startDate, columnWidth, rowHeight } = useGanttStore();
    const tasks = getVisibleTasks ? getVisibleTasks() : [];

    if (!startDate) return null;

    // Helper to find task coordinates
    const getTaskCoords = (taskId: string | number) => {
        const index = tasks.findIndex(t => String(t.id) === String(taskId));
        if (index === -1) return null;

        const task = tasks[index];
        const x = getX(task.end_date, startDate, columnWidth); // End of source
        const y = index * rowHeight + rowHeight / 2;

        // For target, we want the start
        const startX = getX(task.start_date, startDate, columnWidth);

        return { x, y, startX, index };
    };

    return (
        <svg className="absolute inset-0 pointer-events-none z-0 overflow-visible" style={{ width: '100%', height: '100%' }}>
            {links.map((link) => {
                const source = getTaskCoords(link.source);
                const target = getTaskCoords(link.target);

                if (!source || !target) return null;

                // Simple path logic: Right -> Right-Angle -> Left
                const startX = source.x;
                const startY = source.y;
                const endX = target.startX;
                const endY = target.y;

                const path = `M ${startX} ${startY} 
                      L ${startX + 10} ${startY} 
                      L ${startX + 10} ${endY} 
                      L ${endX} ${endY}`;

                return (
                    <g key={link.id}>
                        <path d={path} stroke="#cbd5e1" strokeWidth="2" fill="none" />
                        <polygon points={`${endX},${endY} ${endX - 4},${endY - 4} ${endX - 4},${endY + 4}`} fill="#cbd5e1" />
                    </g>
                );
            })}
        </svg>
    );
}
