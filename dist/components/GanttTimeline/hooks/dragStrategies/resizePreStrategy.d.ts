import { DragStrategy } from './types';

/**
 * 선간접/순작업 시작 조정 전략
 *
 * 두 가지 케이스:
 * 1. 선간접이 있으면: 선간접 일수 조정, 시작일 변경
 * 2. 선간접이 없으면: 순작업일 조정, 시작일 변경 (휴일 건너뛰기)
 *
 * 종료일은 항상 고정
 */
export declare const resizePreStrategy: DragStrategy;
