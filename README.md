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

- **앵커 기반 종속성 시스템** 🆕
  - 태스크 바 내 Day 단위 앵커 포인트
  - 드래그로 종속성 연결/삭제
  - 연결된 태스크 그룹 동시 이동
  - 실시간 시각적 피드백 (드래그 중 연결 강조)

- **고성능 렌더링**
  - @tanstack/react-virtual 기반 가상화
  - 대용량 데이터 처리 최적화

- **풍부한 인터렉션**
  - 드래그 앤 드롭 (바 이동, 리사이즈)
  - 줌 레벨 (일/주/월)
  - 마일스톤 관리
  - Undo/Redo 지원

- **데이터 서비스 추상화** 🆕
  - `DataService` 인터페이스로 저장소 분리
  - `LocalStorageService` 기본 구현
  - Supabase 등 외부 DB 전환 용이

---

## 🛠️ 기술 스택

### Core Framework

| 기술 | 버전 | 용도 |
|------|------|------|
| React | ^18.0.0 \|\| ^19.0.0 | UI 컴포넌트 라이브러리 (peerDependency) |
| TypeScript | ^5.0.0 | 정적 타입 시스템 |

### Build & Bundle

| 기술 | 버전 | 용도 |
|------|------|------|
| Vite | ^5.2.0 | 빌드 도구 및 개발 서버 |
| vite-plugin-dts | ^3.9.1 | TypeScript 선언 파일(.d.ts) 자동 생성 |
| PostCSS | ^8.4.38 | CSS 후처리기 |
| Autoprefixer | ^10.4.19 | 벤더 프리픽스 자동 추가 |

### Styling

| 기술 | 버전 | 용도 |
|------|------|------|
| TailwindCSS | ^4.0.0 | 유틸리티 기반 CSS 프레임워크 |
| @tailwindcss/postcss | ^4.1.17 | Tailwind PostCSS 통합 |
| clsx | ^2.1.1 | 조건부 className 결합 |
| tailwind-merge | ^3.4.0 | Tailwind 클래스 충돌 해결 |

### State Management

| 기술 | 버전 | 용도 |
|------|------|------|
| Zustand | ^5.0.8 | 경량 상태 관리 라이브러리 |

### UI & Visualization

| 기술 | 버전 | 용도 |
|------|------|------|
| D3.js | ^7.9.0 | 데이터 시각화 및 SVG 조작 |
| @tanstack/react-virtual | ^3.13.12 | 가상화 스크롤 (대용량 데이터 최적화) |
| lucide-react | ^0.554.0 | 아이콘 라이브러리 |

### Date & Time

| 기술 | 버전 | 용도 |
|------|------|------|
| date-fns | ^4.1.0 | 날짜 계산 및 포맷팅 |

### Testing

| 기술 | 버전 | 용도 |
|------|------|------|
| Vitest | ^1.6.1 | 단위 테스트 프레임워크 |
| @vitest/coverage-v8 | ^1.6.1 | 코드 커버리지 리포트 |
| @testing-library/react | ^16.3.0 | React 컴포넌트 테스트 유틸리티 |
| @testing-library/jest-dom | ^6.9.1 | DOM 매처 확장 |
| jsdom | ^27.0.1 | 브라우저 환경 시뮬레이션 |

### Module Format

| 포맷 | 출력 파일 | 용도 |
|------|----------|------|
| ES Module | `dist/index.es.js` | 모던 번들러 지원 (Vite, Webpack 5+) |
| UMD | `dist/index.umd.js` | CommonJS 및 브라우저 직접 사용 |
| TypeScript | `dist/index.d.ts` | 타입 정의 파일 |

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
export type { AnchorDependency, DataService, GanttData };  // 🆕

// 상수
export { GANTT_COLORS, GANTT_LAYOUT, ZOOM_CONFIG };
export { GANTT_ANCHOR, GANTT_DRAG, GANTT_SUMMARY, GANTT_STROKE };  // 🆕

// 데이터 서비스 (🆕)
export { LocalStorageService, createLocalStorageService };
export { serializeGanttDataForExport, parseImportedData };
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
│   │   │   ├── GanttTimeline/        # 타임라인 모듈
│   │   │   │   ├── index.tsx         # 타임라인 메인
│   │   │   │   ├── TaskBar.tsx       # 태스크 바
│   │   │   │   ├── AnchorPoints.tsx  # 앵커 포인트
│   │   │   │   ├── DependencyLines.tsx # 종속성 선
│   │   │   │   └── hooks/            # 드래그 훅
│   │   │   ├── CriticalPathBar.tsx   # CP 바
│   │   │   ├── GroupSummaryBar.tsx   # 그룹 요약 바
│   │   │   └── TaskEditModal.tsx     # 작업 편집 모달
│   │   ├── hooks/              # 커스텀 훅
│   │   │   ├── useGanttVirtualization.ts
│   │   │   ├── useHistory.ts
│   │   │   └── useColumnResizer.ts
│   │   ├── services/           # 데이터 서비스 (🆕)
│   │   │   ├── DataService.ts        # 서비스 인터페이스
│   │   │   ├── LocalStorageService.ts # localStorage 구현
│   │   │   ├── serializers.ts        # 직렬화 유틸
│   │   │   └── index.ts              # re-export
│   │   ├── store/              # Zustand 스토어
│   │   ├── utils/              # 유틸리티 함수
│   │   │   ├── dateUtils.ts          # 날짜 계산
│   │   │   ├── criticalPathUtils.ts  # CP 계산
│   │   │   ├── dependencyGraph.ts    # 종속성 그래프
│   │   │   └── typeGuards.ts
│   │   ├── context/            # React Context
│   │   ├── types/              # 타입 정의
│   │   │   ├── index.ts              # 타입 re-export
│   │   │   └── constants.ts          # 상수 정의
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
- [x] 앵커 기반 종속성 시스템 🆕
- [x] 연결된 태스크 그룹 드래그 🆕
- [x] DataService 추상화 (Supabase 준비) 🆕
- [x] 상수 모듈화 (매직 넘버 제거) 🆕

### v0.2.0 (예정)
- [ ] Supabase 연동 (SupabaseService)
- [ ] 작업 자동 스케줄링
- [ ] PDF/이미지 내보내기
- [ ] 종속성 제약 검증

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
