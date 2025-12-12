'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { X, Trash2 } from 'lucide-react';
import { format } from 'date-fns';
import { ConstructionTask, TaskData } from '../types';

// ============================================
// 공통 스타일 상수
// ============================================
const INPUT_BASE = "w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 bg-white";
const FOCUS_BLUE = "focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20";
const FOCUS_RED = "focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20";
const FOCUS_GREEN = "focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20";
const SECTION_CARD = "rounded-lg bg-gray-50/80 p-4";
const SECTION_TITLE = "text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3";

// ============================================
// 내부 컴포넌트: WorkDayCheckbox
// ============================================
interface WorkDayCheckboxProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

const WorkDayCheckbox: React.FC<WorkDayCheckboxProps> = ({
    label,
    checked,
    onChange,
}) => (
    <label className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
        <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
        <span className="font-medium">{label}</span>
    </label>
);

// ============================================
// 내부 컴포넌트: CompactInputRow
// ============================================
interface CompactInputRowProps {
    label: string;
    daysValue: string;
    nameValue?: string;
    onDaysChange: React.Dispatch<React.SetStateAction<string>>;
    onNameChange?: (value: string) => void;
    onKeyDown: (e: React.KeyboardEvent) => void;
    onNumberChange: (setter: React.Dispatch<React.SetStateAction<string>>, value: string) => void;
    daysInputRef?: React.RefObject<HTMLInputElement | null>;
    color?: 'blue' | 'red';
    showNameInput?: boolean;
}

const CompactInputRow: React.FC<CompactInputRowProps> = ({
    label,
    daysValue,
    nameValue = '',
    onDaysChange,
    onNameChange,
    onKeyDown,
    onNumberChange,
    daysInputRef,
    color = 'blue',
    showNameInput = true,
}) => {
    const focusClass = color === 'red' ? FOCUS_RED : FOCUS_BLUE;
    const labelBg = color === 'red' ? 'bg-red-50 text-red-700' : 'bg-blue-50 text-blue-700';

    return (
        <div className="flex items-center gap-3">
            <span className={`w-20 shrink-0 rounded-md px-2 py-1.5 text-xs font-semibold text-center ${labelBg}`}>
                {label}
            </span>
            <div className="flex flex-1 items-center gap-2">
                <div className="relative">
                    <input
                        ref={daysInputRef}
                        type="text"
                        inputMode="decimal"
                        value={daysValue}
                        onChange={(e) => onNumberChange(onDaysChange, e.target.value)}
                        onKeyDown={onKeyDown}
                        placeholder="0"
                        className={`w-20 ${INPUT_BASE} ${focusClass} text-center pr-6`}
                    />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-400">일</span>
                </div>
                {showNameInput && onNameChange && (
                    <input
                        type="text"
                        value={nameValue}
                        onChange={(e) => onNameChange(e.target.value)}
                        onKeyDown={onKeyDown}
                        placeholder="작업명 (선택사항)"
                        className={`flex-1 ${INPUT_BASE} ${focusClass} placeholder-gray-400`}
                    />
                )}
            </div>
        </div>
    );
};

interface TaskEditModalProps {
    task: ConstructionTask | null;
    isOpen: boolean;
    onClose: () => void;
    onSave: (task: ConstructionTask) => void;
    onDelete?: (taskId: string) => void;
}

/** 삭제 확인 모달 컴포넌트 (React Portal 사용) */
const DeleteConfirmModal: React.FC<{
    taskName: string;
    onConfirm: () => void;
    onCancel: () => void;
}> = ({ taskName, onConfirm, onCancel }) => {
    return ReactDOM.createPortal(
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 z-[60] bg-black/50 transition-opacity"
                onClick={onCancel}
            />

            {/* Modal */}
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                <div
                    className="w-[400px] rounded-xl bg-white shadow-2xl border border-gray-200"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="px-5 py-4 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                                <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-gray-900">공정 삭제</h3>
                                <p className="text-sm text-gray-500">이 작업은 되돌릴 수 없습니다</p>
                            </div>
                        </div>
                    </div>

                    {/* Body */}
                    <div className="px-5 py-4">
                        <div className="rounded-lg bg-red-50 p-4">
                            <p className="text-sm text-gray-600 mb-2">
                                다음 공정을 삭제하시겠습니까?
                            </p>
                            <p className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                                <span className="h-2 w-2 rounded-full bg-red-500" />
                                {taskName}
                            </p>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-end gap-3 px-5 py-4 border-t border-gray-100 bg-gray-50/50 rounded-b-xl">
                        <button
                            onClick={onCancel}
                            className="rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
                        >
                            취소
                        </button>
                        <button
                            onClick={onConfirm}
                            className="rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-700 transition-colors shadow-sm"
                        >
                            삭제
                        </button>
                    </div>
                </div>
            </div>
        </>,
        document.body
    );
};

/**
 * Task 편집 모달
 * 
 * Task의 간접작업일/작업명과 순작업일을 편집할 수 있는 모달 컴포넌트입니다.
 */
export const TaskEditModal: React.FC<TaskEditModalProps> = ({
    task,
    isOpen,
    onClose,
    onSave,
    onDelete,
}) => {
    // 일수 상태 (문자열로 관리하여 소수점 입력 허용)
    const [indirectWorkDaysPreStr, setIndirectWorkDaysPreStr] = useState('0');
    const [netWorkDaysStr, setNetWorkDaysStr] = useState('1');
    const [indirectWorkDaysPostStr, setIndirectWorkDaysPostStr] = useState('0');

    // 작업명 상태
    const [indirectWorkNamePre, setIndirectWorkNamePre] = useState('');
    const [indirectWorkNamePost, setIndirectWorkNamePost] = useState('');

    // 작업일 설정 상태 (기본값: 토요일 작업, 일요일/공휴일 휴무)
    const [saturdayOff, setSaturdayOff] = useState(false);       // 토요일 휴무 (체크 시 휴무)
    const [sundayWork, setSundayWork] = useState(false);         // 일요일 작업 (체크 시 작업)
    const [holidayWork, setHolidayWork] = useState(false);       // 공휴일 작업 (체크 시 작업)

    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    // 시작일 상태
    const [startDateStr, setStartDateStr] = useState('');

    const preInputRef = useRef<HTMLInputElement>(null);

    // 문자열을 숫자로 파싱 (0.5 단위로 반올림)
    const parseToNumber = (str: string): number => {
        const parsed = parseFloat(str) || 0;
        return Math.round(parsed * 2) / 2;
    };

    // 숫자 값 계산용
    const indirectWorkDaysPre = parseToNumber(indirectWorkDaysPreStr);
    const netWorkDays = parseToNumber(netWorkDaysStr);
    const indirectWorkDaysPost = parseToNumber(indirectWorkDaysPostStr);

    // Task 데이터로 폼 초기화
    useEffect(() => {
        if (task && task.task && isOpen) {
            setIndirectWorkDaysPreStr(String(task.task.indirectWorkDaysPre));
            setNetWorkDaysStr(String(task.task.netWorkDays));
            setIndirectWorkDaysPostStr(String(task.task.indirectWorkDaysPost));
            setIndirectWorkNamePre(task.task.indirectWorkNamePre || '');
            setIndirectWorkNamePost(task.task.indirectWorkNamePost || '');

            // 작업일 설정 초기화 (기본값: 토요일 작업(true), 일요일/공휴일 휴무(false))
            // workOnSaturdays: true가 기본 → saturdayOff는 false가 기본
            // workOnSundays: false가 기본 → sundayWork는 false가 기본
            // workOnHolidays: false가 기본 → holidayWork는 false가 기본
            setSaturdayOff(task.task.workOnSaturdays === false);
            setSundayWork(task.task.workOnSundays === true);
            setHolidayWork(task.task.workOnHolidays === true);

            // 시작일 초기화
            setStartDateStr(format(task.startDate, 'yyyy-MM-dd'));

            setShowDeleteConfirm(false);

            // 모달 열릴 때 첫 입력란에 포커스
            setTimeout(() => {
                preInputRef.current?.focus();
            }, 100);
        }
    }, [task?.id, isOpen]);

    // ESC 키로 닫기
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                if (showDeleteConfirm) {
                    setShowDeleteConfirm(false);
                } else {
                    onClose();
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, showDeleteConfirm, onClose]);

    // 변경 감지: 현재 상태와 task props 비교 (useMemo로 동기적 계산)
    const hasChanges = useMemo(() => {
        if (!task || !task.task || !isOpen) {
            return false;
        }

        const currentPre = parseToNumber(indirectWorkDaysPreStr);
        const currentNet = parseToNumber(netWorkDaysStr);
        const currentPost = parseToNumber(indirectWorkDaysPostStr);
        const currentStartDate = startDateStr;

        return (
            currentPre !== task.task.indirectWorkDaysPre ||
            currentNet !== task.task.netWorkDays ||
            currentPost !== task.task.indirectWorkDaysPost ||
            indirectWorkNamePre !== (task.task.indirectWorkNamePre || '') ||
            indirectWorkNamePost !== (task.task.indirectWorkNamePost || '') ||
            (saturdayOff !== (task.task.workOnSaturdays === false)) ||
            (sundayWork !== (task.task.workOnSundays === true)) ||
            (holidayWork !== (task.task.workOnHolidays === true)) ||
            currentStartDate !== format(task.startDate, 'yyyy-MM-dd')
        );
    }, [
        task,
        isOpen,
        indirectWorkDaysPreStr,
        netWorkDaysStr,
        indirectWorkDaysPostStr,
        indirectWorkNamePre,
        indirectWorkNamePost,
        saturdayOff,
        sundayWork,
        holidayWork,
        startDateStr,
    ]);

    const handleSave = () => {
        if (!task || !task.task) return;

        // 새 시작일 파싱
        const newStartDate = startDateStr ? new Date(startDateStr + 'T00:00:00') : task.startDate;

        // 명시적으로 TaskData 객체 구성 (기존 데이터 보존 + 변경사항 적용)
        const updatedTaskData: TaskData = {
            ...task.task,
            indirectWorkDaysPre,
            netWorkDays,
            indirectWorkDaysPost,
            indirectWorkNamePre: indirectWorkNamePre.trim() || undefined,
            indirectWorkNamePost: indirectWorkNamePost.trim() || undefined,
            // 작업일 설정 (기본값과 다를 때만 저장)
            workOnSaturdays: saturdayOff ? false : undefined,
            workOnSundays: sundayWork ? true : undefined,
            workOnHolidays: holidayWork ? true : undefined,
        };

        const updatedTask: ConstructionTask = {
            ...task,
            startDate: newStartDate,
            task: updatedTaskData,
        };

        console.log('[TaskEditModal] Save button clicked:', updatedTask);
        onSave(updatedTask);
        // 모달은 닫지 않음 - hasChanges가 false가 되면 "닫기" 버튼으로 변경
    };

    const handleDeleteClick = () => {
        setShowDeleteConfirm(true);
    };

    const handleDeleteConfirm = () => {
        if (task && onDelete) {
            onDelete(task.id);
        }
        setShowDeleteConfirm(false);
        onClose();
    };

    const handleDeleteCancel = () => {
        setShowDeleteConfirm(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSave();
        }
    };

    const handleNumberChange = (
        setter: React.Dispatch<React.SetStateAction<string>>,
        value: string
    ) => {
        // 소수점 입력 허용 (문자열로 유지)
        const cleaned = value.replace(/[^0-9.]/g, '');
        // 소수점이 여러 개인 경우 첫 번째만 유지
        const parts = cleaned.split('.');
        let sanitized = parts.length > 2
            ? parts[0] + '.' + parts.slice(1).join('')
            : cleaned;
        setter(sanitized);
    };

    if (!isOpen || !task || !task.task) return null;

    const totalDays = indirectWorkDaysPre + netWorkDays + indirectWorkDaysPost;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 z-50 bg-black/50 transition-opacity"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div
                    className="w-full max-w-lg rounded-xl bg-white shadow-2xl border border-gray-200"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                        <div>
                            <h2 className="text-base font-bold text-gray-900">
                                공정 설정
                            </h2>
                            <p className="text-sm text-gray-500 mt-0.5">{task.name}</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Body */}
                    <div className="p-5 space-y-5">
                        {/* 시작일 섹션 */}
                        <div className={SECTION_CARD}>
                            <h3 className={SECTION_TITLE}>📅 시작일</h3>
                            <div className="flex items-center gap-3">
                                <input
                                    type="date"
                                    value={startDateStr}
                                    onChange={(e) => setStartDateStr(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    className={`${INPUT_BASE} ${FOCUS_GREEN} w-44`}
                                />
                                <span className="text-xs text-gray-500">→ 종료일 자동 계산</span>
                            </div>
                        </div>

                        {/* 작업 기간 설정 섹션 */}
                        <div className={SECTION_CARD}>
                            <h3 className={SECTION_TITLE}>⏱️ 작업 기간</h3>
                            <div className="space-y-3">
                                <CompactInputRow
                                    label="앞 간접"
                                    daysValue={indirectWorkDaysPreStr}
                                    nameValue={indirectWorkNamePre}
                                    onDaysChange={setIndirectWorkDaysPreStr}
                                    onNameChange={setIndirectWorkNamePre}
                                    onKeyDown={handleKeyDown}
                                    onNumberChange={handleNumberChange}
                                    daysInputRef={preInputRef}
                                    color="blue"
                                    showNameInput={true}
                                />
                                <CompactInputRow
                                    label="순작업"
                                    daysValue={netWorkDaysStr}
                                    onDaysChange={setNetWorkDaysStr}
                                    onKeyDown={handleKeyDown}
                                    onNumberChange={handleNumberChange}
                                    color="red"
                                    showNameInput={false}
                                />
                                <CompactInputRow
                                    label="뒤 간접"
                                    daysValue={indirectWorkDaysPostStr}
                                    nameValue={indirectWorkNamePost}
                                    onDaysChange={setIndirectWorkDaysPostStr}
                                    onNameChange={setIndirectWorkNamePost}
                                    onKeyDown={handleKeyDown}
                                    onNumberChange={handleNumberChange}
                                    color="blue"
                                    showNameInput={true}
                                />
                            </div>
                        </div>

                        {/* 작업일 설정 섹션 */}
                        <div className={SECTION_CARD}>
                            <h3 className={SECTION_TITLE}>📆 작업일 설정</h3>
                            <div className="flex flex-wrap gap-1 -mx-1">
                                <WorkDayCheckbox
                                    label="토요일 휴무"
                                    checked={saturdayOff}
                                    onChange={setSaturdayOff}
                                />
                                <WorkDayCheckbox
                                    label="일요일 작업"
                                    checked={sundayWork}
                                    onChange={setSundayWork}
                                />
                                <WorkDayCheckbox
                                    label="공휴일 작업"
                                    checked={holidayWork}
                                    onChange={setHolidayWork}
                                />
                            </div>
                        </div>

                        {/* 총 일수 표시 */}
                        <div className="flex items-center justify-between rounded-lg bg-gradient-to-r from-gray-100 to-gray-50 px-4 py-3 border border-gray-200">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <span className="font-medium text-blue-600">{indirectWorkDaysPre}</span>
                                <span className="text-gray-400">+</span>
                                <span className="font-medium text-red-600">{netWorkDays}</span>
                                <span className="text-gray-400">+</span>
                                <span className="font-medium text-blue-600">{indirectWorkDaysPost}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-500">=</span>
                                <span className="text-lg font-bold text-gray-900">
                                    {totalDays}일
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between items-center border-t border-gray-100 px-5 py-4 bg-gray-50/50 rounded-b-xl">
                        {/* 삭제 버튼 (왼쪽) */}
                        <div>
                            {onDelete && (
                                <button
                                    onClick={handleDeleteClick}
                                    className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
                                >
                                    <Trash2 size={16} />
                                    삭제
                                </button>
                            )}
                        </div>

                        {/* 저장/닫기 토글 버튼 (오른쪽) */}
                        <button
                            onClick={hasChanges ? handleSave : onClose}
                            className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-all shadow-sm ${hasChanges
                                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200'
                                : 'bg-gray-600 text-white hover:bg-gray-700'
                                }`}
                        >
                            {hasChanges ? '저장' : '닫기'}
                        </button>
                    </div>
                </div>
            </div>

            {/* 삭제 확인 모달 */}
            {showDeleteConfirm && (
                <DeleteConfirmModal
                    taskName={task.name}
                    onConfirm={handleDeleteConfirm}
                    onCancel={handleDeleteCancel}
                />
            )}
        </>
    );
};

