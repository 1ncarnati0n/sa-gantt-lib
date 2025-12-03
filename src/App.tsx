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
import { GanttChart, ConstructionTask, Milestone, CalendarSettings, calculateDualCalendarDates, AnchorPoint, DependencyType, DropPosition } from './lib';
import { useHistory } from './lib/hooks/useHistory';
import mockData from './data/mock.json';

// ============================================
// 앱 상태 타입 (Undo/Redo 단위)
// ============================================
interface AppState {
    tasks: ConstructionTask[];
    milestones: Milestone[];
}

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

// 타입 가드: Task 데이터 검증
const isValidTaskData = (data: unknown): data is Record<string, unknown> & { 
    id: string; 
    startDate: string; 
    endDate: string;
} => {
    if (!data || typeof data !== 'object') return false;
    const obj = data as Record<string, unknown>;
    return (
        typeof obj.id === 'string' &&
        typeof obj.startDate === 'string' &&
        typeof obj.endDate === 'string'
    );
};

// localStorage에서 Tasks 로드
const loadTasksFromStorage = (): ConstructionTask[] | null => {
    try {
        const stored = localStorage.getItem(STORAGE_KEYS.TASKS);
        if (!stored) return null;
        
        const parsed = JSON.parse(stored);
        if (!Array.isArray(parsed)) {
            console.error('Invalid tasks data format: expected array');
            return null;
        }
        
        return parsed
            .filter(isValidTaskData)
            .map((t) => ({
                ...t,
                startDate: parseISO(t.startDate),
                endDate: parseISO(t.endDate),
            })) as ConstructionTask[];
    } catch (error) {
        console.error('Failed to load tasks from localStorage:', error);
        return null;
    }
};

// 타입 가드: Milestone 데이터 검증
const isValidMilestoneData = (data: unknown): data is Record<string, unknown> & { 
    id: string; 
    date: string; 
    name: string;
} => {
    if (!data || typeof data !== 'object') return false;
    const obj = data as Record<string, unknown>;
    return (
        typeof obj.id === 'string' &&
        typeof obj.date === 'string' &&
        typeof obj.name === 'string'
    );
};

// localStorage에서 Milestones 로드
const loadMilestonesFromStorage = (): Milestone[] | null => {
    try {
        const stored = localStorage.getItem(STORAGE_KEYS.MILESTONES);
        if (!stored) return null;
        
        const parsed = JSON.parse(stored);
        if (!Array.isArray(parsed)) {
            console.error('Invalid milestones data format: expected array');
            return null;
        }
        
        return parsed
            .filter(isValidMilestoneData)
            .map((m) => ({
                ...m,
                date: parseISO(m.date),
            })) as Milestone[];
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
const parseMockData = (): AppState => {
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

// 초기 상태 로드 함수
const loadInitialState = (): AppState => {
    const storedTasks = loadTasksFromStorage();
    const storedMilestones = loadMilestonesFromStorage();
    
    if (storedTasks && storedTasks.length > 0) {
        console.log('Loaded from localStorage');
        return {
            tasks: storedTasks,
            milestones: storedMilestones || [],
        };
    }
    
    console.log('Loaded from mock.json (first time)');
    const mockState = parseMockData();
    
    // mock 데이터를 localStorage에 저장
    saveTasksToStorage(mockState.tasks);
    saveMilestonesToStorage(mockState.milestones);
    
    return mockState;
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
    workOnSaturdays: true,   // 토요일은 작업일로 허용
    workOnSundays: false,    // 일요일은 휴일 유지
    workOnHolidays: false,
};

function App() {
    // ====================================
    // Undo/Redo 히스토리 관리
    // ====================================
    const {
        present: appState,
        set: setAppState,
        undo,
        redo,
        canUndo,
        canRedo,
        reset: resetHistory,
        historyLength,
    } = useHistory<AppState>({ tasks: [], milestones: [] });

    const { tasks, milestones } = appState;
    
    const [isLoaded, setIsLoaded] = useState(false);
    
    // 변경사항 감지
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
    const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved'>('idle');
    
    // 초기 로드 여부 추적
    const isInitialLoad = useRef(true);

    // 초기 데이터 로드
    useEffect(() => {
        const initialState = loadInitialState();
        setAppState(initialState);
        setIsLoaded(true);
        
        // 초기 로드 완료 후 플래그 해제
        setTimeout(() => {
            isInitialLoad.current = false;
        }, 100);
    }, [setAppState]);

    // ====================================
    // 키보드 단축키 (Undo/Redo)
    // ====================================
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // input, textarea 등에서는 무시
            const target = e.target as HTMLElement;
            if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
                return;
            }

            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'z') {
                e.preventDefault();
                if (e.shiftKey) {
                    // Cmd/Ctrl + Shift + Z → Redo
                    if (canRedo) {
                        redo();
                        console.log('Redo executed');
                    }
                } else {
                    // Cmd/Ctrl + Z → Undo
                    if (canUndo) {
                        undo();
                        console.log('Undo executed');
                    }
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [undo, redo, canUndo, canRedo]);

    // ====================================
    // 변경사항 감지 (tasks 또는 milestones 변경 시)
    // ====================================
    useEffect(() => {
        // 초기 로드 시에는 변경사항으로 표시하지 않음
        if (isInitialLoad.current || !isLoaded) return;
        
        setHasUnsavedChanges(true);
        setSaveStatus('idle');
    }, [tasks, milestones, isLoaded]);

    // ====================================
    // 수동 저장 핸들러
    // ====================================
    const handleSave = useCallback(() => {
        if (!hasUnsavedChanges) return;
        
        setSaveStatus('saving');
        
        try {
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
        } catch (error) {
            console.error('Failed to save data:', error);
            setSaveStatus('idle');
            alert('저장 중 오류가 발생했습니다. 다시 시도해주세요.');
        }
    }, [tasks, milestones, hasUnsavedChanges]);

    // 초기화 핸들러 (mock.json으로 리셋)
    const handleReset = useCallback(() => {
        if (!confirm('모든 변경사항을 취소하고 초기 데이터로 되돌리시겠습니까?')) return;
        
        try {
            resetStorageToMock();
            
            // mock.json에서 다시 로드
            const mockState = parseMockData();
            
            // 히스토리 초기화와 함께 상태 리셋
            resetHistory(mockState);
            
            // localStorage에 저장
            saveTasksToStorage(mockState.tasks);
            saveMilestonesToStorage(mockState.milestones);
            
            setHasUnsavedChanges(false);
            setSaveStatus('idle');
            
            console.log('Reset to mock data');
        } catch (error) {
            console.error('Failed to reset data:', error);
            alert('초기화 중 오류가 발생했습니다. 페이지를 새로고침해주세요.');
        }
    }, [resetHistory]);

    // ====================================
    // 헬퍼: Level 1 태스크 cp 재계산
    // ====================================
    const recalculateCPData = useCallback((taskList: ConstructionTask[]): ConstructionTask[] => {
        const cpMap = new Map<string, {
            work: number;
            nonWork: number;
            minStart: Date;
            maxEnd: Date;
        }>();

        taskList.forEach(t => {
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

        return taskList.map(t => {
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
    }, []);

    // ====================================
    // 태스크 업데이트 핸들러
    // ====================================
    const handleTaskUpdate = useCallback(async (updatedTask: ConstructionTask) => {
        try {
            setAppState(prev => {
                // 1. 해당 태스크 업데이트
                let newTasks = prev.tasks.map(t =>
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
                newTasks = recalculateCPData(newTasks);

                console.log('Task updated:', updatedTask);
                return { ...prev, tasks: newTasks };
            });
        } catch (error) {
            console.error('Failed to update task:', error);
            alert('태스크 업데이트 중 오류가 발생했습니다.');
        }
    }, [setAppState, recalculateCPData]);

    // 새 태스크 생성 핸들러
    const handleTaskCreate = useCallback(async (newTask: Partial<ConstructionTask>) => {
        try {
            setAppState(prev => {
                // 새 태스크 추가
                const taskToAdd: ConstructionTask = {
                    id: newTask.id || `task-${Date.now()}`,
                    parentId: newTask.parentId ?? null,
                    wbsLevel: newTask.wbsLevel || 2,
                    type: newTask.type || 'TASK',
                    name: newTask.name || '새 공정',
                    startDate: newTask.startDate || new Date(),
                    endDate: newTask.endDate || new Date(),
                    cp: newTask.cp,
                    task: newTask.task,
                    dependencies: newTask.dependencies || [],
                };

                let newTasks = [...prev.tasks, taskToAdd];

                // Level 2 태스크의 날짜 재계산
                newTasks = newTasks.map(t => {
                    if (t.wbsLevel === 2 && t.task) {
                        const dates = calculateDualCalendarDates(t, HOLIDAYS, CALENDAR_SETTINGS);
                        return { ...t, startDate: dates.startDate, endDate: dates.endDate };
                    }
                    return t;
                });

                // Level 1 태스크의 cp 재계산
                newTasks = recalculateCPData(newTasks);

                console.log('Task created:', taskToAdd);
                return { ...prev, tasks: newTasks };
            });
        } catch (error) {
            console.error('Failed to create task:', error);
            alert('태스크 생성 중 오류가 발생했습니다.');
        }
    }, [setAppState, recalculateCPData]);

    // 태스크 순서 변경 핸들러
    const handleTaskReorder = useCallback(async (taskId: string, newIndex: number) => {
        try {
            setAppState(prev => {
                const taskIndex = prev.tasks.findIndex(t => t.id === taskId);
                if (taskIndex === -1) return prev;
                
                const task = prev.tasks[taskIndex];
                const newTasks = [...prev.tasks];
                
                // 기존 위치에서 제거
                newTasks.splice(taskIndex, 1);
                
                // 새 위치에 삽입 (제거 후 인덱스 조정)
                const adjustedIndex = taskIndex < newIndex ? newIndex - 1 : newIndex;
                newTasks.splice(adjustedIndex, 0, task);
                
                console.log('Task reordered:', taskId, 'to index:', adjustedIndex);
                return { ...prev, tasks: newTasks };
            });
        } catch (error) {
            console.error('Failed to reorder task:', error);
            alert('태스크 순서 변경 중 오류가 발생했습니다.');
        }
    }, [setAppState]);

    // 그룹화 핸들러 (선택된 태스크들을 새 GROUP으로 묶기)
    const handleTaskGroup = useCallback(async (taskIds: string[]) => {
        try {
            setAppState(prev => {
                // 선택된 태스크들 찾기
                const selectedTasks = prev.tasks.filter(t => taskIds.includes(t.id));
                // 1개 이상 선택 시 그룹화 가능
                if (selectedTasks.length < 1) return prev;

                // 선택된 태스크들이 같은 부모를 가지는지 확인
                const parentIds = new Set(selectedTasks.map(t => t.parentId));
                const commonParentId = parentIds.size === 1 ? Array.from(parentIds)[0] : null;

                // 기존 그룹 수 계산 (새 그룹 이름용)
                const existingGroupCount = prev.tasks.filter(t => t.type === 'GROUP').length;

                // 새 GROUP 생성
                const newGroupId = `group-${Date.now()}`;
                const minStart = selectedTasks.reduce((min, t) => t.startDate < min ? t.startDate : min, selectedTasks[0].startDate);
                const maxEnd = selectedTasks.reduce((max, t) => t.endDate > max ? t.endDate : max, selectedTasks[0].endDate);

                const newGroup: ConstructionTask = {
                    id: newGroupId,
                    parentId: commonParentId,
                    wbsLevel: selectedTasks[0].wbsLevel,
                    type: 'GROUP',
                    name: `새 그룹 ${existingGroupCount + 1}`,
                    startDate: minStart,
                    endDate: maxEnd,
                    dependencies: [],
                };

                // 선택된 태스크들의 parentId를 새 GROUP으로 변경
                let newTasks = prev.tasks.map(t => {
                    if (taskIds.includes(t.id)) {
                        return { ...t, parentId: newGroupId };
                    }
                    return t;
                });

                // 첫 번째 선택된 태스크 위치에 GROUP 삽입
                const firstSelectedIndex = newTasks.findIndex(t => taskIds.includes(t.id));
                newTasks.splice(firstSelectedIndex, 0, newGroup);

                console.log('Tasks grouped:', taskIds, 'into group:', newGroupId);
                return { ...prev, tasks: newTasks };
            });
        } catch (error) {
            console.error('Failed to group tasks:', error);
            alert('태스크 그룹화 중 오류가 발생했습니다.');
        }
    }, [setAppState]);

    // 그룹 해제 핸들러 (GROUP을 해체하고 자식들을 상위로 이동)
    const handleTaskUngroup = useCallback(async (groupId: string) => {
        try {
            setAppState(prev => {
                const group = prev.tasks.find(t => t.id === groupId);
                if (!group || group.type !== 'GROUP') return prev;

                // 그룹의 자식들 찾기
                const children = prev.tasks.filter(t => t.parentId === groupId);
                if (children.length === 0) {
                    // 자식이 없으면 그룹만 삭제
                    return { ...prev, tasks: prev.tasks.filter(t => t.id !== groupId) };
                }

                // 자식들의 parentId를 그룹의 parentId로 변경
                let newTasks = prev.tasks.map(t => {
                    if (t.parentId === groupId) {
                        return { ...t, parentId: group.parentId };
                    }
                    return t;
                });

                // GROUP 삭제
                newTasks = newTasks.filter(t => t.id !== groupId);

                console.log('Group ungrouped:', groupId);
                return { ...prev, tasks: newTasks };
            });
        } catch (error) {
            console.error('Failed to ungroup tasks:', error);
            alert('태스크 그룹 해제 중 오류가 발생했습니다.');
        }
    }, [setAppState]);

    // 태스크 이동 핸들러 (드래그 앤 드롭으로 그룹 간 이동)
    const handleTaskMove = useCallback(async (taskId: string, targetId: string, position: DropPosition) => {
        try {
            setAppState(prev => {
                const taskToMove = prev.tasks.find(t => t.id === taskId);
                const targetTask = prev.tasks.find(t => t.id === targetId);
                
                if (!taskToMove || !targetTask) return prev;
                
                // 자기 자신을 자기 안에 넣으려는 경우 방지
                if (taskId === targetId) return prev;
                
                // 부모를 자식 안에 넣으려는 경우 방지 (순환 참조 방지)
                const isDescendant = (parentId: string | null, childId: string): boolean => {
                    let current = prev.tasks.find(t => t.id === childId);
                    while (current?.parentId) {
                        if (current.parentId === parentId) return true;
                        current = prev.tasks.find(t => t.id === current!.parentId);
                    }
                    return false;
                };
                
                if (position === 'into' && isDescendant(taskId, targetId)) {
                    console.warn('Cannot move parent into its own descendant');
                    return prev;
                }
                
                let newTasks = [...prev.tasks];
                
                // 기존 위치에서 제거
                const taskIndex = newTasks.findIndex(t => t.id === taskId);
                newTasks.splice(taskIndex, 1);
                
                if (position === 'into') {
                    // 그룹 안으로 이동: parentId를 target으로 변경
                    const updatedTask = { ...taskToMove, parentId: targetId };
                    
                    // target 바로 뒤에 삽입 (그룹의 첫 번째 자식으로)
                    const targetIndex = newTasks.findIndex(t => t.id === targetId);
                    newTasks.splice(targetIndex + 1, 0, updatedTask);
                } else {
                    // before/after: target의 parentId를 상속
                    const updatedTask = { ...taskToMove, parentId: targetTask.parentId };
                    
                    // target 위치 찾기 (제거 후 인덱스)
                    const targetIndex = newTasks.findIndex(t => t.id === targetId);
                    const insertIndex = position === 'after' ? targetIndex + 1 : targetIndex;
                    
                    newTasks.splice(insertIndex, 0, updatedTask);
                }
                
                console.log('Task moved:', taskId, 'to', targetId, 'position:', position);
                return { ...prev, tasks: newTasks };
            });
        } catch (error) {
            console.error('Failed to move task:', error);
            alert('태스크 이동 중 오류가 발생했습니다.');
        }
    }, [setAppState]);

    // 태스크 삭제 핸들러
    const handleTaskDelete = useCallback(async (taskId: string) => {
        try {
            setAppState(prev => {
                // 삭제할 태스크 찾기
                const taskToDelete = prev.tasks.find(t => t.id === taskId);
                if (!taskToDelete) return prev;

                // 재귀적으로 자식 태스크들 수집
                const collectChildIds = (parentId: string): string[] => {
                    const children = prev.tasks.filter(t => t.parentId === parentId);
                    const childIds = children.map(c => c.id);
                    const grandChildIds = children.flatMap(c => collectChildIds(c.id));
                    return [...childIds, ...grandChildIds];
                };

                // 삭제할 모든 ID (자신 + 자식들)
                const allIdsToDelete = [taskId, ...collectChildIds(taskId)];

                // 삭제 실행
                let newTasks = prev.tasks.filter(t => !allIdsToDelete.includes(t.id));

                // Level 1 태스크의 cp 재계산
                newTasks = recalculateCPData(newTasks);

                console.log('Task deleted:', taskId, '(total deleted:', allIdsToDelete.length, ')');
                return { ...prev, tasks: newTasks };
            });
        } catch (error) {
            console.error('Failed to delete task:', error);
            alert('태스크 삭제 중 오류가 발생했습니다.');
        }
    }, [setAppState, recalculateCPData]);

    // 뷰 전환 핸들러
    const handleViewChange = useCallback((view: 'MASTER' | 'DETAIL', activeCPId?: string) => {
        console.log('View changed:', view, activeCPId);
    }, []);

    // ====================================
    // 마일스톤 핸들러
    // ====================================
    const handleMilestoneCreate = useCallback(async (newMilestone: Partial<Milestone>) => {
        try {
            const milestoneToAdd: Milestone = {
                id: newMilestone.id || `milestone-${Date.now()}`,
                name: newMilestone.name || '새 마일스톤',
                date: newMilestone.date || new Date(),
                description: newMilestone.description,
            };

            setAppState(prev => {
                console.log('Milestone created:', milestoneToAdd);
                return { ...prev, milestones: [...prev.milestones, milestoneToAdd] };
            });
        } catch (error) {
            console.error('Failed to create milestone:', error);
            alert('마일스톤 생성 중 오류가 발생했습니다.');
        }
    }, [setAppState]);

    const handleMilestoneUpdate = useCallback(async (updatedMilestone: Milestone) => {
        try {
            setAppState(prev => {
                const newMilestones = prev.milestones.map(m =>
                    m.id === updatedMilestone.id ? updatedMilestone : m
                );
                console.log('Milestone updated:', updatedMilestone);
                return { ...prev, milestones: newMilestones };
            });
        } catch (error) {
            console.error('Failed to update milestone:', error);
            alert('마일스톤 업데이트 중 오류가 발생했습니다.');
        }
    }, [setAppState]);

    const handleMilestoneDelete = useCallback(async (milestoneId: string) => {
        try {
            setAppState(prev => {
                const newMilestones = prev.milestones.filter(m => m.id !== milestoneId);
                console.log('Milestone deleted:', milestoneId);
                return { ...prev, milestones: newMilestones };
            });
        } catch (error) {
            console.error('Failed to delete milestone:', error);
            alert('마일스톤 삭제 중 오류가 발생했습니다.');
        }
    }, [setAppState]);

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
                    <h1 className="flex items-center gap-2 text-lg font-extrabold text-gray-800">
                        <span>
                            <span className="text-teal">건설</span>{' '}
                            <span className="text-vermilion">표준공정표</span> 관리 시스템
                        </span>
                    </h1>
                    
                    {/* Undo/Redo 버튼 */}
                    <div className="flex items-center gap-1 border-l border-gray-200 pl-3">
                        <button
                            onClick={undo}
                            disabled={!canUndo}
                            className={`flex items-center gap-1 rounded px-2 py-1 text-xs font-medium transition-colors ${
                                canUndo
                                    ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    : 'cursor-not-allowed bg-gray-50 text-gray-300'
                            }`}
                            title="실행 취소 (Ctrl+Z / Cmd+Z)"
                        >
                            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                            </svg>
                            <span className="hidden sm:inline">실행취소</span>
                            {historyLength.past > 0 && (
                                <span className="ml-0.5 text-[10px] text-gray-400">({historyLength.past})</span>
                            )}
                        </button>
                        <button
                            onClick={redo}
                            disabled={!canRedo}
                            className={`flex items-center gap-1 rounded px-2 py-1 text-xs font-medium transition-colors ${
                                canRedo
                                    ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    : 'cursor-not-allowed bg-gray-50 text-gray-300'
                            }`}
                            title="다시 실행 (Ctrl+Shift+Z / Cmd+Shift+Z)"
                        >
                            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 10h-10a8 8 0 00-8 8v2M21 10l-6 6m6-6l-6-6" />
                            </svg>
                            <span className="hidden sm:inline">다시실행</span>
                            {historyLength.future > 0 && (
                                <span className="ml-0.5 text-[10px] text-gray-400">({historyLength.future})</span>
                            )}
                        </button>
                    </div>
                    
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
                    onTaskDelete={handleTaskDelete}
                    onTaskReorder={handleTaskReorder}
                    onTaskGroup={handleTaskGroup}
                    onTaskUngroup={handleTaskUngroup}
                    onTaskMove={handleTaskMove}
                    onViewChange={handleViewChange}
                    onMilestoneCreate={handleMilestoneCreate}
                    onMilestoneUpdate={handleMilestoneUpdate}
                    onMilestoneDelete={handleMilestoneDelete}
                    onSave={handleSave}
                    onReset={handleReset}
                    hasUnsavedChanges={hasUnsavedChanges}
                    saveStatus={saveStatus}
                />
            </div>
        </div>
    );
}

export default App;
