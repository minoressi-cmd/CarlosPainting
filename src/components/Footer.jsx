export default function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    'Interior & Exterior Painting',
    'Power Washing & Staining',
    'Custom Carpentry',
    'Sheetrock & Compound',
    'Window & Door Solutions',
    'Tile & Laminate Flooring',
    'Remodeling & Repairs',
  ]

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-primary border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded border border-accent/50 flex items-center justify-center">
                <span className="font-heading text-accent text-xl font-bold">C</span>
              </div>
              <div>
                <span className="font-heading text-lg tracking-wide text-white block">Carlos</span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-accent/80 -mt-1 block">
                  Painting & Carpentry
                </span>
              </div>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed mt-4">
              Elevating homes with precision craftsmanship and timeless results since 2010.
            </p>
            <a
              href="tel:9148829200"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-dark transition-colors mt-4 text-sm font-semibold"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (914) 882-9200
            </a>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h4 className="text-xs tracking-[0.25em] uppercase text-accent mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, i) => (
                <li key={i}>
                  <a
                    href="#services"
                    className="text-text-secondary text-sm hover:text-white transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-xs tracking-[0.25em] uppercase text-accent mb-6">Navigation</h4>
            <ul className="space-y-3">
              {links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-text-secondary text-sm hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div className="lg:col-span-1">
            <h4 className="text-xs tracking-[0.25em] uppercase text-accent mb-6">Business Hours</h4>
            <div className="space-y-3 text-text-secondary text-sm">
              <div className="flex justify-between">
                <span>Monday – Friday</span>
                <span className="text-white">8 AM – 6 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white">9 AM – 4 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white/40">Closed</span>
              </div>
            </div>

            <div className="mt-8">
              <a href="#contact" className="btn-outline text-xs py-2.5 px-5 w-full justify-center text-center">
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-text-secondary/50 text-xs">
            © {currentYear} Carlos Painting & Carpentry. All rights reserved.
          </span>
          <span className="text-text-secondary/30 text-xs">
            Precision Craftsmanship. Timeless Results.
          </span>
        </div>
      </div>
    </footer>
  )
}
