import React from 'react'
import { Heart, ShieldCheck } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa6'
import { HIF_ORGANIZATION } from '../../data/hifData'
import { useDonate } from '../../context/DonateContext'
import { useLanguage } from '../../context/LanguageContext'
import { handleExternalAnchorClick } from '../../lib/openExternal'
import { buildWhatsAppUrl } from '../../lib/submitForm'
import { LanguageSwitcher } from './LanguageSwitcher'
import { LocalizedLink } from './LocalizedLink'

const socialLinks = [
  { href: HIF_ORGANIZATION.socials.facebook, label: 'Facebook', Icon: FaFacebookF },
  { href: HIF_ORGANIZATION.socials.instagram, label: 'Instagram', Icon: FaInstagram },
  { href: HIF_ORGANIZATION.socials.youtube, label: 'YouTube', Icon: FaYoutube }
]

export const Footer: React.FC = () => {
  const { openDonate } = useDonate()
  const { t } = useLanguage()

  // Empty phone opens WhatsApp's share picker so the user chooses a contact.
  const shareWhatsAppHref = buildWhatsAppUrl(
    '',
    t(
      'footer.shareMessage',
      "Check out HIF India's new website — a philanthropic trust focused on education, healthcare, and community welfare across India.\n\nVisit: https://www.hif.org.in"
    )
  )

  return (
    <footer className="surface-dark border-t border-white/5 pt-14 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 pb-10 border-b border-white/10">
          <div className="lg:col-span-2 space-y-4 flex flex-col items-center text-center lg:items-start lg:text-left">
            <LocalizedLink to="/" className="flex items-center gap-2.5">
              <img src={HIF_ORGANIZATION.siteImages.logo} alt="HIF INDIA logo" className="h-8 w-auto object-contain" />
              <span className="font-display text-lg font-semibold text-white">
                HIF INDIA
              </span>
            </LocalizedLink>
            <p className="text-sm text-emerald-100/70 leading-relaxed max-w-sm">
              {t(
                'footer.aboutText',
                'A registered grassroots NGO in Mangaluru empowering families with permanent housing, orphan education, masjid revival, and free medical equipment.'
              )}
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-emerald-200/80 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              {t('footer.zeroCommission', '100% direct, zero-commission grassroots disbursement')}
            </div>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleExternalAnchorClick}
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 text-emerald-200 hover:text-white transition-colors flex items-center justify-center"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
              <a
                href={shareWhatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleExternalAnchorClick}
                aria-label={t('footer.shareWebsite', 'Share website')}
                className="inline-flex h-10 items-center gap-2 rounded-lg bg-white/5 px-3 text-xs font-semibold text-emerald-200 hover:bg-[#25D366]/15 hover:text-white transition-colors"
              >
                <FaWhatsapp className="w-4 h-4 shrink-0" aria-hidden />
                {t('footer.shareWebsite', 'Share website')}
              </a>
            </div>

            {/* Language Switcher in Footer */}
            <div className="pt-2 w-full flex justify-center lg:justify-start">
              <LanguageSwitcher variant="footer" />
            </div>
          </div>

          <FooterCol
            title={t('footer.exploreTitle', 'Explore')}
            links={[
              { label: t('nav.about', 'About Us'), to: '/about' },
              { label: t('nav.projects', 'Our Projects'), to: '/projects' },
              { label: t('nav.activities', 'Activities & Wings'), to: '/activities' },
              { label: t('nav.gallery', 'Impact Gallery'), to: '/gallery' },
              { label: t('nav.getInvolved', 'Get Involved'), to: '/get-involved' }
            ]}
          />
          <FooterCol
            title={t('footer.programsTitle', 'Programs')}
            links={[
              { label: t('projects.ashiyana.title', 'Project Ashiyana'), to: '/projects/project-ashiyana' },
              { label: t('projects.chittor.title', 'HIF CHITOOR – D.U.R.J'), to: '/projects/chittor-dream-project' },
              { label: t('projects.masjid.title', 'Masjid Development Project'), to: '/projects/masjid-development' },
              { label: t('activities.medical.title', 'HIF Medical Cell'), to: '/activities/medical-cell' }
            ]}
          />

          <div className="space-y-3 text-center lg:text-left">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
              {t('footer.supportUs', 'Support Us')}
            </h4>
            <div className="mx-auto max-w-sm p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs space-y-1.5 lg:mx-0">
              <p className="font-semibold text-white">{t('footer.bankAccount', 'HDFC Bank A/C')}</p>
              <p className="font-mono text-amber-300">{HIF_ORGANIZATION.bankDetails.accountNumber}</p>
              <p className="text-emerald-200/70">IFSC: {HIF_ORGANIZATION.bankDetails.ifscCode}</p>
              <button
                onClick={() => openDonate(t('donateModal.generalFund', 'General Humanitarian Fund'))}
                className="w-full mt-2 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-semibold text-xs flex items-center justify-center gap-1.5"
              >
                <Heart className="w-3.5 h-3.5" />
                {t('footer.donateQr', 'Donate / UPI QR')}
              </button>
            </div>
          </div>
        </div>

        <div className="pt-6 space-y-3">
          <nav aria-label={t('legal.relatedNav', 'Related policies')} className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-emerald-100/80">
            <LocalizedLink to="/terms" className="hover:text-white transition-colors">{t('legal.termsTitle', 'Terms and Conditions')}</LocalizedLink>
            <LocalizedLink to="/privacy-policy" className="hover:text-white transition-colors">{t('legal.privacyTitle', 'Privacy Policy')}</LocalizedLink>
            <LocalizedLink to="/refund-policy" className="hover:text-white transition-colors">{t('legal.refundTitle', 'Refund Policy')}</LocalizedLink>
            <LocalizedLink to="/cancellation-policy" className="hover:text-white transition-colors">{t('legal.cancellationTitle', 'Cancellation Policy')}</LocalizedLink>
          </nav>
          <div className="flex flex-col items-center justify-center text-center gap-3 text-xs text-emerald-200/60 lg:flex-row lg:justify-between lg:text-left">
            <p>© {new Date().getFullYear()} {t('footer.allRightsReserved', 'HIF. All rights reserved.')}</p>
            <p>{t('footer.addressFull', 'Masjid Ehsaan Complex, Kankanady, Mangalore – 575002')}</p>
          </div>
          <p className="text-center text-xs text-emerald-200/70">
            {t('footer.developedBy', 'Developed by')}{' '}
            <a
              href="https://www.nexhala.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleExternalAnchorClick}
              className="font-medium text-emerald-300 hover:text-white transition-colors underline underline-offset-2 decoration-emerald-400/50 hover:decoration-emerald-300"
            >
              Nexhala Solutions LLP
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

const FooterCol: React.FC<{ title: string; links: { label: string; to: string }[] }> = ({ title, links }) => (
  <div className="space-y-3 text-center lg:text-left">
    <h4 className="text-sm font-semibold text-white uppercase tracking-wide">{title}</h4>
    <ul className="space-y-2 text-sm text-emerald-100/70">
      {links.map((l) => (
        <li key={l.to}>
          <LocalizedLink to={l.to} className="hover:text-emerald-300 transition-colors">
            {l.label}
          </LocalizedLink>
        </li>
      ))}
    </ul>
  </div>
)
