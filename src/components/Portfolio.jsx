import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  {
    title: 'Ubud Bali Experience',
    category: 'Travel & Tourism',
    description:
      'A visually stunning promotional banner and landing page for an immersive Ubud, Bali travel experience — capturing the lush jungle aesthetic and cultural richness.',
    tags: ['Design', 'Branding', 'Tourism'],
    accent: '#22c55e',
    accentDark: '#15803d',
    image: '/image.png',
    isImage: true,
    featured: true,
    liveUrl: 'https://cafe-ubud.vercel.app/',
    stats: [
      { label: 'Type',    value: 'Banner' },
      { label: 'Style',   value: 'Premium' },
      { label: 'Score',   value: '100/100' },
    ],
  },
  {
    title: 'YK PRODUCE',
    category: 'Video Production Studio',
    description:
      'A cinematic, high-end website for a Japanese video production company — featuring separate Wedding & Creation sections, a showreel player, and a bold B&W aesthetic.',
    tags: ['React', 'Motion', 'Cinematic'],
    accent: '#e2e2e2',
    accentDark: '#a0a0a0',
    image: '/ykproduce-banner.png',
    isImage: true,
    featured: true,
    liveUrl: 'https://yk-produce.netlify.app',
    stats: [
      { label: 'Sections', value: '2' },
      { label: 'Style',    value: 'B&W Film' },
      { label: 'Score',    value: '99/100' },
    ],
  },
  {
    title: 'FitZone Gym',
    category: 'Gym Website',
    description:
      'A bold, high-energy website for a local gym featuring membership plans, class schedules, trainer profiles, and a lead-capture form.',
    tags: ['React', 'Tailwind CSS', 'Responsive'],
    accent: '#ff6b35',
    accentDark: '#c0440a',
    color: 'from-orange-900/80 to-red-900/80',
    icon: '🏋️',
    isImage: false,
    stats: [
      { label: 'Pages',     value: '5' },
      { label: 'Load Time', value: '<1s' },
      { label: 'Score',     value: '98/100' },
    ],
  },
  {
    title: 'Spice Garden Restaurant',
    category: 'Restaurant Website',
    description:
      'An elegant, appetite-whetting website for a restaurant with digital menu, table booking form, gallery, and Google Maps integration.',
    tags: ['React', 'CSS Animations', 'SEO'],
    accent: '#f59e0b',
    accentDark: '#b45309',
    color: 'from-amber-900/80 to-orange-900/80',
    icon: '🍽️',
    isImage: false,
    stats: [
      { label: 'Pages',     value: '4' },
      { label: 'Load Time', value: '<0.8s' },
      { label: 'Score',     value: '96/100' },
    ],
  },
  {
    title: 'LaunchPad SaaS',
    category: 'Startup Landing Page',
    description:
      'A conversion-optimized landing page for a SaaS startup with hero section, feature highlights, pricing table, and waitlist signup.',
    tags: ['React', 'Framer Motion', 'CRO'],
    accent: '#6366f1',
    accentDark: '#3730a3',
    color: 'from-blue-900/80 to-indigo-900/80',
    icon: '🚀',
    isImage: false,
    stats: [
      { label: 'Conv. Rate', value: '+40%' },
      { label: 'Load Time',  value: '<0.9s' },
      { label: 'Score',      value: '99/100' },
    ],
  },
]

export default function Portfolio() {
  const ref = useScrollReveal()

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden" style={{ background: '#030303' }}>
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(212,168,83,0.03) 0%, transparent 60%)' }}
      />

      <div className="container-max relative z-10">
        {/* Header */}
        <div ref={ref} className="reveal text-center mb-16">
          <div className="section-label mb-4">My Work</div>
          <h2
            className="font-display font-extrabold text-white mb-5"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', letterSpacing: '-0.03em' }}
          >
            Featured Projects
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', maxWidth: '480px', margin: '0 auto', fontFamily: 'Plus Jakarta Sans', fontSize: '16px', lineHeight: 1.7 }}>
            Real websites built for real businesses. Clean code, great design, fast delivery.
          </p>
        </div>

        {/* Grid – two featured image cards on top, then 3 mock projects below */}
        <div className="space-y-6">
          {/* Featured image cards */}
          <div className="grid lg:grid-cols-2 gap-6">
            {projects.filter(p => p.isImage).map((project, i) => (
              <FeaturedProjectCard key={project.title} project={project} delay={i * 0.1} />
            ))}
          </div>

          {/* Other projects */}
          <div className="grid md:grid-cols-3 gap-6">
            {projects.filter(p => !p.isImage).map((project, i) => (
              <ProjectCard key={project.title} project={project} delay={i * 0.1} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div ref={useScrollReveal()} className="reveal text-center mt-14">
          <p style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'Plus Jakarta Sans', fontSize: '15px' }}>
            Want to see more?{' '}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="font-semibold transition-opacity hover:opacity-80"
              style={{ color: '#d4a853', textDecoration: 'underline', textDecorationColor: 'rgba(212,168,83,0.4)' }}
            >
              Let's discuss your project →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

/* ── Featured image card ─────────────────────────── */
function FeaturedProjectCard({ project, delay = 0 }) {
  const ref = useScrollReveal()
  const [hovered, setHovered] = useState(false)
  const accent = project.accent || '#22c55e'

  return (
    <div
      ref={ref}
      className="reveal group relative rounded-2xl overflow-hidden cursor-pointer project-card flex flex-col"
      style={{
        background: '#0e0e0e',
        border: `1px solid ${hovered ? accent + '40' : 'rgba(255,255,255,0.07)'}`,
        boxShadow: hovered ? `0 30px 80px rgba(0,0,0,0.6), 0 0 40px ${accent}10` : 'none',
        transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)',
        transitionDelay: `${delay}s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex flex-col">
        {/* Image panel — clicking opens live site */}
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-full overflow-hidden block"
          style={{ height: '220px' }}
          onClick={e => e.stopPropagation()}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          {/* Overlay gradient */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(14,14,14,0.95) 0%, rgba(14,14,14,0.3) 50%, transparent 100%)' }}
          />
          {/* Hover: "View Site" overlay */}
          <div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'rgba(0,0,0,0.35)' }}
          >
            <span
              className="flex items-center gap-2 font-display font-bold text-sm px-5 py-2.5 rounded-full"
              style={{ background: 'rgba(0,0,0,0.7)', border: `1px solid ${accent}55`, color: accent, backdropFilter: 'blur(8px)' }}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View Live Site
            </span>
          </div>
          {/* Featured badge */}
          <div
            className="absolute top-3 left-3 floating-badge flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full"
            style={{
              background: accent + '18',
              border: `1px solid ${accent}45`,
              color: accent,
              fontFamily: 'Space Grotesk',
              backdropFilter: 'blur(8px)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent, boxShadow: `0 0 6px ${accent}` }} />
            Featured Project
          </div>
          {/* Category pill bottom */}
          <div className="absolute bottom-3 left-3">
            <span
              className="text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{
                background: 'rgba(0,0,0,0.65)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#fff',
                backdropFilter: 'blur(8px)',
                fontFamily: 'Space Grotesk',
              }}
            >
              {project.category}
            </span>
          </div>
        </a>

        {/* Content panel */}
        <div className="p-6 flex flex-col flex-1">
          <div>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="tag-pill text-xs font-medium px-3 py-1 rounded-full"
                  style={{
                    background: accent + '10',
                    border: `1px solid ${accent}25`,
                    color: accent,
                    fontFamily: 'Space Grotesk',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3
              className="font-display font-extrabold text-white mb-3"
              style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', letterSpacing: '-0.03em' }}
            >
              {project.title}
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '14px', lineHeight: '1.7', fontFamily: 'Plus Jakarta Sans' }}>
              {project.description}
            </p>
          </div>

          {/* Stats */}
          <div>
            <div className="flex gap-6 py-5 my-5" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              {project.stats.map(s => (
                <div key={s.label}>
                  <p className="font-display font-bold text-white text-base" style={{ letterSpacing: '-0.02em' }}>{s.value}</p>
                  <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', fontFamily: 'Space Grotesk', marginTop: '2px' }}>{s.label}</p>
                </div>
              ))}
            </div>

            {/* Two CTAs: live link + contact */}
            <div className="flex gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex-1 flex items-center justify-center gap-2 font-display font-semibold py-3.5 rounded-xl transition-all duration-300 text-sm"
                style={{
                  background: hovered ? accent + '18' : accent + '0c',
                  border: `1px solid ${hovered ? accent + '55' : accent + '28'}`,
                  color: accent,
                  letterSpacing: '-0.01em',
                }}
                onClick={e => e.stopPropagation()}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View Live Site
              </a>
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); e.stopPropagation(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="group/btn flex-1 flex items-center justify-center gap-2 font-display font-semibold py-3.5 rounded-xl transition-all duration-300 text-sm"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.09)',
                  color: 'rgba(255,255,255,0.45)',
                  letterSpacing: '-0.01em',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = '#fff' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.color = 'rgba(255,255,255,0.45)' }}
              >
                Build Similar
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Regular project card ────────────────────────── */
function ProjectCard({ project, delay }) {
  const ref = useScrollReveal()
  const [hovered, setHovered] = useState(false)

  return (
    <div
      ref={ref}
      className="reveal group relative rounded-2xl overflow-hidden cursor-pointer project-card flex flex-col"
      style={{
        background: '#0e0e0e',
        border: `1px solid ${hovered ? `${project.accent}35` : 'rgba(255,255,255,0.06)'}`,
        transitionDelay: `${delay}s`,
        transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
    >
      {/* Preview area */}
      <div className={`relative h-48 bg-gradient-to-br ${project.color} overflow-hidden`}>
        {/* Browser mockup */}
        <div
          className="absolute inset-4 rounded-t-lg"
          style={{
            background: 'rgba(0,0,0,0.45)',
            backdropFilter: 'blur(4px)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div className="flex items-center gap-1.5 px-3 py-2.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            <span className="w-2 h-2 rounded-full bg-red-500/60" />
            <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
            <span className="w-2 h-2 rounded-full bg-green-500/60" />
            <div className="flex-1 mx-2 rounded-full h-3.5" style={{ background: 'rgba(255,255,255,0.08)' }} />
          </div>
          <div className="p-3 space-y-2">
            <div className="h-5 rounded-md w-3/4" style={{ background: 'rgba(255,255,255,0.1)' }} />
            <div className="h-3 rounded w-full"   style={{ background: 'rgba(255,255,255,0.06)' }} />
            <div className="h-3 rounded w-5/6"    style={{ background: 'rgba(255,255,255,0.06)' }} />
            <div className="h-7 rounded-lg w-1/3 mt-2" style={{ background: `${project.accent}25` }} />
          </div>
        </div>

        {/* Emoji icon */}
        <div
          className="absolute top-3 right-5 text-3xl transition-transform duration-500"
          style={{ transform: hovered ? 'scale(1.15) rotate(5deg)' : 'scale(1) rotate(0deg)' }}
        >
          {project.icon}
        </div>

        {/* Category pill */}
        <div className="absolute bottom-3 left-4">
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{
              background: 'rgba(0,0,0,0.55)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: '#fff',
              fontFamily: 'Space Grotesk',
              backdropFilter: 'blur(6px)',
            }}
          >
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3
          className="font-display font-bold text-white mb-2"
          style={{ fontSize: '17px', letterSpacing: '-0.02em' }}
        >
          {project.title}
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.38)', fontSize: '13px', lineHeight: '1.65', marginBottom: '14px', fontFamily: 'Plus Jakarta Sans' }}>
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="tag-pill text-xs font-medium px-2.5 py-1 rounded-md"
              style={{
                background: `${project.accent}10`,
                color: project.accent,
                border: `1px solid ${project.accent}25`,
                fontFamily: 'Space Grotesk',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="flex justify-between pt-4 mb-5" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          {project.stats.map(s => (
            <div key={s.label} className="text-center">
              <p className="font-display font-bold text-white text-sm" style={{ letterSpacing: '-0.02em' }}>{s.value}</p>
              <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.25)', fontFamily: 'Space Grotesk', marginTop: '2px' }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <button
          className="mt-auto w-full flex items-center justify-center gap-2 font-display font-semibold py-3 rounded-xl transition-all duration-300 text-sm"
          style={{
            background: hovered ? `${project.accent}18` : `${project.accent}0c`,
            border: `1px solid ${hovered ? `${project.accent}45` : `${project.accent}20`}`,
            color: project.accent,
            letterSpacing: '-0.01em',
          }}
        >
          Build Something Similar
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  )
}
