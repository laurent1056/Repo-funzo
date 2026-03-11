'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  label: string;
  href: string;
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

const NAV_GROUPS: NavGroup[] = [
  {
    title: 'RHYTHM',
    items: [
      { label: 'Daily', href: '/daily' },
      { label: 'Weekly', href: '/weekly' },
      { label: 'Quarterly', href: '/quarterly' },
      { label: 'Annual', href: '/annual' },
    ],
  },
  {
    title: 'THINK',
    items: [
      { label: 'Frameworks', href: '/frameworks' },
      { label: 'Interviews', href: '/interviews' },
    ],
  },
  {
    title: 'AIM',
    items: [
      { label: 'Goals', href: '/goals' },
      { label: 'North Star', href: '/north-star' },
      { label: 'Principles', href: '/principles' },
    ],
  },
  {
    title: 'REMEMBER',
    items: [
      { label: 'Memory', href: '/memory' },
      { label: 'History', href: '/history' },
      { label: 'Uploads', href: '/uploads' },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-60 min-h-screen border-r border-warm-border bg-surface px-5 py-8 flex-shrink-0">
      {/* Home link */}
      <Link
        href="/"
        className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
          pathname === '/'
            ? 'text-ink bg-warm-bg/60'
            : 'text-ink-muted hover:text-ink hover:bg-warm-bg/40'
        }`}
      >
        <span
          className={`w-2 h-2 rounded-full ${
            pathname === '/' ? 'bg-sage' : 'bg-warm-border'
          }`}
        />
        Home
      </Link>

      {/* Nav groups */}
      <nav className="mt-8 space-y-7">
        {NAV_GROUPS.map((group) => (
          <div key={group.title}>
            <h3 className="px-3 text-[11px] font-sans font-semibold tracking-widest text-ink-muted/60 uppercase">
              {group.title}
            </h3>
            <ul className="mt-2 space-y-0.5">
              {group.items.map((item) => {
                const isActive = pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-sm transition-colors ${
                        isActive
                          ? 'text-ink font-medium bg-warm-bg/60'
                          : 'text-ink-muted hover:text-ink hover:bg-warm-bg/40'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          isActive ? 'bg-sage' : 'bg-warm-border'
                        }`}
                      />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
