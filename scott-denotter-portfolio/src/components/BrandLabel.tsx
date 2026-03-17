import { useEffect, useState } from 'react';

type Section = 'hero' | 'philosophy' | 'case-studies';

export default function BrandLabel() {
  const [activeSection, setActiveSection] = useState<Section>('hero');

  useEffect(() => {
    const ids: Section[] = ['hero', 'philosophy', 'case-studies'];

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry whose top edge is closest to the top of the viewport
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id as Section);
        }
      },
      {
        // Fire when the top ~20% of the section enters the viewport
        rootMargin: '0px 0px -80% 0px',
        threshold: 0,
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Parchment on the dark teal Philosophy section, teal everywhere else
  const colorClass =
    activeSection === 'philosophy' ? 'text-parchment' : 'text-teal';

  return (
    <div className={`fixed top-6 left-6 md:left-12 z-[60] pointer-events-none select-none transition-colors duration-500 ${colorClass}`}>
      <div className="text-2xl md:text-3xl font-serif font-bold tracking-tighter leading-none">
        Scott Denotter
      </div>
      <div className="text-xs md:text-sm font-serif italic opacity-70 mt-1 tracking-normal">
        I build stable, simple software.
      </div>
    </div>
  );
}
