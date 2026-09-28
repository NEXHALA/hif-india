import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Self-hosted fonts (replaces Google Fonts stylesheet in index.html)
import '@fontsource/fraunces/300.css'
import '@fontsource/fraunces/400.css'
import '@fontsource/fraunces/500.css'
import '@fontsource/fraunces/600.css'
import '@fontsource/fraunces/700.css'
import '@fontsource/fraunces/800.css'
import '@fontsource/fraunces/500-italic.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/800.css'
import '@fontsource/noto-sans-kannada/400.css'
import '@fontsource/noto-sans-kannada/500.css'
import '@fontsource/noto-sans-kannada/600.css'
import '@fontsource/noto-sans-kannada/700.css'
import '@fontsource/noto-serif-kannada/500.css'
import '@fontsource/noto-serif-kannada/600.css'
import '@fontsource/noto-serif-kannada/700.css'
import '@fontsource/noto-sans-devanagari/400.css'
import '@fontsource/noto-sans-devanagari/500.css'
import '@fontsource/noto-sans-devanagari/600.css'
import '@fontsource/noto-sans-devanagari/700.css'
import '@fontsource/noto-serif-devanagari/500.css'
import '@fontsource/noto-serif-devanagari/600.css'
import '@fontsource/noto-serif-devanagari/700.css'

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
