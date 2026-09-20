import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Seo } from '../components/common/Seo'
import { LocalizedLink } from '../components/common/LocalizedLink'
import { useLanguage } from '../context/LanguageContext'

export const NotFoundPage: React.FC = () => {
  const { t } = useLanguage()

  return (
    <>
      <Seo
        title={t('notFound.title', 'Page Not Found')}
        description={t('notFound.description', 'The page you are looking for does not exist or has moved.')}
        noindex
      />
      <section className="page-header flex flex-col items-center justify-center text-center px-4 py-24 sm:py-32">
        <span className="badge-on-dark">404</span>
        <h1 className="font-display mt-5 text-3xl sm:text-4xl font-semibold tracking-tight text-white text-shadow-soft">
          {t('notFound.heading', "We couldn't find that page.")}
        </h1>
        <p className="mt-4 text-emerald-50/90 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          {t('notFound.body', 'The page you are looking for may have been moved or no longer exists.')}
        </p>
        <LocalizedLink
          to="/"
          className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-emerald-950 font-semibold text-sm shadow-lg shadow-black/30 ring-1 ring-amber-300/60 transition-colors"
        >
          {t('notFound.cta', 'Back to Home')} <ArrowRight className="w-4 h-4" />
        </LocalizedLink>
      </section>
    </>
  )
}

export default NotFoundPage
