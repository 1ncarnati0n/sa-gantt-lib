// ============================================
// 기본 타입 및 상수
// ============================================

/** 공정 레벨 (Level 1: 공구공정표, Level 2: 주공정표) */
export type WbsLevel = 1 | 2;

/** 뷰 모드 (줌 레벨) */
export type ViewMode = 'day' | 'week' | 'month' | 'year';

/** 현재 활성화된 뷰 (Master: L1, Detail: L2) */
export type CurrentView = 'master' | 'detail';

/** 기간 배치 타입 (L2: 간접작업의 위치) */
export type Placement = 'PRE' | 'POST' | 'BOTH';

/** 유연한 연결을 위한 앵커 포인트 */
export type AnchorPoint = 'START' | 'NET_WORK_START' | 'NET_WORK_END' | 'END';

/** 종속성 타입 */
export type DependencyType = 'FS' | 'SS' | 'FF' | 'SF';

/** 노드 타입 */
export type NodeType = 'cp' | 'group' | 'task' | 'milestone';

export const GANTT_COLORS = {
  // Level 1 Colors
  vermilion: '#E34234', // 작업일수
  teal: '#008080',      // 비작업일수
  
  // Level 2 Colors
  crimson: '#DC143C',   // 순작업일
  steelBlue: '#4682B4', // 간접작업일
  
  // Common Colors
  slateGray: '#708090', // 연결선
  lightGray: '#E5E7EB', // 그리드
  hoverBg: '#F3F4F6',   // 호버 배경
  selection: '#E0E7FF', // 선택 강조
} as const;

// ============================================
// 종속성 인터페이스
// ============================================

export interface Dependency {
  id: string;
  predecessorId: string;
  successorId: string;
  type: DependencyType;
  lag: number;                    // 지연 일수 (음수 가능)
  sourceAnchor: AnchorPoint;      // 출발 지점
  targetAnchor: AnchorPoint;      // 도착 지점
}

// ============================================
// 데이터 상세 인터페이스
// ============================================

/** Level 1 전용 데이터 (공구 공정표) */
export interface CPData {
  workDaysTotal: number;          // 작업일수 (Vermilion)
  nonWorkDaysTotal: number;       // 비작업일수 (Teal)
  childCPIds?: string[];          // 하위 CP ID 목록 (집계용)
}

/** Level 2 전용 데이터 (주공정표) */
export interface TaskData {
  netWorkDays: number;            // 순작업일 (Red)
  indirectWorkDays: number;       // 간접작업일 (Blue)
  placement: Placement;           // 배치 순서
  indirectLabel?: string;         // 간접작업 라벨 (검측, 양생 등)
  
  // 산출 근거 (자동계산용)
  quantity?: number;              // 수량
  unit?: string;                  // 단위 (㎥, 본, ton, ㎡ 등)
  dailyOutput?: number;           // 1일 작업량
  crew?: number;                  // 작업조 수
}

/** 마일스톤 데이터 */
export interface MilestoneData {
  label: string;                  // 착공, 골조완료, 습식마감완료, 준공
  icon?: string;                  // 아이콘 타입
}

// ============================================
// 메인 노드 인터페이스
// ============================================

export interface ConstructionNode {
  // 기본 식별
  id: string;
  parentId: string | null;        // null = 루트
  wbsLevel: WbsLevel;
  nodeType: NodeType;
  name: string;
  
  // 스케줄링 (공통)
  // 문자열(ISO 8601)로 저장하여 직렬화 용이성 확보, 계산 시 Date로 변환
  startDate: string;              
  endDate: string;                
  
  // Level별 데이터 (Optional)
  cpData?: CPData;                // Level 1 전용
  taskData?: TaskData;            // Level 2 전용
  milestoneData?: MilestoneData;  // 마일스톤 전용
  
  // 종속성 (해당 노드가 Source인 연결선들) -> Store에서 별도 관리하므로 여기선 제외 가능하나, 편의상 포함할 수도 있음.
  // 여기서는 Store에서 중앙 관리하는 방식(dependencies 배열 별도)을 채택하므로 노드 내부에는 포함하지 않음.
  
  // UI 상태
  isExpanded?: boolean;
  isVisible?: boolean; // 필터링 등에 사용
  
  // 메타데이터
  order: number;                  // 표시 순서
  depth: number;                  // 트리 깊이 (루트 = 0)
}

// ============================================
// 캘린더 및 설정 인터페이스
// ============================================

export interface NonWorkingDay {
  date: string;                   // ISO 8601 (YYYY-MM-DD)
  reason: string;                 // 기상, 휴무, 명절 등
  affectsNetWork: boolean;        // 순작업에 영향 (true = skip)
  affectsIndirect: boolean;       // 간접작업에 영향 (보통 false)
}

export interface CalendarConfig {
  nonWorkingDays: NonWorkingDay[];
  weekendPolicy: 'skip' | 'include'; // 주말 처리
  holidayPolicy: 'skip' | 'include'; // 공휴일 처리
}

export interface ColumnConfig {
  id: string;
  header: string;
  width: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  template?: (node: ConstructionNode) => React.ReactNode;
}

// ============================================
// 컴포넌트 Props
// ============================================

export interface GanttChartProps {
  initialNodes?: ConstructionNode[];
  initialDependencies?: Dependency[];
  initialCalendar?: CalendarConfig;
  className?: string;
  style?: React.CSSProperties;
}
