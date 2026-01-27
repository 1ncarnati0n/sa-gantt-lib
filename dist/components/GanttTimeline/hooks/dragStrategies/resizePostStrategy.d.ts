import { DragStrategy } from './types';

/**
 * 후간접/순작업 종료 조정 전략
 *
 * 두 가지 케이스:
 * 1. 후간접이 있으면: 후간접 일수 조정, 종료일 변경
 * 2. 후간접이 없으면: 순작업일 조정, 종료일 변경 (휴일 건너뛰기)
 *
 * 시작일은 항상 고정
 */
export declare const resizePostStrategy: DragStrategy;
