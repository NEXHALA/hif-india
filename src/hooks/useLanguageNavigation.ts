import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { localizePath, stripLocalePrefix } from '../lib/localePaths'
import type { Language } from '../data/translations'

/**
 * Navigates to the locale-prefixed equivalent of the current URL when the
 * user picks a different language, so the URL (not just localStorage) is the
 * source of truth for which language a page is served in — required for
 * search engines to discover and index each language independently.
 */
export function useLanguageNavigation() {
  const navigate = useNavigate()
  const location = useLocation()
  const { language } = useLanguage()

  const changeLanguage = useCallback(
    (lang: Language) => {
      if (lang === language) return
      const canonicalPath = stripLocalePrefix(location.pathname)
      const target = `${localizePath(canonicalPath, lang)}${location.search}${location.hash}`
      navigate(target)
    },
    [language, location.hash, location.pathname, location.search, navigate]
  )

  return { changeLanguage }
}
