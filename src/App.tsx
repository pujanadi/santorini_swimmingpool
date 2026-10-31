import { Facilities } from './components/Facilities'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Highlights } from './components/Highlights'
import { Location } from './components/Location'
import { Pricing } from './components/Pricing'
import { QuickInfo } from './components/QuickInfo'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Lewati ke konten</a>
      <Header />
      <main id="main">
        <Hero />
        <QuickInfo />
        <Highlights />
        <Facilities />
        <Pricing />
        <Gallery />
        <Location />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
