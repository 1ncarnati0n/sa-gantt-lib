import { RefObject } from 'react';
import { Virtualizer } from '@tanstack/react-virtual';
import { ConstructionTask } from '../types';

interface UseTaskFocusOptions {
    /** 스크롤 컨테이너 ref */
    scrollContainerRef: RefObject<HTMLDivElement | null>;
    /** TanStack Virtual의 virtualizer 인스턴스 */
    virtualizer: Virtualizer<HTMLDivElement, Element> | null;
    /** 현재 보이는 Task 목록 */
    visibleTasks: ConstructionTask[];
    /** 전체 Task 목록 (GROUP 날짜 계산용) */
    allTasks?: ConstructionTask[];
    /** 날짜 범위의 시작 날짜 */
    minDate: Date;
    /** 픽셀/일 비율 */
    pixelsPerDay: number;
    /** 사이드바 너비 */
    sidebarWidth: number;
}
interface ScrollOptions {
    behavior?: 'auto' | 'smooth';
    align?: 'start' | 'center' | 'end';
}
/**
 * Task 포커싱 훅
 *
 * 가상화된 리스트에서 특정 Task로 스크롤하는 기능을 제공합니다.
 * - scrollToTask: 세로 스크롤 (가상화 지원)
 * - scrollToTaskDate: 가로 스크롤 (날짜 기반)
 * - focusTask: 양방향 스크롤 (세로 + 가로)
 */
export declare function useTaskFocus({ scrollContainerRef, virtualizer, visibleTasks, allTasks, minDate, pixelsPerDay, sidebarWidth, }: UseTaskFocusOptions): {
    scrollToTask: (taskId: string, options?: ScrollOptions) => void;
    scrollToTaskDate: (task: ConstructionTask, options?: ScrollOptions) => void;
    focusTask: (taskId: string, options?: ScrollOptions) => void;
    scrollToDate: (targetDate: Date, align?: "left" | "center") => void;
    scrollToFirstTask: () => void;
};
export {};
