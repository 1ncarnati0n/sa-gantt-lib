import { ConstructionTask, Milestone, AnchorDependency, Dependency } from '../types';
import { GanttData } from './DataService';

/**
 * Task 데이터 유효성 검증
 * ConstructionTask의 필수 필드를 모두 검증
 */
export declare const isValidTaskData: (data: unknown) => data is Record<string, unknown> & {
    id: string;
    parentId: string | null;
    wbsLevel: 1 | 2;
    type: "GROUP" | "CP" | "TASK";
    name: string;
    startDate: string;
    endDate: string;
};
/**
 * Milestone 데이터 유효성 검증
 */
export declare const isValidMilestoneData: (data: unknown) => data is Record<string, unknown> & {
    id: string;
    date: string;
    name: string;
};
/**
 * CPData 유효성 검증
 */
export declare const isValidCPData: (data: unknown) => data is {
    workDaysTotal: number;
    nonWorkDaysTotal: number;
};
/**
 * TaskData 유효성 검증
 */
export declare const isValidTaskDataFields: (data: unknown) => data is {
    netWorkDays: number;
    indirectWorkDaysPre: number;
    indirectWorkDaysPost: number;
};
/**
 * GroupData 유효성 검증
 */
export declare const isValidGroupData: (data: unknown) => data is {
    progress?: number;
};
/**
 * AnchorDependency 데이터 유효성 검증
 */
export declare const isValidAnchorDependencyData: (data: unknown) => data is AnchorDependency;
/**
 * Tasks를 JSON 문자열로 직렬화 (내부 저장용)
 * 날짜 형식: yyyy-MM-dd'T'HH:mm:ss.SSSxxx
 */
export declare const serializeTasks: (tasks: ConstructionTask[]) => string;
/**
 * JSON 문자열에서 Tasks 역직렬화
 */
export declare const deserializeTasks: (json: string) => ConstructionTask[] | null;
/**
 * Milestones를 JSON 문자열로 직렬화 (내부 저장용)
 */
export declare const serializeMilestones: (milestones: Milestone[]) => string;
/**
 * JSON 문자열에서 Milestones 역직렬화
 */
export declare const deserializeMilestones: (json: string) => Milestone[] | null;
/**
 * AnchorDependencies를 JSON 문자열로 직렬화 (내부 저장용)
 * 날짜 필드 없음 - 단순 직렬화
 */
export declare const serializeAnchorDependencies: (deps: AnchorDependency[]) => string;
/**
 * JSON 문자열에서 AnchorDependencies 역직렬화
 */
export declare const deserializeAnchorDependencies: (json: string) => AnchorDependency[] | null;
/**
 * Tasks를 외부 내보내기 형식으로 직렬화
 * 날짜 형식: yyyy-MM-dd (mock.json 호환)
 */
export declare const serializeTasksForExport: (tasks: ConstructionTask[]) => {
    dependencies: Dependency[];
    task?: import('..').TaskData | undefined;
    cp?: import('..').CPData | undefined;
    id: string;
    parentId: string | null;
    wbsLevel: import('..').WbsLevel;
    type: import('..').TaskType;
    name: string;
    startDate: string;
    endDate: string;
}[];
/**
 * Milestones를 외부 내보내기 형식으로 직렬화
 */
export declare const serializeMilestonesForExport: (milestones: Milestone[]) => {
    description?: string | undefined;
    milestoneType?: import('../types').MilestoneType | undefined;
    id: string;
    date: string;
    name: string;
    type: string;
}[];
/**
 * AnchorDependencies를 외부 내보내기 형식으로 직렬화
 */
export declare const serializeAnchorDependenciesForExport: (deps: AnchorDependency[]) => {
    lag?: number | undefined;
    id: string;
    sourceTaskId: string;
    targetTaskId: string;
    sourceDayIndex: number;
    targetDayIndex: number;
}[];
/**
 * 전체 데이터를 내보내기 형식으로 직렬화
 */
export declare const serializeGanttDataForExport: (data: GanttData) => string;
/**
 * 외부 JSON 데이터 파싱 (mock.json 또는 내보내기 파일)
 */
export declare const parseImportedData: (jsonString: string) => GanttData | null;
/**
 * Mock 데이터 파싱 유틸리티
 * (App에서 사용하는 mock.json 파싱 로직)
 */
export declare const parseMockTasks: (mockTasks: Array<Record<string, unknown>>) => ConstructionTask[];
export declare const parseMockMilestones: (mockMilestones: Array<Record<string, unknown>>) => Milestone[];
