import { default as React } from 'react';

export type Theme = 'light' | 'dark' | 'system';
export type ResolvedTheme = 'light' | 'dark';
interface ThemeContextValue {
    /** 현재 설정된 테마 (light, dark, system) */
    theme: Theme;
    /** 실제 적용된 테마 (light, dark) */
    resolvedTheme: ResolvedTheme;
    /** 테마 변경 함수 */
    setTheme: (theme: Theme) => void;
    /** 다크 모드 여부 */
    isDark: boolean;
}
interface ThemeProviderProps {
    children: React.ReactNode;
    /** 기본 테마 (기본값: 'system') */
    defaultTheme?: Theme;
    /** localStorage 저장 키 (기본값: 'gantt-theme') */
    storageKey?: string;
}
export declare const ThemeProvider: React.FC<ThemeProviderProps>;
/**
 * 테마 컨텍스트 사용 훅
 * @example
 * const { theme, setTheme, isDark } = useTheme();
 */
export declare const useTheme: () => ThemeContextValue;
/**
 * ThemeProvider 없이도 안전하게 사용할 수 있는 훅
 * Provider가 없으면 부모의 .dark 클래스를 감지하여 테마 반환
 * next-themes 등 외부 테마 시스템과 호환
 */
export declare const useThemeSafe: () => ThemeContextValue;
export {};
