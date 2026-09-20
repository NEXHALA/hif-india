import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { applyDocumentLanguage, getStoredLanguage } from './lib/documentLanguage'
import { initAnalytics } from './lib/analytics'

applyDocumentLanguage(getStoredLanguage())
initAnalytics()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
