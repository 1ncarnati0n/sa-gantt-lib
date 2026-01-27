import { AnchorDependency, ConstructionTask } from '../../../types';

/** 연결 시작 상태 (dayIndex 기반) */
export interface ConnectingState {
    taskId: string;
    dayIndex: number;
}
/** 순환 감지 정보 */
export interface CycleDetectedInfo {
    sourceTaskId: string;
    targetTaskId: string;
}
/** 훅 옵션 */
interface UseAnchorConnectionOptions {
    dependencies: AnchorDependency[];
    tasks: ConstructionTask[];
    onDependencyCreate?: (dependency: AnchorDependency) => void;
    onDependencyDelete?: (depId: string) => void;
    /** 순환 종속성 감지 시 호출되는 콜백 */
    onCycleDetected?: (info: CycleDetectedInfo) => void;
}
/** 훅 반환 타입 */
interface UseAnchorConnectionReturn {
    connectingFrom: ConnectingState | null;
    hoveredAnchor: {
        taskId: string;
        dayIndex: number;
    } | null;
    selectedDepId: string | null;
    hoveredDepId: string | null;
    isConnecting: boolean;
    handleAnchorClick: (taskId: string, dayIndex: number) => void;
    handleAnchorHover: (taskId: string, dayIndex: number | null) => void;
    handleDependencyClick: (depId: string) => void;
    handleDependencyHover: (depId: string | null) => void;
    cancelConnection: () => void;
    deleteSelectedDependency: () => void;
    clearSelection: () => void;
}
/**
 * 앵커 연결 관리 훅
 * - 앵커 클릭으로 종속성 생성 (dayIndex 기반)
 * - 종속성 선택/삭제
 */
export declare const useAnchorConnection: ({ dependencies, tasks, onDependencyCreate, onDependencyDelete, onCycleDetected, }: UseAnchorConnectionOptions) => UseAnchorConnectionReturn;
export {};
