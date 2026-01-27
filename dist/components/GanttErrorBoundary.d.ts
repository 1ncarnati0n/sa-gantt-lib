import { Component, ErrorInfo, ReactNode } from 'react';

/**
 * Error Boundary Props
 */
interface GanttErrorBoundaryProps {
    /** 렌더링할 자식 컴포넌트 */
    children: ReactNode;
    /** 에러 발생 시 표시할 대체 UI (선택적) */
    fallback?: ReactNode;
    /** 에러 발생 시 호출되는 콜백 */
    onError?: (error: Error, errorInfo: ErrorInfo) => void;
    /** 컴포넌트 이름 (에러 로그용) */
    componentName?: string;
}
/**
 * Error Boundary State
 */
interface GanttErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}
/**
 * 간트 차트용 Error Boundary 컴포넌트
 *
 * 하위 컴포넌트에서 발생한 JavaScript 에러를 캐치하고
 * 폴백 UI를 표시합니다. 전체 앱 크래시를 방지합니다.
 *
 * @example
 * ```tsx
 * <GanttErrorBoundary
 *   onError={(error) => console.error('Gantt Error:', error)}
 *   fallback={<div>오류가 발생했습니다</div>}
 * >
 *   <GanttChart tasks={tasks} />
 * </GanttErrorBoundary>
 * ```
 */
export declare class GanttErrorBoundary extends Component<GanttErrorBoundaryProps, GanttErrorBoundaryState> {
    constructor(props: GanttErrorBoundaryProps);
    /**
     * 에러 발생 시 state 업데이트
     */
    static getDerivedStateFromError(error: Error): Partial<GanttErrorBoundaryState>;
    /**
     * 에러 정보 로깅 및 콜백 호출
     */
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    /**
     * 에러 상태 초기화 (재시도)
     */
    handleRetry: () => void;
    render(): ReactNode;
}
export default GanttErrorBoundary;
