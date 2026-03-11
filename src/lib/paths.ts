import path from 'path';

/** Root of the project */
const ROOT = process.cwd();

/** Content directory — the Markdown files */
export const CONTENT_DIR = path.join(ROOT, 'ceo-personal-os');

/** Data directory — app-managed JSON files */
export const DATA_DIR = path.join(ROOT, 'data');

/** Specific content paths */
export const NORTH_STAR_FILE = path.join(CONTENT_DIR, 'north_star.md');
export const PRINCIPLES_FILE = path.join(CONTENT_DIR, 'principles.md');
export const MEMORY_FILE = path.join(CONTENT_DIR, 'memory.md');

/** Review directories */
export const DAILY_DIR = path.join(CONTENT_DIR, 'reviews', 'daily');
export const WEEKLY_DIR = path.join(CONTENT_DIR, 'reviews', 'weekly');
export const QUARTERLY_DIR = path.join(CONTENT_DIR, 'reviews', 'quarterly');
export const ANNUAL_DIR = path.join(CONTENT_DIR, 'reviews', 'annual');

/** Data store files */
export const ENTRIES_FILE = path.join(DATA_DIR, 'entries.json');
export const SETTINGS_FILE = path.join(DATA_DIR, 'settings.json');
