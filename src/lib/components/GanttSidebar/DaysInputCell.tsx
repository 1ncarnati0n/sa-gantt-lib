'use client';

import type { DaysInputCellProps } from './types';

const fieldConfig = {
    indirectWorkDaysPre: {
        localKey: 'pre',
        bgClass: 'bg-blue-50',
        focusClass: 'focus:border-blue-500 focus:ring-blue-500',
        title: '선 간접작업일 (바 드래그로도 조절 가능, 0.1 단위)',
    },
    netWorkDays: {
        localKey: 'net',
        bgClass: 'bg-red-50',
        focusClass: 'focus:border-red-500 focus:ring-red-500',
        title: '순작업일 (0.1 단위)',
    },
    indirectWorkDaysPost: {
        localKey: 'post',
        bgClass: 'bg-blue-50',
        focusClass: 'focus:border-blue-500 focus:ring-blue-500',
        title: '후 간접작업일 (바 드래그로도 조절 가능, 0.1 단위)',
    },
};

export const DaysInputCell: React.FC<DaysInputCellProps> = ({
    task,
    field,
    editingDays,
    setEditingDays,
    onDurationChange,
    width,
}) => {
    if (!task.task) {
        return (
            <div
                className="flex shrink-0 items-center justify-center border-r border-gray-100 px-1"
                style={{ width }}
            >
                <span className="text-xs text-gray-400">-</span>
            </div>
        );
    }

    const config = fieldConfig[field];
    const value = task.task[field];
    const isEditing = editingDays?.taskId === task.id && editingDays?.field === config.localKey;

    return (
        <div
            className="flex shrink-0 items-center justify-center border-r border-gray-100 px-1"
            style={{ width }}
        >
            <input
                type="text"
                inputMode="decimal"
                pattern="[0-9]*\.?[0-9]?"
                className={`w-full max-w-[45px] rounded border border-gray-300 ${config.bgClass} px-1 py-1 text-center text-xs text-gray-800 ${config.focusClass} focus:outline-none focus:ring-1`}
                value={isEditing ? editingDays.value : value}
                onFocus={() => setEditingDays({ taskId: task.id, field: config.localKey, value: String(value) })}
                onChange={(e) => {
                    const newValue = e.target.value.replace(/[^0-9.]/g, '');
                    setEditingDays({ taskId: task.id, field: config.localKey, value: newValue });
                }}
                onBlur={() => {
                    if (isEditing) {
                        const parsed = parseFloat(editingDays.value) || 0;
                        const val = Math.round(parsed * 10) / 10;
                        onDurationChange(task, field, val);
                        setEditingDays(null);
                    }
                }}
                onKeyDown={(e) => {
                    if (e.key === '-' || e.key === 'e' || e.key === '+') {
                        e.preventDefault();
                    }
                    if (e.key === 'Enter') {
                        (e.target as HTMLInputElement).blur();
                    }
                }}
                title={config.title}
            />
        </div>
    );
};
