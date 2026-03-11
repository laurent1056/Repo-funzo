'use client';

interface EnergySparklineProps {
  values: (number | null)[]; // null = no entry that day
  labels: string[]; // day abbreviations
}

export default function EnergySparkline({ values, labels }: EnergySparklineProps) {
  const maxHeight = 32; // px

  return (
    <div className="flex items-end gap-1.5">
      {values.map((val, i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          <div
            className={`w-5 rounded-sm transition-all ${
              val !== null
                ? 'bg-sage/60'
                : 'bg-warm-border/40'
            }`}
            style={{
              height: val !== null ? `${Math.max((val / 10) * maxHeight, 4)}px` : '4px',
            }}
          />
          <span className="text-[10px] text-ink-muted/50 font-sans">
            {labels[i]}
          </span>
        </div>
      ))}
    </div>
  );
}
