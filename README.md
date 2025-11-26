# SA Gantt Library

A high-performance, customizable Gantt chart library for React, built with Vite, Zustand, and TanStack Virtual.

## Features

- **High Performance**: Uses virtualization to render large datasets efficiently.
- **Customizable**: Built with Tailwind CSS for easy styling.
- **Interactive**: Supports drag-and-drop for task scheduling and resizing.
- **Dependency Management**: Visualizes task dependencies with SVG lines.
- **Zoom Levels**: Supports Day, Week, and Month views.

## Installation

```bash
npm install sa-gantt-lib
# or
yarn add sa-gantt-lib
```

## Usage

```tsx
import { GanttRoot, GanttTask, GanttLink } from 'sa-gantt-lib';
import 'sa-gantt-lib/dist/style.css'; // If styles are bundled

const tasks: GanttTask[] = [
    {
        id: '1',
        text: 'Task 1',
        start_date: new Date('2023-01-01'),
        end_date: new Date('2023-01-05'),
        parent: 0,
        progress: 0.5
    }
];

const links: GanttLink[] = [];

function App() {
    return (
        <div style={{ height: '500px' }}>
            <GanttRoot tasks={tasks} links={links} />
        </div>
    );
}
```

## Development

1. Clone the repository.
2. Install dependencies: `npm install`
3. Run dev server: `npm run dev`
4. Build library: `npm run build`
