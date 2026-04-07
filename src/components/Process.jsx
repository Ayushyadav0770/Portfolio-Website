import { useScrollReveal } from '../hooks/useScrollReveal'

const steps = [
  {
    number: '01',
    title: 'Discuss Requirements',
    description: 'We hop on a quick call or chat on WhatsApp. You tell me what your business does, what you need, and any design preferences. No tech knowledge required.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    duration: 'Day 1',
    color: '#60a5fa',
  },
  {
    number: '02',
    title: 'Design & Development',
    description: "I get to work — building your website with clean code and a design tailored to your brand. You get a preview link to see the progress.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    duration: 'Days 1–3',
    color: '#d4a853',
  },
  {
    number: '03',
    title: 'Revisions',
    description: "You review the website and share feedback. I make the changes until you're completely happy with the result. We iterate until it's perfect.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    duration: 'Days 2–5',
    color: '#a78bfa',
  },
  {
    number: '04',
    title: 'Delivery',
    description: 'Once you approve, I deliver the final files or deploy the website live. You get everything — source code, assets, and a handover walkthrough.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M5 13l4 4L19 7" />
      </svg>
    ),
    duration: 'Day 4–7',
    color: '#22c55e',
  },
]

export default function Process() {
  const headerRef = useScrollReveal()

  return (
    <section id="process" className="section-padding relative overflow-hidden" style={{ background: '#030303' }}>
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at 50% 100%, rgba(212,168,83,0.03) 0%, transparent 60%)',
      }} />

      <div className="container-max relative z-10">
        <div ref={headerRef} className="reveal text-center mb-16">
          <div className="section-label mb-4">How It Works</div>
          <h2 className="font-display font-extrabold text-white mb-5" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', letterSpacing: '-0.03em' }}>
            Simple 4-Step Process
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', maxWidth: '480px', margin: '0 auto', fontFamily: 'Plus Jakarta Sans', fontSize: '16px', lineHeight: 1.7 }}>
            From idea to live website in as little as 7 days. No complicated processes.
          </p>
        </div>

        <div className="relative">
          {/* Desktop connector line */}
          <div
            className="hidden lg:block absolute top-14 left-0 right-0 mx-20"
            style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(212,168,83,0.25) 15%, rgba(212,168,83,0.25) 85%, transparent)' }}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <StepCard key={step.number} step={step} delay={i * 0.12} />
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <p style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'Plus Jakarta Sans', marginBottom: '16px' }}>Ready to get started?</p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            <span className="relative z-10">Start Your Project Today</span>
            <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

function StepCard({ step, delay }) {
  const ref = useScrollReveal()

  return (
    <div
      ref={ref}
      className="reveal group flex flex-col items-center text-center"
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Icon circle */}
      <div
        className="relative w-28 h-28 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:-translate-y-2"
        style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          color: step.color,
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = step.color + '10'
          e.currentTarget.style.borderColor = step.color + '35'
          e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.4), 0 0 20px ' + step.color + '15'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        {step.icon}

        {/* Step number badge */}
        <span
          className="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-xs font-display font-extrabold text-black"
          style={{ background: 'linear-gradient(135deg, #d4a853, #f0c040)', boxShadow: '0 4px 12px rgba(212,168,83,0.4)' }}
        >
          {step.number}
        </span>
      </div>

      {/* Duration pill */}
      <span
        className="text-xs font-semibold px-3 py-1.5 rounded-full mb-3"
        style={{
          background: step.color + '10',
          color: step.color,
          border: '1px solid ' + step.color + '25',
          fontFamily: 'Space Grotesk',
          letterSpacing: '0.02em',
        }}
      >
        {step.duration}
      </span>

      <h3 className="font-display font-bold text-white mb-2" style={{ fontSize: '16px', letterSpacing: '-0.02em' }}>
        {step.title}
      </h3>
      <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', lineHeight: '1.65', fontFamily: 'Plus Jakarta Sans' }}>
        {step.description}
      </p>
    </div>
  )
}
