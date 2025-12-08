'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { addDays } from 'date-fns';
import { dateToX } from '../../../utils/dateUtils';
import type { Milestone } from '../../../types';

/** 마일스톤 드래그 내부 상태 */
interface MilestoneDragState {
    milestoneId: string;
    startX: number;
    originalDate: Date;
    currentX: number;
}

interface UseMilestoneDragOptions {
    minDate: Date;
    pixelsPerDay: number;
    milestones: Milestone[];
    onMilestoneUpdate?: (milestone: Milestone) => void;
}

export const useMilestoneDrag = ({
    minDate,
    pixelsPerDay,
    milestones,
    onMilestoneUpdate,
}: UseMilestoneDragOptions) => {
    const [milestoneDragState, setMilestoneDragState] = useState<MilestoneDragState | null>(null);
    const milestoneDragStateRef = useRef<MilestoneDragState | null>(null);

    useEffect(() => {
        milestoneDragStateRef.current = milestoneDragState;
    }, [milestoneDragState]);

    const handleMilestoneMouseDown = useCallback((e: React.MouseEvent, milestone: Milestone) => {
        if (!onMilestoneUpdate) return;
        e.preventDefault();
        e.stopPropagation();

        const milestoneX = dateToX(milestone.date, minDate, pixelsPerDay);

        const newState: MilestoneDragState = {
            milestoneId: milestone.id,
            startX: e.clientX,
            originalDate: milestone.date,
            currentX: milestoneX,
        };

        setMilestoneDragState(newState);
    }, [onMilestoneUpdate, minDate, pixelsPerDay]);

    const handleMilestoneMouseMove = useCallback((e: MouseEvent) => {
        const state = milestoneDragStateRef.current;
        if (!state) return;

        const deltaX = e.clientX - state.startX;
        const originalX = dateToX(state.originalDate, minDate, pixelsPerDay);
        const newX = Math.max(0, originalX + deltaX);

        setMilestoneDragState(prev => prev ? { ...prev, currentX: newX } : null);
    }, [minDate, pixelsPerDay]);

    const handleMilestoneMouseUp = useCallback((e: MouseEvent) => {
        const state = milestoneDragStateRef.current;
        if (!state || !onMilestoneUpdate) {
            setMilestoneDragState(null);
            return;
        }

        const deltaX = e.clientX - state.startX;
        const deltaDays = Math.round(deltaX / pixelsPerDay);

        if (deltaDays !== 0) {
            const newDate = addDays(state.originalDate, deltaDays);
            const updatedMilestone = milestones.find(m => m.id === state.milestoneId);

            if (updatedMilestone) {
                onMilestoneUpdate({
                    ...updatedMilestone,
                    date: newDate,
                });
            }
        }

        setMilestoneDragState(null);
    }, [onMilestoneUpdate, pixelsPerDay, milestones]);

    // 마일스톤 드래그 이벤트 리스너 등록
    useEffect(() => {
        if (milestoneDragState) {
            window.addEventListener('mousemove', handleMilestoneMouseMove);
            window.addEventListener('mouseup', handleMilestoneMouseUp);

            return () => {
                window.removeEventListener('mousemove', handleMilestoneMouseMove);
                window.removeEventListener('mouseup', handleMilestoneMouseUp);
            };
        }
    }, [milestoneDragState, handleMilestoneMouseMove, handleMilestoneMouseUp]);

    const getMilestoneDragX = useCallback((milestoneId: string): number | undefined => {
        if (milestoneDragState?.milestoneId === milestoneId) {
            return milestoneDragState.currentX;
        }
        return undefined;
    }, [milestoneDragState]);

    const isMilestoneDragging = useCallback((milestoneId: string): boolean => {
        return milestoneDragState?.milestoneId === milestoneId;
    }, [milestoneDragState]);

    return {
        handleMilestoneMouseDown,
        getMilestoneDragX,
        isMilestoneDragging,
    };
};
