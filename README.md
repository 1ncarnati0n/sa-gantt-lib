# SA-Gantt-Lib

<div align="center">

**건설 공정표 전문 간트 차트 라이브러리**

[![Version](https://img.shields.io/badge/version-0.1.0--beta-blue.svg)](https://github.com/your-repo/sa-gantt-lib)
[![React](https://img.shields.io/badge/React-18%2F19-61dafb.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

</div>

---

## ✨ 주요 기능

- **2단계 뷰 시스템**
  - Level 1 (Master View): 공구공정표 - Critical Path 단위 전체 일정 관리
  - Level 2 (Detail View): 주공정표 - 개별 작업 단위 상세 일정 관리

- **건설 도메인 특화 날짜 계산**
  - 순작업일 (Net Work): 휴일 제외 실제 작업일
  - 간접작업일 (Indirect Work): 휴일 포함, 선/후 분리
  - 작업일/비작업일 자동 집계

- **고성능 렌더링**
  - @tanstack/react-virtual 기반 가상화
  - 대용량 데이터 처리 최적화

- **풍부한 인터렉션**
  - 드래그 앤 드롭 (바 이동, 리사이즈)
  - 줌 레벨 (일/주/월)
  - 마일스톤 관리
  - Undo/Redo 지원

---

## 🛠️ 기술 스택

| 분류 | 기술 |
|------|-----|
| Core | React 18/19, TypeScript 5 |
| Build | Vite 5, vite-plugin-dts |
| Styling | TailwindCSS 4, PostCSS |
| State | Zustand 5 |
| Virtualization | @tanstack/react-virtual |
| Date | date-fns |
| Chart | D3.js |
| Icons | lucide-react |

---

## 📦 설치

```bash
npm install sa-gantt-lib
# or
yarn add sa-gantt-lib
# or
pnpm add sa-gantt-lib
```

---

## 🚀 빠른 시작

```tsx
import { GanttChart, ConstructionTask, Milestone } from 'sa-gantt-lib';
import 'sa-gantt-lib/style.css';

const tasks: ConstructionTask[] = [
  {
    id: 'cp-1',
    parentId: null,
    wbsLevel: 1,
    type: 'CP',
    name: '지하골조공사',
    startDate: new Date('2024-01-01'),
    endDate: new Date('2024-03-31'),
    cp: { workDaysTotal: 60, nonWorkDaysTotal: 31 },
    dependencies: [],
  },
  // ... more tasks
];

const milestones: Milestone[] = [
  { id: 'm-1', date: new Date('2024-01-01'), name: '착공' },
  { id: 'm-2', date: new Date('2024-12-31'), name: '준공' },
];

function App() {
  const handleTaskUpdate = (task: ConstructionTask) => {
    console.log('Task updated:', task);
  };

  return (
    <GanttChart
      tasks={tasks}
      milestones={milestones}
      onTaskUpdate={handleTaskUpdate}
      initialView="MASTER"
      initialZoomLevel="WEEK"
    />
  );
}
```

---

## 📖 API 참조

### GanttChart Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `tasks` | `ConstructionTask[]` | ✅ | 작업 목록 |
| `milestones` | `Milestone[]` | - | 마일스톤 목록 |
| `holidays` | `Date[]` | - | 휴일 목록 |
| `calendarSettings` | `CalendarSettings` | - | 캘린더 설정 |
| `initialView` | `'MASTER' \| 'DETAIL'` | - | 초기 뷰 모드 |
| `initialZoomLevel` | `'DAY' \| 'WEEK' \| 'MONTH'` | - | 초기 줌 레벨 |
| `onTaskUpdate` | `(task) => void` | - | 작업 수정 콜백 |
| `onTaskCreate` | `(task) => void` | - | 작업 생성 콜백 |
| `onTaskDelete` | `(taskId) => void` | - | 작업 삭제 콜백 |
| `onMilestoneUpdate` | `(milestone) => void` | - | 마일스톤 수정 콜백 |

### 핵심 타입

```typescript
// 작업 데이터
interface ConstructionTask {
  id: string;
  parentId: string | null;
  wbsLevel: 1 | 2;
  type: 'GROUP' | 'CP' | 'TASK';
  name: string;
  startDate: Date;
  endDate: Date;
  cp?: CPData;       // Level 1 전용
  task?: TaskData;   // Level 2 전용
  dependencies: Dependency[];
}

// Level 1 데이터 (공구공정표)
interface CPData {
  workDaysTotal: number;      // 작업일수
  nonWorkDaysTotal: number;   // 비작업일수
}

// Level 2 데이터 (주공정표)
interface TaskData {
  netWorkDays: number;           // 순작업일
  indirectWorkDaysPre: number;   // 선간접작업일
  indirectWorkDaysPost: number;  // 후간접작업일
}

// 마일스톤
interface Milestone {
  id: string;
  date: Date;
  name: string;
  description?: string;
}
```

### Exports

```typescript
// 컴포넌트
export { GanttChart, GanttSidebar, GanttTimeline, TaskEditModal };

// 스토어 훅
export { useGanttStore, useGanttViewState, useGanttSelection };

// 유틸리티
export { dateToX, xToDate, addWorkingDays, calculateCriticalPath };

// 타입
export type { ConstructionTask, Milestone, Dependency, CPData, TaskData };

// 상수
export { GANTT_COLORS, GANTT_LAYOUT, ZOOM_CONFIG };
```

---

## 📁 프로젝트 구조

```
sa-gantt-lib/
├── src/
│   ├── lib/                    # 라이브러리 코드
│   │   ├── components/         # React 컴포넌트
│   │   │   ├── GanttChart.tsx        # 메인 컴포넌트
│   │   │   ├── GanttSidebar.tsx      # 사이드바
│   │   │   ├── GanttTimeline.tsx     # 타임라인
│   │   │   ├── CriticalPathBar.tsx   # CP 바
│   │   │   ├── TaskEditModal.tsx     # 작업 편집 모달
│   │   │   └── MilestoneEditModal.tsx
│   │   ├── hooks/              # 커스텀 훅
│   │   │   ├── useGanttVirtualization.ts
│   │   │   ├── useHistory.ts
│   │   │   └── useColumnResizer.ts
│   │   ├── store/              # Zustand 스토어
│   │   ├── utils/              # 유틸리티 함수
│   │   │   ├── dateUtils.ts          # 날짜 계산
│   │   │   ├── criticalPathUtils.ts  # CP 계산
│   │   │   └── typeGuards.ts
│   │   ├── context/            # React Context
│   │   ├── types.ts            # 타입 정의
│   │   └── index.ts            # 라이브러리 진입점
│   ├── App.tsx                 # 데모 앱
│   └── data/                   # Mock 데이터
├── docs/                       # 문서 및 레퍼런스
└── dist/                       # 빌드 출력
```

---

## 🧑‍💻 개발

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 라이브러리 빌드
npm run build

# 테스트 실행
npm run test

# 타입 체크
tsc --noEmit
```

---

## 🗺️ 로드맵

### v0.1.0-beta (현재)
- [x] 기본 간트 차트 렌더링
- [x] 2단계 뷰 시스템 (Master/Detail)
- [x] 드래그 앤 드롭
- [x] 마일스톤 관리
- [x] Undo/Redo

### v0.2.0 (예정)
- [ ] 종속성 라인 시각화
- [ ] 작업 자동 스케줄링
- [ ] PDF/이미지 내보내기

### v1.0.0 (목표)
- [ ] 멀티 프로젝트 지원
- [ ] 리소스 관리
- [ ] 실시간 협업

---

## 📄 라이선스

MIT License © 2024

---

<div align="center">
  <sub>Built with ❤️ for Construction Project Management</sub>
</div>
