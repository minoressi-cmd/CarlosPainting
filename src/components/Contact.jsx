import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    details: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ name: '', phone: '', email: '', details: '' })
  }

  return (
    <section id="contact" className="section-padding bg-surface relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-px bg-accent/40" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-accent text-xs tracking-[0.3em] uppercase">Get In Touch</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 mb-6">
            Start Your <span className="text-gradient-gold">Project</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
            Tell us about your vision. We'll respond promptly to discuss your project and provide a complimentary estimate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Phone */}
            <div className="glass-card rounded-xl p-6 group hover:border-accent/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs tracking-[0.2em] uppercase text-text-secondary">Phone</span>
                  <a
                    href="tel:9148829200"
                    className="block text-white text-lg font-semibold mt-1 hover:text-accent transition-colors"
                  >
                    (914) 882-9200
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="glass-card rounded-xl p-6 group hover:border-accent/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs tracking-[0.2em] uppercase text-text-secondary">Business Hours</span>
                  <span className="block text-white text-lg font-semibold mt-1">Mon – Sat</span>
                  <span className="text-text-secondary text-sm">Open · Closes at 6:00 PM</span>
                </div>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="glass-card rounded-xl p-6">
              <span className="text-xs tracking-[0.2em] uppercase text-text-secondary block mb-4">Why Choose Us</span>
              <div className="space-y-3">
                {[
                  'Free, No-Obligation Estimates',
                  'Licensed & Fully Insured',
                  'Spotless Jobsite Guaranteed',
                  'Premium Materials Only',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-text-secondary text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 md:p-10 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-name" className="text-xs tracking-[0.15em] uppercase text-text-secondary mb-2 block">
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="text-xs tracking-[0.15em] uppercase text-text-secondary mb-2 block">
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-email" className="text-xs tracking-[0.15em] uppercase text-text-secondary mb-2 block">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-accent/50 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-details" className="text-xs tracking-[0.15em] uppercase text-text-secondary mb-2 block">
                  Project Details
                </label>
                <textarea
                  id="contact-details"
                  name="details"
                  rows={5}
                  required
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Tell us about your project — the space, your vision, and any specific requirements..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full justify-center text-center py-4"
              >
                {submitted ? (
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Message Sent Successfully
                  </span>
                ) : (
                  'Send Your Request'
                )}
              </button>

              <p className="text-text-secondary/50 text-xs text-center">
                We typically respond within 2 business hours during operating hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
