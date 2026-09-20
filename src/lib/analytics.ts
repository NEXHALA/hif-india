/**
 * Minimal, privacy-conscious GA4 loader. Entirely inert unless a
 * `VITE_GA_MEASUREMENT_ID` env var is configured (e.g. via a `.env.production`
 * file or the hosting provider's build environment), so local/dev builds and
 * forks never send analytics anywhere by default.
 *
 * To enable: create a GA4 property in Google Analytics, copy its
 * "Measurement ID" (looks like `G-XXXXXXXXXX`), and set
 * `VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX` as a build-time env var.
 */
declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined

let initialized = false

export function initAnalytics(): void {
  if (initialized || !GA_MEASUREMENT_ID || typeof document === 'undefined') return
  initialized = true

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args)
  }
  window.gtag('js', new Date())
  // Disable gtag.js's own automatic page_view (sent on load) since this is a
  // client-side-routed SPA; page views are instead tracked per-route below.
  window.gtag('config', GA_MEASUREMENT_ID, { send_page_view: false })
}

/** Sends a page_view event for the current route. Call on every route change. */
export function trackPageView(path: string, title?: string): void {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined' || !window.gtag) return
  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title,
    page_location: window.location.href
  })
}
