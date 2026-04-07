import { useScrollReveal } from '../hooks/useScrollReveal'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Owner, Kumar Fitness Studio',
    avatar: 'RK',
    rating: 5,
    text: "I needed a website for my gym on a tight budget and tight deadline. He delivered a stunning, fully mobile website in just 4 days. My customers keep complimenting how professional it looks. Worth every rupee!",
    project: 'Gym Landing Page',
    color: '#f59e0b',
  },
  {
    name: 'Priya Sharma',
    role: 'Co-founder, TechPilot SaaS',
    avatar: 'PS',
    rating: 5,
    text: "Our startup needed a high-converting landing page before our product launch. He built exactly what we envisioned — clean, fast, and optimized. Our waitlist signups increased by 40% compared to our old page.",
    project: 'SaaS Landing Page',
    color: '#6366f1',
  },
  {
    name: 'Mehul Patel',
    role: 'Manager, Spice Route Restaurant',
    avatar: 'MP',
    rating: 5,
    text: "Communication was excellent throughout. He understood what our restaurant needed without us having to explain everything twice. The booking form alone has brought us 15+ new table reservations in the first month.",
    project: 'Restaurant Website',
    color: '#22c55e',
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 fill-current text-yellow-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const headerRef = useScrollReveal()

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden" style={{ background: '#070707' }}>
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at 50% 50%, rgba(212,168,83,0.03) 0%, transparent 65%)',
      }} />

      <div className="container-max relative z-10">
        <div ref={headerRef} className="reveal text-center mb-16">
          <div className="section-label mb-4">Client Stories</div>
          <h2 className="font-display font-extrabold text-white mb-5" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', letterSpacing: '-0.03em' }}>
            What Clients Say
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', maxWidth: '480px', margin: '0 auto', fontFamily: 'Plus Jakarta Sans', fontSize: '16px', lineHeight: 1.7 }}>
            Real feedback from real business owners who trusted me with their online presence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} delay={i * 0.1} />
          ))}
        </div>

        {/* Trust stats */}
        <div ref={useScrollReveal()} className="reveal mt-16 flex flex-wrap justify-center gap-x-14 gap-y-8">
          {[
            { value: '20+', label: 'Happy Clients' },
            { value: '5.0', label: 'Average Rating' },
            { value: '100%', label: 'Would Recommend' },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-6">
              {i > 0 && <div className="hidden sm:block w-px h-10" style={{ background: 'rgba(255,255,255,0.07)' }} />}
              <div className="text-center">
                <p className="font-display font-extrabold text-gradient" style={{ fontSize: '2rem', letterSpacing: '-0.03em' }}>{stat.value}</p>
                <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '12px', marginTop: '2px', fontFamily: 'Space Grotesk', letterSpacing: '0.04em' }}>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial, delay }) {
  const ref = useScrollReveal()

  return (
    <div
      ref={ref}
      className="reveal group rounded-2xl p-7 flex flex-col transition-all duration-500"
      style={{
        background: 'rgba(255,255,255,0.025)',
        border: '1px solid rgba(255,255,255,0.06)',
        transitionDelay: `${delay}s`,
        transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = testimonial.color + '30'
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 24px 60px rgba(0,0,0,0.5)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Large quote mark */}
      <div className="quote-mark leading-none mb-2 select-none">"</div>

      <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '14px', lineHeight: '1.75', flex: 1, marginBottom: '20px', fontFamily: 'Plus Jakarta Sans', fontStyle: 'italic' }}>
        {testimonial.text}
      </p>

      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-black font-display font-bold text-xs flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #d4a853, #f0c040)', boxShadow: '0 4px 12px rgba(212,168,83,0.3)' }}
        >
          {testimonial.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-display font-semibold text-white text-sm truncate" style={{ letterSpacing: '-0.01em' }}>
            {testimonial.name}
          </p>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '11px', truncate: true, fontFamily: 'Plus Jakarta Sans' }}>
            {testimonial.role}
          </p>
        </div>
        <Stars count={testimonial.rating} />
      </div>

      <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <span
          className="text-xs font-medium px-2.5 py-1 rounded-md"
          style={{
            background: testimonial.color + '10',
            color: testimonial.color,
            border: '1px solid ' + testimonial.color + '25',
            fontFamily: 'Space Grotesk',
          }}
        >
          {testimonial.project}
        </span>
      </div>
    </div>
  )
}
