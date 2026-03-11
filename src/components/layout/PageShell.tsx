import { ReactNode } from 'react';

interface PageShellProps {
  children: ReactNode;
  /** Optional: center content with max-width */
  centered?: boolean;
}

export default function PageShell({ children, centered = true }: PageShellProps) {
  return (
    <main className="flex-1 min-h-screen py-12 px-6 md:px-12">
      <div className={centered ? 'max-w-content mx-auto' : ''}>
        {children}
      </div>
    </main>
  );
}
