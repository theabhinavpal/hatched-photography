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
    alt: "adult 1",
    src: "http://www.hatchedphotos.com/wp-content/uploads/2022/02/24-3793-pp_gallery/Hannah-2020-12-03-043(pp_w900_h600).jpg",
  },
  {
    id: 2,
    alt: "teen1",
    src: "http://www.hatchedphotos.com/wp-content/uploads/2022/02/24-3793-pp_gallery/Fogel-2021-12-11-009(pp_w900_h600).jpg",
  },
  {
    id: 3,
    alt: "adult2",
    src: "http://www.hatchedphotos.com/wp-content/uploads/2022/02/24-3793-pp_gallery/Macy-2020-10-18-030-Edit.jpg",
  },
  {
    id: 4,
    alt: "Maternity shoot",
    src: "http://www.hatchedphotos.com/wp-content/uploads/2013/08/23-3182-pp_gallery/Kanowsky-2021-06-08-035(pp_w900_h600).jpg",
  },
  {
    id: 5,
    alt: "family1",
    src: "http://www.hatchedphotos.com/wp-content/uploads/2013/08/23-3178-pp_gallery/Simmons-2021-11-08-008(pp_w900_h600).jpg",
  },
  {
    id: 6,
    alt: "Father holding his child",
    src: "http://www.hatchedphotos.com/wp-content/uploads/2013/08/06-3178-pp_gallery/West3(pp_w800_h1200).jpg",
  },
  {
    id: 7,
    alt: "Mother and daughter",
    src: "http://www.hatchedphotos.com/wp-content/uploads/2013/08/06-3178-pp_gallery/vanWickle-2016(pp_w800_h1200).jpg",
  },
  {
    id: 8,
    alt: "Couple with their children",
    src: "http://www.hatchedphotos.com/wp-content/uploads/2013/08/23-3178-pp_gallery/Crain-2020-01-05-055(pp_w900_h600).jpg",
  },
  {
    id: 9,
    alt: "Family walking in the woods",
    src: "http://www.hatchedphotos.com/wp-content/uploads/2013/08/23-3178-pp_gallery/Derham-2020-11-20-033(pp_w900_h600).jpg",
  },
  {
    id: 10,
    alt: "Baby smiling",
    src: "http://www.hatchedphotos.com/wp-content/uploads/2013/08/23-3182-pp_gallery/Davis-2021-12-10-009(pp_w900_h600).jpg",
  },
  {
    id: 11,
    alt: "Couple looking at each other",
    src: "http://www.hatchedphotos.com/wp-content/uploads/2013/08/23-3182-pp_gallery/Davis-2021-12-10-057(pp_w900_h600).jpg",
  },
  {
    id: 12,
    alt: "Family at the beach",
    src: "http://www.hatchedphotos.com/wp-content/uploads/2013/08/23-3178-pp_gallery/Hutchinson-2020-12-04-005(pp_w900_h600).jpg",
  },
  {
    id: 13,
    alt: "Maternity silhouette",
    src: "http://www.hatchedphotos.com/wp-content/uploads/2013/08/23-3182-pp_gallery/Kanowsky-2021-06-08-035(pp_w900_h600).jpg",
  },
  {
    id: 14,
    alt: "Newborn feet",
    src: "http://www.hatchedphotos.com/wp-content/uploads/2013/08/03-3182-pp_gallery/Maloy-2018-09-29-397(pp_w900_h600).jpg",
  },
  {
    id: 15,
    alt: "Couple in the city",
    src: "http://www.hatchedphotos.com/wp-content/uploads/2013/08/23-3178-pp_gallery/Derham-2020-11-20-033(pp_w900_h600).jpg",
  },
  {
    id: 16,
    alt: "Family picnic",
    src: "http://www.hatchedphotos.com/wp-content/uploads/2013/08/06-3178-pp_gallery/Atkins(pp_w799_h532).jpg",
  },
  {
    id: 17,
    alt: "Mother holding baby",
    src: "http://www.hatchedphotos.com/wp-content/uploads/2013/08/06-3178-pp_gallery/Garrett(pp_w799_h532).jpg",
  },
  {
    id: 18,
    alt: "Dad with Daughter",
    src: "http://www.hatchedphotos.com/wp-content/uploads/2013/08/06-3178-pp_gallery/Waghorn2(pp_w799_h532).jpg",
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-16 bg-[var(--bg-white)] overflow-hidden border-b border-[var(--color-border)]">
      <div className="px-[5vw] max-w-[1400px] mx-auto mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] text-[var(--text-dark)] text-center mb-4 overflow-hidden"
        >
          <motion.span
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="block"
          >
            Recent <em>Work</em>
          </motion.span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="text-[1.125rem] text-[var(--text-muted)] text-center max-w-2xl mx-auto font-light"
        >
          Drag to explore some of my favorite recent moments captured.
        </motion.p>
      </div>

      <div className="relative w-full h-[60vh] md:h-[80vh] border-y border-[var(--color-border)] bg-[var(--bg-offwhite)]/30">
        {/* Overlay gradients to blend edges */}
        <div className="absolute inset-y-0 left-0 w-[15vw] bg-gradient-to-r from-[var(--bg-white)] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-[15vw] bg-gradient-to-l from-[var(--bg-white)] to-transparent z-10 pointer-events-none"></div>
        
        <DraggableContainer variant="masonry" className="bg-transparent">
          <GridBody>
            {images.map((image, i) => (
              <GridItem
                key={image.id}
                className="relative h-48 w-32 md:h-80 md:w-56 rounded-[24px] overflow-hidden shadow-md ring-1 ring-[var(--color-border)] group cursor-grab active:cursor-grabbing"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotate: i % 2 === 0 ? 2 : -2 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: (i % 6) * 0.1, ease: [0.23, 1, 0.32, 1] }}
                  className="w-full h-full"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="pointer-events-none absolute h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
              </GridItem>
            ))}
          </GridBody>
        </DraggableContainer>
      </div>

      <div className="text-center mt-20 px-[5vw]">
        <Link to="/portfolio" className="inline-flex items-center justify-center px-10 py-4 rounded-full font-sans text-[0.85rem] font-semibold uppercase tracking-[0.2em] transition-all duration-300 bg-[var(--text-dark)] text-white hover:bg-[var(--accent-orange)] hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
          View Full Portfolio
        </Link>
      </div>
    </section>
  );
}
