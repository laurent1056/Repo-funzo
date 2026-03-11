'use client';

import { useRef, useEffect } from 'react';

interface AutoTextAreaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function AutoTextArea({
  value,
  onChange,
  placeholder = 'Start writing...',
}: AutoTextAreaProps) {
  const ref = useRef<HTMLTextAreaElement>(null);

  // Auto-grow the textarea
  useEffect(() => {
    if (ref.current) {
      ref.current.style.height = 'auto';
      ref.current.style.height = `${Math.max(ref.current.scrollHeight, 120)}px`;
    }
  }, [value]);

  // Auto-focus when mounted
  useEffect(() => {
    const timer = setTimeout(() => {
      ref.current?.focus();
    }, 300); // wait for slide transition
    return () => clearTimeout(timer);
  }, []);

  return (
    <textarea
      ref={ref}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={4}
      className="field-textarea text-base leading-relaxed"
    />
  );
}
