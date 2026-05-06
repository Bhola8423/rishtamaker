import Link from "next/link";
import { ArrowRight, LayoutPanelTop } from "lucide-react";

export function BiodataCTA() {
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#b11e24] to-[#8b1c31] p-8 md:p-16 text-center text-white shadow-2xl shadow-red-900/20">
      {/* Decorative Background Elements */}
      <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/20">
          <LayoutPanelTop className="h-8 w-8" />
        </div>

        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Create Your Marriage Biodata in 2 Minutes
        </h2>
        
        <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
          Choose from dozens of professional, elegant templates and generate your matrimonial profile instantly. Free, simple, and trusted by thousands.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/#builder"
            className="group flex h-14 items-center justify-center gap-2 rounded-full bg-white px-8 text-base font-bold text-[#b11e24] shadow-xl transition-all hover:scale-105 hover:bg-slate-50 sm:w-auto"
          >
            Start Now
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          
          <Link
            href="/templates"
            className="flex h-14 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:w-auto"
          >
            View Templates
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 md:grid-cols-3">
          <div className="flex flex-col gap-1">
            <span className="text-2xl font-bold">100k+</span>
            <span className="text-xs font-medium uppercase tracking-widest text-white/60">Profiles Made</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-2xl font-bold">20+</span>
            <span className="text-xs font-medium uppercase tracking-widest text-white/60">Premium Formats</span>
          </div>
          <div className="hidden flex-col gap-1 md:flex">
            <span className="text-2xl font-bold">100%</span>
            <span className="text-xs font-medium uppercase tracking-widest text-white/60">Secure & Private</span>
          </div>
        </div>
      </div>
    </div>
  );
}
