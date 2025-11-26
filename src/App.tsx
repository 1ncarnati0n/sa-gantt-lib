import { useState } from 'react';
import { GanttRoot, GanttTask, GanttLink } from './lib';
import { addDays, startOfDay } from 'date-fns';

function App() {
    const today = startOfDay(new Date());

    const [tasks] = useState<GanttTask[]>([
        {
            id: '1',
            text: 'Project Planning',
            start_date: today,
            end_date: addDays(today, 5),
            parent: 0,
            progress: 0.5,
            type: 'task'
        },
        {
            id: '2',
            text: 'Requirements Analysis',
            start_date: addDays(today, 1),
            end_date: addDays(today, 6),
            parent: '1',
            progress: 0.2,
            type: 'task'
        },
        {
            id: '3',
            text: 'Design Phase',
            start_date: addDays(today, 6),
            end_date: addDays(today, 10),
            parent: 0,
            progress: 0,
            type: 'task'
        }
    ]);

    const [links] = useState<GanttLink[]>([
        { id: 'l1', source: '1', target: '3', type: '0' }
    ]);

    return (
        <div className="p-8 h-screen bg-gray-50">
            <h1 className="text-2xl font-bold mb-4">SA Gantt Library Test</h1>
            <div className="h-[600px] bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <GanttRoot tasks={tasks} links={links} />
            </div>
        </div>
    );
}

export default App;
