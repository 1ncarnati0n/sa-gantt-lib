import { ZoomLevel } from './core';

/**
 * 간트 차트 색상 - CSS 변수 참조
 * SVG fill/stroke 속성에서 직접 사용 가능
 * 테마 변경 시 자동으로 색상이 전환됨
 */
export declare const GANTT_COLORS: {
    readonly vermilion: "var(--gantt-vermilion)";
    readonly teal: "var(--gantt-teal)";
    readonly red: "var(--gantt-red)";
    readonly blue: "var(--gantt-blue)";
    readonly milestone: "var(--gantt-milestone)";
    readonly milestoneDetail: "var(--gantt-milestone-detail)";
    readonly milestoneDetailHover: "var(--gantt-milestone-detail-hover)";
    readonly dependency: "var(--gantt-dependency)";
    readonly grid: "var(--gantt-grid)";
    readonly gridDark: "var(--gantt-grid-dark)";
    readonly focus: "var(--gantt-focus)";
    readonly success: "var(--gantt-success)";
    readonly bgPrimary: "var(--gantt-bg-primary)";
    readonly bgSecondary: "var(--gantt-bg-secondary)";
    readonly bgHover: "var(--gantt-bg-hover)";
    readonly bgSelected: "var(--gantt-bg-selected)";
    readonly textPrimary: "var(--gantt-text-primary)";
    readonly textSecondary: "var(--gantt-text-secondary)";
    readonly textMuted: "var(--gantt-text-muted)";
    readonly textInverse: "var(--gantt-text-inverse)";
    readonly border: "var(--gantt-border)";
    readonly borderLight: "var(--gantt-border-light)";
    readonly borderFocus: "var(--gantt-border-focus)";
    readonly weekend: "var(--gantt-weekend-bg)";
    readonly holiday: "var(--gantt-holiday-bg)";
    readonly sunday: "var(--gantt-sunday-bg)";
    readonly summaryBar: "var(--gantt-summary-bar)";
    readonly summaryProgress: "var(--gantt-summary-progress)";
    readonly anchorFill: "var(--gantt-anchor-fill)";
    readonly anchorStroke: "var(--gantt-anchor-stroke)";
    readonly anchorHover: "var(--gantt-anchor-hover)";
    readonly tooltipBg: "var(--gantt-tooltip-bg)";
    readonly tooltipText: "var(--gantt-tooltip-text)";
    readonly dragPreview: "var(--gantt-drag-preview)";
    readonly badgeBlock: "#e5e7eb";
    readonly badgeBlockText: "#1f2937";
    readonly badgeBlockBorder: "#374151";
    readonly badgeGroup: "#b0b3b8";
};
/**
 * GANTT_COLORS 객체의 키 타입
 * IDE 자동완성 및 타입 검증에 활용
 *
 * @example
 * const colorKey: GanttColorKey = 'vermilion';
 * const cssValue = GANTT_COLORS[colorKey];
 */
export type GanttColorKey = keyof typeof GANTT_COLORS;
/**
 * 타입 안전한 색상 접근 헬퍼
 *
 * @param key - GANTT_COLORS의 키
 * @returns CSS 변수 문자열 (예: 'var(--gantt-vermilion)')
 *
 * @example
 * // SVG fill 속성에서 사용
 * <rect fill={getGanttColor('vermilion')} />
 *
 * // 동적 색상 선택
 * const barColor = getGanttColor(isWorkDay ? 'vermilion' : 'teal');
 */
export declare function getGanttColor(key: GanttColorKey): string;
/**
 * 정적 색상값 (SSR/폴백용)
 * CSS 변수가 아닌 실제 색상값이 필요한 경우 사용
 */
export declare const GANTT_COLORS_STATIC: {
    readonly vermilion: "#E34234";
    readonly teal: "#008080";
    readonly red: "#FF5252";
    readonly blue: "#448AFF";
    readonly milestone: "#4B5563";
    readonly milestoneDetail: "#F59E0B";
    readonly dependency: "#9CA3AF";
    readonly grid: "#E5E7EB";
    readonly focus: "#3B82F6";
};
export declare const GANTT_LAYOUT: {
    readonly ROW_HEIGHT: 30;
    readonly ROW_HEIGHT_COMPACT: 12;
    /** 그룹행 컴팩트 높이 (30% 감소: 30px → 21px) */
    readonly GROUP_ROW_HEIGHT_COMPACT: 21;
    readonly HEADER_HEIGHT: 80;
    readonly MILESTONE_LANE_HEIGHT: 40;
    readonly BAR_HEIGHT: 9;
    readonly BAR_HEIGHT_COMPACT: 4;
    readonly SIDEBAR_WIDTH: 500;
    readonly SIDEBAR_MIN_WIDTH: 300;
    readonly SIDEBAR_MAX_WIDTH: 800;
    readonly SIDEBAR_MASTER_WIDTH: 500;
    readonly SIDEBAR_DETAIL_WIDTH: 600;
    readonly SIDEBAR_UNIFIED_WIDTH: 450;
    /** 뷰 전환 후 스크롤 대기 시간 (ms) */
    readonly SCROLL_DELAY_MS: 100;
    /** SVG 하단 여백 (스크롤 시 종속선 계산용) */
    readonly BOTTOM_PADDING: 100;
};
/**
 * Compact 모드에 따른 레이아웃 값 반환
 * @param isCompact - Compact 모드 여부
 */
export declare function getLayoutValues(isCompact: boolean): {
    rowHeight: number;
    barHeight: number;
};
/** 컬럼 설정 인터페이스 */
export interface ColumnConfig {
    id: string;
    label: string;
    width: number;
    minWidth: number;
}
/** Master View 기본 컬럼 (총 470px) */
export declare const DEFAULT_MASTER_COLUMNS: ColumnConfig[];
/** Detail View 기본 컬럼 (총 565px) */
export declare const DEFAULT_DETAIL_COLUMNS: ColumnConfig[];
/** Unified View 기본 컬럼 (총 450px) - CP/Task 공통 */
export declare const DEFAULT_UNIFIED_COLUMNS: ColumnConfig[];
export declare const ZOOM_CONFIG: Record<ZoomLevel, {
    pixelsPerDay: number;
    label: string;
}>;
/**
 * 앵커 포인트 관련 상수
 * AnchorPoints.tsx, DependencyLines.tsx에서 공통 사용
 */
export declare const GANTT_ANCHOR: {
    /** 기본 앵커 반지름 */
    readonly RADIUS: 1.5;
    /** 활성화된 앵커 반지름 (연결 시작점) */
    readonly RADIUS_ACTIVE: 2.5;
    /** 연결된 앵커 반지름 */
    readonly RADIUS_CONNECTED: 2;
    /** 클릭 영역 반지름 (터치 친화적) */
    readonly HIT_AREA: 10;
    /** 앵커 스트로크 너비 */
    readonly STROKE_WIDTH: 1.5;
};
/**
 * 드래그 핸들 및 경로 관련 상수
 * TaskBar.tsx, DependencyLines.tsx에서 공통 사용
 */
export declare const GANTT_DRAG: {
    /** 양쪽 끝 드래그 핸들 너비 */
    readonly HANDLE_WIDTH: 8;
    /** 내부 경계 드래그 핸들 너비 */
    readonly BOUNDARY_HANDLE_WIDTH: 6;
    /** 종속성 경로 - 위로 갈 때 드롭다운 오프셋 */
    readonly DROP_DOWN_OFFSET: 10;
    /** 종속성 경로 - 측면 X 오프셋 */
    readonly PATH_OFFSET_X: 15;
};
/**
 * 그룹 요약 바 관련 상수
 * GroupSummaryBar.tsx에서 사용
 */
export declare const GANTT_SUMMARY: {
    /** 요약 바 높이 */
    readonly BAR_HEIGHT: 8;
    /** 수직 오프셋 (바를 아래로 배치) */
    readonly VERTICAL_OFFSET: 4;
};
/**
 * SVG 스트로크 너비 상수
 * 종속성 선, 앵커 등에서 상태별 스트로크 너비
 */
export declare const GANTT_STROKE: {
    /** 기본 스트로크 너비 */
    readonly DEFAULT: 1.5;
    /** 호버 상태 스트로크 너비 */
    readonly HOVER: 2;
    /** 선택 상태 스트로크 너비 */
    readonly SELECTED: 2.5;
};
/**
 * Compact 모드 앵커 포인트 상수
 * 일반 모드 대비 약 50% 축소
 */
export declare const GANTT_ANCHOR_COMPACT: {
    /** 기본 앵커 반지름 */
    readonly RADIUS: 1;
    /** 활성화된 앵커 반지름 (연결 시작점) */
    readonly RADIUS_ACTIVE: 1.5;
    /** 연결된 앵커 반지름 */
    readonly RADIUS_CONNECTED: 1.25;
    /** 앵커 스트로크 너비 */
    readonly STROKE_WIDTH: 0.75;
};
/**
 * Compact 모드 스트로크 너비 상수
 * 일반 모드 대비 약 50% 축소
 */
export declare const GANTT_STROKE_COMPACT: {
    /** 기본 스트로크 너비 */
    readonly DEFAULT: 0.75;
    /** 호버 상태 스트로크 너비 */
    readonly HOVER: 1;
    /** 선택 상태 스트로크 너비 */
    readonly SELECTED: 1.25;
};
/**
 * Compact 모드 마커(화살표) 상수
 * 일반 모드(5x5) 대비 축소
 */
export declare const GANTT_MARKER_COMPACT: {
    /** 마커 너비 */
    readonly WIDTH: 3;
    /** 마커 높이 */
    readonly HEIGHT: 3;
    /** 참조점 X (화살표 끝점) */
    readonly REF_X: 2.5;
    /** 참조점 Y (중앙) */
    readonly REF_Y: 1.5;
    /** 화살표 스트로크 너비 */
    readonly STROKE_WIDTH: 0.75;
};
