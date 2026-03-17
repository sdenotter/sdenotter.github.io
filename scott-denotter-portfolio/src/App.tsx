/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import BrandLabel from './components/BrandLabel';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen selection:bg-burgundy selection:text-parchment">
      {/* Fixed hero background — image stays pinned, text scrolls away */}
      <div className="fixed inset-0 -z-20">
        <picture>
          <source media="(max-width: 768px)" srcSet="/design/images/mobile.png" />
          <img
            src="/design/images/Desktop.png"
            alt=""
            className="w-full h-full object-cover object-bottom opacity-50 mix-blend-multiply"
          />
        </picture>
      </div>

      {/* Grain Overlay */}
      <div className="grain-overlay" />
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-burgundy z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      <BrandLabel />
      
      <main>
        <Hero />
        <Philosophy />
        <CaseStudies />
      </main>

      <Footer />
    </div>
  );
}

