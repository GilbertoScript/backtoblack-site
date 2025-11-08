import { FC } from 'react'
import { useTranslations } from 'next-intl'

const colors = [
  { key: 'pureBlack', hex: '#000000' },
  { key: 'white62', hex: '#ffffff9f' },
  { key: 'pureWhite', hex: '#ffffff' },
  { key: 'darkGray', hex: '#22222270' },
  { key: 'subtleWhite', hex: '#ffffff15' }
]

export const ColorPalette: FC = () => {
  const t = useTranslations('colorPalette')

  return (
    <section className="py-20 bg-gradient-to-b from-[rgba(255,255,255,0.02)] to-transparent">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">{t('title')}</h2>
          <p className="text-lg text-[var(--text-primary)] max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {colors.map((color, index) => (
            <div key={index} className="feature-card">
              <div
                className="w-full h-24 rounded-lg mb-4 border border-[var(--border-color)]"
                style={{ backgroundColor: color.hex }}
              ></div>
              <h3 className="text-lg font-bold mb-2 font-playfair">{t(`${color.key}.name`)}</h3>
              <p className="text-sm text-[var(--text-primary)] mb-2">{color.hex}</p>
              <p className="text-sm text-[var(--text-primary)]">{t(`${color.key}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
