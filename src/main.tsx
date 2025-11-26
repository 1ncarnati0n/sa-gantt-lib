import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './lib/style.css' // Import library styles

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
