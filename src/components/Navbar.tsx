import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20); // triggers smoothly as you start scrolling
  });

  return (
    <motion.header 
      animate={{ y: isScrolled ? -36 : 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="fixed top-0 inset-x-0 z-50 flex flex-col"
    >
      <div className="h-[36px] bg-brand-yellow px-4 md:px-6 flex items-center justify-between text-xs md:text-sm font-bold tracking-wide text-brand-dark">
        <div className="flex flex-1 items-center justify-start space-x-4">
          <a href="tel:3373844417" className="hover:text-brand-red transition-colors flex items-center gap-2">
            CALL US: (337) 384-4417
          </a>
        </div>
        <div className="hidden md:flex flex-none justify-center px-4 text-center">
          <span>LOUISIANA'S #1 RATED SEAMLESS GUTTERS</span>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <a href="https://www.facebook.com/p/CE-Home-Services-100094757701317/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors">FACEBOOK</a>
        </div>
      </div>

      <nav className="flex items-center px-6 py-4 bg-white/70 backdrop-blur-md border-b border-gray-200/50 w-full relative">
        <div className="flex flex-1 justify-start">
          <Link to="/" className="block">
            <img src="/logo.png" alt="C&E Seamless Gutters Logo" className="h-12 md:h-14 w-auto object-contain" />
          </Link>
        </div>
        
        <div className="hidden lg:flex items-center justify-center space-x-6 xl:space-x-8 font-medium text-[13px] xl:text-sm tracking-wide">
          <Link to="/" className="hover:text-brand-red transition-colors">HOME</Link>
          
          <div className="relative group py-4">
            <button className="flex items-center gap-1 hover:text-brand-red transition-colors tracking-wide font-medium uppercase outline-none focus:outline-none cursor-default">
              SERVICES ▾
            </button>
            <div className="absolute top-[80%] pt-2 text-left left-1/2 -translate-x-1/2 w-[520px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="bg-white shadow-[0_20px_40px_rgba(0,0,0,0.12)] border-t-4 border-brand-red py-4 transform origin-top translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="grid grid-cols-2 gap-0">
                  <div className="px-4 pb-2">
                    <p className="px-2 py-1 text-[10px] font-black tracking-widest text-gray-400 uppercase mb-1">Gutter Services</p>
                    <Link to="/services/seamless-gutter-installation" className="block px-2 py-2 hover:bg-gray-50 hover:text-brand-red transition-colors text-brand-dark tracking-tight text-xs font-black">Seamless Gutter Installation</Link>
                    <Link to="/services/gutter-repair" className="block px-2 py-2 hover:bg-gray-50 hover:text-brand-red transition-colors text-brand-dark tracking-tight text-xs font-black">Gutter Repair</Link>
                    <Link to="/services/gutter-guard-installation" className="block px-2 py-2 hover:bg-gray-50 hover:text-brand-red transition-colors text-brand-dark tracking-tight text-xs font-black">Gutter Guard Installation</Link>
                    <Link to="/services/gutter-cleaning" className="block px-2 py-2 hover:bg-gray-50 hover:text-brand-red transition-colors text-brand-dark tracking-tight text-xs font-black">Gutter Cleaning</Link>
                    <Link to="/services/downspout-installation-repair" className="block px-2 py-2 hover:bg-gray-50 hover:text-brand-red transition-colors text-brand-dark tracking-tight text-xs font-black">Downspout Installation & Repair</Link>
                    <Link to="/services/fascia-board-replacement" className="block px-2 py-2 hover:bg-gray-50 hover:text-brand-red transition-colors text-brand-dark tracking-tight text-xs font-black">Fascia Board Replacement</Link>
                  </div>
                  <div className="px-4 pb-2 border-l border-gray-100">
                    <p className="px-2 py-1 text-[10px] font-black tracking-widest text-gray-400 uppercase mb-1">Exterior Services</p>
                    <Link to="/services/storm-damage-restoration" className="block px-2 py-2 hover:bg-gray-50 hover:text-brand-red transition-colors text-brand-dark tracking-tight text-xs font-black">Storm Damage Restoration</Link>
                    <Link to="/services/vinyl-siding-installation" className="block px-2 py-2 hover:bg-gray-50 hover:text-brand-red transition-colors text-brand-dark tracking-tight text-xs font-black">Vinyl Siding Installation</Link>
                    <Link to="/services/window-replacement" className="block px-2 py-2 hover:bg-gray-50 hover:text-brand-red transition-colors text-brand-dark tracking-tight text-xs font-black">Window Replacement</Link>
                    <Link to="/service-area/lake-charles-la" className="block px-2 py-2 hover:bg-gray-50 hover:text-brand-red transition-colors text-brand-dark tracking-tight text-xs font-black">Lake Charles Service Area</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link to="/projects" className="hover:text-brand-red transition-colors">PROJECTS</Link>
          <Link to="/why-us" className="hover:text-brand-red transition-colors">WHY US</Link>
          <Link to="/reviews" className="hover:text-brand-red transition-colors">REVIEWS</Link>
        </div>

        <div className="flex flex-1 justify-end items-center">
          <div className="hidden lg:block">
          <Link to="/contact" className="relative overflow-hidden group z-10 px-6 py-3 bg-brand-red text-white font-semibold text-sm transition-colors hover:text-brand-dark inline-block shadow-md">
            <span className="absolute top-0 left-0 w-full h-0 bg-brand-yellow transition-all duration-300 ease-out group-hover:h-full -z-10" />
            GET A QUOTE
          </Link>
          </div>
          <button className="lg:hidden text-brand-dark" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Full-Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-0 w-full h-[calc(100vh-70px)] bg-white border-t border-gray-200 flex flex-col pt-10 pb-16 px-6 lg:hidden overflow-y-auto"
          >
            {/* Top Navigation Links */}
            <div className="flex flex-col space-y-6 text-center mt-4">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-black tracking-widest text-[#1a1a1a] hover:text-brand-red transition-colors">HOME</Link>
              
              <div className="flex flex-col items-center py-2 w-full">
                <span className="text-2xl font-black tracking-widest text-brand-red mb-4 border-b-2 border-brand-red pb-2">SERVICES</span>
                <div className="flex flex-col w-full bg-gray-50 py-4 rounded-sm border border-gray-100 text-left">
                  <p className="px-6 py-1 text-[10px] font-black tracking-widest text-gray-400 uppercase">Gutter Services</p>
                  <Link to="/services/seamless-gutter-installation" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-2.5 font-bold text-sm tracking-wide text-brand-dark hover:text-brand-red transition-colors uppercase border-t border-gray-100">Seamless Gutter Installation</Link>
                  <Link to="/services/gutter-repair" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-2.5 font-bold text-sm tracking-wide text-brand-dark hover:text-brand-red transition-colors uppercase border-t border-gray-100">Gutter Repair</Link>
                  <Link to="/services/gutter-guard-installation" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-2.5 font-bold text-sm tracking-wide text-brand-dark hover:text-brand-red transition-colors uppercase border-t border-gray-100">Gutter Guard Installation</Link>
                  <Link to="/services/gutter-cleaning" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-2.5 font-bold text-sm tracking-wide text-brand-dark hover:text-brand-red transition-colors uppercase border-t border-gray-100">Gutter Cleaning</Link>
                  <Link to="/services/downspout-installation-repair" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-2.5 font-bold text-sm tracking-wide text-brand-dark hover:text-brand-red transition-colors uppercase border-t border-gray-100">Downspout Installation & Repair</Link>
                  <Link to="/services/fascia-board-replacement" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-2.5 font-bold text-sm tracking-wide text-brand-dark hover:text-brand-red transition-colors uppercase border-t border-gray-100">Fascia Board Replacement</Link>
                  <p className="px-6 pt-4 pb-1 text-[10px] font-black tracking-widest text-gray-400 uppercase border-t-2 border-gray-200 mt-2">Exterior Services</p>
                  <Link to="/services/storm-damage-restoration" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-2.5 font-bold text-sm tracking-wide text-brand-dark hover:text-brand-red transition-colors uppercase border-t border-gray-100">Storm Damage Restoration</Link>
                  <Link to="/services/vinyl-siding-installation" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-2.5 font-bold text-sm tracking-wide text-brand-dark hover:text-brand-red transition-colors uppercase border-t border-gray-100">Vinyl Siding Installation</Link>
                  <Link to="/services/window-replacement" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-2.5 font-bold text-sm tracking-wide text-brand-dark hover:text-brand-red transition-colors uppercase border-t border-gray-100">Window Replacement</Link>
                </div>
              </div>

              <Link to="/projects" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-black tracking-widest text-[#1a1a1a] hover:text-brand-red transition-colors">PROJECTS</Link>
              <Link to="/why-us" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-black tracking-widest text-[#1a1a1a] hover:text-brand-red transition-colors">WHY US</Link>
              <Link to="/reviews" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-black tracking-widest text-[#1a1a1a] hover:text-brand-red transition-colors">REVIEWS</Link>
              
              <div className="pt-6">
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="inline-block px-12 py-5 bg-brand-red text-white font-black tracking-widest text-base transition-colors hover:bg-brand-dark hover:border-brand-dark border-2 border-brand-red w-full">
                  GET A QUOTE
                </Link>
              </div>
            </div>

            {/* Bottom Info Section */}
            <div className="flex flex-col items-center space-y-4 pt-10 mt-auto">
              <p className="text-brand-dark/40 text-[10px] font-bold tracking-widest uppercase mb-1">Louisiana's #1 Rated</p>
              
              <a href="tel:3373844417" className="flex items-center gap-3 text-[#1a1a1a] hover:text-brand-red transition-colors">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-bold tracking-widest">(337) 384-4417</span>
              </a>

              <div className="flex gap-4 mt-2">
                <a href="https://www.facebook.com/p/CE-Home-Services-100094757701317/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-brand-dark transition-colors hover:bg-[#1877F2] hover:text-white">
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
