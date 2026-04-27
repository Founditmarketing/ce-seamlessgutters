import { motion } from 'motion/react';
import React from 'react';

export default function Hero() {
  return (
    <section 
      className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-white pt-[130px] md:pt-[140px] pb-12 md:pb-12"
    >

      {/* Background Sketch */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-sketch.png" 
          alt="" 
          className="w-full h-full object-cover opacity-25"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center pointer-events-none">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-0 md:mb-2 pointer-events-auto flex justify-center w-full"
        >
          <img src="/logo.png" alt="C&E Seamless Gutters Logo" className="h-28 md:h-32 lg:h-40 xl:h-44 w-auto object-contain" />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[16vw] md:text-[10.5vw] leading-[0.85] font-black tracking-tighter text-brand-red uppercase pointer-events-auto mt-4 md:mt-0"
        >
          SEAMLESS
        </motion.h1>
        
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-[16vw] md:text-[10.5vw] leading-[0.85] font-black tracking-tighter text-outline-black uppercase pointer-events-auto"
        >
          DEFENSE.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-lg md:text-2xl font-medium text-gray-600 max-w-2xl pointer-events-auto"
        >
          Architectural-grade gutter systems engineered for Louisiana weather.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 pointer-events-auto"
        >
          <a href="/contact" className="relative overflow-hidden group z-10 px-8 py-4 bg-brand-red text-white font-bold tracking-widest uppercase text-sm transition-colors text-center shadow-lg hover:text-brand-dark">
            <span className="absolute top-0 left-0 w-full h-0 bg-brand-yellow transition-all duration-300 ease-out group-hover:h-full -z-10" />
            GET A QUOTE
          </a>
          <a href="/#services" className="relative overflow-hidden group z-10 px-8 py-4 bg-transparent border-2 border-brand-dark text-brand-dark font-bold tracking-widest uppercase text-sm transition-colors text-center hover:text-white">
            <span className="absolute top-0 left-0 w-full h-0 bg-brand-dark transition-all duration-300 ease-out group-hover:h-full -z-10" />
            OUR SERVICES
          </a>
        </motion.div>
      </div>
    </section>
  );
}
