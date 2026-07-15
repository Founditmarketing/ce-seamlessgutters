import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle, MapPin, Phone, ArrowRight } from 'lucide-react';
import PageSEO from '../components/PageSEO';

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Gutter Guard Installation",
  "name": "Gutter Guard Installation in Iowa, LA",
  "description": "Professional micro-mesh gutter guard installation that stops leaves, pine needles, and debris from clogging your gutters. Serving Iowa, Lake Charles, Sulphur, and Southwest Louisiana. Call (337) 384-4417.",
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
      "name": "Do gutter guards really work in heavy Louisiana rain?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — when the right system is chosen and properly installed. Micro-mesh gutter guards are engineered to handle high water flow rates while blocking debris as fine as roof grit and pine needles. Louisiana's intense rainfall events are actually where these systems shine — water pressure clears debris off the surface while rain pours through the mesh into the gutter channel."
      }
    },
    {
      "@type": "Question",
      "name": "How long do gutter guards last in Louisiana?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Quality stainless steel micro-mesh gutter guards typically last 20+ years. They're designed to withstand UV exposure, high humidity, and hurricane-force wind without deforming or detaching. We install guards rated for Louisiana's climate conditions."
      }
    },
    {
      "@type": "Question",
      "name": "Will gutter guards work with my existing gutters?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In most cases, yes. Micro-mesh guards are compatible with standard 5-inch and 6-inch K-style gutters. We assess your existing system first — if the gutters are in good structural condition, we can add guards without full replacement. If the existing gutters are compromised, we may recommend a new seamless system first."
      }
    }
  ]
};

const benefits = [
  "Eliminates the need to climb ladders to clean gutters",
  "Blocks leaves, pine needles, and roof grit",
  "Stainless steel micro-mesh — doesn't deform in heat",
  "Compatible with 5-inch and 6-inch K-style gutters",
  "Reduces risk of pest infestation in gutters",
  "Prevents ice dams (relevant in north Louisiana winters)",
  "Maintains full water flow capacity in heavy rain",
  "Installed flush — clean, invisible profile from the street",
];

const serviceAreas = ["Iowa, LA", "Lake Charles, LA", "Sulphur, LA", "Jennings, LA", "Westlake, LA", "Moss Bluff, LA", "Calcasieu Parish", "Jefferson Davis Parish"];

export default function GutterGuardInstallationPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageSEO
        title="Gutter Guard Installation in Iowa, LA | C&E Seamless Gutters"
        description={schema.description}
        path="/services/gutter-guard-installation"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-white pt-[160px] md:pt-[170px] pb-16 md:pb-20 px-6 relative overflow-hidden flex items-center justify-center border-b border-gray-100">
        <div className="absolute top-[60%] -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-[0.03] pointer-events-none w-full flex justify-center z-0">
          <img src="/c&elogo-nowords.png" alt="" className="w-[300px] md:w-[450px] object-contain grayscale" />
        </div>
        <div className="container mx-auto relative z-10 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-brand-red font-bold tracking-widest text-xs uppercase mb-4">Iowa, LA & Southwest Louisiana</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl lg:text-7xl font-black text-brand-dark tracking-tighter uppercase mb-4">
            Gutter Guard Installation<br /><span className="text-brand-red">Stop Cleaning Your Gutters</span>
          </motion.h1>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="inline-block px-4 py-1 border-y-2 border-brand-red mt-2">
            <p className="text-brand-red font-bold tracking-widest text-xs md:text-sm uppercase">Micro-mesh protection · Debris-free year-round · Iowa, LA</p>
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
              <h2 className="text-3xl md:text-5xl font-black text-brand-dark tracking-tighter uppercase mb-6">
                What Is <span className="text-brand-red">Gutter Guard</span> Installation?
              </h2>
              <div className="space-y-5 text-lg text-gray-700 leading-relaxed font-medium">
                <p>Gutter guards are protective covers or filters installed over your existing gutter channel to block leaves, pine needles, roof grit, and other debris from entering the gutter while still allowing rainwater to flow freely through.</p>
                <p>The gold standard for Louisiana homeowners is <strong>stainless steel micro-mesh</strong> — a fine perforated barrier that blocks debris as small as shingle granules while allowing even heavy rain flow to pass through without overflow. Unlike foam inserts or reverse-curve systems, micro-mesh doesn't deform in heat, sag over time, or become a breeding ground for moss and algae.</p>
                <p>Properly installed gutter guards mean <strong>no more ladder climbs, no more clogged downspouts, and no more overflowing gutters</strong> causing foundation and fascia damage.</p>
              </div>
            </motion.div>
            <div className="lg:w-1/2 flex flex-col justify-center space-y-4 lg:border-l-2 border-gray-200 lg:pl-16">
              <h3 className="text-2xl font-black text-brand-dark uppercase tracking-tighter mb-4">What You Get</h3>
              <div className="grid grid-cols-1 gap-3">
                {benefits.map((b, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{b}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-brand-dark text-white p-10 md:p-14 mb-20">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-8">Guard Types We Install</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Micro-Mesh Guards", desc: "Our #1 recommendation. Stainless steel mesh screen blocks even fine debris while handling Louisiana's highest rainfall intensities. 20+ year lifespan. Invisible from street level." },
                { title: "Solid Cover / Reverse Curve", desc: "Surface tension directs water into the gutter while debris slides off. Effective for large leaf debris, but can struggle with extreme rain rates. Best suited for specific roofline geometries." },
                { title: "Perforated Aluminum Guards", desc: "Economy-tier protection. Blocks large leaves and pine cones but may allow fine debris through. Good option for areas with minimal overhanging trees and tighter budgets." },
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-brand-yellow/40 pl-5">
                  <h3 className="text-brand-yellow font-black uppercase tracking-tighter text-lg mb-2">{item.title}</h3>
                  <p className="text-white/70 leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="mb-20">
            <h2 className="text-3xl font-black text-brand-dark uppercase tracking-tighter mb-10 text-center">Gutter Guard FAQs</h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              {[
                { q: "Do gutter guards really work in heavy Louisiana rain?", a: "Yes — when the right system is chosen and properly installed. Micro-mesh guards are engineered for high water flow rates while blocking debris as fine as roof grit. Louisiana's intense rainfall events are where these systems excel — water pressure clears debris off the surface while rain pours through the mesh." },
                { q: "How long do gutter guards last in Louisiana?", a: "Quality stainless steel micro-mesh guards typically last 20+ years. They withstand UV exposure, high humidity, and hurricane-force wind without deforming or detaching." },
                { q: "Will gutter guards work with my existing gutters?", a: "In most cases, yes. Micro-mesh guards are compatible with standard 5-inch and 6-inch K-style gutters. We assess your system first — if gutters are structurally sound, we add guards without replacement." },
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
              <h2 className="text-2xl font-black text-brand-dark uppercase tracking-tighter">Service Area — Gutter Guard Installation</h2>
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
              { label: "Seamless Gutter Installation", href: "/services/seamless-gutter-installation", desc: "New seamless system with guards included from day one." },
              { label: "Gutter Cleaning", href: "/services/gutter-cleaning", desc: "One-time clean before guard installation for best results." },
              { label: "Gutter Repair", href: "/services/gutter-repair", desc: "Repair compromised gutters before adding protection." },
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
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">Never Clean Your Gutters Again</h2>
          <p className="text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto text-white/90">Professional gutter guard installation throughout Iowa, Lake Charles, Sulphur & Southwest Louisiana.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block px-10 py-5 bg-white text-brand-red font-black tracking-widest text-sm uppercase transition-colors hover:bg-brand-dark hover:text-white shadow-xl">Get a Free Estimate</a>
            <a href="tel:3373844417" className="inline-block px-10 py-5 border-2 border-white text-white font-black tracking-widest text-sm uppercase transition-colors hover:bg-white hover:text-brand-red">(337) 384-4417</a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
