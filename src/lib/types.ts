/** A single daily check-in entry */
export interface DailyEntry {
  id: string;
  date: string; // YYYY-MM-DD
  energyLevel: number; // 1-10
  meaningfulWin: string;
  frictionPoint: string;
  letGo: string;
  tomorrowPriority: string;
  familyNote: string; // may be empty
  createdAt: string; // ISO datetime
}

/** The shape of data/entries.json */
export interface EntriesStore {
  daily: DailyEntry[];
}

/** The shape of data/settings.json */
export interface Settings {
  hasCompletedFirstCheckin: boolean;
}

/** A step in the check-in wizard */
export interface WizardStep {
  id: string;
  question: string;
  hint: string;
  type: 'rating' | 'textarea';
  fieldKey: keyof Pick<
    DailyEntry,
    'energyLevel' | 'meaningfulWin' | 'frictionPoint' | 'letGo' | 'tomorrowPriority' | 'familyNote'
  >;
  optional?: boolean;
}

/** Time-of-day for greeting */
export type TimeOfDay = 'morning' | 'afternoon' | 'evening' | 'late';
