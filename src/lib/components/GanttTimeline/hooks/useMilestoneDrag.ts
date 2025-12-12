'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { addDays } from 'date-fns';
import { dateToX } from '../../../utils/dateUtils';
import { calculateDeltaDays, setupDragListeners } from './dragUtils';
import type { Milestone } from '../../../types';
import type { MilestoneDragState, BaseDragOptions } from '../types';

// ============================================
// Hook Options
// ============================================

interface UseMilestoneDragOptions extends BaseDragOptions {
    minDate: Date;
    milestones: Milestone[];
    onMilestoneUpdate?: (milestone: Milestone) => void;
}

// ============================================
// useMilestoneDrag Hook
// ============================================

export const useMilestoneDrag = ({
    minDate,
    pixelsPerDay,
    milestones,
    onMilestoneUpdate,
}: UseMilestoneDragOptions) => {
    const [dragState, setDragState] = useState<MilestoneDragState | null>(null);
    const dragStateRef = useRef<MilestoneDragState | null>(null);

    // State-Ref 동기화
    useEffect(() => {
        dragStateRef.current = dragState;
    }, [dragState]);

    // ========================================
    // 드래그 시작
    // ========================================
    const handleMouseDown = useCallback((e: React.MouseEvent, milestone: Milestone) => {
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

        setDragState(newState);
        dragStateRef.current = newState;
    }, [onMilestoneUpdate, minDate, pixelsPerDay]);

    // ========================================
    // 드래그 중
    // ========================================
    const handleMouseMove = useCallback((e: MouseEvent) => {
        const state = dragStateRef.current;
        if (!state) return;

        const deltaX = e.clientX - state.startX;
        const originalX = dateToX(state.originalDate, minDate, pixelsPerDay);
        const newX = Math.max(0, originalX + deltaX);

        setDragState(prev => prev ? { ...prev, currentX: newX } : null);
    }, [minDate, pixelsPerDay]);

    // ========================================
    // 드래그 완료
    // ========================================
    const handleMouseUp = useCallback(() => {
        const state = dragStateRef.current;
        if (!state || !onMilestoneUpdate) {
            setDragState(null);
            dragStateRef.current = null;
            return;
        }

        // currentX에서 deltaDays 계산
        const originalX = dateToX(state.originalDate, minDate, pixelsPerDay);
        const deltaX = state.currentX - originalX;
        const deltaDays = calculateDeltaDays(deltaX, pixelsPerDay);

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

        setDragState(null);
        dragStateRef.current = null;
    }, [onMilestoneUpdate, pixelsPerDay, milestones, minDate]);

    // ========================================
    // 이벤트 리스너 관리
    // ========================================
    useEffect(() => {
        if (dragState) {
            return setupDragListeners(handleMouseMove, handleMouseUp, 'grabbing');
        }
    }, [dragState, handleMouseMove, handleMouseUp]);

    // ========================================
    // 드래그 정보 조회
    // ========================================
    const getDragInfo = useCallback((milestoneId: string): number | undefined => {
        if (dragState?.milestoneId === milestoneId) {
            return dragState.currentX;
        }
        return undefined;
    }, [dragState]);

    const isDraggingMilestone = useCallback((milestoneId: string): boolean => {
        return dragState?.milestoneId === milestoneId;
    }, [dragState]);

    return {
        handleMilestoneMouseDown: handleMouseDown,
        getMilestoneDragX: getDragInfo,
        isMilestoneDragging: isDraggingMilestone,
    };
};
