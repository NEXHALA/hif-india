import React from 'react'
import { LocalizedLink } from '../../components/common/LocalizedLink'
import { LegalDocument, LegalSection } from './LegalDocument'
import { useLanguage } from '../../context/LanguageContext'

export const CancellationPage: React.FC = () => {
  const { t } = useLanguage()

  return (
    <LegalDocument
      title={t('legal.cancellationTitle', 'Cancellation Policy')}
      description={t(
        'legal.cancellationDesc',
        'When you can cancel a donation or a volunteer request to HIF INDIA.'
      )}
    >
      <LegalSection title={t('legal.cancellation.beforeTitle', 'Before you pay')}>
        <p>
          {t(
            'legal.cancellation.beforeBody',
            'You may cancel a donation at any time before payment is completed. Close the donation window, or do not finish the UPI, card, or net-banking step. If you do not pay, nothing is charged and no cancellation request is needed.'
          )}
        </p>
        <p>
          {t(
            'legal.cancellation.beforeNoSub',
            'HIF INDIA does not set up automatic recurring debits. There is no subscription or membership fee to cancel.'
          )}
        </p>
      </LegalSection>

      <LegalSection title={t('legal.cancellation.afterTitle', 'After a successful payment')}>
        <p>
          {t(
            'legal.cancellation.afterLead',
            'A completed donation cannot be cancelled as an order, because it is a voluntary gift and not a product purchase. If the payment was duplicated, failed on our side, or made by mistake, use the'
          )}{' '}
          <LocalizedLink to="/refund-policy" className="text-primary hover:underline">
            {t('legal.refundTitle', 'Refund Policy')}
          </LocalizedLink>
          {t(
            'legal.cancellation.afterTrail',
            '. Requests must reach us within 7 days of the transaction. Approved refunds are initiated within 7 working days and then follow your bank or Razorpay’s usual credit time of about 5 to 7 working days.'
          )}
        </p>
      </LegalSection>

      <LegalSection title={t('legal.cancellation.ifHifTitle', 'If HIF cancels an activity')}>
        <p>
          {t(
            'legal.cancellation.ifHifBody',
            'If we cancel a drive or event for which you gave a specifically marked donation, and that amount has not been spent, we will contact you. You may ask us to move it to the nearest related programme, or to refund it under the Refund Policy.'
          )}
        </p>
      </LegalSection>

      <LegalSection title={t('legal.cancellation.volunteerTitle', 'Volunteer and enquiry requests')}>
        <p>
          {t(
            'legal.cancellation.volunteerBody',
            'You may withdraw a volunteer signup or any other enquiry by emailing info@hif.org.in or messaging us on WhatsApp. Tell us the phone number you used. We will stop following up on that request. This does not cancel a donation already received.'
          )}
        </p>
      </LegalSection>

      <LegalSection title={t('legal.cancellation.shippingTitle', 'No shipping to cancel')}>
        <p>
          {t(
            'legal.cancellation.shippingBody',
            'We do not sell or ship physical goods through this website. There is no shipping order and no shipping cancellation. Medical equipment, where provided by the Medical Cell, is a programme service arranged with the family directly, not an online store order.'
          )}
        </p>
      </LegalSection>
    </LegalDocument>
  )
}

export default CancellationPage
