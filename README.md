# SA Gantt 


## Development

1. Clone the repository.
2. Install dependencies: `npm install`
3. Run dev server: `npm run dev`
4. Build library: `npm run build`

## Project Structure

```
sa-gantt-lib/
├── dist/                # Build output
├── docs/                # Documentation and reference images
├── src/
│   ├── components/      # React components
│   ├── data/            # Mock data and data generation
│   ├── lib/             # Core Gantt library logic
│   ├── store/           # State management (Zustand)
│   ├── styles/          # CSS and styling
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions
│   ├── App.tsx          # Example usage application
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML entry point
├── package.json         # Project dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```


## Gantt Components Structure

```
├── components/
│   ├── gantt/
│   │   ├── GanttGrid.tsx
│   │   ├── GanttTimeline.tsx
│   │   └── Gantt.tsx
│   └── milestone/
│       └── Milestone.tsx
├── data/
│   ├── mockData.ts
│   └── utils.ts
├── lib/
│   ├── utils.ts
│   └── types.ts
├── store/
│   └── useConstructionStore.ts
├── styles/
│   └── index.css
├── types/
│   └── gantt.ts
├── utils/
│   └── utils.ts
├── App.tsx
├── main.tsx
└── index.css

```

