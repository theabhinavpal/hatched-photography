import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function ServicesSection() {
  const services = [
    {
      id: 'I',
      title: 'The Maternity',
      price: 'From $450',
      features: ['1 hour location session', 'Style guide & wardrobe consultation', '40+ high-res edited images', 'Private online gallery'],
      dark: false
    },
    {
      id: 'II',
      title: 'The Newborn',
      price: 'From $650',
      features: ['2-3 hour in-home lifestyle session', 'Gentle, baby-led pacing', '60+ high-res edited images', 'Custom linen photo album'],
      dark: true
    },
    {
      id: 'III',
      title: 'The Family',
      price: 'From $550',
      features: ['1.5 hour location session', 'Focus on interaction & play', '50+ high-res edited images', 'Print release rights'],
      dark: false
    }
  ];

  return (
    <section id="services" className="py-32 px-[5vw] max-w-[1400px] mx-auto">
      <div className="text-center max-w-[600px] mx-auto mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] text-[var(--text-dark)] mb-4 overflow-hidden"
        >
          <motion.span
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="block"
          >
            Curated <em>collections</em>
          </motion.span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="text-[1.125rem] text-[var(--text-muted)] font-light"
        >
          Tailored experiences designed to preserve your specific season of life with intention and care.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map((svc, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2, ease: [0.23, 1, 0.32, 1] }}
            className={`p-12 rounded-[40px] flex flex-col relative overflow-hidden group transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${svc.dark ? 'bg-[var(--text-dark)] text-white' : 'bg-[var(--bg-offwhite)] text-[var(--text-dark)]'}`}
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className={`w-16 h-16 rounded-full flex items-center justify-center mb-10 font-serif text-[1.75rem] shadow-md ${svc.dark ? 'bg-[#4A4541] text-white' : 'bg-white text-[var(--accent-orange)]'}`}
            >
              {svc.id}
            </motion.div>
            <h3 className="font-serif text-3xl mb-3">{svc.title}</h3>
            <div className={`font-sans text-[1.2rem] mb-10 font-medium ${svc.dark ? 'text-[#A39E9A]' : 'text-[var(--text-muted)]'}`}>
              {svc.price}
            </div>
            <ul className="list-none mb-14 flex-grow space-y-5">
              {svc.features.map((feat, j) => (
                <motion.li 
                  key={j} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (i * 0.1) + (j * 0.05) }}
                  className="flex items-start gap-4 text-[1rem] font-light"
                >
                  <span className="block w-2 h-2 rounded-full bg-[var(--accent-orange)] mt-2 shrink-0 shadow-sm"></span>
                  {feat}
                </motion.li>
              ))}
            </ul>
            <Link to="/#contact" className={`inline-flex items-center justify-center px-8 py-4 rounded-full font-sans text-[0.85rem] font-semibold uppercase tracking-[0.2em] transition-all duration-300 w-full text-center shadow-lg hover:shadow-xl ${svc.dark ? 'bg-white text-[var(--text-dark)] hover:bg-[var(--accent-orange)] hover:text-white' : 'bg-[var(--text-dark)] text-white hover:bg-[var(--accent-orange)]'}`}>
              Inquire Now
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
