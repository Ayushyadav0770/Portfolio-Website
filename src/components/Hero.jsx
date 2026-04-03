export default function Hero() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="hero-gradient relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Decorative orbs */}
      <div className="orb w-[500px] h-[500px] bg-amber-500 top-[-120px] left-[-150px]" style={{ animationDelay: '0s' }} />
      <div className="orb w-80 h-80 bg-yellow-600 bottom-[-80px] right-[-80px]" style={{ animationDelay: '3s' }} />
      <div className="orb w-64 h-64 bg-amber-400 top-1/2 left-1/4 hidden lg:block" style={{ animationDelay: '5s', opacity: 0.06 }} />

      {/* Fine grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Thin gold horizontal line across middle */}
      <div className="absolute top-0 left-0 right-0 h-px gold-line opacity-40" />

      <div className="container-max relative z-10 px-4 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full mb-8"
          style={{
            background: 'rgba(212, 168, 83, 0.08)',
            border: '1px solid rgba(212, 168, 83, 0.25)',
            color: '#d4a853',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Available for new projects
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
          I build modern websites{' '}
          <br className="hidden sm:block" />
          that help{' '}
          <span className="text-gradient">businesses grow</span>
        </h1>

        {/* Sub-heading */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Freelance frontend developer specializing in landing pages and business websites —
          delivered fast, built right, and priced for real businesses.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollTo('#contact')}
            className="btn-primary text-base px-8 py-4 text-lg"
          >
            Get Your Website
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <button
            onClick={() => scrollTo('#portfolio')}
            className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-lg transition-all duration-200 text-lg text-white/70 hover:text-white"
            style={{ border: '1px solid rgba(255,255,255,0.15)' }}
          >
            View My Work
          </button>
        </div>

        {/* Social proof bar */}
        <div className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm">
          {[
            { value: '20+', label: 'Projects Delivered' },
            { value: '100%', label: 'Client Satisfaction' },
            { value: '1–7', label: 'Days Delivery' },
            { value: '₹2K+', label: 'Starting Price' },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-3">
              {i > 0 && <span className="hidden sm:block w-px h-6 bg-white/10" />}
              <div className="text-left">
                <span className="text-2xl font-bold text-gradient">{stat.value}</span>
                <span className="block text-xs text-gray-500 mt-0.5">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" style={{ color: 'rgba(212,168,83,0.4)' }}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
