import { motion } from 'motion/react';

export default function WhyUsPage() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Skinnier Hero Section */}
      <section className="bg-white pt-[160px] md:pt-[170px] pb-16 md:pb-20 px-6 relative overflow-hidden flex items-center justify-center border-b border-gray-100">
        {/* Subtle Background Logo Watermark */}
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
            Why Choose Us
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-4 py-1 border-y-2 border-brand-red"
          >
            <p className="text-brand-red font-bold tracking-widest text-xs md:text-sm uppercase">
              C&E Seamless Gutters has you covered covering the areas near Iowa, LA!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Body Content Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Left Column: Expanded Body Text */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 flex flex-col justify-center"
            >
              <h2 className="text-3xl md:text-5xl font-black text-brand-dark tracking-tighter uppercase mb-8">
                Your Trusted <span className="text-brand-red">Local</span> Experts.
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-medium">
                <p>
                  Welcome to <strong className="text-brand-dark font-black tracking-tight">C&E Home Services</strong>, your premier reliable home service provider proudly operating in and serving the communities of Iowa, Louisiana. 
                </p>
                <p>
                  With an unwavering focus on flawless seamless gutter fabrication, precision window installations, and comprehensive home renovations, we are deeply committed to improving both the aesthetic appearance and the structural functionality of your house. We understand that your home is your most valuable asset, which is why we approach every single project with a rigorous attention to detail.
                </p>
                <p>
                  From mitigating devastating storm damage, to upgrading your home's exterior envelope for maximum energy efficiency, C&E Seamless Gutters brings unmatched craftsmanship to every job site. We don't just build homes—we build long-lasting relationships based on trust, transparency, and results that speak for themselves.
                </p>
              </div>
            </motion.div>

            {/* Right Column: Editorial Values */}
            <div className="lg:w-1/2 flex flex-col justify-center space-y-12 lg:border-l-2 border-gray-200 lg:pl-16 relative">
              
              {/* Value 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group flex gap-6 md:gap-8"
              >
                <span className="text-6xl md:text-7xl font-black text-transparent [-webkit-text-stroke:2px_#cbd5e1] group-hover:[-webkit-text-stroke:2px_#ff0000] transition-colors duration-500 mt-[-10px]">01</span>
                <div>
                  <h3 className="text-2xl font-black text-brand-dark mb-3 uppercase tracking-tighter">Expertise</h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    With years of experience, our skilled team delivers top-notch results. Comprehensive Services: From gutter care to home renovations, we’ve got you covered.
                  </p>
                </div>
              </motion.div>

              {/* Value 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group flex gap-6 md:gap-8"
              >
                <span className="text-6xl md:text-7xl font-black text-transparent [-webkit-text-stroke:2px_#cbd5e1] group-hover:[-webkit-text-stroke:2px_#ff0000] transition-colors duration-500 mt-[-10px]">02</span>
                <div>
                  <h3 className="text-2xl font-black text-brand-dark mb-3 uppercase tracking-tighter">Customer Satisfaction</h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    Your happiness is our priority. We ensure clear communication and exceptional service every step of the way.
                  </p>
                </div>
              </motion.div>

              {/* Value 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group flex gap-6 md:gap-8"
              >
                <span className="text-6xl md:text-7xl font-black text-transparent [-webkit-text-stroke:2px_#cbd5e1] group-hover:[-webkit-text-stroke:2px_#ff0000] transition-colors duration-500 mt-[-10px]">03</span>
                <div>
                  <h3 className="text-2xl font-black text-brand-dark mb-3 uppercase tracking-tighter">Licensed & Insured</h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    Rest easy knowing we’re fully licensed, bonded, and insured for your complete peace of mind.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* Full-Width CTA Banner */}
      <section className="bg-brand-red w-full py-16 md:py-24 text-white text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-6"
        >
          <h3 className="text-4xl md:text-5xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-4">Get Started Today</h3>
          <p className="text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto text-white/90">
            Ready to elevate your home? Contact C&E Home Services for quality service and outstanding results.
          </p>
          <a href="/contact" className="inline-block px-10 py-5 bg-white text-brand-red font-black tracking-widest text-sm uppercase transition-colors hover:bg-brand-dark hover:text-white shadow-xl">
            Request a Free Quote
          </a>
        </motion.div>
      </section>
    </div>
  );
}
