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
          className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] tracking-[-0.01em] text-[var(--text-dark)] leading-[1.1] max-w-[900px] mx-auto"
        >
          Photography that feels like <em>you</em>.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[1.125rem] text-[var(--text-muted)] max-w-[600px] mx-auto mt-8"
        >
          I focus on capturing real, unposed moments — the laughter, the quiet in-between, and the connections that make your story unique.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-3 mt-8 flex-wrap"
        >
          {['Couples', 'Maternity', 'Newborn', 'Family'].map((tag, i) => (
            <motion.span 
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ scale: 1.1, rotate: i % 2 === 0 ? 2 : -2 }}
              className={`tag ${tag === 'Couples' ? 'tag-red' : tag === 'Maternity' ? 'tag-yel' : tag === 'Newborn' ? 'tag-blu' : 'tag-grn'}`}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr_1fr] gap-6 mt-16 items-center">
          <motion.img 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            src="https://images.pexels.com/photos/3225528/pexels-photo-3225528.jpeg?auto=compress&cs=tinysrgb&w=800" 
            alt="Detail shot" 
            className="w-full h-[400px] object-cover rounded-[32px] hidden md:block shadow-lg" 
            loading="lazy" 
            referrerPolicy="no-referrer" 
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="overflow-hidden rounded-[32px] md:rounded-[200px_200px_32px_32px] h-[400px] md:h-[550px] shadow-2xl"
          >
            <img ref={centerImgRef} src="https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Couple laughing" className="w-full h-[120%] -top-[10%] relative object-cover" loading="lazy" referrerPolicy="no-referrer" />
          </motion.div>
          <motion.img 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            src="https://images.pexels.com/photos/3319333/pexels-photo-3319333.jpeg?auto=compress&cs=tinysrgb&w=800" 
            alt="Baby detail" 
            className="w-full h-[400px] object-cover rounded-[32px] hidden md:block shadow-lg" 
            loading="lazy" 
            referrerPolicy="no-referrer" 
          />
        </div>
      </div>
    </section>
  );
}
