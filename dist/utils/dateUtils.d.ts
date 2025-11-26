export declare const getX: (date: Date, startDate: Date, columnWidth: number) => number;
export declare const getDateAtX: (x: number, startDate: Date, columnWidth: number) => Date;
export declare const getWidth: (startDate: Date, endDate: Date, columnWidth: number) => number;
export declare const generateTimeScales: (startDate: Date, endDate: Date, viewMode: "day" | "week" | "month") => {
    top: {
        date: Date;
        label: string;
        width: number;
    }[];
    bottom: {
        date: Date;
        label: string;
        isWeekend: boolean;
    }[];
};
