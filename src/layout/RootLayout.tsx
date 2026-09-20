import React, { useLayoutEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from '../components/common/Navbar'
import { Footer } from '../components/common/Footer'
import { DonateModal } from '../components/common/DonateModal'
import { DonateProvider } from '../context/DonateContext'
import { buildOrganizationJsonLd } from '../lib/structuredData'
import { trackPageView } from '../lib/analytics'

function scrollWindowToTop() {
  window.scrollTo(0, 0)
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
}

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
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

  useLayoutEffect(() => {
    // Deferred a tick so this fires after the route's <Seo> has set document.title.
    const id = window.setTimeout(() => trackPageView(pathname, document.title), 0)
    return () => window.clearTimeout(id)
  }, [pathname])

  return null
}

export const RootLayout: React.FC = () => {
  return (
    <DonateProvider>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(buildOrganizationJsonLd())}</script>
      </Helmet>
      <ScrollToTop />
      <PageViewTracker />
      <div className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text-main)] transition-colors duration-300">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
      <DonateModal />
    </DonateProvider>
  )
}
