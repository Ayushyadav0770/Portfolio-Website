import { useScrollReveal } from '../hooks/useScrollReveal'

const steps = [
  {
    number: '01',
    title: 'Discuss Requirements',
    description:
      'We hop on a quick call or chat on WhatsApp. You tell me what your business does, what you need, and any design preferences. No tech knowledge required — just your goals.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    duration: 'Day 1',
  },
  {
    number: '02',
    title: 'Design & Development',
    description:
      "I get to work — building your website with clean code and a design tailored to your brand. You get a preview link to see the progress before it's finished.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    duration: 'Days 1–3',
  },
  {
    number: '03',
    title: 'Revisions',
    description:
      "You review the website and share feedback. I make the changes until you're completely happy with the result. We iterate until it's perfect.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    duration: 'Days 2–5',
  },
  {
    number: '04',
    title: 'Delivery',
    description:
      'Once you approve, I deliver the final files or deploy the website live. You get everything you need — source code, assets, and a handover walkthrough.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M5 13l4 4L19 7" />
      </svg>
    ),
    duration: 'Day 4–7',
  },
]

export default function Process() {
  const headerRef = useScrollReveal()

  return (
    <section id="process" className="section-padding" style={{ background: '#000000' }}>
      <div className="container-max">
        <div ref={headerRef} className="reveal text-center mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#d4a853' }}>
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4">
            Simple 4-Step Process
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            From idea to live website in as little as 7 days. No complicated processes.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div
            className="hidden lg:block absolute top-12 left-0 right-0 h-px mx-32"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(212,168,83,0.3) 20%, rgba(212,168,83,0.3) 80%, transparent)' }}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <StepCard key={step.number} step={step} delay={i * 0.12} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-500 mb-4">Ready to get started?</p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Start Your Project Today
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
      className="reveal flex flex-col items-center text-center"
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Icon circle */}
      <div
        className="relative w-24 h-24 rounded-2xl flex items-center justify-center mb-5"
        style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.08)', color: '#d4a853' }}
      >
        {step.icon}
        <span
          className="absolute -top-2 -right-2 w-7 h-7 text-black text-xs font-bold rounded-full flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #d4a853, #f0c040)' }}
        >
          {step.number}
        </span>
      </div>

      <span
        className="text-xs font-semibold px-3 py-1 rounded-full mb-3"
        style={{ background: 'rgba(212,168,83,0.1)', color: '#d4a853', border: '1px solid rgba(212,168,83,0.2)' }}
      >
        {step.duration}
      </span>

      <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
    </div>
  )
}
