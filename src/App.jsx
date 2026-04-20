import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Work from './components/Work'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="paper-grain">
      <Nav />
      <Hero />
      <Marquee />
      <Work />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}
