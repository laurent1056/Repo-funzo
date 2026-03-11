import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { DailyEntry } from '@/lib/types';
import { saveDailyEntry, getRecentDailyEntries, getDailyEntry } from '@/lib/data-store';
import { updateSettings } from '@/lib/data-store';
import { dailyEntryToMarkdown } from '@/lib/entry-to-markdown';
import { DAILY_DIR } from '@/lib/paths';

/** POST /api/entries — Save a daily check-in */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const entry: DailyEntry = {
      id: `daily-${body.date}`,
      date: body.date,
      energyLevel: body.energyLevel,
      meaningfulWin: body.meaningfulWin || '',
      frictionPoint: body.frictionPoint || '',
      letGo: body.letGo || '',
      tomorrowPriority: body.tomorrowPriority || '',
      familyNote: body.familyNote || '',
      createdAt: new Date().toISOString(),
    };

    // Dual-write: save to JSON store
    saveDailyEntry(entry);

    // Dual-write: save as Markdown file
    const mdContent = dailyEntryToMarkdown(entry);
    const mdPath = path.join(DAILY_DIR, `${entry.date}.md`);
    fs.writeFileSync(mdPath, mdContent);

    // Mark first check-in complete
    updateSettings({ hasCompletedFirstCheckin: true });

    return NextResponse.json({ success: true, entry });
  } catch (error) {
    console.error('Failed to save entry:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to save entry' },
      { status: 500 }
    );
  }
}

/** GET /api/entries?date=YYYY-MM-DD or ?recent=N */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');
    const recent = searchParams.get('recent');

    if (date) {
      const entry = getDailyEntry(date);
      return NextResponse.json({ entry });
    }

    if (recent) {
      const entries = getRecentDailyEntries(parseInt(recent, 10));
      return NextResponse.json({ entries });
    }

    // Default: return last 30 entries
    const entries = getRecentDailyEntries(30);
    return NextResponse.json({ entries });
  } catch (error) {
    console.error('Failed to read entries:', error);
    return NextResponse.json(
      { entries: [], error: 'Failed to read entries' },
      { status: 500 }
    );
  }
}
