import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import PageSEO from '../components/PageSEO';

const expandedReviews = [
  { id: 1, text: "Absolutely phenomenal work. The attention to detail on the corners is unmatched.", author: "Michael R.", location: "Iowa, LA", stars: 5 },
  { id: 2, text: "Fast, professional, and entirely seamless. They color-matched completely perfectly.", author: "Sarah T.", location: "Lake Charles, LA", stars: 5 },
  { id: 3, text: "C&E showed up on time and knocked out my entire house in an afternoon. Looks amazing.", author: "David L.", location: "Sulphur, LA", stars: 5 },
  { id: 4, text: "From the initial call to final inspection, top-notch. High quality and extremely affordable.", author: "Emily C.", location: "Moss Bluff, LA", stars: 5 },
  { id: 5, text: "Highly recommend! Our old gutters were failing and damaging our foundation. C&E fixed everything instantly.", author: "Robert W.", location: "Welsh, LA", stars: 5 },
  { id: 6, text: "Excellent communication and perfect installation. The crew completely cleaned up after themselves.", author: "Amanda K.", location: "Jennings, LA", stars: 5 },
  { id: 7, text: "They extruded the gutters right in my driveway. Precision fit and zero leaks. Highly recommended.", author: "Jessica M.", location: "Lake Charles, LA", stars: 5 },
  { id: 8, text: "We had leaf guards installed along with the gutters. Easiest decision ever. Zero clogging so far.", author: "Thomas B.", location: "Iowa, LA", stars: 5 },
  { id: 9, text: "Professional quoting process, zero hidden fees, and absolute stellar craftsmanship. 10/10.", author: "William J.", location: "Sulphur, LA", stars: 5 }
];

const reviewSchema = expandedReviews.map((r) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": { "@type": "HomeAndConstructionBusiness", "name": "C&E Seamless Gutters" },
  "author": { "@type": "Person", "name": r.author },
  "reviewRating": { "@type": "Rating", "ratingValue": r.stars, "bestRating": 5, "worstRating": 1 },
  "reviewBody": r.text
}));

export default function ReviewsPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageSEO
        title="Client Reviews | C&E Seamless Gutters — Iowa, LA"
        description="Read verified reviews from homeowners in Iowa, Lake Charles, Sulphur, and Calcasieu Parish who chose C&E Seamless Gutters for gutter and exterior services."
        path="/reviews"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      {/* Hero Section (Why Us Template) */}
      <section className="bg-white pt-[160px] md:pt-[170px] pb-16 md:pb-20 px-6 relative overflow-hidden flex items-center justify-center border-b border-gray-100">
        <div className="absolute top-[60%] -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-[0.03] pointer-events-none w-full flex justify-center z-0">
          <img src="/c&elogo-nowords.png" alt="Background Logo" className="w-[300px] md:w-[450px] object-contain grayscale" />
        </div>
        
        <div className="container mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-brand-dark tracking-tighter uppercase mb-4"
          >
            Client Reviews
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-4 py-1 border-y-2 border-brand-red"
          >
            <p className="text-brand-red font-bold tracking-widest text-xs md:text-sm uppercase">
              Louisiana's highest rated seamless gutter installers!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Body Content Section */}
      <section className="bg-gray-50 py-20 md:py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expandedReviews.map((review, idx) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                className="bg-white p-8 rounded-sm shadow-md border-t-4 border-brand-red group hover:-translate-y-2 transition-transform duration-300 flex flex-col"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-brand-yellow fill-brand-yellow" />
                  ))}
                </div>
                <p className="text-gray-700 font-medium leading-relaxed italic mb-8 flex-grow">"{review.text}"</p>
                <div className="flex flex-col mt-auto">
                  <span className="font-black text-brand-dark tracking-tight uppercase">{review.author}</span>
                  <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">{review.location}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Full-Width CTA Banner: Leave a Review */}
      <section className="bg-brand-red w-full py-16 md:py-24 text-white text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-6"
        >
          <h3 className="text-4xl md:text-5xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-4">Leave a Review</h3>
          <p className="text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto text-white/90">
            Have we provided you with 5-star service? Let the community know by sharing your experience on Google!
          </p>
          <a 
            href="https://www.google.com/maps/place/C%26E+Seamless+Gutters/data=!4m2!3m1!1s0x0:0x57cb8e2d79c1b194?sa=X&ved=1t:2428&ictx=111" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 bg-white text-brand-red font-black tracking-widest text-sm uppercase transition-colors hover:bg-brand-dark hover:text-white shadow-xl"
          >
            Review us on Google
          </a>
        </motion.div>
      </section>

    </div>
  );
}
