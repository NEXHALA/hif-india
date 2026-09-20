import type { Language } from '../data/translations'
import { LOCALES } from './seoConfig'

/** URL prefix for each supported language. English is unprefixed. */
export const LOCALE_PREFIXES: Record<Language, string> = {
  en: '',
  kn: '/kn',
  hi: '/hi'
}

/**
 * Strips a known locale prefix (e.g. `/kn`, `/hi`) from a pathname, returning
 * the unprefixed ("canonical", English) path. Non-prefixed paths are
 * returned unchanged.
 */
export function stripLocalePrefix(pathname: string): string {
  for (const lang of LOCALES) {
    const prefix = LOCALE_PREFIXES[lang]
    if (pathname === prefix) return '/'
    if (pathname.startsWith(`${prefix}/`)) return pathname.slice(prefix.length) || '/'
  }
  return pathname || '/'
}

/**
 * Prefixes an unprefixed ("canonical") path with the given language's
 * locale prefix. English paths are returned unchanged.
 */
export function localizePath(path: string, language: Language): string {
  const prefix = LOCALE_PREFIXES[language]
  if (!prefix) return path
  return path === '/' ? prefix : `${prefix}${path}`
}

/** Detects the language encoded in a pathname's prefix, if any. */
export function getLanguageFromPathname(pathname: string): Language {
  for (const lang of LOCALES) {
    const prefix = LOCALE_PREFIXES[lang]
    if (pathname === prefix || pathname.startsWith(`${prefix}/`)) return lang
  }
  return 'en'
}
