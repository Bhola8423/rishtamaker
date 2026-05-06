"use client";

import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="h-16 w-16 rounded-full border-4 border-slate-100" />
          <Loader2 className="absolute top-0 h-16 w-16 animate-spin text-[#b11e24] transition-all" strokeWidth={3} />
        </div>
        <p className="font-[family-name:var(--font-display)] text-lg font-bold text-slate-800 animate-pulse">
          Loading RishtaMaker...
        </p>
      </div>
    </div>
  );
}
