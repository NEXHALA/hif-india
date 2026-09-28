import React from 'react'
import { LegalDocument, LegalSection } from './LegalDocument'
import { useLanguage } from '../../context/LanguageContext'

export const RefundPage: React.FC = () => {
  const { t } = useLanguage()

  return (
    <LegalDocument
      title={t('legal.refundTitle', 'Refund Policy')}
      description={t(
        'legal.refundDesc',
        'When a donation to HIF INDIA can be refunded, and how long that takes.'
      )}
    >
      <LegalSection title={t('legal.refund.notRefundableTitle', 'Donations are generally not refundable')}>
        <p>
          {t(
            'legal.refund.notRefundableBody',
            'A gift to Highland Islamic Forum (HIF INDIA) is a voluntary donation to a registered NGO, not a purchase of goods. HIF INDIA does not ship products and does not charge a delivery fee. Once a donation is successfully received, it is allocated to housing, orphan care, masjid work, medical relief, or the general humanitarian fund, and it is not refundable as a change of mind.'
          )}
        </p>
      </LegalSection>

      <LegalSection title={t('legal.refund.whenTitle', 'When we will refund')}>
        <p>{t('legal.refund.whenIntro', 'We will refund a donation in these cases:')}</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>{t('legal.refund.whenDuplicate', 'You were charged twice for the same donation (a duplicate payment).')}</li>
          <li>
            {t(
              'legal.refund.whenFailed',
              'Money left your account but HIF INDIA did not receive it because of a technical failure.'
            )}
          </li>
          <li>
            {t(
              'legal.refund.whenMistake',
              'You paid HIF INDIA by genuine mistake, and the amount has not yet been spent on a project.'
            )}
          </li>
          <li>
            {t(
              'legal.refund.whenUnauthorised',
              'The payment was unauthorised. We will follow up with the bank or Razorpay and refund what they confirm was unauthorised.'
            )}
          </li>
        </ul>
        <p>
          {t(
            'legal.refund.whenSpent',
            'A donation already spent on a named project — for example materials for a house, a student’s support, or medical aid — cannot be refunded.'
          )}
        </p>
      </LegalSection>

      <LegalSection title={t('legal.refund.howTitle', 'How to request a refund')}>
        <p>
          {t(
            'legal.refund.howBody',
            'Email info@hif.org.in or message us on WhatsApp within 7 days of the transaction. Include your name, phone number, date, amount, the project if you chose one, and the UTR, UPI reference, or Razorpay payment id.'
          )}
        </p>
        <p>{t('legal.refund.howReply', 'We will review the request and reply within 7 working days.')}</p>
      </LegalSection>

      <LegalSection title={t('legal.refund.timelineTitle', 'Refund timeline')}>
        <p>
          {t(
            'legal.refund.timelineBody',
            'If we approve the refund, we send it to the original payment method (the same card, UPI id, or bank account). We initiate the refund within 7 working days of approval. Banks, UPI apps, and Razorpay may take a further 5 to 7 working days to show the credit. We cannot refund in cash or to a different person’s account.'
          )}
        </p>
      </LegalSection>

      <LegalSection title={t('legal.refund.failedTitle', 'Failed payments')}>
        <p>
          {t(
            'legal.refund.failedBody',
            'If a payment fails or you close the page before paying, no donation is taken and there is nothing to refund. If your bank shows a debit that never reached us, write to us with the reference number and we will trace it with the bank or Razorpay.'
          )}
        </p>
      </LegalSection>
    </LegalDocument>
  )
}

export default RefundPage
