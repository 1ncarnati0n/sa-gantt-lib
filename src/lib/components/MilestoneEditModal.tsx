'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { format } from 'date-fns';
import { X, Calendar, Type, Trash2 } from 'lucide-react';
import { Milestone, MilestoneType } from '../types';

// ============================================
// 공통 스타일 상수 (TaskEditModal과 동일)
// ============================================
const INPUT_BASE = "w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 bg-white";
const FOCUS_STYLE = "focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20";
const SECTION_CARD = "rounded-lg bg-gray-50/80 p-4";
const SECTION_TITLE = "text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3";

interface MilestoneEditModalProps {
    milestone: Milestone | null;
    isOpen: boolean;
    isNew?: boolean;
    onClose: () => void;
    onSave: (milestone: Milestone) => void;
    onDelete?: (milestoneId: string) => void;
}

/** 삭제 확인 모달 컴포넌트 (React Portal 사용) */
const DeleteConfirmModal: React.FC<{
    milestoneName: string;
    onConfirm: () => void;
    onCancel: () => void;
}> = ({ milestoneName, onConfirm, onCancel }) => {
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
                                <h3 className="text-base font-bold text-gray-900">마일스톤 삭제</h3>
                                <p className="text-sm text-gray-500">이 작업은 되돌릴 수 없습니다</p>
                            </div>
                        </div>
                    </div>

                    {/* Body */}
                    <div className="px-5 py-4">
                        <div className="rounded-lg bg-red-50 p-4">
                            <p className="text-sm text-gray-600 mb-2">
                                다음 마일스톤을 삭제하시겠습니까?
                            </p>
                            <p className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                                <span className="h-2 w-2 rounded-full bg-purple-500" />
                                {milestoneName}
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
 * 마일스톤 편집 모달
 * 
 * 마일스톤의 이름, 설명, 날짜를 편집할 수 있는 모달 컴포넌트입니다.
 */
export const MilestoneEditModal: React.FC<MilestoneEditModalProps> = ({
    milestone,
    isOpen,
    isNew = false,
    onClose,
    onSave,
    onDelete,
}) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [dateStr, setDateStr] = useState('');
    const [milestoneType, setMilestoneType] = useState<MilestoneType>('MASTER');
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const nameInputRef = useRef<HTMLInputElement>(null);

    // 마일스톤 데이터로 폼 초기화
    useEffect(() => {
        if (milestone && isOpen) {
            setName(milestone.name);
            setDescription(milestone.description || '');
            setDateStr(format(milestone.date, 'yyyy-MM-dd'));
            setMilestoneType(milestone.milestoneType || 'MASTER');
            setShowDeleteConfirm(false);

            // 모달 열릴 때 이름 입력란에 포커스
            setTimeout(() => {
                nameInputRef.current?.focus();
                nameInputRef.current?.select();
            }, 100);
        }
    }, [milestone, isOpen]);

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

    // 변경 감지: 현재 상태와 milestone props 비교
    const hasChanges = useMemo(() => {
        if (!milestone || !isOpen) return false;

        return (
            name !== milestone.name ||
            description !== (milestone.description || '') ||
            dateStr !== format(milestone.date, 'yyyy-MM-dd') ||
            milestoneType !== (milestone.milestoneType || 'MASTER')
        );
    }, [milestone, isOpen, name, description, dateStr, milestoneType]);

    const handleSave = () => {
        if (!milestone || !name.trim()) return;

        const updatedMilestone: Milestone = {
            ...milestone,
            name: name.trim(),
            description: description.trim() || undefined,
            date: new Date(dateStr),
            milestoneType,
        };

        onSave(updatedMilestone);
        // 모달은 닫지 않음 - hasChanges가 false가 되면 "닫기" 버튼으로 변경
    };

    const handleDeleteClick = () => {
        setShowDeleteConfirm(true);
    };

    const handleDeleteConfirm = () => {
        if (milestone && onDelete) {
            onDelete(milestone.id);
        }
        setShowDeleteConfirm(false);
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

    if (!isOpen || !milestone) return null;

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
                                {isNew ? '새 마일스톤' : '마일스톤 설정'}
                            </h2>
                            {!isNew && milestone && (
                                <p className="text-sm text-gray-500 mt-0.5">{milestone.name}</p>
                            )}
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
                        {/* 기본 정보 섹션 */}
                        <div className={SECTION_CARD}>
                            <h3 className={SECTION_TITLE}>📌 기본 정보</h3>
                            <div className="space-y-4">
                                {/* 이름 */}
                                <div>
                                    <label className="mb-2 flex items-center gap-1.5 text-sm font-medium text-gray-700">
                                        <Type size={14} />
                                        마일스톤 이름
                                    </label>
                                    <input
                                        ref={nameInputRef}
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        placeholder="마일스톤 이름을 입력하세요"
                                        className={`${INPUT_BASE} ${FOCUS_STYLE} placeholder-gray-400`}
                                    />
                                </div>

                                {/* 날짜 */}
                                <div>
                                    <label className="mb-2 flex items-center gap-1.5 text-sm font-medium text-gray-700">
                                        <Calendar size={14} />
                                        날짜
                                    </label>
                                    <input
                                        type="date"
                                        value={dateStr}
                                        onChange={(e) => setDateStr(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        className={`${INPUT_BASE} ${FOCUS_STYLE} w-44`}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* 표시 설정 섹션 */}
                        <div className={SECTION_CARD}>
                            <h3 className={SECTION_TITLE}>👁️ 표시 설정</h3>
                            <div className="flex gap-3">
                                <label className={`flex-1 flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                                    milestoneType === 'MASTER'
                                        ? 'border-gray-500 bg-gray-50'
                                        : 'border-gray-200 hover:border-gray-300'
                                }`}>
                                    <input
                                        type="radio"
                                        name="milestoneType"
                                        value="MASTER"
                                        checked={milestoneType === 'MASTER'}
                                        onChange={() => setMilestoneType('MASTER')}
                                        className="h-4 w-4 text-gray-600 focus:ring-gray-500"
                                    />
                                    <div>
                                        <div className="flex items-center gap-1.5">
                                            <span className="h-2.5 w-2.5 rounded-full bg-gray-500" />
                                            <span className="text-sm font-medium text-gray-800">Master View</span>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-0.5">전체 공정표에 표시</p>
                                    </div>
                                </label>
                                <label className={`flex-1 flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                                    milestoneType === 'DETAIL'
                                        ? 'border-amber-500 bg-amber-50'
                                        : 'border-gray-200 hover:border-gray-300'
                                }`}>
                                    <input
                                        type="radio"
                                        name="milestoneType"
                                        value="DETAIL"
                                        checked={milestoneType === 'DETAIL'}
                                        onChange={() => setMilestoneType('DETAIL')}
                                        className="h-4 w-4 text-amber-500 focus:ring-amber-500"
                                    />
                                    <div>
                                        <div className="flex items-center gap-1.5">
                                            <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                                            <span className="text-sm font-medium text-gray-800">Detail View</span>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-0.5">상세 공정표에 표시</p>
                                    </div>
                                </label>
                            </div>
                        </div>

                        {/* 설명 섹션 */}
                        <div className={SECTION_CARD}>
                            <h3 className={SECTION_TITLE}>📝 설명 (선택)</h3>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="마일스톤에 대한 설명을 입력하세요"
                                rows={3}
                                className={`${INPUT_BASE} ${FOCUS_STYLE} resize-none placeholder-gray-400`}
                            />
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between items-center border-t border-gray-100 px-5 py-4 bg-gray-50/50 rounded-b-xl">
                        {/* 삭제 버튼 (왼쪽, 기존 마일스톤만) */}
                        <div>
                            {!isNew && onDelete && (
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
                            disabled={hasChanges && !name.trim()}
                            className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-all shadow-sm ${
                                hasChanges
                                    ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-purple-200 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:shadow-none'
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
                    milestoneName={name || milestone.name}
                    onConfirm={handleDeleteConfirm}
                    onCancel={handleDeleteCancel}
                />
            )}
        </>
    );
};
