import { FC } from 'react'
import { useTranslations } from 'next-intl'

export const History: FC = () => {
  const t = useTranslations('history')

  return (
    <section
      id="history"
      className="py-20 bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.02)]"
    >
      <div className="section-container max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">{t('title')}</h2>
          <p className="text-lg text-[var(--text-primary)]">
            {t('subtitle')}
          </p>
        </div>

        <div className="feature-card">
          <div className="text-[var(--text-primary)] leading-relaxed space-y-6">
            <p className="drop-cap text-lg">
              {t('paragraph1')}
            </p>

            <p className="text-lg">
              {t('paragraph2')}
            </p>

            <p className="text-lg">
              {t('paragraph3')}
            </p>

            <p className="text-lg italic pl-6 border-l-4 border-[var(--border-color)]">
              {t('quote')}
            </p>

            <p className="text-lg">
              {t('paragraph4')}
            </p>

            <p className="text-lg">
              <span className="font-semibold text-[var(--text-highlight)]">{t('ps')}</span> {t('paragraph5')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
