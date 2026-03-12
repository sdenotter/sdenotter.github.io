import { motion } from 'motion/react';

export default function CaseStudies() {
  const projects = [
    {
      title: "The Monolith Diagnosis",
      problem: "A legacy system with 40% downtime. The client asked for a rewrite; I diagnosed a structural failure in the data layer.",
      outcome: "Stabilized the existing system in 3 weeks, saving $200k in unnecessary rewrite costs.",
      tech: "Node.js, PostgreSQL, Redis",
      color: "burgundy"
    },
    {
      title: "Operational Clarity",
      problem: "A mid-size logistics firm running on 14 disconnected spreadsheets. Errors were costing 5% of revenue.",
      outcome: "Built a unified diagnostic dashboard and automated workflow. Error rate dropped to <0.1%.",
      tech: "Go, Kubernetes, AWS",
      color: "sienna"
    },
    {
      title: "Simplicity Audit",
      problem: "Internal teams overwhelmed by an over-engineered microservices architecture they didn't need.",
      outcome: "Consolidated 12 services into 3, reducing operational overhead by 70%.",
      tech: "React, TypeScript, Prometheus",
      color: "teal"
    }
  ];

  return (
    <section id="case-studies" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-24 flex flex-col md:flex-row md:items-end justify-between"
      >
        <div>
          <span className="text-xs uppercase tracking-[0.5em] mb-4 block opacity-60">Selected Works</span>
          <h2 className="text-5xl md:text-7xl font-serif">Diagnostic Reports</h2>
        </div>
        <div className="mt-8 md:mt-0 max-w-xs text-sm opacity-60 font-mono">
          "Most developers build what you ask for. I figure out what you actually need."
        </div>
      </motion.div>

      <div className="space-y-32">
        {projects.map((project, i) => (
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
            <div className="md:col-span-6">
              <h3 className="text-4xl md:text-6xl font-serif mb-8 group-hover:italic transition-all duration-500">
                {project.title}
              </h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-xs uppercase tracking-widest opacity-40 mb-2">The Problem</h4>
                  <p className="text-lg leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest opacity-40 mb-2">The Outcome</h4>
                  <p className="text-lg leading-relaxed font-serif italic text-burgundy">{project.outcome}</p>
                </div>
              </div>
            </div>

            {/* Visual Placeholder */}
            <div className="md:col-span-5 aspect-[4/3] bg-teal/5 border border-teal/10 relative overflow-hidden">
              <div className={`absolute inset-0 opacity-10 bg-${project.color}`} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 border border-teal/20 flex flex-col p-6 justify-between">
                  <div className="text-[8px] uppercase tracking-widest opacity-40">{project.tech}</div>
                  <div className="h-px bg-teal/20 w-full" />
                  <div className="text-[8px] uppercase tracking-widest opacity-40 self-end">Diagnostic Report</div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
