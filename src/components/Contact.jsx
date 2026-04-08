import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { useScrollReveal } from '../hooks/useScrollReveal'

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const budgetOptions = [
  'Rs 2,000 - Rs 5,000 (Landing Page)',
  'Rs 5,000 - Rs 10,000 (Small Business Site)',
  'Rs 10,000+ (Custom / Complex Project)',
  "Not sure yet -- let's discuss",
]

export default function Contact() {
  const headerRef  = useScrollReveal()
  const formRef    = useScrollReveal()
  const infoRef    = useScrollReveal()
  const formElRef  = useRef(null)

  const [form, setForm]     = useState({ from_name: '', from_email: '', budget: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    // Check credentials are set (dev guard)
    if (!SERVICE_ID || SERVICE_ID === 'YOUR_SERVICE_ID') {
      setErrorMsg('EmailJS is not configured yet. Please fill in .env with your credentials.')
      setStatus('idle')
      return
    }

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formElRef.current,
        { publicKey: PUBLIC_KEY }
      )
      setStatus('sent')
      setForm({ from_name: '', from_email: '', budget: '', message: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setErrorMsg('Something went wrong. Please try WhatsApp or email me directly.')
      setStatus('idle')
    }
  }

  const inputBase = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.08)',
    background: 'rgba(255,255,255,0.03)',
    color: '#ffffff',
    outline: 'none',
    fontSize: '14px',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden" style={{ background: '#030303' }}>
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at 30% 70%, rgba(212,168,83,0.04) 0%, transparent 55%)',
      }} />

      <div className="container-max relative z-10">
        <div ref={headerRef} className="reveal text-center mb-16">
          <div className="section-label mb-4">Get In Touch</div>
          <h2 className="font-display font-extrabold text-white mb-5" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', letterSpacing: '-0.03em' }}>
            Let's Build Your Website
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', maxWidth: '480px', margin: '0 auto', fontFamily: 'Plus Jakarta Sans', fontSize: '16px', lineHeight: 1.7 }}>
            Tell me about your project and I'll get back to you within a few hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div ref={infoRef} className="reveal lg:col-span-2 space-y-5">
            <h3 className="font-display font-bold text-white mb-5" style={{ fontSize: '18px', letterSpacing: '-0.02em' }}>Contact Info</h3>

            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                label: 'Email',
                value: 'ayushydv241@gmail.com',
                href: 'mailto:ayushydv@gmail.com',
                color: '#60a5fa',
              },
              {
                icon: (
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                ),
                label: 'WhatsApp',
                value: '+91 7909519682',
                href: 'https://wa.me/917909519682?text=Hi!%20I\'d%20like%20to%20discuss%20a%20website%20project.',
                color: '#22c55e',
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl transition-all duration-300"
                style={{ border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.025)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = item.color + '35'
                  e.currentTarget.style.background = item.color + '08'
                  e.currentTarget.style.transform = 'translateX(4px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.025)'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: item.color + '12', color: item.color }}
                >
                  {item.icon}
                </div>
                <div>
                  <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', fontFamily: 'Space Grotesk', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{item.label}</p>
                  <p className="font-semibold text-white text-sm" style={{ fontFamily: 'Plus Jakarta Sans' }}>{item.value}</p>
                </div>
                <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-60 transition-opacity" style={{ color: item.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/9179090519682?text=Hi!%20I'd%20like%20to%20discuss%20a%20website%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 w-full font-display font-semibold py-4 px-6 rounded-xl transition-all duration-300"
              style={{
                background: 'rgba(34,197,94,0.12)',
                border: '1px solid rgba(34,197,94,0.3)',
                color: '#4ade80',
                letterSpacing: '-0.01em',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(34,197,94,0.18)'
                e.currentTarget.style.borderColor = 'rgba(34,197,94,0.5)'
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(34,197,94,0.15)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(34,197,94,0.12)'
                e.currentTarget.style.borderColor = 'rgba(34,197,94,0.3)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <svg className="w-5 h-5 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>

            {/* Response time */}
            <div
              className="rounded-xl p-4"
              style={{ background: 'rgba(212,168,83,0.05)', border: '1px solid rgba(212,168,83,0.15)' }}
            >
              <p className="font-display font-semibold text-sm mb-1.5" style={{ color: '#d4a853', letterSpacing: '-0.01em' }}>
                Lightning Fast Response
              </p>
              <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '13px', lineHeight: 1.6, fontFamily: 'Plus Jakarta Sans' }}>
                I typically reply within 2-4 hours during business hours (Mon-Sat, 9 AM - 8 PM IST).
              </p>
            </div>
          </div>

          {/* Form */}
          <div ref={formRef} className="reveal lg:col-span-3" style={{ transitionDelay: '0.15s' }}>
            {status === 'sent' ? (
              <div
                className="h-full flex flex-col items-center justify-center text-center p-14 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(212,168,83,0.25)' }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: 'rgba(212,168,83,0.1)', border: '1px solid rgba(212,168,83,0.25)' }}
                >
                  <svg className="w-8 h-8" style={{ color: '#d4a853' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-white text-xl mb-2" style={{ letterSpacing: '-0.02em' }}>Message Sent!</h3>
                <p style={{ color: 'rgba(255,255,255,0.4)', maxWidth: '300px', fontFamily: 'Plus Jakarta Sans', lineHeight: 1.65, fontSize: '14px' }}>
                  Thanks for reaching out. I'll review your project details and get back to you within a few hours.
                </p>
                <button onClick={() => setStatus('idle')} className="mt-7 btn-secondary">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                ref={formElRef}
                onSubmit={handleSubmit}
                className="rounded-2xl p-8 space-y-5"
                style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold mb-2" htmlFor="name" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Space Grotesk', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Your Name *
                    </label>
                    <input
                      id="name" name="from_name" type="text" required
                      value={form.from_name} onChange={handleChange}
                      placeholder="Rajesh Kumar"
                      style={inputBase}
                      className="input-glow"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2" htmlFor="email" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Space Grotesk', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Email Address *
                    </label>
                    <input
                      id="email" name="from_email" type="email" required
                      value={form.from_email} onChange={handleChange}
                      placeholder="you@business.com"
                      style={inputBase}
                      className="input-glow"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" htmlFor="budget" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Space Grotesk', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Budget Range
                  </label>
                  <select
                    id="budget" name="budget"
                    value={form.budget} onChange={handleChange}
                    style={{ ...inputBase, color: form.budget ? '#fff' : 'rgba(255,255,255,0.3)' }}
                    className="input-glow"
                  >
                    <option value="" style={{ background: '#0e0e0e' }}>Select your budget range</option>
                    {budgetOptions.map((o) => (
                      <option key={o} value={o} style={{ background: '#0e0e0e' }}>{o}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" htmlFor="message" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Space Grotesk', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Tell me about your project *
                  </label>
                  <textarea
                    id="message" name="message" required rows={5}
                    value={form.message} onChange={handleChange}
                    placeholder="What type of website do you need? What does your business do? Any specific features or pages you want?"
                    style={{ ...inputBase, resize: 'none' }}
                    className="input-glow"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="w-5 h-5 animate-spin relative z-10" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      <span className="relative z-10">Sending...</span>
                    </>
                  ) : (
                    <>
                      <span className="relative z-10">Send My Project Details</span>
                      <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>

                {errorMsg && (
                  <div
                    className="flex items-start gap-3 px-4 py-3 rounded-xl text-sm"
                    style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)', color: '#fca5a5', fontFamily: 'Plus Jakarta Sans' }}
                  >
                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                    </svg>
                    {errorMsg}
                  </div>
                )}

                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.2)', textAlign: 'center', fontFamily: 'Plus Jakarta Sans' }}>
                  No spam. I'll only reach out about your project.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
