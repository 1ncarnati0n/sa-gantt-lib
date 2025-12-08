'use client';

import { useCallback, useRef, useEffect } from 'react';
import type { ConstructionTask, Milestone, ViewMode, ZoomLevel } from '../../../types';
import { ZOOM_CONFIG, GANTT_LAYOUT } from '../../../types';
import { calculateDateRange, dateToX } from '../../../utils/dateUtils';

interface UseScrollToDateOptions {
    scrollRef: React.RefObject<HTMLDivElement | null>;
    viewMode: ViewMode;
    activeCPId: string | null;
    zoomLevel: ZoomLevel;
    sidebarWidth: number;
    tasks: ConstructionTask[];
    visibleTasks: ConstructionTask[];
    milestones: Milestone[];
}

export const useScrollToDate = ({
    scrollRef,
    viewMode,
    activeCPId,
    zoomLevel,
    sidebarWidth,
    tasks,
    visibleTasks,
    milestones,
}: UseScrollToDateOptions) => {
    const scrollToDate = useCallback((targetDate: Date, align: 'left' | 'center' = 'left') => {
        const container = scrollRef.current;
        if (!container) return;

        const pxPerDay = ZOOM_CONFIG[zoomLevel].pixelsPerDay;
        const { minDate } = calculateDateRange(tasks, milestones, 60);
        const x = dateToX(targetDate, minDate, pxPerDay);

        const viewportWidth = container.clientWidth;
        const timelineViewWidth = viewportWidth - sidebarWidth - 4;

        let leftMargin = 0;
        if (align === 'center') {
            leftMargin = timelineViewWidth / 2;
        } else {
            leftMargin = Math.min(100, Math.max(50, timelineViewWidth * 0.2));
        }

        container.scrollLeft = Math.max(0, x - leftMargin);
    }, [scrollRef, zoomLevel, tasks, milestones, sidebarWidth]);

    const scrollToFirstTask = useCallback(() => {
        if (viewMode === 'MASTER') {
            if (milestones.length > 0) {
                const sortedMilestones = [...milestones].sort((a, b) => a.date.getTime() - b.date.getTime());
                const firstMilestone = sortedMilestones[0];
                scrollToDate(firstMilestone.date, 'left');
            } else {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                const cpTasks = visibleTasks.filter(t => t.type === 'CP');
                const inProgressCPs = cpTasks.filter(cp => {
                    const start = new Date(cp.startDate);
                    const end = new Date(cp.endDate);
                    start.setHours(0, 0, 0, 0);
                    end.setHours(0, 0, 0, 0);
                    return start <= today && today <= end;
                });

                if (inProgressCPs.length > 0) {
                    const targetCP = inProgressCPs.reduce((a, b) => a.startDate < b.startDate ? a : b);
                    scrollToDate(targetCP.startDate, 'left');
                } else if (cpTasks.length > 0) {
                    const firstCP = cpTasks.reduce((a, b) => a.startDate < b.startDate ? a : b);
                    scrollToDate(firstCP.startDate, 'left');
                }
            }
        } else if (viewMode === 'DETAIL' && activeCPId) {
            const childTasks = tasks.filter(t => t.parentId === activeCPId);

            if (childTasks.length > 0) {
                const minStart = childTasks.reduce((min, t) => t.startDate < min ? t.startDate : min, childTasks[0].startDate);
                const maxEnd = childTasks.reduce((max, t) => t.endDate > max ? t.endDate : max, childTasks[0].endDate);
                const centerTime = minStart.getTime() + (maxEnd.getTime() - minStart.getTime()) / 2;
                const centerDate = new Date(centerTime);
                scrollToDate(centerDate, 'center');
            }
        }
    }, [viewMode, activeCPId, tasks, visibleTasks, milestones, scrollToDate]);

    // Detail View 진입 시 자동 스크롤
    const lastScrolledCPId = useRef<string | null>(null);

    useEffect(() => {
        if (viewMode !== 'DETAIL') {
            lastScrolledCPId.current = null;
        }
    }, [viewMode]);

    useEffect(() => {
        if (viewMode === 'DETAIL' && activeCPId && activeCPId !== lastScrolledCPId.current) {
            lastScrolledCPId.current = activeCPId;
            const timer = setTimeout(() => {
                scrollToFirstTask();
            }, GANTT_LAYOUT.SCROLL_DELAY_MS);
            return () => clearTimeout(timer);
        }
    }, [viewMode, activeCPId, scrollToFirstTask]);

    return {
        scrollToDate,
        scrollToFirstTask,
    };
};
