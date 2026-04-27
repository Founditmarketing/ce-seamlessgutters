import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Droplets, Home, LayoutGrid, ArrowUpRight } from 'lucide-react';

const services = [
  {
    num: "01",
    title: "GUTTER SERVICES",
    desc: "Custom-extruded seamless systems, premium leaf guards, and comprehensive repairs to protect your property's foundation.",
    Icon: Droplets,
    href: "/services/gutters"
  },
  {
    num: "02",
    title: "HOME IMPROVEMENT",
    desc: "Expert renovations and upgrades designed to increase your home's structural integrity, value, and curb appeal.",
    Icon: Home,
    href: "/services/home-improvement"
  },
  {
    num: "03",
    title: "WINDOW INSTALLATION",
    desc: "Energy-efficient, impact-resistant window replacements tailored for perfect fit and maximum weather protection.",
    Icon: LayoutGrid,
    href: "/services/windows"
  }
];

export default function Services() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const marqueeX = useTransform(scrollYProgress, [0, 1], ["5%", "-50%"]);

  return (
    <section ref={containerRef} id="services" className="relative pt-16 pb-24 md:py-32 bg-slate-50 overflow-hidden flex flex-col items-center">

      {/* Part 1: Scroll-Linked Marquee Header */}
      <div className="w-full overflow-hidden mb-8 md:mb-16 pointer-events-none select-none">
        <motion.div
          style={{ x: marqueeX }}
          className="whitespace-nowrap flex"
        >
          <h2 className="text-6xl md:text-8xl xl:text-[9rem] font-black tracking-tighter text-transparent [-webkit-text-stroke:2px_#cbd5e1] leading-none">
            OUR CAPABILITIES • OUR CAPABILITIES • OUR CAPABILITIES • OUR CAPABILITIES • OUR CAPABILITIES • OUR CAPABILITIES • OUR CAPABILITIES • OUR CAPABILITIES •&nbsp;
          </h2>
        </motion.div>
      </div>

      {/* Part 2: Service Cards Grid */}
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const isMain = idx === 0;

            return (
              <motion.a
                href={service.href}
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.2, ease: "easeOut" }}
                className={`group relative shadow-xl transition-all duration-500 overflow-hidden cursor-pointer min-h-[420px] ${
                  isMain ? 'bg-brand-red hover:shadow-[0_20px_40px_rgba(255,239,15,0.2)]' : 'bg-white hover:shadow-[0_20px_40px_rgba(188,41,44,0.3)]'
                }`}
              >
                {/* Animated Background Swipe */}
                <div className="absolute inset-0 bg-brand-yellow origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] z-0"></div>

                {/* Bottom Border Accent */}
                <div className={`absolute bottom-0 left-0 w-full h-1 group-hover:bg-transparent transition-colors duration-500 z-10 ${
                  isMain ? 'bg-brand-dark' : 'bg-brand-red'
                }`}></div>

                {/* Visual Texture Watermark */}
                <div className={`font-black text-[10rem] absolute -bottom-6 -left-4 z-10 pointer-events-none select-none transition-colors duration-500 tracking-tighter leading-none ${
                  isMain ? 'text-black/5 group-hover:text-black/10' : 'text-slate-100/50 group-hover:text-black/10'
                }`}>
                  {service.num}
                </div>

                {/* Content Wrapper */}
                <div className="relative z-20 p-10 h-full flex flex-col justify-between">
                  <div>
                    {/* Icon Container (Minimalist Echo Design) */}
                    <div className="relative w-16 h-16 mb-12 group-hover:-translate-y-2 transition-transform duration-700">
                      {/* Floating Echo Shadow */}
                      <service.Icon 
                        className={`absolute -top-2 -left-4 w-16 h-16 transition-all duration-700 ease-out ${
                          isMain 
                            ? 'text-black/10 group-hover:text-black/20 group-hover:scale-110 group-hover:-translate-x-1' 
                            : 'text-brand-red/10 group-hover:text-brand-dark/10 group-hover:scale-110 group-hover:-translate-x-1'
                        }`} 
                        strokeWidth={1}
                      />
                      
                      {/* Primary Solid Icon */}
                      <service.Icon 
                        className={`absolute top-2 left-2 w-10 h-10 transition-colors duration-500 z-10 ${
                          isMain 
                            ? 'text-white group-hover:text-brand-dark' 
                            : 'text-brand-red group-hover:text-brand-dark'
                        }`} 
                        strokeWidth={2}
                      />
                    </div>
                    
                    <h3 className={`font-bold tracking-tight text-3xl mb-4 transition-colors duration-500 ${
                      isMain ? 'text-white group-hover:text-brand-dark' : 'text-slate-900 group-hover:text-brand-dark'
                    }`}>
                      {service.title}
                    </h3>
                    
                    <p className={`leading-relaxed transition-colors duration-500 ${
                      isMain ? 'text-white/90 group-hover:text-brand-dark/80' : 'text-slate-600 group-hover:text-brand-dark/80'
                    }`}>
                      {service.desc}
                    </p>
                  </div>

                  {/* Action Arrow (Strictly Bottom-Right) */}
                  <div className={`absolute bottom-10 right-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-lg ${
                    isMain ? 'bg-white group-hover:bg-brand-dark text-brand-red group-hover:text-brand-yellow' : 'bg-slate-100 group-hover:bg-brand-dark text-slate-900 group-hover:text-brand-yellow'
                  }`}>
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>

              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
