import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const budgetOptions = [
  '₹2,000 – ₹5,000 (Landing Page)',
  '₹5,000 – ₹10,000 (Small Business Site)',
  '₹10,000+ (Custom / Complex Project)',
  "Not sure yet — let's discuss",
]

export default function Contact() {
  const headerRef = useScrollReveal()
  const formRef   = useScrollReveal()
  const infoRef   = useScrollReveal()

  const [form, setForm]     = useState({ name: '', email: '', budget: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('sent')
    setForm({ name: '', email: '', budget: '', message: '' })
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '10px',
    border: '1px solid rgba(255,255,255,0.08)',
    background: '#0a0a0a',
    color: '#ffffff',
    outline: 'none',
    fontSize: '14px',
    transition: 'border-color 0.2s',
  }

  return (
    <section id="contact" className="section-padding" style={{ background: '#000000' }}>
      <div className="container-max">
        <div ref={headerRef} className="reveal text-center mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#d4a853' }}>
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4">
            Let's Build Your Website
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Tell me about your project and I'll get back to you within a few hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div ref={infoRef} className="reveal lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Contact Info</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    label: 'Email',
                    value: 'ayushydv241@gmail.com',
                    href:  'mailto:ayushydv@gmail.com',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    ),
                    label: 'WhatsApp',
                    value: '+91 7909519682',
                    href:  'https://wa.me/919876543210?text=Hi!%20I%27d%20like%20to%20discuss%20a%20website%20project.',
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl transition-all group"
                    style={{ border: '1px solid rgba(255,255,255,0.07)', background: '#111111' }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(212,168,83,0.3)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)' }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(212,168,83,0.1)', color: '#d4a853' }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">{item.label}</p>
                      <p className="text-sm font-semibold text-white">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919876543210?text=Hi!%20I%27d%20like%20to%20discuss%20a%20website%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 active:scale-95"
              style={{ boxShadow: '0 4px 20px rgba(34,197,94,0.2)' }}
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>

            {/* Response time */}
            <div
              className="rounded-xl p-4 text-sm"
              style={{ background: 'rgba(212,168,83,0.06)', border: '1px solid rgba(212,168,83,0.15)', color: '#d4a853' }}
            >
              <p className="font-semibold mb-1">⚡ Quick Response</p>
              <p className="text-gray-500">I typically reply within 2–4 hours during business hours (Mon–Sat, 9 AM – 8 PM IST).</p>
            </div>
          </div>

          {/* Form */}
          <div ref={formRef} className="reveal lg:col-span-3" style={{ transitionDelay: '0.1s' }}>
            {status === 'sent' ? (
              <div
                className="h-full flex flex-col items-center justify-center text-center p-12 rounded-2xl"
                style={{ background: '#111111', border: '1px solid rgba(212,168,83,0.2)' }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ background: 'rgba(212,168,83,0.1)' }}
                >
                  <svg className="w-8 h-8" style={{ color: '#d4a853' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-500 max-w-sm">
                  Thanks for reaching out. I'll review your project details and get back to you within a few hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 btn-secondary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-8 space-y-5"
                style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-1.5" htmlFor="name">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Rajesh Kumar"
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = 'rgba(212,168,83,0.5)' }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)' }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-1.5" htmlFor="email">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@business.com"
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = 'rgba(212,168,83,0.5)' }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)' }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-1.5" htmlFor="budget">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    style={{ ...inputStyle, color: form.budget ? '#fff' : '#6b7280' }}
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(212,168,83,0.5)' }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)' }}
                  >
                    <option value="" style={{ background: '#111' }}>Select your budget range</option>
                    {budgetOptions.map((o) => (
                      <option key={o} value={o} style={{ background: '#111' }}>{o}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-1.5" htmlFor="message">
                    Tell me about your project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What type of website do you need? What does your business do? Any specific features or pages you want?"
                    style={{ ...inputStyle, resize: 'none' }}
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(212,168,83,0.5)' }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary w-full justify-center py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send My Project Details
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-600 text-center">
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
