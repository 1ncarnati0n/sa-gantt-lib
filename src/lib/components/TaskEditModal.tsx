'use client';

import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { X, Clock, Type, Trash2 } from 'lucide-react';
import { ConstructionTask } from '../types';

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
                            <h3 className="text-lg font-semibold text-gray-900">공정 삭제</h3>
                            <p className="text-sm text-gray-500">이 작업은 되돌릴 수 없습니다</p>
                        </div>
                    </div>
                    
                    <div className="mb-6 rounded-md bg-gray-50 p-3">
                        <p className="text-sm text-gray-600">
                            다음 공정을 삭제하시겠습니까?
                        </p>
                        <p className="mt-1 flex items-center gap-2 text-sm font-medium text-gray-700">
                            <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                            {taskName}
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
    // 일수 상태
    const [indirectWorkDaysPre, setIndirectWorkDaysPre] = useState(0);
    const [netWorkDays, setNetWorkDays] = useState(1);
    const [indirectWorkDaysPost, setIndirectWorkDaysPost] = useState(0);
    
    // 작업명 상태
    const [indirectWorkNamePre, setIndirectWorkNamePre] = useState('');
    const [indirectWorkNamePost, setIndirectWorkNamePost] = useState('');
    
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const preInputRef = useRef<HTMLInputElement>(null);

    // Task 데이터로 폼 초기화
    useEffect(() => {
        if (task && task.task && isOpen) {
            setIndirectWorkDaysPre(task.task.indirectWorkDaysPre);
            setNetWorkDays(task.task.netWorkDays);
            setIndirectWorkDaysPost(task.task.indirectWorkDaysPost);
            setIndirectWorkNamePre(task.task.indirectWorkNamePre || '');
            setIndirectWorkNamePost(task.task.indirectWorkNamePost || '');
            setShowDeleteConfirm(false);
            
            // 모달 열릴 때 첫 입력란에 포커스
            setTimeout(() => {
                preInputRef.current?.focus();
            }, 100);
        }
    }, [task, isOpen]);

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

    const handleSave = () => {
        if (!task || !task.task) return;

        const updatedTask: ConstructionTask = {
            ...task,
            task: {
                ...task.task,
                indirectWorkDaysPre,
                netWorkDays,
                indirectWorkDaysPost,
                indirectWorkNamePre: indirectWorkNamePre.trim() || undefined,
                indirectWorkNamePost: indirectWorkNamePost.trim() || undefined,
            },
        };

        onSave(updatedTask);
        onClose();
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
        setter: React.Dispatch<React.SetStateAction<number>>,
        value: string,
        min = 0
    ) => {
        const numValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
        setter(Math.max(min, numValue));
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
                    className="w-full max-w-lg rounded-lg bg-white shadow-xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-800">
                                공정 설정
                            </h2>
                            <p className="text-sm text-gray-500">{task.name}</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Body */}
                    <div className="space-y-5 p-4">
                        {/* 앞 간접작업 */}
                        <div className="rounded-lg border border-blue-200 bg-blue-50/50 p-4">
                            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-blue-700">
                                <Clock size={14} />
                                앞 간접작업
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="mb-1 block text-xs font-medium text-gray-600">
                                        일수
                                    </label>
                                    <input
                                        ref={preInputRef}
                                        type="text"
                                        inputMode="numeric"
                                        value={indirectWorkDaysPre}
                                        onChange={(e) => handleNumberChange(setIndirectWorkDaysPre, e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="mb-1 flex items-center gap-1 text-xs font-medium text-gray-600">
                                        <Type size={12} />
                                        작업명
                                    </label>
                                    <input
                                        type="text"
                                        value={indirectWorkNamePre}
                                        onChange={(e) => setIndirectWorkNamePre(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        placeholder="예: 양생, 대기"
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* 순작업 */}
                        <div className="rounded-lg border border-red-200 bg-red-50/50 p-4">
                            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-red-700">
                                <Clock size={14} />
                                순작업
                            </h3>
                            <div>
                                <label className="mb-1 block text-xs font-medium text-gray-600">
                                    일수
                                </label>
                                <input
                                    type="text"
                                    inputMode="numeric"
                                    value={netWorkDays}
                                    onChange={(e) => handleNumberChange(setNetWorkDays, e.target.value, 0)}
                                    onKeyDown={handleKeyDown}
                                    className="w-full max-w-[120px] rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                                />
                            </div>
                        </div>

                        {/* 뒤 간접작업 */}
                        <div className="rounded-lg border border-blue-200 bg-blue-50/50 p-4">
                            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-blue-700">
                                <Clock size={14} />
                                뒤 간접작업
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="mb-1 block text-xs font-medium text-gray-600">
                                        일수
                                    </label>
                                    <input
                                        type="text"
                                        inputMode="numeric"
                                        value={indirectWorkDaysPost}
                                        onChange={(e) => handleNumberChange(setIndirectWorkDaysPost, e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="mb-1 flex items-center gap-1 text-xs font-medium text-gray-600">
                                        <Type size={12} />
                                        작업명
                                    </label>
                                    <input
                                        type="text"
                                        value={indirectWorkNamePost}
                                        onChange={(e) => setIndirectWorkNamePost(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        placeholder="예: 양생, 대기"
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* 총 일수 표시 */}
                        <div className="rounded-md bg-gray-100 p-3 text-center">
                            <span className="text-sm text-gray-600">총 기간: </span>
                            <span className="text-sm font-semibold text-gray-800">{totalDays}일</span>
                            <span className="ml-2 text-xs text-gray-500">
                                (앞{indirectWorkDaysPre} + 순{netWorkDays} + 뒤{indirectWorkDaysPost})
                            </span>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between border-t border-gray-200 px-4 py-3">
                        {/* 삭제 버튼 (왼쪽) */}
                        <div>
                            {onDelete && (
                                <button
                                    onClick={handleDeleteClick}
                                    className="flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
                                >
                                    <Trash2 size={16} />
                                    삭제
                                </button>
                            )}
                        </div>
                        
                        {/* 취소/저장 버튼 (오른쪽) */}
                        <div className="flex gap-2">
                            <button
                                onClick={onClose}
                                className="rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
                            >
                                취소
                            </button>
                            <button
                                onClick={handleSave}
                                className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 transition-colors"
                            >
                                저장
                            </button>
                        </div>
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

