import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageShell from '@/components/layout/PageShell';
import { getDailyEntry } from '@/lib/data-store';
import { format, parseISO } from 'date-fns';

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ date: string }>;
}

export default async function DailyEntryPage({ params }: Props) {
  const { date } = await params;
  const entry = getDailyEntry(date);

  if (!entry) {
    notFound();
  }

  const displayDate = format(parseISO(entry.date), 'EEEE, MMMM d, yyyy');

  const ENERGY_DESCRIPTORS: Record<number, string> = {
    1: 'Depleted',
    2: 'Very low',
    3: 'Low',
    4: 'Below baseline',
    5: 'Baseline',
    6: 'Decent',
    7: 'Good',
    8: 'Strong',
    9: 'Very strong',
    10: 'Fully charged',
  };

  return (
    <PageShell>
      {/* Back link */}
      <Link
        href="/"
        className="text-sm text-ink-muted hover:text-ink transition-colors mb-8 inline-block"
      >
        &larr; Home
      </Link>

      {/* Header */}
      <div className="mb-10">
        <h1 className="font-serif text-2xl text-ink mb-1">Daily Check-In</h1>
        <p className="text-sm text-ink-muted">{displayDate}</p>
      </div>

      {/* Energy */}
      <div className="mb-8">
        <h2 className="text-xs font-sans font-medium text-ink-muted/60 uppercase tracking-wider mb-2">
          Energy Level
        </h2>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-serif text-ink">
            {entry.energyLevel}
          </span>
          <span className="text-sm text-ink-muted">/10</span>
          <span className="text-sm text-ink-muted ml-2">
            &mdash; {ENERGY_DESCRIPTORS[entry.energyLevel] || ''}
          </span>
        </div>
      </div>

      <hr className="border-warm-border/60 my-8" />

      {/* Sections */}
      <div className="space-y-8">
        <Section
          title="One meaningful win"
          content={entry.meaningfulWin}
        />
        <Section
          title="One friction point"
          content={entry.frictionPoint}
        />
        <Section
          title="One thing to let go of"
          content={entry.letGo}
        />
        <Section
          title="One priority for tomorrow"
          content={entry.tomorrowPriority}
        />
        {entry.familyNote && (
          <Section
            title="Family"
            content={entry.familyNote}
          />
        )}
      </div>

      {/* Timestamp */}
      <p className="text-xs text-ink-muted/40 mt-12">
        Saved {format(parseISO(entry.createdAt), "MMM d, yyyy 'at' h:mm a")}
      </p>
    </PageShell>
  );
}

function Section({ title, content }: { title: string; content: string }) {
  return (
    <div>
      <h2 className="text-xs font-sans font-medium text-ink-muted/60 uppercase tracking-wider mb-2">
        {title}
      </h2>
      <p className="text-ink leading-relaxed whitespace-pre-wrap">{content}</p>
    </div>
  );
}
