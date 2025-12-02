<!-- 08e8dbd0-05b6-4be6-a35b-59250185b2d1 785c735d-470a-45f5-800f-dffeda871f6e -->
# Gantt 차트 기능 추가 계획

## 1. 비작업일수 컬럼 추가

[`GanttSidebar.tsx`](src/lib/components/GanttSidebar.tsx)의 `DEFAULT_MASTER_COLUMNS`에 `nonWorkDays` 컬럼 추가:

```typescript
const DEFAULT_MASTER_COLUMNS = [
    { id: 'name', label: 'CP명', width: 180, minWidth: 100 },
    { id: 'total', label: '총 공기', width: 80, minWidth: 50 },
    { id: 'workDays', label: '작업일수', width: 80, minWidth: 50 },
    { id: 'nonWorkDays', label: '비작업일수', width: 80, minWidth: 50 }, // 추가
];
```

렌더링 로직에 teal 색상으로 비작업일수 표시 추가.

---

## 2. Level 1 CP/GROUP 드래그 순서 변경

현재 Detail View(Level 2)에만 있는 드래그 로직을 Master View(Level 1)에도 적용:

- Master View에 드래그 핸들(GripVertical) 추가
- GROUP과 CP 모두 드래그 가능하게 설정
- 기존 `handleDragStart`, `handleDragOver`, `handleDrop` 로직 재사용
- 최상위 레벨과 GROUP 내 모두에서 순서 변경 가능

---

## 3. 멀티선택 + 우클릭 그룹화/해제

### 3.1 멀티선택 상태 관리

- `selectedTaskIds: Set<string>` 상태 추가
- Ctrl+Click: 개별 선택/해제 토글
- Shift+Click: 범위 선택 (첫 번째 선택~클릭 위치)
- 일반 클릭: 단일 선택 (기존 선택 해제)

### 3.2 컨텍스트 메뉴 구현

- 우클릭 시 메뉴 표시 (x, y 좌표 기반)
- 메뉴 항목:
  - **그룹화** (2개 이상 선택 시): 선택된 CP들을 새 GROUP으로 묶음
  - **그룹 해제** (GROUP 선택 시): GROUP 해체, 자식들을 상위로 이동

### 3.3 그룹화 로직

- 새 GROUP 생성 (`name: '새 그룹 N'`, 자동 번호)
- 선택된 항목들의 `parentId`를 새 GROUP의 id로 변경
- 새 GROUP의 시작/종료일은 자식들의 min/max로 계산

### 3.4 그룹 해제 로직

- GROUP의 자식들을 GROUP의 부모로 이동 (`parentId` 변경)
- GROUP 삭제

---

## 수정 파일

| 파일 | 변경 내용 |

|------|----------|

| [`GanttSidebar.tsx`](src/lib/components/GanttSidebar.tsx) | 비작업일수 컬럼, Master 드래그, 멀티선택, 컨텍스트 메뉴 |

| [`types.ts`](src/lib/types.ts) | `onTaskGroup`, `onTaskUngroup` 콜백 타입 추가 |

| [`App.tsx`](src/App.tsx) | 그룹화/해제 핸들러 구현 |

### To-dos

- [ ] Master View에 비작업일수 컬럼 추가 (teal 색상)
- [ ] Level 1 CP/GROUP 드래그 순서 변경 기능 구현
- [ ] 멀티선택 기능 구현 (Ctrl+Click, Shift+Click)
- [ ] 우클릭 컨텍스트 메뉴 UI 구현
- [ ] 그룹화/해제 로직 및 콜백 구현