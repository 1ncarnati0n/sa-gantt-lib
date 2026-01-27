import { default as React } from 'react';
import { Milestone } from '../../types';
import { MilestoneMarkerProps, MilestoneWithLayout } from './types';

/**
 * 마일스톤 충돌 감지 및 레벨 할당
 * - 레벨 0: 마커 왼쪽 (기본)
 * - 레벨 1: 마커 오른쪽 (왼쪽 충돌 시)
 * - 레벨 -1: 마커 아래 (왼쪽/오른쪽 모두 충돌 시)
 */
export declare const calculateMilestoneLabels: (milestones: Milestone[], minDate: Date, pixelsPerDay: number) => MilestoneWithLayout[];
/**
 * 마일스톤 마커 컴포넌트
 */
export declare const MilestoneMarker: React.FC<MilestoneMarkerProps>;
