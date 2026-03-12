import { motion } from 'motion/react';

export default function Philosophy() {
  const principles = [
    {
      title: "Diagnosis First",
      description: "Understand before you build. Scott's first question is never 'what do you want built?' It's 'what's actually going wrong?' The diagnostic process is the product, not a free add-on."
    },
    {
      title: "Simplicity as Craft",
      description: "The simplest working solution is the best solution. It takes more skill to resist over-engineering than to indulge it. Scott regularly talks clients down from complexity they don't need."
    },
    {
      title: "Outcome First",
      description: "Clients don't buy code. They buy results. Every project is framed around what changed for the business — time saved, errors eliminated, decisions made faster."
    },
    {
      title: "Honest Expertise",
      description: "Be the expert who tells the truth. Credibility comes from candour, not credentials. Scott understands the craft deeply enough to teach it, which provides proof of expertise."
    }
  ];

  return (
    <section id="philosophy" className="py-20 px-6 md:px-12 bg-teal text-parchment relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute top-0 left-0 text-[30vw] font-serif opacity-10 select-none pointer-events-none -translate-y-1/2">
        PILLARS
      </div>

      {/* Mirrored building image */}
      <div className="absolute right-0 bottom-0 w-1/2 h-full pointer-events-none select-none">
        <img
          src="/design/images/Desktop.png"
          alt=""
          className="w-full h-full object-cover object-bottom opacity-10 mix-blend-overlay"
          style={{ transform: 'scaleX(-1)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-[0.5em] mb-4 block opacity-60">Brand Pillars</span>
          <h2 className="text-5xl md:text-7xl font-serif max-w-3xl">
            The non-negotiable truths of the craft.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="text-sienna font-serif text-4xl mb-6">0{i + 1}</div>
              <h3 className="text-2xl font-serif mb-4 group-hover:text-sienna transition-colors">{p.title}</h3>
              <p className="text-sm leading-relaxed opacity-80 font-mono">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
