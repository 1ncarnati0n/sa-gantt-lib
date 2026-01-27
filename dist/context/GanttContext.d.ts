import { ReactNode } from 'react';
import { ConstructionTask, ViewMode, CalendarSettings, DropPosition } from '../types';

/**
 * GanttContext에서 제공하는 값의 타입
 * 안정적인 설정과 콜백 함수들을 포함
 */
export interface GanttContextValue {
    viewMode: ViewMode;
    activeCPId: string | null;
    holidays: Date[];
    calendarSettings: CalendarSettings;
    onTaskUpdate?: (task: ConstructionTask) => void | Promise<void>;
    onTaskCreate?: (task: Partial<ConstructionTask>) => void | Promise<void>;
    onTaskDelete?: (taskId: string) => void | Promise<void>;
    onTaskReorder?: (taskId: string, newIndex: number) => void | Promise<void>;
    onTaskGroup?: (taskIds: string[]) => void | Promise<void>;
    onTaskUngroup?: (groupId: string) => void | Promise<void>;
    onTaskMove?: (taskId: string, targetId: string, position: DropPosition) => void | Promise<void>;
    onTaskDoubleClick?: (task: ConstructionTask) => void;
}
/**
 * GanttContext 생성
 * 기본값은 null로 설정하여 Provider 없이 사용 시 에러 감지 가능
 */
declare const GanttContext: import('react').Context<GanttContextValue | null>;
/**
 * GanttProvider Props
 */
interface GanttProviderProps extends GanttContextValue {
    children: ReactNode;
}
/**
 * GanttProvider 컴포넌트
 * GanttChart의 공통 설정과 콜백을 하위 컴포넌트에 전달
 *
 * @example
 * ```tsx
 * <GanttProvider
 *   viewMode="MASTER"
 *   activeCPId={null}
 *   holidays={[]}
 *   calendarSettings={settings}
 *   onTaskUpdate={handleUpdate}
 * >
 *   <GanttSidebar ... />
 *   <GanttTimeline ... />
 * </GanttProvider>
 * ```
 */
export declare function GanttProvider({ children, viewMode, activeCPId, holidays, calendarSettings, onTaskUpdate, onTaskCreate, onTaskDelete, onTaskReorder, onTaskGroup, onTaskUngroup, onTaskMove, onTaskDoubleClick, }: GanttProviderProps): import("react/jsx-runtime").JSX.Element;
/**
 * GanttContext를 사용하는 커스텀 훅
 * Provider 외부에서 사용 시 명확한 에러 메시지 제공
 *
 * @returns GanttContextValue
 * @throws Error if used outside GanttProvider
 *
 * @example
 * ```tsx
 * function ChildComponent() {
 *   const { viewMode, onTaskUpdate } = useGanttContext();
 *   // ...
 * }
 * ```
 */
export declare function useGanttContext(): GanttContextValue;
/**
 * GanttContext 사용 가능 여부 확인 훅
 * Provider 없이도 안전하게 사용 가능 (optional context pattern)
 *
 * @returns GanttContextValue | null
 *
 * @example
 * ```tsx
 * function OptionalContextComponent() {
 *   const ganttContext = useGanttContextOptional();
 *   if (ganttContext) {
 *     // Context가 있을 때만 사용
 *   }
 * }
 * ```
 */
export declare function useGanttContextOptional(): GanttContextValue | null;
export default GanttContext;
