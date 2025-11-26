'use client';

import { Virtualizer } from '@tanstack/react-virtual';
import { useGanttStore } from '../store/useGanttStore';

interface GanttSidebarProps {
    virtualizer: Virtualizer<HTMLDivElement, Element>;
}

export function GanttSidebar({ virtualizer }: GanttSidebarProps) {
    const { getVisibleTasks } = useGanttStore();
    const tasks = getVisibleTasks ? getVisibleTasks() : [];
    const virtualRows = virtualizer.getVirtualItems();

    return (
        <div className="h-full flex flex-col">
            <div className="h-8 border-b border-gray-200 flex items-center px-4 font-semibold text-xs text-gray-700 bg-gray-50 shrink-0">
                Task Name
            </div>
            <div className="flex-1 relative">
                <div
                    style={{
                        height: `${virtualizer.getTotalSize()}px`,
                        width: '100%',
                        position: 'relative'
                    }}
                >
                    {virtualRows.map((virtualRow) => {
                        const task = tasks[virtualRow.index];
                        if (!task) return null;
                        const depth = (task.parent === 0 || task.parent === "0") ? 0 : 1; // Simplified depth for now
                        const paddingLeft = depth * 20 + 16;

                        return (
                            <div
                                key={virtualRow.key}
                                className="absolute top-0 left-0 w-full flex items-center border-b border-gray-100 text-sm text-gray-700 truncate hover:bg-gray-50"
                                style={{
                                    height: `${virtualRow.size}px`,
                                    transform: `translateY(${virtualRow.start}px)`,
                                    paddingLeft: `${paddingLeft}px`
                                }}
                            >
                                {/* Toggle Button */}
                                {task.type === 'project' && (
                                    <button
                                        className="mr-1 p-0.5 hover:bg-gray-200 rounded cursor-pointer"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            useGanttStore.getState().toggleTask(task.id);
                                        }}
                                    >
                                        {useGanttStore.getState().expandedTaskIds.has(task.id) ? '▼' : '▶'}
                                    </button>
                                )}
                                {task.text}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
