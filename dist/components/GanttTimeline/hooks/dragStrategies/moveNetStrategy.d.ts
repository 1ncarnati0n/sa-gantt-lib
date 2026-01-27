import { DragStrategy } from './types';

/**
 * 순작업 위치 이동 전략
 *
 * 핵심 원리:
 * - 순작업 바를 좌우로 이동하면 선간접/후간접이 반대로 조정됨
 * - 전체 바 길이는 유지 (시작일/종료일 불변)
 * - 선간접 최대 증가량 = 원래 후간접 일수
 * - 선간접 최대 감소량 = 원래 선간접 일수
 */
export declare const moveNetStrategy: DragStrategy;
