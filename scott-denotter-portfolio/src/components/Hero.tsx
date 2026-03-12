import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center pt-24 overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(max-width: 768px)" srcSet="/design/images/mobile.png" />
          <img 
            src="/design/images/Desktop.png" 
            alt="Background" 
            className="w-full h-full object-cover object-bottom opacity-50 mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
        </picture>
      </div>

      {/* Left Content */}
      <div className="w-full md:w-3/5 px-6 md:px-12 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.9] tracking-tighter text-teal mb-8">
            Less system.<br />
            More solution.
          </h1>
          <div className="max-w-xl">
            <p className="text-xl md:text-2xl leading-relaxed text-teal/90 mb-6 font-serif italic">
              "You don't need a developer who builds what you ask for. You need one who figures out what you actually need — then builds the simplest thing that solves it."
            </p>
            <p className="text-sm md:text-base leading-relaxed opacity-70 mb-8 font-mono uppercase tracking-widest">
              Scott Denotter — Diagnosis before prescription.
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
            CRAFT
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
