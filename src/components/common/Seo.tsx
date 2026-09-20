import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import { LOCALE_PREFIXES, localizePath, stripLocalePrefix } from '../../lib/localePaths'
import { ALL_LANGUAGE_CODES, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from '../../lib/seoConfig'

export interface SeoProps {
  title: string
  description: string
  image?: string
  /** Overrides the canonical path (unprefixed, e.g. `/projects/xyz`). Defaults to the current route. */
  path?: string
  type?: 'website' | 'article'
  /** Structured data object(s) to embed as JSON-LD `<script>` tags. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
  noindex?: boolean
}

/**
 * Renders per-page <title>, meta description, canonical link, hreflang
 * alternates for every supported language, Open Graph / Twitter tags, and
 * optional JSON-LD structured data. Mounted once per page component so every
 * route gets unique, crawlable metadata instead of sharing the static tags
 * in index.html.
 */
export const Seo: React.FC<SeoProps> = ({
  title,
  description,
  image = DEFAULT_OG_IMAGE,
  path,
  type = 'website',
  jsonLd,
  noindex = false
}) => {
  const location = useLocation()
  const { language } = useLanguage()

  const canonicalPath = path ?? stripLocalePrefix(location.pathname)
  const localizedCanonicalPath = localizePath(canonicalPath, language)
  const canonicalUrl = `${SITE_URL}${localizedCanonicalPath === '' ? '/' : localizedCanonicalPath}`
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`
  const jsonLdList = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []

  return (
    <Helmet prioritizeSeoTags>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={canonicalUrl} />

      {/* hreflang alternates so search engines can index each language independently */}
      {ALL_LANGUAGE_CODES.map((lang) => (
        <link
          key={lang}
          rel="alternate"
          hrefLang={lang}
          href={`${SITE_URL}${localizePath(canonicalPath, lang) || '/'}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}${canonicalPath}`} />

      {/* OpenGraph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:locale" content={language === 'en' ? 'en_US' : language === 'kn' ? 'kn_IN' : 'hi_IN'} />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLdList.map((data, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  )
}

export { LOCALE_PREFIXES }
