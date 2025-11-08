import { FC } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export const Preview: FC = () => {
  const t = useTranslations('preview')

  return (
    <section id="preview" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">{t('title')}</h2>
          <p className="text-lg text-[var(--text-primary)] max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -inset-4 bg-gradient-to-r from-white to-gray-400 rounded-2xl blur-2xl opacity-10"></div>
          <div className="relative rounded-2xl overflow-hidden border border-[var(--border-color)]">
            <Image
              src="https://app.trickle.so/storage/public/images/usr_1400a9d300000001/c9564622-5c8d-4a22-9122-5b711a16bb85.png"
              alt="Back to Black Theme Preview"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-[var(--text-primary)] mb-6">
            {t('description')}
          </p>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=backtoblack.backtoblack"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            {t('tryItNow')}
          </a>
        </div>
      </div>
    </section>
  )
}
