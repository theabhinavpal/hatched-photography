import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function AboutSection() {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: imageRef.current.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }
  }, []);

  return (
    <section id="about" className="py-24 px-[5vw]">
      <div className="max-w-[1400px] mx-auto bg-[var(--bg-offwhite)] rounded-[64px] p-[5vw] md:p-[8rem_5vw] grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="relative overflow-hidden rounded-[200px]"
        >
          <img 
            ref={imageRef}
            src="https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&w=1000" 
            alt="Photographer" 
            className="w-full h-[120%] -top-[10%] relative object-cover" 
            loading="lazy" 
            referrerPolicy="no-referrer" 
          />
          <motion.div 
            initial={{ scale: 0, rotate: -20 }}
            whileInView={{ scale: 1, rotate: -10 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
            className="absolute -bottom-5 -right-5 md:bottom-10 md:-right-5 w-[120px] h-[120px] md:w-[140px] md:h-[140px] bg-[var(--accent-orange)] text-white rounded-full flex items-center justify-center text-center font-serif text-[1.2rem] leading-[1.1] p-4 shadow-lg z-10"
          >
            Since<br/>2018
          </motion.div>
        </motion.div>
        
        <div className="flex flex-col">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] text-[var(--text-dark)] leading-[1.1] mb-8"
          >
            The <em>story</em> behind the lens.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="text-[1.125rem] text-[var(--text-muted)] mb-8"
          >
            I believe that the most beautiful moments are the ones you don't pose for. The wind in your hair, the subtle glance between partners, the chaotic joy of a toddler running wild.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="text-[1.125rem] text-[var(--text-muted)] mb-10"
          >
            My approach is rooted in an editorial style — blending fine art composition with a documentary soul. No stiff poses, just gentle guidance to let your authentic dynamic unfold naturally.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            <Link to="/about" className="inline-flex items-center justify-center px-8 py-4 rounded-full font-sans text-[0.95rem] font-medium transition-all duration-300 bg-[var(--bg-pill)] text-[var(--text-dark)] hover:bg-[var(--bg-pill-hover)] hover:scale-105 active:scale-95 shadow-sm hover:shadow-md">
              Read Full Journey
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
