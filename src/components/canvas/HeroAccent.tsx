import React, { Suspense, lazy } from 'react'
import { ErrorBoundary } from '../common/ErrorBoundary'

// Lazy-loaded so the Three.js bundle never blocks first paint of the page.
const HeroAccentCanvas = lazy(() => import('./HeroAccentCanvas'))

export const HeroAccent: React.FC<{ className?: string }> = ({ className }) => (
  <ErrorBoundary compact>
    <Suspense fallback={null}>
      <HeroAccentCanvas className={className} />
    </Suspense>
  </ErrorBoundary>
)
