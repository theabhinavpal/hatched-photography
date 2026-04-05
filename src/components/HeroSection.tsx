import React from 'react';
import { ArcGalleryHero } from './ui/arc-gallery-hero-component';

export default function HeroSection() {
  // An array of Unsplash image URLs related to photography, families, and couples
  const memoryImages = [
    'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542038383-7d8815194b15?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504198458649-3128b932f49e?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400&auto=format&fit=crop',
  ];

  return (
    <div className="w-full">
      <ArcGalleryHero images={memoryImages} />
    </div>
  );
}
