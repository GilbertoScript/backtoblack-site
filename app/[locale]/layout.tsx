import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { locales } from '@/i18n'
import "../globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  style: ['normal', 'italic'],
  display: 'swap',
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Back to Black - VSCode Theme",
  description: "The only true dark theme you were looking for. A minimalist and elegant dark theme for Visual Studio Code with pure black background.",
  keywords: ["vscode theme", "dark theme", "black theme", "visual studio code", "back to black", "coding theme"],
  icons: {
    icon: "https://app.trickle.so/storage/public/images/usr_1400a9d300000001/7fcd84e4-747b-45df-a000-f40cd29f447c.png",
    apple: "https://app.trickle.so/storage/public/images/usr_1400a9d300000001/7fcd84e4-747b-45df-a000-f40cd29f447c.png",
  },
  openGraph: {
    title: "Back to Black - VSCode Theme",
    description: "The only true dark theme you were looking for. Pure black background for maximum contrast.",
    images: ["https://app.trickle.so/storage/public/images/usr_1400a9d300000001/7fcd84e4-747b-45df-a000-f40cd29f447c.png"],
  },
  twitter: {
    title: "Back to Black - VSCode Theme",
    description: "The only true dark theme you were looking for. Pure black background for maximum contrast.",
    images: ["https://app.trickle.so/storage/public/images/usr_1400a9d300000001/7fcd84e4-747b-45df-a000-f40cd29f447c.png"],
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  // Valida que o locale recebido é válido
  if (!locales.includes(locale as any)) {
    notFound()
  }

  // Fornece todas as mensagens para o cliente
  const messages = await getMessages()

  return (
    <html lang={locale} className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body
        className="antialiased"
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
