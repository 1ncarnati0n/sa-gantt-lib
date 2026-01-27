import { ConstructionTask, Milestone, AnchorDependency } from '../types';
import { DataService, GanttData, DataServiceOptions } from './DataService';

/**
 * LocalStorage 할당량 초과 에러
 */
export declare class StorageQuotaExceededError extends Error {
    readonly currentSize: number;
    readonly attemptedKey: string;
    constructor(message: string, currentSize: number, attemptedKey: string);
}
export declare class LocalStorageService implements DataService {
    private storageKeys;
    private debug;
    constructor(options?: DataServiceOptions);
    private log;
    /**
     * localStorage에 안전하게 저장 (할당량 초과 처리 포함)
     */
    private safeSetItem;
    loadTasks(): Promise<ConstructionTask[]>;
    saveTasks(tasks: ConstructionTask[]): Promise<void>;
    updateTask(id: string, updates: Partial<ConstructionTask>): Promise<ConstructionTask | null>;
    createTask(task: Omit<ConstructionTask, 'id'>): Promise<ConstructionTask>;
    deleteTask(id: string): Promise<boolean>;
    loadMilestones(): Promise<Milestone[]>;
    saveMilestones(milestones: Milestone[]): Promise<void>;
    updateMilestone(id: string, updates: Partial<Milestone>): Promise<Milestone | null>;
    createMilestone(milestone: Omit<Milestone, 'id'>): Promise<Milestone>;
    deleteMilestone(id: string): Promise<boolean>;
    loadDependencies(): Promise<AnchorDependency[]>;
    saveDependencies(dependencies: AnchorDependency[]): Promise<void>;
    createDependency(dependency: AnchorDependency): Promise<AnchorDependency>;
    deleteDependency(id: string): Promise<boolean>;
    loadAll(): Promise<GanttData>;
    saveAll(data: GanttData): Promise<void>;
    exportToJSON(): Promise<string>;
    importFromJSON(json: string): Promise<GanttData>;
    reset(): Promise<void>;
    /**
     * 데이터 존재 여부 확인
     */
    hasData(): boolean;
    /**
     * 스토리지 사용량 확인 (바이트)
     */
    getStorageSize(): number;
}
/**
 * LocalStorageService 인스턴스 생성
 */
export declare const createLocalStorageService: (options?: DataServiceOptions) => DataService;
