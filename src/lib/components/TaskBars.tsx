'use client';

import { useRef, useState, useEffect } from 'react';
import { Virtualizer } from '@tanstack/react-virtual';
import { useGanttStore } from '../store/useGanttStore';
import { getX, getWidth } from '../utils/dateUtils';
import { GanttTask } from '../types';
import { addDays } from 'date-fns';

interface TaskBarsProps {
    virtualizer: Virtualizer<HTMLDivElement, Element>;
}

const TaskBarItem = ({ task, virtualRow, startDate, columnWidth, onUpdate }: {
    task: GanttTask;
    // index: number;
    virtualRow: any;
    startDate: Date;
    columnWidth: number;
    onUpdate: (id: string, start: Date, end: Date) => void;
}) => {
    const [isDragging, setIsDragging] = useState(false);
    const [isResizing, setIsResizing] = useState<'left' | 'right' | null>(null);
    const [dragX, setDragX] = useState<number | null>(null);
    const startXRef = useRef<number>(0);
    const initialMouseXRef = useRef<number>(0);

    const currentX = dragX ?? getX(task.start_date, startDate, columnWidth);
    const width = getWidth(task.start_date, task.end_date, columnWidth);

    useEffect(() => {
        if (isDragging || isResizing) {
            const handleMouseMove = (e: MouseEvent) => {
                const delta = e.clientX - initialMouseXRef.current;

                if (isDragging) {
                    setDragX(startXRef.current + delta);
                } else if (isResizing === 'right') {
                    // Visual feedback for resizing could be added here (e.g. changing width)
                    // For now, we rely on the final drop to update, or we could update a local 'width' state.
                }
            };

            const handleMouseUp = (e: MouseEvent) => {
                const delta = e.clientX - initialMouseXRef.current;
                const daysDelta = Math.round(delta / columnWidth);

                if (isDragging) {
                    setIsDragging(false);
                    setDragX(null);
                    if (daysDelta !== 0) {
                        const newStart = addDays(task.start_date, daysDelta);
                        const newEnd = addDays(task.end_date, daysDelta);
                        onUpdate(task.id, newStart, newEnd);
                    }
                } else if (isResizing) {
                    const direction = isResizing;
                    setIsResizing(null);
                    if (daysDelta !== 0) {
                        let newStart = task.start_date;
                        let newEnd = task.end_date;

                        if (direction === 'right') {
                            newEnd = addDays(task.end_date, daysDelta);
                            // Prevent end before start
                            if (newEnd <= newStart) newEnd = addDays(newStart, 1);
                        } else if (direction === 'left') {
                            newStart = addDays(task.start_date, daysDelta);
                            // Prevent start after end
                            if (newStart >= newEnd) newStart = addDays(newEnd, -1);
                        }
                        onUpdate(task.id, newStart, newEnd);
                    }
                }
            };

            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('mouseup', handleMouseUp);
            };
        }
    }, [isDragging, isResizing, columnWidth, task, onUpdate]);

    const handleMouseDown = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsDragging(true);
        startXRef.current = getX(task.start_date, startDate, columnWidth);
        initialMouseXRef.current = e.clientX;
    };

    const handleResizeStart = (e: React.MouseEvent, direction: 'left' | 'right') => {
        e.stopPropagation();
        setIsResizing(direction);
        initialMouseXRef.current = e.clientX;
    };

    return (
        <div
            className="absolute top-0 left-0 h-full flex items-center pointer-events-auto group"
            style={{
                height: `${virtualRow.size}px`,
                transform: `translateY(${virtualRow.start}px)`,
                zIndex: isDragging || isResizing ? 50 : 10
            }}
        >
            <div
                className={`h-3/5 rounded-full relative shadow-sm transition-colors cursor-pointer ${isDragging ? 'bg-blue-600 shadow-lg' : 'bg-blue-500 hover:bg-blue-600'}`}
                style={{
                    marginLeft: `${currentX}px`,
                    width: `${width}px`,
                }}
                onMouseDown={handleMouseDown}
            >
                {/* Left Resize Handle */}
                <div
                    className="absolute left-0 top-0 bottom-0 w-2 cursor-ew-resize hover:bg-black/10 rounded-l-full"
                    onMouseDown={(e) => handleResizeStart(e, 'left')}
                />

                {/* Right Resize Handle */}
                <div
                    className="absolute right-0 top-0 bottom-0 w-2 cursor-ew-resize hover:bg-black/10 rounded-r-full"
                    onMouseDown={(e) => handleResizeStart(e, 'right')}
                />

                <span className="absolute left-full ml-2 text-xs text-gray-600 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity select-none">
                    {task.text}
                </span>
            </div>
        </div>
    );
};

export function TaskBars({ virtualizer }: TaskBarsProps) {
    const { getVisibleTasks, startDate, endDate, columnWidth, updateTask } = useGanttStore();
    const tasks = getVisibleTasks ? getVisibleTasks() : [];
    const virtualRows = virtualizer.getVirtualItems();

    if (!startDate || !endDate) return null;

    return (
        <div className="absolute top-0 left-0 w-full z-10 pointer-events-none" style={{ height: `${virtualizer.getTotalSize()}px` }}>
            {virtualRows.map((virtualRow) => {
                const task = tasks[virtualRow.index];
                if (!task) return null;
                return (
                    <TaskBarItem
                        key={virtualRow.key}
                        task={task}
                        // index={virtualRow.index}
                        virtualRow={virtualRow}
                        startDate={startDate}
                        columnWidth={columnWidth}
                        onUpdate={(id, start, end) => updateTask(id, { start_date: start, end_date: end })}
                    />
                );
            })}
        </div>
    );
}
