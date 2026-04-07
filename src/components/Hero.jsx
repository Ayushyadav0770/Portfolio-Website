import { useState, useEffect } from 'react'

const stats = [
  { value: '20+', label: 'Projects Delivered' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '1–7', label: 'Days Delivery' },
  { value: '₹2K+', label: 'Starting Price' },
]

// Rotating words for animated headline
const rotatingWords = ['businesses grow', 'brands stand out', 'conversions soar', 'ideas come alive']

export default function Hero() {
  const [wordIndex, setWordIndex]   = useState(0)
  const [displayed, setDisplayed]   = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [visible, setVisible]       = useState(false)

  // Typewriter effect
  useEffect(() => {
    const current = rotatingWords[wordIndex]
    let timeout

    if (!isDeleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2200)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
      } else {
        setIsDeleting(false)
        setWordIndex((i) => (i + 1) % rotatingWords.length)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, wordIndex])

  // Mount animation
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="hero-gradient relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Background layers ── */}
      {/* Animated orbs */}
      <div className="orb w-[600px] h-[600px] bg-amber-500 -top-32 -left-40" style={{ animationDelay: '0s', opacity: 0.09 }} />
      <div className="orb w-96 h-96 bg-yellow-600 -bottom-20 -right-20" style={{ animationDelay: '3s', opacity: 0.07 }} />
      <div className="orb w-72 h-72 bg-amber-400 top-1/3 right-1/4 hidden lg:block" style={{ animationDelay: '5s', opacity: 0.05 }} />

      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-30" />

      {/* Gold top line */}
      <div className="absolute top-0 left-0 right-0 h-px gold-line opacity-60" />

      {/* Floating particles */}
      {[
        { size: 3, x: '15%', y: '20%', delay: '0s',  dur: '12s', color: '#d4a853' },
        { size: 2, x: '85%', y: '35%', delay: '2s',  dur: '15s', color: '#f0c040' },
        { size: 4, x: '70%', y: '70%', delay: '4s',  dur: '10s', color: '#d4a853' },
        { size: 2, x: '25%', y: '75%', delay: '1s',  dur: '18s', color: '#f5cc4a' },
        { size: 3, x: '50%', y: '15%', delay: '6s',  dur: '14s', color: '#d4a853' },
        { size: 2, x: '90%', y: '80%', delay: '3s',  dur: '11s', color: '#f0c040' },
      ].map((p, i) => (
        <div
          key={i}
          className="particle absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: p.x,
            top: p.y,
            background: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            animationDelay: p.delay,
            animationDuration: p.dur,
          }}
        />
      ))}

      {/* ── Content ── */}
      <div className="container-max relative z-10 px-4 text-center" style={{ paddingTop: '80px' }}>

        {/* Availability badge */}
        <div
          className={`floating-badge inline-flex items-center gap-2.5 text-sm font-medium px-5 py-2.5 rounded-full mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{
            background: 'rgba(212, 168, 83, 0.07)',
            border: '1px solid rgba(212, 168, 83, 0.2)',
            color: '#d4a853',
            backdropFilter: 'blur(8px)',
            fontFamily: 'Space Grotesk, sans-serif',
            letterSpacing: '0.01em',
            transitionDelay: '0.1s',
          }}
        >
          <span className="avail-dot w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
          Available for new projects
          <span style={{ color: 'rgba(212,168,83,0.5)' }}>•</span>
          <span style={{ fontSize: '11px', opacity: 0.8 }}>Fast delivery</span>
        </div>

        {/* Main headline */}
        <h1
          className={`font-display font-extrabold text-white leading-[1.06] mb-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{
            fontSize: 'clamp(2.4rem, 6vw, 5rem)',
            letterSpacing: '-0.04em',
            transitionDelay: '0.2s',
          }}
        >
          I build modern websites
          <br className="hidden sm:block" />
          that help{' '}
          <span
            className="relative inline-block"
            style={{
              background: 'linear-gradient(135deg, #d4a853 0%, #f5cc4a 45%, #ffe680 60%, #f5cc4a 75%, #d4a853 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'shimmer 3s linear infinite',
            }}
          >
            {displayed}
            <span
              className="inline-block w-0.5 h-[0.85em] ml-1 align-middle"
              style={{
                background: '#d4a853',
                animation: 'blink 0.75s step-end infinite',
              }}
            />
          </span>
        </h1>

        {/* Sub-heading */}
        <p
          className={`text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{
            color: 'rgba(255,255,255,0.45)',
            transitionDelay: '0.35s',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontWeight: 400,
          }}
        >
          Freelance frontend developer specializing in landing pages and business websites —
          delivered fast, built right, and priced for real businesses.
        </p>

        {/* CTA buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '0.5s' }}
        >
          <button
            onClick={() => scrollTo('#contact')}
            className="btn-primary text-base px-8 py-4"
            style={{ fontSize: '15px', fontWeight: 700 }}
          >
            <span className="relative z-10">Get Your Website</span>
            <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

          <button
            onClick={() => scrollTo('#portfolio')}
            className="group inline-flex items-center gap-2.5 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
            style={{
              border: '1px solid rgba(255,255,255,0.12)',
              color: 'rgba(255,255,255,0.6)',
              fontSize: '15px',
              fontFamily: 'Space Grotesk, sans-serif',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
              e.currentTarget.style.color = '#fff'
              e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
              e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
              e.currentTarget.style.background = 'transparent'
            }}
          >
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            View My Work
          </button>
        </div>

        {/* Trust stats */}
        <div
          className={`mt-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '0.65s' }}
        >
          {/* Divider */}
          <div className="flex items-center gap-4 mb-8 justify-center">
            <div className="h-px flex-1 max-w-[100px]" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08))' }} />
            <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '11px', letterSpacing: '0.15em', fontFamily: 'Space Grotesk', textTransform: 'uppercase' }}>Trusted by businesses</span>
            <div className="h-px flex-1 max-w-[100px]" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.08), transparent)' }} />
          </div>

          <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-4">
                {i > 0 && <div className="hidden sm:block w-px h-8" style={{ background: 'rgba(255,255,255,0.07)' }} />}
                <div className="text-center group cursor-default">
                  <div
                    className="text-3xl font-display font-extrabold text-gradient mb-0.5 transition-transform duration-300 group-hover:scale-105"
                    style={{ letterSpacing: '-0.03em' }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.05em', fontFamily: 'Plus Jakarta Sans' }}>
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 flex flex-col items-center gap-2 ${visible ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '0.9s' }}
      >
        <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.12em', fontFamily: 'Space Grotesk', textTransform: 'uppercase' }}>scroll</span>
        <div
          className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
          style={{ border: '1px solid rgba(255,255,255,0.1)' }}
        >
          <div
            className="w-1 h-2 rounded-full"
            style={{
              background: '#d4a853',
              animation: 'scrollBob 1.6s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scrollBob {
          0%,100% { transform: translateY(0); opacity: 1; }
          50%      { transform: translateY(8px); opacity: 0.4; }
        }
        @keyframes blink {
          0%,100% { opacity: 1; }
          50%      { opacity: 0; }
        }
      `}</style>
    </section>
  )
}
