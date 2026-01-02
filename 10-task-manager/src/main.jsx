import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LocalStorageProvider from './context/LocalStorageProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LocalStorageProvider>
      <App />
    </LocalStorageProvider>
  </StrictMode>,
)
