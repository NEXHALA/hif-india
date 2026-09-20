import { HIF_ACTIVITIES, HIF_PROJECTS } from '../data/hifData'
import { localizePath } from './localePaths'
import { ALL_LANGUAGE_CODES, STATIC_ROUTES } from './seoConfig'

/** Mirrors the id -> URL slug mapping used by ActivityCard / ActivityDetailPage. */
export const ACTIVITY_SLUGS: Record<string, string> = {
  'hif-medical-cell': 'medical-cell',
  'hif-education-wing': 'education-wing',
  'hif-youth-wing': 'youth-wing'
}

/** Every canonical (unprefixed, English) route in the app, static + dynamic. */
export function getCanonicalRoutes(): string[] {
  return [
    ...STATIC_ROUTES,
    ...HIF_PROJECTS.map((p) => `/projects/${p.id}`),
    ...HIF_ACTIVITIES.map((a) => `/activities/${ACTIVITY_SLUGS[a.id] ?? a.id}`)
  ]
}

/** Every route in the app across all supported languages (used by the sitemap and prerender scripts). */
export function getAllLocalizedRoutes(): string[] {
  const canonical = getCanonicalRoutes()
  return canonical.flatMap((route) => ALL_LANGUAGE_CODES.map((lang) => localizePath(route, lang) || '/'))
}
