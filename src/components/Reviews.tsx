import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const reviews = [
  { id: 1, text: "C&E Seamless Gutters did an amazing job! Installed and cleaned up before I got home.", author: "Sarah T.", location: "Lake Charles, LA" },
  { id: 2, text: "Transparent estimate, installed new 6-inch gutters with leaf guards. Not a single drop out of place since.", author: "Mark R.", location: "Sulphur, LA" },
  { id: 3, text: "Matched the color of my trim perfectly. Handle the massive Louisiana rain-dumps without an issue.", author: "James L.", location: "Westlake, LA" },
  { id: 4, text: "From the initial call to final inspection, top-notch. High quality and extremely affordable.", author: "Emily C.", location: "Moss Bluff, LA" },
  { id: 5, text: "The crew was fast, polite, and very respectful of our property. Gutters look fantastic.", author: "David W.", location: "Iowa, LA" },
  { id: 6, text: "Best contracting experience I've had. The new seamless system completely fixed our foundation wash-out.", author: "Michael B.", location: "Vinton, LA" },
  { id: 7, text: "They extruded the gutters right in my driveway. Precision fit and zero leaks. Highly recommended.", author: "Jessica M.", location: "Lake Charles, LA" },
  { id: 8, text: "Incredibly fast turnaround time and the price beat 3 other local competitors. 5 stars.", author: "Robert H.", location: "Sulphur, LA" }
];

export default function Reviews() {
  const [index, setIndex] = useState(1000 * reviews.length); 
  const realIndex = index % reviews.length; 

  const next = () => setIndex(i => i + 1);
  const prev = () => setIndex(i => i - 1);

  return (
    <section id="reviews" className="bg-brand-dark pt-8 pb-0 relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        
        {/* Centered Title */}
        <div className="text-center mb-6 px-6">
          <p className="text-brand-yellow font-bold text-sm tracking-widest uppercase mb-2">Real Customer Feedback</p>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase">
            CLIENT REVIEWS
          </h2>
        </div>

        {/* Navigation Buttons */}
        <button 
          onClick={prev}
          className="absolute left-2 md:left-4 top-1/2 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-[#111] shadow-2xl border border-white/5 text-white hover:bg-brand-yellow hover:text-brand-dark hover:border-brand-yellow transition-all z-30 group"
        >
          <ChevronLeft className="w-5 h-5 md:w-8 md:h-8 group-hover:-translate-x-0.5 transition-transform" />
        </button>
        <button 
          onClick={next}
          className="absolute right-2 md:right-4 top-1/2 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-[#111] shadow-2xl border border-white/5 text-white hover:bg-brand-yellow hover:text-brand-dark hover:border-brand-yellow transition-all z-30 group"
        >
          <ChevronRight className="w-5 h-5 md:w-8 md:h-8 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Infinite Carousel Math Tracking Container */}
        <div className="relative h-[280px] md:h-[340px] w-full flex justify-center items-center pb-4">
          {reviews.map((review, idx) => {
            const offset = ((idx - realIndex + reviews.length + Math.floor(reviews.length/2)) % reviews.length) - Math.floor(reviews.length/2);
            const isCenter = offset === 0;

            return (
              <motion.div
                key={review.id}
                animate={{
                  x: `calc(${offset * 105}%)`,
                  scale: isCenter ? 1.05 : 0.9,
                  opacity: isCenter ? 1 : (Math.abs(offset) <= 2 ? 0.3 : 0),
                  zIndex: isCenter ? 20 : 10,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className={`absolute w-[280px] md:w-[380px] h-[240px] md:h-[260px] p-6 md:p-8 rounded-sm flex flex-col justify-between cursor-pointer ${
                  isCenter 
                    ? 'bg-[#1a1a1a] shadow-[0_20px_40px_rgba(0,0,0,0.8)] border border-brand-yellow' 
                    : 'bg-[#0a0a0a] border border-white/5'
                }`}
                onClick={!isCenter ? (offset > 0 ? next : prev) : undefined}
              >
                <div>
                  <div className="flex gap-1 mb-4 justify-center md:justify-start">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 md:w-5 md:h-5 fill-brand-yellow text-brand-yellow transition-opacity duration-500 hover:scale-110 ${isCenter ? 'opacity-100' : 'opacity-40'}`} />
                    ))}
                  </div>
                  <p className={`text-sm md:text-base leading-relaxed mb-4 italic transition-colors duration-500 text-center md:text-left ${isCenter ? 'text-white' : 'text-white/40'}`}>
                    "{review.text}"
                  </p>
                </div>
                <div className={`border-t transition-colors duration-500 pt-4 flex flex-col text-center md:text-left ${isCenter ? 'border-brand-yellow/30' : 'border-white/5'}`}>
                  <span className={`font-bold tracking-tight text-base md:text-lg transition-colors duration-500 ${isCenter ? 'text-white' : 'text-white/40'}`}>{review.author}</span>
                  <span className={`text-[10px] md:text-xs font-bold uppercase tracking-widest mt-1 transition-colors duration-500 ${isCenter ? 'text-brand-yellow' : 'text-white/20'}`}>{review.location}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
