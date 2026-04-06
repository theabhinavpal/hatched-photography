import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function IntroSection() {
  const centerImgRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    if (centerImgRef.current) {
      gsap.to(centerImgRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: centerImgRef.current.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }
  }, []);

  return (
    <section className="pt-32 pb-16 text-center bg-gradient-to-b from-[#F5EFEB] to-[#FFFFFF]">
      <div className="max-w-[1400px] mx-auto px-[5vw]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center w-10 h-10 bg-[var(--bg-pill)] rounded-full mb-8 text-[var(--text-muted)]"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M19 12H5M12 19l-7-7 7-7"></path></svg>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] tracking-[-0.01em] text-[var(--text-dark)] leading-[1.1] max-w-[900px] mx-auto overflow-hidden"
        >
          <motion.span
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="block"
          >
            Photography that feels like <em>you</em>.
          </motion.span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[1.125rem] text-[var(--text-muted)] max-w-[600px] mx-auto mt-8 font-light"
        >
          I focus on capturing real, unposed moments — the laughter, the quiet in-between, and the connections that make your story unique.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-4 mt-10 flex-wrap"
        >
          {['Couples', 'Maternity', 'Newborn', 'Family'].map((tag, i) => (
            <motion.span 
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1, type: "spring", stiffness: 200, damping: 15 }}
              whileHover={{ scale: 1.1, rotate: i % 2 === 0 ? 3 : -3 }}
              className={`tag ${tag === 'Couples' ? 'tag-red' : tag === 'Maternity' ? 'tag-yel' : tag === 'Newborn' ? 'tag-blu' : 'tag-grn'}`}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr_1fr] gap-8 mt-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="hidden md:block"
          >
            <motion.img 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              src="http://www.hatchedphotos.com/wp-content/uploads/2022/02/OLeary-600Square.jpg" 
              alt="Detail shot" 
              className="w-full h-[450px] object-cover rounded-[40px] shadow-2xl" 
              loading="lazy" 
              referrerPolicy="no-referrer" 
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden rounded-[40px] md:rounded-[240px_240px_40px_40px] h-[450px] md:h-[650px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] relative"
          >
            <img 
              ref={centerImgRef} 
              src="http://www.hatchedphotos.com/wp-content/uploads/2022/02/Seger-600Square.jpg" 
              alt="Couple laughing" 
              className="w-full h-[130%] -top-[15%] absolute object-cover" 
              loading="lazy" 
              referrerPolicy="no-referrer" 
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="hidden md:block"
          >
            <motion.img 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              src="http://www.hatchedphotos.com/wp-content/uploads/2022/02/Macy-600.jpg" 
              alt="Baby detail" 
              className="w-full h-[450px] object-cover rounded-[40px] shadow-2xl" 
              loading="lazy" 
              referrerPolicy="no-referrer" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
