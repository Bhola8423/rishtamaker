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
        <nav className="hidden lg:flex items-center gap-1">
          {siteContent.navigation.map((item) => {
            // Because our URLs can be /#builder or /#templates
            // We want to make sure the active state highlights properly
            // but Next.js usePathname only returns path without hash.
            // So we'll just match exact paths.
            const isActive = pathname === item.href || (pathname === '/' && item.href === '/');
            
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`rounded-full px-3.5 py-2 text-[0.9rem] font-medium transition-all ${
                  isActive && !item.href.includes('#')
                  ? "bg-[#b11e24]/10 text-[#b11e24]" 
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA & Mobile Menu */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/#builder"
            className="hidden sm:inline-flex h-10 items-center justify-center rounded-full bg-[#aa1d1f] px-6 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(170,29,31,0.2)] transition-all hover:scale-105 hover:bg-[#931719]"
          >
            Create Biodata
          </Link>
          <div className="lg:hidden">
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
