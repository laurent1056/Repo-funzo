import fs from 'fs';
import path from 'path';
import { DailyEntry, EntriesStore, Settings } from './types';
import { ENTRIES_FILE, SETTINGS_FILE, DATA_DIR } from './paths';

/** Ensure the data directory and files exist */
function ensureDataDir(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

/** Read the entries store, creating it if it doesn't exist */
export function readEntries(): EntriesStore {
  ensureDataDir();
  if (!fs.existsSync(ENTRIES_FILE)) {
    const empty: EntriesStore = { daily: [] };
    fs.writeFileSync(ENTRIES_FILE, JSON.stringify(empty, null, 2));
    return empty;
  }
  const raw = fs.readFileSync(ENTRIES_FILE, 'utf-8');
  return JSON.parse(raw) as EntriesStore;
}

/** Write the entries store atomically */
function writeEntries(store: EntriesStore): void {
  ensureDataDir();
  const tmpFile = ENTRIES_FILE + '.tmp';
  fs.writeFileSync(tmpFile, JSON.stringify(store, null, 2));
  fs.renameSync(tmpFile, ENTRIES_FILE);
}

/** Add a daily entry. Returns the saved entry. */
export function saveDailyEntry(entry: DailyEntry): DailyEntry {
  const store = readEntries();

  // Replace if same date exists, otherwise append
  const existingIndex = store.daily.findIndex((e) => e.date === entry.date);
  if (existingIndex >= 0) {
    store.daily[existingIndex] = entry;
  } else {
    store.daily.push(entry);
  }

  // Keep sorted by date descending
  store.daily.sort((a, b) => b.date.localeCompare(a.date));

  writeEntries(store);
  return entry;
}

/** Get a daily entry by date (YYYY-MM-DD) */
export function getDailyEntry(date: string): DailyEntry | null {
  const store = readEntries();
  return store.daily.find((e) => e.date === date) ?? null;
}

/** Get daily entries for a date range (inclusive) */
export function getDailyEntriesInRange(
  startDate: string,
  endDate: string
): DailyEntry[] {
  const store = readEntries();
  return store.daily.filter(
    (e) => e.date >= startDate && e.date <= endDate
  );
}

/** Get the N most recent daily entries */
export function getRecentDailyEntries(count: number): DailyEntry[] {
  const store = readEntries();
  return store.daily.slice(0, count);
}

/** Read settings, creating defaults if needed */
export function readSettings(): Settings {
  ensureDataDir();
  if (!fs.existsSync(SETTINGS_FILE)) {
    const defaults: Settings = { hasCompletedFirstCheckin: false };
    fs.writeFileSync(SETTINGS_FILE, JSON.stringify(defaults, null, 2));
    return defaults;
  }
  const raw = fs.readFileSync(SETTINGS_FILE, 'utf-8');
  return JSON.parse(raw) as Settings;
}

/** Update settings */
export function updateSettings(updates: Partial<Settings>): Settings {
  const current = readSettings();
  const updated = { ...current, ...updates };
  const tmpFile = SETTINGS_FILE + '.tmp';
  fs.writeFileSync(tmpFile, JSON.stringify(updated, null, 2));
  fs.renameSync(tmpFile, SETTINGS_FILE);
  return updated;
}
