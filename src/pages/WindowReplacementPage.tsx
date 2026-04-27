import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, ArrowRight, CheckCircle } from 'lucide-react';

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Window Replacement",
  "name": "Window Replacement in Iowa, LA — C&E Seamless Gutters",
  "description": "Energy-efficient and impact-resistant window replacement in Iowa, Lake Charles, Sulphur, and Southwest Louisiana. Lower your utility bills and hurricane-proof your home. Call (337) 384-4417.",
  "provider": {
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://www.candehomeservices.com/#business",
    "name": "C&E Seamless Gutters",
    "telephone": "(337) 384-4417"
  }
};

const serviceAreas = ["Iowa, LA", "Lake Charles, LA", "Sulphur, LA", "Jennings, LA", "Calcasieu Parish", "Jefferson Davis Parish"];

export default function WindowReplacementPage() {
  return (
    <div className="bg-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-white pt-[160px] md:pt-[170px] pb-16 md:pb-20 px-6 relative overflow-hidden flex items-center justify-center border-b border-gray-100">
        <div className="container mx-auto relative z-10 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-brand-red font-bold tracking-widest text-xs uppercase mb-4">Iowa, LA & Southwest Louisiana</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl lg:text-7xl font-black text-brand-dark tracking-tighter uppercase mb-4">
            Window Replacement<br /><span className="text-brand-red">in Iowa, Louisiana</span>
          </motion.h1>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="inline-block px-4 py-1 border-y-2 border-brand-red mt-2">
            <p className="text-brand-red font-bold tracking-widest text-xs md:text-sm uppercase">Energy Star rated · Impact-resistant · Custom-fitted</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="relative overflow-hidden group z-10 px-8 py-4 bg-brand-red text-white font-bold tracking-widest uppercase text-sm shadow-lg hover:text-brand-dark transition-colors text-center">
              <span className="absolute top-0 left-0 w-full h-0 bg-brand-yellow transition-all duration-300 ease-out group-hover:h-full -z-10" />
              Get a Free Window Estimate
            </a>
            <a href="tel:3373844417" className="px-8 py-4 border-2 border-brand-dark text-brand-dark font-bold tracking-widest uppercase text-sm text-center hover:bg-brand-dark hover:text-white transition-colors flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" /> (337) 384-4417
            </a>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-20">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tighter uppercase mb-6">
                Stop Losing Money Through <span className="text-brand-red">Old Windows</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed font-medium">
                <p>Old, single-pane, or poorly sealed windows are one of the largest sources of energy loss in Louisiana homes. In a state where air conditioning runs 8–10 months a year, drafty windows can add hundreds of dollars annually to your utility bills.</p>
                <p>C&E Seamless Gutters installs energy-efficient, double-pane window replacements custom-measured for your openings — with Low-E glass coatings that reject solar heat gain while allowing natural light. We also offer impact-resistant framing systems rated for hurricane-force wind loads, providing storm protection without unsightly shutters.</p>
              </div>
            </motion.div>
            <div className="lg:w-1/2 flex flex-col justify-center space-y-3 lg:border-l-2 border-gray-200 lg:pl-16">
              {["Double-pane insulated glass with Low-E coatings", "Impact-resistant hurricane-rated frames", "Custom measurement and precision fitting", "Complete removal of old window units", "Draft-free installation with proper flashing", "Energy Star certified options available", "Vinyl and composite frame materials", "Interior and exterior trim matched to your home"].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-black text-brand-dark uppercase tracking-tighter mb-8 text-center">Window Replacement FAQs</h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              {[
                { q: "How do I know when my windows need replacement vs. repair?", a: "If you feel drafts around the frame, see condensation between panes, notice difficulty opening/closing, or have windows that are single-pane, replacement is typically more cost-effective than repair. We assess and give you an honest recommendation during your free estimate." },
                { q: "Are impact-resistant windows worth it in Louisiana?", a: "Yes — especially in Calcasieu Parish and coastal Southwest Louisiana. Impact windows eliminate the need for storm shutters, reduce noise, and often result in homeowner's insurance discounts. They're a one-time investment that pays back annually in insurance savings and peace of mind." },
              ].map((item, i) => (
                <div key={i} className="border-l-4 border-brand-red pl-6 py-2">
                  <h3 className="font-black text-brand-dark text-lg mb-2">{item.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-100 p-8 md:p-10 mb-10">
            <div className="flex items-start gap-3 mb-5">
              <MapPin className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
              <h2 className="text-xl font-black text-brand-dark uppercase tracking-tighter">Window Replacement Service Area</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {serviceAreas.map((area, i) => (
                <span key={i} className="px-4 py-2 bg-white border border-gray-200 text-brand-dark font-bold text-sm uppercase tracking-wide">{area}</span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Storm Damage Restoration", href: "/services/storm-damage-restoration", desc: "Emergency window and exterior repair after storms." },
              { label: "Vinyl Siding Installation", href: "/services/vinyl-siding-installation", desc: "Complete exterior renovation alongside window upgrades." },
              { label: "Seamless Gutter Installation", href: "/services/seamless-gutter-installation", desc: "Protect the full exterior envelope." },
            ].map((s, i) => (
              <Link key={i} to={s.href} className="group border border-gray-200 p-6 hover:border-brand-red transition-colors">
                <h3 className="font-black text-brand-dark uppercase tracking-tighter mb-2 group-hover:text-brand-red transition-colors flex items-center justify-between">{s.label} <ArrowRight className="w-4 h-4" /></h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-red w-full py-16 md:py-24 text-white text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">Get a Free Window Replacement Estimate</h2>
          <p className="text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto text-white/90">Energy Star rated and hurricane-impact options. Serving Iowa, Lake Charles, Sulphur & Southwest Louisiana.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block px-10 py-5 bg-white text-brand-red font-black tracking-widest text-sm uppercase transition-colors hover:bg-brand-dark hover:text-white shadow-xl">Request a Free Quote</a>
            <a href="tel:3373844417" className="inline-block px-10 py-5 border-2 border-white text-white font-black tracking-widest text-sm uppercase transition-colors hover:bg-white hover:text-brand-red">(337) 384-4417</a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
