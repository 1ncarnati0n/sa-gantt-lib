'use client';

import React, { useState, useEffect, useRef } from 'react';
import { format } from 'date-fns';
import { X, Calendar, FileText, Type } from 'lucide-react';
import { Milestone } from '../types';

interface MilestoneEditModalProps {
    milestone: Milestone | null;
    isOpen: boolean;
    onClose: () => void;
    onSave: (milestone: Milestone) => void;
}

/**
 * 마일스톤 편집 모달
 * 
 * 마일스톤의 이름, 설명, 날짜를 편집할 수 있는 모달 컴포넌트입니다.
 */
export const MilestoneEditModal: React.FC<MilestoneEditModalProps> = ({
    milestone,
    isOpen,
    onClose,
    onSave,
}) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [dateStr, setDateStr] = useState('');
    const nameInputRef = useRef<HTMLInputElement>(null);

    // 마일스톤 데이터로 폼 초기화
    useEffect(() => {
        if (milestone && isOpen) {
            setName(milestone.name);
            setDescription(milestone.description || '');
            setDateStr(format(milestone.date, 'yyyy-MM-dd'));
            
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
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    const handleSave = () => {
        if (!milestone || !name.trim()) return;

        const updatedMilestone: Milestone = {
            ...milestone,
            name: name.trim(),
            description: description.trim() || undefined,
            date: new Date(dateStr),
        };

        onSave(updatedMilestone);
        onClose();
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
                            마일스톤 설정
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
                    <div className="flex justify-end gap-2 border-t border-gray-200 px-4 py-3">
                        <button
                            onClick={onClose}
                            className="rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
                        >
                            취소
                        </button>
                        <button
                            onClick={handleSave}
                            disabled={!name.trim()}
                            className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                        >
                            저장
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

