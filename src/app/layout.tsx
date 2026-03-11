import type { Metadata } from 'next';
import Sidebar from '@/components/layout/Sidebar';
import './globals.css';

export const metadata: Metadata = {
  title: 'CEO Personal OS',
  description: 'A private personal operating system for clarity, reflection, and intentional living.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-surface">
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
