import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer id="contact" className="py-32 px-6 md:px-12 border-t border-teal/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
        <div>
          <h2 className="text-5xl md:text-7xl font-serif mb-12">
            Diagnosis first.<br />
            Solution second.<br />
            Simplicity always.
          </h2>
          <div className="space-y-4">
            <a href="mailto:scott.denotter1@gmail.com" className="text-2xl font-serif hover:text-burgundy transition-colors block underline underline-offset-8">
              scott.denotter1@gmail.com
            </a>
            <p className="text-sm opacity-60 font-mono">Based in the intersection of logic and design. Building for SMBs who value stability.</p>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-xs uppercase tracking-widest opacity-40 mb-6">Social</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-burgundy transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-burgundy transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-burgundy transition-colors">Twitter</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest opacity-40 mb-6">Navigation</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-burgundy transition-colors">Philosophy</a></li>
                <li><a href="#case-studies" className="hover:text-burgundy transition-colors">Case Studies</a></li>
                <li><a href="#contact" className="hover:text-burgundy transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-24 pt-12 border-t border-teal/5 flex justify-between items-center text-[10px] uppercase tracking-widest opacity-40">
            <div>© 2026 Scott Denotter</div>
            <div>Built with Architectural Precision</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
