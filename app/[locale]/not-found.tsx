'use client'

import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'

export default function NotFound() {
  const t = useTranslations('notFound')
  const locale = useLocale()

  // Para inglês usa '/', para pt-BR usa '/pt-BR'
  const homeUrl = locale === 'en' ? '/' : `/${locale}`

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--primary-color)]">
      <div className="text-center max-w-md px-4">
        <h1 className="text-6xl font-bold text-[var(--text-highlight)] mb-4">
          {t('title')}
        </h1>
        <h2 className="text-2xl font-bold text-[var(--text-highlight)] mb-4">
          {t('subtitle')}
        </h2>
        <p className="text-[var(--text-primary)] mb-8">
          {t('description')}
        </p>
        <Link href={homeUrl} className="btn-primary">
          {t('backToHome')}
        </Link>
      </div>
    </div>
  )
}
