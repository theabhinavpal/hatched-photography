import React from 'react';
import HeroSection from '../components/HeroSection';
import IntroSection from '../components/IntroSection';
import GallerySection from '../components/GallerySection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <IntroSection />
      <GallerySection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
}
