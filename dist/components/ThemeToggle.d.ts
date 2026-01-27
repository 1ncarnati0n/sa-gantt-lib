import { default as React } from 'react';

interface ThemeToggleProps {
    /** 추가 CSS 클래스 */
    className?: string;
    /** 버튼 크기 */
    size?: 'sm' | 'md' | 'lg';
    /** 라벨 표시 여부 */
    showLabel?: boolean;
}
/**
 * 테마 토글 버튼 컴포넌트
 * 라이트 → 다크 → 시스템 순으로 순환
 */
export declare const ThemeToggle: React.FC<ThemeToggleProps>;
interface ThemeToggleGroupProps {
    /** 추가 CSS 클래스 */
    className?: string;
}
/**
 * 테마 선택 버튼 그룹
 * 라이트/다크/시스템 3개 버튼으로 직접 선택
 */
export declare const ThemeToggleGroup: React.FC<ThemeToggleGroupProps>;
export default ThemeToggle;
