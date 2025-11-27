import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { useConstructionStore } from './store/useConstructionStore.ts';

// Assign store to window for debugging/testing
(window as any).store = useConstructionStore;

const Main = () => {
    useEffect(() => {
        // Initial calculation
        useConstructionStore.getState().recalculateAll();
    }, []);

    return <App />;
};

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>,
)
