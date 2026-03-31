import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, target, duration])

  return (
    <span ref={ref} className="text-gradient-gold font-heading text-4xl md:text-5xl font-bold">
      {count}{suffix}
    </span>
  )
}

const stats = [
  { value: 15, suffix: '+', label: 'Years of Experience' },
  { value: 500, suffix: '+', label: 'Projects Completed' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-surface relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image / Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <img
                src="/bathroom-remodel.webp"
                alt="Completed bathroom remodel with clawfoot tub"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 lg:right-8 glass-card rounded-xl p-6 text-center">
              <span className="text-gradient-gold font-heading text-3xl font-bold block">5.0</span>
              <div className="flex gap-1 justify-center my-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-text-secondary text-xs tracking-wider uppercase">Google Rating</span>
            </div>
            {/* Decorative border */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-accent/30 rounded-tl-2xl" />
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent text-xs tracking-[0.3em] uppercase">About Us</span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold mt-4 mb-8 leading-tight">
              Built on{' '}
              <span className="text-gradient-gold">Trust</span>,
              <br />
              Defined by <span className="text-gradient-gold">Quality</span>
            </h2>

            <div className="space-y-5 text-text-secondary leading-relaxed">
              <p>
                At Carlos Painting & Carpentry, we believe every home tells a story — and the details matter.
                With over 15 years of hands-on experience, we've earned a reputation for
                meticulous craftsmanship, unwavering professionalism, and results that exceed expectations.
              </p>
              <p>
                We take immense pride in maintaining an impeccably clean workspace, treating your home
                with the same respect and care we would our own. Our team works closely with every client,
                ensuring your vision is not only heard but brought to life with precision.
              </p>
              <p>
                From a single room refresh to a complete home transformation, we approach each project with
                the same commitment to excellence — because your satisfaction is the mark of our success.
              </p>
            </div>

            {/* Key Differentiators */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Meticulous Attention to Detail',
                'Clean & Respectful Workmanship',
                'Licensed & Fully Insured',
                'Client-Centered Approach',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full border border-accent/50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="mt-24 grid grid-cols-3 gap-8"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <span className="block text-text-secondary text-xs tracking-[0.2em] uppercase mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
