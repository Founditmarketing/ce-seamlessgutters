import { motion } from 'motion/react';
import { MapPin, Ruler, ShieldCheck } from 'lucide-react';

const features = [
  { title: "LOCAL EXPERTISE", desc: "We know Louisiana weather. Our systems are built to handle torrential downpours.", icon: MapPin },
  { title: "CUSTOM FIT", desc: "Every piece is measured and cut on-site for a flawless, seamless integration.", icon: Ruler },
  { title: "HEAVY-DUTY MATERIALS", desc: "Thicker aluminum, stronger hangers, and premium sealants that outlast the rest.", icon: ShieldCheck }
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-24 md:py-28 bg-brand-red text-white overflow-hidden flex items-center">
      {/* Faint Background Logo */}
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-[5%] opacity-[0.04] pointer-events-none flex justify-center w-full md:w-auto">
        <img src="/c&elogo-nowords.png" alt="Background Logo" className="w-[80vw] sm:w-[400px] md:w-[450px] lg:w-[600px] max-w-none md:max-w-full object-contain brightness-0 invert" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-6">
              BUILT TO <span className="text-outline-white">LAST.</span>
            </h2>
            <p className="text-white/80 text-lg font-medium pr-4 mb-8">
              We engineer every system to withstand extreme Louisiana weather, ensuring your home remains protected year-round.
            </p>
            <a href="/why-us" className="inline-block px-8 py-3 bg-white text-brand-dark font-black tracking-widest text-xs md:text-sm uppercase transition-all duration-300 hover:bg-brand-yellow hover:scale-105 shadow-xl">
              LEARN MORE ABOUT US
            </a>
          </motion.div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative"
              >
                {/* Embellished Border with faint icon */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="p-2 border-2 border-white/10 rounded-lg bg-white/5">
                    <feature.icon className="w-6 h-6 text-white/30" strokeWidth={2} />
                  </div>
                  <div className="h-[2px] flex-1 bg-gradient-to-r from-brand-yellow/60 to-transparent" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/80 text-base font-medium leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
