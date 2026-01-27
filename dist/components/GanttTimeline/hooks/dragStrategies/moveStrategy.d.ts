import { DragStrategy } from './types';

/**
 * 전체 바 이동 전략
 *
 * 핵심 원리:
 * 1. 새 시작일 계산 (델타만큼 이동)
 * 2. 시작일이 휴일이면 드래그 방향으로 스냅
 * 3. 종료일 재계산: 선간접(달력일) + 순작업(작업일, 휴일건너뛰기) + 후간접(달력일)
 */
export declare const moveStrategy: DragStrategy;
