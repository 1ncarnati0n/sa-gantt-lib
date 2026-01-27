export interface CalendarSettings {
    workOnSaturdays: boolean;
    workOnSundays: boolean;
    workOnHolidays: boolean;
}
export interface Holiday {
    date: string;
    name: string;
}
export interface TaskDates {
    startDate: Date;
    endDate: Date;
    netWorkStartDate: Date;
    netWorkEndDate: Date;
    indirectPreStartDate?: Date;
    indirectPreEndDate?: Date;
    indirectPostStartDate?: Date;
    indirectPostEndDate?: Date;
}
