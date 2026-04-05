import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react';

const data = {
  facebookLink: '#',
  instaLink: '#',
  twitterLink: '#',
  services: {
    maternity: '/#services',
    newborn: '/#services',
    family: '/#services',
    couples: '/#services',
  },
  about: {
    story: '/about',
    portfolio: '/#gallery',
    investment: '/#services',
    faq: '/#faq',
  },
  help: {
    contact: '/#contact',
    clientPortal: '#',
    styleGuide: '#',
  },
  contact: {
    email: 'hello@hatchedphotos.com',
    phone: '+1 (555) 123-4567',
    address: 'Seattle, WA',
  },
  company: {
    name: 'Hatched Photos',
    description:
      'Capturing genuine, love-filled moments that tell your story. Editorial and lifestyle photography for families and couples.',
  },
};

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: data.facebookLink },
  { icon: Instagram, label: 'Instagram', href: data.instaLink },
  { icon: Twitter, label: 'Twitter', href: data.twitterLink },
];

const aboutLinks = [
  { text: 'My Story', href: data.about.story },
  { text: 'Portfolio', href: data.about.portfolio },
  { text: 'Investment', href: data.about.investment },
  { text: 'FAQs', href: data.about.faq },
];

const serviceLinks = [
  { text: 'Maternity', href: data.services.maternity },
  { text: 'Newborn', href: data.services.newborn },
  { text: 'Family', href: data.services.family },
  { text: 'Couples', href: data.services.couples },
];

const helpfulLinks = [
  { text: 'Contact Me', href: data.help.contact },
  { text: 'Client Portal', href: data.help.clientPortal },
  { text: 'Style Guide', href: data.help.styleGuide, hasIndicator: true },
];

const contactInfo = [
  { icon: Mail, text: data.contact.email },
  { icon: Phone, text: data.contact.phone },
  { icon: MapPin, text: data.contact.address, isAddress: true },
];

export default function Footer4Col() {
  return (
    <footer className="bg-[var(--bg-white)] w-full place-self-end border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-[1400px] px-[5vw] pt-16 pb-6 lg:pt-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div>
            <div className="text-[var(--text-dark)] flex justify-center gap-4 sm:justify-start items-center group">
              <img 
                src="https://ais-pre-jgleqqkxt6hb5vtom5pwjr-549545075016.asia-southeast1.run.app/logo.png" 
                alt="Hatched Photos Logo" 
                className="h-12 w-12 object-contain transition-transform group-hover:scale-110"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "images/logo.png";
                }}
              />
              <span className="text-3xl font-serif italic">
                {data.company.name}
              </span>
            </div>

            <p className="text-[var(--text-muted)] font-sans mt-6 max-w-md text-center leading-relaxed sm:max-w-xs sm:text-left">
              {data.company.description}
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-[var(--text-dark)] hover:text-[var(--accent-orange)] transition-colors"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="size-5" strokeWidth={1.5} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-[1.1rem] font-serif text-[var(--text-dark)]">About</p>
              <ul className="mt-6 space-y-4 text-[0.95rem] font-sans">
                {aboutLinks.map(({ text, href }) => (
                  <li key={text}>
                    <Link
                      className="text-[var(--text-muted)] hover:text-[var(--accent-orange)] transition-colors"
                      to={href}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-[1.1rem] font-serif text-[var(--text-dark)]">Services</p>
              <ul className="mt-6 space-y-4 text-[0.95rem] font-sans">
                {serviceLinks.map(({ text, href }) => (
                  <li key={text}>
                    <Link
                      className="text-[var(--text-muted)] hover:text-[var(--accent-orange)] transition-colors"
                      to={href}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-[1.1rem] font-serif text-[var(--text-dark)]">Resources</p>
              <ul className="mt-6 space-y-4 text-[0.95rem] font-sans">
                {helpfulLinks.map(({ text, href, hasIndicator }) => (
                  <li key={text}>
                    <Link
                      to={href}
                      className={`${
                        hasIndicator
                          ? 'group flex justify-center gap-2 items-center sm:justify-start'
                          : 'text-[var(--text-muted)] hover:text-[var(--accent-orange)] transition-colors'
                      }`}
                    >
                      <span className="text-[var(--text-muted)] group-hover:text-[var(--accent-orange)] transition-colors">
                        {text}
                      </span>
                      {hasIndicator && (
                        <span className="relative flex size-2">
                          <span className="bg-[var(--accent-orange)] absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                          <span className="bg-[var(--accent-orange)] relative inline-flex size-2 rounded-full" />
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-[1.1rem] font-serif text-[var(--text-dark)]">Contact</p>
              <ul className="mt-6 space-y-4 text-[0.95rem] font-sans">
                {contactInfo.map(({ icon: Icon, text, isAddress }) => (
                  <li key={text}>
                    <a
                      className="flex items-center justify-center gap-2 sm:justify-start group"
                      href="#"
                    >
                      <Icon className="text-[var(--accent-orange)] size-4 shrink-0" strokeWidth={1.5} />
                      {isAddress ? (
                        <address className="text-[var(--text-muted)] group-hover:text-[var(--accent-orange)] flex-1 not-italic transition-colors">
                          {text}
                        </address>
                      ) : (
                        <span className="text-[var(--text-muted)] group-hover:text-[var(--accent-orange)] flex-1 transition-colors">
                          {text}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-[var(--color-border)] pt-8">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-[0.85rem] font-sans text-[var(--text-muted)]">
              <span className="block sm:inline">All rights reserved.</span>
            </p>

            <p className="text-[0.85rem] font-sans text-[var(--text-muted)] mt-4 transition sm:order-first sm:mt-0">
              &copy; {new Date().getFullYear()} {data.company.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
