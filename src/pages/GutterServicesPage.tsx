import { motion } from 'motion/react';
import { ZoomIn } from 'lucide-react';
import { useState } from 'react';
import Lightbox from '../components/Lightbox';
import PageSEO from '../components/PageSEO';

const gallery = [
  "/4.png",
  "/IMG_9846-scaled.jpeg",
  "/IMG_9847-scaled.jpeg",
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Gutter Services",
  "name": "Gutter Services | C&E Seamless Gutters — Iowa, LA",
  "description": "Seamless gutter installation, repair, cleaning, and guard installation serving Iowa, Lake Charles, Sulphur, and all of Calcasieu Parish. Call (337) 384-4417.",
  "provider": {
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://www.candehomeservices.com/#business",
    "name": "C&E Seamless Gutters",
    "telephone": "(337) 384-4417"
  }
};

export default function GutterServicesPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-white min-h-screen">
      <PageSEO
        title="Gutter Services | C&E Seamless Gutters — Iowa, LA"
        description={schema.description}
        path="/services/gutters"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

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
            Gutter Services
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-4 py-1 border-y-2 border-brand-red"
          >
            <p className="text-brand-red font-bold tracking-widest text-xs md:text-sm uppercase">
              Flawless extrusion & precision installation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Body Content Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-20">
            {/* Left Column: Expanded Body Text */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 flex flex-col justify-center"
            >
              <h2 className="text-3xl md:text-5xl font-black text-brand-dark tracking-tighter uppercase mb-8">
                Protect Your <span className="text-brand-red">Foundation.</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-medium">
                <p>
                  Water damage is one of the most severe threats to the structural integrity of your home in Louisiana. Our custom-extruded, seamless gutter systems are designed right in your driveway to ensure absolutely flawless, leak-proof dimensions capable of handling the most extreme weather conditions.
                </p>
                <p>
                  We don't just hang aluminum; we execute rigorous pitch calculations to maximize flow velocity while integrating premium leaf guards to guarantee your system remains completely unobstructed year-round. Don't risk foundation settling or fascia rot when proactive protection is just a phone call away.
                </p>
              </div>
            </motion.div>

            {/* Right Column: Editorial Values */}
            <div className="lg:w-1/2 flex flex-col justify-center space-y-12 lg:border-l-2 border-gray-200 lg:pl-16 relative">
              {[
                { num: "01", title: "Custom Extrusion", desc: "Gutters are formed identically to the exact length of your roofline, ensuring zero seams and zero weak leak points." },
                { num: "02", title: "Leaf Protection", desc: "Industrial-grade micro-mesh guards that reject debris and completely eliminate the need for dangerous ladder climbing." },
                { num: "03", title: "Fascia Repair", desc: "Before installing, we identify and repair any pre-existing wood rot so your new system binds into solid framing." }
              ].map((val, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex gap-6 md:gap-8"
                >
                  <span className="text-6xl md:text-7xl font-black text-transparent [-webkit-text-stroke:2px_#cbd5e1] group-hover:[-webkit-text-stroke:2px_#ff0000] transition-colors duration-500 mt-[-10px]">{val.num}</span>
                  <div>
                    <h3 className="text-2xl font-black text-brand-dark mb-3 uppercase tracking-tighter">{val.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-base">{val.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Micro Gallery */}
          <div className="pt-10 border-t-2 border-gray-200/50">
            <h3 className="text-2xl font-black text-brand-dark uppercase tracking-tighter mb-8 text-center">Gutter Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {gallery.map((src, idx) => (
                <motion.div
                  key={idx}
                  onClick={() => setSelectedImage(src)}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, zIndex: 10 }}
                  className="relative w-full h-[250px] bg-gray-900 overflow-hidden shadow-xl rounded-sm group cursor-pointer"
                >
                  <img src={src} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Gutter service preview" />
                  <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <ZoomIn className="text-white w-12 h-12 opacity-90 drop-shadow-md transform scale-50 group-hover:scale-100 transition-transform duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Full-Width CTA Banner */}
      <section className="bg-brand-red w-full py-16 md:py-24 text-white text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="container mx-auto px-6">
          <h3 className="text-4xl md:text-5xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-4">Protect Your Home Today</h3>
          <p className="text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto text-white/90">
            Don't wait for the next storm. Contact C&E Home Services for a seamless gutter quote instantly.
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
