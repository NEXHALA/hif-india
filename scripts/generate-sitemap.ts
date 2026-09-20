/**
 * Generates public/sitemap.xml at build time, covering every static route
 * and every dynamic project/activity detail page, in all three supported
 * languages, with hreflang alternate links so each language version can be
 * discovered and indexed independently.
 *
 * Runs automatically before `npm run build` (see the `prebuild` script in
 * package.json). Output is written into `public/` so Vite copies it as-is
 * into `dist/` during the build.
 */
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { getCanonicalRoutes } from '../src/lib/allRoutes'
import { localizePath } from '../src/lib/localePaths'
import { ALL_LANGUAGE_CODES, SITE_URL } from '../src/lib/seoConfig'

const allRoutes = getCanonicalRoutes()
const lastmod = new Date().toISOString().slice(0, 10)

const urlBlocks = allRoutes.flatMap((route) =>
  ALL_LANGUAGE_CODES.map((lang) => {
    const loc = `${SITE_URL}${localizePath(route, lang) || '/'}`
    const alternates = ALL_LANGUAGE_CODES.map(
      (altLang) =>
        `    <xhtml:link rel="alternate" hreflang="${altLang}" href="${SITE_URL}${localizePath(route, altLang) || '/'}" />`
    ).join('\n')
    const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${route}" />`

    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n${alternates}\n${xDefault}\n  </url>`
  })
)

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urlBlocks.join('\n')}\n</urlset>\n`

const outPath = fileURLToPath(new URL('../public/sitemap.xml', import.meta.url))
writeFileSync(outPath, xml)

console.log(`[generate-sitemap] Wrote ${urlBlocks.length} URL entries (${allRoutes.length} routes × ${ALL_LANGUAGE_CODES.length} languages) to public/sitemap.xml`)
