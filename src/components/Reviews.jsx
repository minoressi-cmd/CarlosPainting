import { motion } from 'framer-motion'

const reviews = [
  {
    name: 'Barb T.F.',
    text: `"We've had the privilege of working with Carlos on two separate occasions, and the experience has been nothing short of exceptional. Their artistry in tile work transformed our bathroom into a stunning retreat. The team's professionalism is matched only by their meticulous cleanliness — leaving our home spotless at the end of each day. What truly sets them apart is their genuine willingness to incorporate our input, making the collaboration as seamless as the final result."`,
    rating: 5,
    project: 'Bathroom Renovation',
  },
  {
    name: 'Roy A.',
    text: `"Absolutely the finest work I've ever commissioned. Carlos and his team delivered a painting transformation that surpassed every expectation. The bathroom renovation left me genuinely speechless — every detail was executed with remarkable precision and artistry. The level of care and craftsmanship is extraordinary. I recommend them with the highest confidence to anyone seeking truly exceptional results."`,
    rating: 5,
    project: 'Interior Painting & Bathroom',
  },
]

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="section-padding bg-primary relative">
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
          <span className="text-accent text-xs tracking-[0.3em] uppercase">Testimonials</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 mb-6">
            What Our <span className="text-gradient-gold">Clients</span> Say
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
            Our commitment to excellence speaks through the words of those we've had the honor of serving.
          </p>
        </motion.div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-4 glass-card rounded-full px-8 py-4">
            <span className="text-gradient-gold font-heading text-3xl font-bold">5.0</span>
            <div className="w-px h-8 bg-accent/20" />
            <div>
              <StarRating rating={5} />
              <span className="text-text-secondary text-xs tracking-wider">Perfect Rating</span>
            </div>
          </div>
        </motion.div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="glass-card rounded-2xl p-10 relative group hover:border-accent/30 transition-all duration-500"
            >
              {/* Quote mark */}
              <div className="absolute top-6 right-8 text-accent/10 font-heading text-8xl leading-none select-none">
                "
              </div>

              <div className="relative">
                <StarRating rating={review.rating} />

                <p className="text-text-secondary mt-6 mb-8 leading-relaxed text-[15px] italic">
                  {review.text}
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="font-heading text-accent text-lg font-bold">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <span className="block text-white font-semibold text-sm">{review.name}</span>
                    <span className="text-accent/70 text-xs tracking-wider uppercase">
                      {review.project}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
