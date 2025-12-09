'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { format } from 'date-fns';
import { X, Calendar, FileText, Type, Trash2, Layers } from 'lucide-react';
import { Milestone, MilestoneType } from '../types';

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
                    className="w-[360px] rounded-lg bg-white p-6 shadow-xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                            <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">마일스톤 삭제</h3>
                            <p className="text-sm text-gray-500">이 작업은 되돌릴 수 없습니다</p>
                        </div>
                    </div>
                    
                    <div className="mb-6 rounded-md bg-gray-50 p-3">
                        <p className="text-sm text-gray-600">
                            다음 마일스톤을 삭제하시겠습니까?
                        </p>
                        <p className="mt-1 flex items-center gap-2 text-sm font-medium text-gray-700">
                            <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                            {milestoneName}
                        </p>
                    </div>
                    
                    <div className="flex justify-end gap-3">
                        <button
                            onClick={onCancel}
                            className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                            취소
                        </button>
                        <button
                            onClick={onConfirm}
                            className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 transition-colors"
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
                    className="w-full max-w-md rounded-lg bg-white shadow-xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
                        <h2 className="text-lg font-semibold text-gray-800">
                            {isNew ? '새 마일스톤' : '마일스톤 설정'}
                        </h2>
                        <button
                            onClick={onClose}
                            className="rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Body */}
                    <div className="space-y-4 p-4">
                        {/* 이름 */}
                        <div>
                            <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-gray-700">
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
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>

                        {/* 날짜 */}
                        <div>
                            <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-gray-700">
                                <Calendar size={14} />
                                날짜
                            </label>
                            <input
                                type="date"
                                value={dateStr}
                                onChange={(e) => setDateStr(e.target.value)}
                                onKeyDown={handleKeyDown}
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>

                        {/* 마일스톤 타입 */}
                        <div>
                            <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-gray-700">
                                <Layers size={14} />
                                표시 위치
                            </label>
                            <div className="flex gap-4">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="milestoneType"
                                        value="MASTER"
                                        checked={milestoneType === 'MASTER'}
                                        onChange={() => setMilestoneType('MASTER')}
                                        className="h-4 w-4 text-gray-600 focus:ring-gray-500"
                                    />
                                    <span className="text-sm text-gray-700">
                                        <span className="inline-block h-2 w-2 rounded-full bg-gray-500 mr-1.5" />
                                        Master View
                                    </span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="milestoneType"
                                        value="DETAIL"
                                        checked={milestoneType === 'DETAIL'}
                                        onChange={() => setMilestoneType('DETAIL')}
                                        className="h-4 w-4 text-amber-500 focus:ring-amber-500"
                                    />
                                    <span className="text-sm text-gray-700">
                                        <span className="inline-block h-2 w-2 rounded-full bg-amber-500 mr-1.5" />
                                        Detail View
                                    </span>
                                </label>
                            </div>
                        </div>

                        {/* 설명 */}
                        <div>
                            <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-gray-700">
                                <FileText size={14} />
                                설명 (선택)
                            </label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="마일스톤에 대한 설명을 입력하세요"
                                rows={3}
                                className="w-full resize-none rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between border-t border-gray-200 px-4 py-3">
                        {/* 삭제 버튼 (왼쪽, 기존 마일스톤만) */}
                        <div>
                            {!isNew && onDelete && (
                                <button
                                    onClick={handleDeleteClick}
                                    className="flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
                                >
                                    <Trash2 size={16} />
                                    삭제
                                </button>
                            )}
                        </div>
                        
                        {/* 저장/닫기 토글 버튼 (오른쪽) */}
                        <div className="flex gap-2">
                            <button
                                onClick={hasChanges ? handleSave : onClose}
                                disabled={hasChanges && !name.trim()}
                                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                                    hasChanges
                                        ? 'bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed'
                                        : 'bg-gray-500 text-white hover:bg-gray-600'
                                }`}
                            >
                                {hasChanges ? '저장' : '닫기'}
                            </button>
                        </div>
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
