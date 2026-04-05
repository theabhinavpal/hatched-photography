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
          <h2 className="font-serif text-[clamp(3rem,5vw,4.5rem)] text-[var(--text-dark)] leading-[1.1] mb-8">
            Let's create<br/><em>something</em><br/>beautiful.
          </h2>
          <p className="text-[1.125rem] text-[var(--text-muted)] mb-12 max-w-[400px]">
            Whether you're expecting a new arrival, celebrating a milestone, or simply want to freeze this season of life — I'd love to hear from you.
          </p>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-sans text-[0.85rem] font-bold uppercase tracking-widest text-[var(--accent-orange)] mb-2">Email</h4>
              <a href="mailto:hello@hatchedphotos.com" className="font-sans text-[1.1rem] text-[var(--text-dark)] hover:text-[var(--accent-orange)] transition-colors">hello@hatchedphotos.com</a>
            </div>
            <div>
              <h4 className="font-sans text-[0.85rem] font-bold uppercase tracking-widest text-[var(--accent-orange)] mb-2">Location</h4>
              <p className="font-sans text-[1.1rem] text-[var(--text-dark)]">Based in Seattle, WA<br/>Available worldwide.</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="bg-[var(--bg-offwhite)] p-10 md:p-16 rounded-[40px]"
        >
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="firstName" className="font-sans text-[0.9rem] font-medium text-[var(--text-dark)]">First Name</label>
                <input type="text" id="firstName" className="w-full bg-transparent border-b border-[var(--color-border)] py-3 focus:outline-none focus:border-[var(--accent-orange)] transition-colors font-sans text-[1rem]" placeholder="Jane" />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="font-sans text-[0.9rem] font-medium text-[var(--text-dark)]">Last Name</label>
                <input type="text" id="lastName" className="w-full bg-transparent border-b border-[var(--color-border)] py-3 focus:outline-none focus:border-[var(--accent-orange)] transition-colors font-sans text-[1rem]" placeholder="Doe" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="font-sans text-[0.9rem] font-medium text-[var(--text-dark)]">Email Address</label>
              <input type="email" id="email" className="w-full bg-transparent border-b border-[var(--color-border)] py-3 focus:outline-none focus:border-[var(--accent-orange)] transition-colors font-sans text-[1rem]" placeholder="jane@example.com" />
            </div>

            <div className="space-y-2">
              <label htmlFor="inquiryType" className="font-sans text-[0.9rem] font-medium text-[var(--text-dark)]">What are you looking for?</label>
              <select id="inquiryType" defaultValue="" className="w-full bg-transparent border-b border-[var(--color-border)] py-3 focus:outline-none focus:border-[var(--accent-orange)] transition-colors font-sans text-[1rem] text-[var(--text-muted)] appearance-none">
                <option value="" disabled>Select a session type</option>
                <option value="maternity">Maternity</option>
                <option value="newborn">Newborn</option>
                <option value="family">Family</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="font-sans text-[0.9rem] font-medium text-[var(--text-dark)]">Your Message</label>
              <textarea id="message" rows={4} className="w-full bg-transparent border-b border-[var(--color-border)] py-3 focus:outline-none focus:border-[var(--accent-orange)] transition-colors font-sans text-[1rem] resize-none" placeholder="Tell me a little bit about your family and what you're hoping to capture..."></textarea>
            </div>

            <button type="submit" className="w-full bg-[var(--text-dark)] text-white py-4 rounded-full font-sans text-[1rem] font-medium transition-all duration-300 hover:bg-[var(--accent-orange)] mt-4">
              Send Inquiry
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
