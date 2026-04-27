import React, { useState } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Slider (Reduced Height) */}
          <div className="w-full lg:w-3/5 lg:order-1 order-2">
            <div className="relative w-full group shadow-2xl rounded-sm overflow-hidden bg-gray-200 h-[500px] lg:h-[600px] xl:h-[650px]">
              
              {/* Base Layer: After image (sits underneath, visible on the right) */}
              <div className="absolute inset-0 w-full h-full pointer-events-none">
                <img 
                  src="/After_CE_1.png" 
                  alt="After Installation" 
                  className="w-full h-full object-cover object-center" 
                />
                <div className="absolute top-4 right-4 bg-brand-red/90 backdrop-blur-sm text-white px-4 py-2 font-black tracking-widest text-sm rounded-sm z-30">
                  AFTER
                </div>
              </div>

              {/* Overlay Layer: Before image (clipped from the right, visible on the left) */}
              <div 
                className="absolute inset-0 w-full h-full border-r-[3px] md:border-r-[6px] border-brand-yellow pointer-events-none z-20"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img 
                  src="/Before_CE.png" 
                  alt="Before Installation" 
                  className="absolute inset-0 w-full h-full object-cover object-center" 
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-4 py-2 font-black tracking-widest text-sm rounded-sm z-30">
                  BEFORE
                </div>
              </div>

              {/* Custom Slider Handle wrapper (moves with CSS left property) */}
              <div 
                className="absolute top-0 bottom-0 z-30 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -ml-6 md:-ml-7 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white border-[4px] border-brand-yellow rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-transform group-hover:scale-110">
                  <ChevronsLeftRight className="w-6 h-6 md:w-7 md:h-7 text-brand-dark" strokeWidth={2.5} />
                </div>
              </div>

              {/* Hidden native range input to handle interaction smoothly */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40 m-0"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-2/5 flex flex-col justify-center text-left lg:order-2 order-1">
            <h2 className="text-5xl md:text-6xl xl:text-7xl font-black text-brand-dark tracking-tighter mb-6 leading-none">
              COMPARE <span className="text-brand-red">THE<br className="hidden lg:block"/> DIFFERENCE.</span>
            </h2>
            <p className="text-gray-600 text-lg lg:text-xl leading-relaxed">
              Slide the handle left and right to peel back the transformation and see the final results of a real-world integration.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
