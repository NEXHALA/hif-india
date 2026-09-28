import React, { lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { MotionConfig } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'
import { RootLayout } from './layout/RootLayout'
import { LocaleRoute } from './layout/LocaleRoute'
import { LOCALES } from './lib/seoConfig'
import { ROUTE_LOADERS } from './lib/routePrefetch'
import type { Language } from './data/translations'

const HomePage = lazy(ROUTE_LOADERS['/']!)
const AboutPage = lazy(ROUTE_LOADERS['/about']!)
const ProjectsPage = lazy(ROUTE_LOADERS['/projects']!)
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'))
const ActivitiesPage = lazy(ROUTE_LOADERS['/activities']!)
const ActivityDetailPage = lazy(() => import('./pages/ActivityDetailPage'))
const GalleryPage = lazy(ROUTE_LOADERS['/gallery']!)
const GetInvolvedPage = lazy(ROUTE_LOADERS['/get-involved']!)
const ContactPage = lazy(ROUTE_LOADERS['/contact']!)
const TermsPage = lazy(ROUTE_LOADERS['/terms']!)
const PrivacyPage = lazy(ROUTE_LOADERS['/privacy-policy']!)
const RefundPage = lazy(ROUTE_LOADERS['/refund-policy']!)
const CancellationPage = lazy(ROUTE_LOADERS['/cancellation-policy']!)
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

/** Unprefixed ("canonical", English) page paths, mirrored under each locale prefix below. */
const PAGES: { path: string; Component: React.LazyExoticComponent<React.ComponentType> }[] = [
  { path: '/', Component: HomePage },
  { path: '/about', Component: AboutPage },
  { path: '/projects', Component: ProjectsPage },
  { path: '/projects/:projectId', Component: ProjectDetailPage },
  { path: '/activities', Component: ActivitiesPage },
  { path: '/activities/:activityId', Component: ActivityDetailPage },
  { path: '/gallery', Component: GalleryPage },
  { path: '/get-involved', Component: GetInvolvedPage },
  { path: '/contact', Component: ContactPage },
  { path: '/terms', Component: TermsPage },
  { path: '/privacy-policy', Component: PrivacyPage },
  { path: '/refund-policy', Component: RefundPage },
  { path: '/cancellation-policy', Component: CancellationPage }
]

function localizedRoutePath(lang: Language, path: string): string {
  const prefix = lang === 'en' ? '' : `/${lang}`
  return path === '/' ? prefix || '/' : `${prefix}${path}`
}

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <LanguageProvider>
          <MotionConfig reducedMotion="user">
            <BrowserRouter>
              <Routes>
                <Route element={<RootLayout />}>
                  {PAGES.map(({ path, Component }) => (
                    <Route
                      key={`en-${path}`}
                      path={localizedRoutePath('en', path)}
                      element={
                        <LocaleRoute lang="en">
                          <Component />
                        </LocaleRoute>
                      }
                    />
                  ))}
                  {LOCALES.map((lang) =>
                    PAGES.map(({ path, Component }) => (
                      <Route
                        key={`${lang}-${path}`}
                        path={localizedRoutePath(lang, path)}
                        element={
                          <LocaleRoute lang={lang}>
                            <Component />
                          </LocaleRoute>
                        }
                      />
                    ))
                  )}
                  <Route path="*" element={<NotFoundPage />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </MotionConfig>
        </LanguageProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
