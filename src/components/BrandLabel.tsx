interface BrandLabelProps {
  colorClass?: string;
}

export default function BrandLabel({ colorClass = 'text-teal' }: BrandLabelProps) {
  return (
    <div className={`absolute top-6 left-6 md:left-12 z-[60] pointer-events-none select-none ${colorClass}`}>
      <div className="text-2xl md:text-3xl font-serif font-bold tracking-tighter leading-none">
        Scott Denotter
      </div>
      <div className="text-xs md:text-sm font-serif italic opacity-70 mt-1 tracking-normal">
        I build stable, simple software.
      </div>
    </div>
  );
}
