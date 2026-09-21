import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/Layout'
import Hello from './pages/Hello'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Hello />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact-me" element={<Contact />} />
          <Route path="*" element={<Hello />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  )
}
