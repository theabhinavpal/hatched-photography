import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-[5vw]">
      <div className="max-w-[1400px] mx-auto bg-[var(--bg-offwhite)] rounded-[64px] p-[5vw] md:p-[8rem_5vw] grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="relative"
        >
          <img src="https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="Photographer" className="w-full h-[500px] md:h-[700px] object-cover rounded-[200px]" loading="lazy" referrerPolicy="no-referrer" />
          <div className="absolute -bottom-5 -right-5 md:bottom-10 md:-right-5 w-[120px] h-[120px] md:w-[140px] md:h-[140px] bg-[var(--accent-orange)] text-white rounded-full flex items-center justify-center text-center font-serif text-[1.2rem] leading-[1.1] p-4 -rotate-10 shadow-lg">
            Since<br/>2018
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
        >
          <h2 className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] text-[var(--text-dark)] leading-[1.1] mb-8">
            The <em>story</em> behind the lens.
          </h2>
          <p className="text-[1.125rem] text-[var(--text-muted)] mb-8">
            I believe that the most beautiful moments are the ones you don't pose for. The wind in your hair, the subtle glance between partners, the chaotic joy of a toddler running wild.
          </p>
          <p className="text-[1.125rem] text-[var(--text-muted)] mb-10">
            My approach is rooted in an editorial style — blending fine art composition with a documentary soul. No stiff poses, just gentle guidance to let your authentic dynamic unfold naturally.
          </p>
          <Link to="/about" className="inline-flex items-center justify-center px-6 py-3 rounded-full font-sans text-[0.95rem] font-medium transition-all duration-200 bg-[var(--bg-pill)] text-[var(--text-dark)] hover:bg-[var(--bg-pill-hover)]">
            Read Full Journey
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
