import { useScrollReveal } from '../hooks/useScrollReveal'

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Landing Page Development',
    price: '₹2,000 – ₹5,000',
    badge: 'Most Popular',
    description:
      'A high-converting, single-page website built to capture leads and turn visitors into customers.',
    includes: [
      'Fully responsive design',
      'Hero, services, and contact sections',
      'Contact form or WhatsApp CTA',
      'SEO-optimized structure',
      'Fast loading speed',
      'Delivered in 1–2 days',
    ],
    highlight: true,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: 'Multi-Page Website',
    price: 'Starting from ₹7,000',
    badge: 'Best Value',
    description:
      'A complete, professional business website with multiple pages to showcase everything your business offers.',
    includes: [
      'Up to 5 pages (Home, About, Services, etc.)',
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
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Website Redesign & Optimization',
    price: 'Custom Quote',
    badge: 'Performance',
    description:
      "Already have a website that looks outdated or loads slowly? I'll modernize it and improve its performance.",
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
    <section id="services" className="section-padding" style={{ background: '#0a0a0a' }}>
      <div className="container-max">
        {/* Header */}
        <div ref={ref} className="reveal text-center mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#d4a853' }}>
            What I Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4">
            Services & Pricing
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Transparent pricing, no hidden fees. Pick the plan that fits your business.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
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
      className="reveal relative flex flex-col rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2"
      style={service.highlight
        ? {
            background: 'linear-gradient(145deg, #1a1200 0%, #111111 60%, #0d0d0d 100%)',
            border: '1px solid rgba(212, 168, 83, 0.4)',
            boxShadow: '0 20px 60px rgba(212, 168, 83, 0.12)',
            transitionDelay: `${delay}s`,
          }
        : {
            background: '#111111',
            border: '1px solid rgba(255,255,255,0.06)',
            transitionDelay: `${delay}s`,
          }
      }
    >
      {/* Badge */}
      {service.badge && (
        <span
          className="absolute top-5 right-5 text-xs font-semibold px-3 py-1 rounded-full"
          style={service.highlight
            ? { background: 'rgba(212,168,83,0.15)', color: '#d4a853', border: '1px solid rgba(212,168,83,0.3)' }
            : { background: 'rgba(255,255,255,0.06)', color: '#a0a0a0', border: '1px solid rgba(255,255,255,0.08)' }
          }
        >
          {service.badge}
        </span>
      )}

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
        style={{ background: 'rgba(212, 168, 83, 0.1)', color: '#d4a853' }}
      >
        {service.icon}
      </div>

      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
      <p className="text-sm mb-4 leading-relaxed text-gray-500">
        {service.description}
      </p>

      {/* Price */}
      <p className="text-2xl font-extrabold mb-6 text-gradient">{service.price}</p>

      {/* Includes */}
      <ul className="space-y-2.5 flex-1">
        {service.includes.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm">
            <svg
              className="w-5 h-5 mt-0.5 flex-shrink-0"
              style={{ color: '#d4a853' }}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-400">{item}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contact"
        onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
        className="mt-8 block text-center font-semibold py-3 px-6 rounded-lg transition-all duration-200 active:scale-95"
        style={service.highlight
          ? {
              background: 'linear-gradient(135deg, #d4a853 0%, #f0c040 100%)',
              color: '#000',
              boxShadow: '0 4px 20px rgba(212,168,83,0.3)',
            }
          : {
              background: 'transparent',
              border: '1px solid rgba(212,168,83,0.35)',
              color: '#d4a853',
            }
        }
      >
        Get a Quote
      </a>
    </div>
  )
}
