import { motion } from 'motion/react';
import { ZoomIn } from 'lucide-react';
import { useState } from 'react';
import Lightbox from '../components/Lightbox';
import PageSEO from '../components/PageSEO';

const projects = [
  "/IMG_9846-scaled.jpeg",
  "/IMG_9847-scaled.jpeg",
  "/IMG_2191-scaled.jpeg",
  "/IMG_2192-scaled.jpeg",
  "/Before_CE.png",
  "/After_CE_1.png",
  "/Screenshot-2026-01-08-at-4.21.48-AM.png",
  "/10-1.png",
  "/1.png",
  "/14.png",
  "/4.png"
];

export default function ProjectsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-white min-h-screen">
      <PageSEO
        title="Our Projects | C&E Seamless Gutters — Iowa, LA"
        description="Browse completed seamless gutter, siding, and exterior projects by C&E Seamless Gutters throughout Iowa, Lake Charles, Sulphur, and Southwest Louisiana."
        path="/projects"
      />
      
      {/* Skinnier Hero Section */}
      <section className="bg-white pt-[160px] md:pt-[170px] pb-16 md:pb-20 px-6 relative overflow-hidden flex items-center justify-center border-b border-gray-100">
        <div className="absolute top-[60%] -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-[0.03] pointer-events-none w-full flex justify-center z-0">
          <img src="/c&elogo-nowords.png" alt="Background Logo" className="w-[300px] md:w-[450px] object-contain grayscale" />
        </div>
        
        <div className="container mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-brand-dark tracking-tighter uppercase mb-4"
          >
            Project Gallery
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-4 py-1 border-y-2 border-brand-red"
          >
            <p className="text-brand-red font-bold tracking-widest text-xs md:text-sm uppercase">
              Explore our recent seamless gutter installations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Body Content Section - Gallery Grid */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[250px] gap-4 md:gap-6">
            {projects.map((src, idx) => (
              <motion.div
                key={idx}
                onClick={() => setSelectedImage(src)}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 4) * 0.1 }}
                whileHover={{ scale: 1.02, zIndex: 10 }}
                className={`relative w-full h-full bg-gray-900 overflow-hidden shadow-xl rounded-sm group cursor-pointer ${
                  idx === 0 || idx === 5 || idx === 8 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <img 
                  src={src} 
                  alt={`Project completed gallery ${idx + 1}`} 
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
      </section>

      {/* Full-Width CTA Banner */}
      <section className="bg-brand-red w-full py-16 md:py-24 text-white text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-6"
        >
          <h3 className="text-4xl md:text-5xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-4">Start Your Project</h3>
          <p className="text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto text-white/90">
            Ready to upgrade your home's exterior? Contact our local experts today.
          </p>
          <a href="/contact" className="inline-block px-10 py-5 bg-white text-brand-red font-black tracking-widest text-sm uppercase transition-colors hover:bg-brand-dark hover:text-white shadow-xl">
            Request a Free Quote
          </a>
        </motion.div>
      </section>

      <Lightbox 
        isOpen={!!selectedImage} 
        imageSrc={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />
    </div>
  );
}
