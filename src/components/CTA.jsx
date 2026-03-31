import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/interior-painting.webp"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/85 backdrop-blur-sm" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-accent text-xs tracking-[0.3em] uppercase">Let's Get Started</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 mb-6">
            Transform Your Home{' '}
            <span className="text-gradient-gold">Today</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Ready to elevate your living space? Let's discuss your vision and create something extraordinary together.
            Your dream home is one conversation away.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:9148829200" className="btn-primary">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (914) 882-9200
            </a>
            <a href="#contact" className="btn-outline">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Request a Quote
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
