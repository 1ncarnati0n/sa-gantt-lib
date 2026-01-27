import { default as React } from 'react';
import { SidebarRowUnifiedProps } from './types';

/**
 * Unified View 전용 사이드바 행 컴포넌트
 *
 * CP(Level 1)와 Task(Level 2)를 계층형 트리 구조로 표시합니다.
 * - 작업명 (계층적 들여쓰기 + CP/T 배지)
 * - 기간 (일수)
 * - 시작일
 * - 종료일
 */
export declare const SidebarRowUnified: React.FC<SidebarRowUnifiedProps>;
