import { useEffect, useRef, type RefObject } from 'react'
import { lockBodyScroll, unlockBodyScroll } from '../lib/bodyScrollLock'

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

/**
 * Dialog a11y: body scroll lock, focus into the panel, Tab trap, restore
 * focus on close, and Escape to dismiss. Callers still own open/close state.
 */
export function useDialogBehavior(
  isOpen: boolean,
  onClose: () => void,
  dialogRef: RefObject<HTMLElement | null>
) {
  const previouslyFocused = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!isOpen) return

    previouslyFocused.current = document.activeElement as HTMLElement | null
    lockBodyScroll()

    const focusFirst = () => {
      const node = dialogRef.current
      if (!node) return
      const focusables = node.querySelectorAll<HTMLElement>(FOCUSABLE)
      ;(focusables[0] ?? node).focus()
    }
    // Defer so AnimatePresence / layout can mount the dialog node first.
    const focusId = window.setTimeout(focusFirst, 0)

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }
      if (event.key !== 'Tab' || !dialogRef.current) return

      const focusables = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (el) => !el.hasAttribute('disabled') && el.tabIndex !== -1
      )
      if (focusables.length === 0) {
        event.preventDefault()
        return
      }
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      const active = document.activeElement as HTMLElement | null

      if (event.shiftKey) {
        if (active === first || !dialogRef.current.contains(active)) {
          event.preventDefault()
          last.focus()
        }
      } else if (active === last || !dialogRef.current.contains(active)) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.clearTimeout(focusId)
      window.removeEventListener('keydown', onKeyDown)
      unlockBodyScroll()
      previouslyFocused.current?.focus?.()
      previouslyFocused.current = null
    }
  }, [isOpen, onClose, dialogRef])
}
