"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { siteContent } from "@/constants/site-content";

export function NavigationSidebar({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  // Close sidebar on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const seoLinks = [
    "Marriage Biodata Maker",
    "Marriage Biodata Builder",
    "Biodata For Marriage Online",
    "Create Marriage Biodata",
    "Biodata Maker For Matrimony",
    "Shaadi Biodata Maker",
    "Free Marriage Biodata Format",
  ];

  return (
    <>
      <div onClick={() => setIsOpen(true)}>
        {children}
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-[#350a14]/60 backdrop-blur-sm z-[100] transition-opacity animate-in fade-in duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Panel */}
      <div 
        className={`fixed inset-y-0 right-0 z-[110] w-full max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <Image
              src="/images/main_logo.png"
              alt="RishtaMaker"
              width={200}
              height={48}
              className="h-12 w-auto object-contain"
            />
          </Link>
          <button 
            type="button" 
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-800 transition cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
          {/* Main Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Menu</h4>
            <nav className="flex flex-col gap-3">
              {siteContent.navigation.map((item) => (
                <Link 
                  key={item.label} 
                  href={item.href}
                  onClick={(e) => {
                    setIsOpen(false);
                    if (item.href.includes('#') && window.location.pathname === '/') {
                      const targetId = item.href.split('#')[1];
                      const element = document.getElementById(targetId);
                      if (element) {
                        e.preventDefault();
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        window.history.pushState({}, '', `/#${targetId}`);
                      }
                    }
                  }}
                  className="text-lg font-[family-name:var(--font-body)] font-medium text-slate-700 hover:text-[#b11e24] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="h-px bg-slate-100 w-full" />

          {/* Quick Links / SEO Block */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Popular Tools</h4>
            <nav className="flex flex-col gap-2.5">
              {seoLinks.map((link) => (
                <Link 
                  key={link} 
                  href="#builder"
                  onClick={(e) => {
                    setIsOpen(false);
                    if (window.location.pathname === '/') {
                      const element = document.getElementById('builder');
                      if (element) {
                        e.preventDefault();
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        window.history.pushState({}, '', '/#builder');
                      }
                    }
                  }}
                  className="group flex items-center gap-2 text-[0.95rem] font-[family-name:var(--font-body)] font-medium text-slate-600 hover:text-[#b11e24] transition-colors"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-300 group-hover:bg-[#b11e24] transition-colors" />
                  {link}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="p-6 border-t border-slate-100 bg-slate-50">
          <Link
            href="#builder"
            onClick={(e) => {
              setIsOpen(false);
              if (window.location.pathname === '/') {
                const element = document.getElementById('builder');
                if (element) {
                  e.preventDefault();
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  window.history.pushState({}, '', '/#builder');
                }
              }
            }}
            className="flex w-full min-h-12 items-center justify-center rounded-xl bg-[#aa1d1f] px-4 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(170,29,31,0.15)] transition hover:bg-[#931719]"
          >
            Create My Biodata Now
          </Link>
        </div>
      </div>
    </>
  );
}
