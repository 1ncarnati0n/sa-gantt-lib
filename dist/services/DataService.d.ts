import { ConstructionTask, Milestone, AnchorDependency } from '../types';

/**
 * 전체 데이터 구조
 */
export interface GanttData {
    tasks: ConstructionTask[];
    milestones: Milestone[];
    dependencies: AnchorDependency[];
}
/**
 * 데이터 서비스 인터페이스
 */
export interface DataService {
    /** 모든 태스크 로드 */
    loadTasks(): Promise<ConstructionTask[]>;
    /** 모든 태스크 저장 (전체 교체) */
    saveTasks(tasks: ConstructionTask[]): Promise<void>;
    /** 단일 태스크 업데이트 */
    updateTask(id: string, updates: Partial<ConstructionTask>): Promise<ConstructionTask | null>;
    /** 새 태스크 생성 */
    createTask(task: Omit<ConstructionTask, 'id'>): Promise<ConstructionTask>;
    /** 태스크 삭제 */
    deleteTask(id: string): Promise<boolean>;
    /** 모든 마일스톤 로드 */
    loadMilestones(): Promise<Milestone[]>;
    /** 모든 마일스톤 저장 (전체 교체) */
    saveMilestones(milestones: Milestone[]): Promise<void>;
    /** 단일 마일스톤 업데이트 */
    updateMilestone(id: string, updates: Partial<Milestone>): Promise<Milestone | null>;
    /** 새 마일스톤 생성 */
    createMilestone(milestone: Omit<Milestone, 'id'>): Promise<Milestone>;
    /** 마일스톤 삭제 */
    deleteMilestone(id: string): Promise<boolean>;
    /** 모든 종속성 로드 */
    loadDependencies(): Promise<AnchorDependency[]>;
    /** 모든 종속성 저장 (전체 교체) */
    saveDependencies(dependencies: AnchorDependency[]): Promise<void>;
    /** 종속성 생성 */
    createDependency(dependency: AnchorDependency): Promise<AnchorDependency>;
    /** 종속성 삭제 */
    deleteDependency(id: string): Promise<boolean>;
    /** 전체 데이터 로드 */
    loadAll(): Promise<GanttData>;
    /** 전체 데이터 저장 */
    saveAll(data: GanttData): Promise<void>;
    /** JSON 문자열로 내보내기 */
    exportToJSON(): Promise<string>;
    /** JSON 문자열에서 가져오기 */
    importFromJSON(json: string): Promise<GanttData>;
    /** 모든 데이터 초기화 (기본값으로 리셋) */
    reset(): Promise<void>;
}
/**
 * 데이터 서비스 생성 옵션
 */
export interface DataServiceOptions {
    /** 자동 저장 활성화 여부 */
    autoSave?: boolean;
    /** 디버그 로깅 활성화 */
    debug?: boolean;
    /** 저장소 키 프리픽스 (localStorage용) */
    storagePrefix?: string;
}
