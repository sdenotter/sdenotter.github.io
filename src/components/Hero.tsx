import { motion } from 'motion/react';
import BrandLabel from './BrandLabel';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col md:flex-row items-center pt-24 overflow-hidden">
      <BrandLabel />

      {/* Bio Content — centred on mobile, pushed right on desktop */}
      <div className="w-full md:w-3/5 px-6 md:px-12 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-prose rounded-2xl p-6 sm:p-8 bg-[rgba(230,225,215,0.15)] backdrop-blur-sm border border-white/30 shadow-[0_8px_30px_rgba(0,0,0,0.04)] md:bg-transparent md:backdrop-blur-none md:border-none md:shadow-none md:p-0 md:ml-12">
            <p className="text-base md:text-xl leading-relaxed text-teal/90 mb-4 font-serif">
              I'm a back-end software developer with a foundation in applied mathematics, focused on building stable, resilient systems through data and automation. Currently working as an independent developer, I partner with businesses to solve their most complex technical bottlenecks. My day-to-day ranges from engineering automated reporting tools and data analytics platforms for e-commerce clients, to designing adversarial coding protocols that stress-test Large Language Models.
            </p>
            <p className="text-base md:text-xl leading-relaxed text-teal/90 mb-6 font-serif">
              Previously, I've optimized workflows and built core features across the finance and energy sectors for companies like Bank of Montreal (BMO) and Energy Profiles Limited. These experiences—whether speeding up commercial lending cycles or detecting anomalies in utility consumption—have shaped my approach to writing clean, scalable code that directly drives business results.
            </p>
            <motion.div 
              className="h-px bg-teal w-24"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.5, duration: 1 }}
            />
          </div>
        </motion.div>
      </div>

      {/* Abstract Architectural Overlay (keeping some of the previous vibe) */}
      <motion.div 
        className="absolute right-0 top-0 w-full md:w-1/2 h-full z-5 opacity-10 pointer-events-none"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute bottom-0 right-0 w-4/5 h-4/5 border-l border-t border-teal/20" />
          <div className="z-10 text-[15vw] font-serif text-teal/5 select-none">
            
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-6 md:left-12 flex items-center space-x-4 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="text-[10px] uppercase tracking-[0.3em] rotate-90 origin-left translate-x-4">Scroll</div>
        <div className="w-px h-12 bg-teal/30" />
      </motion.div>
    </section>
  );
}
