import React from 'react';
import { useConstructionStore } from '../../store/useConstructionStore';
import { format } from 'date-fns';
import { ConstructionTask } from '../../types/gantt';

interface TaskRowProps {
    task: ConstructionTask;
    rowIndex: number;
}

const TaskRow: React.FC<TaskRowProps> = ({ task }) => {
    const updateTaskDuration = useConstructionStore(state => state.updateTaskDuration);
    const isSummary = task.type === 'SUMMARY';

    const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const field = e.target.name;
        const value = parseInt(e.target.value) || 0;

        let newWorkDays = task.workDays;
        let newNonWorkDays = task.nonWorkDays;

        if (field === 'workDays') newWorkDays = value;
        if (field === 'nonWorkDays') newNonWorkDays = value;

        if (task.type === 'TASK') {
            updateTaskDuration(task.id, newWorkDays, newNonWorkDays);
        }
    };

    const rowClasses = isSummary
        ? "bg-gray-100 font-bold text-gray-700 h-10 border-b border-gray-300"
        : "bg-white text-gray-800 h-10 border-b border-gray-200 hover:bg-yellow-50 transition-colors";

    return (
        <div className={`flex items-center w-full min-w-[300px] text-sm ${rowClasses}`}>
            <div className={`w-1/2 px-2 truncate flex items-center ${!task.parentId ? 'pl-2' : 'pl-6'}`}>
                {task.parentId ? '└ ' : ''} {task.name}
            </div>
            <div className="w-[100px] text-center px-1">
                {isSummary ? '-' : (
                    <input
                        type="number"
                        name="workDays"
                        value={task.workDays}
                        onChange={handleDurationChange}
                        className="w-full text-center p-0.5 rounded border border-[var(--color-vermilion)]/50 bg-[var(--color-vermilion)]/5 focus:outline-none focus:ring-1 focus:ring-[var(--color-vermilion)]"
                        disabled={isSummary}
                    />
                )}
            </div>
            <div className="w-[100px] text-center px-1">
                {isSummary ? '-' : (
                    <input
                        type="number"
                        name="nonWorkDays"
                        value={task.nonWorkDays}
                        onChange={handleDurationChange}
                        className="w-full text-center p-0.5 rounded border border-[var(--color-teal)]/50 bg-[var(--color-teal)]/5 focus:outline-none focus:ring-1 focus:ring-[var(--color-teal)]"
                        disabled={isSummary}
                    />
                )}
            </div>
            <div className="w-[100px] text-center font-semibold text-gray-600">
                {isSummary ? '-' : (task.workDays + task.nonWorkDays)}일
            </div>
            <div className="w-[120px] text-center text-xs text-gray-500">
                {format(task.startDate, 'yy-MM-dd')}
            </div>
        </div>
    );
};

export const GanttGrid: React.FC = () => {
    const { tasks } = useConstructionStore();

    return (
        <div className="overflow-y-auto overflow-x-hidden h-full flex flex-col bg-white border-r border-gray-200">
            {/* Grid Header */}
            <div className="flex w-full min-w-[300px] text-xs font-semibold text-gray-500 bg-gray-50 border-b border-gray-300 h-8 sticky top-0 z-10 shadow-sm">
                <div className="w-1/2 px-2 flex items-center">구분 | 단위 공정 (WBS)</div>
                <div className="w-[100px] flex items-center justify-center text-[var(--color-vermilion)]">작업일수</div>
                <div className="w-[100px] flex items-center justify-center text-[var(--color-teal)]">비작업일수</div>
                <div className="w-[100px] flex items-center justify-center">총 기간</div>
                <div className="w-[120px] flex items-center justify-center">시작일</div>
            </div>

            {/* Task Rows */}
            <div className="divide-y divide-gray-100 flex-1">
                {tasks.map((task, index) => (
                    <TaskRow key={task.id} task={task} rowIndex={index} />
                ))}
            </div>
        </div>
    );
};
