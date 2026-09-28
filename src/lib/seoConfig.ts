/**
 * Central SEO configuration: canonical site URL, default social image, and the
 * static route list used by both the sitemap generator and the prerender script.
 */

export const SITE_URL = 'https://hif-india.web.app'
export const SITE_NAME = 'HIF INDIA'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-image.png?v=20260917b`
export const DEFAULT_TITLE = 'HIF INDIA'
export const DEFAULT_DESCRIPTION =
  'HIF is a registered grassroots humanitarian NGO in Mangaluru. 36 Ashiyana homes built, 176 masjids revived, 225+ orphans nurtured, and free MEDIBANK medical equipment — 100% direct impact.'

/** Locales that get a URL prefix. English ('en') is the unprefixed default. */
export const LOCALES = ['kn', 'hi'] as const
export type LocaleCode = (typeof LOCALES)[number]
export const ALL_LANGUAGE_CODES = ['en', ...LOCALES] as const

/**
 * Static (non-dynamic) route paths, unprefixed. Dynamic project/activity
 * detail routes are appended separately by consumers using data from
 * `hifData.ts`, since they are not statically known here.
 */
export const STATIC_ROUTES = [
  '/',
  '/about',
  '/projects',
  '/activities',
  '/gallery',
  '/get-involved',
  '/contact'
]
