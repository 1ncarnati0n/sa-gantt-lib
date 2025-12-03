'use client';

import { forwardRef, useMemo, useCallback, useState, useRef, useEffect } from 'react';
import { format } from 'date-fns';
import { ChevronRight, ChevronDown, GripVertical } from 'lucide-react';
import {
    ConstructionTask,
    ViewMode,
    GANTT_LAYOUT,
    DropPosition,
} from '../types';
import type { VirtualRow } from '../hooks/useGanttVirtualization';
import { GanttSidebarContextMenu } from './GanttSidebarContextMenu';
import { GanttSidebarNewTaskForm } from './GanttSidebarNewTaskForm';
import { GanttSidebarNewCPForm } from './GanttSidebarNewCPForm';

const { ROW_HEIGHT, HEADER_HEIGHT, MILESTONE_LANE_HEIGHT } = GANTT_LAYOUT;

// 컬럼 기본 설정
const DEFAULT_MASTER_COLUMNS = [
    { id: 'name', label: 'CP명', width: 180, minWidth: 100 },
    { id: 'total', label: '총 공기', width: 80, minWidth: 50 },
    { id: 'workDays', label: '작업일수', width: 80, minWidth: 50 },
    { id: 'nonWorkDays', label: '비작업일수', width: 80, minWidth: 50 },
];

const DEFAULT_DETAIL_COLUMNS = [
    { id: 'name', label: '단위공정명', width: 150, minWidth: 80 },
    { id: 'indirectPre', label: '선간접', width: 60, minWidth: 45 },
    { id: 'netWork', label: '순작업', width: 60, minWidth: 45 },
    { id: 'indirectPost', label: '후간접', width: 60, minWidth: 45 },
    { id: 'startDate', label: '시작일', width: 90, minWidth: 70 },
    { id: 'endDate', label: '종료일', width: 90, minWidth: 70 },
];


interface GanttSidebarProps {
    tasks: ConstructionTask[];
    allTasks: ConstructionTask[];
    viewMode: ViewMode;
    expandedIds: Set<string>;
    onToggle: (taskId: string) => void;
    onTaskClick: (task: ConstructionTask) => void;
    onTaskUpdate?: (task: ConstructionTask) => void;
    /** 새 Task 생성 콜백 */
    onTaskCreate?: (task: Partial<ConstructionTask>) => void | Promise<void>;
    /** Task 순서 변경 콜백 */
    onTaskReorder?: (taskId: string, newIndex: number) => void;
    /** 현재 선택된 CP ID (Detail View) */
    activeCPId?: string | null;
    /** 가상화된 행 목록 */
    virtualRows?: VirtualRow[];
    /** 전체 높이 */
    totalHeight?: number;
    /** 사이드바 총 너비 변경 콜백 */
    onTotalWidthChange?: (width: number) => void;
    /** 그룹화 콜백 (선택된 taskId 배열) */
    onTaskGroup?: (taskIds: string[]) => void;
    /** 그룹 해제 콜백 (GROUP taskId) */
    onTaskUngroup?: (groupId: string) => void;
    /** 태스크 삭제 콜백 */
    onTaskDelete?: (taskId: string) => void;
    /** 태스크 이동 콜백 (그룹 간 이동 지원) */
    onTaskMove?: (taskId: string, targetId: string, position: DropPosition) => void;
    /** 새 Task 추가 모드 (GanttChart에서 제어) */
    isAddingTask?: boolean;
    /** 새 Task 추가 취소 콜백 */
    onCancelAddTask?: () => void;
    /** 새 CP 추가 모드 (Master View에서 사용) */
    isAddingCP?: boolean;
    /** 새 CP 추가 취소 콜백 */
    onCancelAddCP?: () => void;
}

/**
 * 간트 차트 사이드바 (왼쪽 그리드)
 * 
 * - Master View: CP명, 총 공기, 작업일수 컬럼
 * - Detail View: 단위공정명, 순작업일, 간접일, 시작일, 종료일 컬럼
 * - 컬럼 너비 드래그로 조절 가능
 */
export const GanttSidebar = forwardRef<HTMLDivElement, GanttSidebarProps>(
    ({ tasks, allTasks, viewMode, expandedIds, onToggle, onTaskClick, onTaskUpdate, onTaskCreate, onTaskReorder, activeCPId, virtualRows, totalHeight, onTotalWidthChange, onTaskGroup, onTaskUngroup, onTaskDelete, onTaskMove, isAddingTask = false, onCancelAddTask, isAddingCP = false, onCancelAddCP }, ref) => {
        // 가상화가 활성화되었는지 확인
        const isVirtualized = virtualRows && virtualRows.length > 0;
        
        // 드래그&드롭 상태 (Task 순서 변경 + 그룹 간 이동)
        const [draggedTaskId, setDraggedTaskId] = useState<string | null>(null);
        const [dragOverTaskId, setDragOverTaskId] = useState<string | null>(null);
        const [dragOverPosition, setDragOverPosition] = useState<DropPosition | null>(null);
        
        // 멀티선택 상태
        const [selectedTaskIds, setSelectedTaskIds] = useState<Set<string>>(new Set());
        const [lastClickedIndex, setLastClickedIndex] = useState<number | null>(null);
        
        // 컨텍스트 메뉴 상태
        const [contextMenu, setContextMenu] = useState<{ x: number; y: number; taskId: string } | null>(null);
        
        // 인라인 편집 상태 (그룹 이름 편집)
        const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
        const [editingName, setEditingName] = useState<string>('');
        const editInputRef = useRef<HTMLInputElement>(null);
        
        // 컬럼 너비 상태 관리
        const [masterColumnWidths, setMasterColumnWidths] = useState<number[]>(
            DEFAULT_MASTER_COLUMNS.map(col => col.width)
        );
        const [detailColumnWidths, setDetailColumnWidths] = useState<number[]>(
            DEFAULT_DETAIL_COLUMNS.map(col => col.width)
        );
        const [resizingIndex, setResizingIndex] = useState<number | null>(null);
        const isResizingRef = useRef(false);

        // 현재 뷰에 따른 컬럼 정보
        const baseColumns = viewMode === 'MASTER' ? DEFAULT_MASTER_COLUMNS : DEFAULT_DETAIL_COLUMNS;
        const columnWidths = viewMode === 'MASTER' ? masterColumnWidths : detailColumnWidths;
        const setColumnWidths = viewMode === 'MASTER' ? setMasterColumnWidths : setDetailColumnWidths;

        // 컬럼 정보와 현재 너비 결합
        const columns = useMemo(() => 
            baseColumns.map((col, idx) => ({
                ...col,
                width: columnWidths[idx] ?? col.width,
            })),
            [baseColumns, columnWidths]
        );

        // 드래그 핸들 너비 (onTaskReorder가 있을 때)
        const dragHandleWidth = onTaskReorder ? 24 : 0;
        const totalWidth = columns.reduce((sum, col) => sum + col.width, 0) + dragHandleWidth;

        // totalWidth 변경 시 부모에게 알림
        useEffect(() => {
            if (onTotalWidthChange) {
                onTotalWidthChange(totalWidth);
            }
        }, [totalWidth, onTotalWidthChange]);

        // 컬럼 리사이즈 핸들러
        const handleColumnResizeStart = useCallback((e: React.MouseEvent, columnIndex: number) => {
            // 더블클릭 방지 (detail이 2면 더블클릭)
            if (e.detail >= 2) return;
            
            e.preventDefault();
            e.stopPropagation();
            isResizingRef.current = true;
            setResizingIndex(columnIndex);

            const startX = e.clientX;
            const startWidth = columnWidths[columnIndex];
            const minWidth = baseColumns[columnIndex].minWidth;

            const handleMouseMove = (e: MouseEvent) => {
                if (!isResizingRef.current) return;
                const delta = e.clientX - startX;
                const newWidth = Math.max(minWidth, startWidth + delta);
                
                setColumnWidths(prev => {
                    const updated = [...prev];
                    updated[columnIndex] = newWidth;
                    return updated;
                });
            };

            const handleMouseUp = () => {
                isResizingRef.current = false;
                setResizingIndex(null);
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
            };

            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }, [columnWidths, baseColumns, setColumnWidths]);

        // 텍스트 너비 측정 (Canvas API 사용)
        const measureTextWidth = useCallback((text: string, fontSize: number = 12, fontWeight: string = 'normal') => {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            if (!context) return 0;
            context.font = `${fontWeight} ${fontSize}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
            return context.measureText(text).width;
        }, []);

        // 컬럼 내용에 맞게 최적 너비 계산 (가장 긴 콘텐츠에 타이트하게 맞춤)
        const calculateOptimalWidth = useCallback((columnIndex: number) => {
            const minWidth = baseColumns[columnIndex].minWidth;
            
            // 컬럼별 패딩 설정 (타이트하게)
            // 첫 번째 컬럼: 확장 버튼(24px) + 좌우 여백(16px)
            // 나머지 컬럼: 좌우 여백만 (12px)
            const isNameColumn = columnIndex === 0;
            const basePadding = isNameColumn ? 48 : 20;
            
            // 헤더 텍스트 너비 (헤더는 중앙 정렬이므로 좌우 여백 8px씩)
            const headerText = baseColumns[columnIndex].label;
            let maxWidth = measureTextWidth(headerText, 12, '500') + 16;

            // 각 행의 데이터 너비 계산
            tasks.forEach(task => {
                let cellText = '';
                let extraPadding = 0;
                
                if (viewMode === 'MASTER') {
                    const isGroup = task.type === 'GROUP';
                    // 들여쓰기 (parentId가 있으면 20px 추가)
                    if (isNameColumn && task.parentId) {
                        extraPadding = 20;
                    }
                    
                    switch (columnIndex) {
                        case 0: // CP명
                            cellText = task.name;
                            break;
                        case 1: // 총 공기
                            cellText = isGroup ? '-' : task.cp 
                                ? `${task.cp.workDaysTotal + task.cp.nonWorkDaysTotal}일` 
                                : '-';
                            break;
                        case 2: // 작업일수
                            cellText = isGroup ? '-' : task.cp 
                                ? `${task.cp.workDaysTotal}일` 
                                : '-';
                            break;
                        case 3: // 비작업일수
                            cellText = isGroup ? '-' : task.cp 
                                ? `${task.cp.nonWorkDaysTotal}일` 
                                : '-';
                            break;
                    }
                } else {
                    // Detail View
                    switch (columnIndex) {
                        case 0: // 단위공정명
                            cellText = task.name;
                            break;
                        case 1: // 선간접
                            cellText = task.task ? String(task.task.indirectWorkDaysPre) : '-';
                            break;
                        case 2: // 순작업일
                            cellText = task.task ? String(task.task.netWorkDays) : '-';
                            break;
                        case 3: // 후간접
                            cellText = task.task ? String(task.task.indirectWorkDaysPost) : '-';
                            break;
                        case 4: // 시작일
                            cellText = format(task.startDate, 'yyyy-MM-dd');
                            break;
                        case 5: // 종료일
                            cellText = format(task.endDate, 'yyyy-MM-dd');
                            break;
                    }
                }

                const fontWeight = isNameColumn ? '500' : 'normal';
                const fontSize = isNameColumn ? 14 : 12;
                const textWidth = measureTextWidth(cellText, fontSize, fontWeight) + basePadding + extraPadding;
                maxWidth = Math.max(maxWidth, textWidth);
            });

            // 최소 너비 적용, 최대 너비 제한 없음 (콘텐츠에 맞춤)
            return Math.max(minWidth, Math.ceil(maxWidth));
        }, [tasks, viewMode, baseColumns, measureTextWidth]);

        // 더블클릭으로 컬럼 너비 자동 최적화
        const handleColumnResizeDoubleClick = useCallback((e: React.MouseEvent, columnIndex: number) => {
            e.preventDefault();
            e.stopPropagation();
            
            // 리사이징 상태 리셋
            isResizingRef.current = false;
            setResizingIndex(null);
            
            const optimalWidth = calculateOptimalWidth(columnIndex);
            setColumnWidths(prev => {
                const updated = [...prev];
                updated[columnIndex] = optimalWidth;
                return updated;
            });
        }, [calculateOptimalWidth, setColumnWidths]);

        // 태스크 업데이트 핸들러 (Detail View에서 일수 편집)
        const handleDurationChange = useCallback((
            task: ConstructionTask,
            field: 'indirectWorkDaysPre' | 'netWorkDays' | 'indirectWorkDaysPost',
            value: number
        ) => {
            if (!task.task || !onTaskUpdate) return;

            const updatedTask: ConstructionTask = {
                ...task,
                task: {
                    ...task.task,
                    [field]: value,
                },
            };
            onTaskUpdate(updatedTask);
        }, [onTaskUpdate]);


        // ====================================
        // 드래그&드롭 핸들러 (Task 순서 변경)
        // ====================================

        const handleDragStart = useCallback((e: React.DragEvent, taskId: string) => {
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/plain', taskId);
            setDraggedTaskId(taskId);
            
            // 드래그 이미지를 투명하게 (선택 사항)
            const dragImage = document.createElement('div');
            dragImage.style.opacity = '0';
            document.body.appendChild(dragImage);
            e.dataTransfer.setDragImage(dragImage, 0, 0);
            setTimeout(() => document.body.removeChild(dragImage), 0);
        }, []);

        const handleDragOver = useCallback((e: React.DragEvent, taskId: string, isTargetGroup: boolean) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            
            if (taskId === draggedTaskId) return;
            
            // 마우스 위치에 따라 position 결정
            const rect = e.currentTarget.getBoundingClientRect();
            const relativeY = e.clientY - rect.top;
            const height = rect.height;
            
            let position: DropPosition;
            
            if (isTargetGroup) {
                // 그룹 행: 상단 1/3 = before, 중앙 1/3 = into, 하단 1/3 = after
                if (relativeY < height / 3) {
                    position = 'before';
                } else if (relativeY < (height * 2) / 3) {
                    position = 'into';
                } else {
                    position = 'after';
                }
            } else {
                // 일반 행: 상단 1/2 = before, 하단 1/2 = after
                position = relativeY < height / 2 ? 'before' : 'after';
            }
            
            setDragOverTaskId(taskId);
            setDragOverPosition(position);
        }, [draggedTaskId]);

        const handleDragLeave = useCallback(() => {
            setDragOverTaskId(null);
            setDragOverPosition(null);
        }, []);

        const handleDrop = useCallback((e: React.DragEvent, targetTaskId: string) => {
            e.preventDefault();
            
            if (!draggedTaskId || draggedTaskId === targetTaskId || !dragOverPosition) {
                setDraggedTaskId(null);
                setDragOverTaskId(null);
                setDragOverPosition(null);
                return;
            }
            
            // onTaskMove가 있으면 사용 (그룹 간 이동 지원)
            if (onTaskMove) {
                onTaskMove(draggedTaskId, targetTaskId, dragOverPosition);
            } else if (onTaskReorder && dragOverPosition !== 'into') {
                // fallback: 기존 onTaskReorder 사용 (순서 변경만)
                const targetIndex = tasks.findIndex(t => t.id === targetTaskId);
                const newIndex = dragOverPosition === 'after' ? targetIndex + 1 : targetIndex;
                onTaskReorder(draggedTaskId, newIndex);
            }
            
            setDraggedTaskId(null);
            setDragOverTaskId(null);
            setDragOverPosition(null);
        }, [draggedTaskId, dragOverPosition, onTaskMove, onTaskReorder, tasks]);

        const handleDragEnd = useCallback(() => {
            setDraggedTaskId(null);
            setDragOverTaskId(null);
            setDragOverPosition(null);
        }, []);

        // ====================================
        // 멀티선택 핸들러
        // ====================================
        
        const handleRowClick = useCallback((e: React.MouseEvent, task: ConstructionTask, rowIndex: number) => {
            // 드래그 중이면 무시
            if (draggedTaskId) return;
            
            const isCtrlOrCmd = e.ctrlKey || e.metaKey;
            const isShift = e.shiftKey;
            
            if (isCtrlOrCmd) {
                // Ctrl/Cmd + Click: 토글 선택
                setSelectedTaskIds(prev => {
                    const newSet = new Set(prev);
                    if (newSet.has(task.id)) {
                        newSet.delete(task.id);
                    } else {
                        newSet.add(task.id);
                    }
                    return newSet;
                });
                setLastClickedIndex(rowIndex);
            } else if (isShift && lastClickedIndex !== null) {
                // Shift + Click: 범위 선택
                const start = Math.min(lastClickedIndex, rowIndex);
                const end = Math.max(lastClickedIndex, rowIndex);
                
                setSelectedTaskIds(prev => {
                    const newSet = new Set(prev);
                    for (let i = start; i <= end; i++) {
                        if (tasks[i]) {
                            newSet.add(tasks[i].id);
                        }
                    }
                    return newSet;
                });
            } else {
                // 일반 Click: 단일 선택 (기존 선택 해제)
                setSelectedTaskIds(new Set([task.id]));
                setLastClickedIndex(rowIndex);
            }
        }, [draggedTaskId, lastClickedIndex, tasks]);

        // ====================================
        // 컨텍스트 메뉴 핸들러
        // ====================================
        
        const handleContextMenu = useCallback((e: React.MouseEvent, task: ConstructionTask) => {
            e.preventDefault();
            
            // 현재 태스크가 선택되지 않았으면 단일 선택
            if (!selectedTaskIds.has(task.id)) {
                setSelectedTaskIds(new Set([task.id]));
            }
            
            setContextMenu({
                x: e.clientX,
                y: e.clientY,
                taskId: task.id,
            });
        }, [selectedTaskIds]);

        // 외부 클릭 시 컨텍스트 메뉴 닫기
        useEffect(() => {
            const handleClickOutside = () => {
                setContextMenu(null);
            };
            
            if (contextMenu) {
                document.addEventListener('click', handleClickOutside);
                return () => document.removeEventListener('click', handleClickOutside);
            }
        }, [contextMenu]);


        // 선택 해제 (ESC 키)
        useEffect(() => {
            const handleKeyDown = (e: KeyboardEvent) => {
                if (e.key === 'Escape') {
                    setSelectedTaskIds(new Set());
                    setContextMenu(null);
                    setEditingTaskId(null);
                }
            };
            
            document.addEventListener('keydown', handleKeyDown);
            return () => document.removeEventListener('keydown', handleKeyDown);
        }, []);

        // ====================================
        // 인라인 편집 핸들러 (모든 태스크 이름 편집)
        // ====================================
        const handleStartEdit = useCallback((task: ConstructionTask) => {
            setEditingTaskId(task.id);
            setEditingName(task.name);
            // 다음 렌더 후 input에 포커스
            setTimeout(() => {
                editInputRef.current?.focus();
                editInputRef.current?.select();
            }, 0);
        }, []);
        
        // taskId로 이름 편집 시작 (컨텍스트 메뉴용)
        const handleStartRename = useCallback((taskId: string) => {
            const task = tasks.find(t => t.id === taskId);
            if (task && onTaskUpdate) {
                handleStartEdit(task);
            }
        }, [tasks, onTaskUpdate, handleStartEdit]);

        const handleSaveEdit = useCallback(() => {
            if (!editingTaskId || !onTaskUpdate) {
                setEditingTaskId(null);
                return;
            }
            
            const task = tasks.find(t => t.id === editingTaskId);
            if (task && editingName.trim() && editingName !== task.name) {
                onTaskUpdate({
                    ...task,
                    name: editingName.trim(),
                });
            }
            
            setEditingTaskId(null);
            setEditingName('');
        }, [editingTaskId, editingName, tasks, onTaskUpdate]);

        const handleCancelEdit = useCallback(() => {
            setEditingTaskId(null);
            setEditingName('');
        }, []);

        const handleEditKeyDown = useCallback((e: React.KeyboardEvent) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleSaveEdit();
            } else if (e.key === 'Escape') {
                e.preventDefault();
                handleCancelEdit();
            }
        }, [handleSaveEdit, handleCancelEdit]);

        // ====================================
        // 그룹 깊이 계산 (Detail View용)
        // ====================================
        const getGroupDepth = useCallback((task: ConstructionTask): number => {
            if (!activeCPId || task.parentId === activeCPId) return 0;
            
            let depth = 0;
            let currentParentId = task.parentId;
            
            while (currentParentId && currentParentId !== activeCPId) {
                const parent = allTasks.find(t => t.id === currentParentId);
                if (parent?.type === 'GROUP') depth++;
                currentParentId = parent?.parentId || null;
            }
            return depth;
        }, [activeCPId, allTasks]);

        // 그룹 깊이 계산 (Master View용 - 최상위부터 계산)
        const getMasterGroupDepth = useCallback((task: ConstructionTask): number => {
            if (!task.parentId) return 0;
            
            let depth = 0;
            let currentParentId: string | null | undefined = task.parentId;
            
            while (currentParentId) {
                const parent = allTasks.find(t => t.id === currentParentId);
                if (parent?.type === 'GROUP') depth++;
                currentParentId = parent?.parentId;
            }
            return depth;
        }, [allTasks]);

        // 컬럼 헤더 렌더링 (리사이저 포함)
        const renderColumnHeaders = () => (
            <div className="flex h-[32px] border-t border-gray-200">
                {columns.map((col, idx) => (
                    <div
                        key={col.id}
                        className="relative flex shrink-0 items-center justify-center text-xs font-medium text-gray-600"
                        style={{ width: col.width }}
                    >
                        {col.label}
                        {/* Column Resizer (마지막 컬럼 제외) */}
                        {idx < columns.length - 1 && (
                            <div
                                className={`absolute right-0 top-0 z-10 h-full w-[5px] cursor-col-resize transition-colors ${
                                    resizingIndex === idx
                                        ? 'bg-blue-500'
                                        : 'hover:bg-blue-300'
                                }`}
                                style={{ transform: 'translateX(50%)' }}
                                onMouseDown={(e) => handleColumnResizeStart(e, idx)}
                                onDoubleClick={(e) => handleColumnResizeDoubleClick(e, idx)}
                                title="드래그하여 컬럼 너비 조절 / 더블클릭으로 내용에 맞게 자동 조절"
                            />
                        )}
                        {/* Border */}
                        {idx < columns.length - 1 && (
                            <div className="absolute right-0 top-0 h-full w-px bg-gray-200" />
                        )}
                    </div>
                ))}
            </div>
        );

        // 선택된 태스크 중 GROUP 타입 확인
        const selectedGroupTask = selectedTaskIds.size === 1 
            ? tasks.find(t => t.id === Array.from(selectedTaskIds)[0] && t.type === 'GROUP')
            : null;
        // 1개 이상 선택 시 그룹화 가능 (GROUP 타입만 선택된 경우는 그룹 해제만 가능)
        const canGroup = selectedTaskIds.size >= 1 && onTaskGroup && !selectedGroupTask;
        const canUngroup = selectedGroupTask && onTaskUngroup;

        // 그룹화/해제 버튼 렌더링
        const renderGroupButtons = () => {
            if (!canGroup && !canUngroup && selectedTaskIds.size === 0) return null;
            
            return (
                <div className="flex items-center gap-2">
                    {/* 선택 개수 표시 */}
                    {selectedTaskIds.size > 0 && (
                        <span className="text-xs text-gray-500">
                            {selectedTaskIds.size}개 선택
                        </span>
                    )}
                    
                    {/* 그룹 해제 버튼 */}
                    {canUngroup && (
                        <button
                            onClick={() => {
                                onTaskUngroup(selectedGroupTask!.id);
                                setSelectedTaskIds(new Set());
                            }}
                            className="flex items-center gap-1 rounded bg-gray-500 px-2 py-1 text-xs font-medium text-white hover:bg-gray-600 transition-colors"
                            title="그룹 해제"
                        >
                            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                            해제
                        </button>
                    )}
                    
                    {/* 선택 해제 버튼 */}
                    {selectedTaskIds.size > 0 && (
                        <button
                            onClick={() => setSelectedTaskIds(new Set())}
                            className="flex items-center justify-center rounded p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-600 transition-colors"
                            title="선택 해제 (ESC)"
                        >
                            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    )}
                </div>
            );
        };

        // Master View 렌더링
        if (viewMode === 'MASTER') {
            return (
                <div className="flex h-full flex-col bg-white select-none">
                    {/* Header */}
                    <div
                        className="flex flex-col border-b border-gray-300 bg-gray-50"
                        style={{ height: HEADER_HEIGHT }}
                    >
                        <div className="flex flex-1 items-center justify-between px-4">
                            <span className="font-bold text-gray-700">공구 공정표 (Level 1)</span>
                            {renderGroupButtons()}
                        </div>
                        {renderColumnHeaders()}
                    </div>

                    {/* Resize Overlay */}
                    {resizingIndex !== null && (
                        <div className="fixed inset-0 z-50 cursor-col-resize" />
                    )}

                    {/* Body */}
                    <div ref={ref} className="relative flex-1 overflow-auto">
                        {/* Milestone Lane Spacer */}
                        <div
                            className="flex items-center border-b border-gray-200 bg-gray-50/50"
                            style={{ height: MILESTONE_LANE_HEIGHT, minWidth: totalWidth }}
                        >
                            {columns.map((col, idx) => (
                                <div
                                    key={col.id}
                                    className="flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-gray-500"
                                    style={{ width: col.width }}
                                >
                                    {idx === 0 && 'Milestone'}
                                </div>
                            ))}
                        </div>

                        {/* Task Rows */}
                        <div 
                            style={{ 
                                minWidth: totalWidth,
                                height: isVirtualized ? totalHeight : undefined,
                                position: 'relative',
                            }}
                        >
                            {(isVirtualized ? virtualRows : tasks.map((_, i) => ({ index: i, start: i * ROW_HEIGHT, size: ROW_HEIGHT, key: i }))).map((row) => {
                                const task = tasks[row.index];
                                if (!task) return null;
                                
                                const isGroup = task.type === 'GROUP';
                                const canExpand = isGroup && allTasks.some(t => t.parentId === task.id);
                                const isExpanded = expandedIds.has(task.id);
                                const masterDepth = getMasterGroupDepth(task);
                                const indent = masterDepth * 12;
                                const isDragging = draggedTaskId === task.id;
                                const isDragOver = dragOverTaskId === task.id;
                                const isSelected = selectedTaskIds.has(task.id);

                                return (
                                    <div
                                        key={row.key}
                                        draggable={!!(onTaskReorder || onTaskMove)}
                                        onDragStart={(e) => handleDragStart(e, task.id)}
                                        onDragOver={(e) => handleDragOver(e, task.id, isGroup)}
                                        onDragLeave={handleDragLeave}
                                        onDrop={(e) => handleDrop(e, task.id)}
                                        onDragEnd={handleDragEnd}
                                        onClick={(e) => handleRowClick(e, task, row.index)}
                                        onContextMenu={(e) => handleContextMenu(e, task)}
                                        className={`box-border flex items-center border-b transition-all duration-150 ${
                                            isDragging 
                                                ? 'opacity-50 bg-blue-50' 
                                                : isDragOver 
                                                    ? dragOverPosition === 'before'
                                                        ? 'border-t-2 border-t-blue-500 border-b-gray-100'
                                                        : dragOverPosition === 'into'
                                                            ? 'bg-blue-200 border-blue-400 border-2 shadow-[inset_0_0_0_2px_rgba(59,130,246,0.6)]'
                                                            : 'border-b-2 border-b-blue-500'
                                                    : isSelected
                                                        ? 'bg-blue-100 border-gray-100 shadow-[inset_0_0_0_2px_rgba(59,130,246,0.5)]'
                                                        : isGroup
                                                            ? 'bg-gray-50 border-gray-100 hover:bg-gray-100'
                                                            : 'border-gray-100 cursor-pointer hover:bg-blue-50 hover:shadow-[inset_0_0_0_1px_rgba(59,130,246,0.3)]'
                                        }`}
                                        style={{ 
                                            height: ROW_HEIGHT,
                                            ...(isVirtualized ? {
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                transform: `translateY(${row.start}px)`,
                                            } : {}),
                                        }}
                                        onDoubleClick={() => !isGroup && onTaskClick(task)}
                                        title={!isGroup ? '더블클릭하여 상세 공정표 보기' : undefined}
                                    >
                                        {/* Drag Handle */}
                                        {onTaskReorder && (
                                            <div 
                                                className="flex shrink-0 items-center justify-center cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600"
                                                style={{ width: 24 }}
                                            >
                                                <GripVertical size={14} />
                                            </div>
                                        )}
                                        
                                        {/* CP Name */}
                                        <div
                                            className="flex shrink-0 items-center overflow-hidden border-r border-gray-100 px-2"
                                            style={{ width: onTaskReorder ? columns[0].width - 24 : columns[0].width, paddingLeft: indent + 8 }}
                                        >
                                            {canExpand ? (
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        onToggle(task.id);
                                                    }}
                                                    className="mr-1 shrink-0 rounded p-1 text-gray-500 hover:bg-gray-200"
                                                >
                                                    {isExpanded ? (
                                                        <ChevronDown size={14} />
                                                    ) : (
                                                        <ChevronRight size={14} />
                                                    )}
                                                </button>
                                            ) : (
                                                <div className="w-6 shrink-0" />
                                            )}
                                            {/* 인라인 편집 */}
                                            {editingTaskId === task.id ? (
                                                <input
                                                    ref={editInputRef}
                                                    type="text"
                                                    value={editingName}
                                                    onChange={(e) => setEditingName(e.target.value)}
                                                    onKeyDown={handleEditKeyDown}
                                                    onBlur={handleSaveEdit}
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="w-full rounded border border-blue-400 bg-white px-1 py-0.5 text-sm font-normal text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                                />
                                            ) : (
                                                <span
                                                    className={`truncate text-sm ${
                                                        isGroup
                                                            ? 'font-normal text-gray-500 italic cursor-text'
                                                            : 'font-medium text-gray-800'
                                                    }`}
                                                    onDoubleClick={(e) => {
                                                        if (onTaskUpdate) {
                                                            e.stopPropagation();
                                                            handleStartEdit(task);
                                                        }
                                                    }}
                                                    title={onTaskUpdate ? '더블클릭하여 이름 편집' : undefined}
                                                >
                                                    {task.name}
                                                </span>
                                            )}
                                        </div>

                                        {/* Total Duration */}
                                        <div
                                            className="flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-gray-500"
                                            style={{ width: columns[1].width }}
                                        >
                                            {isGroup
                                                ? '-'
                                                : task.cp
                                                    ? `${task.cp.workDaysTotal + task.cp.nonWorkDaysTotal}일`
                                                    : '-'}
                                        </div>

                                        {/* Work Days */}
                                        <div
                                            className="flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-vermilion"
                                            style={{ width: columns[2].width }}
                                        >
                                            {isGroup
                                                ? '-'
                                                : task.cp
                                                    ? `${task.cp.workDaysTotal}일`
                                                    : '-'}
                                        </div>

                                        {/* Non-Work Days (비작업일수) */}
                                        <div
                                            className="flex shrink-0 items-center justify-center text-xs text-teal"
                                            style={{ width: columns[3].width }}
                                        >
                                            {isGroup
                                                ? '-'
                                                : task.cp
                                                    ? `${task.cp.nonWorkDaysTotal}일`
                                                    : '-'}
                                        </div>
                                    </div>
                                );
                            })}

                            {/* 새 CP 입력 행 */}
                            {isAddingCP && (
                                <GanttSidebarNewCPForm
                                    columns={columns}
                                    tasks={tasks}
                                    onTaskCreate={onTaskCreate}
                                    onCancel={onCancelAddCP || (() => {})}
                                    isVirtualized={isVirtualized}
                                    virtualRowIndex={tasks.length}
                                    dragHandleWidth={dragHandleWidth}
                                />
                            )}
                        </div>
                    </div>

                    {/* Context Menu */}
                    {contextMenu && (
                        <GanttSidebarContextMenu
                            x={contextMenu.x}
                            y={contextMenu.y}
                            taskId={contextMenu.taskId}
                            selectedTaskIds={selectedTaskIds}
                            tasks={tasks}
                            onTaskGroup={onTaskGroup}
                            onTaskUngroup={onTaskUngroup}
                            onTaskDelete={onTaskDelete}
                            onStartRename={handleStartRename}
                            onClose={() => setContextMenu(null)}
                            onDeselect={() => setSelectedTaskIds(new Set())}
                        />
                    )}
                </div>
            );
        }

        // Detail View 렌더링
        return (
            <div className="flex h-full flex-col bg-white select-none">
                {/* Header */}
                <div
                    className="flex flex-col border-b border-gray-300 bg-gray-50"
                    style={{ height: HEADER_HEIGHT }}
                >
                    <div className="flex flex-1 items-center justify-between px-4">
                        <span className="font-bold text-gray-700">주공정표 (Level 2)</span>
                        {renderGroupButtons()}
                    </div>
                    {renderColumnHeaders()}
                </div>

                {/* Resize Overlay */}
                {resizingIndex !== null && (
                    <div className="fixed inset-0 z-50 cursor-col-resize" />
                )}

                {/* Body */}
                <div ref={ref} className="relative flex-1 overflow-auto">
                    {/* Milestone Lane Spacer */}
                    <div
                        className="flex items-center border-b border-gray-200 bg-gray-50/50"
                        style={{ height: MILESTONE_LANE_HEIGHT, minWidth: totalWidth }}
                    >
                        {columns.map((col, idx) => (
                            <div
                                key={col.id}
                                className="flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-gray-500"
                                style={{ width: col.width }}
                            >
                                {idx === 0 && 'Milestone'}
                            </div>
                        ))}
                    </div>

                    {/* Task Rows */}
                        <div 
                            style={{ 
                                minWidth: totalWidth,
                                height: isVirtualized ? totalHeight : undefined,
                                position: 'relative',
                            }}
                        >
                            {(isVirtualized ? virtualRows : tasks.map((_, i) => ({ index: i, start: i * ROW_HEIGHT, size: ROW_HEIGHT, key: i }))).map((row) => {
                                const task = tasks[row.index];
                                if (!task) return null;
                                
                                const isGroup = task.type === 'GROUP';
                                const canExpand = isGroup && allTasks.some(t => t.parentId === task.id);
                                const isExpanded = expandedIds.has(task.id);
                                const depth = getGroupDepth(task);
                                const indent = depth * 12;
                                const isDragging = draggedTaskId === task.id;
                                const isDragOver = dragOverTaskId === task.id;
                                const isSelected = selectedTaskIds.has(task.id);
                                
                                return (
                                    <div
                                        key={row.key}
                                        draggable={!!(onTaskReorder || onTaskMove)}
                                        onDragStart={(e) => handleDragStart(e, task.id)}
                                        onDragOver={(e) => handleDragOver(e, task.id, isGroup)}
                                        onDragLeave={handleDragLeave}
                                        onDrop={(e) => handleDrop(e, task.id)}
                                        onDragEnd={handleDragEnd}
                                        onClick={(e) => handleRowClick(e, task, row.index)}
                                        onContextMenu={(e) => handleContextMenu(e, task)}
                                        className={`box-border flex items-center border-b transition-colors ${
                                            isDragging 
                                                ? 'opacity-50 bg-blue-50' 
                                                : isDragOver 
                                                    ? dragOverPosition === 'before'
                                                        ? 'border-t-2 border-t-blue-500 border-b-gray-100'
                                                        : dragOverPosition === 'into'
                                                            ? 'bg-blue-200 border-blue-400 border-2 shadow-[inset_0_0_0_2px_rgba(59,130,246,0.6)]'
                                                            : 'border-b-2 border-b-blue-500'
                                                    : isSelected
                                                        ? 'bg-blue-100 border-gray-100 shadow-[inset_0_0_0_2px_rgba(59,130,246,0.5)]'
                                                        : isGroup
                                                            ? 'bg-gray-50 border-gray-100 hover:bg-gray-100'
                                                            : 'border-gray-100 hover:bg-gray-50'
                                        }`}
                                        style={{ 
                                            height: ROW_HEIGHT,
                                            ...(isVirtualized ? {
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                transform: `translateY(${row.start}px)`,
                                            } : {}),
                                        }}
                                    >
                                        {/* Drag Handle */}
                                        {onTaskReorder && (
                                            <div 
                                                className="flex shrink-0 items-center justify-center cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600"
                                                style={{ width: 24 }}
                                            >
                                                <GripVertical size={14} />
                                            </div>
                                        )}
                                        
                                        {/* Task Name */}
                                        <div
                                            className="flex shrink-0 items-center overflow-hidden border-r border-gray-100 px-2"
                                            style={{ width: onTaskReorder ? columns[0].width - 24 : columns[0].width, paddingLeft: indent + 8 }}
                                        >
                                            {canExpand ? (
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        onToggle(task.id);
                                                    }}
                                                    className="mr-1 shrink-0 rounded p-1 text-gray-500 hover:bg-gray-200"
                                                >
                                                    {isExpanded ? (
                                                        <ChevronDown size={14} />
                                                    ) : (
                                                        <ChevronRight size={14} />
                                                    )}
                                                </button>
                                            ) : isGroup ? (
                                                <div className="w-6 shrink-0" />
                                            ) : null}
                                            {/* 인라인 편집 */}
                                            {editingTaskId === task.id ? (
                                                <input
                                                    ref={editInputRef}
                                                    type="text"
                                                    value={editingName}
                                                    onChange={(e) => setEditingName(e.target.value)}
                                                    onKeyDown={handleEditKeyDown}
                                                    onBlur={handleSaveEdit}
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="w-full rounded border border-blue-400 bg-white px-1 py-0.5 text-sm font-normal text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                                />
                                            ) : (
                                                <span
                                                    className={`truncate text-sm ${
                                                        isGroup
                                                            ? 'font-normal text-gray-500 italic cursor-text'
                                                            : 'text-gray-700'
                                                    }`}
                                                    onDoubleClick={(e) => {
                                                        if (onTaskUpdate) {
                                                            e.stopPropagation();
                                                            handleStartEdit(task);
                                                        }
                                                    }}
                                                    title={onTaskUpdate ? '더블클릭하여 이름 편집' : undefined}
                                                >
                                                    {task.name}
                                                </span>
                                            )}
                                        </div>

                                        {/* Pre Indirect Work Days Input (선간접) */}
                                        <div
                                            className="flex shrink-0 items-center justify-center border-r border-gray-100 px-1"
                                            style={{ width: columns[1].width }}
                                        >
                                            {task.task ? (
                                                <input
                                                    type="text"
                                                    inputMode="numeric"
                                                    pattern="[0-9]*"
                                                    className="w-full max-w-[45px] rounded border border-gray-300 bg-blue-50 px-1 py-1 text-center text-xs text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                                    value={task.task.indirectWorkDaysPre}
                                                    onChange={(e) => {
                                                        const value = e.target.value.replace(/[^0-9]/g, '');
                                                        const val = parseInt(value) || 0;
                                                        handleDurationChange(task, 'indirectWorkDaysPre', val);
                                                    }}
                                                    onKeyDown={(e) => {
                                                        if (e.key === '-' || e.key === 'e' || e.key === '+' || e.key === '.') {
                                                            e.preventDefault();
                                                        }
                                                    }}
                                                    title="선 간접작업일 (바 드래그로도 조절 가능)"
                                                />
                                            ) : (
                                                <span className="text-xs text-gray-400">-</span>
                                            )}
                                        </div>

                                        {/* Net Work Days Input (순작업) */}
                                        <div
                                            className="flex shrink-0 items-center justify-center border-r border-gray-100 px-1"
                                            style={{ width: columns[2].width }}
                                        >
                                            {task.task ? (
                                                <input
                                                    type="text"
                                                    inputMode="numeric"
                                                    pattern="[0-9]*"
                                                    className="w-full max-w-[45px] rounded border border-gray-300 bg-red-50 px-1 py-1 text-center text-xs text-gray-800 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                                                    value={task.task.netWorkDays}
                                                    onChange={(e) => {
                                                        const value = e.target.value.replace(/[^0-9]/g, '');
                                                        const val = parseInt(value) || 0;
                                                        handleDurationChange(task, 'netWorkDays', val);
                                                    }}
                                                    onKeyDown={(e) => {
                                                        if (e.key === '-' || e.key === 'e' || e.key === '+' || e.key === '.') {
                                                            e.preventDefault();
                                                        }
                                                    }}
                                                    title="순작업일"
                                                />
                                            ) : (
                                                <span className="text-xs text-gray-400">-</span>
                                            )}
                                        </div>

                                        {/* Post Indirect Work Days Input (후간접) */}
                                        <div
                                            className="flex shrink-0 items-center justify-center border-r border-gray-100 px-1"
                                            style={{ width: columns[3].width }}
                                        >
                                            {task.task ? (
                                                <input
                                                    type="text"
                                                    inputMode="numeric"
                                                    pattern="[0-9]*"
                                                    className="w-full max-w-[45px] rounded border border-gray-300 bg-blue-50 px-1 py-1 text-center text-xs text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                                    value={task.task.indirectWorkDaysPost}
                                                    onChange={(e) => {
                                                        const value = e.target.value.replace(/[^0-9]/g, '');
                                                        const val = parseInt(value) || 0;
                                                        handleDurationChange(task, 'indirectWorkDaysPost', val);
                                                    }}
                                                    onKeyDown={(e) => {
                                                        if (e.key === '-' || e.key === 'e' || e.key === '+' || e.key === '.') {
                                                            e.preventDefault();
                                                        }
                                                    }}
                                                    title="후 간접작업일 (바 드래그로도 조절 가능)"
                                                />
                                            ) : (
                                                <span className="text-xs text-gray-400">-</span>
                                            )}
                                        </div>

                                        {/* Start Date */}
                                        <div
                                            className="flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-gray-500"
                                            style={{ width: columns[4].width }}
                                        >
                                            {format(task.startDate, 'yyyy-MM-dd')}
                                        </div>

                                        {/* End Date */}
                                        <div
                                            className="flex shrink-0 items-center justify-center text-xs text-gray-500"
                                            style={{ width: columns[5].width }}
                                        >
                                            {format(task.endDate, 'yyyy-MM-dd')}
                                        </div>
                                    </div>
                                );
                            })}

                            {/* 새 Task 입력 행 */}
                            {isAddingTask && activeCPId && (
                                <GanttSidebarNewTaskForm
                                    columns={columns}
                                    tasks={tasks}
                                    activeCPId={activeCPId}
                                    onTaskCreate={onTaskCreate}
                                    onCancel={onCancelAddTask || (() => {})}
                                    isVirtualized={isVirtualized}
                                    virtualRowIndex={tasks.length}
                                />
                            )}
                        </div>
                </div>

                {/* Context Menu */}
                {contextMenu && (
                    <GanttSidebarContextMenu
                        x={contextMenu.x}
                        y={contextMenu.y}
                        taskId={contextMenu.taskId}
                        selectedTaskIds={selectedTaskIds}
                        tasks={tasks}
                        onTaskGroup={onTaskGroup}
                        onTaskUngroup={onTaskUngroup}
                        onTaskDelete={onTaskDelete}
                        onStartRename={handleStartRename}
                        onClose={() => setContextMenu(null)}
                        onDeselect={() => setSelectedTaskIds(new Set())}
                    />
                )}
            </div>
        );
    }
);

GanttSidebar.displayName = 'GanttSidebar';
