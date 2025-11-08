import { FC } from 'react'
import { Github, Bug, Lightbulb } from 'lucide-react'
import { useTranslations } from 'next-intl'

export const Footer: FC = () => {
  const t = useTranslations('footer')

  return (
    <footer className="py-12 border-t border-[var(--border-color)]">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-[var(--text-primary)] mb-2">
              {t('madeWith')} <span className="text-red-500">🖤</span> {t('by')}{' '}
              <a
                href="https://github.com/GilbertoScript"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-highlight)] hover:underline font-semibold"
              >
                GilbertoScript
              </a>
            </p>
            <p className="text-sm text-[var(--text-primary)]">
              {t('license')}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/GilbertoScript/backtoblack"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-primary)] hover:text-[var(--text-highlight)] transition"
            >
              <div className="flex items-center gap-2">
                <Github className="w-5 h-5" />
                <span>{t('github')}</span>
              </div>
            </a>
            <a
              href="https://github.com/GilbertoScript/backtoblack/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-primary)] hover:text-[var(--text-highlight)] transition"
            >
              <div className="flex items-center gap-2">
                <Bug className="w-5 h-5" />
                <span>{t('reportBug')}</span>
              </div>
            </a>
            <a
              href="https://github.com/GilbertoScript/backtoblack/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-primary)] hover:text-[var(--text-highlight)] transition"
            >
              <div className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                <span>{t('requestFeature')}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
