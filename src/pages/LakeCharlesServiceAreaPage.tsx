import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, ArrowRight, CheckCircle } from 'lucide-react';

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Gutter Service",
  "name": "Seamless Gutters & Exterior Services in Lake Charles, LA",
  "description": "C&E Seamless Gutters serves Lake Charles, LA with professional seamless gutter installation, gutter repair, gutter guard installation, gutter cleaning, siding, and window replacement. Call (337) 384-4417.",
  "provider": {
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://www.candehomeservices.com/#business",
    "name": "C&E Seamless Gutters",
    "telephone": "(337) 384-4417"
  },
  "areaServed": {
    "@type": "City",
    "name": "Lake Charles",
    "sameAs": "https://en.wikipedia.org/wiki/Lake_Charles,_Louisiana"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you install gutters in Lake Charles, LA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. C&E Seamless Gutters serves Lake Charles and all of Calcasieu Parish with professional seamless gutter installation, gutter repair, gutter guard installation, gutter cleaning, siding, and window replacement services. Call (337) 384-4417 for a free estimate."
      }
    },
    {
      "@type": "Question",
      "name": "What gutter services do you offer in Lake Charles, Louisiana?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In Lake Charles we provide: seamless gutter installation, gutter repair, gutter guard installation, gutter cleaning and flushing, downspout installation and repair, fascia board replacement, storm damage restoration, vinyl siding installation, and window replacement."
      }
    }
  ]
};

const services = [
  { label: "Seamless Gutter Installation", href: "/services/seamless-gutter-installation" },
  { label: "Gutter Repair", href: "/services/gutter-repair" },
  { label: "Gutter Guard Installation", href: "/services/gutter-guard-installation" },
  { label: "Gutter Cleaning", href: "/services/gutter-cleaning" },
  { label: "Downspout Installation & Repair", href: "/services/downspout-installation-repair" },
  { label: "Fascia Board Replacement", href: "/services/fascia-board-replacement" },
  { label: "Storm Damage Restoration", href: "/services/storm-damage-restoration" },
  { label: "Vinyl Siding Installation", href: "/services/vinyl-siding-installation" },
  { label: "Window Replacement", href: "/services/window-replacement" },
];

export default function LakeCharlesServiceAreaPage() {
  return (
    <div className="bg-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-white pt-[160px] md:pt-[170px] pb-16 md:pb-20 px-6 relative overflow-hidden flex items-center justify-center border-b border-gray-100">
        <div className="container mx-auto relative z-10 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-brand-red font-bold tracking-widest text-xs uppercase mb-4">Calcasieu Parish · Southwest Louisiana</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl lg:text-7xl font-black text-brand-dark tracking-tighter uppercase mb-4">
            Seamless Gutters &<br /><span className="text-brand-red">Exterior Services in Lake Charles, LA</span>
          </motion.h1>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="inline-block px-4 py-1 border-y-2 border-brand-red mt-2">
            <p className="text-brand-red font-bold tracking-widest text-xs md:text-sm uppercase">Iowa-based · Serving all of Lake Charles & Calcasieu Parish</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="relative overflow-hidden group z-10 px-8 py-4 bg-brand-red text-white font-bold tracking-widest uppercase text-sm shadow-lg hover:text-brand-dark transition-colors text-center">
              <span className="absolute top-0 left-0 w-full h-0 bg-brand-yellow transition-all duration-300 ease-out group-hover:h-full -z-10" />
              Get a Free Lake Charles Estimate
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
                Your Lake Charles<br /><span className="text-brand-red">Gutter & Exterior Contractor</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed font-medium">
                <p>C&E Seamless Gutters is based in Iowa, Louisiana — just minutes from Lake Charles — and serves the entire Lake Charles metro area and Calcasieu Parish with professional exterior services. Our truck-mounted extrusion equipment comes directly to your Lake Charles driveway for on-site gutter fabrication.</p>
                <p>Lake Charles homeowners face some of Louisiana's most demanding weather conditions. As the largest city on the I-10 corridor between Houston and New Orleans, Lake Charles sits squarely in the Gulf Coast hurricane belt. After Hurricanes Laura and Delta (2020) and Ida (2021), the demand for proper gutter systems, storm restoration, and quality exterior work has never been higher.</p>
                <p>C&E brings the same craftsmanship and materials to every Lake Charles job as we bring to our Iowa home base — on-site extruded .032 gauge aluminum gutters, stainless steel micro-mesh guards, and full exterior restoration services.</p>
              </div>
            </motion.div>
            <div className="lg:w-1/2 flex flex-col justify-center lg:border-l-2 border-gray-200 lg:pl-16">
              <h3 className="text-xl font-black text-brand-dark uppercase tracking-tighter mb-6">Services We Provide in Lake Charles</h3>
              <div className="space-y-3">
                {services.map((s, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                    <Link to={s.href} className="flex items-center justify-between group p-4 border border-gray-200 hover:border-brand-red transition-colors">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-brand-red flex-shrink-0" />
                        <span className="text-gray-700 font-bold group-hover:text-brand-red transition-colors">{s.label}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-brand-red transition-colors" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-black text-brand-dark uppercase tracking-tighter mb-8 text-center">Lake Charles Service Area FAQs</h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              {[
                { q: "Do you install gutters in Lake Charles, LA?", a: "Yes. C&E Seamless Gutters serves Lake Charles and all of Calcasieu Parish with professional seamless gutter installation, repair, guard installation, gutter cleaning, siding, and window replacement. Call (337) 384-4417 for a free estimate." },
                { q: "What gutter services do you offer in Lake Charles, Louisiana?", a: "In Lake Charles we provide: seamless gutter installation, gutter repair, gutter guard installation, gutter cleaning and flushing, downspout installation and repair, fascia board replacement, storm damage restoration, vinyl siding installation, and window replacement." },
              ].map((item, i) => (
                <div key={i} className="border-l-4 border-brand-red pl-6 py-2">
                  <h3 className="font-black text-brand-dark text-lg mb-2">{item.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-100 p-8 md:p-10">
            <div className="flex items-start gap-3 mb-5">
              <MapPin className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-black text-brand-dark uppercase tracking-tighter">Neighborhoods & Areas We Serve in Lake Charles</h2>
                <p className="text-gray-600 text-sm mt-2">We serve all Lake Charles neighborhoods including: Downtown Lake Charles, Prien, Moss Bluff, Westlake, Sulphur, Iowa, Carlyss, and all of Calcasieu Parish.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-red w-full py-16 md:py-24 text-white text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">Serving Lake Charles & All of Calcasieu Parish</h2>
          <p className="text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto text-white/90">Free on-site estimates. On-site gutter extrusion — we come to your driveway. Call today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block px-10 py-5 bg-white text-brand-red font-black tracking-widest text-sm uppercase transition-colors hover:bg-brand-dark hover:text-white shadow-xl">Request a Free Quote</a>
            <a href="tel:3373844417" className="inline-block px-10 py-5 border-2 border-white text-white font-black tracking-widest text-sm uppercase transition-colors hover:bg-white hover:text-brand-red">(337) 384-4417</a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
