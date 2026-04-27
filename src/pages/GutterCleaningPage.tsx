import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle, MapPin, Phone, ArrowRight } from 'lucide-react';

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Gutter Cleaning",
  "name": "Professional Gutter Cleaning in Southwest Louisiana",
  "description": "Professional gutter cleaning and downspout flushing for Iowa, Lake Charles, Sulphur, and Calcasieu Parish homeowners. Prevents overflow, foundation damage, and fascia rot. Call (337) 384-4417.",
  "provider": {
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://www.candehomeservices.com/#business",
    "name": "C&E Seamless Gutters",
    "telephone": "(337) 384-4417"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How often should I clean my gutters in Louisiana?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Louisiana homeowners should clean their gutters at least twice per year — once in late spring after oak and pine pollen season, and once in late fall after leaves have dropped. Homes under heavy tree canopy or near moss-heavy oaks may need cleaning 3–4 times annually. After any named storm, an inspection and cleaning is strongly recommended."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if I don't clean my gutters?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Clogged gutters overflow during rain events, directing water against your fascia boards (causing rot), down your exterior walls (causing staining and moisture intrusion), and pooling near your foundation (causing settling and cracking). In Louisiana's heavy rainfall environment, the consequences of neglected gutters are amplified significantly."
      }
    }
  ]
};

const steps = [
  { num: "01", title: "Safety Setup", desc: "Our crew secures ladders and assesses the full gutter run from ground level before climbing, checking for visible damage, sagging, or separation." },
  { num: "02", title: "Debris Removal", desc: "All leaves, pine needles, twigs, roof grit, and compacted debris are hand-cleared from the gutter channel and responsibly bagged — not blown onto your lawn." },
  { num: "03", title: "Downspout Flush", desc: "Each downspout is flushed with water pressure from the top to confirm unobstructed flow all the way to the ground-level discharge. Clogs are cleared from below if needed." },
  { num: "04", title: "Full System Flush", desc: "The entire gutter run is flushed with water to confirm proper slope and drainage velocity. Standing water after flushing indicates a pitch issue we can correct." },
  { num: "05", title: "Damage Inspection", desc: "During cleaning we document any sagging, loose hangers, cracked joints, or rust spots and share a written report with photos — at no extra charge." },
  { num: "06", title: "Clean Site", desc: "All debris is removed from your roof, gutters, and surrounding landscaping. We leave your property cleaner than we found it." },
];

const serviceAreas = ["Iowa, LA", "Lake Charles, LA", "Sulphur, LA", "Jennings, LA", "Westlake, LA", "Moss Bluff, LA", "Calcasieu Parish", "Jefferson Davis Parish"];

export default function GutterCleaningPage() {
  return (
    <div className="bg-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-white pt-[160px] md:pt-[170px] pb-16 md:pb-20 px-6 relative overflow-hidden flex items-center justify-center border-b border-gray-100">
        <div className="absolute top-[60%] -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-[0.03] pointer-events-none w-full flex justify-center z-0">
          <img src="/c&elogo-nowords.png" alt="" className="w-[300px] md:w-[450px] object-contain grayscale" />
        </div>
        <div className="container mx-auto relative z-10 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-brand-red font-bold tracking-widest text-xs uppercase mb-4">Southwest Louisiana</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl lg:text-7xl font-black text-brand-dark tracking-tighter uppercase mb-4">
            Professional Gutter Cleaning<br /><span className="text-brand-red">in Southwest Louisiana</span>
          </motion.h1>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="inline-block px-4 py-1 border-y-2 border-brand-red mt-2">
            <p className="text-brand-red font-bold tracking-widest text-xs md:text-sm uppercase">Full debris removal · Downspout flush · Damage inspection included</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="relative overflow-hidden group z-10 px-8 py-4 bg-brand-red text-white font-bold tracking-widest uppercase text-sm shadow-lg hover:text-brand-dark transition-colors text-center">
              <span className="absolute top-0 left-0 w-full h-0 bg-brand-yellow transition-all duration-300 ease-out group-hover:h-full -z-10" />
              Schedule Gutter Cleaning
            </a>
            <a href="tel:3373844417" className="px-8 py-4 border-2 border-brand-dark text-brand-dark font-bold tracking-widest uppercase text-sm text-center hover:bg-brand-dark hover:text-white transition-colors flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" /> (337) 384-4417
            </a>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-2/3 mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-brand-dark tracking-tighter uppercase mb-6">
              Why Gutter Cleaning Matters <span className="text-brand-red">in Louisiana</span>
            </h2>
            <div className="space-y-5 text-lg text-gray-700 leading-relaxed font-medium">
              <p>Louisiana's combination of heavy oak canopy, abundant pine trees, Spanish moss, and annual hurricane season creates one of the most demanding gutter-clogging environments in the country. A blocked gutter during a routine afternoon thunderstorm can send gallons of water per minute cascading against your fascia, down your siding, and pooling against your foundation slab.</p>
              <p>At C&E Seamless Gutters, we provide thorough professional gutter cleaning that goes beyond simply removing visible debris. Every cleaning includes a complete downspout flush, a slope verification, and a written damage inspection — so you know exactly what condition your system is in when we leave.</p>
            </div>
          </motion.div>

          <div className="mb-20">
            <h2 className="text-2xl font-black text-brand-dark uppercase tracking-tighter mb-10">Our 6-Step Gutter Cleaning Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {steps.map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group flex gap-6">
                  <span className="text-6xl font-black text-transparent [-webkit-text-stroke:2px_#cbd5e1] group-hover:[-webkit-text-stroke:2px_#ff0000] transition-colors duration-500 mt-[-10px] flex-shrink-0">{step.num}</span>
                  <div>
                    <h3 className="text-xl font-black text-brand-dark mb-2 uppercase tracking-tighter">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-brand-dark text-white p-10 md:p-14 mb-20">
            <h2 className="text-2xl md:text-3xl font-black tracking-tighter uppercase mb-6">Gutter Cleaning FAQs</h2>
            <div className="space-y-8">
              {[
                { q: "How often should I clean my gutters in Louisiana?", a: "At least twice per year — late spring after pollen season, and late fall after leaf drop. Homes under heavy tree canopy need 3–4 cleanings annually. After any named storm, an inspection and cleaning is strongly recommended." },
                { q: "What happens if I don't clean my gutters?", a: "Clogged gutters overflow during rain, directing water against fascia boards (causing rot), down exterior walls (causing staining and moisture intrusion), and pooling near your foundation (causing settling and cracking). In Louisiana's rainfall environment, these consequences are amplified significantly." },
              ].map((item, i) => (
                <div key={i} className="border-l-4 border-brand-yellow pl-6">
                  <h3 className="text-brand-yellow font-black text-lg mb-2">{item.q}</h3>
                  <p className="text-white/70 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="bg-gray-100 p-8 md:p-12 mb-10">
            <div className="flex items-start gap-3 mb-6">
              <MapPin className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
              <h2 className="text-2xl font-black text-brand-dark uppercase tracking-tighter">Gutter Cleaning Service Area</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {serviceAreas.map((area, i) => (
                <span key={i} className="px-4 py-2 bg-white border border-gray-200 text-brand-dark font-bold text-sm uppercase tracking-wide">{area}</span>
              ))}
            </div>
          </div>

          <div className="bg-brand-yellow/10 border border-brand-yellow/30 p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-black text-brand-dark uppercase tracking-tighter mb-2">Upgrade to Gutter Guards After Cleaning</h3>
              <p className="text-gray-600">The best time to install gutter guards is immediately after a professional cleaning. We can complete both in a single visit — clean the system, then install micro-mesh protection so you never need to clean again.</p>
            </div>
            <Link to="/services/gutter-guard-installation" className="flex-shrink-0 px-8 py-4 bg-brand-dark text-white font-black tracking-widest uppercase text-sm hover:bg-brand-red transition-colors flex items-center gap-2">
              Learn About Guards <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-black text-brand-dark uppercase tracking-tighter mb-8">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Gutter Guard Installation", href: "/services/gutter-guard-installation", desc: "Permanent protection — stop cleaning gutters forever." },
              { label: "Gutter Repair", href: "/services/gutter-repair", desc: "Fix damage found during your cleaning inspection." },
              { label: "Downspout Installation & Repair", href: "/services/downspout-installation-repair", desc: "Ensure downspouts discharge water safely from your foundation." },
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
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">Schedule Your Gutter Cleaning</h2>
          <p className="text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto text-white/90">Serving Iowa, Lake Charles, Sulphur & all of Southwest Louisiana. Free inspection included with every cleaning.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block px-10 py-5 bg-white text-brand-red font-black tracking-widest text-sm uppercase transition-colors hover:bg-brand-dark hover:text-white shadow-xl">Request Gutter Cleaning</a>
            <a href="tel:3373844417" className="inline-block px-10 py-5 border-2 border-white text-white font-black tracking-widest text-sm uppercase transition-colors hover:bg-white hover:text-brand-red">(337) 384-4417</a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
