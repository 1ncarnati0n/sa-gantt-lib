import React, { useCallback, useMemo } from 'react';
import { create } from 'zustand';
import { format, addDays, getDay, isWeekend, parseISO, Date as DateFns } from 'date-fns';

// --- 1. 타입 정의 및 상수 ---

// 색상 상수
const Vermilion = '#E34234'; // 작업일수 (순작업)
const Teal = '#008080';      // 비작업일수 (간접/대기)
const PIXELS_PER_DAY = 30; // 1일당 픽셀 너비

// 공정 캘린더 규칙 타입
type CalendarRule = 'WORKING_DAY_ONLY' | 'INCLUDE_HOLIDAYS';
type Placement = 'PRE' | 'POST';

// 의존성 타입
interface Dependency {
    predecessorId: string;
    type: 'FS' | 'SS' | 'FF' | 'SF';
    lag: number;
}

// 공정(Task) 데이터 타입
interface ConstructionTask {
    id: string;
    parentId: string | null;
    type: 'MILESTONE' | 'SUMMARY' | 'TASK';
    name: string;

    // 기간 데이터 (Phase 1: 수동 입력 기반)
    workDays: number;
    nonWorkDays: number;
    nonWorkPlacement: Placement;

    // 캘린더 규칙
    workDayRule?: CalendarRule;
    nonWorkDayRule?: CalendarRule;

    // 스케줄링 결과 (DateFns는 date-fns의 Date 타입)
    startDate: DateFns;
    endDate?: DateFns;

    dependencies: Dependency[];
}

// 마일스톤 데이터 타입
interface Milestone {
    id: string;
    date: DateFns;
    name: string;
    type: 'MILESTONE';
}

// Zustand Store 상태 타입
interface ConstructionStore {
    tasks: ConstructionTask[];
    milestones: Milestone[];
    holidays: DateFns[];
    calculateDates: (task: ConstructionTask) => DateFns;
    updateTaskDuration: (id: string, newWorkDays: number, newNonWorkDays: number) => void;
    updateMilestone: (id: string, newDate: DateFns) => void;
}


// --- 2. 초기 데이터 (DateFns 타입 명시) ---

const initialTasks: ConstructionTask[] = [
    { id: 'g-1', parentId: null, type: 'SUMMARY', name: '가시설 및 터파기', workDays: 0, nonWorkDays: 0, nonWorkPlacement: 'POST', startDate: parseISO('2025-10-01'), dependencies: [] },
    { id: 't-1-1', parentId: 'g-1', type: 'TASK', name: '말뚝박기용 천공 (H-Pile)', workDays: 2, nonWorkDays: 3, nonWorkPlacement: 'PRE', startDate: parseISO('2025-10-01'), dependencies: [], workDayRule: 'WORKING_DAY_ONLY', nonWorkDayRule: 'INCLUDE_HOLIDAYS' },
    { id: 't-1-2', parentId: 'g-1', type: 'TASK', name: '토사 굴착 (터파기)', workDays: 15, nonWorkDays: 2, nonWorkPlacement: 'POST', startDate: parseISO('2025-10-06'), dependencies: [{ predecessorId: 't-1-1', type: 'FS', lag: 0 }], workDayRule: 'WORKING_DAY_ONLY', nonWorkDayRule: 'INCLUDE_HOLIDAYS' },
    { id: 't-1-3', parentId: 'g-1', type: 'TASK', name: '수평 지보공 설치', workDays: 7, nonWorkDays: 0, nonWorkPlacement: 'POST', startDate: parseISO('2025-10-10'), dependencies: [], workDayRule: 'WORKING_DAY_ONLY', nonWorkDayRule: 'INCLUDE_HOLIDAYS' },

    { id: 'g-2', parentId: null, type: 'SUMMARY', name: '기초 공사', workDays: 0, nonWorkDays: 0, nonWorkPlacement: 'POST', startDate: parseISO('2025-10-28'), dependencies: [{ predecessorId: 't-1-2', type: 'FS', lag: 0 }] },
    { id: 't-2-1', parentId: 'g-2', type: 'TASK', name: '기성말뚝 기초', workDays: 9, nonWorkDays: 5, nonWorkPlacement: 'POST', startDate: parseISO('2025-10-28'), dependencies: [], workDayRule: 'WORKING_DAY_ONLY', nonWorkDayRule: 'INCLUDE_HOLIDAYS' },
    { id: 't-2-2', parentId: 'g-2', type: 'TASK', name: '콘크리트 말뚝 두부 정리', workDays: 4, nonWorkDays: 1, nonWorkPlacement: 'POST', startDate: parseISO('2025-11-08'), dependencies: [{ predecessorId: 't-2-1', type: 'FS', lag: 0 }], workDayRule: 'WORKING_DAY_ONLY', nonWorkDayRule: 'INCLUDE_HOLIDAYS' },
];

const initialMilestones: Milestone[] = [
    { id: 'm-1', date: parseISO('2025-09-30'), name: '공사 착공', type: 'MILESTONE' },
    { id: 'm-2', date: parseISO('2025-11-20'), name: '기초 완료', type: 'MILESTONE' },
];

// --- 3. Zustand Store 구현 ---

const useConstructionStore = create<ConstructionStore>((set, get) => ({
    tasks: initialTasks,
    milestones: initialMilestones,
    holidays: [parseISO('2025-10-03'), parseISO('2025-10-09')], // 공휴일 예시

    // 날짜 계산 로직
    calculateDates: (task: ConstructionTask): DateFns => {
        const { startDate, workDays, nonWorkDays, nonWorkPlacement, workDayRule, nonWorkDayRule } = task;

        const getNextWorkDay = (currentDate: DateFns, daysToAdd: number, rule: CalendarRule = 'WORKING_DAY_ONLY'): DateFns => {
            let count = 0;
            let date = currentDate;
            while (count < daysToAdd) {
                date = addDays(date, 1);
                const dayOfWeek = getDay(date);
                const isHoliday = get().holidays.some(h => format(h, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd'));

                if (rule === 'WORKING_DAY_ONLY' && (dayOfWeek === 0 || dayOfWeek === 6 || isHoliday)) {
                    continue; // 주말/공휴일 Skip
                }
                count++;
            }
            return date;
        };

        const calculateSegment = (segmentStart: DateFns, duration: number, rule?: CalendarRule): DateFns =>
            getNextWorkDay(segmentStart, duration, rule || 'WORKING_DAY_ONLY');

        let finalStart = startDate;
        let finalEnd: DateFns;

        // 최종 종료일 계산
        if (nonWorkPlacement === 'PRE') {
            const nonWorkEnd = calculateSegment(finalStart, nonWorkDays, task.nonWorkDayRule);
            finalEnd = calculateSegment(nonWorkEnd, workDays, task.workDayRule);
        } else {
            const workEnd = calculateSegment(finalStart, workDays, task.workDayRule);
            finalEnd = calculateSegment(workEnd, nonWorkDays, task.nonWorkDayRule);
        }

        return finalEnd;
    },

    // Task 기간 업데이트 액션
    updateTaskDuration: (id: string, newWorkDays: number, newNonWorkDays: number) => {
        set(state => {
            const updatedTasks = state.tasks.map(task => {
                if (task.id === id && task.type === 'TASK') {
                    const updatedTask: ConstructionTask = {
                        ...task,
                        workDays: newWorkDays,
                        nonWorkDays: newNonWorkDays
                    };
                    // 날짜 재계산 및 업데이트
                    updatedTask.endDate = get().calculateDates(updatedTask);
                    return updatedTask;
                }
                return task;
            });
            // 종속성 업데이트 로직 (Phase 2)
            return { tasks: updatedTasks };
        });
    },

    // 마일스톤 업데이트 액션
    updateMilestone: (id: string, newDate: DateFns) => {
        set(state => ({
            milestones: state.milestones.map(m => m.id === id ? { ...m, date: newDate } : m)
        }));
    }
}));


// --- 4. 캘린더 및 좌표 계산 훅 ---

interface GanttScales {
    effectiveMinDate: DateFns;
    effectiveMaxDate: DateFns;
    totalDays: number;
    dateToX: (date: DateFns) => number;
}

const useGanttScales = (tasks: ConstructionTask[], milestones: Milestone[]): GanttScales => {
    const allDates = useMemo(() => [
        ...tasks.flatMap(t => [t.startDate, t.endDate].filter(Boolean) as DateFns[]),
        ...milestones.map(m => m.date)
    ], [tasks, milestones]);

    // 유효한 날짜가 없을 경우 초기값 반환
    if (allDates.length === 0) {
        const today = new Date();
        return {
            effectiveMinDate: today,
            effectiveMaxDate: addDays(today, 30),
            totalDays: 30,
            dateToX: () => 0
        };
    }

    const minDate = allDates.reduce((a, b) => (a.getTime() < b.getTime() ? a : b));
    const maxDate = allDates.reduce((a, b) => (a.getTime() > b.getTime() ? a : b));

    const effectiveMinDate = addDays(minDate, -5);
    const effectiveMaxDate = addDays(maxDate, 10);

    const totalTime = effectiveMaxDate.getTime() - effectiveMinDate.getTime();
    const totalDays = Math.ceil(totalTime / (1000 * 60 * 60 * 24));

    const dateToX = useCallback((date: DateFns): number => {
        const diffDays = Math.ceil((date.getTime() - effectiveMinDate.getTime()) / (1000 * 60 * 60 * 24));
        return diffDays * PIXELS_PER_DAY;
    }, [effectiveMinDate]);

    return { effectiveMinDate, effectiveMaxDate, totalDays, dateToX };
};


// --- 5. WBS (좌측 DOM Grid) 컴포넌트 ---

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
        : "bg-white text-gray-800 h-10 border-b border-gray-200 hover:bg-yellow-50";

    return (
        <div className={`flex items-center w-full min-w-[300px] text-sm ${rowClasses}`}>
            <div className={`w-1/2 px-2 truncate ${!task.parentId ? 'pl-2' : 'pl-6'}`}>
                {task.parentId ? '└ ' : ''} {task.name}
            </div>
            <div className="w-[100px] text-center">
                {isSummary ? '-' : (
                    <input
                        type="number"
                        name="workDays"
                        value={task.workDays}
                        onChange={handleDurationChange}
                        className="w-full text-center p-0.5 rounded border border-vermilion/50 bg-vermilion/5"
                        disabled={isSummary}
                    />
                )}
            </div>
            <div className="w-[100px] text-center">
                {isSummary ? '-' : (
                    <input
                        type="number"
                        name="nonWorkDays"
                        value={task.nonWorkDays}
                        onChange={handleDurationChange}
                        className="w-full text-center p-0.5 rounded border border-teal/50 bg-teal/5"
                        disabled={isSummary}
                    />
                )}
            </div>
            <div className="w-[100px] text-center font-semibold">
                {isSummary ? '-' : (task.workDays + task.nonWorkDays)}일
            </div>
            <div className="w-[120px] text-center text-xs">
                {format(task.startDate, 'yy-MM-dd')}
            </div>
        </div>
    );
};

const LeftGrid: React.FC<{ tasks: ConstructionTask[] }> = ({ tasks }) => {
    return (
        <div className="overflow-y-auto overflow-x-hidden min-w-[620px]">
            {/* Grid Header */}
            <div className="flex w-full min-w-[300px] text-xs font-semibold text-gray-500 bg-gray-50 border-b border-gray-300 h-8 sticky top-0 z-10">
                <div className="w-1/2 px-2 flex items-center">구분 | 단위 공정 (WBS)</div>
                <div className="w-[100px] flex items-center justify-center text-vermilion">작업일수 (Vermilion)</div>
                <div className="w-[100px] flex items-center justify-center text-teal">비작업일수 (Teal)</div>
                <div className="w-[100px] flex items-center justify-center">총 기간</div>
                <div className="w-[120px] flex items-center justify-center">시작일</div>
            </div>

            {/* Task Rows */}
            <div className="divide-y divide-gray-100">
                {tasks.map((task, index) => (
                    <TaskRow key={task.id} task={task} rowIndex={index} />
                ))}
            </div>
        </div>
    );
};


// --- 6. 간트 차트 (우측 SVG) 컴포넌트 ---

interface GanttBarProps {
    task: ConstructionTask;
    y: number;
    dateToX: (date: DateFns) => number;
}

const GanttBar: React.FC<GanttBarProps> = ({ task, y, dateToX }) => {
    const { workDays, nonWorkDays, nonWorkPlacement, startDate, type } = task;

    if (type !== 'TASK') return null;

    const totalDays = workDays + nonWorkDays;
    const barWidth = totalDays * PIXELS_PER_DAY;
    const x = dateToX(startDate);
    const height = 18;
    const radius = 3;

    // 세그먼트 너비 계산
    const workWidth = workDays * PIXELS_PER_DAY;
    const nonWorkWidth = nonWorkDays * PIXELS_PER_DAY;

    // x 좌표는 시작일(startDate) 기준으로 동일
    let workX: number, nonWorkX: number;

    if (nonWorkPlacement === 'PRE') {
        // PRE: Teal -> Vermilion
        nonWorkX = 0;
        workX = nonWorkWidth;
    } else {
        // POST: Vermilion -> Teal
        workX = 0;
        nonWorkX = workWidth;
    }

    return (
        <g transform={`translate(${x}, ${y})`} className="cursor-pointer group">
            {/* 비작업일수 (Teal) Rect */}
            <rect
                x={nonWorkX}
                y={0}
                width={nonWorkWidth}
                height={height}
                fill={Teal}
                rx={radius}
                ry={radius}
                className="transition-all duration-150"
            />
            {/* 작업일수 (Vermilion) Rect */}
            <rect
                x={workX}
                y={0}
                width={workWidth}
                height={height}
                fill={Vermilion}
                rx={radius}
                ry={radius}
                className="transition-all duration-150"
            />
            {/* 텍스트 라벨 */}
            <text x={barWidth + 5} y={height / 2 + 5} className="text-xs fill-gray-800 font-medium">
                {task.name}
            </text>

            {/* 툴팁 (작업일/비작업일 정보) */}
            <title>
                {task.name}
                {"\n"}시작: {format(startDate, 'yy-MM-dd')}
                {"\n"}작업일수 (Vermilion): {workDays}일
                {"\n"}비작업일수 (Teal): {nonWorkDays}일
            </title>
        </g>
    );
};

interface MilestoneMarkerProps {
    milestone: Milestone;
    y: number;
    dateToX: (date: DateFns) => number;
}

const MilestoneMarker: React.FC<MilestoneMarkerProps> = ({ milestone, y, dateToX }) => {
    const x = dateToX(milestone.date);
    const size = 10;
    const markerY = y + 10;

    return (
        <g transform={`translate(${x}, ${markerY})`} className="cursor-pointer group">
            {/* 다이아몬드 심볼 (◆) */}
            <rect
                x={-size / 2}
                y={-size / 2}
                width={size}
                height={size}
                fill="#333"
                transform="rotate(45)"
                className="transition-all duration-150 group-hover:scale-125"
            />
            {/* 수직선 */}
            <line x1="0" y1={size / 2} x2="0" y2={300} stroke="#333" strokeDasharray="3, 3" opacity="0.5" />

            {/* 툴팁 */}
            <title>
                {milestone.name}
                {"\n"}날짜: {format(milestone.date, 'yy-MM-dd')}
            </title>
        </g>
    );
};


interface TimelineHeaderProps {
    effectiveMinDate: DateFns;
    totalDays: number;
}

const TimelineHeader: React.FC<TimelineHeaderProps> = ({ effectiveMinDate, totalDays }) => {
    const headerDays = Array.from({ length: totalDays }, (_, i) => addDays(effectiveMinDate, i));

    return (
        <div className="flex bg-gray-50 border-b border-gray-300 h-8 sticky top-0 z-10 text-xs text-gray-600">
            {headerDays.map((date, index) => {
                const day = getDay(date); // 0: 일, 6: 토
                const isHoliday = isWeekend(date) || useConstructionStore.getState().holidays.some(h => format(h, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd'));
                const dayClasses = isHoliday ? 'bg-red-50/50 text-red-500' : 'text-gray-600';

                return (
                    <div
                        key={index}
                        className={`min-w-[${PIXELS_PER_DAY}px] h-full flex flex-col justify-center items-center font-medium ${dayClasses}`}
                        style={{ width: `${PIXELS_PER_DAY}px`, minWidth: `${PIXELS_PER_DAY}px` }}
                    >
                        <span className="text-[10px]">{format(date, 'MM/dd')}</span>
                        <span className="text-[9px] font-bold">
                            {['일', '월', '화', '수', '목', '금', '토'][day]}
                        </span>
                    </div>
                );
            })}
        </div>
    );
};

interface GanttChartProps {
    tasks: ConstructionTask[];
    milestones: Milestone[];
    dateToX: (date: DateFns) => number;
    totalDays: number;
    effectiveMinDate: DateFns;
}

const GanttChart: React.FC<GanttChartProps> = ({ tasks, milestones, dateToX, totalDays, effectiveMinDate }) => {
    const chartHeight = tasks.length * 40 + 50;

    return (
        <div className="flex-grow overflow-x-auto relative">
            {/* Timeline Header (Sticky) */}
            <TimelineHeader effectiveMinDate={effectiveMinDate} totalDays={totalDays} />

            {/* SVG Chart Area */}
            <svg width={totalDays * PIXELS_PER_DAY} height={chartHeight} className="bg-white">
                {/* 1. Weekend/Holiday Background Grid */}
                <WeekendGrid effectiveMinDate={effectiveMinDate} totalDays={totalDays} chartHeight={chartHeight} dateToX={dateToX} />

                {/* 2. Horizontal Row Lines */}
                {tasks.map((_, index) => (
                    <line key={`line-${index}`} x1="0" y1={40 + index * 40} x2={totalDays * PIXELS_PER_DAY} y2={40 + index * 40} stroke="#eee" strokeWidth="1" />
                ))}

                {/* 3. Task Bars */}
                {tasks.map((task, index) => {
                    const y = 40 + index * 40; // Task Row Y position
                    return <GanttBar key={task.id} task={task} y={y} dateToX={dateToX} />;
                })}

                {/* 4. Milestones */}
                {milestones.map((m, index) => {
                    const y = 0; // 마일스톤은 상단에 배치
                    return <MilestoneMarker key={m.id} milestone={m} y={y} dateToX={dateToX} />;
                })}

                {/* 5. Dependencies (Line/Path) - Phase 2에서 구현 */}
            </svg>
        </div>
    );
};

interface WeekendGridProps {
    effectiveMinDate: DateFns;
    totalDays: number;
    chartHeight: number;
    dateToX: (date: DateFns) => number;
}

const WeekendGrid: React.FC<WeekendGridProps> = ({ effectiveMinDate, totalDays, chartHeight, dateToX }) => {
    const holidayRects = useMemo(() => {
        const rects: JSX.Element[] = []; // rects 배열 타입 명시
        const holidays = useConstructionStore.getState().holidays;

        for (let i = 0; i < totalDays; i++) {
            const date = addDays(effectiveMinDate, i);
            const isWeekendOrHoliday = isWeekend(date) || holidays.some(h => format(h, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd'));

            if (isWeekendOrHoliday) {
                const x = dateToX(date);
                rects.push(
                    <rect
                        key={`holiday-${i}`}
                        x={x}
                        y="0"
                        width={PIXELS_PER_DAY}
                        height={chartHeight}
                        fill="#f7f7f7"
                    />
                );
            }
        }
        return rects;
    }, [effectiveMinDate, totalDays, chartHeight, dateToX]);

    return <g>{holidayRects}</g>;
};


// --- 7. 메인 앱 컴포넌트 ---

const App: React.FC = () => {
    const tasks = useConstructionStore(state => state.tasks);
    const milestones = useConstructionStore(state => state.milestones);

    // 데이터 계산 (D3 Scale 개념)
    const { effectiveMinDate, totalDays, dateToX } = useGanttScales(tasks, milestones);

    return (
        <div className="h-full w-full flex flex-col bg-gray-50 rounded-lg shadow-xl overflow-hidden">
            {/* Title Bar */}
            <header className="p-4 bg-white border-b border-gray-200 shadow-sm flex justify-between items-center">
                <h1 className="text-xl font-extrabold text-gray-800">
                    <span className='text-teal'>건설</span> <span className='text-vermilion'>표준공정표</span> 관리 시스템
                </h1>
                <div className="text-sm text-gray-500">
                    기준일: {format(new Date(), 'yyyy-MM-dd')}
                </div>
            </header>

            {/* Main Content: Split View */}
            <div className="flex flex-1 overflow-hidden">
                {/* Left Panel: WBS Grid (DOM) */}
                <div className="w-[620px] flex-shrink-0 border-r border-gray-200 bg-white">
                    <LeftGrid tasks={tasks} />
                </div>

                {/* Right Panel: Gantt Chart (SVG) */}
                <div className="flex-1">
                    <GanttChart
                        tasks={tasks}
                        milestones={milestones}
                        dateToX={dateToX}
                        totalDays={totalDays}
                        effectiveMinDate={effectiveMinDate}
                    />
                </div>
            </div>

            <style>{`
                /* Vermilion and Teal Custom Colors */
                .text-vermilion { color: ${Vermilion}; }
                .border-vermilion\\/50 { border-color: ${Vermilion}80; }
                .bg-vermilion\\/5 { background-color: ${Vermilion}0D; }
                .text-teal { color: ${Teal}; }
                .border-teal\\/50 { border-color: ${Teal}80; }
                .bg-teal\\/5 { background-color: ${Teal}0D; }

                /* Hide standard number input arrows */
                input[type=number]::-webkit-inner-spin-button, 
                input[type=number]::-webkit-outer-spin-button { 
                  -webkit-appearance: none; 
                  margin: 0; 
                }
                input[type=number] {
                  -moz-appearance: textfield;
                }
            `}</style>
        </div>
    );
};

export default App;