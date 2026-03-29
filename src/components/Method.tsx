import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import twinGoldBuildings from '../assets/design/twin-gold-buildings.jpg';
import BrandLabel from './BrandLabel';

export default function Philosophy() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yTranslate = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const principles = [
    {
      title: "Functional Core, Imperative Shell",
      description: "I separate pure business logic from side effects by design. The core — all decisions, transformations, and rules — is written as pure functions with no I/O. The shell handles databases, APIs, and user input. This means the critical paths of every system are trivially testable, predictable, and easy to reason about."
    },
    {
      title: "Data Driven Design",
      description: "Every architectural decision is grounded in real usage data and measured outcomes — not assumptions, trends, or gut feel."
    },
    {
      title: "Test Driven Development",
      description: "Tests are written before implementation, so the design is proven correct by construction, not retrofitted after the fact."
    }
  ];

  return (
    <section
      ref={containerRef}
      id="how-i-work"
      className="py-24 px-6 md:px-12 relative overflow-hidden bg-teal shadow-[0_-20px_50px_rgba(0,0,0,0.4)] z-10 border-t border-umber/20"
    >
      <BrandLabel colorClass="text-parchment" />
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(175, 219, 188, 0.06) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Twin gold buildings accent — left side bleed */}
      <div className="absolute top-0 left-0 w-[55%] h-full pointer-events-none select-none overflow-hidden hidden md:block">
        <motion.img
          style={{ y: yTranslate }}
          src={twinGoldBuildings}
          alt=""
          className="absolute top-0 left-0 w-full h-[120%] object-cover object-center opacity-[0.12] mix-blend-soft-light"
        />
        
      </div>

      {/* Top fade — blends from hero parchment into teal */}
      
      {/* Bottom vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#2a8fa5]/60 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <span className="text-xs uppercase tracking-[0.5em] mb-4 block opacity-50 font-mono text-mint">The Method</span>
          <h2 className="text-5xl md:text-8xl font-serif max-w-4xl leading-[1.1] text-parchment">
            How I build.
          </h2>
        </div>

        {/* Decorative divider */}
        <div className="w-full h-px bg-gradient-to-r from-mint/30 via-mint/10 to-transparent mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((p, i) => (
            <div
              key={p.title}
              className="group rounded-lg p-8 border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-sm transition-all duration-500"
            >
              <div className="text-burgundy font-serif text-6xl mb-8 opacity-40 group-hover:opacity-100 group-hover:text-mint transition-all duration-500">
                0{i + 1}
              </div>

              <h3 className="text-2xl font-serif mb-6 text-parchment group-hover:text-mint transition-colors duration-300">
                {p.title}
              </h3>

              <p className="text-sm leading-relaxed text-sage font-mono group-hover:text-parchment transition-colors">
                {p.description}
              </p>

              <div className="w-12 h-[1px] bg-mint mt-8 origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
