import { useScrollReveal } from '../hooks/useScrollReveal'

const reasons = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Fast Delivery',
    description: 'Landing pages in 1–2 days, full websites in 4–7 days. I respect your time and stick to deadlines.',
    color: '#f59e0b',
    bgColor: 'rgba(245,158,11,0.08)',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 18h.01M8 21h8a2 2 0 002-2v-1a7 7 0 10-14 0v1a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Mobile-First Design',
    description: 'Over 70% of users browse on phones. Every website I build looks perfect on all screen sizes.',
    color: '#22c55e',
    bgColor: 'rgba(34,197,94,0.08)',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Clean, Maintainable Code',
    description: 'Well-structured, readable code so future updates are easy — whether I do them or someone else.',
    color: '#60a5fa',
    bgColor: 'rgba(96,165,250,0.08)',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Affordable Pricing',
    description: 'Professional quality at small-business prices. No inflated agency fees — just honest, fair rates.',
    color: '#d4a853',
    bgColor: 'rgba(212,168,83,0.08)',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'Great Communication',
    description: "You'll always know where your project stands. Regular updates, quick replies, zero ghosting.",
    color: '#a78bfa',
    bgColor: 'rgba(167,139,250,0.08)',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Revisions Included',
    description: "Not happy with something? I'll fix it. Every project includes revision rounds until you're satisfied.",
    color: '#f472b6',
    bgColor: 'rgba(244,114,182,0.08)',
  },
]

export default function WhyMe() {
  const headerRef = useScrollReveal()

  return (
    <section id="why-me" className="section-padding relative overflow-hidden" style={{ background: '#070707' }}>
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at 20% 50%, rgba(212,168,83,0.03) 0%, transparent 60%)',
      }} />

      <div className="container-max relative z-10">
        <div ref={headerRef} className="reveal text-center mb-16">
          <div className="section-label mb-4">Why Work With Me</div>
          <h2 className="font-display font-extrabold text-white mb-5" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', letterSpacing: '-0.03em' }}>
            What Makes Me Different
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', maxWidth: '500px', margin: '0 auto', fontFamily: 'Plus Jakarta Sans', fontSize: '16px', lineHeight: 1.7 }}>
            Not just code — a complete experience that makes growing your business online easy and stress-free.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((reason, i) => (
            <ReasonCard key={reason.title} reason={reason} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ReasonCard({ reason, delay }) {
  const ref = useScrollReveal()

  return (
    <div
      ref={ref}
      className="reveal group rounded-2xl p-6 flex gap-4 transition-all duration-500 cursor-default"
      style={{
        background: 'rgba(255,255,255,0.025)',
        border: '1px solid rgba(255,255,255,0.06)',
        transitionDelay: `${delay}s`,
        transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = reason.color + '30'
        e.currentTarget.style.background = reason.bgColor
        e.currentTarget.style.transform = 'translateY(-3px)'
        e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.4)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
        e.currentTarget.style.background = 'rgba(255,255,255,0.025)'
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
        style={{ background: reason.bgColor, color: reason.color, border: '1px solid ' + reason.color + '20' }}
      >
        {reason.icon}
      </div>
      <div>
        <h3 className="font-display font-bold text-white mb-1.5" style={{ fontSize: '15px', letterSpacing: '-0.02em' }}>
          {reason.title}
        </h3>
        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', lineHeight: '1.6', fontFamily: 'Plus Jakarta Sans' }}>
          {reason.description}
        </p>
      </div>
    </div>
  )
}
