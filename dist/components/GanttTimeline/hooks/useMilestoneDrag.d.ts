import { Milestone } from '../../../types';
import { BaseDragOptions } from '../types';

interface UseMilestoneDragOptions extends BaseDragOptions {
    minDate: Date;
    milestones: Milestone[];
    onMilestoneUpdate?: (milestone: Milestone) => void;
}
export declare const useMilestoneDrag: ({ minDate, pixelsPerDay, milestones, onMilestoneUpdate, }: UseMilestoneDragOptions) => {
    handleMilestoneMouseDown: (e: React.MouseEvent, milestone: Milestone) => void;
    getMilestoneDragX: (milestoneId: string) => number | undefined;
    isMilestoneDragging: (milestoneId: string) => boolean;
};
export {};
