import { useScrollReveal } from '../hooks/useScrollReveal'

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Landing Page Development',
    price: '₹2,000 – ₹5,000',
    badge: 'Most Popular',
    badgeColor: '#d4a853',
    description: 'A high-converting, single-page website built to capture leads and turn visitors into customers.',
    includes: [
      'Fully responsive design',
      'Hero, services, and contact sections',
      'Contact form or WhatsApp CTA',
      'SEO-optimized structure',
      'Fast loading speed',
      'Delivered in 1–2 days',
    ],
    highlight: true,
    gradientFrom: 'rgba(212,168,83,0.1)',
    gradientTo: 'rgba(17,17,17,1)',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: 'Multi-Page Website',
    price: 'From ₹7,000',
    badge: 'Best Value',
    badgeColor: '#60a5fa',
    description: 'A complete, professional business website with multiple pages to showcase everything your business offers.',
    includes: [
      'Up to 5 pages (Home, About, Services…)',
      'Navigation & footer',
      'Mobile-first responsive design',
      'Contact form with email integration',
      'Basic SEO setup',
      'Delivered in 4–7 days',
    ],
    highlight: false,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Redesign & Optimization',
    price: 'Custom Quote',
    badge: 'Performance',
    badgeColor: '#a78bfa',
    description: "Already have a website that looks outdated or loads slowly? I'll modernize it and improve its performance.",
    includes: [
      'Modern UI/UX overhaul',
      'Mobile responsiveness fix',
      'Speed & performance optimization',
      'SEO improvements',
      'Clean, maintainable code',
      'Timeline based on scope',
    ],
    highlight: false,
  },
]

export default function Services() {
  const ref = useScrollReveal()

  return (
    <section id="services" className="section-padding relative overflow-hidden" style={{ background: '#070707' }}>
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(212,168,83,0.04) 0%, transparent 60%)' }}
      />

      <div className="container-max relative z-10">
        {/* Header */}
        <div ref={ref} className="reveal text-center mb-16">
          <div className="section-label mb-4">What I Offer</div>
          <h2
            className="font-display font-extrabold text-white mb-5"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', letterSpacing: '-0.03em' }}
          >
            Services & Pricing
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', maxWidth: '500px', margin: '0 auto', fontFamily: 'Plus Jakarta Sans', fontSize: '16px', lineHeight: 1.7 }}>
            Transparent pricing, no hidden fees. Pick the plan that fits your business.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, delay }) {
  const ref = useScrollReveal()

  return (
    <div
      ref={ref}
      className="reveal group relative flex flex-col rounded-2xl p-8 transition-all duration-500"
      style={{
        ...(service.highlight
          ? {
              background: `linear-gradient(145deg, ${service.gradientFrom} 0%, ${service.gradientTo} 60%)`,
              border: '1px solid rgba(212,168,83,0.4)',
              boxShadow: '0 20px 60px rgba(212,168,83,0.1)',
            }
          : {
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.06)',
            }
        ),
        transitionDelay: `${delay}s`,
        transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget
        if (!service.highlight) {
          el.style.borderColor = 'rgba(212,168,83,0.25)'
          el.style.background = 'rgba(255,255,255,0.04)'
        }
        el.style.transform = 'translateY(-6px)'
        el.style.boxShadow = service.highlight
          ? '0 30px 80px rgba(212,168,83,0.2)'
          : '0 24px 60px rgba(0,0,0,0.5), 0 0 30px rgba(212,168,83,0.06)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget
        if (!service.highlight) {
          el.style.borderColor = 'rgba(255,255,255,0.06)'
          el.style.background = 'rgba(255,255,255,0.025)'
        }
        el.style.transform = 'translateY(0)'
        el.style.boxShadow = service.highlight ? '0 20px 60px rgba(212,168,83,0.1)' : 'none'
      }}
    >
      {/* Badge */}
      {service.badge && (
        <span
          className="absolute top-5 right-5 text-xs font-bold px-3 py-1.5 rounded-full"
          style={{
            background: `${service.badgeColor}15`,
            color: service.badgeColor,
            border: `1px solid ${service.badgeColor}35`,
            fontFamily: 'Space Grotesk, sans-serif',
            letterSpacing: '0.03em',
          }}
        >
          {service.badge}
        </span>
      )}

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-7 transition-all duration-300 group-hover:scale-105"
        style={{
          background: service.highlight ? 'rgba(212,168,83,0.15)' : 'rgba(255,255,255,0.05)',
          color: '#d4a853',
          boxShadow: service.highlight ? '0 0 20px rgba(212,168,83,0.2)' : 'none',
        }}
      >
        {service.icon}
      </div>

      <h3
        className="font-display font-bold text-white mb-2.5"
        style={{ fontSize: '19px', letterSpacing: '-0.02em' }}
      >
        {service.title}
      </h3>

      <p style={{ color: 'rgba(255,255,255,0.38)', fontSize: '14px', lineHeight: '1.65', marginBottom: '18px', fontFamily: 'Plus Jakarta Sans' }}>
        {service.description}
      </p>

      {/* Price */}
      <div className="mb-7">
        <span
          className="font-display font-extrabold text-gradient"
          style={{ fontSize: '22px', letterSpacing: '-0.02em' }}
        >
          {service.price}
        </span>
      </div>

      {/* Divider */}
      <div className="mb-5" style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

      {/* Includes */}
      <ul className="space-y-2.5 flex-1">
        {service.includes.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm">
            <span
              className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(212,168,83,0.12)' }}
            >
              <svg className="w-2.5 h-2.5" style={{ color: '#d4a853' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Plus Jakarta Sans', lineHeight: 1.5 }}>{item}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contact"
        onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
        className="mt-8 block text-center font-display font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 active:scale-95"
        style={service.highlight
          ? {
              background: 'linear-gradient(135deg, #d4a853 0%, #f0c040 100%)',
              color: '#000',
              boxShadow: '0 4px 24px rgba(212,168,83,0.35)',
              letterSpacing: '-0.01em',
            }
          : {
              background: 'transparent',
              border: '1px solid rgba(212,168,83,0.3)',
              color: '#d4a853',
              letterSpacing: '-0.01em',
            }
        }
        onMouseEnter={e => {
          if (!service.highlight) {
            e.currentTarget.style.background = 'rgba(212,168,83,0.1)'
            e.currentTarget.style.borderColor = 'rgba(212,168,83,0.55)'
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(212,168,83,0.15)'
          }
        }}
        onMouseLeave={e => {
          if (!service.highlight) {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.borderColor = 'rgba(212,168,83,0.3)'
            e.currentTarget.style.boxShadow = 'none'
          }
        }}
      >
        Get a Quote
      </a>
    </div>
  )
}
