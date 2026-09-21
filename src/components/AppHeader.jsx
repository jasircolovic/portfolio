import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { personal, navLinks } from '../data/content'

export default function AppHeader() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // Split: last tab (_contact-me) is pinned to the right like the template
  const mainTabs = navLinks.slice(0, -1)
  const lastTab = navLinks[navLinks.length - 1]

  return (
    <header className="sticky top-0 z-50 bg-bg border-b border-line">
      <div className="flex items-stretch h-14 text-sm">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center px-5 md:px-6 border-r border-line text-txt-bright hover:text-green transition-colors whitespace-nowrap"
          onClick={() => setOpen(false)}
        >
          {personal.logoName}
        </NavLink>

        {/* Desktop tabs */}
        <nav className="hidden md:flex items-stretch flex-1">
          {mainTabs.map((t) => (
            <NavLink
              key={t.href}
              to={t.href}
              end={t.href === '/'}
              className={({ isActive }) => `tab-link ${isActive ? 'active' : ''}`}
            >
              {t.label}
            </NavLink>
          ))}
          <div className="flex-1 border-r border-line" />
          <NavLink
            to={lastTab.href}
            className={({ isActive }) => `tab-link border-l !border-r-0 ${isActive ? 'active' : ''}`}
          >
            {lastTab.label}
          </NavLink>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden ml-auto px-5 flex items-center text-txt-bright"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {open && (
        <nav className="md:hidden border-t border-line bg-bg">
          {navLinks.map((t) => (
            <NavLink
              key={t.href}
              to={t.href}
              end={t.href === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center h-14 px-6 border-b border-line ${
                  isActive || pathname === t.href ? 'text-orange' : 'text-menu-text'
                }`
              }
            >
              {t.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}

function IconMenu() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <line x1="3" y1="7" x2="21" y2="7" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="17" x2="21" y2="17" />
    </svg>
  )
}

function IconClose() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </svg>
  )
}
