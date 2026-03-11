import Link from 'next/link';
import PageShell from '@/components/layout/PageShell';
import WeekDots from '@/components/display/WeekDots';
import EnergySparkline from '@/components/display/EnergySparkline';
import { readMarkdownFile, extractNorthStar } from '@/lib/markdown';
import { getDailyEntry, getDailyEntriesInRange, readSettings } from '@/lib/data-store';
import { NORTH_STAR_FILE } from '@/lib/paths';
import {
  today,
  formatDisplayDate,
  weekDates,
  toDateString,
  dayAbbrev,
} from '@/lib/dates';
import { getTimeOfDay, GREETINGS } from '@/lib/constants';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  const now = new Date();
  const todayStr = today();
  const greeting = GREETINGS[getTimeOfDay(now.getHours())];
  const displayDate = formatDisplayDate(now);

  // Read North Star
  const northStarContent = readMarkdownFile(NORTH_STAR_FILE);
  const northStar = extractNorthStar(northStarContent);

  // Check if today's entry exists
  const todayEntry = getDailyEntry(todayStr);
  const hasCheckedInToday = todayEntry !== null;

  // Get this week's data
  const weekDays = weekDates(now);
  const weekLabels = weekDays.map((d) => dayAbbrev(d));
  const weekDateStrings = weekDays.map((d) => toDateString(d));

  const weekStart = weekDateStrings[0];
  const weekEndStr = weekDateStrings[6];
  const weekEntries = getDailyEntriesInRange(weekStart, weekEndStr);

  // Map week entries to dots and energy values
  const weekDotStatus = weekDateStrings.map(
    (dateStr) => weekEntries.some((e) => e.date === dateStr)
  );
  const weekEnergyValues = weekDateStrings.map((dateStr) => {
    const entry = weekEntries.find((e) => e.date === dateStr);
    return entry ? entry.energyLevel : null;
  });

  // Calculate average energy
  const energyValues = weekEnergyValues.filter((v): v is number => v !== null);
  const avgEnergy =
    energyValues.length > 0
      ? (energyValues.reduce((a, b) => a + b, 0) / energyValues.length).toFixed(1)
      : null;

  // Settings for first-launch
  const settings = readSettings();

  return (
    <PageShell>
      <div className="min-h-[80vh] flex flex-col">
        {/* Greeting */}
        <div className="mb-12">
          <h1 className="font-serif text-2xl text-ink mb-1">{greeting}</h1>
          <p className="text-sm text-ink-muted">{displayDate}</p>
        </div>

        {/* North Star */}
        <div className="card mb-12">
          <p className="font-serif text-lg text-ink leading-relaxed italic">
            &ldquo;{northStar}&rdquo;
          </p>
        </div>

        {/* Primary Action */}
        {hasCheckedInToday ? (
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sage mb-3">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-sm font-medium">
                Today&apos;s check-in is done.
              </span>
            </div>
            {todayEntry && (
              <p className="text-sm text-ink-muted">
                Energy: {todayEntry.energyLevel}/10
                {todayEntry.tomorrowPriority && (
                  <>
                    {' '}
                    &middot; Tomorrow:{' '}
                    <span className="italic">
                      &ldquo;{todayEntry.tomorrowPriority}&rdquo;
                    </span>
                  </>
                )}
              </p>
            )}
            <Link
              href={`/daily/${todayStr}`}
              className="text-xs text-ink-muted/60 hover:text-ink-muted mt-2 inline-block"
            >
              Review today&apos;s entry
            </Link>
          </div>
        ) : (
          <div className="text-center mb-12">
            <Link href="/daily" className="btn-primary inline-block text-base px-10 py-4">
              {settings.hasCompletedFirstCheckin
                ? 'Start Today\u2019s Check-In'
                : 'Begin Your First Check-In'}
            </Link>
          </div>
        )}

        {/* Divider */}
        <hr className="border-warm-border/60 mb-8" />

        {/* Secondary Info */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
          {/* This week dots */}
          <div>
            <h3 className="text-xs font-sans font-medium text-ink-muted/60 uppercase tracking-wider mb-3">
              This week
            </h3>
            <WeekDots days={weekDotStatus} labels={weekLabels} />
          </div>

          {/* Energy trend */}
          <div>
            <h3 className="text-xs font-sans font-medium text-ink-muted/60 uppercase tracking-wider mb-3">
              Energy trend
            </h3>
            <EnergySparkline values={weekEnergyValues} labels={weekLabels} />
            {avgEnergy && (
              <p className="text-xs text-ink-muted/60 mt-2">avg: {avgEnergy}</p>
            )}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
