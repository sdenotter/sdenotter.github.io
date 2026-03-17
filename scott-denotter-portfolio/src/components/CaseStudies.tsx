import { motion } from 'motion/react';

export default function CaseStudies() {
  const projects = [
    {
      title: "The Monolith Diagnosis",
      description: "Diagnosed a structural failure in a legacy system experiencing 40% downtime. Instead of indulging an expensive full-system rewrite, I stabilized the existing data layer in 3 weeks, saving the client $200k in unnecessary costs.",
      tech: "Node.js · PostgreSQL · Redis",
      color: "burgundy"
    },
    {
      title: "Operational Clarity",
      description: "Replaced 14 disconnected spreadsheets for a mid-size logistics firm with a unified diagnostic dashboard and automated workflow. This streamlined operations and dropped their revenue-draining error rate from 5% to <0.1%.",
      tech: "Go · Kubernetes · AWS",
      color: "sienna"
    },
    {
      title: "Simplicity Audit",
      description: "Conducted a simplicity audit for internal teams overwhelmed by an over-engineered microservices architecture. Consolidated 12 services down to 3, cutting their operational overhead by 70%.",
      tech: "React · TypeScript · Prometheus",
      color: "teal"
    }
  ];

  return (
    <section id="case-studies" className="py-32 pl-6 md:pl-16 pr-6 md:pr-12 max-w-5xl">
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
