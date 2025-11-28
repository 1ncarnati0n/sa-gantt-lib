import { create } from 'zustand';
import { 
  ConstructionNode, 
  Dependency, 
  ViewMode, 
  CurrentView, 
  CalendarConfig,
  WbsLevel,
  AnchorPoint
} from '../types';
import { addDays, startOfDay, parseISO } from 'date-fns';
import { calculateNetWorkEndDate } from '../utils/calendarUtils';

interface GanttState {
  // =================================
  // Data State
  // =================================
  nodes: ConstructionNode[];
  dependencies: Dependency[];
  milestones: ConstructionNode[]; // milestones are essentially nodes with type='milestone'
  calendar: CalendarConfig;

  // =================================
  // View State
  // =================================
  currentView: CurrentView;
  currentCPId: string | null;     // Detail View에서 선택된 CP ID
  viewMode: ViewMode;
  
  // Time Range
  startDate: Date | null;
  endDate: Date | null;

  // Layout Settings
  columnWidth: number;
  rowHeight: number;

  // =================================
  // UI Interaction State
  // =================================
  scrollX: number;
  scrollY: number;
  selectedNodeId: string | null;
  hoveredNodeId: string | null;
  expandedNodeIds: Set<string>;
  
  // Drag & Drop
  isDragging: boolean;
  dragSource: { nodeId: string, anchor: AnchorPoint } | null;
  dragTarget: { nodeId: string, anchor: AnchorPoint } | null;

  // =================================
  // Actions
  // =================================
  // Data Setters
  setNodes: (nodes: ConstructionNode[]) => void;
  setDependencies: (deps: Dependency[]) => void;
  setCalendar: (config: CalendarConfig) => void;
  
  // View Management
  switchToMasterView: () => void;
  switchToDetailView: (cpId: string) => void;
  setViewMode: (mode: ViewMode) => void;
  
  // Node Operations
  toggleNode: (nodeId: string) => void;
  updateNode: (nodeId: string, updates: Partial<ConstructionNode>) => void;
  selectNode: (nodeId: string | null) => void;
  setHoveredNode: (nodeId: string | null) => void;
  expandAll: () => void;
  collapseAll: () => void;
  
  // Data Accessors (Selector-like)
  getVisibleNodes: () => ConstructionNode[];
  
  // Drag Actions
  setDragSource: (source: { nodeId: string, anchor: AnchorPoint } | null) => void;
  setDragTarget: (target: { nodeId: string, anchor: AnchorPoint } | null) => void;
}

const DEFAULT_CALENDAR: CalendarConfig = {
  nonWorkingDays: [],
  weekendPolicy: 'skip',
  holidayPolicy: 'skip',
};

export const useGanttStore = create<GanttState>((set, get) => ({
  // Initial Data
  nodes: [],
  dependencies: [],
  milestones: [],
  calendar: DEFAULT_CALENDAR,

  // Initial View
  currentView: 'master',
  currentCPId: null,
  viewMode: 'month', // Master view defaults to month
  startDate: null,
  endDate: null,
  
  // Initial Layout
  columnWidth: 30, // Month view default
  rowHeight: 40,
  
  // Initial UI
  scrollX: 0,
  scrollY: 0,
  selectedNodeId: null,
  hoveredNodeId: null,
  expandedNodeIds: new Set(),
  
  isDragging: false,
  dragSource: null,
  dragTarget: null,

  // Actions
  setNodes: (nodes) => {
    // Separate milestones if needed, or keep them in nodes. 
    // Here we'll keep them in nodes but can filter for specific UI.
    // Initialize date range based on Master View nodes (Level 1)
    
    // Sort by order/index if possible
    // nodes.sort((a, b) => a.order - b.order);

    const masterNodes = nodes.filter(n => n.wbsLevel === 1);
    
    if (masterNodes.length === 0) {
      set({ nodes, startDate: new Date(), endDate: addDays(new Date(), 30) });
      return;
    }

    const startDates = masterNodes.map(n => parseISO(n.startDate).getTime());
    const endDates = masterNodes.map(n => parseISO(n.endDate).getTime());

    const minDate = startOfDay(new Date(Math.min(...startDates)));
    const maxDate = startOfDay(new Date(Math.max(...endDates)));

    set({
      nodes,
      startDate: addDays(minDate, -30), // Buffer
      endDate: addDays(maxDate, 30),
      // Auto expand root nodes if needed
      // expandedNodeIds: new Set(nodes.filter(n => n.depth === 0).map(n => n.id))
    });
  },

  setDependencies: (deps) => set({ dependencies: deps }),
  setCalendar: (config) => set({ calendar: config }),

  switchToMasterView: () => {
    const { nodes } = get();
    // Filter Level 1
    const masterNodes = nodes.filter(n => n.wbsLevel === 1);
    
    if (masterNodes.length === 0) return;

    const startDates = masterNodes.map(n => parseISO(n.startDate).getTime());
    const endDates = masterNodes.map(n => parseISO(n.endDate).getTime());

    set({
      currentView: 'master',
      currentCPId: null,
      viewMode: 'month',
      columnWidth: 30,
      startDate: addDays(new Date(Math.min(...startDates)), -30),
      endDate: addDays(new Date(Math.max(...endDates)), 30),
      expandedNodeIds: new Set(), // Reset expansion or keep? Let's reset for clean view
    });
  },

  switchToDetailView: (cpId) => {
    const { nodes } = get();
    const cpNode = nodes.find(n => n.id === cpId);
    if (!cpNode) return;

    // Find all descendants of this CP (Level 2)
    // Assuming flat list with parentId
    const detailNodes = nodes.filter(n => n.wbsLevel === 2 && n.parentId === cpId);
    
    // If no children, maybe fallback or show empty
    // Calculate range based on children
    let minTime = parseISO(cpNode.startDate).getTime();
    let maxTime = parseISO(cpNode.endDate).getTime();

    if (detailNodes.length > 0) {
      const startDates = detailNodes.map(n => parseISO(n.startDate).getTime());
      const endDates = detailNodes.map(n => parseISO(n.endDate).getTime());
      minTime = Math.min(...startDates);
      maxTime = Math.max(...endDates);
    }

    set({
      currentView: 'detail',
      currentCPId: cpId,
      viewMode: 'day', // Detail view usually day
      columnWidth: 50,
      startDate: addDays(new Date(minTime), -7),
      endDate: addDays(new Date(maxTime), 7),
      expandedNodeIds: new Set(nodes.map(n => n.id)), // Expand all in detail view by default?
    });
  },

  setViewMode: (mode) => {
    let width = 50;
    switch (mode) {
      case 'day': width = 50; break;
      case 'week': width = 40; break;
      case 'month': width = 30; break;
      case 'year': width = 60; break; // per month? or year cell
    }
    set({ viewMode: mode, columnWidth: width });
  },

  toggleNode: (nodeId) => set((state) => {
    const newExpanded = new Set(state.expandedNodeIds);
    if (newExpanded.has(nodeId)) {
      newExpanded.delete(nodeId);
    } else {
      newExpanded.add(nodeId);
    }
    return { expandedNodeIds: newExpanded };
  }),

  updateNode: (nodeId, updates) => set((state) => ({
    nodes: state.nodes.map(n => n.id === nodeId ? { ...n, ...updates } : n)
  })),

  selectNode: (nodeId) => set({ selectedNodeId: nodeId }),
  setHoveredNode: (nodeId) => set({ hoveredNodeId: nodeId }),

  expandAll: () => set((state) => ({
    expandedNodeIds: new Set(state.nodes.map(n => n.id))
  })),

  collapseAll: () => set({ expandedNodeIds: new Set() }),

  getVisibleNodes: () => {
    const state = get();
    const { nodes, currentView, currentCPId, expandedNodeIds } = state;

    if (currentView === 'master') {
      // Show Level 1 Nodes
      // Filter hierarchy
      // Only show if parent is expanded (if parent is also L1)
      // Or just show all L1 roots and their children if expanded
      
      const level1Nodes = nodes.filter(n => n.wbsLevel === 1);
      
      // Helper to check visibility
      const isVisible = (node: ConstructionNode): boolean => {
        if (!node.parentId) return true; // Root
        // Check if parent exists in L1 list
        const parent = level1Nodes.find(p => p.id === node.parentId);
        if (!parent) return true; // Implicit root or orphan
        
        return expandedNodeIds.has(parent.id) && isVisible(parent);
      };
      
      return level1Nodes.filter(isVisible);

    } else {
      // Detail View
      // Show only children of currentCPId (Level 2)
      if (!currentCPId) return [];
      
      // We might want to show the CP itself as a header? Or just tasks.
      // Usually just tasks.
      const level2Nodes = nodes.filter(n => n.wbsLevel === 2 && n.parentId === currentCPId);
      
      // If L2 has its own hierarchy (Sub-groups), apply expansion logic
      // Assuming 1 level depth for now in L2, or simple flat list
      return level2Nodes;
    }
  },
  
  setDragSource: (source) => set({ dragSource: source, isDragging: !!source }),
  setDragTarget: (target) => set({ dragTarget: target }),
}));
