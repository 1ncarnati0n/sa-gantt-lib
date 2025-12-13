'use client';

import { format } from 'date-fns';
import { ChevronRight, ChevronDown, GripVertical } from 'lucide-react';
import { GANTT_LAYOUT } from '../../types';
import { DaysInputCell } from './DaysInputCell';
import type { SidebarRowDetailProps } from './types';

const { ROW_HEIGHT } = GANTT_LAYOUT;

export const SidebarRowDetail: React.FC<SidebarRowDetailProps> = ({
    task,
    rowIndex,
    isVirtualized,
    rowStart,
    isDragging,
    isDragOver,
    dragOverPosition,
    isSelected,
    isFocused,
    isExpanded,
    canExpand,
    indent,
    isGroup,
    onDragStart,
    onDragOver,
    onDragLeave,
    onDrop,
    onDragEnd,
    onRowClick,
    onContextMenu,
    onToggle,
    editingTaskId,
    editingName,
    setEditingName,
    editInputRef,
    onStartEdit,
    onSaveEdit,
    onEditKeyDown,
    columns,
    dragHandleWidth,
    onTaskReorder,
    onTaskMove,
    onTaskUpdate,
    onTaskDoubleClick,
    editingDays,
    setEditingDays,
    onDurationChange,
}) => {
    return (
        <div
            draggable={!!(onTaskReorder || onTaskMove)}
            onDragStart={(e) => onDragStart(e, task.id)}
            onDragOver={(e) => onDragOver(e, task.id, isGroup)}
            onDragLeave={onDragLeave}
            onDrop={(e) => onDrop(e, task.id)}
            onDragEnd={onDragEnd}
            onClick={(e) => onRowClick(e, task, rowIndex)}
            onDoubleClick={() => {
                if (!isGroup && task.type === 'TASK' && onTaskDoubleClick) {
                    onTaskDoubleClick(task);
                }
            }}
            onContextMenu={(e) => onContextMenu(e, task)}
            className={`box-border flex items-center border-b transition-colors ${isDragging
                ? 'opacity-50 bg-blue-50'
                : isDragOver
                    ? dragOverPosition === 'before'
                        ? 'border-t-2 border-t-blue-500 border-b-gray-100'
                        : dragOverPosition === 'into'
                            ? 'bg-blue-200 border-blue-400 border-2 shadow-[inset_0_0_0_2px_rgba(59,130,246,0.6)]'
                            : 'border-b-2 border-b-blue-500'
                    : isFocused
                        ? 'bg-blue-100 border-gray-100 ring-2 ring-blue-400 ring-inset'
                        : isSelected
                            ? 'bg-blue-50 border-gray-100 shadow-[inset_0_0_0_2px_rgba(59,130,246,0.3)]'
                            : isGroup
                                ? 'bg-gray-50 border-gray-100 hover:bg-gray-100'
                                : 'border-gray-100 hover:bg-gray-50 cursor-pointer'
                }`}
            style={{
                height: ROW_HEIGHT,
                ...(isVirtualized ? {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    transform: `translateY(${rowStart}px)`,
                } : {}),
            }}
            title={!isGroup && task.type === 'TASK' ? '더블클릭하여 공정 설정' : undefined}
        >
            {/* Drag Handle */}
            {onTaskReorder && (
                <div
                    className="flex shrink-0 items-center justify-center cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600"
                    style={{ width: dragHandleWidth }}
                >
                    <GripVertical size={14} />
                </div>
            )}

            {/* Task Name */}
            <div
                className="flex shrink-0 items-center overflow-hidden border-r border-gray-100 px-2"
                style={{ width: onTaskReorder ? columns[0].width - dragHandleWidth : columns[0].width, paddingLeft: indent + 8 }}
            >
                {canExpand ? (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onToggle(task.id);
                        }}
                        className="mr-1 shrink-0 rounded p-1 text-gray-500 hover:bg-gray-200"
                    >
                        {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                    </button>
                ) : (
                    <div className="w-6 shrink-0" />
                )}

                {editingTaskId === task.id ? (
                    <input
                        ref={editInputRef}
                        type="text"
                        value={editingName}
                        onChange={(e) => setEditingName(e.target.value)}
                        onKeyDown={onEditKeyDown}
                        onBlur={onSaveEdit}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full rounded border border-blue-400 bg-white px-1 py-0.5 text-sm font-normal text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                ) : (
                    <span
                        className={`truncate text-sm ${isGroup
                            ? 'font-normal text-gray-500 cursor-text'
                            : 'font-medium text-gray-800'
                            }`}
                        onDoubleClick={(e) => {
                            if (onTaskUpdate) {
                                e.stopPropagation();
                                onStartEdit(task);
                            }
                        }}
                        title={onTaskUpdate ? '더블클릭하여 이름 편집' : undefined}
                    >
                        {task.name}
                    </span>
                )}
            </div>

            {/* Pre Indirect Work Days */}
            <DaysInputCell
                task={task}
                field="indirectWorkDaysPre"
                editingDays={editingDays}
                setEditingDays={setEditingDays}
                onDurationChange={onDurationChange}
                width={columns[1].width}
            />

            {/* Net Work Days */}
            <DaysInputCell
                task={task}
                field="netWorkDays"
                editingDays={editingDays}
                setEditingDays={setEditingDays}
                onDurationChange={onDurationChange}
                width={columns[2].width}
            />

            {/* Post Indirect Work Days */}
            <DaysInputCell
                task={task}
                field="indirectWorkDaysPost"
                editingDays={editingDays}
                setEditingDays={setEditingDays}
                onDurationChange={onDurationChange}
                width={columns[3].width}
            />

            {/* Start Date */}
            <div
                className={`flex shrink-0 items-center justify-center border-r border-gray-100 text-xs ${isGroup ? 'text-gray-400' : 'text-gray-600 hover:bg-blue-50 cursor-pointer'}`}
                style={{ width: columns[4].width }}
                onDoubleClick={(e) => {
                    if (!isGroup && onTaskDoubleClick) {
                        e.stopPropagation();
                        onTaskDoubleClick(task);
                    }
                }}
                title={isGroup ? undefined : '더블클릭하여 시작일 편집'}
            >
                {isGroup ? '-' : format(task.startDate, 'yyyy-MM-dd')}
            </div>

            {/* End Date */}
            <div
                className="flex shrink-0 items-center justify-center text-xs text-gray-500"
                style={{ width: columns[5].width }}
            >
                {isGroup ? '-' : format(task.endDate, 'yyyy-MM-dd')}
            </div>
        </div>
    );
};
