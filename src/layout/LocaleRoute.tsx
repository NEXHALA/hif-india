import React, { useLayoutEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import type { Language } from '../data/translations'

/**
 * Makes the URL the source of truth for the active language: syncs
 * LanguageContext to whichever locale segment matched the current route
 * (English routes are unprefixed) so that `/about` always renders in
 * English and `/kn/about` / `/hi/about` always render in Kannada/Hindi —
 * regardless of a previously stored language preference. This is required
 * for crawlers to discover and index each language version independently.
 */
export const LocaleRoute: React.FC<{ lang: Language; children: React.ReactNode }> = ({ lang, children }) => {
  const { language, setLanguage } = useLanguage()

  useLayoutEffect(() => {
    if (language !== lang) setLanguage(lang)
    // Only re-sync when the route's language changes, not on every context update.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang])

  return <>{children}</>
}
