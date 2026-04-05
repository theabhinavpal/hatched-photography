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
          className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] text-[var(--text-dark)] mb-4"
        >
          Curated <em>collections</em>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="text-[1.125rem] text-[var(--text-muted)]"
        >
          Tailored experiences designed to preserve your specific season of life with intention and care.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((svc, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2, ease: [0.23, 1, 0.32, 1] }}
            className={`p-12 rounded-[32px] flex flex-col relative overflow-hidden group transition-transform duration-500 hover:-translate-y-2 ${svc.dark ? 'bg-[var(--text-dark)] text-white' : 'bg-[var(--bg-offwhite)] text-[var(--text-dark)]'}`}
          >
            <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-8 font-serif text-[1.5rem] ${svc.dark ? 'bg-[#4A4541] text-white' : 'bg-white text-[var(--accent-orange)]'}`}>
              {svc.id}
            </div>
            <h3 className="font-serif text-2xl mb-2">{svc.title}</h3>
            <div className={`font-sans text-[1.1rem] mb-8 ${svc.dark ? 'text-[#A39E9A]' : 'text-[var(--text-muted)]'}`}>
              {svc.price}
            </div>
            <ul className="list-none mb-12 flex-grow space-y-4">
              {svc.features.map((feat, j) => (
                <motion.li 
                  key={j} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (i * 0.1) + (j * 0.05) }}
                  className="flex items-start gap-3 text-[0.95rem]"
                >
                  <span className="block w-1.5 h-1.5 rounded-full bg-[var(--accent-orange)] mt-1.5 shrink-0"></span>
                  {feat}
                </motion.li>
              ))}
            </ul>
            <Link to="/#contact" className={`inline-flex items-center justify-center px-6 py-3 rounded-full font-sans text-[0.95rem] font-medium transition-all duration-200 w-full text-center ${svc.dark ? 'bg-white text-[var(--text-dark)] hover:bg-gray-100' : 'bg-[var(--bg-pill)] text-[var(--text-dark)] hover:bg-[var(--bg-pill-hover)]'}`}>
              Inquire
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
