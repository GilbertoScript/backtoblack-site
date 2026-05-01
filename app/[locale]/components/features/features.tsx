import { FC } from 'react'
import { Heart, Eye, Palette, Ruler, Hash, Zap } from 'lucide-react'
import { useTranslations } from 'next-intl'

interface Feature {
  icon: typeof Heart
  key: string
}

const features: Feature[] = [
  { icon: Heart, key: 'trueBlack' },
  { icon: Eye, key: 'reducedEyeStrain' },
  { icon: Palette, key: 'consistentInterface' },
  { icon: Ruler, key: 'discreteGuides' },
  { icon: Hash, key: 'smartLineNumbers' },
  { icon: Zap, key: 'performance' }
]

export const Features: FC = () => {
  const t = useTranslations('features')

  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.02)]"
    >
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">{t('title')}</h2>
          <p className="text-lg text-[var(--text-primary)] max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="feature-card">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gray-800 mb-4">
                  <Icon className="w-6 h-6 text-[var(--secondary-color)]" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-playfair">{t(`${feature.key}.title`)}</h3>
                <p className="text-[var(--text-primary)]">{t(`${feature.key}.description`)}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
