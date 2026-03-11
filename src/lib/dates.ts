import { format, startOfWeek, endOfWeek, subDays } from 'date-fns';

/** Format a date as YYYY-MM-DD */
export function toDateString(date: Date): string {
  return format(date, 'yyyy-MM-dd');
}

/** Get today's date string */
export function today(): string {
  return toDateString(new Date());
}

/** Format a date for display: "Saturday, February 8, 2026" */
export function formatDisplayDate(date: Date): string {
  return format(date, 'EEEE, MMMM d, yyyy');
}

/** Get the start of the current week (Monday) */
export function weekStart(date: Date): Date {
  return startOfWeek(date, { weekStartsOn: 1 });
}

/** Get the end of the current week (Sunday) */
export function weekEnd(date: Date): Date {
  return endOfWeek(date, { weekStartsOn: 1 });
}

/** Get an array of dates for the current week (Mon-Sun) */
export function weekDates(date: Date): Date[] {
  const start = weekStart(date);
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(start);
    d.setDate(d.getDate() + i);
    return d;
  });
}

/** Get day abbreviation: "Mon", "Tue", etc. */
export function dayAbbrev(date: Date): string {
  return format(date, 'EEE');
}
