import React from "react";
import { 
  GridBody,
  DraggableContainer,
  GridItem, 
} from "../components/ui/infinite-drag-scroll";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const images = [
  {
    id: 1,
    alt: "Newborn sleeping peacefully",
    src: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    alt: "Family laughing in a golden field",
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    alt: "Maternity portrait in soft light",
    src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    alt: "Toddler's first steps",
    src: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    alt: "Siblings sharing a quiet moment",
    src: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    alt: "Mother and baby connection",
    src: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 7,
    alt: "Father holding his newborn",
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 8,
    alt: "Family picnic in the park",
    src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 9,
    alt: "Grandparents with their grandchild",
    src: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 10,
    alt: "Candid childhood laughter",
    src: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 11,
    alt: "Soft newborn details",
    src: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 12,
    alt: "Family walk at sunset",
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 13,
    alt: "Anticipation of a new life",
    src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 14,
    alt: "Joyful family connection",
    src: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 15,
    alt: "Quiet moments at home",
    src: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 16,
    alt: "Pure childhood wonder",
    src: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 17,
    alt: "Generations together",
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 18,
    alt: "The beauty of motherhood",
    src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Portfolio() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-[#0F0F0F]">
      {/* Back to Home Button */}
      <div className="absolute top-8 left-8 z-[60]">
        <Link 
          to="/" 
          className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 text-white group-hover:-translate-x-1 transition-transform" />
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-white font-medium">Back to Home</span>
        </Link>
      </div>

      <DraggableContainer variant="masonry" className="bg-transparent">
        <GridBody>
          {images.map((image) => (
            <GridItem
              key={image.id}
              className="relative h-[28rem] w-[20rem] md:h-[40rem] md:w-[30rem]"
            >
              <div className="group relative w-full h-full overflow-hidden rounded-sm">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="pointer-events-none absolute h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-8 pointer-events-none">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                    <p className="text-white font-serif italic text-2xl mb-1">{image.alt}</p>
                    <p className="text-white/50 font-sans text-[10px] uppercase tracking-widest">Hatched Photos • Lifestyle</p>
                  </div>
                </div>
              </div>
            </GridItem>
          ))}
        </GridBody>
      </DraggableContainer>
    </main>
  );
}
