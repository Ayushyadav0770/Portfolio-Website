import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  {
    title: 'FitZone Gym',
    category: 'Gym Website',
    description:
      'A bold, high-energy website for a local gym featuring membership plans, class schedules, trainer profiles, and a lead-capture form.',
    tags: ['React', 'Tailwind CSS', 'Responsive'],
    color: 'from-orange-900/80 to-red-900/80',
    accent: '#ff6b35',
    icon: '🏋️',
    stats: [
      { label: 'Pages', value: '5' },
      { label: 'Load Time', value: '<1s' },
      { label: 'Score', value: '98/100' },
    ],
  },
  {
    title: 'Spice Garden Restaurant',
    category: 'Restaurant Website',
    description:
      'An elegant, appetite-whetting website for a restaurant with digital menu, table booking form, gallery, and Google Maps integration.',
    tags: ['React', 'CSS Animations', 'SEO'],
    color: 'from-amber-900/80 to-orange-900/80',
    accent: '#f59e0b',
    icon: '🍽️',
    stats: [
      { label: 'Pages', value: '4' },
      { label: 'Load Time', value: '<0.8s' },
      { label: 'Score', value: '96/100' },
    ],
  },
  {
    title: 'LaunchPad SaaS',
    category: 'Startup Landing Page',
    description:
      'A conversion-optimized landing page for a SaaS startup with hero section, feature highlights, pricing table, and waitlist signup.',
    tags: ['React', 'Framer Motion', 'CRO'],
    color: 'from-blue-900/80 to-indigo-900/80',
    accent: '#6366f1',
    icon: '🚀',
    stats: [
      { label: 'Conv. Rate', value: '+40%' },
      { label: 'Load Time', value: '<0.9s' },
      { label: 'Score', value: '99/100' },
    ],
  },
]

export default function Portfolio() {
  const ref = useScrollReveal()

  return (
    <section id="portfolio" className="section-padding" style={{ background: '#000000' }}>
      <div className="container-max">
        <div ref={ref} className="reveal text-center mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#d4a853' }}>
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Real websites built for real businesses. Clean code, great design, fast delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={i * 0.12} />
          ))}
        </div>

        {/* Bottom note */}
        <div ref={useScrollReveal()} className="reveal text-center mt-12">
          <p className="text-gray-500">
            Want to see more?{' '}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="font-semibold hover:opacity-80 transition-opacity"
              style={{ color: '#d4a853' }}
            >
              Let's discuss your project →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, delay }) {
  const ref = useScrollReveal()

  return (
    <div
      ref={ref}
      className="reveal group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2"
      style={{
        background: '#111111',
        border: '1px solid rgba(255,255,255,0.06)',
        transitionDelay: `${delay}s`,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(212,168,83,0.25)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.5)' }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.boxShadow = 'none' }}
    >
      {/* Preview */}
      <div className={`relative h-52 bg-gradient-to-br ${project.color} p-6 overflow-hidden`}>
        {/* Browser chrome mockup */}
        <div className="bg-black/40 backdrop-blur-sm rounded-t-lg h-full border border-white/10">
          <div className="flex items-center gap-1.5 p-2 border-b border-white/10">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            <div className="flex-1 mx-2 bg-white/10 rounded h-4" />
          </div>
          <div className="p-3 space-y-2">
            <div className="h-8 bg-white/10 rounded w-3/4" />
            <div className="h-4 bg-white/[0.07] rounded w-full" />
            <div className="h-4 bg-white/[0.07] rounded w-5/6" />
            <div className="h-8 rounded w-1/3 mt-4" style={{ background: `${project.accent}30` }} />
          </div>
        </div>

        <div className="absolute top-4 right-4 text-4xl opacity-70 group-hover:scale-110 transition-transform duration-300">
          {project.icon}
        </div>

        <div className="absolute bottom-4 left-4">
          <span className="text-white text-xs font-semibold px-3 py-1 rounded-full" style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.15)' }}>
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2.5 py-1 rounded-md"
              style={{ background: 'rgba(212,168,83,0.08)', color: '#d4a853', border: '1px solid rgba(212,168,83,0.15)' }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="flex justify-between pt-4 mb-5" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          {project.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-sm font-bold text-white">{stat.value}</p>
              <p className="text-xs text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full justify-center text-sm py-2.5 font-semibold rounded-lg transition-all duration-200 active:scale-95 flex items-center gap-2"
          style={{ background: 'rgba(212,168,83,0.1)', color: '#d4a853', border: '1px solid rgba(212,168,83,0.2)' }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(212,168,83,0.18)' }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(212,168,83,0.1)' }}
        >
          Build Something Similar
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  )
}
