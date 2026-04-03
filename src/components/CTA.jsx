import { useScrollReveal } from '../hooks/useScrollReveal'

export default function CTA() {
  const ref = useScrollReveal()

  return (
    <section className="py-20 px-4 relative overflow-hidden" style={{ background: '#000000' }}>
      {/* Gold radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(212,168,83,0.08) 0%, transparent 65%)',
        }}
      />

      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-px gold-line" />

      {/* Orbs */}
      <div className="orb w-64 h-64 bg-amber-500 -top-20 -left-20" style={{ opacity: 0.06 }} />
      <div className="orb w-48 h-48 bg-yellow-600 -bottom-10 -right-10" style={{ opacity: 0.06 }} />

      <div className="container-max relative z-10 text-center" ref={ref}>
        <div className="reveal">
          <span
            className="inline-block text-sm font-medium px-4 py-1.5 rounded-full mb-6"
            style={{
              background: 'rgba(212,168,83,0.08)',
              border: '1px solid rgba(212,168,83,0.25)',
              color: '#d4a853',
            }}
          >
            Ready to grow your business online?
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Let's build your website today
          </h2>

          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-10">
            Stop losing customers to competitors with better websites. Get a professional, fast, and affordable website that works for your business — 24/7.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 text-lg"
            >
              Get Started — It's Free to Discuss
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            <a
              href="https://wa.me/919876543210?text=Hi!%20I%27d%20like%20to%20get%20a%20website%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-lg text-white/70 hover:text-white"
              style={{ border: '1px solid rgba(255,255,255,0.12)' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)' }}
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Me
            </a>
          </div>

          {/* Reassurance */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            {['Free consultation', 'No upfront payment', 'Fast response', 'Satisfaction guaranteed'].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <svg className="w-4 h-4" style={{ color: '#d4a853' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
