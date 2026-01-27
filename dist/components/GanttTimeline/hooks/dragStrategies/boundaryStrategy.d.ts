import { DragStrategy } from './types';

/**
 * 선간접-순작업 경계 조정 전략 (resize-pre-net)
 *
 * 핵심 원리:
 * - 경계선을 이동하면 선간접 증가 = 순작업 감소 (또는 반대)
 * - 전체 바 길이 유지 (시작일/종료일 불변)
 * - 순작업은 최소 1일 유지
 */
export declare const resizePreNetStrategy: DragStrategy;
/**
 * 순작업-후간접 경계 조정 전략 (resize-net-post)
 *
 * 핵심 원리:
 * - 경계선을 이동하면 순작업 증가 = 후간접 감소 (또는 반대)
 * - 전체 바 길이 유지 (시작일/종료일 불변)
 * - 순작업은 최소 1일 유지
 */
export declare const resizeNetPostStrategy: DragStrategy;
