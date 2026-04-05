'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// --- The ArcGalleryHero Component ---
type ArcGalleryHeroProps = {
  images: string[];
  startAngle?: number;
  endAngle?: number;
  // radius for different screen sizes
  radiusLg?: number;
  radiusMd?: number;
  radiusSm?: number;
  // size of each card for different screen sizes
  cardSizeLg?: number;
  cardSizeMd?: number;
  cardSizeSm?: number;
  // optional extra class on outer section
  className?: string;
};

export const ArcGalleryHero: React.FC<ArcGalleryHeroProps> = ({
  images,
  startAngle = 20,
  endAngle = 160,
  radiusLg = 480,
  radiusMd = 360,
  radiusSm = 260,
  cardSizeLg = 120,
  cardSizeMd = 100,
  cardSizeSm = 80,
  className = '',
}) => {
  const [dimensions, setDimensions] = useState({
    radius: radiusLg,
    cardSize: cardSizeLg,
  });

  // Effect to handle responsive resizing of the arc and cards
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDimensions({ radius: radiusSm, cardSize: cardSizeSm });
      } else if (width < 1024) {
        setDimensions({ radius: radiusMd, cardSize: cardSizeMd });
      } else {
        setDimensions({ radius: radiusLg, cardSize: cardSizeLg });
      }
    };

    handleResize(); // Set initial size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [radiusLg, radiusMd, radiusSm, cardSizeLg, cardSizeMd, cardSizeSm]);

  // Ensure at least 2 points to distribute angles for the arc calculation
  const count = Math.max(images.length, 2);
  const step = (endAngle - startAngle) / (count - 1);

  return (
    <section className={`relative overflow-hidden bg-transparent min-h-[90vh] flex flex-col pt-32 ${className}`}>
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-[var(--color-accent)] opacity-10 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[var(--accent-orange)] opacity-10 blur-[120px] rounded-full"
        />
      </div>

      {/* Background ring container that controls geometry */}
      <div
        className="relative mx-auto"
        style={{
          width: '100%',
          // Give it a bit more height to prevent clipping
          height: dimensions.radius * 1.2,
        }}
      >
        {/* Center pivot for transforms - positioned at bottom center */}
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2">
          {/* Each image is positioned on the circle and rotated to face outward */}
          {images.map((src, i) => {
            const angle = startAngle + step * i; // degrees
            const angleRad = (angle * Math.PI) / 180;
            
            // Calculate x and y positions on the arc
            const x = Math.cos(angleRad) * dimensions.radius;
            const y = Math.sin(angleRad) * dimensions.radius;
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 100, x: x, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  x: x, 
                  scale: 1,
                  transition: {
                    delay: i * 0.1,
                    duration: 0.8,
                    ease: [0.23, 1, 0.32, 1]
                  }
                }}
                className="absolute"
                style={{
                  width: dimensions.cardSize,
                  height: dimensions.cardSize,
                  left: `calc(50%)`,
                  bottom: `${y}px`,
                  transform: `translate(-50%, 50%)`,
                  zIndex: count - i,
                }}
              >
                <motion.div 
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [angle / 4, angle / 4 + 2, angle / 4],
                  }}
                  transition={{ 
                    duration: 4 + Math.random() * 2, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: Math.random() * 2
                  }}
                  className="rounded-2xl shadow-xl overflow-hidden ring-1 ring-[var(--color-border)] bg-[var(--bg-white)] transition-transform hover:scale-110 w-full h-full cursor-pointer"
                >
                  <img
                    src={src}
                    alt={`Memory ${i + 1}`}
                    className="block w-full h-full object-cover"
                    draggable={false}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://placehold.co/400x400/334155/e2e8f0?text=Memory`;
                    }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Content positioned below the arc */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 -mt-32 md:-mt-40 lg:-mt-52">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-center max-w-2xl px-6"
        >
          <span className="label flex justify-center">Est. 2014</span>
          <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] mb-8 text-[var(--text-dark)]">
            Candid Moments, <br />
            <span className="text-[#B08D8D] italic">Timeless</span> Stories.
          </h1>
          <p className="text-[1.1rem] md:text-[1.2rem] text-[var(--text-muted)] font-light max-w-lg mx-auto mb-10">
            Capturing the beauty of real, unscripted life.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="inline-block w-full sm:w-auto bg-[var(--text-dark)] text-white border-none py-[1.2rem] px-[3rem] font-sans font-semibold uppercase tracking-[0.1em] text-[0.8rem] cursor-pointer transition-all duration-300 hover:bg-[#B08D8D] hover:scale-105 active:scale-95 text-center shadow-lg hover:shadow-xl">
              Book a Session
            </a>
            <a href="#gallery" className="inline-block w-full sm:w-auto bg-transparent text-[var(--text-dark)] border border-[var(--text-dark)] py-[1.2rem] px-[3rem] font-sans font-semibold uppercase tracking-[0.1em] text-[0.8rem] cursor-pointer transition-all duration-300 hover:bg-[var(--bg-pill)] hover:scale-105 active:scale-95 text-center">
              View Portfolio
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
