import { FC } from 'react'
import { useTranslations } from 'next-intl'

export const Installation: FC = () => {
  const t = useTranslations('installation')

  return (
    <section id="installation" className="py-20">
      <div className="section-container max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">{t('title')}</h2>
          <p className="text-lg text-[var(--text-primary)]">
            {t('subtitle')}
          </p>
        </div>

        <div className="space-y-8">
          <div className="feature-card">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-[var(--secondary-color)]">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 font-playfair">{t('viaMarketplace')}</h3>
                <ol className="text-[var(--text-primary)] space-y-2 list-decimal list-inside">
                  <li>{t('step1')}</li>
                  <li>
                    <code className="bg-[rgba(255,255,255,0.1)] px-2 py-1 rounded">
                      Ctrl+Shift+X
                    </code>{' '}
                    {t('step2')}
                  </li>
                  <li>{t('step3')}</li>
                  <li>{t('step4')}</li>
                  <li>
                    <code className="bg-[rgba(255,255,255,0.1)] px-2 py-1 rounded">
                      Ctrl+K Ctrl+T
                    </code>{' '}
                    {t('step5')}
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://marketplace.visualstudio.com/items?itemName=backtoblack.backtoblack"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            {t('installFromMarketplace')}
          </a>
        </div>
      </div>
    </section>
  )
}
