import { MapPin, Phone, Clock, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white overflow-hidden">
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          
          {/* Column 1: Brand + NAP */}
          <div className="flex flex-col">
            <img src="/logo.png" alt="C&E Seamless Gutters Logo" className="w-40 object-contain mb-6" />
            <p className="text-white/50 text-sm leading-relaxed mb-5">Louisiana's #1 rated seamless gutter installation, repair, and exterior contractor serving Iowa, Lake Charles, Sulphur, and all of Southwest Louisiana.</p>
            <div className="space-y-3">
              <a href="tel:3373844417" className="flex items-center gap-2 text-brand-yellow font-bold hover:text-white transition-colors text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                (337) 384-4417
              </a>
              <div className="flex items-start gap-2 text-white/50 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-brand-yellow" />
                <span>709 Division St<br />Lake Charles, LA 70601</span>
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <Clock className="w-4 h-4 flex-shrink-0 text-brand-yellow" />
                <span>Open 24 Hours · Free Estimates</span>
              </div>
            </div>
            <a href="https://www.facebook.com/p/CE-Home-Services-100094757701317/" target="_blank" rel="noopener noreferrer" className="mt-5 flex items-center gap-2 text-white/40 hover:text-[#1877F2] transition-colors text-sm font-bold">
              <Facebook className="w-4 h-4" /> Follow on Facebook
            </a>
          </div>

          {/* Column 2: Gutter Services */}
          <div>
            <p className="text-white/90 text-xs font-black tracking-widest uppercase mb-5 pb-2 border-b border-white/10">Gutter Services</p>
            <nav className="space-y-2">
              <Link to="/services/seamless-gutter-installation" className="block text-white/50 text-sm hover:text-brand-yellow transition-colors">Seamless Gutter Installation</Link>
              <Link to="/services/gutter-repair" className="block text-white/50 text-sm hover:text-brand-yellow transition-colors">Gutter Repair</Link>
              <Link to="/services/gutter-guard-installation" className="block text-white/50 text-sm hover:text-brand-yellow transition-colors">Gutter Guard Installation</Link>
              <Link to="/services/gutter-cleaning" className="block text-white/50 text-sm hover:text-brand-yellow transition-colors">Gutter Cleaning</Link>
              <Link to="/services/downspout-installation-repair" className="block text-white/50 text-sm hover:text-brand-yellow transition-colors">Downspout Installation & Repair</Link>
              <Link to="/services/fascia-board-replacement" className="block text-white/50 text-sm hover:text-brand-yellow transition-colors">Fascia Board Replacement</Link>
            </nav>
          </div>

          {/* Column 3: Exterior Services */}
          <div>
            <p className="text-white/90 text-xs font-black tracking-widest uppercase mb-5 pb-2 border-b border-white/10">Exterior Services</p>
            <nav className="space-y-2">
              <Link to="/services/storm-damage-restoration" className="block text-white/50 text-sm hover:text-brand-yellow transition-colors">Storm Damage Restoration</Link>
              <Link to="/services/vinyl-siding-installation" className="block text-white/50 text-sm hover:text-brand-yellow transition-colors">Vinyl Siding Installation</Link>
              <Link to="/services/window-replacement" className="block text-white/50 text-sm hover:text-brand-yellow transition-colors">Window Replacement</Link>
              <Link to="/service-area/lake-charles-la" className="block text-white/50 text-sm hover:text-brand-yellow transition-colors">Lake Charles Service Area</Link>
              <Link to="/why-us" className="block text-white/50 text-sm hover:text-brand-yellow transition-colors">Why Choose C&E</Link>
              <Link to="/contact" className="block text-white/50 text-sm hover:text-brand-yellow transition-colors">Get a Free Quote</Link>
            </nav>
          </div>

          {/* Column 4: Service Area */}
          <div>
            <p className="text-white/90 text-xs font-black tracking-widest uppercase mb-5 pb-2 border-b border-white/10">Service Area</p>
            <div className="flex flex-wrap gap-2">
              {["Iowa, LA", "Lake Charles, LA", "Sulphur, LA", "Jennings, LA", "Westlake, LA", "Moss Bluff, LA", "Carlyss, LA", "Calcasieu Parish", "Jefferson Davis Parish"].map((area) => (
                <span key={area} className="text-xs text-white/40 font-medium border border-white/10 px-2 py-1">{area}</span>
              ))}
            </div>
            <p className="text-white/30 text-xs mt-5 leading-relaxed">Licensed & Insured · Free Estimates Throughout Southwest Louisiana</p>
          </div>

        </div>

        {/* Massive Faint Footer Text */}
        <div className="w-full flex justify-center border-b border-white/5 pb-10 mb-8 px-4">
          <p className="text-[13vw] sm:text-[14vw] md:text-[8vw] lg:text-[7.5vw] leading-[0.8] font-black text-transparent opacity-10 [-webkit-text-stroke:1px_#ffffff] md:[-webkit-text-stroke:2px_#ffffff] tracking-tighter text-center w-full whitespace-nowrap">
            C&E SEAMLESS GUTTERS
          </p>
        </div>
        
        {/* Copyright Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/30 font-bold tracking-widest uppercase gap-4">
          <p>© {new Date().getFullYear()} C&E Seamless Gutters. All rights reserved.</p>
          <p className="text-white/20">Serving Iowa, Lake Charles, Sulphur & Southwest Louisiana · (337) 384-4417</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}


