import createMiddleware from 'next-intl/middleware'
import { locales } from './i18n'

export default createMiddleware({
  // Lista de todos os locales suportados
  locales,

  // Locale padrão quando nenhum for detectado
  defaultLocale: 'en',

  // Só adiciona prefixo na URL quando não for o locale padrão
  localePrefix: 'as-needed',

  // Desabilita detecção automática - sempre começa em inglês
  localeDetection: false
})

export const config = {
  // Aplicar o middleware em todas as rotas exceto as listadas abaixo
  matcher: ['/', '/(pt-BR)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
}
