import { 
  GridBody,
  DraggableContainer,
  GridItem, 
} from "./ui/infinite-drag-scroll";
import { motion } from "motion/react";

import { Link } from "react-router-dom";

const images = [
  {
    id: 1,
    alt: "Couple walking in a field",
    src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    alt: "Family playing in the park",
    src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    alt: "Newborn baby sleeping",
    src: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    alt: "Maternity shoot on the beach",
    src: "https://images.unsplash.com/photo-1542038383-7d8815194b15?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    alt: "Couple laughing together",
    src: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    alt: "Father holding his child",
    src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 7,
    alt: "Mother and daughter",
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 8,
    alt: "Couple holding hands",
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 9,
    alt: "Family walking in the woods",
    src: "https://images.unsplash.com/photo-1504198458649-3128b932f49e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 10,
    alt: "Baby smiling",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 11,
    alt: "Couple looking at each other",
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 12,
    alt: "Family at the beach",
    src: "https://images.unsplash.com/photo-1542037104857-ffcb0b07c216?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 13,
    alt: "Maternity silhouette",
    src: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 14,
    alt: "Newborn feet",
    src: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 15,
    alt: "Couple in the city",
    src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 16,
    alt: "Family picnic",
    src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 17,
    alt: "Mother holding baby",
    src: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 18,
    alt: "Couple kissing",
    src: "https://images.unsplash.com/photo-1542038383-7d8815194b15?q=80&w=800&auto=format&fit=crop",
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-16 bg-[var(--bg-white)] overflow-hidden border-b border-[var(--color-border)]">
      <div className="px-[5vw] max-w-[1400px] mx-auto mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] text-[var(--text-dark)] text-center mb-4"
        >
          Recent <em>Work</em>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="text-[1.125rem] text-[var(--text-muted)] text-center max-w-2xl mx-auto"
        >
          Drag to explore some of my favorite recent moments captured.
        </motion.p>
      </div>

      <div className="relative w-full h-[60vh] md:h-[80vh] border-y border-[var(--color-border)]">
        {/* Overlay gradients to blend edges */}
        <div className="absolute inset-y-0 left-0 w-[10vw] bg-gradient-to-r from-[var(--bg-white)] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-[10vw] bg-gradient-to-l from-[var(--bg-white)] to-transparent z-10 pointer-events-none"></div>
        
        <DraggableContainer variant="masonry" className="bg-transparent">
          <GridBody>
            {images.map((image) => (
              <GridItem
                key={image.id}
                className="relative h-48 w-32 md:h-80 md:w-56 rounded-[16px] overflow-hidden shadow-sm ring-1 ring-[var(--color-border)]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="pointer-events-none absolute h-full w-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </GridItem>
            ))}
          </GridBody>
        </DraggableContainer>
      </div>

      <div className="text-center mt-16 px-[5vw]">
        <Link to="/portfolio" className="inline-flex items-center justify-center px-6 py-3 rounded-full font-sans text-[0.95rem] font-medium transition-all duration-200 bg-[var(--bg-pill)] text-[var(--text-dark)] hover:bg-[var(--bg-pill-hover)]">
          View Full Portfolio
        </Link>
      </div>
    </section>
  );
}
