import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Services',     href: '#services'     },
  { label: 'Portfolio',    href: '#portfolio'    },
  { label: 'Why Me',       href: '#why-me'       },
  { label: 'Process',      href: '#process'      },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',      href: '#contact'      },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
      // Detect active section
      const sections = navLinks.map(l => l.href.replace('#',''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection('#' + sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-0'
          : 'py-2'
      }`}
    >
      {/* Glass bar */}
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-2xl border-b border-white/[0.05] shadow-2xl shadow-black/50'
            : 'bg-transparent'
        }`}
      >
        <div className="container-max flex items-center justify-between h-16 px-6">

          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="relative group"
          >
            <span
              className="font-display font-bold text-xl tracking-tight"
              style={{ letterSpacing: '-0.03em' }}
            >
              <span className="text-white group-hover:text-white/90 transition-colors">Site</span>
              <span
                className="text-gradient-animated"
                style={{ fontWeight: 800 }}
              >Rise</span>
            </span>
            {/* Glow on logo hover */}
            <span
              className="absolute -inset-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{ background: 'radial-gradient(circle at center, rgba(212,168,83,0.08) 0%, transparent 70%)' }}
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className={`nav-link relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === link.href
                    ? 'text-white'
                    : 'text-white/50 hover:text-white/90'
                }`}
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '-0.01em' }}
              >
                {link.label}
                {/* Active indicator */}
                {activeSection === link.href && (
                  <span
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ background: '#d4a853', boxShadow: '0 0 6px rgba(212,168,83,0.8)' }}
                  />
                )}
                {/* Hover background */}
                <span className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                  style={{ background: 'rgba(255,255,255,0.04)' }} />
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
              className="hidden md:inline-flex btn-primary text-sm py-2 px-5 rounded-lg"
              style={{ fontSize: '13px', padding: '8px 18px' }}
            >
              <span className="relative z-10">Get Started</span>
              <svg className="w-3.5 h-3.5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden relative w-8 h-8 flex items-center justify-center rounded-lg transition-colors"
              style={{ color: 'rgba(255,255,255,0.7)' }}
              aria-label="Toggle menu"
            >
              <div className="w-5 space-y-[5px]">
                <span className={`block h-[1.5px] bg-current transition-all duration-300 rounded-full ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
                <span className={`block h-[1.5px] bg-current transition-all duration-300 rounded-full ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
                <span className={`block h-[1.5px] bg-current transition-all duration-300 rounded-full ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Thin gold accent line at bottom of nav */}
        {scrolled && (
          <div className="h-px" style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(212,168,83,0.3) 30%, rgba(212,168,83,0.5) 50%, rgba(212,168,83,0.3) 70%, transparent 100%)'
          }} />
        )}
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ background: 'rgba(3,3,3,0.97)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
      >
        <div className="px-5 py-5 space-y-1">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
              className="flex items-center justify-between px-4 py-3 rounded-xl transition-all"
              style={{
                color: activeSection === link.href ? '#d4a853' : 'rgba(255,255,255,0.6)',
                background: activeSection === link.href ? 'rgba(212,168,83,0.06)' : 'transparent',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontWeight: 500,
                animationDelay: `${i * 0.05}s`,
              }}
            >
              <span>{link.label}</span>
              {activeSection === link.href && (
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#d4a853', boxShadow: '0 0 6px rgba(212,168,83,0.8)' }} />
              )}
            </a>
          ))}
          <div className="pt-3 pb-1">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
              className="btn-primary w-full justify-center block text-center text-sm"
            >
              <span className="relative z-10">Get Started</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
