'use client'

import { FC, useState } from 'react'
import { Github, Languages } from 'lucide-react'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'

export const Header: FC = () => {
  const t = useTranslations('header')
  const locale = useLocale()
  const [showLangMenu, setShowLangMenu] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const changeLanguage = (newLocale: string) => {
    setShowLangMenu(false)

    // Para inglês (padrão), vai para '/' sem prefixo
    // Para pt-BR, vai para '/pt-BR'
    const newUrl = newLocale === 'en' ? '/' : `/${newLocale}`

    // Usar window.location para garantir reload completo
    window.location.href = newUrl
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--primary-color)] border-b border-[var(--border-color)] backdrop-blur-sm">
      <div className="section-container py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="https://app.trickle.so/storage/public/images/usr_1400a9d300000001/7fcd84e4-747b-45df-a000-f40cd29f447c.png"
            alt="Back to Black Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <h1 className="text-xl font-bold font-playfair">{t('title')}</h1>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection('features')}
            className="text-[var(--text-primary)] hover:text-[var(--text-highlight)] transition"
          >
            {t('features')}
          </button>
          <button
            onClick={() => scrollToSection('preview')}
            className="text-[var(--text-primary)] hover:text-[var(--text-highlight)] transition"
          >
            {t('preview')}
          </button>
          <button
            onClick={() => scrollToSection('history')}
            className="text-[var(--text-primary)] hover:text-[var(--text-highlight)] transition"
          >
            {t('history')}
          </button>
          <button
            onClick={() => scrollToSection('installation')}
            className="text-[var(--text-primary)] hover:text-[var(--text-highlight)] transition"
          >
            {t('installation')}
          </button>

          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="flex items-center gap-2 text-[var(--text-primary)] hover:text-[var(--text-highlight)] transition px-3 py-2 rounded-lg hover:bg-[rgba(255,255,255,0.05)]"
            >
              <Languages className="w-4 h-4" />
              <span className="uppercase text-sm font-semibold">
                {locale === 'pt-BR' ? 'PT' : 'EN'}
              </span>
            </button>

            {showLangMenu && (
              <div className="absolute right-0 mt-2 w-40 bg-[rgba(0,0,0,0.95)] border border-[var(--border-color)] rounded-lg shadow-lg overflow-hidden">
                <button
                  onClick={() => changeLanguage('en')}
                  className={`w-full px-4 py-3 text-left hover:bg-[rgba(255,255,255,0.1)] transition ${
                    locale === 'en' ? 'bg-[rgba(255,255,255,0.05)] text-[var(--text-highlight)]' : 'text-[var(--text-primary)]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🇺🇸</span>
                    <span>English</span>
                  </div>
                </button>
                <button
                  onClick={() => changeLanguage('pt-BR')}
                  className={`w-full px-4 py-3 text-left hover:bg-[rgba(255,255,255,0.1)] transition ${
                    locale === 'pt-BR' ? 'bg-[rgba(255,255,255,0.05)] text-[var(--text-highlight)]' : 'text-[var(--text-primary)]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🇧🇷</span>
                    <span>Português</span>
                  </div>
                </button>
              </div>
            )}
          </div>

          <a
            href="https://github.com/GilbertoScript/backtoblack"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            <div className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              <span>{t('github')}</span>
            </div>
          </a>
        </nav>
      </div>
    </header>
  )
}
