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
  const [scrolled,     setScrolled]     = useState(false)
  const [menuOpen,     setMenuOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="container-max flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' }) }}
          className="font-bold text-xl tracking-tight text-white"
        >
          Make<span style={{ color: '#d4a853' }}>My</span>Website
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
              className="px-3 py-2 rounded-md text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
            className="hidden md:inline-flex btn-primary text-sm py-2 px-5"
          >
            Get Started
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md text-white/70 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-5 space-y-1.5">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } bg-black/95 backdrop-blur-xl border-b border-white/[0.06]`}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
              className="block px-4 py-3 rounded-lg text-white/70 hover:text-white hover:bg-white/[0.05] font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
              className="btn-primary w-full justify-center block text-center"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
