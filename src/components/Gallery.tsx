import { motion } from 'motion/react';
import { ZoomIn } from 'lucide-react';
import { useState } from 'react';
import Lightbox from './Lightbox';

const projects = [
  "/IMG_9846-scaled.jpeg",
  "/IMG_2191-scaled.jpeg",
  "/Screenshot-2026-01-08-at-4.21.48-AM.png",
  "/10-1.png",
  "/1.png",
];

const layoutClasses = [
  "col-span-2 row-span-2 md:col-span-2 md:row-span-2",
  "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
  "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
  "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
  "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 bg-brand-dark overflow-hidden">
      <div className="container mx-auto px-6 mb-16 flex justify-center">
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter text-center">RECENT WORK</h2>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[250px] gap-4 md:gap-6">
          {projects.map((src, idx) => (
            <motion.div
              key={idx}
              onClick={() => setSelectedImage(src)}
              whileHover={{ scale: 1.02, zIndex: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`relative w-full h-full bg-gray-900 overflow-hidden shadow-2xl rounded-sm group cursor-pointer ${layoutClasses[idx]}`}
            >
              <img 
                src={src} 
                alt={`Project ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <ZoomIn className="text-white w-10 h-10 md:w-16 md:h-16 opacity-90 drop-shadow-md transform scale-50 group-hover:scale-100 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Lightbox 
        isOpen={!!selectedImage} 
        imageSrc={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />
    </section>
  );
}
