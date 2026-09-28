import React, { lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { MotionConfig } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'
import { RootLayout } from './layout/RootLayout'
import { LocaleRoute } from './layout/LocaleRoute'
import { LOCALES } from './lib/seoConfig'
import type { Language } from './data/translations'

const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'))
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'))
const ActivitiesPage = lazy(() => import('./pages/ActivitiesPage'))
const ActivityDetailPage = lazy(() => import('./pages/ActivityDetailPage'))
const GalleryPage = lazy(() => import('./pages/GalleryPage'))
const GetInvolvedPage = lazy(() => import('./pages/GetInvolvedPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const TermsPage = lazy(() => import('./pages/legal/TermsPage'))
const PrivacyPage = lazy(() => import('./pages/legal/PrivacyPage'))
const RefundPage = lazy(() => import('./pages/legal/RefundPage'))
const CancellationPage = lazy(() => import('./pages/legal/CancellationPage'))
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
