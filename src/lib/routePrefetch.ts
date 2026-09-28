import type { ComponentType } from 'react'

type PageModule = { default: ComponentType }

/** Same dynamic imports used by App lazy routes — shared so hover prefetch hits the module cache. */
export const ROUTE_LOADERS: Record<string, () => Promise<PageModule>> = {
  '/': () => import('../pages/HomePage'),
  '/about': () => import('../pages/AboutPage'),
  '/projects': () => import('../pages/ProjectsPage'),
  '/activities': () => import('../pages/ActivitiesPage'),
  '/gallery': () => import('../pages/GalleryPage'),
  '/get-involved': () => import('../pages/GetInvolvedPage'),
  '/contact': () => import('../pages/ContactPage'),
  '/terms': () => import('../pages/legal/TermsPage'),
  '/privacy-policy': () => import('../pages/legal/PrivacyPage'),
  '/refund-policy': () => import('../pages/legal/RefundPage'),
  '/cancellation-policy': () => import('../pages/legal/CancellationPage')
}

const prefetched = new Set<string>()

/** Kick off a route chunk import once; safe to call repeatedly from hover/focus/touch. */
export function prefetchRoute(path: string): void {
  if (prefetched.has(path)) return
  const loader = ROUTE_LOADERS[path]
  if (!loader) return
  prefetched.add(path)
  void loader()
}

const NAV_IDLE_PATHS = [
  '/',
  '/about',
  '/projects',
  '/activities',
  '/gallery',
  '/get-involved',
  '/contact'
] as const

/**
 * After first paint, prefetch remaining primary-nav chunks one at a time during
 * idle time so a cold click is also fast without contending with the current page.
 */
export function idlePrefetchNavRoutes(excludePath?: string): () => void {
  const queue = NAV_IDLE_PATHS.filter((p) => p !== excludePath && !prefetched.has(p))
  if (queue.length === 0) return () => {}

  let cancelled = false
  let idleId: number | undefined
  let timeoutId: ReturnType<typeof setTimeout> | undefined

  const schedule = (fn: () => void) => {
    if (typeof window.requestIdleCallback === 'function') {
      idleId = window.requestIdleCallback(fn, { timeout: 2500 })
    } else {
      timeoutId = setTimeout(fn, 400)
    }
  }

  const runNext = () => {
    if (cancelled) return
    const next = queue.shift()
    if (!next) return
    prefetchRoute(next)
    if (queue.length > 0) schedule(runNext)
  }

  schedule(runNext)

  return () => {
    cancelled = true
    if (idleId !== undefined && typeof window.cancelIdleCallback === 'function') {
      window.cancelIdleCallback(idleId)
    }
    if (timeoutId !== undefined) clearTimeout(timeoutId)
  }
}
