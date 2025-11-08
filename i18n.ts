import { getRequestConfig } from 'next-intl/server'

export const locales = ['en', 'pt-BR'] as const
export type Locale = (typeof locales)[number]

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  // Garantir que seja um locale válido
  if (!locale || !locales.includes(locale as Locale)) {
    locale = 'en' // default
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  }
})
