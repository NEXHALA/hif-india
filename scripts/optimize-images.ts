/**
 * Generates modern WebP siblings for every JPG/PNG under `public/images/`.
 * Non-destructive: original files are never modified or removed, so
 * existing hardcoded image paths keep working unchanged; components can
 * progressively adopt <picture> with a `.webp` source for a smaller,
 * faster-loading first paint (this is applied to the homepage hero image,
 * the site's LCP element, in src/components/home/Hero.tsx).
 *
 * Runs automatically before every `npm run build` (see the `prebuild`
 * script in package.json), so the generated `.webp` files are always fresh
 * and never need to be committed to git (see .gitignore). Re-run manually
 * with `npm run optimize:images` any time during local development.
 */
import { existsSync, statSync } from 'node:fs'
import { readdir } from 'node:fs/promises'
import { extname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const imagesDir = fileURLToPath(new URL('../public/images', import.meta.url))
const SOURCE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png'])
const WEBP_QUALITY = 82

async function walk(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = await Promise.all(
    entries.map((entry) => {
      const fullPath = join(dir, entry.name)
      return entry.isDirectory() ? walk(fullPath) : Promise.resolve([fullPath])
    })
  )
  return files.flat()
}

async function main() {
  const allFiles = await walk(imagesDir)
  const sourceFiles = allFiles.filter((f) => SOURCE_EXTENSIONS.has(extname(f).toLowerCase()))

  let converted = 0
  let skipped = 0
  let failed = 0

  for (const file of sourceFiles) {
    const outPath = `${file.slice(0, -extname(file).length)}.webp`

    if (existsSync(outPath) && statSync(outPath).mtimeMs >= statSync(file).mtimeMs) {
      skipped++
      continue
    }

    try {
      await sharp(file).webp({ quality: WEBP_QUALITY }).toFile(outPath)
      converted++
    } catch (err) {
      failed++
      console.error(`[optimize-images] Failed to convert ${file}:`, (err as Error).message)
    }
  }

  console.log(
    `[optimize-images] Done. ${converted} converted, ${skipped} already up to date, ${failed} failed (out of ${sourceFiles.length} source images).`
  )
}

main()
