import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle, MapPin, Phone, ArrowRight } from 'lucide-react';

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Seamless Gutter Installation",
  "name": "Seamless Gutter Installation in Iowa, LA",
  "description": "Professional on-site seamless gutter installation using extruded aluminum systems engineered for Louisiana's heavy rainfall and hurricane-season weather. Serving Iowa, Lake Charles, Sulphur, Jennings, and all of Calcasieu Parish.",
  "provider": {
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://www.candehomeservices.com/#business",
    "name": "C&E Seamless Gutters",
    "telephone": "(337) 384-4417",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lake Charles",
      "addressRegion": "LA",
      "addressCountry": "US"
    }
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
      "name": "What is the difference between seamless and sectional gutters?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sectional gutters are pre-cut pieces joined with seams — those seam points are where leaks and failures start. Seamless gutters are extruded on-site as one continuous run custom-fit to your exact roofline dimensions, eliminating seam failures and dramatically reducing long-term maintenance."
      }
    },
    {
      "@type": "Question",
      "name": "How long do seamless gutters last in Louisiana?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Quality .032 gauge aluminum seamless gutters typically last 20–30 years in Louisiana when properly installed and maintained. Our systems are engineered specifically for the region's heavy annual rainfall, high humidity, and hurricane-season wind loads."
      }
    },
    {
      "@type": "Question",
      "name": "How much does seamless gutter installation cost in Louisiana?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Seamless gutter installation in Louisiana typically ranges from $6 to $14 per linear foot depending on gutter size (5-inch vs. 6-inch K-style), material, and home configuration. C&E Seamless Gutters offers free on-site estimates for Iowa, Lake Charles, Sulphur, and surrounding areas. Call (337) 384-4417."
      }
    },
    {
      "@type": "Question",
      "name": "Do you install gutters on the same day as the estimate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In many cases, yes. Because we extrude your gutters on-site in our truck-mounted machine, we can measure, fabricate, and install in a single visit for straightforward jobs. We'll confirm the timeline during your free estimate."
      }
    }
  ]
};

const benefits = [
  "Custom-extruded on-site — zero pre-cut seams",
  ".032 gauge aluminum engineered for Louisiana weather",
  "5-inch & 6-inch K-style available",
  "Half-round profiles for historic homes",
  "Hidden hanger systems for clean roofline aesthetics",
  "Color-matched to your fascia & trim",
  "Proper pitch calculated for maximum flow velocity",
  "Free estimates — Iowa, Lake Charles, Sulphur & beyond",
];

const serviceAreas = ["Iowa, LA", "Lake Charles, LA", "Sulphur, LA", "Jennings, LA", "Westlake, LA", "Moss Bluff, LA", "Calcasieu Parish", "Jefferson Davis Parish"];

export default function SeamlessGutterInstallationPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-white pt-[160px] md:pt-[170px] pb-16 md:pb-20 px-6 relative overflow-hidden flex items-center justify-center border-b border-gray-100">
        <div className="absolute top-[60%] -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-[0.03] pointer-events-none w-full flex justify-center z-0">
          <img src="/c&elogo-nowords.png" alt="" className="w-[300px] md:w-[450px] object-contain grayscale" />
        </div>
        <div className="container mx-auto relative z-10 text-center">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-brand-red font-bold tracking-widest text-xs md:text-sm uppercase mb-4">Iowa, LA & Southwest Louisiana</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-brand-dark tracking-tighter uppercase mb-4"
          >
            Seamless Gutter Installation<br /><span className="text-brand-red">in Iowa, Louisiana</span>
          </motion.h1>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="inline-block px-4 py-1 border-y-2 border-brand-red mt-2">
            <p className="text-brand-red font-bold tracking-widest text-xs md:text-sm uppercase">On-site extrusion · Zero seams · Built for Louisiana</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="relative overflow-hidden group z-10 px-8 py-4 bg-brand-red text-white font-bold tracking-widest uppercase text-sm transition-colors text-center shadow-lg hover:text-brand-dark">
              <span className="absolute top-0 left-0 w-full h-0 bg-brand-yellow transition-all duration-300 ease-out group-hover:h-full -z-10" />
              Get a Free Estimate
            </a>
            <a href="tel:3373844417" className="px-8 py-4 border-2 border-brand-dark text-brand-dark font-bold tracking-widest uppercase text-sm text-center hover:bg-brand-dark hover:text-white transition-colors flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" /> (337) 384-4417
            </a>
          </motion.div>
        </div>
      </section>

      {/* What Is It */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-20">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl font-black text-brand-dark tracking-tighter uppercase mb-6">
                What Is <span className="text-brand-red">Seamless Gutter</span> Installation?
              </h2>
              <div className="space-y-5 text-lg text-gray-700 leading-relaxed font-medium">
                <p>
                  Unlike box-store sectional gutters that come pre-cut and joined with leak-prone seams, <strong>seamless gutters are formed in a single continuous piece</strong> from a coil of aluminum — right in your driveway, using our truck-mounted extrusion machine.
                </p>
                <p>
                  The result is a gutter system with zero seam joints between corners, meaning zero common failure points. We calculate the precise pitch angle for maximum water flow velocity so that even Louisiana's most intense rainfall events drain completely away from your foundation, soffit, and fascia.
                </p>
                <p>
                  Every gutter run is custom-fabricated to the exact length of your roofline — not an inch longer or shorter. We use <strong>.032 gauge aluminum</strong> (thicker than the standard .027 used by most competitors) paired with hidden hanger systems spaced every 16–18 inches for a system that holds under real Louisiana wind loads.
                </p>
              </div>
            </motion.div>

            <div className="lg:w-1/2 flex flex-col justify-center space-y-4 lg:border-l-2 border-gray-200 lg:pl-16">
              <h3 className="text-2xl font-black text-brand-dark uppercase tracking-tighter mb-4">What's Included</h3>
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

          {/* Why Louisiana Matters */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-brand-dark text-white p-10 md:p-14 mb-20">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-6">Why Seamless Gutters Matter in Louisiana</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white/80 leading-relaxed">
              <div>
                <h3 className="text-brand-yellow font-black uppercase tracking-tighter text-lg mb-2">Hurricane-Season Loads</h3>
                <p>Louisiana averages 56 inches of rainfall per year — nearly double the national average. During named storm events, gutters face both extreme water volume and high-velocity wind. Standard sectional gutters fail at the seams. Seamless systems hold.</p>
              </div>
              <div>
                <h3 className="text-brand-yellow font-black uppercase tracking-tighter text-lg mb-2">Foundation Protection</h3>
                <p>Clay-heavy Louisiana soil expands and contracts with moisture. Uncontrolled water runoff from failed gutters directly causes foundation settling, slab cracking, and basement intrusion. A properly pitched seamless system routes every drop 6+ feet from your foundation.</p>
              </div>
              <div>
                <h3 className="text-brand-yellow font-black uppercase tracking-tighter text-lg mb-2">Fascia & Soffit Rot</h3>
                <p>Our high-humidity environment accelerates wood rot in fascia boards and soffit panels when water backs up behind failing gutters. We identify and repair any pre-existing rot before installation so your new system bonds to solid framing.</p>
              </div>
            </div>
          </motion.div>

          {/* Gallery */}
          <div className="pt-10 border-t-2 border-gray-200/50 mb-20">
            <h3 className="text-2xl font-black text-brand-dark uppercase tracking-tighter mb-8 text-center">Recent Gutter Installations</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {["/4.png", "/IMG_9846-scaled.jpeg", "/IMG_9847-scaled.jpeg"].map((src, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative w-full h-[250px] bg-gray-900 overflow-hidden shadow-xl rounded-sm group">
                  <img src={src} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={`Seamless gutter installation Iowa LA — project ${idx + 1}`} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-20">
            <h2 className="text-3xl font-black text-brand-dark uppercase tracking-tighter mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              {[
                { q: "What's the difference between seamless and sectional gutters?", a: "Sectional gutters are pre-cut pieces joined with seams — those seam points are where leaks and failures start. Seamless gutters are extruded on-site as one continuous run custom-fit to your exact roofline, eliminating seam failures and dramatically reducing long-term maintenance." },
                { q: "How long do seamless gutters last in Louisiana?", a: "Quality .032 gauge aluminum seamless gutters typically last 20–30 years in Louisiana when properly installed and maintained. Our systems are engineered for the region's heavy annual rainfall, high humidity, and hurricane-season wind loads." },
                { q: "How much does seamless gutter installation cost in Louisiana?", a: "Seamless gutter installation in Louisiana typically ranges from $6–$14 per linear foot depending on gutter size, material, and home configuration. C&E offers free on-site estimates — call (337) 384-4417." },
                { q: "Can you install gutters the same day as the estimate?", a: "In many cases, yes. Because we extrude gutters on-site in our truck-mounted machine, we can measure, fabricate, and install in a single visit for straightforward jobs. We'll confirm the timeline during your free estimate." },
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
              <h2 className="text-2xl font-black text-brand-dark uppercase tracking-tighter">Seamless Gutter Installation Service Area</h2>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">C&E Seamless Gutters installs seamless gutter systems throughout Southwest Louisiana. Our truck-mounted extrusion equipment comes to your driveway — we serve:</p>
            <div className="flex flex-wrap gap-3 mb-6">
              {serviceAreas.map((area, i) => (
                <span key={i} className="px-4 py-2 bg-white border border-gray-200 text-brand-dark font-bold text-sm uppercase tracking-wide">{area}</span>
              ))}
            </div>
            <p className="text-sm text-gray-500">Don't see your city? Call us — we likely serve your area. <a href="tel:3373844417" className="text-brand-red font-bold">(337) 384-4417</a></p>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-white py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-black text-brand-dark uppercase tracking-tighter mb-8">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Gutter Guard Installation", href: "/services/gutter-guard-installation", desc: "Stop cleaning gutters forever with micro-mesh guard systems." },
              { label: "Gutter Repair", href: "/services/gutter-repair", desc: "Fast repair for sagging, leaking, or storm-damaged gutters." },
              { label: "Gutter Cleaning", href: "/services/gutter-cleaning", desc: "Professional flushing to keep your system flowing freely." },
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
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">Get Your Free Gutter Estimate</h2>
          <p className="text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto text-white/90">
            Serving Iowa, Lake Charles, Sulphur & all of Southwest Louisiana. On-site extrusion, same-day installation available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block px-10 py-5 bg-white text-brand-red font-black tracking-widest text-sm uppercase transition-colors hover:bg-brand-dark hover:text-white shadow-xl">Request a Free Quote</a>
            <a href="tel:3373844417" className="inline-block px-10 py-5 border-2 border-white text-white font-black tracking-widest text-sm uppercase transition-colors hover:bg-white hover:text-brand-red">(337) 384-4417</a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
