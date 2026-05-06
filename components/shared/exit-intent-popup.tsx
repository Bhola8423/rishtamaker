"use client";

import React, { useState, useEffect } from "react";
import { X, Clock, Sparkles } from "lucide-react";
import Link from "next/link";

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseOut = (e: MouseEvent) => {
      if (!hasShown && e.clientY <= 0) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseOut);
    return () => document.removeEventListener("mouseleave", handleMouseOut);
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-md overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-2xl animate-in zoom-in-95 duration-300">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute right-6 top-6 rounded-full bg-slate-100 p-2 text-slate-400 hover:bg-slate-200 hover:text-slate-600 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-[#b11e24] ring-1 ring-red-100">
            <Clock className="h-8 w-8" />
          </div>
          
          <h2 className="text-2xl font-bold text-slate-900 leading-tight">
            Wait! Before you leave...
          </h2>
          <p className="mt-4 text-slate-500">
            Create your professional marriage biodata in just <span className="font-bold text-slate-900">2 minutes</span>. It's 100% free and no signup is required!
          </p>

          <div className="mt-8 flex flex-col w-full gap-3">
            <Link 
              href="/#builder"
              onClick={() => setIsVisible(false)}
              className="flex h-14 items-center justify-center gap-2 rounded-full bg-[#b11e24] px-8 text-base font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-[#8b1c31]"
            >
              <Sparkles className="h-5 w-5" />
              Create My Biodata Now
            </Link>
            <button 
              onClick={() => setIsVisible(false)}
              className="h-14 text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors"
            >
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
