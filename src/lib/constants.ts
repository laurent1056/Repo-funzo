import { WizardStep, TimeOfDay } from './types';

/** Daily check-in wizard steps — one question at a time */
export const DAILY_STEPS: WizardStep[] = [
  {
    id: 'energy',
    question: "How's your energy today?",
    hint: '1 = depleted, barely functional. 5 = baseline, getting through. 10 = fully charged, sharp and present.',
    type: 'rating',
    fieldKey: 'energyLevel',
  },
  {
    id: 'win',
    question: 'One meaningful win today.',
    hint: "Not your biggest accomplishment — the thing that actually mattered. Could be a conversation, a decision, a moment of presence.",
    type: 'textarea',
    fieldKey: 'meaningfulWin',
  },
  {
    id: 'friction',
    question: 'One friction point.',
    hint: 'What created drag today? A person, a situation, a feeling, a pattern. Name it.',
    type: 'textarea',
    fieldKey: 'frictionPoint',
  },
  {
    id: 'let-go',
    question: 'One thing to let go of.',
    hint: "What are you carrying that isn't serving you? A worry, a resentment, an expectation, a to-do that doesn't actually matter.",
    type: 'textarea',
    fieldKey: 'letGo',
  },
  {
    id: 'priority',
    question: 'One priority for tomorrow.',
    hint: 'If tomorrow only has room for one important thing, what is it?',
    type: 'textarea',
    fieldKey: 'tomorrowPriority',
  },
  {
    id: 'family',
    question: 'How you showed up for your family today.',
    hint: "This one's optional. Skip it if you want.",
    type: 'textarea',
    fieldKey: 'familyNote',
    optional: true,
  },
];

/** Greeting text based on time of day */
export const GREETINGS: Record<TimeOfDay, string> = {
  morning: 'Good morning.',
  afternoon: 'Good afternoon.',
  evening: 'Good evening.',
  late: 'Still up?',
};

/** Determine time of day from hour */
export function getTimeOfDay(hour: number): TimeOfDay {
  if (hour >= 5 && hour < 12) return 'morning';
  if (hour >= 12 && hour < 17) return 'afternoon';
  if (hour >= 17 && hour < 21) return 'evening';
  return 'late';
}
