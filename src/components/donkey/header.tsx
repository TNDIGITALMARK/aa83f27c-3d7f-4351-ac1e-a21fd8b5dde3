'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-[hsl(var(--background))] border-b border-[hsl(var(--border))] shadow-sm">
      <div className="container max-w-[1200px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path
                  d="M12 3C9.5 3 7 4 7 6C7 6.5 7.2 7 7.5 7.3C6.6 7.8 6 8.8 6 10C6 11.7 7.3 13 9 13H15C16.7 13 18 11.7 18 10C18 8.8 17.4 7.8 16.5 7.3C16.8 7 17 6.5 17 6C17 4 14.5 3 12 3Z"
                  fill="currentColor"
                />
                <path
                  d="M9 13V19C9 19.6 9.4 20 10 20C10.6 20 11 19.6 11 19V13H9Z"
                  fill="currentColor"
                />
                <path
                  d="M13 13V19C13 19.6 13.4 20 14 20C14.6 20 15 19.6 15 19V13H13Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <span className="text-xl font-semibold text-[hsl(var(--primary))]" style={{ fontFamily: 'var(--font-heading)' }}>
              Gentle Hoof Haven
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`text-base font-medium transition-colors ${
                isActive('/')
                  ? 'text-[hsl(var(--primary))] font-semibold'
                  : 'text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))]'
              }`}
            >
              Home
            </Link>
            <Link
              href="/donkeys"
              className={`text-base font-medium transition-colors ${
                isActive('/donkeys')
                  ? 'text-[hsl(var(--primary))] font-semibold'
                  : 'text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))]'
              }`}
            >
              Meet Our Donkeys
            </Link>
            <Link
              href="/learn"
              className={`text-base font-medium transition-colors ${
                isActive('/learn')
                  ? 'text-[hsl(var(--primary))] font-semibold'
                  : 'text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))]'
              }`}
            >
              Learn
            </Link>
            <Link
              href="/support"
              className="btn-pill bg-[hsl(var(--primary))] text-white hover:opacity-90 transition-all"
            >
              Support Us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-[hsl(var(--foreground))]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
