import { default as React } from 'react';

/**
 * CompactInputRow Props
 */
export interface CompactInputRowProps {
    /** 라벨 텍스트 (예: "앞 간접", "순작업") */
    label: string;
    /** 일수 값 (문자열) */
    daysValue: string;
    /** 작업명 값 (선택) */
    nameValue?: string;
    /** 일수 값 변경 setter */
    onDaysChange: React.Dispatch<React.SetStateAction<string>>;
    /** 작업명 값 변경 콜백 */
    onNameChange?: (value: string) => void;
    /** 키보드 이벤트 핸들러 */
    onKeyDown: (e: React.KeyboardEvent) => void;
    /** 숫자 입력 변환 핸들러 */
    onNumberChange: (setter: React.Dispatch<React.SetStateAction<string>>, value: string) => void;
    /** 일수 입력 ref */
    daysInputRef?: React.RefObject<HTMLInputElement | null>;
    /** 색상 테마 */
    color?: 'blue' | 'red';
    /** 작업명 입력 표시 여부 */
    showNameInput?: boolean;
}
/**
 * 일수 입력 행 컴포넌트
 *
 * 간접작업일/순작업일 입력을 위한 컴팩트한 행 컴포넌트입니다.
 *
 * @example
 * ```tsx
 * <CompactInputRow
 *   label="앞 간접"
 *   daysValue={indirectWorkDaysPreStr}
 *   nameValue={indirectWorkNamePre}
 *   onDaysChange={setIndirectWorkDaysPreStr}
 *   onNameChange={setIndirectWorkNamePre}
 *   onKeyDown={handleKeyDown}
 *   onNumberChange={handleNumberChange}
 *   color="blue"
 * />
 * ```
 */
export declare const CompactInputRow: React.FC<CompactInputRowProps>;
