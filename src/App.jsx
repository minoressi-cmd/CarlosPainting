import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Reviews from './components/Reviews'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Reviews />
      <CTA />
      <Contact />
      <Footer />
    </div>
  )
}
