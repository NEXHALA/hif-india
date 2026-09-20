import React from 'react'
import { Link, NavLink, type LinkProps, type NavLinkProps } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import { localizePath } from '../../lib/localePaths'

/**
 * Drop-in replacement for react-router's `Link` that automatically prefixes
 * the target with the current language's URL prefix (e.g. `/about` becomes
 * `/kn/about` while browsing in Kannada). Keeps internal navigation and
 * crawlable hrefs consistent with the active locale.
 */
export const LocalizedLink = React.forwardRef<HTMLAnchorElement, LinkProps>(({ to, ...props }, ref) => {
  const { language } = useLanguage()
  const target = typeof to === 'string' ? localizePath(to, language) : to
  return <Link ref={ref} to={target} {...props} />
})
LocalizedLink.displayName = 'LocalizedLink'

export const LocalizedNavLink: React.FC<NavLinkProps> = ({ to, ...props }) => {
  const { language } = useLanguage()
  const target = typeof to === 'string' ? localizePath(to, language) : to
  return <NavLink to={target} {...props} />
}
