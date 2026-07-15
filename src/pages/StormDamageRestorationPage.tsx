import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, ArrowRight, CheckCircle } from 'lucide-react';
import PageSEO from '../components/PageSEO';

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Storm Damage Restoration",
  "name": "Storm Damage Restoration — Iowa, LA & Calcasieu Parish",
  "description": "Rapid storm damage restoration for gutters, siding, fascia, and exterior structures throughout Iowa, Lake Charles, Sulphur, and all of Calcasieu Parish. Emergency response available. (337) 384-4417.",
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
      "name": "Do you help with insurance claims for storm damage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. C&E Seamless Gutters documents storm damage thoroughly with photos and written assessments that can be submitted to your insurance carrier. We work with homeowners throughout the claim process to ensure the full scope of damage is captured and repaired."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can you respond to storm damage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We prioritize storm damage calls throughout Calcasieu Parish. After a named storm or severe weather event, contact us immediately at (337) 384-4417 and we will schedule an emergency assessment as rapidly as possible."
      }
    }
  ]
};

const serviceAreas = ["Iowa, LA", "Lake Charles, LA", "Sulphur, LA", "Jennings, LA", "Westlake, LA", "Moss Bluff, LA", "Calcasieu Parish", "Jefferson Davis Parish"];

export default function StormDamageRestorationPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageSEO
        title={schema.name}
        description={schema.description}
        path="/services/storm-damage-restoration"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-white pt-[160px] md:pt-[170px] pb-16 md:pb-20 px-6 relative overflow-hidden flex items-center justify-center border-b border-gray-100">
        <div className="absolute top-[60%] -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-[0.03] pointer-events-none w-full flex justify-center z-0">
          <img src="/c&elogo-nowords.png" alt="" className="w-[300px] md:w-[450px] object-contain grayscale" />
        </div>
        <div className="container mx-auto relative z-10 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-brand-red font-bold tracking-widest text-xs uppercase mb-4">Emergency Response · Iowa, LA & Southwest Louisiana</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl lg:text-7xl font-black text-brand-dark tracking-tighter uppercase mb-4">
            Storm Damage Restoration<br /><span className="text-brand-red">Iowa, LA & Calcasieu Parish</span>
          </motion.h1>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="inline-block px-4 py-1 border-y-2 border-brand-red mt-2">
            <p className="text-brand-red font-bold tracking-widest text-xs md:text-sm uppercase">Hurricane & wind damage · Insurance documentation · Rapid mobilization</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="relative overflow-hidden group z-10 px-8 py-4 bg-brand-red text-white font-bold tracking-widest uppercase text-sm shadow-lg hover:text-brand-dark transition-colors text-center">
              <span className="absolute top-0 left-0 w-full h-0 bg-brand-yellow transition-all duration-300 ease-out group-hover:h-full -z-10" />
              Request Emergency Assessment
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
              <h2 className="text-3xl md:text-5xl font-black text-brand-dark tracking-tighter uppercase mb-6">
                Southwest Louisiana's <span className="text-brand-red">Storm Response</span> Contractor
              </h2>
              <div className="space-y-5 text-lg text-gray-700 leading-relaxed font-medium">
                <p>Louisiana is no stranger to severe weather. From named hurricanes to severe afternoon squalls, the damage to gutters, siding, fascia boards, and exterior structures can be significant — and it gets worse every hour water is allowed to intrude through compromised areas.</p>
                <p>C&E Seamless Gutters mobilizes rapidly after storm events throughout Calcasieu Parish. We assess the full scope of exterior damage, provide photo documentation for insurance carriers, and execute repairs or full replacement using on-site extruded aluminum systems — no waiting weeks for materials to ship.</p>
                <p>Whether your gutters were torn off, your fascia boards are exposed, or your siding has wind damage, we have the equipment and the crew to secure and restore your home's exterior envelope.</p>
              </div>
            </motion.div>
            <div className="lg:w-1/2 flex flex-col justify-center space-y-4 lg:border-l-2 border-gray-200 lg:pl-16">
              <h3 className="text-2xl font-black text-brand-dark uppercase tracking-tighter mb-4">Storm Restoration Services</h3>
              {[
                "Emergency gutter repair and re-attachment",
                "Full gutter replacement with on-site extrusion",
                "Fascia board repair and replacement",
                "Soffit repair after wind uplift damage",
                "Siding repair and panel replacement",
                "Damage photography and insurance documentation",
                "Downspout realignment and replacement",
                "Post-storm full exterior assessment",
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-black text-brand-dark uppercase tracking-tighter mb-10 text-center">Storm Damage FAQs</h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              {[
                { q: "Do you help with insurance claims for storm damage?", a: "Yes. We document storm damage thoroughly with photos and written assessments that can be submitted to your insurance carrier. We work with homeowners throughout the claim process to ensure the full scope of damage is captured." },
                { q: "How quickly can you respond to storm damage?", a: "We prioritize storm damage calls throughout Calcasieu Parish. After a named storm or severe weather event, contact us immediately at (337) 384-4417 and we'll schedule an emergency assessment as rapidly as possible." },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="border-l-4 border-brand-red pl-6 py-2">
                  <h3 className="font-black text-brand-dark text-lg mb-2">{item.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-gray-100 p-8 md:p-12">
            <div className="flex items-start gap-3 mb-6">
              <MapPin className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
              <h2 className="text-2xl font-black text-brand-dark uppercase tracking-tighter">Storm Restoration Service Area</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {serviceAreas.map((area, i) => (
                <span key={i} className="px-4 py-2 bg-white border border-gray-200 text-brand-dark font-bold text-sm uppercase tracking-wide">{area}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-black text-brand-dark uppercase tracking-tighter mb-8">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Gutter Repair", href: "/services/gutter-repair", desc: "Targeted repair for storm-damaged gutters." },
              { label: "Fascia Board Replacement", href: "/services/fascia-board-replacement", desc: "Replace rotted or storm-damaged fascia before re-installing gutters." },
              { label: "Vinyl Siding Installation", href: "/services/vinyl-siding-installation", desc: "Replace storm-damaged siding with durable vinyl panels." },
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
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">Storm Hit? Call Us Now.</h2>
          <p className="text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto text-white/90">Rapid storm damage assessment and restoration throughout Iowa, Lake Charles, Sulphur & all of Southwest Louisiana.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block px-10 py-5 bg-white text-brand-red font-black tracking-widest text-sm uppercase transition-colors hover:bg-brand-dark hover:text-white shadow-xl">Request Assessment</a>
            <a href="tel:3373844417" className="inline-block px-10 py-5 border-2 border-white text-white font-black tracking-widest text-sm uppercase transition-colors hover:bg-white hover:text-brand-red">(337) 384-4417</a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
