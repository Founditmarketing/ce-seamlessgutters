import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle, MapPin, Phone, ArrowRight, AlertTriangle } from 'lucide-react';
import PageSEO from '../components/PageSEO';

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Gutter Repair",
  "name": "Gutter Repair in Iowa, LA — C&E Seamless Gutters",
  "description": "Professional gutter repair for sagging, leaking, pulling, or storm-damaged gutters in Iowa, Lake Charles, Sulphur, and all of Southwest Louisiana. Emergency response available. Call (337) 384-4417.",
  "provider": {
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://www.candehomeservices.com/#business",
    "name": "C&E Seamless Gutters",
    "telephone": "(337) 384-4417"
  },
  "areaServed": [
    {"@type": "City", "name": "Iowa, Louisiana"},
    {"@type": "City", "name": "Lake Charles, Louisiana"},
    {"@type": "City", "name": "Sulphur, Louisiana"}
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I know if my gutters need repair or replacement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Signs you need gutter repair: visible sagging or pulling away from the fascia, water marks on siding below the gutter line, water pooling near the foundation after rain, rust streaks, visible holes or cracks, or gutters overflowing during moderate rain. If more than 40% of the run is compromised, replacement may be more cost-effective. C&E will give you an honest assessment — call (337) 384-4417."
      }
    },
    {
      "@type": "Question",
      "name": "Can you repair gutters that are pulling away from the house?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Gutters pulling away from the fascia is one of the most common repair calls we receive in Louisiana, especially after storm season. The cause is usually failed hangers or rotted fascia behind the gutter. We re-secure or replace the hangers and address any underlying fascia rot before re-attaching the gutter system."
      }
    },
    {
      "@type": "Question",
      "name": "Do you repair gutters after hurricane or storm damage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. C&E Seamless Gutters responds rapidly to storm damage repair needs throughout Calcasieu Parish and Southwest Louisiana. We assess the damage, document it for insurance purposes if needed, and either repair or replace the affected sections using on-site extruded aluminum."
      }
    }
  ]
};

const warningSignals = [
  "Gutters sagging or visibly pulling away from fascia",
  "Water spilling over the front edge during rain",
  "Water marks or staining on your siding below the gutter line",
  "Standing water pooling near your foundation",
  "Rust streaks running down exterior walls",
  "Visible cracks, holes, or separated seam joints",
  "Gutters holding standing water after rain stops",
  "Downspouts disconnected or clogged at the elbow",
];

const serviceAreas = ["Iowa, LA", "Lake Charles, LA", "Sulphur, LA", "Jennings, LA", "Westlake, LA", "Moss Bluff, LA", "Calcasieu Parish", "Jefferson Davis Parish"];

export default function GutterRepairPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageSEO
        title={schema.name}
        description={schema.description}
        path="/services/gutter-repair"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-white pt-[160px] md:pt-[170px] pb-16 md:pb-20 px-6 relative overflow-hidden flex items-center justify-center border-b border-gray-100">
        <div className="absolute top-[60%] -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-[0.03] pointer-events-none w-full flex justify-center z-0">
          <img src="/c&elogo-nowords.png" alt="" className="w-[300px] md:w-[450px] object-contain grayscale" />
        </div>
        <div className="container mx-auto relative z-10 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-brand-red font-bold tracking-widest text-xs uppercase mb-4">Iowa, LA & Southwest Louisiana</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl lg:text-7xl font-black text-brand-dark tracking-tighter uppercase mb-4">
            Gutter Repair<br /><span className="text-brand-red">Iowa, Louisiana</span>
          </motion.h1>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="inline-block px-4 py-1 border-y-2 border-brand-red mt-2">
            <p className="text-brand-red font-bold tracking-widest text-xs md:text-sm uppercase">Fast response · Storm damage repair · Free estimates</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="relative overflow-hidden group z-10 px-8 py-4 bg-brand-red text-white font-bold tracking-widest uppercase text-sm shadow-lg hover:text-brand-dark transition-colors text-center">
              <span className="absolute top-0 left-0 w-full h-0 bg-brand-yellow transition-all duration-300 ease-out group-hover:h-full -z-10" />
              Schedule Repair
            </a>
            <a href="tel:3373844417" className="px-8 py-4 border-2 border-brand-dark text-brand-dark font-bold tracking-widest uppercase text-sm text-center hover:bg-brand-dark hover:text-white transition-colors flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" /> (337) 384-4417
            </a>
          </motion.div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-20">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-1/2 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-brand-red" />
                <span className="text-brand-red font-bold tracking-widest text-xs uppercase">Warning Signs</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-brand-dark tracking-tighter uppercase mb-6">
                Does Your Gutter Need <span className="text-brand-red">Repair?</span>
              </h2>
              <div className="space-y-5 text-lg text-gray-700 leading-relaxed font-medium">
                <p>
                  Most homeowners don't notice gutter damage until it's caused a much bigger problem — foundation cracking, fascia rot, or basement flooding. In Louisiana, where we average over 56 inches of rain annually, a failing gutter is a ticking clock.
                </p>
                <p>
                  C&E Seamless Gutters provides fast, reliable gutter repair throughout Iowa, Lake Charles, Sulphur, and all of Calcasieu Parish. Whether it's a single sagging section or storm-wide damage after a named hurricane, we assess, document, and fix it right.
                </p>
              </div>
            </motion.div>
            <div className="lg:w-1/2 flex flex-col justify-center space-y-3 lg:border-l-2 border-gray-200 lg:pl-16">
              <h3 className="text-xl font-black text-brand-dark uppercase tracking-tighter mb-3">Common Signs You Need Gutter Repair</h3>
              {warningSignals.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{s}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Repair Services Detail */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-brand-dark text-white p-10 md:p-14 mb-20">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-8">Gutter Repair Services We Provide</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Hanger Replacement", desc: "Re-secure or replace failed hidden hangers that cause gutters to pull away from the fascia. We use heavy-duty hangers rated for Louisiana wind loads, spaced every 16–18 inches." },
                { title: "Leak Sealing & Patching", desc: "Seal cracked joints, holes, and separated seams with professional-grade gutter sealant. For severely compromised sections, we re-extrude and replace with seamless aluminum on-site." },
                { title: "Storm Damage Repair", desc: "Rapid response to hurricane, high-wind, and hail damage. We assess and document the full scope of damage, repair or replace affected sections, and can provide documentation for insurance claims." },
                { title: "Pitch Correction", desc: "Gutters that hold standing water after rain have lost their pitch. We re-slope the system to the correct 1/4-inch-per-10-foot gradient to restore full drainage velocity." },
                { title: "Downspout Repair", desc: "Reconnect separated elbows, replace crushed sections, and re-route downspout discharge away from your foundation slab and landscaping." },
                { title: "Fascia Board Repair", desc: "If rotted fascia is the root cause of your gutter failure, we repair or replace the wood framing before re-securing your gutter system — ensuring a solid bond." },
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-brand-yellow/40 pl-5">
                  <h3 className="text-brand-yellow font-black uppercase tracking-tighter text-lg mb-2">{item.title}</h3>
                  <p className="text-white/70 leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* FAQ */}
          <div className="mb-20">
            <h2 className="text-3xl font-black text-brand-dark uppercase tracking-tighter mb-10 text-center">Gutter Repair — FAQs</h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              {[
                { q: "How do I know if my gutters need repair or replacement?", a: "If less than 40% of the run is damaged, repair is usually the right call. If the majority of the system is compromised — sagging across multiple runs, extensive fascia rot, or severe corrosion — replacement is more cost-effective. We'll give you an honest recommendation during your free estimate." },
                { q: "Can you repair gutters pulling away from the house?", a: "Yes. This is our most common repair call after storm season. The cause is usually failed hangers or rotted fascia. We re-secure or replace hangers and address any underlying fascia rot before re-attaching the system." },
                { q: "Do you repair gutters after hurricane or storm damage?", a: "Absolutely. C&E responds rapidly to storm damage throughout Calcasieu Parish. We assess the damage, document it for insurance purposes if needed, and repair or replace affected sections with on-site extruded aluminum." },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="border-l-4 border-brand-red pl-6 py-2">
                  <h3 className="font-black text-brand-dark text-lg mb-2">{item.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Service Area */}
          <div className="bg-gray-100 p-8 md:p-12">
            <div className="flex items-start gap-3 mb-6">
              <MapPin className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
              <h2 className="text-2xl font-black text-brand-dark uppercase tracking-tighter">Gutter Repair Service Area</h2>
            </div>
            <div className="flex flex-wrap gap-3 mb-6">
              {serviceAreas.map((area, i) => (
                <span key={i} className="px-4 py-2 bg-white border border-gray-200 text-brand-dark font-bold text-sm uppercase tracking-wide">{area}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-white py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-black text-brand-dark uppercase tracking-tighter mb-8">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Seamless Gutter Installation", href: "/services/seamless-gutter-installation", desc: "Replace failing gutters with a new seamless system." },
              { label: "Gutter Cleaning", href: "/services/gutter-cleaning", desc: "Clear blockages that cause overflow and back-pressure damage." },
              { label: "Downspout Installation & Repair", href: "/services/downspout-installation-repair", desc: "Fix or replace failed downspout components." },
            ].map((s, i) => (
              <Link key={i} to={s.href} className="group border border-gray-200 p-6 hover:border-brand-red transition-colors">
                <h3 className="font-black text-brand-dark uppercase tracking-tighter mb-2 group-hover:text-brand-red transition-colors flex items-center justify-between">{s.label} <ArrowRight className="w-4 h-4" /></h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-red w-full py-16 md:py-24 text-white text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">Need Gutter Repair? Call Today.</h2>
          <p className="text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto text-white/90">Fast, reliable gutter repair throughout Southwest Louisiana. Free estimates — same-day response for storm damage.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block px-10 py-5 bg-white text-brand-red font-black tracking-widest text-sm uppercase transition-colors hover:bg-brand-dark hover:text-white shadow-xl">Request a Free Quote</a>
            <a href="tel:3373844417" className="inline-block px-10 py-5 border-2 border-white text-white font-black tracking-widest text-sm uppercase transition-colors hover:bg-white hover:text-brand-red">(337) 384-4417</a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
