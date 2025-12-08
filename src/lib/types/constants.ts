// ============================================
// SA-Gantt-Lib: 상수 정의
// ============================================

import type { ZoomLevel } from './core';

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
    ROW_HEIGHT: 34,
    HEADER_HEIGHT: 80,
    MILESTONE_LANE_HEIGHT: 40,
    BAR_HEIGHT: 18,
    SIDEBAR_WIDTH: 500,
    SIDEBAR_MIN_WIDTH: 300,
    SIDEBAR_MAX_WIDTH: 800,
    SIDEBAR_MASTER_WIDTH: 500,
    SIDEBAR_DETAIL_WIDTH: 600,
    /** 뷰 전환 후 스크롤 대기 시간 (ms) */
    SCROLL_DELAY_MS: 100,
} as const;

// ============================================
// 사이드바 컬럼 설정
// ============================================

/** 컬럼 설정 인터페이스 */
export interface ColumnConfig {
    id: string;
    label: string;
    width: number;
    minWidth: number;
}

/** Master View 기본 컬럼 (총 470px) */
export const DEFAULT_MASTER_COLUMNS: ColumnConfig[] = [
    { id: 'name', label: 'CP명', width: 200, minWidth: 100 },
    { id: 'total', label: '총 공기', width: 90, minWidth: 60 },
    { id: 'workDays', label: '작업일수', width: 90, minWidth: 60 },
    { id: 'nonWorkDays', label: '비작업일수', width: 90, minWidth: 60 },
];

/** Detail View 기본 컬럼 (총 565px) */
export const DEFAULT_DETAIL_COLUMNS: ColumnConfig[] = [
    { id: 'name', label: '단위공정명', width: 180, minWidth: 80 },
    { id: 'indirectPre', label: '선간접', width: 65, minWidth: 45 },
    { id: 'netWork', label: '순작업', width: 65, minWidth: 45 },
    { id: 'indirectPost', label: '후간접', width: 65, minWidth: 45 },
    { id: 'startDate', label: '시작일', width: 95, minWidth: 75 },
    { id: 'endDate', label: '종료일', width: 95, minWidth: 75 },
];

// ============================================
// 줌 레벨별 설정
// ============================================

export const ZOOM_CONFIG: Record<ZoomLevel, { pixelsPerDay: number; label: string }> = {
    DAY: { pixelsPerDay: 30, label: '일' },
    WEEK: { pixelsPerDay: 10, label: '주' },
    MONTH: { pixelsPerDay: 2, label: '월' },
};
