/**
 * SA-Gantt-Lib Demo App
 * 
 * 이 앱은 라이브러리 테스트/개발용 데모입니다.
 * 실제 사용 시에는 GanttChart 컴포넌트를 import해서 사용합니다.
 * 
 * 데이터 저장: localStorage 사용 (나중에 Supabase로 전환 예정)
 */

import { useEffect, useState, useCallback, useRef } from 'react';
import { parseISO, format } from 'date-fns';
import { GanttChart, ConstructionTask, Milestone, CalendarSettings, calculateDualCalendarDates, AnchorPoint, DependencyType } from './lib';
import mockData from './data/mock.json';

// ============================================
// localStorage 키
// ============================================
const STORAGE_KEYS = {
    TASKS: 'sa-gantt-tasks',
    MILESTONES: 'sa-gantt-milestones',
};

// ============================================
// localStorage 유틸리티 함수
// (나중에 Supabase로 전환 시 이 함수들만 수정)
// ============================================

// Task를 저장 가능한 형태로 직렬화
const serializeTasks = (tasks: ConstructionTask[]): string => {
    const serialized = tasks.map(t => ({
        ...t,
        startDate: format(t.startDate, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
        endDate: format(t.endDate, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
    }));
    return JSON.stringify(serialized);
};

// Milestone을 저장 가능한 형태로 직렬화
const serializeMilestones = (milestones: Milestone[]): string => {
    const serialized = milestones.map(m => ({
        ...m,
        date: format(m.date, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
    }));
    return JSON.stringify(serialized);
};

// localStorage에서 Tasks 로드
const loadTasksFromStorage = (): ConstructionTask[] | null => {
    try {
        const stored = localStorage.getItem(STORAGE_KEYS.TASKS);
        if (!stored) return null;
        
        const parsed = JSON.parse(stored);
        return parsed.map((t: Record<string, unknown>) => ({
            ...t,
            startDate: parseISO(t.startDate as string),
            endDate: parseISO(t.endDate as string),
        }));
    } catch (error) {
        console.error('Failed to load tasks from localStorage:', error);
        return null;
    }
};

// localStorage에서 Milestones 로드
const loadMilestonesFromStorage = (): Milestone[] | null => {
    try {
        const stored = localStorage.getItem(STORAGE_KEYS.MILESTONES);
        if (!stored) return null;
        
        const parsed = JSON.parse(stored);
        return parsed.map((m: Record<string, unknown>) => ({
            ...m,
            date: parseISO(m.date as string),
        }));
    } catch (error) {
        console.error('Failed to load milestones from localStorage:', error);
        return null;
    }
};

// localStorage에 Tasks 저장
const saveTasksToStorage = (tasks: ConstructionTask[]): void => {
    try {
        localStorage.setItem(STORAGE_KEYS.TASKS, serializeTasks(tasks));
        console.log('Tasks saved to localStorage');
    } catch (error) {
        console.error('Failed to save tasks to localStorage:', error);
    }
};

// localStorage에 Milestones 저장
const saveMilestonesToStorage = (milestones: Milestone[]): void => {
    try {
        localStorage.setItem(STORAGE_KEYS.MILESTONES, serializeMilestones(milestones));
        console.log('Milestones saved to localStorage');
    } catch (error) {
        console.error('Failed to save milestones to localStorage:', error);
    }
};

// localStorage 데이터 초기화 (mock.json으로 리셋)
export const resetStorageToMock = (): void => {
    localStorage.removeItem(STORAGE_KEYS.TASKS);
    localStorage.removeItem(STORAGE_KEYS.MILESTONES);
    console.log('Storage reset. Refresh to load mock data.');
};

// ============================================
// Mock 데이터 파싱
// ============================================
const parseMockData = () => {
    const milestones: Milestone[] = mockData.milestones.map(m => ({
        ...m,
        date: parseISO(m.date),
    }));

    const tasks: ConstructionTask[] = mockData.tasks.map(t => ({
        ...t,
        wbsLevel: t.wbsLevel as 1 | 2,
        type: t.type as 'GROUP' | 'CP' | 'TASK',
        startDate: parseISO(t.startDate),
        endDate: parseISO(t.endDate),
        cp: t.cp ? { ...t.cp } : undefined,
        task: t.task ? {
            netWorkDays: t.task.netWorkDays,
            indirectWorkDaysPre: t.task.indirectWorkDaysPre,
            indirectWorkDaysPost: t.task.indirectWorkDaysPost,
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
    const [isLoaded, setIsLoaded] = useState(false);
    
    // 변경사항 감지
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
    const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved'>('idle');
    
    // 초기 로드 여부 추적
    const isInitialLoad = useRef(true);

    // 초기 데이터 로드 (localStorage 우선, 없으면 mock.json)
    useEffect(() => {
        // 1. localStorage에서 로드 시도
        const storedTasks = loadTasksFromStorage();
        const storedMilestones = loadMilestonesFromStorage();
        
        if (storedTasks && storedTasks.length > 0) {
            // localStorage에 데이터가 있으면 사용
            console.log('Loaded from localStorage');
            setTasks(storedTasks);
            setMilestones(storedMilestones || []);
        } else {
            // localStorage에 데이터가 없으면 mock.json에서 로드 후 저장
            console.log('Loaded from mock.json (first time)');
            const { tasks: parsedTasks, milestones: parsedMilestones } = parseMockData();
            setTasks(parsedTasks);
            setMilestones(parsedMilestones);
            
            // mock 데이터를 localStorage에 저장
            saveTasksToStorage(parsedTasks);
            saveMilestonesToStorage(parsedMilestones);
        }
        
        setIsLoaded(true);
        
        // 초기 로드 완료 후 플래그 해제
        setTimeout(() => {
            isInitialLoad.current = false;
        }, 100);
    }, []);

    // ====================================
    // 변경사항 감지 (tasks 변경 시)
    // ====================================
    useEffect(() => {
        // 초기 로드 시에는 변경사항으로 표시하지 않음
        if (isInitialLoad.current || !isLoaded) return;
        
        setHasUnsavedChanges(true);
        setSaveStatus('idle');
    }, [tasks, isLoaded]);

    // ====================================
    // 수동 저장 핸들러
    // ====================================
    const handleSave = useCallback(() => {
        if (!hasUnsavedChanges) return;
        
        setSaveStatus('saving');
        
        // 저장 실행
        saveTasksToStorage(tasks);
        saveMilestonesToStorage(milestones);
        
        // 저장 완료 표시
        setTimeout(() => {
            setHasUnsavedChanges(false);
            setSaveStatus('saved');
            
            // 3초 후 상태 초기화
            setTimeout(() => {
                setSaveStatus('idle');
            }, 3000);
        }, 300);
    }, [tasks, milestones, hasUnsavedChanges]);

    // 초기화 핸들러 (mock.json으로 리셋)
    const handleReset = useCallback(() => {
        if (!confirm('모든 변경사항을 취소하고 초기 데이터로 되돌리시겠습니까?')) return;
        
        resetStorageToMock();
        
        // mock.json에서 다시 로드
        const { tasks: parsedTasks, milestones: parsedMilestones } = parseMockData();
        setTasks(parsedTasks);
        setMilestones(parsedMilestones);
        
        // localStorage에 저장
        saveTasksToStorage(parsedTasks);
        saveMilestonesToStorage(parsedMilestones);
        
        setHasUnsavedChanges(false);
        setSaveStatus('idle');
        
        console.log('Reset to mock data');
    }, []);

    // ====================================
    // 태스크 업데이트 핸들러
    // (나중에 Supabase 전환 시 이 핸들러들의 내용만 수정)
    // ====================================
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

            // 3. Level 1 태스크의 cp 재계산
            const cpMap = new Map<string, {
                work: number;
                nonWork: number;
                minStart: Date;
                maxEnd: Date;
            }>();

            newTasks.forEach(t => {
                if (t.parentId && t.wbsLevel === 2 && t.task) {
                    const current = cpMap.get(t.parentId) || {
                        work: 0,
                        nonWork: 0,
                        minStart: new Date(8640000000000000),
                        maxEnd: new Date(-8640000000000000),
                    };

                    current.work += t.task.netWorkDays;
                    current.nonWork += t.task.indirectWorkDaysPre + t.task.indirectWorkDaysPost;
                    if (t.startDate < current.minStart) current.minStart = t.startDate;
                    if (t.endDate > current.maxEnd) current.maxEnd = t.endDate;

                    cpMap.set(t.parentId, current);
                }
            });

            // 4. Level 1 태스크 업데이트
            newTasks = newTasks.map(t => {
                if (t.wbsLevel === 1 && cpMap.has(t.id)) {
                    const agg = cpMap.get(t.id)!;
                    return {
                        ...t,
                        startDate: agg.minStart,
                        endDate: agg.maxEnd,
                        cp: {
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

    // 새 태스크 생성 핸들러
    const handleTaskCreate = useCallback((newTask: Partial<ConstructionTask>) => {
        setTasks(prevTasks => {
            // 새 태스크 추가
            const taskToAdd: ConstructionTask = {
                id: newTask.id || `task-${Date.now()}`,
                parentId: newTask.parentId || null,
                wbsLevel: newTask.wbsLevel || 2,
                type: newTask.type || 'TASK',
                name: newTask.name || '새 공정',
                startDate: newTask.startDate || new Date(),
                endDate: newTask.endDate || new Date(),
                task: newTask.task,
                dependencies: newTask.dependencies || [],
            };

            let newTasks = [...prevTasks, taskToAdd];

            // Level 2 태스크의 날짜 재계산
            newTasks = newTasks.map(t => {
                if (t.wbsLevel === 2 && t.task) {
                    const dates = calculateDualCalendarDates(t, HOLIDAYS, CALENDAR_SETTINGS);
                    return { ...t, startDate: dates.startDate, endDate: dates.endDate };
                }
                return t;
            });

            // Level 1 태스크의 cp 재계산
            const cpMap2 = new Map<string, {
                work: number;
                nonWork: number;
                minStart: Date;
                maxEnd: Date;
            }>();

            newTasks.forEach(t => {
                if (t.parentId && t.wbsLevel === 2 && t.task) {
                    const current = cpMap2.get(t.parentId) || {
                        work: 0,
                        nonWork: 0,
                        minStart: new Date(8640000000000000),
                        maxEnd: new Date(-8640000000000000),
                    };

                    current.work += t.task.netWorkDays;
                    current.nonWork += t.task.indirectWorkDaysPre + t.task.indirectWorkDaysPost;
                    if (t.startDate < current.minStart) current.minStart = t.startDate;
                    if (t.endDate > current.maxEnd) current.maxEnd = t.endDate;

                    cpMap2.set(t.parentId, current);
                }
            });

            // Level 1 태스크 업데이트
            newTasks = newTasks.map(t => {
                if (t.wbsLevel === 1 && cpMap2.has(t.id)) {
                    const agg = cpMap2.get(t.id)!;
                    return {
                        ...t,
                        startDate: agg.minStart,
                        endDate: agg.maxEnd,
                        cp: {
                            workDaysTotal: agg.work,
                            nonWorkDaysTotal: agg.nonWork,
                        },
                    };
                }
                return t;
            });

            console.log('Task created:', taskToAdd);
            return newTasks;
        });
    }, []);

    // 태스크 순서 변경 핸들러
    const handleTaskReorder = useCallback((taskId: string, newIndex: number) => {
        setTasks(prevTasks => {
            const taskIndex = prevTasks.findIndex(t => t.id === taskId);
            if (taskIndex === -1) return prevTasks;
            
            const task = prevTasks[taskIndex];
            const newTasks = [...prevTasks];
            
            // 기존 위치에서 제거
            newTasks.splice(taskIndex, 1);
            
            // 새 위치에 삽입 (제거 후 인덱스 조정)
            const adjustedIndex = taskIndex < newIndex ? newIndex - 1 : newIndex;
            newTasks.splice(adjustedIndex, 0, task);
            
            console.log('Task reordered:', taskId, 'to index:', adjustedIndex);
            return newTasks;
        });
    }, []);

    // 뷰 전환 핸들러
    const handleViewChange = useCallback((view: 'MASTER' | 'DETAIL', activeCPId?: string) => {
        console.log('View changed:', view, activeCPId);
    }, []);

    if (tasks.length === 0) {
        return (
            <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
                <div className="text-lg text-gray-500">Loading...</div>
            </div>
        );
    }

    return (
        <div className="flex h-screen w-screen flex-col overflow-hidden bg-gray-100">
            {/* 상단 헤더 바 */}
            <div className="flex h-12 shrink-0 items-center justify-between border-b border-gray-200 bg-white px-4 shadow-sm">
                <div className="flex items-center gap-3">
                    <h1 className="text-lg font-bold text-gray-800">SA-Gantt</h1>
                    
                    {/* 변경사항 표시 */}
                    {hasUnsavedChanges && (
                        <span className="flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700">
                            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                            변경사항 있음
                        </span>
                    )}
                    
                    {/* 저장 완료 표시 */}
                    {saveStatus === 'saved' && !hasUnsavedChanges && (
                        <span className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                            저장됨
                        </span>
                    )}
                </div>
                
                <div className="flex items-center gap-2">
                    {/* 저장 버튼 */}
                    <button
                        onClick={handleSave}
                        disabled={!hasUnsavedChanges || saveStatus === 'saving'}
                        className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                            hasUnsavedChanges
                                ? 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700'
                                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                    >
                        {saveStatus === 'saving' ? (
                            <>
                                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                </svg>
                                저장 중...
                            </>
                        ) : (
                            <>
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                                </svg>
                                저장
                            </>
                        )}
                    </button>
                    
                    {/* 초기화 버튼 */}
                    <button
                        onClick={handleReset}
                        className="flex items-center gap-1.5 rounded-md bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200 active:bg-gray-300"
                    >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        초기화
                    </button>
                </div>
            </div>
            
            {/* 간트 차트 영역 */}
            <div className="flex-1 overflow-hidden">
                <GanttChart
                    tasks={tasks}
                    milestones={milestones}
                    holidays={HOLIDAYS}
                    calendarSettings={CALENDAR_SETTINGS}
                    onTaskUpdate={handleTaskUpdate}
                    onTaskCreate={handleTaskCreate}
                    onTaskReorder={handleTaskReorder}
                    onViewChange={handleViewChange}
                />
            </div>
        </div>
    );
}

export default App;
