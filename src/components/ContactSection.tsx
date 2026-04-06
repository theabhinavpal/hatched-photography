import React from 'react';
import { motion } from 'motion/react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-[5vw] bg-[var(--bg-white)] border-t border-[var(--color-border)]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
        >
          <h2 className="font-serif text-[clamp(3rem,5vw,4.5rem)] text-[var(--text-dark)] leading-[1.1] mb-8 overflow-hidden">
            <motion.span
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="block"
            >
              Let's create
            </motion.span>
            <motion.span
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="block italic"
            >
              something
            </motion.span>
            <motion.span
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="block"
            >
              beautiful.
            </motion.span>
          </h2>
          <p className="text-[1.125rem] text-[var(--text-muted)] mb-12 max-w-[400px] font-light">
            Whether you're expecting a new arrival, celebrating a milestone, or simply want to freeze this season of life — I'd love to hear from you.
          </p>
          
          <div className="space-y-8">
            {[
              { label: 'Email', value: 'hello@hatchedphotos.com', href: 'mailto:hello@hatchedphotos.com' },
              { label: 'Location', value: 'Based in Seattle, WA\nAvailable worldwide.' }
            ].map((item, i) => (
              <motion.div 
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <h4 className="font-sans text-[0.85rem] font-bold uppercase tracking-widest text-[var(--accent-orange)] mb-2">{item.label}</h4>
                {item.href ? (
                  <a href={item.href} className="font-sans text-[1.1rem] text-[var(--text-dark)] hover:text-[var(--accent-orange)] transition-colors inline-block">{item.value}</a>
                ) : (
                  <p className="font-sans text-[1.1rem] text-[var(--text-dark)] whitespace-pre-line">{item.value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="bg-[var(--bg-offwhite)] p-10 md:p-16 rounded-[40px] shadow-sm hover:shadow-md transition-shadow duration-500"
        >
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2 group">
                <label htmlFor="firstName" className="font-sans text-[0.9rem] font-medium text-[var(--text-dark)] group-focus-within:text-[var(--accent-orange)] transition-colors">First Name</label>
                <input type="text" id="firstName" className="w-full bg-transparent border-b border-[var(--color-border)] py-3 focus:outline-none focus:border-[var(--accent-orange)] transition-all font-sans text-[1rem] placeholder:text-[var(--text-muted)]/50" placeholder="Jane" />
              </div>
              <div className="space-y-2 group">
                <label htmlFor="lastName" className="font-sans text-[0.9rem] font-medium text-[var(--text-dark)] group-focus-within:text-[var(--accent-orange)] transition-colors">Last Name</label>
                <input type="text" id="lastName" className="w-full bg-transparent border-b border-[var(--color-border)] py-3 focus:outline-none focus:border-[var(--accent-orange)] transition-all font-sans text-[1rem] placeholder:text-[var(--text-muted)]/50" placeholder="Doe" />
              </div>
            </div>
            
            <div className="space-y-2 group">
              <label htmlFor="email" className="font-sans text-[0.9rem] font-medium text-[var(--text-dark)] group-focus-within:text-[var(--accent-orange)] transition-colors">Email Address</label>
              <input type="email" id="email" className="w-full bg-transparent border-b border-[var(--color-border)] py-3 focus:outline-none focus:border-[var(--accent-orange)] transition-all font-sans text-[1rem] placeholder:text-[var(--text-muted)]/50" placeholder="jane@example.com" />
            </div>

            <div className="space-y-2 group">
              <label htmlFor="inquiryType" className="font-sans text-[0.9rem] font-medium text-[var(--text-dark)] group-focus-within:text-[var(--accent-orange)] transition-colors">What are you looking for?</label>
              <div className="relative">
                <select id="inquiryType" defaultValue="" className="w-full bg-transparent border-b border-[var(--color-border)] py-3 focus:outline-none focus:border-[var(--accent-orange)] transition-all font-sans text-[1rem] text-[var(--text-muted)] appearance-none cursor-pointer">
                  <option value="" disabled>Select a session type</option>
                  <option value="maternity">Maternity</option>
                  <option value="newborn">Newborn</option>
                  <option value="family">Family</option>
                  <option value="other">Other</option>
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--text-muted)]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M6 9l6 6 6-6"></path></svg>
                </div>
              </div>
            </div>

            <div className="space-y-2 group">
              <label htmlFor="message" className="font-sans text-[0.9rem] font-medium text-[var(--text-dark)] group-focus-within:text-[var(--accent-orange)] transition-colors">Your Message</label>
              <textarea id="message" rows={4} className="w-full bg-transparent border-b border-[var(--color-border)] py-3 focus:outline-none focus:border-[var(--accent-orange)] transition-all font-sans text-[1rem] resize-none placeholder:text-[var(--text-muted)]/50" placeholder="Tell me a little bit about your family and what you're hoping to capture..."></textarea>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              className="w-full bg-[var(--text-dark)] text-white py-5 rounded-full font-sans text-[1rem] font-medium transition-all duration-300 hover:bg-[var(--accent-orange)] mt-4 shadow-lg hover:shadow-xl"
            >
              Send Inquiry
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
