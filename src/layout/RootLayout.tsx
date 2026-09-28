import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from '../components/common/Navbar'
import { Footer } from '../components/common/Footer'
import { DonateModal } from '../components/common/DonateModal'
import { ErrorBoundary } from '../components/common/ErrorBoundary'
import { DonateProvider } from '../context/DonateContext'
import { useLanguage } from '../context/LanguageContext'
import { buildOrganizationJsonLd } from '../lib/structuredData'
import { trackPageView } from '../lib/analytics'
import { getLanguageFromPathname } from '../lib/localePaths'

function scrollWindowToTop() {
  // 'instant' is required here: the global `scroll-behavior: smooth` (for
  // in-page anchors) would otherwise turn this into an animated scroll that
  // glides through the freshly mounted page on every route change.
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
}

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation()

  React.useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    scrollWindowToTop()
    requestAnimationFrame(scrollWindowToTop)
  }, [pathname])

  return null
}

const PageViewTracker: React.FC = () => {
  const { pathname } = useLocation()

  React.useLayoutEffect(() => {
    // Deferred a tick so this fires after the route's <Seo> has set document.title.
    const id = window.setTimeout(() => trackPageView(pathname, document.title), 0)
    return () => window.clearTimeout(id)
  }, [pathname])

  return null
}

/** Keeps LanguageContext aligned with the URL for every route, including 404. */
const LocaleSync: React.FC = () => {
  const { pathname } = useLocation()
  const { language, setLanguage } = useLanguage()

  React.useLayoutEffect(() => {
    const fromPath = getLanguageFromPathname(pathname)
    if (language !== fromPath) setLanguage(fromPath)
    // Sync only when the path's language segment changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return null
}

const RouteFallback: React.FC = () => (
  <div className="mx-auto max-w-lg px-4 py-20 text-center" role="status" aria-live="polite">
    <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-emerald-600 border-t-transparent" />
    <p className="mt-4 text-sm font-medium text-text-muted">Loading…</p>
  </div>
)

export const RootLayout: React.FC = () => {
  return (
    <DonateProvider>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(buildOrganizationJsonLd())}</script>
      </Helmet>
      <ScrollToTop />
      <PageViewTracker />
      <LocaleSync />
      <div className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text-main)] transition-colors duration-300">
        <Navbar />
        <main className="flex-1">
          <ErrorBoundary>
            <Suspense fallback={<RouteFallback />}>
              <Outlet />
            </Suspense>
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
      <DonateModal />
    </DonateProvider>
  )
}
