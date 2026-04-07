const navLinks = [
  { label: 'Services',     href: '#services'     },
  { label: 'Portfolio',    href: '#portfolio'    },
  { label: 'Why Me',       href: '#why-me'       },
  { label: 'Process',      href: '#process'      },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',      href: '#contact'      },
]

export default function Footer() {
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  const year = new Date().getFullYear()

  return (
    <footer
      className="px-4 pt-14 pb-8 relative overflow-hidden"
      style={{ background: '#020202', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      {/* Subtle glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at 50% 0%, rgba(212,168,83,0.04) 0%, transparent 50%)',
      }} />

      <div className="container-max relative z-10">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); scrollTo('#hero') }}
              className="inline-block mb-4"
            >
              <span className="font-display font-bold text-xl tracking-tight" style={{ letterSpacing: '-0.03em' }}>
                <span className="text-white">Make</span>
                <span className="text-gradient-animated">My</span>
                <span className="text-white">Website</span>
              </span>
            </a>
            <p style={{ fontSize: '13px', lineHeight: '1.7', color: 'rgba(255,255,255,0.3)', fontFamily: 'Plus Jakarta Sans', marginBottom: '20px' }}>
              Freelance frontend developer building modern, fast, and affordable websites for businesses that want to grow online.
            </p>

            {/* Social links */}
            <div className="flex gap-2.5">
              {[
                {
                  href: 'https://wa.me/919876543210',
                  label: 'WhatsApp',
                  hoverBg: '#16a34a',
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  ),
                },
                {
                  href: 'https://github.com/',
                  label: 'GitHub',
                  hoverBg: 'rgba(212,168,83,0.2)',
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  ),
                },
                {
                  href: 'https://linkedin.com/',
                  label: 'LinkedIn',
                  hoverBg: 'rgba(212,168,83,0.2)',
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.35)', border: '1px solid rgba(255,255,255,0.07)' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = s.hoverBg
                    e.currentTarget.style.color = '#fff'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                    e.currentTarget.style.color = 'rgba(255,255,255,0.35)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5" style={{ fontSize: '13px', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>Quick Links</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                    className="link-underline text-sm transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'Plus Jakarta Sans' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#d4a853' }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.35)' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold mb-5" style={{ fontSize: '13px', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>Services</h4>
            <ul className="space-y-2.5">
              {['Landing Page Development', 'Multi-Page Business Website', 'Website Redesign', 'Performance Optimization', 'SEO Setup'].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); scrollTo('#services') }}
                    className="link-underline text-sm transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'Plus Jakarta Sans' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#d4a853' }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.35)' }}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Gold divider */}
        <div className="gold-line opacity-20 mb-7" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.2)', fontFamily: 'Plus Jakarta Sans' }}>
            &copy; {year} MakeMyWebsite. All rights reserved.
          </p>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.2)', fontFamily: 'Plus Jakarta Sans' }}>
            Built with{' '}
            <span style={{ color: '#d4a853' }}>React</span>
            {' '}&{' '}
            <span style={{ color: '#d4a853' }}>Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
