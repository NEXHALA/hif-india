/**
 * Post-build prerendering step: boots a static preview server over the
 * freshly built `dist/`, visits every route (in every language) with a
 * headless browser, and writes the fully-rendered HTML back into
 * `dist/<route>/index.html`.
 *
 * This is what makes link-preview bots (WhatsApp, Facebook, LinkedIn,
 * Twitter/X, Slack) and any crawler that doesn't execute JavaScript see the
 * correct per-page <title>, description, and Open Graph image instead of
 * the one generic shell in index.html — Googlebot already executes JS, but
 * most social-card fetchers and simple bots do not.
 *
 * Runs automatically after `npm run build` (see the `postbuild` script in
 * package.json). Failures for individual routes are logged but do not fail
 * the whole build, so a broken prerender never blocks a deploy.
 */
import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import puppeteer from 'puppeteer'
import { preview } from 'vite'
import { getAllLocalizedRoutes } from '../src/lib/allRoutes'

const rootDir = fileURLToPath(new URL('..', import.meta.url))
const distDir = join(rootDir, 'dist')
// Prerendered HTML is written here first, never directly into `dist/`, so the
// preview server's SPA-fallback (which serves `dist/index.html` for any
// not-yet-crawled route) always sees the pristine, un-prerendered shell for
// the entire crawl — otherwise a route prerendered early (e.g. `/`) would
// pollute the fallback shell for every route crawled after it.
const stagingDir = join(rootDir, '.prerender-staging')
const PORT = 4610
const HOST = '127.0.0.1'

async function main() {
  if (!existsSync(distDir)) {
    console.warn('[prerender] dist/ not found — skipping (run `npm run build` first).')
    return
  }

  const routes = getAllLocalizedRoutes()
  console.log(`[prerender] Prerendering ${routes.length} routes...`)

  rmSync(stagingDir, { recursive: true, force: true })
  mkdirSync(stagingDir, { recursive: true })

  const server = await preview({
    root: rootDir,
    preview: { port: PORT, host: HOST, strictPort: true }
  })

  let browser: Awaited<ReturnType<typeof puppeteer.launch>> | undefined
  let ok = 0
  let failed = 0

  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    })

    for (const route of routes) {
      const page = await browser.newPage()
      try {
        const url = `http://${HOST}:${PORT}${route}`
        await page.goto(url, { waitUntil: 'networkidle0', timeout: 45000 })
        // Give React a brief extra moment for any post-idle state updates (e.g. locale sync effects).
        await new Promise((resolve) => setTimeout(resolve, 150))
        // React Router speculatively injects <link rel="modulepreload"> tags
        // for lazy route chunks, resolved against the page's real origin —
        // which, during prerendering, is this temporary local preview
        // server. Rewrite them to root-relative paths so the shipped HTML
        // doesn't point back at localhost.
        const html = (await page.content()).replaceAll(`http://${HOST}:${PORT}`, '')

        const outDir = route === '/' ? stagingDir : join(stagingDir, route.replace(/^\//, ''))
        mkdirSync(outDir, { recursive: true })
        writeFileSync(join(outDir, 'index.html'), html)
        ok++
      } catch (err) {
        failed++
        console.error(`[prerender] Failed to prerender "${route}":`, (err as Error).message)
      } finally {
        await page.close()
      }
    }
  } finally {
    await browser?.close()
    await new Promise<void>((resolve) => server.httpServer.close(() => resolve()))
  }

  // Only now — after every route has been crawled against the pristine
  // shell — copy the staged, fully-rendered HTML files into `dist/`.
  cpSync(stagingDir, distDir, { recursive: true })
  rmSync(stagingDir, { recursive: true, force: true })

  console.log(`[prerender] Done. ${ok} succeeded, ${failed} failed, out of ${routes.length} routes.`)
}

main().catch((err) => {
  console.error('[prerender] Fatal error:', err)
  // Non-zero exit only on a fatal (non-per-route) failure; keeps a deploy
  // from silently shipping a completely broken prerender.
  process.exitCode = 1
})
