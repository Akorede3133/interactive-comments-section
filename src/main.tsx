import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AppProvider } from './components/context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AppProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppProvider>
)
