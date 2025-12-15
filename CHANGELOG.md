# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.1] - 2025-12-15

### Added

- **Date Validation Utilities**: New validation functions for date handling
  - `isValidDate()` - Check if a value is a valid Date object
  - `isValidDateRange()` - Validate that start date is before or equal to end date
  - `validateTaskDates()` - Validate task date ranges
  - `parseDateSafe()` - Safely parse date strings with null fallback
  - `isSameDay()` - Compare two dates ignoring time

- **Cycle Detection**: Dependency graph cycle detection utilities
  - `detectCyclicDependency()` - Detect cycles in dependency graph using DFS
  - `wouldCreateCycle()` - Check if adding a dependency would create a cycle
  - `CycleDetectionResult` interface for structured results

- **Async Error Handling**: Modal components now handle async callbacks properly
  - `TaskEditModal` - Added try-catch with loading state for save/delete
  - `MilestoneEditModal` - Added try-catch with loading state for save/delete

### Changed

- **`collectDescendantTasks` Function**: Extended with options parameter
  - Added `wbsLevel` option to filter by WBS level
  - Added `includeTypes` option to specify which task types to collect
  - Added `includeGroups` option to include GROUP tasks in results
  - Backward compatible - existing code works without changes

- **Performance Optimizations**: `SidebarRowMaster` component
  - `formatNum` moved outside component (pure function)
  - `getRowStyle` replaced with `useMemo` hook
  - Event handlers wrapped with `useCallback`

### Fixed

- **Code Duplication**: Removed duplicate `collectDescendantTasks` implementations
  - `GanttSidebar/index.tsx` - Now uses shared utility
  - `TaskBar.tsx` - Now uses shared utility

### Internal

- Added test files for new utilities
  - `validation.test.ts` - Date validation tests
  - `dependencyGraph.test.ts` - Cycle detection tests

## [0.1.0-beta] - 2025-12-10

### Added

- Initial beta release
- GanttChart, GanttSidebar, GanttTimeline components
- Critical Path calculation
- Dual calendar system (working days / calendar days)
- Drag and drop for tasks and dependencies
- Virtualization support with @tanstack/react-virtual
- Dark/Light theme support
- Undo/Redo history
- Import/Export JSON
- Korean holidays support (2025-2027)
