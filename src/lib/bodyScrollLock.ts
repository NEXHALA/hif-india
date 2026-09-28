let lockCount = 0
let previousOverflow = ''

/** Acquire a body scroll lock. Nested callers share one `overflow: hidden`. */
export function lockBodyScroll(): void {
  if (typeof document === 'undefined') return
  if (lockCount === 0) {
    previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
  }
  lockCount += 1
}

/** Release one lock. Overflow is restored only when the last lock is released. */
export function unlockBodyScroll(): void {
  if (typeof document === 'undefined') return
  if (lockCount === 0) return
  lockCount -= 1
  if (lockCount === 0) {
    document.body.style.overflow = previousOverflow
    previousOverflow = ''
  }
}
