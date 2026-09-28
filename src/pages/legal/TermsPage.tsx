import React from 'react'
import { LegalDocument, LegalSection } from './LegalDocument'
import { useLanguage } from '../../context/LanguageContext'

export const TermsPage: React.FC = () => {
  const { t } = useLanguage()

  return (
    <LegalDocument
      title={t('legal.termsTitle', 'Terms and Conditions')}
      description={t(
        'legal.termsDesc',
        'How this website and donations to Highland Islamic Forum (HIF INDIA) work.'
      )}
    >
      <LegalSection title={t('legal.terms.aboutTitle', 'About these terms')}>
        <p>
          {t(
            'legal.terms.aboutBody',
            'These terms apply to your use of the HIF INDIA website and to any donation you make to Highland Islamic Forum (HIF INDIA), a registered NGO under the Indian Trusts Act. By using the website or making a donation, you agree to these terms, our Privacy Policy, Refund Policy, and Cancellation Policy.'
          )}
        </p>
      </LegalSection>

      <LegalSection title={t('legal.terms.whatWeDoTitle', 'What we do')}>
        <p>
          {t(
            'legal.terms.whatWeDoBody',
            'HIF INDIA is a grassroots humanitarian trust based in Mangaluru. The website describes our programmes and lets supporters contribute to them. We do not sell goods. A donation is a voluntary contribution, not a purchase of a product or service.'
          )}
        </p>
        <p>{t('legal.terms.whatWeDoListIntro', 'Our main programmes are:')}</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            {t(
              'legal.terms.programAshiyana',
              'Project Ashiyana — permanent housing for homeless and destitute families'
            )}
          </li>
          <li>
            {t(
              'legal.terms.programChitoor',
              'HIF CHITOOR (D.U.R.J) — residential care, Hifz, and schooling for orphaned children'
            )}
          </li>
          <li>
            {t(
              'legal.terms.programMasjid',
              'Masjid Development — restoration and upkeep of rural masjids'
            )}
          </li>
          <li>
            {t(
              'legal.terms.programMedical',
              'HIF Medical Cell — free medical-equipment support and blood-donation coordination'
            )}
          </li>
        </ul>
      </LegalSection>

      <LegalSection title={t('legal.terms.donationsTitle', 'Donations and pricing')}>
        <p>
          {t(
            'legal.terms.donationsBody1',
            'You choose the amount. Suggested amounts on a project page are guidance only. There is no minimum fee to browse the website, and we do not charge a subscription.'
          )}
        </p>
        <p>
          {t(
            'legal.terms.donationsBody2',
            'You may donate by bank transfer or UPI to the HIF INDIA account shown on the website, or by an online payment processed by our payment partner, Razorpay. Please confirm the beneficiary name is HIF INDIA before you pay.'
          )}
        </p>
        <p>
          {t(
            'legal.terms.donationsBody3',
            'Donations marked for a specific project are used for that project’s materials, labour, meals, or medical relief. HIF INDIA does not take an administrative commission on those gifts. A payment gateway may deduct its own processing charge before the amount reaches us.'
          )}
        </p>
        <p>
          {t(
            'legal.terms.donationsBody4',
            'Where applicable, donations are eligible for 80G tax exemption under the Income Tax Act. Share your payment receipt with us on WhatsApp or email and we will issue the certificate.'
          )}
        </p>
      </LegalSection>

      <LegalSection title={t('legal.terms.responsibilitiesTitle', 'Your responsibilities')}>
        <p>
          {t(
            'legal.terms.responsibilitiesBody',
            'You must give accurate contact details when you ask for a receipt, and you must use funds you are allowed to give. Do not use the website to send false, harmful, or unlawful content, or to interfere with the site.'
          )}
        </p>
      </LegalSection>

      <LegalSection title={t('legal.terms.contentTitle', 'Website content')}>
        <p>
          {t(
            'legal.terms.contentBody',
            'Project updates, photographs, and figures are published in good faith and may change as work in the field changes. Nothing on the site is a promise of a particular construction date or a personal benefit in return for a donation.'
          )}
        </p>
      </LegalSection>

      <LegalSection title={t('legal.terms.paymentsTitle', 'Payments')}>
        <p>
          {t(
            'legal.terms.paymentsBody',
            'Online card, net-banking, and UPI payments are handled by Razorpay and your bank. We do not store your full card number or UPI PIN. A payment is complete only when we or our payment partner confirms it. Bank delays and failed UPI attempts are outside our control.'
          )}
        </p>
      </LegalSection>

      <LegalSection title={t('legal.terms.ipTitle', 'Intellectual property')}>
        <p>
          {t(
            'legal.terms.ipBody',
            'The HIF INDIA name, logo, and website content belong to Highland Islamic Forum unless a credit says otherwise. You may share links to our pages. Please do not copy our photographs or logo for another organisation without written permission.'
          )}
        </p>
      </LegalSection>

      <LegalSection title={t('legal.terms.liabilityTitle', 'Liability')}>
        <p>
          {t(
            'legal.terms.liabilityBody',
            'The website is provided as a public information and donation channel. We are not liable for loss caused by a payment-app error, a bank delay, or a temporary outage of this site, to the extent allowed by Indian law.'
          )}
        </p>
      </LegalSection>

      <LegalSection title={t('legal.terms.lawTitle', 'Governing law')}>
        <p>
          {t(
            'legal.terms.lawBody',
            'These terms are governed by the laws of India. Courts in Mangaluru, Karnataka, have jurisdiction over disputes arising from this website or a donation to HIF INDIA.'
          )}
        </p>
      </LegalSection>

      <LegalSection title={t('legal.terms.changesTitle', 'Changes')}>
        <p>
          {t(
            'legal.terms.changesBody',
            'We may update these terms when our programmes or payment methods change. The date at the top of this page is the latest version. Continued use of the website after an update means you accept the revised terms.'
          )}
        </p>
      </LegalSection>
    </LegalDocument>
  )
}

export default TermsPage
