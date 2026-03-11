'use client';

interface WeekDotsProps {
  /** Array of 7 booleans — true = check-in completed */
  days: boolean[];
  labels: string[];
}

export default function WeekDots({ days, labels }: WeekDotsProps) {
  const completed = days.filter(Boolean).length;

  return (
    <div>
      <div className="flex items-center gap-2">
        {days.map((done, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <div
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                done ? 'bg-sage' : 'bg-warm-border'
              }`}
            />
            <span className="text-[10px] text-ink-muted/50 font-sans">
              {labels[i]}
            </span>
          </div>
        ))}
      </div>
      <p className="text-xs text-ink-muted/60 mt-2">
        {completed} of 7 days
      </p>
    </div>
  );
}
