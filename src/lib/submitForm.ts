/**
 * Build a WhatsApp link with optional prefilled text.
 * - With a phone: opens a chat with that number (`wa.me/...`).
 * - Without a phone: opens WhatsApp's share flow so the user picks a contact
 *   (`api.whatsapp.com/send?text=...`). Empty `wa.me/?text=` often just opens
 *   the app and skips the share picker, especially on desktop.
 * Phone may include + and spaces.
 */
export function buildWhatsAppUrl(phone: string, text: string): string {
  const digits = phone.replace(/\D/g, '')
  const encoded = encodeURIComponent(text.trim())

  if (!digits) {
    return encoded
      ? `https://api.whatsapp.com/send?text=${encoded}`
      : 'https://api.whatsapp.com/send'
  }

  return encoded
    ? `https://wa.me/${digits}?text=${encoded}`
    : `https://wa.me/${digits}`
}
