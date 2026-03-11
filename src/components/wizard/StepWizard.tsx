'use client';

import { useState, useCallback } from 'react';
import { WizardStep } from '@/lib/types';
import RatingSelector from '@/components/fields/RatingSelector';
import AutoTextArea from '@/components/fields/AutoTextArea';

interface StepWizardProps {
  steps: WizardStep[];
  onComplete: (data: Record<string, string | number>) => void;
  /** Text for the final save button */
  saveLabel?: string;
}

export default function StepWizard({
  steps,
  onComplete,
  saveLabel = 'Save & Done',
}: StepWizardProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<Record<string, string | number>>({});
  const [direction, setDirection] = useState<'forward' | 'back'>('forward');
  const [isAnimating, setIsAnimating] = useState(false);

  const step = steps[currentStep];
  const isFirst = currentStep === 0;
  const isLast = currentStep === steps.length - 1;
  const value = data[step.fieldKey] ?? (step.type === 'rating' ? 0 : '');

  const updateField = useCallback(
    (val: string | number) => {
      setData((prev) => ({ ...prev, [step.fieldKey]: val }));
    },
    [step.fieldKey]
  );

  const canProceed =
    step.optional || (step.type === 'rating' ? (value as number) > 0 : (value as string).trim().length > 0);

  const animateTransition = (dir: 'forward' | 'back', callback: () => void) => {
    setDirection(dir);
    setIsAnimating(true);
    setTimeout(() => {
      callback();
      setIsAnimating(false);
    }, 200);
  };

  const goNext = () => {
    if (isLast) {
      onComplete(data);
      return;
    }
    animateTransition('forward', () => setCurrentStep((s) => s + 1));
  };

  const goBack = () => {
    if (isFirst) return;
    animateTransition('back', () => setCurrentStep((s) => s - 1));
  };

  const skipAndFinish = () => {
    onComplete(data);
  };

  return (
    <div className="min-h-[70vh] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-16">
        <h2 className="text-sm font-sans font-medium text-ink-muted tracking-wide">
          Daily Check-In
        </h2>
        <span className="text-sm font-sans text-ink-muted/60">
          {currentStep + 1} of {steps.length}
        </span>
      </div>

      {/* Question area */}
      <div className="flex-1 flex flex-col justify-center">
        <div
          className={`transition-all duration-200 ${
            isAnimating
              ? direction === 'forward'
                ? '-translate-x-4 opacity-0'
                : 'translate-x-4 opacity-0'
              : 'translate-x-0 opacity-100'
          }`}
        >
          {/* Question */}
          <h1 className="font-serif text-question-lg text-ink mb-3">
            {step.question}
          </h1>

          {/* Hint */}
          <p className="text-sm text-ink-muted italic mb-8 leading-relaxed">
            {step.hint}
          </p>

          {/* Input */}
          {step.type === 'rating' ? (
            <RatingSelector
              value={value as number}
              onChange={updateField}
            />
          ) : (
            <AutoTextArea
              value={value as string}
              onChange={updateField}
            />
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 mt-auto">
        <div>
          {!isFirst && (
            <button
              type="button"
              onClick={goBack}
              className="btn-ghost"
            >
              &larr; Back
            </button>
          )}
        </div>

        <div className="flex items-center gap-3">
          {isLast && step.optional && (
            <button
              type="button"
              onClick={skipAndFinish}
              className="btn-ghost"
            >
              Skip
            </button>
          )}
          <button
            type="button"
            onClick={goNext}
            disabled={!canProceed && !step.optional}
            className={`btn-primary ${
              !canProceed && !step.optional
                ? 'opacity-40 cursor-not-allowed'
                : ''
            }`}
          >
            {isLast ? saveLabel : 'Next \u2192'}
          </button>
        </div>
      </div>
    </div>
  );
}
