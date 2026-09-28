import React from 'react'
import { LegalDocument, LegalSection } from './LegalDocument'
import { useLanguage } from '../../context/LanguageContext'

export const PrivacyPage: React.FC = () => {
  const { t } = useLanguage()

  return (
    <LegalDocument
      title={t('legal.privacyTitle', 'Privacy Policy')}
      description={t(
        'legal.privacyDesc',
        'What personal information HIF INDIA collects, why we use it, and who we share it with.'
      )}
    >
      <LegalSection title={t('legal.privacy.whoTitle', 'Who is responsible')}>
        <p>
          {t(
            'legal.privacy.whoBody',
            'Highland Islamic Forum (HIF INDIA) is responsible for personal information collected through this website and through our phone, email, and WhatsApp channels.'
          )}
        </p>
      </LegalSection>

      <LegalSection title={t('legal.privacy.collectTitle', 'Information we collect')}>
        <p>
          {t(
            'legal.privacy.collectIntro',
            'We collect only what we need to receive donations, answer enquiries, and run our programmes:'
          )}
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            {t(
              'legal.privacy.collectForm',
              'Details you send us: your name, phone number, city, and volunteer skills when you use the Get Involved form (it opens WhatsApp with the message you typed), and anything you later write to us by email, phone, or WhatsApp.'
            )}
          </li>
          <li>
            {t(
              'legal.privacy.collectDonation',
              'Donation records: amount, date, project or cause if you named one, and a transaction reference (such as a UTR or payment id) so we can issue a receipt and, where applicable, an 80G certificate.'
            )}
          </li>
          <li>
            {t(
              'legal.privacy.collectPayment',
              'Payment details entered on Razorpay’s page (card, net-banking, or UPI) are collected by Razorpay and your bank. We do not receive or store your full card number, CVV, or UPI PIN.'
            )}
          </li>
          <li>
            {t(
              'legal.privacy.collectPrefs',
              'A language choice and a light/dark display preference saved in your browser (local storage). We do not run advertising trackers on this website.'
            )}
          </li>
        </ul>
      </LegalSection>

      <LegalSection title={t('legal.privacy.useTitle', 'How we use it')}>
        <p>{t('legal.privacy.useIntro', 'We use this information to:')}</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>{t('legal.privacy.useConfirm', 'Confirm and receipt your donation')}</li>
          <li>{t('legal.privacy.use80g', 'Issue 80G certificates when you ask and the donation qualifies')}</li>
          <li>{t('legal.privacy.useReply', 'Reply to volunteer, medical-equipment, and general enquiries')}</li>
          <li>{t('legal.privacy.useBooks', 'Keep ordinary books of account required of a registered trust')}</li>
          <li>{t('legal.privacy.useProtect', 'Protect the organisation against mistaken or unauthorised payments')}</li>
        </ul>
        <p>
          {t(
            'legal.privacy.useNoSell',
            'We do not sell personal information, and we do not use it for third-party advertising.'
          )}
        </p>
      </LegalSection>

      <LegalSection title={t('legal.privacy.shareTitle', 'Who we share it with')}>
        <p>{t('legal.privacy.shareIntro', 'We share information only with:')}</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            {t('legal.privacy.shareRazorpay', 'Razorpay and your bank or UPI app, to complete a payment you start')}
          </li>
          <li>{t('legal.privacy.shareBank', 'Our bankers (HDFC Bank) for donations received by transfer')}</li>
          <li>{t('legal.privacy.shareAudit', 'Auditors and authorities when Indian law requires it')}</li>
          <li>
            {t(
              'legal.privacy.shareHost',
              'A service provider who hosts email or this website, only to operate that service'
            )}
          </li>
        </ul>
        <p>
          {t(
            'legal.privacy.shareProviders',
            'Razorpay processes payments under its own privacy policy. Firebase Hosting serves this website. Those providers see technical data such as IP address that is needed to deliver the page or the payment.'
          )}
        </p>
      </LegalSection>

      <LegalSection title={t('legal.privacy.retainTitle', 'How long we keep it')}>
        <p>
          {t(
            'legal.privacy.retainBody',
            'Donation and receipt records are kept for as long as Indian tax and trust law requires. Enquiry messages are kept while we are corresponding with you and for a reasonable period afterwards. You can ask us to delete a volunteer enquiry if we no longer need it for a legal record.'
          )}
        </p>
      </LegalSection>

      <LegalSection title={t('legal.privacy.choicesTitle', 'Your choices')}>
        <p>
          {t(
            'legal.privacy.choicesBody',
            'You may ask what donation or enquiry records we hold about you, ask us to correct them, or ask us to stop contacting you. Write to info@hif.org.in or call the numbers at the top of this page. We may need to keep a donation record even after a contact request, because receipts and accounts cannot be deleted.'
          )}
        </p>
      </LegalSection>

      <LegalSection title={t('legal.privacy.childrenTitle', 'Children')}>
        <p>
          {t(
            'legal.privacy.childrenBody',
            'This website is for adult donors and volunteers. We do not knowingly collect personal information from children through the site. Programme information about children in our care is published only with the consent of the guardian or the institution, and without exposing private records.'
          )}
        </p>
      </LegalSection>

      <LegalSection title={t('legal.privacy.changesTitle', 'Changes')}>
        <p>
          {t(
            'legal.privacy.changesBody',
            'If we start collecting new kinds of information, we will update this page and change the date at the top.'
          )}
        </p>
      </LegalSection>
    </LegalDocument>
  )
}

export default PrivacyPage
