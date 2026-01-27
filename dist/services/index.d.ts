/**
 * Services Module
 *
 * 데이터 서비스 추상화 레이어
 * - DataService: 저장소 인터페이스 정의
 * - LocalStorageService: 브라우저 localStorage 구현
 * - serializers: 직렬화/역직렬화 유틸리티
 *
 * 향후 SupabaseService 추가 시 여기에 export 추가
 */
export type { DataService, GanttData, DataServiceOptions } from './DataService';
export { LocalStorageService, createLocalStorageService, StorageQuotaExceededError, } from './LocalStorageService';
export { isValidTaskData, isValidMilestoneData, isValidAnchorDependencyData, serializeTasks, deserializeTasks, serializeMilestones, deserializeMilestones, serializeAnchorDependencies, deserializeAnchorDependencies, serializeTasksForExport, serializeMilestonesForExport, serializeAnchorDependenciesForExport, serializeGanttDataForExport, parseImportedData, parseMockTasks, parseMockMilestones, } from './serializers';
export { exportToExcel } from './excelExportService';
export type { ExcelExportData } from './excelExportService';
