import React from 'react'
import ReactDOM from 'react-dom/client' // Updated import
import App from './App'

// Create a root container
const root = ReactDOM.createRoot(document.getElementById('root'))

// Render the App component into the root container
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
