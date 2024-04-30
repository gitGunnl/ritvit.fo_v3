import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

try {
  const rootElement = document.getElementById('root');
  if (!rootElement) throw new Error("Root element not found");
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
} catch (error) {
  console.error("Failed to render the React application:", error.message, error.stack);
}