'use client';

interface RatingSelectorProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

const LABELS: Record<number, string> = {
  1: 'depleted',
  5: 'baseline',
  10: 'fully charged',
};

export default function RatingSelector({
  value,
  onChange,
  min = 1,
  max = 10,
}: RatingSelectorProps) {
  const range = Array.from({ length: max - min + 1 }, (_, i) => min + i);

  return (
    <div className="space-y-4">
      {/* Rating circles */}
      <div className="flex items-center justify-between gap-1 sm:gap-2">
        {range.map((n) => {
          const isSelected = n === value;
          return (
            <button
              key={n}
              type="button"
              onClick={() => onChange(n)}
              className={`
                w-9 h-9 sm:w-10 sm:h-10 rounded-full
                flex items-center justify-center
                text-sm font-sans font-medium
                transition-all duration-200
                ${
                  isSelected
                    ? 'bg-sage text-white scale-110 shadow-sm'
                    : 'border-2 border-warm-border text-ink-muted hover:border-sage/40 hover:text-ink'
                }
              `}
              aria-label={`Energy level ${n}`}
            >
              {n}
            </button>
          );
        })}
      </div>

      {/* Anchor labels */}
      <div className="flex justify-between px-1">
        {range.map((n) => (
          <span
            key={n}
            className={`text-xs text-ink-muted/60 w-9 sm:w-10 text-center ${
              LABELS[n] ? '' : 'invisible'
            }`}
          >
            {LABELS[n] || '.'}
          </span>
        ))}
      </div>
    </div>
  );
}
