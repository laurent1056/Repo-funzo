'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PageShell from '@/components/layout/PageShell';
import StepWizard from '@/components/wizard/StepWizard';
import { DAILY_STEPS } from '@/lib/constants';

type SaveState = 'editing' | 'saving' | 'saved';

export default function DailyCheckInPage() {
  const router = useRouter();
  const [saveState, setSaveState] = useState<SaveState>('editing');
  const [savedPriority, setSavedPriority] = useState('');

  const handleComplete = async (data: Record<string, string | number>) => {
    setSaveState('saving');

    const today = new Date().toISOString().split('T')[0];

    try {
      const res = await fetch('/api/entries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          date: today,
          energyLevel: data.energyLevel,
          meaningfulWin: data.meaningfulWin,
          frictionPoint: data.frictionPoint,
          letGo: data.letGo,
          tomorrowPriority: data.tomorrowPriority,
          familyNote: data.familyNote || '',
        }),
      });

      if (!res.ok) throw new Error('Save failed');

      setSavedPriority((data.tomorrowPriority as string) || '');
      setSaveState('saved');

      // Return home after a pause
      setTimeout(() => {
        router.push('/');
        router.refresh();
      }, 3000);
    } catch (err) {
      console.error('Failed to save:', err);
      setSaveState('editing');
    }
  };

  // Saved confirmation screen
  if (saveState === 'saved') {
    return (
      <PageShell>
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
          <p className="text-2xl font-serif text-ink mb-6">Saved.</p>
          {savedPriority && (
            <p className="text-ink-muted text-sm leading-relaxed max-w-sm">
              Tomorrow&rsquo;s priority:{' '}
              <span className="text-ink italic">&ldquo;{savedPriority}&rdquo;</span>
            </p>
          )}
          <p className="text-ink-muted/60 text-sm mt-8">See you tomorrow.</p>
        </div>
      </PageShell>
    );
  }

  // Saving state
  if (saveState === 'saving') {
    return (
      <PageShell>
        <div className="min-h-[70vh] flex items-center justify-center">
          <p className="text-ink-muted text-sm">Saving...</p>
        </div>
      </PageShell>
    );
  }

  // Wizard
  return (
    <PageShell>
      <StepWizard steps={DAILY_STEPS} onComplete={handleComplete} />
    </PageShell>
  );
}
