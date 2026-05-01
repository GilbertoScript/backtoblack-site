import { Header } from './components/header'
import { Hero } from './components/hero'
import { Features } from './components/features'
import { Preview } from './components/preview'
import { ColorPalette } from './components/color-palette'
import { History } from './components/history'
import { Installation } from './components/installation'
import { Footer } from './components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--primary-color)]">
      <Header />
      <Hero />
      <Features />
      <Preview />
      <ColorPalette />
      <History />
      <Installation />
      <Footer />
    </div>
  )
}
