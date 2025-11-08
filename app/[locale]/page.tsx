import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Preview } from './components/Preview'
import { ColorPalette } from './components/ColorPalette'
import { History } from './components/History'
import { Installation } from './components/Installation'
import { Footer } from './components/Footer'

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
