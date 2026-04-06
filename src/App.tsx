import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer';
import NavHeader from './components/ui/nav-header';
import CustomCursor from './components/ui/CustomCursor';

gsap.registerPlugin(ScrollTrigger);

function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || isMobileMenuOpen 
            ? 'bg-[#F5EFEB]/95 backdrop-blur-md shadow-sm py-4 border-b border-[#E0D5D2]' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-[10vw] flex justify-between items-center gap-4">
          <Link to="/" className="flex items-center shrink-0 group">
            <motion.img 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              src="https://ais-pre-jgleqqkxt6hb5vtom5pwjr-549545075016.asia-southeast1.run.app/logo.png" 
              alt="Hatched Photos Logo" 
              className="h-16 w-auto object-contain transition-transform"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "images/logo.png";
              }}
            />
          </Link>
          
          {/* Desktop Nav */}
          <NavHeader className="hidden md:flex ml-auto" />

          {/* Mobile Menu Toggle */}
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-[#1A1A1A] p-2 -mr-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#F5EFEB]/98 backdrop-blur-xl pt-28 px-6 md:hidden"
          >
            <nav className="flex flex-col space-y-6 items-center">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Portfolio', href: '/portfolio' },
                { name: 'Info', href: '/#info' },
                { name: 'Blog', href: '/#blog' },
                { name: 'Families', href: '/#families' },
                { name: 'Newborn', href: '/#newborn' },
                { name: 'Seniors', href: '/#seniors' },
                { name: 'Contact', href: '/#contact' }
              ].map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[#1A1A1A] text-3xl font-serif tracking-tight hover:text-[var(--accent-orange)] transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MainContent() {
  const location = useLocation();
  const isPortfolioPage = location.pathname.toLowerCase().replace(/\/$/, "") === '/portfolio';

  return (
    <div className="min-h-screen">
      <CustomCursor />
      <div className="noise-overlay"></div>
      {!isPortfolioPage && <Navbar />}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      {!isPortfolioPage && <Footer />}
    </div>
  );
}

export default function App() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Integrate Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  return (
    <Router>
      <ScrollToHashElement />
      <MainContent />
    </Router>
  );
}
