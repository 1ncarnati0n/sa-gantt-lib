<!-- 08e8dbd0-05b6-4be6-a35b-59250185b2d1 481094d8-5c7c-40ec-ab3f-e68ca946b5c7 -->
# UI 레이아웃 재배치

## 변경 사항

### 1. App.tsx 상단 헤더 수정

- "SA-Gantt" 타이틀 → "건설 표준공정표 관리 시스템"으로 변경
- 저장/초기화 버튼 제거 (GanttChart로 이동)

### 2. GanttChart.tsx 헤더 수정

- 기존 타이틀 "건설 표준공정표 관리 시스템" 제거
- 줌 컨트롤(주/월) + 기준일 → 중앙 정렬
- 저장/초기화 버튼 props 추가 및 오른쪽에 배치

### 수정 파일

| 파일 | 변경 내용 |
|------|----------|
| [`App.tsx`](src/App.tsx) | 타이틀 변경, 버튼을 GanttChart props로 전달 |
| [`GanttChart.tsx`](src/lib/components/GanttChart.tsx) | 헤더 레이아웃 재배치 |
| [`types.ts`](src/lib/types.ts) | 저장/초기화 관련 props 추가 |