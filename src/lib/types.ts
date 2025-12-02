// ============================================
// SA-Gantt-Lib: 건설 공정표 전문 간트 차트 라이브러리
// 타입 정의
// ============================================

// ============================================
// 기본 타입 및 상수
// ============================================

/** 공정 레벨 (Level 1: 공구공정표, Level 2: 주공정표) */
export type WbsLevel = 1 | 2;

/** 뷰 모드 (줌 레벨) */
export type ZoomLevel = 'DAY' | 'WEEK' | 'MONTH';

/** 현재 활성화된 뷰 (Master: L1, Detail: L2) */
export type ViewMode = 'MASTER' | 'DETAIL';

/** @deprecated 기존 배치 타입 - 하위 호환성을 위해 유지 */
export type Placement = 'PRE' | 'POST';

/** 유연한 연결을 위한 앵커 포인트 */
export type AnchorPoint = 'START' | 'NET_WORK_START' | 'NET_WORK_END' | 'END';

/** 종속성 타입 */
export type DependencyType = 'FS' | 'SS' | 'FF' | 'SF';

/** 태스크 타입 */
export type TaskType = 'GROUP' | 'CP' | 'TASK';

// ============================================
// 색상 상수
// ============================================

export const GANTT_COLORS = {
    // Level 1 Colors (공구 공정표)
    vermilion: '#E34234',     // 작업일수 (Work Days)
    teal: '#008080',          // 비작업일수 (Non-Work Days)

    // Level 2 Colors (주공정표)
    red: '#FF5252',           // 순작업일 (Net Work)
    blue: '#448AFF',          // 간접작업일 (Indirect Work)

    // Common Colors
    milestone: '#4B5563',     // 마일스톤
    dependency: '#9CA3AF',    // 연결선
    grid: '#E5E7EB',          // 그리드 라인
    weekend: '#f3f4f6',       // 주말 배경
    holiday: '#fef2f2',       // 휴일 배경
} as const;

// ============================================
// 레이아웃 상수
// ============================================

export const GANTT_LAYOUT = {
    ROW_HEIGHT: 40,
    HEADER_HEIGHT: 80,
    MILESTONE_LANE_HEIGHT: 40,
    BAR_HEIGHT: 24,
    SIDEBAR_WIDTH: 400,
    SIDEBAR_MIN_WIDTH: 250,
    SIDEBAR_MAX_WIDTH: 800,
} as const;

// ============================================
// 줌 레벨별 설정
// ============================================

export const ZOOM_CONFIG: Record<ZoomLevel, { pixelsPerDay: number; label: string }> = {
    DAY: { pixelsPerDay: 30, label: '일' },
    WEEK: { pixelsPerDay: 10, label: '주' },
    MONTH: { pixelsPerDay: 2, label: '월' },
};

// ============================================
// 캘린더 설정
// ============================================

export interface CalendarSettings {
    workOnSaturdays: boolean;
    workOnSundays: boolean;
    workOnHolidays: boolean;
}

export interface Holiday {
    date: string;           // ISO 8601 (YYYY-MM-DD)
    name: string;           // 휴일명
}

// ============================================
// 종속성 인터페이스
// ============================================

export interface Dependency {
    id: string;
    predecessorId: string;
    type: DependencyType;
    lag?: number;                     // 지연 일수 (음수 가능)
    sourceAnchor?: AnchorPoint;       // 출발 지점
    targetAnchor?: AnchorPoint;       // 도착 지점
}

// ============================================
// 태스크 데이터 인터페이스
// ============================================

/** Level 1 전용 데이터 (공구 공정표 - CP/Aggregate) */
export interface CPData {
    workDaysTotal: number;            // 작업일수 (Vermilion)
    nonWorkDaysTotal: number;         // 비작업일수 (Teal)
}

/** Level 2 전용 데이터 (주공정표 - Task Detail) */
export interface TaskData {
    netWorkDays: number;              // 순작업일 (Red) - 휴일 제외, 가운데 위치
    indirectWorkDaysPre: number;      // 앞 간접작업일 (Blue) - 휴일 포함, 왼쪽 위치
    indirectWorkDaysPost: number;     // 뒤 간접작업일 (Blue) - 휴일 포함, 오른쪽 위치

    // 산출 근거 (Phase 2: 자동 계산용)
    quantity?: number;                // 수량
    unit?: string;                    // 단위 (㎥, 본, ton, ㎡ 등)
    dailyOutput?: number;             // 1일 작업량
    crew?: number;                    // 작업조 수
}

// ============================================
// 메인 태스크 인터페이스
// ============================================

export interface ConstructionTask {
    // 기본 식별
    id: string;
    parentId: string | null;          // null = 루트
    wbsLevel: WbsLevel;
    type: TaskType;
    name: string;

    // 스케줄링 결과
    startDate: Date;
    endDate: Date;

    // Level별 데이터 (Optional)
    cp?: CPData;                      // Level 1 전용
    task?: TaskData;                  // Level 2 전용

    // 종속성
    dependencies: Dependency[];

    // UI 상태 (선택적)
    isExpanded?: boolean;
}

// ============================================
// 마일스톤 인터페이스
// ============================================

export interface Milestone {
    id: string;
    date: Date;
    name: string;
    description?: string;
}

// ============================================
// 날짜 계산 결과 인터페이스
// ============================================

export interface TaskDates {
    startDate: Date;
    endDate: Date;
    netWorkStartDate: Date;
    netWorkEndDate: Date;
    indirectPreStartDate?: Date;      // 앞 간접작업 시작일
    indirectPreEndDate?: Date;        // 앞 간접작업 종료일
    indirectPostStartDate?: Date;     // 뒤 간접작업 시작일
    indirectPostEndDate?: Date;       // 뒤 간접작업 종료일
}

// ============================================
// 컴포넌트 Props 인터페이스
// ============================================

/** 메인 GanttChart Props */
export interface GanttChartProps {
    // 필수 데이터
    tasks: ConstructionTask[];
    
    // 선택적 데이터
    milestones?: Milestone[];
    holidays?: Date[];
    calendarSettings?: CalendarSettings;

    // 초기 상태
    initialView?: ViewMode;
    initialZoomLevel?: ZoomLevel;
    initialExpandedIds?: string[];

    // 이벤트 핸들러 (외부 데이터 소스 연동용)
    onTaskUpdate?: (task: ConstructionTask) => void | Promise<void>;
    onTaskCreate?: (task: Partial<ConstructionTask>) => void | Promise<void>;
    onTaskDelete?: (taskId: string) => void | Promise<void>;
    onTaskReorder?: (taskId: string, newIndex: number) => void | Promise<void>;
    onDependencyCreate?: (taskId: string, dependency: Dependency) => void | Promise<void>;
    onDependencyDelete?: (taskId: string, dependencyId: string) => void | Promise<void>;
    onViewChange?: (view: ViewMode, activeCPId?: string) => void;
    onTaskGroup?: (taskIds: string[]) => void | Promise<void>;
    onTaskUngroup?: (groupId: string) => void | Promise<void>;

    // 저장/초기화 (외부에서 제어)
    onSave?: () => void;
    onReset?: () => void;
    hasUnsavedChanges?: boolean;
    saveStatus?: 'idle' | 'saving' | 'saved';

    // 스타일링
    className?: string;
    style?: React.CSSProperties;
}

/** Sidebar Props */
export interface GanttSidebarProps {
    tasks: ConstructionTask[];
    viewMode: ViewMode;
    expandedIds: Set<string>;
    onToggle: (taskId: string) => void;
    onTaskClick: (task: ConstructionTask) => void;
}

/** Timeline Props */
export interface GanttTimelineProps {
    tasks: ConstructionTask[];
    milestones: Milestone[];
    viewMode: ViewMode;
    zoomLevel: ZoomLevel;
    holidays: Date[];
    calendarSettings: CalendarSettings;
    onTaskUpdate?: (task: ConstructionTask) => void;
}

// ============================================
// Store State 인터페이스 (UI 상태만)
// ============================================

export interface GanttUIState {
    // View State
    viewMode: ViewMode;
    activeCPId: string | null;        // Detail 뷰에서 선택된 CP ID
    zoomLevel: ZoomLevel;

    // UI Interaction State
    selectedTaskId: string | null;
    hoveredTaskId: string | null;
    expandedTaskIds: Set<string>;

    // Sidebar
    sidebarWidth: number;

    // Drag State
    isDragging: boolean;
    dragType: 'MOVE' | 'RESIZE_PRE' | 'RESIZE_POST' | 'RESIZE_NET' | 'LINK' | null;
    dragTaskId: string | null;
}

export interface GanttUIActions {
    // View Actions
    setViewMode: (mode: ViewMode, cpId?: string | null) => void;
    setZoomLevel: (level: ZoomLevel) => void;

    // Task UI Actions
    selectTask: (taskId: string | null) => void;
    hoverTask: (taskId: string | null) => void;
    toggleTask: (taskId: string) => void;
    expandAll: (taskIds: string[]) => void;
    collapseAll: () => void;

    // Sidebar Actions
    setSidebarWidth: (width: number) => void;

    // Drag Actions
    startDrag: (type: GanttUIState['dragType'], taskId: string) => void;
    endDrag: () => void;
}

export type GanttStore = GanttUIState & GanttUIActions;

// ============================================
// 유틸리티 타입
// ============================================

/** 날짜 범위 */
export interface DateRange {
    start: Date;
    end: Date;
}

/** 픽셀 좌표 */
export interface Point {
    x: number;
    y: number;
}

/** 사각형 영역 */
export interface Rect {
    x: number;
    y: number;
    width: number;
    height: number;
}
