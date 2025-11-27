# 건설 엔터프라이즈 간트차트 개발 전략: 2단계 공정 관리 시스템

## 1. 프로젝트 목표 및 구조 재정립 (Architecture)

본 프로젝트는 **실무가이드 3** 기반의 공구 공정표(Level 1)와 **실무가이드 2** 기반의 주공정표(Level 2)를 유기적으로 연결하는 시스템입니다.

### 🏗️ 2-Tier Hierarchy Definition

|레벨|명칭 (View Name)|기반 데이터|핵심 단위 (Unit)|기간 구성 (Time Components)|시각화 (Visual)|
|---|---|---|---|---|---|
|**Level 1**|**공구 공정표** (Lot Schedule)|실무가이드 3 (공사기간 산정)|**CP** (Critical Path)|**작업일수** (Work Days) **비작업일수** (Non-Work Days)|집계된 기간을 표현하는 **단일 복합 바** (Vermilion/Teal)|
|**Level 2**|**주공정표** (CP Schedule)|실무가이드 2 (표준공정표 작성)|**Task** (단위공정)|**순작업일** (Direct Work) **간접작업일** (Indirect Work)|실행 상세를 표현하는 **세부 복합 바** (Red/Blue)|

## 2. Level 1: 공구 공정표 (Lot Schedule View) 전략

**참조 이미지:** `공구공정표_대규모공사.jpg`, `공구공정표_중규모공사.jpg`

Level 1은 전체 프로젝트의 흐름을 관리하는 **경영/관리 뷰** 입니다. 사용자가 직접 그리기보다는 하위 Level 2의 데이터가 **집계(Aggregation)** 되어 표시되는 결과물입니다.

### A. 핵심 로직: CP (Critical Path)

- **단위 명칭:** `SUMMARY`가 아닌 `CP`로 명명합니다. (예: 토목공사 CP, 골조공사 CP)
    
- **기간 산정 로직:**
    
    - **작업일수 (Vermilion):** 하위 Task들의 **순작업일** 총합. (실제 현장 투입 공수)
        
    - **비작업일수 (Teal):** 하위 Task들의 **간접작업일** + **보정일수**(기상, 휴무, 정리기간 등).
        

### B. UI/UX 디자인 가이드

1. **Timeline Header:**
    
    - 최상단에 연도(연차 [1년차, 2년차...]) 표시 필수.
    - 그 아래에 월/일 표시.

2. **Milestone Lane:**
    
    - 헤더 바로 아래에 **'MILESTONE'** 전용 레인을 배치.

    - 주요 이정표(착공, 골조완료, 습식마감완료, 준공)를 **화살표 아이콘(↓)** 과 함께 표시.
        
3. **Bar Chart:**
    
    - 하나의 긴 Bar로 표현하되, **Vermilion(작업)** 구간과 **Teal(비작업)** 구간을 시각적으로 구분.
        
    - Bar 위에 총 일수(예: 1,181일) 뱃지 표시.
        
4. **Grid Columns:**
    
    - `구분` (대공정) | `CP명` (주공정) | `총 공기` | `작업일수` | `비작업일수`
        

## 3. Level 2: 주공정표 (CP Schedule View) 전략

**참조 이미지:** `주공정(C.P)표_지하골조.jpg`, `주공정(C.P)표_마감공사.jpg`

Level 2는 실제 공기를 산출하고 작업 순서를 계획하는 **엔지니어링/실행 뷰**입니다.

### A. 핵심 로직: Task & Flexible Linking

- **단위 명칭:** **`Task`** (단위공정). (예: 철근 현장조립, 유로폼 설치)
    
- **기간 구성:**
    
    - **순작업 (Red 계열):** 직접적인 생산 활동. (휴무일 Skip)
        
    - **간접작업 (Blue 계열):** 양생, 검측, 준비 등. (휴무일 Include)
        
    - **배치(Placement):** 간접작업은 순작업의 **앞(Pre)** 이나 **뒤(Post)** 에 붙을 수 있음.
        

### B. 유연한 종속성 (Flexible Linking) - ★ 핵심 차별화 포인트

건설 공정의 종속성은 단순한 `FS(Finish-to-Start)`가 아닙니다.

- **Logic:** "선행 작업의 **순작업**이 끝나면, 후행 작업의 **순작업**을 시작한다." (중간에 간접작업이 껴있어도 무관)
    
- **Connection Points (앵커):**
    
    - `Task Start`
        
    - `Net Work Start` (순작업 시작점)
        
    - `Net Work End` (순작업 종료점 - **가장 빈번한 연결점** )
        
    - `Task End`
        
- **시각화:** 화살표가 Bar의 끝에서 나가는 게 아니라, **Bar 중간(순작업과 간접작업의 경계)** 에서 시작되거나 도착할 수 있어야 합니다.
    

### C. UI/UX 디자인 가이드

1. **Composite Bar:**
    
    - **순작업:** 붉은색 실선/면 (Red Solid).
        
    - **간접작업:** 푸른색 실선/면 또는 빗금 패턴 (Blue Pattern).
        
    - 두 세그먼트는 하나의 그룹으로 묶여 이동하지만, 길이는 개별 설정 가능.
        
2. **Grid Columns (산출 근거):**
    
    - `단위공정명` | `수량` | `1일 작업량` | `작업조` | `순작업일` | `간접일` | `비고(검측/양생)`
        
3. **Interaction:**
    
    - Bar의 **내부 경계선**을 드래그하여 순작업/간접작업 비율 조절.
        
    - 연결선 생성 시 Bar 위에 마우스를 올리면 **3~4개의 연결 포인트(앵커)**가 활성화됨.
        

## 4. 데이터 구조 설계 (Updated for Flexible Linking)

```tsx
// 공정 레벨
type WbsLevel = 1 | 2;

// 기간 배치 타입 (L2)
type Placement = 'PRE' | 'POST'; // 간접작업 위치

// ★ 핵심: 유연한 연결을 위한 앵커 포인트 정의
type AnchorPoint = 'START' | 'NET_WORK_START' | 'NET_WORK_END' | 'END';

interface Dependency {
  predecessorId: string;
  type: 'FS' | 'SS' | 'FF' | 'SF';
  lag: number;
  // 어느 지점에서 출발해서 어느 지점으로 들어가는가?
  sourceAnchor: AnchorPoint; 
  targetAnchor: AnchorPoint;
}

interface ConstructionTask {
  id: string;
  parentId: string | null;
  wbsLevel: WbsLevel;
  name: string;
  
  // --- Level 1 Fields (공구 공정표) ---
  // 하위 Task 집계 데이터
  summary?: {
    workDaysTotal: number;    // Vermilion
    nonWorkDaysTotal: number; // Teal
  };

  // --- Level 2 Fields (주공정표) ---
  // 단위 공정 상세
  task?: {
    netWorkDays: number;      // 순작업 (Red)
    indirectWorkDays: number; // 간접작업 (Blue)
    placement: Placement;     // 배치 순서
    
    // 산출 근거 (Phase 2 자동계산용)
    quantity?: number;
    dailyOutput?: number;
    crew?: number;
  };

  // 공통 스케줄링
  startDate: string;
  endDate: string;
  dependencies: Dependency[];
}

```

## 5. Work-Detail 관계도 (Interaction Flow)

1. **진입:** 사용자는 처음에 **Level 1 (공구 공정표)**를 봅니다. (전체 4년치 공정)
    
2. **탐색:** '골조 공사 CP' Bar를 클릭합니다.
    
3. **전환:** 화면이 **Level 2 (주공정표)**로 전환되며, '골조 공사'에 속한 단위 공정(철근, 유로폼, 타설)만 리스트업 됩니다.
    
4. **편집 (Level 2):**
    
    - '철근 현장조립'의 물량을 수정 -> 순작업일 자동 변경.
        
    - '철근'의 **순작업 종료점**에서 '유로폼'의 **순작업 시작점**으로 연결선 생성.
        
5. **반영 (Level 1):** Level 2의 변경 사항(기간 증가)이 상위 '골조 공사 CP'의 `workDaysTotal`에 합산되어 Master View의 Bar 길이가 늘어납니다.
    

### ✅ 개발팀 전달 사항 (Action Items)

1. **SVG 렌더링 엔진 고도화:** 단순 `rect`가 아니라, `sourceAnchor` 좌표를 계산하여 `path`를 그리는 로직이 필요합니다. (Bar 중간에서 화살표가 나가야 함)
    
2. **캘린더 분리 적용:** Red Bar는 휴무일을 건너뛰고, Blue Bar는 휴무일을 포함하여 날짜를 계산하는 **Dual Calendar Logic**을 구현해야 합니다.
    
3. **View State 관리:** `CurrentView` (Master/Detail)에 따라 좌측 그리드 컬럼과 우측 차트 렌더링 방식이 완전히 달라지도록 분기 처리를 해야 합니다.