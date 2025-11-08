'use client'

import { useEffect } from 'react'
import { useTranslations } from 'next-intl'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const t = useTranslations('error')

  useEffect(() => {
    console.error('Error caught by error boundary:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--primary-color)]">
      <div className="text-center max-w-md px-4">
        <h1 className="text-4xl font-bold text-[var(--text-highlight)] mb-4">
          {t('title')}
        </h1>
        <p className="text-[var(--text-primary)] mb-8">
          {t('description')}
        </p>
        <button
          onClick={reset}
          className="btn-primary"
        >
          {t('tryAgain')}
        </button>
      </div>
    </div>
  )
}
