# 건설 엔터프라이즈 간트차트 UI/UX 디자인 가이드

본 문서는 `Gantt 개발기획 Guide.md`와 첨부된 공정표 이미지들을 분석하여 도출한 상세 디자인 가이드라인입니다.

## 1. 디자인 시스템 (Design System)

### 1.1 Color Palette

| 역할 | 색상명 | Hex Code | 용도 | 비고 |
|---|---|---|---|---|
| **Primary (Work)** | **Vermilion** | `#E34234` | 작업일수 (순작업), Critical Path | 강렬한 붉은색으로 '실제 공사' 강조 |
| **Secondary (Non-Work)** | **Teal** | `#008080` | 비작업일수 (간접작업), 여유기간 | 차분한 청록색으로 '대기/양생' 표현 |
| **L2 Work** | **Red Solid** | `#FF5252` | Level 2 순작업 (Direct Work) | Vermilion보다 약간 밝은 톤 |
| **L2 Non-Work** | **Blue Pattern** | `#448AFF` | Level 2 간접작업 (Indirect Work) | 빗금 패턴 또는 연한 파란색 |
| **Background** | **Holiday** | `#F3F4F6` | 휴무일/주말 배경 (Gray-100) | 빗금 패턴 오버레이 권장 |
| **Text** | **Dark Gray** | `#1F2937` | 기본 텍스트 | 가독성 최우선 |

### 1.2 Typography
- **Font Family:** Inter, Pretendard (시스템 폰트 우선)
- **Size:**
    - Header: 14px (Bold)
    - Grid Content: 13px (Regular)
    - Bar Label: 11px (Medium)
    - Tooltip: 12px

---

## 2. 뷰별 상세 디자인 (View Specifications)

### 2.1 Level 1: 공구 공정표 (Lot Schedule View)
**목적:** 전체 프로젝트의 거시적 흐름 파악 (경영진/관리자용)

#### A. Timeline Header
- **Structure:** 2단 구조
    - **Top:** 연차 표시 (예: "1년차", "2년차") - *배경: 진한 회색 (#374151), 글자: 흰색*
    - **Bottom:** 월/일 표시 (예: "2025-10", "01") - *배경: 흰색*
- **Scale:** 1일 = 20~30px (줌 레벨에 따라 조정)

#### B. Milestone Lane
- **위치:** 헤더 바로 아래 고정 영역 (Height: 40px)
- **Symbol:**
    - **▼ (역삼각형) + 세로선:** 주요 마일스톤 (착공, 준공 등)
    - **Color:** 검정색 또는 강조색(보라색 등)
    - **Label:** 심볼 옆 또는 위에 텍스트 표시

#### C. Main Chart Area
- **Bar Style:**
    - **Composite Bar:** 하나의 긴 막대 안에 `Vermilion` 구간과 `Teal` 구간이 교차됨.
    - **Height:** 24px (Row Height 40px 기준)
    - **Radius:** 4px (양 끝만 둥글게)
    - **Opacity:** 1.0 (Solid)
- **Grid Columns:**
    - `구분` (Center) | `CP명` (Left, Bold) | `총 공기` (Center) | `작업일수` (Vermilion Text) | `비작업일수` (Teal Text)

---

### 2.2 Level 2: 주공정표 (CP Schedule View)
**목적:** 단위 공정의 정밀한 계획 및 연결 (엔지니어/실무자용)

#### A. Timeline Header
- **Structure:** Level 1과 동일하되, 줌 레벨이 더 상세할 수 있음 (주 단위 -> 일 단위).

#### B. Main Chart Area
- **Bar Style:**
    - **Dual Segment:**
        - **순작업(Net Work):** Red 계열 채우기.
        - **간접작업(Indirect):** Blue 계열 채우기 (또는 빗금).
    - **Interaction:** 각 세그먼트의 길이를 마우스로 드래그하여 조절 가능.
- **Flexible Linking (Connection):**
    - **Anchor Points:** Bar에 마우스 오버 시 4개의 점이 나타남.
        1. `Start` (전체 시작)
        2. `Net Work Start` (순작업 시작)
        3. `Net Work End` (순작업 종료) - **★ Main Anchor**
        4. `End` (전체 종료)
    - **Line Style:**
        - `Bezier Curve` (부드러운 곡선) 또는 `Orthogonal` (직각).
        - **Color:** `#9CA3AF` (기본), `#E34234` (Critical Path일 경우 굵게).

#### C. Grid Columns (Engineering Data)
- **Fields:**
    - `WBS` | `공정명` | `규격` | `수량` | `단위` | `일일작업량` | `작업조` | `순작업일` | `간접일`
- **Input:**
    - 수량/일일작업량 입력 시 -> `순작업일` 자동 계산 (수식 적용).

---

## 3. 인터랙션 가이드 (Interaction Guide)

### 3.1 View Switching (Drill-down)
1. **Trigger:** Level 1에서 특정 'CP Bar' 또는 'CP명' 더블 클릭.
2. **Transition:**
    - 좌측 Grid: 해당 CP의 하위 Task 목록으로 교체.
    - 우측 Timeline: 해당 기간으로 줌인(Zoom-in) 및 스크롤 이동.
    - Breadcrumb: 상단에 `Home > 골조공사 CP` 와 같은 네비게이션 표시.

### 3.2 Drag & Drop
- **Move:** Bar 전체를 잡고 이동 -> 시작일 변경.
- **Resize:**
    - Bar의 끝점 드래그 -> 기간 연장/축소.
    - **Internal Border** (순작업/간접작업 경계) 드래그 -> 비율 조정.

### 3.3 Link Creation
1. Source Anchor 클릭 & 드래그 시작.
2. 마우스 포인터를 따라 가이드라인(점선) 표시.
3. Target Anchor에 스냅(Snap) 될 때 하이라이트.
4. 놓으면(Drop) 연결선 생성 및 후행 공정 날짜 자동 재계산.
