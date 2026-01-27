import { ConstructionTask, Milestone } from '../types';

export interface ExcelExportData {
    tasks: ConstructionTask[];
    milestones: Milestone[];
    fileName?: string;
}
export declare const exportToExcel: (data: ExcelExportData) => Promise<void>;
