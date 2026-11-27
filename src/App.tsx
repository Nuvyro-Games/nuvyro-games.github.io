import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { Games } from './sections/Games'
import { Studio } from './sections/Studio'
import { Contact } from './sections/Contact'

export default function App() {
  return (
    <>
      <a
        href="#games"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-mint-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-space-900"
      >
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <Games />
        <Studio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
