/**
 * 2025년 대한민국 공휴일
 */
export declare const KOREAN_HOLIDAYS_2025: Date[];
/**
 * 2026년 대한민국 공휴일
 */
export declare const KOREAN_HOLIDAYS_2026: Date[];
/**
 * 2027년 대한민국 공휴일
 */
export declare const KOREAN_HOLIDAYS_2027: Date[];
/**
 * 2025~2027년 통합 공휴일 목록
 */
export declare const KOREAN_HOLIDAYS_ALL: Date[];
/**
 * 연도별 공휴일 조회
 */
export declare const getKoreanHolidaysByYear: (year: number) => Date[];
/**
 * 여러 연도의 공휴일 조회
 */
export declare const getKoreanHolidaysForYears: (years: number[]) => Date[];
