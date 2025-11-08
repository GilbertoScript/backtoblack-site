import { FC } from 'react'
import { Download, Heart, Star } from 'lucide-react'
import { useTranslations } from 'next-intl'

export const Hero: FC = () => {
  const t = useTranslations('hero')

  return (
    <section className="pt-52 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gradient">
            {t('title')}
          </h1>
          <p className="text-2xl md:text-3xl text-[var(--text-primary)] mb-8 font-serif italic">
            {t('subtitle')}
          </p>
          <p className="text-lg text-[var(--text-primary)] mb-12 max-w-2xl mx-auto">
            {t('description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://marketplace.visualstudio.com/items?itemName=backtoblack.backtoblack"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <div className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                <span>{t('installNow')}</span>
              </div>
            </a>
            <a
              href="https://github.com/GilbertoScript/backtoblack"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-[var(--secondary-color)] text-[var(--secondary-color)] rounded-lg font-semibold hover:bg-[var(--secondary-color)] hover:text-[var(--primary-color)] transition"
            >
              {t('viewOnGithub')}
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 mt-12 text-sm text-[var(--text-primary)]">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span>{t('mitLicense')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-400" />
              <span>{t('madeWithLove')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
