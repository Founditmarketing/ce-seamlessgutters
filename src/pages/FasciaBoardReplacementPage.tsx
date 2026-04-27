import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, ArrowRight, CheckCircle } from 'lucide-react';

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Fascia Board Replacement",
  "name": "Fascia Board Replacement — Iowa, Louisiana",
  "description": "Professional fascia board repair and replacement in Iowa, Lake Charles, Sulphur, and Calcasieu Parish. We replace rotted or storm-damaged fascia before re-securing your gutter system. (337) 384-4417.",
  "provider": {
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://www.candehomeservices.com/#business",
    "name": "C&E Seamless Gutters",
    "telephone": "(337) 384-4417"
  }
};

const serviceAreas = ["Iowa, LA", "Lake Charles, LA", "Sulphur, LA", "Jennings, LA", "Calcasieu Parish", "Jefferson Davis Parish"];

export default function FasciaBoardReplacementPage() {
  return (
    <div className="bg-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-white pt-[160px] md:pt-[170px] pb-16 md:pb-20 px-6 relative overflow-hidden flex items-center justify-center border-b border-gray-100">
        <div className="container mx-auto relative z-10 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-brand-red font-bold tracking-widest text-xs uppercase mb-4">Iowa, LA & Calcasieu Parish</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl lg:text-7xl font-black text-brand-dark tracking-tighter uppercase mb-4">
            Fascia Board Replacement<br /><span className="text-brand-red">Protect Your Roofline</span>
          </motion.h1>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="inline-block px-4 py-1 border-y-2 border-brand-red mt-2">
            <p className="text-brand-red font-bold tracking-widest text-xs md:text-sm uppercase">Rot repair · Storm damage · Gutter re-attachment ready</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="relative overflow-hidden group z-10 px-8 py-4 bg-brand-red text-white font-bold tracking-widest uppercase text-sm shadow-lg hover:text-brand-dark transition-colors text-center">
              <span className="absolute top-0 left-0 w-full h-0 bg-brand-yellow transition-all duration-300 ease-out group-hover:h-full -z-10" />
              Get a Free Estimate
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
                What Is <span className="text-brand-red">Fascia Board Replacement?</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed font-medium">
                <p>Fascia boards are the horizontal boards that run along the lower edge of your roofline, directly behind your gutters. In Louisiana's high-humidity environment, wood fascia is one of the first components to show rot — especially when gutters fail and allow water to back up against the board.</p>
                <p>Before installing or re-securing any gutter system, we inspect every inch of fascia for soft spots, rot, and structural compromise. If we find damage, we replace the fascia completely — ensuring your new gutters have solid, dry framing to anchor into. A gutter installed into rotted fascia will pull away within months.</p>
                <p>We also offer standalone fascia replacement for homeowners dealing with visible rot, pest damage, or post-storm damage to the roofline, coordinating the replacement with soffit and trim work for a clean, finished result.</p>
              </div>
            </motion.div>
            <div className="lg:w-1/2 flex flex-col justify-center space-y-3 lg:border-l-2 border-gray-200 lg:pl-16">
              <h3 className="text-xl font-black text-brand-dark uppercase tracking-tighter mb-4">Fascia Services We Provide</h3>
              {["Full fascia board removal and replacement", "Rot and moisture damage repair", "Storm and wind damage fascia repair", "Pre-gutter installation fascia inspection", "Pest damage assessment and replacement", "Soffit and trim coordination", "Primed and paint-ready installation", "Fiber cement and PVC fascia available"].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-brand-dark text-white p-10 md:p-14 mb-20">
            <h2 className="text-2xl md:text-3xl font-black tracking-tighter uppercase mb-6">Common Questions About Fascia Replacement</h2>
            <div className="space-y-8">
              {[
                { q: "How do I know if my fascia boards are rotted?", a: "Signs of fascia rot include soft or spongy wood when pressed, peeling paint, visible discoloration or staining, gutters pulling away from the house, and pest (termite or carpenter ant) activity. In Louisiana's climate, fascia rot often goes unnoticed until a gutter failure makes it visible." },
                { q: "Do I need to replace fascia before getting new gutters?", a: "If your fascia is rotted or structurally compromised, yes — absolutely. Installing gutters into rotted fascia is the most common reason gutters fail prematurely. We always inspect fascia before installation and include repair in our project scope when needed." },
              ].map((item, i) => (
                <div key={i} className="border-l-4 border-brand-yellow pl-6">
                  <h3 className="text-brand-yellow font-black text-lg mb-2">{item.q}</h3>
                  <p className="text-white/70 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="bg-gray-100 p-8 md:p-10 mb-10">
            <div className="flex items-start gap-3 mb-5">
              <MapPin className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
              <h2 className="text-xl font-black text-brand-dark uppercase tracking-tighter">Fascia Replacement Service Area</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {serviceAreas.map((area, i) => (
                <span key={i} className="px-4 py-2 bg-white border border-gray-200 text-brand-dark font-bold text-sm uppercase tracking-wide">{area}</span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Seamless Gutter Installation", href: "/services/seamless-gutter-installation", desc: "New gutters installed into solid, repaired fascia framing." },
              { label: "Gutter Repair", href: "/services/gutter-repair", desc: "Re-secure gutters pulling away due to fascia failure." },
              { label: "Storm Damage Restoration", href: "/services/storm-damage-restoration", desc: "Emergency fascia and roofline repair after storm events." },
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
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">Get a Free Fascia Inspection</h2>
          <p className="text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto text-white/90">We inspect fascia free of charge during every gutter estimate. Iowa, Lake Charles, Sulphur & all of Southwest Louisiana.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block px-10 py-5 bg-white text-brand-red font-black tracking-widest text-sm uppercase transition-colors hover:bg-brand-dark hover:text-white shadow-xl">Request a Free Quote</a>
            <a href="tel:3373844417" className="inline-block px-10 py-5 border-2 border-white text-white font-black tracking-widest text-sm uppercase transition-colors hover:bg-white hover:text-brand-red">(337) 384-4417</a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
