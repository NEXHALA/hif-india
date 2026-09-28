import React, { useEffect, useState } from 'react'
import { MapPin } from 'lucide-react'
import { HIF_ORGANIZATION } from '../../data/hifData'
import { useLanguage } from '../../context/LanguageContext'
import { handleExternalAnchorClick } from '../../lib/openExternal'

const MAP_EMBED =
  'https://maps.google.com/maps?q=Masjid%20Ehsaan,%20Kankanady,%20Mangalore&t=&z=15&ie=UTF8&iwloc=&output=embed'
const MAP_EXTERNAL =
  'https://www.google.com/maps/search/?api=1&query=Masjid%20Ehsaan%2C%20Kankanady%2C%20Mangalore'

type OfflineMapProps = {
  title: string
  className?: string
  heightClassName?: string
}

/**
 * Shows the Maps iframe while online; when offline, shows the postal address
 * and an external “Open in Maps” link instead of an empty frame.
 */
export const OfflineMap: React.FC<OfflineMapProps> = ({
  title,
  className = '',
  heightClassName = 'h-64'
}) => {
  const { t } = useLanguage()
  const [online, setOnline] = useState(
    typeof navigator === 'undefined' ? true : navigator.onLine
  )

  useEffect(() => {
    const goOnline = () => setOnline(true)
    const goOffline = () => setOnline(false)
    window.addEventListener('online', goOnline)
    window.addEventListener('offline', goOffline)
    return () => {
      window.removeEventListener('online', goOnline)
      window.removeEventListener('offline', goOffline)
    }
  }, [])

  if (!online) {
    return (
      <div
        className={`rounded-xl border border-border bg-bg-alt p-5 flex flex-col justify-center gap-3 ${heightClassName} ${className}`}
      >
        <div className="flex items-start gap-2.5 text-sm text-text-muted">
          <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <span>{HIF_ORGANIZATION.address.full}</span>
        </div>
        <a
          href={MAP_EXTERNAL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleExternalAnchorClick}
          className="text-sm font-semibold text-primary hover:text-primary-deep"
        >
          {t('common.openInMaps', 'Open in Maps')}
        </a>
      </div>
    )
  }

  return (
    <div className={`rounded-xl overflow-hidden border border-border ${heightClassName} ${className}`}>
      <iframe title={title} src={MAP_EMBED} width="100%" height="100%" style={{ border: 0 }} loading="lazy" />
    </div>
  )
}
