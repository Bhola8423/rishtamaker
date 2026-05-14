"use client";

import Link from "next/link";
import Image from "next/image";
import { siteContent } from "@/constants/site-content";
import { NavigationSidebar } from "@/components/shared/navigation-sidebar";
import { usePathname } from "next/navigation";

function MenuIcon() {
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#b11e24]/15 bg-white/85 text-[#b11e24] shadow-sm backdrop-blur transition-transform hover:scale-105">
      <span className="flex flex-col gap-1">
        <span className="block h-0.5 w-4 rounded-full bg-current" />
        <span className="block h-0.5 w-4 rounded-full bg-current" />
        <span className="block h-0.5 w-4 rounded-full bg-current" />
      </span>
    </span>
  );
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-[100] w-full px-4 pt-4 sm:px-6 lg:px-8 pb-4">
      <header className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border border-white/60 bg-white/80 px-4 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-md transition-all hover:bg-white/95">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0 group">
          <Image
            src="/images/main_logo.png"
            alt={siteContent.brand.name}
            width={240}
            height={64}
            className="h-12 sm:h-14 lg:h-16 w-auto object-contain group-hover:scale-105 transition-transform"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1.5">
          {siteContent.navigation.map((item) => {
            const isActive = pathname === item.href || (pathname === '/' && item.href === '/');
            
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (item.href.includes('#') && pathname === '/') {
                    const targetId = item.href.split('#')[1];
                    const element = document.getElementById(targetId);
                    if (element) {
                      e.preventDefault();
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      window.history.pushState({}, '', `/#${targetId}`);
                    }
                  }
                }}
                className={`relative px-3 py-2 text-[0.95rem] font-[family-name:var(--font-body)] font-medium tracking-normal transition-all duration-300 group overflow-hidden rounded-full ${
                  isActive && !item.href.includes('#')
                  ? "text-[#b11e24] bg-red-50/80 shadow-[inset_0_1px_3px_rgba(177,30,36,0.05)]" 
                  : "text-slate-700 hover:text-[#b11e24]"
                }`}
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  {item.label}
                </span>
                {/* Hover background bubble effect */}
                <span className={`absolute inset-0 bg-red-50/80 rounded-full scale-0 transition-transform duration-300 ease-out origin-center ${!isActive ? 'group-hover:scale-100' : ''}`} />
              </Link>
            );
          })}
        </nav>

        {/* CTA & Mobile Menu */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/#builder"
            onClick={(e) => {
              if (pathname === '/') {
                const element = document.getElementById('builder');
                if (element) {
                  e.preventDefault();
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  window.history.pushState({}, '', '/#builder');
                }
              }
            }}
            className="relative hidden sm:inline-flex h-10 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#b11e24] to-[#8b1c31] px-6 text-sm font-bold text-white shadow-[0_10px_20px_rgba(177,30,36,0.25)] transition-all hover:scale-105 hover:shadow-[0_15px_30px_rgba(177,30,36,0.35)] group"
          >
            <span className="relative z-10 flex items-center gap-2">
              Create Biodata
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            {/* Shine effect */}
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
              <div className="relative h-full w-8 bg-white/20" />
            </div>
          </Link>
          <div className="xl:hidden">
            <NavigationSidebar>
              <button type="button" aria-label="Open navigation" className="block cursor-pointer">
                <MenuIcon />
              </button>
            </NavigationSidebar>
          </div>
        </div>
      </header>
    </div>
  );
}
