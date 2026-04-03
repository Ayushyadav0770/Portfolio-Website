import { useScrollReveal } from '../hooks/useScrollReveal'

const reasons = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Fast Delivery',
    description:
      'Landing pages in 1–2 days, full websites in 4–7 days. I respect your time and stick to deadlines.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 18h.01M8 21h8a2 2 0 002-2v-1a7 7 0 10-14 0v1a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Mobile-First Design',
    description:
      'Over 70% of users browse on phones. Every website I build looks perfect on all screen sizes.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Clean, Maintainable Code',
    description:
      'Well-structured, readable code so future updates are easy — whether I do them or someone else.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Affordable Pricing',
    description:
      'Professional quality at small-business prices. No inflated agency fees — just honest, fair rates.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'Great Communication',
    description:
      "You'll always know where your project stands. Regular updates, quick replies, zero ghosting.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Revisions Included',
    description:
      "Not happy with something? I'll fix it. Every project includes revision rounds until you're satisfied.",
  },
]

export default function WhyMe() {
  const headerRef = useScrollReveal()

  return (
    <section id="why-me" className="section-padding" style={{ background: '#0a0a0a' }}>
      <div className="container-max">
        <div ref={headerRef} className="reveal text-center mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#d4a853' }}>
            Why Work With Me
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4">
            What Makes Me Different
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Not just code — a complete experience that makes growing your business online easy and stress-free.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => (
            <ReasonCard key={reason.title} reason={reason} delay={i * 0.08} />
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
      className="reveal rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 flex gap-4"
      style={{
        background: '#111111',
        border: '1px solid rgba(255,255,255,0.06)',
        transitionDelay: `${delay}s`,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(212,168,83,0.2)' }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)' }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: 'rgba(212, 168, 83, 0.1)', color: '#d4a853' }}
      >
        {reason.icon}
      </div>
      <div>
        <h3 className="text-base font-bold text-white mb-1">{reason.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{reason.description}</p>
      </div>
    </div>
  )
}
