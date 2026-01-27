import { default as React } from 'react';
import { TaskBarProps } from './types';

/**
 * 태스크 바 컴포넌트 (Level 1 & Level 2 통합)
 *
 * isMasterView에 따라 MasterTaskBar 또는 DetailTaskBar로 위임합니다.
 * 기존 API와의 하위 호환성을 유지합니다.
 */
export declare const TaskBar: React.FC<TaskBarProps>;
export { MasterTaskBar } from './MasterTaskBar';
export { DetailTaskBar } from './DetailTaskBar';
export type { MasterTaskBarProps } from './MasterTaskBar';
export type { DetailTaskBarProps } from './DetailTaskBar';
