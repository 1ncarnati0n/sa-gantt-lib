# Code Review: Unified View 기능 추가

> **커밋**: `87f30ca` - making united view
> **브랜치**: `dev` → `main`
> **리뷰 일자**: 2026-01-13

---

## 변경 요약

| 영역 | 주요 변경 |
|------|----------|
| **새 컴포넌트** | `SidebarRowUnified.tsx` - 통합 뷰 전용 행 컴포넌트 |
| **타입 확장** | `ViewMode = 'MASTER' \| 'DETAIL' \| 'UNIFIED'` |
| **Store 업데이트** | `setExpandedTaskIds`, 단계별 접기/펼치기 로직 |
| **UI 개선** | 헤더에 추가 드롭다운, 뷰 전환 버튼, Compact 토글 UI |
| **키보드 내비게이션** | ArrowLeft/Right로 접기/펼치기 지원 |
| **통계** | +1,079 / -362 lines across 38 files |

---

## 잘된 점

1. **일관된 패턴 유지**: 기존 `SidebarRowMaster`, `SidebarRowDetail` 패턴을 따라 `SidebarRowUnified` 구현
2. **적절한 메모이제이션**: `useMemo`, `useCallback`을 활용한 성능 최적화
3. **뱃지 시스템 통일**: B(Block), CP, G(Group) 뱃지를 모든 뷰에 일관되게 적용
4. **동적 행 높이**: GROUP/CP는 고정 높이, Task만 Compact 모드 적용하는 로직이 명확

---

## 개선 사항

### 1. 성능 이슈: 렌더링 중 O(n²) 연산 ⚠️ High Priority

**파일**: `src/lib/components/GanttSidebar/index.tsx:550-552`

**현재 코드**:
```typescript
// 매 row 렌더링마다 O(n) 연산이 발생
const parentTask = task.parentId ? allTasks.find(t => t.id === task.parentId) : null;
const isBlock = isGroup && (!parentTask || parentTask.type !== 'CP');
const canExpand = (isCP || isGroup) && allTasks.some(t => t.parentId === task.id);
```

**문제**: 1000개 Task 기준, `find()`와 `some()`이 각 row마다 호출되어 **O(n²)** 복잡도. 가상화를 사용해도 스크롤 시 새 row들이 렌더링되므로 대용량 데이터에서 스크롤이 버벅일 수 있음.

**개선안**:
```typescript
// 컴포넌트 상단에서 한 번만 계산
const taskMap = useMemo(() =>
    new Map(allTasks.map(t => [t.id, t])),
    [allTasks]
);

const childrenCountMap = useMemo(() => {
    const map = new Map<string, number>();
    allTasks.forEach(t => {
        if (t.parentId) {
            map.set(t.parentId, (map.get(t.parentId) || 0) + 1);
        }
    });
    return map;
}, [allTasks]);

// 렌더링 시 O(1)로 조회
const parentTask = task.parentId ? taskMap.get(task.parentId) : null;
const canExpand = (isCP || isGroup) && (childrenCountMap.get(task.id) || 0) > 0;
```

---

### 2. getAddMenuItems 메모이제이션 누락 ⚡ Medium Priority

**파일**: `src/lib/components/GanttChart/GanttHeader.tsx:55-98`

**현재 코드**:
```typescript
// 매 렌더마다 새 배열 생성
const getAddMenuItems = () => { ... };
const addMenuItems = getAddMenuItems();
```

**개선안**:
```typescript
const addMenuItems = useMemo(() => {
    const items: { label: string; onClick: () => void; color: string }[] = [];

    if (viewMode === 'MASTER' || viewMode === 'UNIFIED') {
        if (canCreateTask && onStartAddCP && !isAddingCP) {
            items.push({
                label: 'CP 추가',
                onClick: () => {
                    onStartAddCP();
                    setIsAddDropdownOpen(false);
                },
                color: 'var(--gantt-focus)',
            });
        }
    }
    // ... 나머지 로직
    return items;
}, [viewMode, canCreateTask, canCreateMilestone, isAddingCP, isAddingTask,
    onStartAddCP, onStartAddTask, onStartAddMilestone]);
```

---

### 3. getDepthForTask 내 반복적 find() 호출 ⚡ Medium Priority

**파일**: `src/lib/components/GanttChart/index.tsx:274-281`

**현재 코드**:
```typescript
// while 루프 내에서 매번 find() 호출 - O(depth × n)
while (currentId) {
    const parent = tasks.find(t => t.id === currentId);  // O(n)
    if (!parent) break;
    if (parent.type === 'GROUP') depth++;
    currentId = parent.parentId;
}
```

**개선안**:
```typescript
const taskMap = useMemo(() =>
    new Map(tasks.map(t => [t.id, t])),
    [tasks]
);

const getDepthForTask = useCallback((task: ConstructionTask): number => {
    // ... UNIFIED 로직

    // MASTER / DETAIL: O(depth) - find() 제거
    let depth = 0;
    let currentId = task.parentId;
    while (currentId) {
        const parent = taskMap.get(currentId);  // O(1)
        if (!parent) break;
        if (parent.type === 'GROUP') depth++;
        currentId = parent.parentId;
    }
    return depth;
}, [viewMode, taskMap]);
```

---

### 4. 미사용 변수 정리 📝 Low Priority

**파일**: `src/lib/components/GanttTimeline/MasterTaskBar.tsx:105`

```typescript
const radius = 0;  // 현재 focus indicator에만 사용, 인라인 처리 권장
```

DayBlock 리팩토링 후 `radius` 변수가 focus indicator에만 쓰이는데, 항상 0이므로 인라인 처리가 깔끔합니다.

---

### 5. collectUnified 주석과 코드 불일치 📝 Low Priority

**파일**: `src/lib/components/GanttChart/index.tsx:189-191`

**현재 코드**:
```typescript
} else if (task.wbsLevel === 2) {
    // Level 2는 부모(CP 또는 GROUP)가 확장되어 있을 때만
    visible.push(task);  // <- 주석과 코드 불일치처럼 보임
```

주석에 "부모가 확장되어 있을 때만"이라고 했지만, 조건 체크 없이 바로 push합니다. 재귀 호출 구조상 올바르게 동작하지만, 가독성을 위해 주석 수정 권장:

```typescript
// Level 2는 재귀 호출을 통해 확장된 부모의 자식만 도달
```

---

### 6. UNIFIED 뷰 전환 시 확장 상태 초기화 검토 💡 UX Consideration

**파일**: `src/lib/store/useGanttStore.ts:76-81`

```typescript
set({
    viewMode: mode,
    activeCPId: cpId ?? null,
    zoomLevel: newZoomLevel,
    sidebarWidth: newWidth,
    // expandedTaskIds는 유지됨 - 의도적인지?
});
```

MASTER → UNIFIED 전환 시 이전 확장 상태가 그대로 유지됩니다.
- 의도적이라면 OK
- 아니라면 UNIFIED 전환 시 기본 확장 상태(예: 모든 CP 펼침)로 초기화하는 것이 자연스러울 수 있음

---

### 7. 하드코딩된 색상값 상수화 💡 Consistency

**파일**: 여러 곳 (`SidebarRowUnified.tsx`, `SidebarRowMaster.tsx`, `SidebarRowDetail.tsx`)

```typescript
// 반복되는 색상값
backgroundColor: '#e5e7eb'  // Block badge
backgroundColor: '#b0b3b8'  // Group badge
color: '#1f2937'
border: '1.5px solid #374151'
```

**개선안**: `GANTT_COLORS`에 추가하여 유지보수성 향상

```typescript
// constants.ts
export const GANTT_COLORS = {
    // ... existing
    badgeBlock: '#e5e7eb',
    badgeBlockText: '#1f2937',
    badgeBlockBorder: '#374151',
    badgeGroup: '#b0b3b8',
    // ...
};
```

---

### 8. 접근성(A11y) 개선 💡 Nice to have

**파일**: `src/lib/components/GanttSidebar/SidebarRowUnified.tsx:198-204`

**현재 코드**:
```typescript
<button
    onClick={handleToggle}
    className="mr-1 shrink-0 rounded p-1"
    style={{ color: 'var(--gantt-text-muted)' }}
>
```

**개선안**: `aria-label` 및 `aria-expanded` 추가

```typescript
<button
    onClick={handleToggle}
    className="mr-1 shrink-0 rounded p-1"
    style={{ color: 'var(--gantt-text-muted)' }}
    aria-label={isExpanded ? '접기' : '펼치기'}
    aria-expanded={isExpanded}
>
```

---

## 우선순위 정리

| 우선순위 | 개선사항 | 영향 | 예상 작업량 |
|---------|---------|------|-----------|
| **High** | O(n²) 연산 제거 (Map 활용) | 대용량 데이터 성능 | ~1시간 |
| **Medium** | getAddMenuItems 메모이제이션 | 불필요한 리렌더링 방지 | ~15분 |
| **Medium** | getDepthForTask 최적화 | 확장/축소 성능 | ~30분 |
| **Low** | 미사용 변수 정리 | 코드 클린업 | ~5분 |
| **Low** | 주석 수정 | 가독성 | ~5분 |
| **UX** | UNIFIED 전환 시 상태 초기화 | UX 일관성 | ~15분 |
| **Nice** | 색상 상수화 | 유지보수성 | ~20분 |
| **Nice** | A11y 개선 | 스크린 리더 지원 | ~10분 |

---

## 테스트 체크리스트

PR 머지 전 확인 사항:

- [ ] **Unified View 전환**: Master → Unified → Master 왕복 시 상태 유지
- [ ] **단계별 접기/펼치기**: Block → CP → Group 순서로 확장/축소 동작
- [ ] **Compact 모드**: UNIFIED 뷰에서 Compact 토글 시 Task 행 높이 변경
- [ ] **키보드 네비게이션**: ArrowLeft/Right로 CP/GROUP 접기/펼치기
- [ ] **대용량 데이터**: 500+ Task에서 스크롤 성능 확인
- [ ] **추가 드롭다운**: CP/Task/마일스톤 추가 기능 정상 동작

---

## 결론

전체적으로 **잘 구조화된 기능 추가**입니다. 기존 코드베이스 패턴을 잘 따르고 있으며, UNIFIED 뷰 로직이 명확하게 분리되어 있습니다.

**High Priority** 개선사항(O(n²) 최적화)은 대용량 데이터 사용 시 필수적이므로 가능하면 이번 PR에 포함하는 것을 권장합니다. 나머지는 후속 작업으로 진행해도 무방합니다.
