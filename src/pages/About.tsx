import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import AboutSection3 from '../components/ui/about-section';
import Counter from '../components/ui/counter';
import { BentoPricing } from '../components/ui/bento-pricing';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Mail, MessageSquare, ArrowUpRight, Send } from 'lucide-react';

export default function About() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  return (
    <main className="pt-24 pb-16 bg-[#F5EFEB] text-[#1A1A1A]">
      {/* SECTION 1: HERO INTRO */}
      <AboutSection3 />

      {/* SECTION 2: PHILOSOPHY */}
      <section className="relative py-24 md:py-40 overflow-hidden">
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=1920&auto=format&fit=crop" 
            alt="Lifestyle family moment" 
            className="w-full h-[120%] object-cover opacity-10"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5EFEB] via-transparent to-[#F5EFEB]"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="text-[10px] uppercase tracking-[0.5em] font-sans font-bold text-[#B08D8D] mb-8 block">My Philosophy</span>
            <h2 className="font-serif text-5xl md:text-8xl mb-10 italic text-[#2C2C2C] leading-tight overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                className="block"
              >
                Photography that
              </motion.span>
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
                className="block"
              >
                feels real
              </motion.span>
            </h2>
            <div className="space-y-8 text-xl font-sans font-light leading-relaxed text-[#4A4A4A] max-w-2xl mx-auto">
              <p>
                As a mother, I understand how quickly moments pass. I focus on capturing connection, love, laughter, and the quiet in-between moments.
              </p>
              <p>
                I believe the most meaningful images are the ones that feel natural and authentic.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEW SECTION: STATS / MILESTONES */}
      <section className="py-20 bg-[#1A1A1A] text-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-[5vw]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-6xl font-serif italic text-[#B08D8D]">
                <Counter value={12} />+
              </div>
              <p className="text-[10px] uppercase tracking-widest font-sans font-bold text-white/50">Years of Experience</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-6xl font-serif italic text-[#B08D8D]">
                <Counter value={500} />+
              </div>
              <p className="text-[10px] uppercase tracking-widest font-sans font-bold text-white/50">Families Captured</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-6xl font-serif italic text-[#B08D8D]">
                <Counter value={15} />+
              </div>
              <p className="text-[10px] uppercase tracking-widest font-sans font-bold text-white/50">Awards Won</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-6xl font-serif italic text-[#B08D8D]">
                <Counter value={100} />%
              </div>
              <p className="text-[10px] uppercase tracking-widest font-sans font-bold text-white/50">Passion for Stories</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT MAKES ME DIFFERENT (Refined) */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-[5vw] py-32 md:py-48">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-[10px] uppercase tracking-[0.5em] font-sans font-bold text-[#B08D8D] mb-6 block">The Experience</span>
            <h2 className="font-serif text-5xl md:text-8xl italic text-[#2C2C2C] leading-tight mb-10">What makes <br /> me different</h2>
            <div className="w-20 h-px bg-[#B08D8D] mx-auto mb-10"></div>
            <p className="font-sans font-light text-[#4A4A4A] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              I believe the most beautiful photos are the ones where you feel like yourself. My process is designed to be effortless, relaxed, and entirely focused on your unique story.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-20">
          {/* Block 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="group"
          >
            <div className="relative mb-10 overflow-hidden aspect-[3/4]">
              <img 
                src="https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=600&auto=format&fit=crop" 
                alt="Experienced with Babies, Kids & Teens" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 text-white/50 font-serif italic text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">01</div>
            </div>
            <div className="space-y-6">
              <h3 className="font-serif text-3xl text-[#2C2C2C] group-hover:italic transition-all duration-500">Experienced with <br /> Babies & Teens</h3>
              <p className="font-sans font-light text-[#4A4A4A] leading-relaxed text-base">
                With over a decade of experience, I've seen it all. From fussy newborns to camera-shy teens, my calm and patient approach ensures everyone feels at ease, allowing their true personalities to shine.
              </p>
            </div>
          </motion.div>
          
          {/* Block 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="group md:mt-24"
          >
            <div className="relative mb-10 overflow-hidden aspect-[3/4]">
              <img 
                src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=600&auto=format&fit=crop" 
                alt="Clean Timeless Editing" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 text-white/50 font-serif italic text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">02</div>
            </div>
            <div className="space-y-6">
              <h3 className="font-serif text-3xl text-[#2C2C2C] group-hover:italic transition-all duration-500">Clean & Timeless <br /> Editing Style</h3>
              <p className="font-sans font-light text-[#4A4A4A] leading-relaxed text-base">
                I believe in preserving the natural beauty of your moments. My editing is bright, clean, and true-to-life, avoiding heavy filters so your images remain as timeless as the memories themselves.
              </p>
            </div>
          </motion.div>

          {/* Block 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="group"
          >
            <div className="relative mb-10 overflow-hidden aspect-[3/4]">
              <img 
                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=600&auto=format&fit=crop" 
                alt="Images that are Authentically You" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 text-white/50 font-serif italic text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">03</div>
            </div>
            <div className="space-y-6">
              <h3 className="font-serif text-3xl text-[#2C2C2C] group-hover:italic transition-all duration-500">Authentically <br /> You Portraits</h3>
              <p className="font-sans font-light text-[#4A4A4A] leading-relaxed text-base">
                The best portraits happen when you forget the camera is there. I use gentle guidance and prompts to capture real connection and genuine laughter, creating images that truly feel like you.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEW SECTION: TESTIMONIAL QUOTE */}
      <section className="py-32 md:py-48 bg-[#FAF9F7] border-y border-[#E0D5D2]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-6xl font-serif text-[#B08D8D] opacity-30 mb-8 block">“</span>
            <blockquote className="font-serif text-3xl md:text-5xl italic text-[#2C2C2C] leading-tight mb-12">
              Christina has a magical way of making everyone feel at ease. The photos aren't just beautiful; they are us.
            </blockquote>
            <cite className="font-sans font-bold text-[10px] uppercase tracking-[0.4em] text-[#B08D8D] not-italic">
              — The Miller Family
            </cite>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: PERSONAL LIFE */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-[5vw] py-24 md:py-32 border-t border-[#E0D5D2]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-4 sticky top-32">
            <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-bold text-[#B08D8D] mb-4 block">Behind the Lens</span>
            <h2 className="font-serif text-4xl md:text-6xl italic text-[#2C2C2C] mb-10 leading-tight">A little about me</h2>
            <p className="font-sans font-light text-[#4A4A4A] leading-relaxed text-lg">
              When I'm not behind the camera, you'll find me spending time with my favorite people and our sweet pup. These are the moments that fuel my creativity.
            </p>
            <div className="mt-12 pt-12 border-t border-[#E0D5D2]">
              <img 
                src="http://www.hatchedphotos.com/wp-content/uploads/2022/02/Feather200.png" 
                alt="Signature Feather" 
                className="w-16 h-auto opacity-30 mb-4"
              />
              <p className="font-serif italic text-xl text-[#2C2C2C]">Christina</p>
            </div>
          </div>
          
          <div className="md:col-span-8 space-y-32">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop" 
                  alt="Married to my man crush" 
                  className="w-full aspect-[4/5] object-cover rounded-sm shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="space-y-6">
                <h3 className="font-serif text-3xl italic text-[#2C2C2C]">Married to my man crush</h3>
                <p className="font-sans font-light text-base text-[#4A4A4A] leading-relaxed">
                  I've been married to my wonderful husband for 15 years! We met right after college on a trip tubing down the Guadalupe river. He is the rock of our family and without his support, I would have never been able to follow my dreams.
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 space-y-6">
                <h3 className="font-serif text-3xl italic text-[#2C2C2C]">Animal Lover</h3>
                <p className="font-sans font-light text-base text-[#4A4A4A] leading-relaxed">
                  We added Nova to our family in 2021. She is the source of much joy in our house—the best cuddler who always greets us with a smile and kisses.
                </p>
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="order-1 md:order-2"
              >
                <img 
                  src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=800&auto=format&fit=crop" 
                  alt="Animal Lover - Nova" 
                  className="w-full aspect-[4/5] object-cover rounded-sm shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=800&auto=format&fit=crop" 
                  alt="My little men" 
                  className="w-full aspect-[4/5] object-cover rounded-sm shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="space-y-6">
                <h3 className="font-serif text-3xl italic text-[#2C2C2C]">My little men</h3>
                <p className="font-sans font-light text-base text-[#4A4A4A] leading-relaxed">
                  I am blessed to be the mom of two rambunctious, sweet boys. They are growing up so fast! Most weekends you'll find me cheering them on at sporting activities or carting them around town.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: AWARDS & FEATURES */}
      <section className="py-24 md:py-32 border-t border-[#E0D5D2] bg-[#FAF9F7]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-[5vw]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="text-center md:text-left max-w-xs">
              <h2 className="font-serif text-3xl md:text-4xl italic text-[#2C2C2C] mb-4">Awards & Features</h2>
              <p className="font-sans font-light text-xs text-[#4A4A4A] uppercase tracking-[0.2em]">
                Recognized for storytelling excellence
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-12 md:gap-16 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
              <img src="https://picsum.photos/seed/pixelkids/200/100" alt="Pixel Kids" className="h-10 w-auto object-contain" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/momhub/200/100" alt="Mom Hub" className="h-10 w-auto object-contain" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/weekend/200/100" alt="Our Weekend Stories" className="h-10 w-auto object-contain" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/goldhope/200/100" alt="Gold Hope Project" className="h-10 w-auto object-contain" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/collective/200/100" alt="The Family Collective" className="h-10 w-auto object-contain" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: PHOTOGRAPHY PACKAGES (Refined Bento Pricing) */}
      <section className="py-24 md:py-32 border-t border-[#E0D5D2]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-[5vw]">
          <div className="mb-16 max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-bold text-[#B08D8D] mb-4 block">The Investment</span>
            <h2 className="font-serif text-4xl md:text-6xl italic text-[#2C2C2C] mb-6">Photography Packages</h2>
            <p className="font-sans font-light text-[#4A4A4A] text-lg leading-relaxed">
              Transparent pricing for timeless memories. Each session is designed to be relaxed, authentic, and uniquely yours.
            </p>
          </div>
          <BentoPricing />
        </div>
      </section>

      {/* SECTION 7: GET IN TOUCH & NEWSLETTER (Refined) */}
      <section className="py-24 md:py-32 bg-[#FAF9F7] border-t border-[#E0D5D2]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-[5vw]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-bold text-[#B08D8D] mb-4 block">Let's Talk</span>
                <h2 className="font-serif text-4xl md:text-6xl italic text-[#2C2C2C] leading-tight">Get in touch</h2>
              </div>
              <p className="font-sans font-light text-[#4A4A4A] text-lg leading-relaxed max-w-md">
                I would love to hear from you and start planning your session. Whether you have questions or are ready to book, reach out and let's connect.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <a href="mailto:hello@hatchedphotography.com" className="group flex items-start gap-4 p-6 bg-white border border-[#E0D5D2] rounded-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                  <div className="p-3 bg-[#F5EFEB] rounded-full text-[#B08D8D]">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-sans font-bold text-[#B08D8D] mb-1">Email Me</p>
                    <p className="font-serif italic text-[#2C2C2C]">hello@hatched.com</p>
                  </div>
                </a>
                <Link to="/#contact" className="group flex items-start gap-4 p-6 bg-white border border-[#E0D5D2] rounded-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                  <div className="p-3 bg-[#F5EFEB] rounded-full text-[#B08D8D]">
                    <MessageSquare className="size-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-sans font-bold text-[#B08D8D] mb-1">Inquiry Form</p>
                    <p className="font-serif italic text-[#2C2C2C]">Send a message</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Newsletter */}
            <Card className="bg-[#1A1A1A] border-none text-white p-8 md:p-16 rounded-sm overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#B08D8D]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <CardContent className="relative z-10 p-0 space-y-10">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.4em] font-sans font-bold text-[#B08D8D] mb-6 block">Stay Inspired</span>
                  <h3 className="font-serif text-3xl md:text-5xl italic leading-tight">The Newsletter</h3>
                </div>
                <p className="font-sans font-light text-white/60 text-base leading-relaxed">
                  Join our community to receive photography tips, session inspiration, and exclusive early access to seasonal mini-sessions.
                </p>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="relative">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full bg-white/5 border-b border-white/20 py-4 px-0 text-white font-sans font-light focus:outline-none focus:border-[#B08D8D] transition-colors placeholder:text-white/20"
                    />
                    <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-[#B08D8D] hover:text-white transition-colors">
                      <Send className="size-5" />
                    </button>
                  </div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-sans">No spam, just beautiful stories.</p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 8: FINAL CTA (Refined) */}
      <section className="relative py-40 md:py-56 bg-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1920&auto=format&fit=crop" 
            alt="Emotional family session" 
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[10px] uppercase tracking-[0.5em] font-sans font-bold text-[#B08D8D] mb-10 block">Let's Connect</span>
            <h2 className="font-serif text-5xl md:text-8xl mb-10 italic leading-tight">
              I can’t wait to <br /> work with you
            </h2>
            <p className="font-sans font-light text-lg md:text-xl mb-16 text-white/70 max-w-2xl mx-auto leading-relaxed">
              If you’re looking for a relaxed, natural photography experience that captures the heart of your family, I would love to tell your story.
            </p>
            <Link 
              to="/#contact" 
              className="group inline-flex items-center gap-4 px-16 py-6 border border-white/20 text-white font-sans text-[10px] tracking-[0.5em] uppercase hover:bg-[#B08D8D] hover:border-[#B08D8D] transition-all duration-700 ease-out"
            >
              Start Your Journey
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
