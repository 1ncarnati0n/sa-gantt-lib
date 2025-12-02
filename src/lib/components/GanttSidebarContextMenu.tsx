'use client';

import React from 'react';
import { ConstructionTask } from '../types';

interface GanttSidebarContextMenuProps {
    x: number;
    y: number;
    taskId: string; // 사용되지 않지만 props 인터페이스 유지
    selectedTaskIds: Set<string>;
    tasks: ConstructionTask[];
    onTaskGroup?: (taskIds: string[]) => void;
    onTaskUngroup?: (groupId: string) => void;
    onClose: () => void;
    onDeselect: () => void;
}

/**
 * 사이드바 컨텍스트 메뉴 컴포넌트
 * 
 * 우클릭 시 표시되는 메뉴로, 태스크 그룹화/해제 기능을 제공합니다.
 */
export const GanttSidebarContextMenu: React.FC<GanttSidebarContextMenuProps> = ({
    x,
    y,
    taskId: _taskId, // 사용되지 않지만 props 유지
    selectedTaskIds,
    tasks,
    onTaskGroup,
    onTaskUngroup,
    onClose,
    onDeselect,
}) => {
    const handleGroup = () => {
        if (selectedTaskIds.size >= 2 && onTaskGroup) {
            onTaskGroup(Array.from(selectedTaskIds));
            onClose();
        }
    };

    const handleUngroup = () => {
        if (selectedTaskIds.size === 1 && onTaskUngroup) {
            const taskId = Array.from(selectedTaskIds)[0];
            const task = tasks.find(t => t.id === taskId);
            if (task?.type === 'GROUP') {
                onTaskUngroup(taskId);
                onClose();
            }
        }
    };

    const isGroupSelected = selectedTaskIds.size === 1 && (() => {
        const taskId = Array.from(selectedTaskIds)[0];
        const task = tasks.find(t => t.id === taskId);
        return task?.type === 'GROUP';
    })();

    return (
        <div
            className="fixed z-[100] min-w-[160px] rounded-lg border border-gray-200 bg-white py-1 shadow-lg"
            style={{ left: x, top: y }}
            onClick={(e) => e.stopPropagation()}
        >
            {/* 그룹화 (2개 이상 선택 시) */}
            {selectedTaskIds.size >= 2 && onTaskGroup && (
                <button
                    onClick={handleGroup}
                    className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    그룹화 ({selectedTaskIds.size}개 선택됨)
                </button>
            )}
            
            {/* 그룹 해제 (GROUP 1개 선택 시) */}
            {isGroupSelected && onTaskUngroup && (
                <button
                    onClick={handleUngroup}
                    className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                    그룹 해제
                </button>
            )}
            
            {/* 선택 해제 */}
            <button
                onClick={() => {
                    onDeselect();
                    onClose();
                }}
                className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-500 hover:bg-gray-100"
            >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                선택 해제
            </button>
        </div>
    );
};

