import { HIF_ORGANIZATION } from '../data/hifData'
import { DEFAULT_OG_IMAGE, SITE_URL } from './seoConfig'

/** NGO/NonProfit + Organization JSON-LD, rendered once on every page via RootLayout. */
export function buildOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: HIF_ORGANIZATION.name,
    alternateName: HIF_ORGANIZATION.fullName,
    url: SITE_URL,
    logo: DEFAULT_OG_IMAGE,
    image: DEFAULT_OG_IMAGE,
    description: HIF_ORGANIZATION.tagline,
    email: HIF_ORGANIZATION.contact.email,
    telephone: HIF_ORGANIZATION.contact.primaryPhone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: HIF_ORGANIZATION.address.street,
      addressLocality: HIF_ORGANIZATION.address.city,
      addressRegion: HIF_ORGANIZATION.address.state,
      postalCode: HIF_ORGANIZATION.address.pincode,
      addressCountry: 'IN'
    },
    sameAs: Object.values(HIF_ORGANIZATION.socials ?? {}).filter(Boolean)
  }
}

/** WebSite JSON-LD (enables sitelinks search box eligibility, entity consolidation). */
export function buildWebsiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: HIF_ORGANIZATION.name,
    url: SITE_URL
  }
}

export interface BreadcrumbEntry {
  name: string
  path: string
}

/** BreadcrumbList JSON-LD for detail pages (projects/:id, activities/:id, etc). */
export function buildBreadcrumbJsonLd(entries: BreadcrumbEntry[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: entries.map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: entry.name,
      item: `${SITE_URL}${entry.path}`
    }))
  }
}
