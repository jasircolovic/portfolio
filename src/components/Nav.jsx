import { useEffect, useState } from 'react'
import { navLinks } from '../data/content'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled
          ? 'bg-paper/85 backdrop-blur-md border-b border-rule/60'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-5 flex justify-between items-center">
        <a
          href="#top"
          className="font-serif italic text-base font-medium tracking-normal hover:text-accent transition-colors"
        >
          J. Colovic
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8 font-mono text-[0.72rem] tracking-[0.12em] uppercase">
          {navLinks.map((link) => (
            <li key={link.num}>
              <a
                href={link.href}
                className="text-ink hover:text-accent transition-colors inline-flex items-center gap-2"
              >
                <span className="text-accent font-medium">{link.num}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-px bg-ink transition-transform ${
              menuOpen ? 'translate-y-[6px] rotate-45' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-ink transition-opacity ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-ink transition-transform ${
              menuOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 bg-paper/95 backdrop-blur-md ${
          menuOpen ? 'max-h-96 opacity-100 border-b border-rule' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="px-6 py-6 flex flex-col gap-5 font-mono text-sm tracking-[0.12em] uppercase">
          {navLinks.map((link) => (
            <li key={link.num}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-ink hover:text-accent transition-colors inline-flex items-center gap-3"
              >
                <span className="text-accent font-medium">{link.num}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
