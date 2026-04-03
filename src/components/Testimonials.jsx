import { useScrollReveal } from '../hooks/useScrollReveal'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Owner, Kumar Fitness Studio',
    avatar: 'RK',
    rating: 5,
    text: "I needed a website for my gym on a tight budget and tight deadline. He delivered a stunning, fully mobile website in just 4 days. My customers keep complimenting how professional it looks. Worth every rupee!",
    project: 'Gym Landing Page',
  },
  {
    name: 'Priya Sharma',
    role: 'Co-founder, TechPilot SaaS',
    avatar: 'PS',
    rating: 5,
    text: "Our startup needed a high-converting landing page before our product launch. He built exactly what we envisioned — clean, fast, and optimized. Our waitlist signups increased by 40% compared to our old page.",
    project: 'SaaS Landing Page',
  },
  {
    name: 'Mehul Patel',
    role: 'Manager, Spice Route Restaurant',
    avatar: 'MP',
    rating: 5,
    text: "Communication was excellent throughout. He understood what our restaurant needed without us having to explain everything twice. The booking form alone has brought us 15+ new table reservations in the first month.",
    project: 'Restaurant Website',
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-current text-yellow-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const headerRef = useScrollReveal()

  return (
    <section id="testimonials" className="section-padding" style={{ background: '#0a0a0a' }}>
      <div className="container-max">
        <div ref={headerRef} className="reveal text-center mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#d4a853' }}>
            Client Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4">
            What Clients Say
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Real feedback from real business owners who trusted me with their online presence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} delay={i * 0.1} />
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-10 text-center">
          {[
            { value: '20+', label: 'Happy Clients' },
            { value: '5.0', label: 'Average Rating' },
            { value: '100%', label: 'Would Recommend' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-extrabold text-gradient">{stat.value}</p>
              <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
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
      className="reveal rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 flex flex-col"
      style={{
        background: '#111111',
        border: '1px solid rgba(255,255,255,0.06)',
        transitionDelay: `${delay}s`,
      }}
    >
      {/* Quote icon */}
      <svg className="w-8 h-8 mb-4" fill="currentColor" viewBox="0 0 32 32" style={{ color: 'rgba(212,168,83,0.3)' }}>
        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
      </svg>

      <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-6">"{testimonial.text}"</p>

      <div className="flex items-center gap-4">
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #d4a853, #f0c040)' }}
        >
          {testimonial.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-white text-sm truncate">{testimonial.name}</p>
          <p className="text-gray-600 text-xs truncate">{testimonial.role}</p>
        </div>
        <Stars count={testimonial.rating} />
      </div>

      <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <span
          className="text-xs font-medium px-2.5 py-1 rounded-md"
          style={{ background: 'rgba(212,168,83,0.08)', color: '#d4a853', border: '1px solid rgba(212,168,83,0.15)' }}
        >
          {testimonial.project}
        </span>
      </div>
    </div>
  )
}
