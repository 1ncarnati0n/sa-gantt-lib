'use client';

import type { SidebarHeaderProps } from './types';
import { GANTT_LAYOUT } from '../../types';

const { HEADER_HEIGHT } = GANTT_LAYOUT;

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({
    viewMode,
    columns,
    resizingIndex,
    selectedTaskIds,
    tasks,
    onColumnResizeStart,
    onColumnResizeDoubleClick,
    onTaskGroup,
    onTaskUngroup,
    onClearSelection,
}) => {
    const selectedGroupTask = selectedTaskIds.size === 1
        ? tasks.find(t => t.id === Array.from(selectedTaskIds)[0] && t.type === 'GROUP')
        : null;
    const canGroup = selectedTaskIds.size >= 1 && onTaskGroup && !selectedGroupTask;
    const canUngroup = selectedGroupTask && onTaskUngroup;

    const renderGroupButtons = () => {
        if (!canGroup && !canUngroup && selectedTaskIds.size === 0) return null;

        return (
            <div className="flex items-center gap-2">
                {selectedTaskIds.size > 0 && (
                    <span className="text-xs text-gray-500">
                        {selectedTaskIds.size}개 선택
                    </span>
                )}

                {canUngroup && (
                    <button
                        onClick={() => {
                            onTaskUngroup(selectedGroupTask!.id);
                            onClearSelection();
                        }}
                        className="flex items-center gap-1 rounded bg-gray-500 px-2 py-1 text-xs font-medium text-white hover:bg-gray-600 transition-colors"
                        title="그룹 해제"
                    >
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                        해제
                    </button>
                )}

                {selectedTaskIds.size > 0 && (
                    <button
                        onClick={onClearSelection}
                        className="flex items-center justify-center rounded p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-600 transition-colors"
                        title="선택 해제 (ESC)"
                    >
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                )}
            </div>
        );
    };

    const renderColumnHeaders = () => (
        <div className="flex h-[32px] border-t border-gray-200">
            {columns.map((col, idx) => (
                <div
                    key={col.id}
                    className="relative flex shrink-0 items-center justify-center text-xs font-medium text-gray-600"
                    style={{ width: col.width }}
                >
                    {col.label}
                    {idx < columns.length - 1 && (
                        <div
                            className="absolute right-0 top-0 z-10 h-full w-3 cursor-col-resize touch-none flex justify-center group"
                            style={{ transform: 'translateX(50%)' }}
                            onMouseDown={(e) => onColumnResizeStart(e, idx)}
                            onDoubleClick={(e) => onColumnResizeDoubleClick(e, idx)}
                            title="드래그하여 컬럼 너비 조절 / 더블클릭으로 내용에 맞게 자동 조절"
                        >
                            <div
                                className={`h-full w-[2px] transition-colors ${resizingIndex === idx
                                    ? 'bg-blue-500'
                                    : 'bg-transparent group-hover:bg-blue-300'
                                    }`}
                            />
                        </div>
                    )}
                    {idx < columns.length - 1 && (
                        <div className="absolute right-0 top-0 h-full w-px bg-gray-200" />
                    )}
                </div>
            ))}
        </div>
    );

    return (
        <div
            className="flex shrink-0 flex-col border-b border-gray-300 bg-gray-50"
            style={{ height: HEADER_HEIGHT }}
        >
            <div className="flex flex-1 items-center justify-between px-4">
                <span className="font-bold text-gray-700">
                    {viewMode === 'MASTER' ? '공구 공정표 (Level 1)' : '주공정표 (Level 2)'}
                </span>
                {renderGroupButtons()}
            </div>
            {renderColumnHeaders()}
        </div>
    );
};
