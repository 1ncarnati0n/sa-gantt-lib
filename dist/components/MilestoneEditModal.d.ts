import { default as React } from 'react';
import { Milestone } from '../types';

interface MilestoneEditModalProps {
    milestone: Milestone | null;
    isOpen: boolean;
    isNew?: boolean;
    onClose: () => void;
    onSave: (milestone: Milestone) => void | Promise<void>;
    onDelete?: (milestoneId: string) => void | Promise<void>;
}
/**
 * 마일스톤 편집 모달
 *
 * 마일스톤의 이름, 설명, 날짜를 편집할 수 있는 모달 컴포넌트입니다.
 */
export declare const MilestoneEditModal: React.FC<MilestoneEditModalProps>;
export {};
