import type { MouseEvent } from 'react'

declare global {
  interface Window {
    hifDesktop?: {
      openExternal: (url: string) => void
    }
  }
}

/**
 * Opens an external URL. In the Electron shell, routes through the privileged
 * preload bridge so the OS handles the link outside the app window. In the
 * browser, uses `window.open` and returns whether a window was created
 * (false when a popup blocker intervenes).
 */
export function openExternal(url: string): boolean {
  if (typeof window === 'undefined') return false

  if (window.hifDesktop?.openExternal) {
    window.hifDesktop.openExternal(url)
    return true
  }

  const opened = window.open(url, '_blank', 'noopener,noreferrer')
  return opened != null
}

/**
 * For `target="_blank"` anchors: in Electron, prevent default navigation and
 * shell out. In the browser, leave the anchor alone so popup blockers and
 * `rel="noopener noreferrer"` behave normally.
 */
export function handleExternalAnchorClick(event: MouseEvent<HTMLAnchorElement>): void {
  if (typeof window === 'undefined' || !window.hifDesktop) return
  const href = event.currentTarget.href
  if (!href) return
  event.preventDefault()
  openExternal(href)
}
