import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import BrandLabel from './BrandLabel';

export default function CaseStudies() {
  const [activeScreenshot, setActiveScreenshot] = useState<Record<number, number>>({});

  const getScreenshot = (projectIndex: number) => activeScreenshot[projectIndex] ?? 0;
  const setScreenshot = (projectIndex: number, value: number) =>
    setActiveScreenshot(prev => ({ ...prev, [projectIndex]: value }));

  const projects = [
    {
      title: "Spec Driven Development Framework",
      description: "A framework for agentic development built around detailed, structured specs generated before any code is written. Feedback loops at each stage keep the agent aligned with intent — reducing drift, hallucination, and rework across long-running tasks.",
      tech: "Python · LLM · Agents",
      color: "burgundy",
      screenshots: [
        "/screenshots/sdd-1.png",
        "/screenshots/sdd-2.png",
        "/screenshots/sdd-3.png",
      ]
    },
    {
      title: "RepoLens",
      description: "Uses text embeddings to project semantic views over a codebase — automatically assigning meaningful labels like 'frontend', 'backend', or 'data layer' based on what the code actually does, not where it lives. Built to make unfamiliar repos navigable at a glance.",
      tech: "Python · Embeddings · OpenAI",
      color: "sienna",
      screenshots: [
        "/screenshots/repolens-1.png",
        "/screenshots/repolens-2.png",
      ]
    },
    {
      title: "Sieve",
      description: "A structured CLI layer over Codex that gives agents a constrained, sandboxed interface for data analysis — keeping execution paths clean, reproducible, and auditable without requiring a full notebook environment.",
      tech: "Python · Codex · CLI",
      color: "teal",
      screenshots: [
        "/screenshots/sieve-1.png",
        "/screenshots/sieve-2.png",
      ]
    }
  ];

  return (
    <section id="projects" className="relative py-32 pl-6 md:pl-16 pr-6 md:pr-12 max-w-5xl">
      <BrandLabel />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-24 flex flex-col md:flex-row md:items-end justify-between"
      >
        <div>
          <span className="text-xs uppercase tracking-[0.5em] mb-4 block opacity-60">Selected Projects</span>
          <h2 className="text-5xl md:text-7xl font-serif">Projects</h2>
        </div>
      </motion.div>

      <div className="space-y-32">
        {projects.map((project, i) => {
          const current = getScreenshot(i);
          const total = project.screenshots.length;

          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start group"
            >
              {/* Project Number */}
              <div className="hidden md:block md:col-span-1 text-xs opacity-30 pt-4">
                [0{i + 1}]
              </div>

              {/* Content */}
              <div className="md:col-span-5">
                <h3 className="text-4xl md:text-6xl font-serif mb-8">
                  {project.title}
                </h3>

                <div className="space-y-8">
                  <p className="text-lg leading-relaxed">{project.description}</p>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest opacity-40 mb-2">Tags</h4>
                    <p className="text-sm font-mono opacity-60">{project.tech}</p>
                  </div>
                </div>
              </div>

              {/* Screenshot Viewer */}
              <div className="md:col-span-6 flex flex-col gap-0">
                {/* Top bar */}
                <div className="flex items-center justify-between px-3 py-2 border border-b-0 border-teal/20 bg-teal/[0.04]">
                  <span className="text-[9px] font-mono uppercase tracking-[0.3em] opacity-40">
                    {project.title}
                  </span>
                  <span className="text-[9px] font-mono opacity-30 tabular-nums">
                    {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                  </span>
                </div>

                {/* Image area */}
                <div className="relative border border-teal/20 overflow-hidden aspect-[16/10] bg-teal/[0.03]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={current}
                      src={project.screenshots[current]}
                      alt={`${project.title} screenshot ${current + 1}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="absolute inset-0 w-full h-full object-cover object-top"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </AnimatePresence>

                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-teal/30 pointer-events-none" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-teal/30 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-teal/30 pointer-events-none" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-teal/30 pointer-events-none" />
                </div>

                {/* Bottom nav bar */}
                <div className="flex items-center justify-between border border-t-0 border-teal/20 bg-teal/[0.04]">
                  {/* Dot indicators */}
                  <div className="flex items-center gap-2 px-3 py-2">
                    {project.screenshots.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setScreenshot(i, idx)}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                          idx === current
                            ? 'bg-teal opacity-80 scale-125'
                            : 'bg-teal/30 hover:bg-teal/60'
                        }`}
                        aria-label={`Screenshot ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Prev / Next */}
                  <div className="flex items-center divide-x divide-teal/20">
                    <button
                      onClick={() => setScreenshot(i, (current - 1 + total) % total)}
                      className="px-4 py-2 text-[9px] font-mono uppercase tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity duration-200 hover:bg-teal/10 disabled:pointer-events-none"
                      disabled={total <= 1}
                    >
                      ← Prev
                    </button>
                    <button
                      onClick={() => setScreenshot(i, (current + 1) % total)}
                      className="px-4 py-2 text-[9px] font-mono uppercase tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity duration-200 hover:bg-teal/10 disabled:pointer-events-none"
                      disabled={total <= 1}
                    >
                      Next →
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
