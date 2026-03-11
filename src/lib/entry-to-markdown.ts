import { DailyEntry } from './types';

/** Convert a DailyEntry into a formatted Markdown string matching the template style */
export function dailyEntryToMarkdown(entry: DailyEntry): string {
  const lines = [
    '# Daily Check-In',
    '',
    `**Date:** ${entry.date}`,
    '',
    `**Energy Level (1-10):** ${entry.energyLevel}/10`,
    '',
    '---',
    '',
    '**One meaningful win today:**',
    '',
    entry.meaningfulWin,
    '',
    '---',
    '',
    '**One friction point:**',
    '',
    entry.frictionPoint,
    '',
    '---',
    '',
    '**One thing to let go of:**',
    '',
    entry.letGo,
    '',
    '---',
    '',
    '**One priority for tomorrow:**',
    '',
    entry.tomorrowPriority,
    '',
    '---',
    '',
    '**How you showed up for your family today:**',
    '',
    entry.familyNote || '*(skipped)*',
    '',
    '---',
    '',
    `*Saved ${entry.createdAt}*`,
    '',
  ];

  return lines.join('\n');
}
