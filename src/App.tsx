/**
 * SA-Gantt-Lib Demo App
 * 
 * 이 앱은 라이브러리 테스트/개발용 데모입니다.
 * 실제 사용 시에는 GanttChart 컴포넌트를 import해서 사용합니다.
 */

import { useEffect, useState, useCallback } from 'react';
import { parseISO } from 'date-fns';
import { GanttChart, ConstructionTask, Milestone, CalendarSettings, calculateDualCalendarDates, AnchorPoint, DependencyType } from './lib';
import mockData from './data/mock.json';

// Mock 데이터 파싱
const parseMockData = () => {
    const milestones: Milestone[] = mockData.milestones.map(m => ({
        ...m,
        date: parseISO(m.date),
    }));

    const tasks: ConstructionTask[] = mockData.tasks.map(t => ({
        ...t,
        wbsLevel: t.wbsLevel as 1 | 2,
        type: t.type as 'GROUP' | 'SUMMARY' | 'TASK',
        startDate: parseISO(t.startDate),
        endDate: parseISO(t.endDate),
        summary: t.summary ? { ...t.summary } : undefined,
        task: t.task ? {
            ...t.task,
            placement: t.task.placement as 'PRE' | 'POST',
        } : undefined,
        dependencies: t.dependencies.map(d => ({
            ...d,
            type: d.type as DependencyType,
            sourceAnchor: d.sourceAnchor as AnchorPoint | undefined,
            targetAnchor: d.targetAnchor as AnchorPoint | undefined,
        })),
    }));

    return { milestones, tasks };
};

// 휴일 목록
const HOLIDAYS = [
    parseISO('2024-05-05'),
    parseISO('2024-06-06'),
    parseISO('2024-08-15'),
    parseISO('2024-10-03'),
    parseISO('2024-12-25'),
];

// 캘린더 설정
const CALENDAR_SETTINGS: CalendarSettings = {
    workOnSaturdays: false,
    workOnSundays: false,
    workOnHolidays: false,
};

function App() {
    const [tasks, setTasks] = useState<ConstructionTask[]>([]);
    const [milestones, setMilestones] = useState<Milestone[]>([]);

    // 초기 데이터 로드
    useEffect(() => {
        const { tasks: parsedTasks, milestones: parsedMilestones } = parseMockData();
        setTasks(parsedTasks);
        setMilestones(parsedMilestones);
    }, []);

    // 태스크 업데이트 핸들러
    // 실제 프로젝트에서는 여기서 Supabase 등 백엔드 API 호출
    const handleTaskUpdate = useCallback((updatedTask: ConstructionTask) => {
        setTasks(prevTasks => {
            // 1. 해당 태스크 업데이트
            let newTasks = prevTasks.map(t =>
                t.id === updatedTask.id ? updatedTask : t
            );

            // 2. Level 2 태스크의 날짜 재계산
            newTasks = newTasks.map(t => {
                if (t.wbsLevel === 2 && t.task) {
                    const dates = calculateDualCalendarDates(t, HOLIDAYS, CALENDAR_SETTINGS);
                    return { ...t, startDate: dates.startDate, endDate: dates.endDate };
                }
                return t;
            });

            // 3. Level 1 태스크의 summary 재계산
            const summaryMap = new Map<string, {
                work: number;
                nonWork: number;
                minStart: Date;
                maxEnd: Date;
            }>();

            newTasks.forEach(t => {
                if (t.parentId && t.wbsLevel === 2 && t.task) {
                    const current = summaryMap.get(t.parentId) || {
                        work: 0,
                        nonWork: 0,
                        minStart: new Date(8640000000000000),
                        maxEnd: new Date(-8640000000000000),
                    };

                    current.work += t.task.netWorkDays;
                    current.nonWork += t.task.indirectWorkDays;
                    if (t.startDate < current.minStart) current.minStart = t.startDate;
                    if (t.endDate > current.maxEnd) current.maxEnd = t.endDate;

                    summaryMap.set(t.parentId, current);
                }
            });

            // 4. Level 1 태스크 업데이트
            newTasks = newTasks.map(t => {
                if (t.wbsLevel === 1 && summaryMap.has(t.id)) {
                    const agg = summaryMap.get(t.id)!;
                    return {
                        ...t,
                        startDate: agg.minStart,
                        endDate: agg.maxEnd,
                        summary: {
                            workDaysTotal: agg.work,
                            nonWorkDaysTotal: agg.nonWork,
                        },
                    };
                }
                return t;
            });

            return newTasks;
        });

        console.log('Task updated:', updatedTask);
    }, []);

    // 뷰 전환 핸들러
    const handleViewChange = useCallback((view: 'MASTER' | 'DETAIL', activeSummaryId?: string) => {
        console.log('View changed:', view, activeSummaryId);
    }, []);

    if (tasks.length === 0) {
        return (
            <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
                <div className="text-lg text-gray-500">Loading...</div>
            </div>
        );
    }

    return (
        <div className="h-screen w-screen overflow-hidden bg-gray-100">
            <GanttChart
                tasks={tasks}
                milestones={milestones}
                holidays={HOLIDAYS}
                calendarSettings={CALENDAR_SETTINGS}
                onTaskUpdate={handleTaskUpdate}
                onViewChange={handleViewChange}
            />
        </div>
    );
}

export default App;
