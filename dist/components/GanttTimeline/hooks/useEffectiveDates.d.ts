import { DragInfo } from '../types';

interface UseEffectiveDatesOptions {
    /** 태스크 원본 시작일 */
    startDate: Date;
    /** 태스크 원본 종료일 */
    endDate: Date;
    /** 개별 드래그 정보 */
    dragInfo?: DragInfo | null;
    /** 그룹 드래그 델타 (일) */
    groupDragDeltaDays?: number;
    /** 그룹 드래그 정보 */
    groupDragInfo?: {
        startDate: Date;
        endDate: Date;
    } | null;
    /** 종속성 드래그 델타 (일) */
    dependencyDragDeltaDays?: number;
    /** 종속성 드래그 정보 */
    dependencyDragInfo?: {
        startDate: Date;
        endDate: Date;
    } | null;
}
interface UseEffectiveDatesReturn {
    /** 효과적인 시작일 */
    effectiveStartDate: Date;
    /** 효과적인 종료일 */
    effectiveEndDate: Date;
    /** 종속성 드래그 중 여부 */
    isDependencyDragging: boolean;
}
export declare const useEffectiveDates: ({ startDate, endDate, dragInfo, groupDragDeltaDays, groupDragInfo, dependencyDragDeltaDays, dependencyDragInfo, }: UseEffectiveDatesOptions) => UseEffectiveDatesReturn;
export {};
