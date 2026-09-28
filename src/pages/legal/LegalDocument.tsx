import React, { useEffect } from 'react'
import { LocalizedLink } from '../../components/common/LocalizedLink'
import { HIF_ORGANIZATION } from '../../data/hifData'
import { PageHeader } from '../../components/common/PageHeader'
import { useLanguage } from '../../context/LanguageContext'

export const LegalDocument: React.FC<{
  title: string
  description: string
  children: React.ReactNode
}> = ({ title, description, children }) => {
  const { t } = useLanguage()

  useEffect(() => {
    const previous = document.title
    document.title = `${title} | HIF INDIA`
    return () => {
      document.title = previous
    }
  }, [title])

  const related = [
    { to: '/terms', label: t('legal.termsTitle', 'Terms and Conditions') },
    { to: '/privacy-policy', label: t('legal.privacyTitle', 'Privacy Policy') },
    { to: '/refund-policy', label: t('legal.refundTitle', 'Refund Policy') },
    { to: '/cancellation-policy', label: t('legal.cancellationTitle', 'Cancellation Policy') }
  ]

  return (
    <>
      <PageHeader eyebrow="HIF INDIA" title={title} description={description} />
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <article className="max-w-3xl mx-auto card p-6 sm:p-10 text-sm sm:text-[15px] leading-relaxed text-text-muted space-y-8">
          <p className="text-xs uppercase tracking-wide text-text-muted">
            {t('legal.lastUpdated', 'Last updated: {date}', {
              date: t('legal.lastUpdatedDate', '28 September 2026')
            })}
          </p>
          <OrgDetails />
          {children}
        </article>

        <nav aria-label={t('legal.relatedNav', 'Related policies')} className="max-w-3xl mx-auto mt-8 flex flex-wrap gap-x-4 gap-y-2 text-sm">
          {related.map((item) => (
            <LocalizedLink key={item.to} to={item.to} className="text-primary hover:underline">
              {item.label}
            </LocalizedLink>
          ))}
          <LocalizedLink to="/contact" className="text-primary hover:underline">
            {t('nav.contact', 'Contact')}
          </LocalizedLink>
        </nav>
      </section>
    </>
  )
}

function OrgDetails() {
  const { t } = useLanguage()
  const { address, contact } = HIF_ORGANIZATION
  return (
    <div className="rounded-xl bg-bg-alt border border-border p-4 sm:p-5 text-text-main space-y-1">
      <p className="font-semibold">{t('org.fullName', HIF_ORGANIZATION.fullName)}</p>
      <p>{t('legal.orgRegisteredHq', 'Registered NGO under the Indian Trusts Act, headquartered in Mangaluru.')}</p>
      <p>{address.full}</p>
      <p>
        {t('org.phoneLabel', 'Phone')}:{' '}
        <a className="text-primary hover:underline" href={`tel:${contact.primaryPhone.replace(/\s+/g, '')}`}>
          {contact.primaryPhone}
        </a>
        {' · '}
        <a className="text-primary hover:underline" href={`tel:${contact.altPhone.replace(/\s+/g, '')}`}>
          {contact.altPhone}
        </a>
      </p>
      <p>
        {t('org.emailLabel', 'Email')}:{' '}
        <a className="text-primary hover:underline" href={`mailto:${contact.email}`}>
          {contact.email}
        </a>
      </p>
      <p>
        {t('org.workingHours', 'Working Hours')}: {t('org.workingHoursVal', '9:00 AM – 7:00 PM (Mon–Sat)')}
      </p>
    </div>
  )
}

export const LegalSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="space-y-3">
    <h2 className="font-display text-xl text-text-main">{title}</h2>
    <div className="space-y-3">{children}</div>
  </section>
)
