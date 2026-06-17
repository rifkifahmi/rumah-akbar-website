import Header from './components/Header'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Facilities from './components/Facilities'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Location from './components/Location'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import TrustIndicators from './components/TrustIndicators'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TrustIndicators />
      <Gallery />
      <Facilities />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Location />
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
