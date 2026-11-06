'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';
import { assetPath, siteLinks } from '@/lib/site';

const sections = [
  ['#features-section', 'Learning'],
  ['#hackathons-section', 'Hackathons'],
  ['#testimonials-section', 'Student voices'],
] as const;

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 py-4">
      <nav aria-label="Main navigation" className="container mx-auto rounded-3xl border border-slate-700 bg-slate-950/95 px-4 sm:px-6">
        <div className="flex min-h-16 items-center justify-between gap-3">
          <a href="#hero-section" onClick={() => setIsMenuOpen(false)} aria-label="Hoobit home" className="shrink-0 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400">
            <Image src={assetPath('/logo.png')} alt="Hoobit" width={120} height={40} />
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {sections.map(([href, label]) => <a key={href} href={href} className="rounded py-3 text-sm text-slate-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400">{label}</a>)}
          </div>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" className="text-slate-200 hover:bg-slate-800 hover:text-white"><a href={siteLinks.learners}>Sign up</a></Button>
            <Button variant="ghost" size="icon" aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={isMenuOpen} aria-controls="mobile-navigation" className="md:hidden text-white hover:bg-slate-800 hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </Button>
          </div>
        </div>
        {isMenuOpen && <div id="mobile-navigation" className="flex flex-col border-t border-slate-700 py-3 md:hidden">
          {sections.map(([href, label]) => <a key={href} href={href} onClick={() => setIsMenuOpen(false)} className="rounded px-3 py-3 text-slate-200 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400">{label}</a>)}
        </div>}
      </nav>
    </header>
  );
}
