"use client";

import { BiodataTemplateDefinition } from "@/components/biodata/templates";
import { defaultBiodataData, boyMockData, girlMockData } from "@/components/biodata/mock-data";
import { Check, Star, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

interface TemplateCardProps {
  template: BiodataTemplateDefinition;
  gender?: "boy" | "girl" | "both";
  onSelect?: (id: string) => void;
}

export function TemplateCard({ template, gender, onSelect }: TemplateCardProps) {
  const DesignComponent = template.Component;

  // Select mock data based on gender
  const mockData = gender === "boy" ? boyMockData : (gender === "girl" || gender === "both" ? girlMockData : defaultBiodataData);

  return (
    <div className="group relative flex flex-col mx-auto w-full max-w-3xl rounded-[2.5rem] border border-slate-200/60 bg-white p-5 transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_45px_90px_-15px_rgba(32,24,26,0.18)] hover:border-[#b11e24]/20">
      {/* Premium Popular Badge */}
      {template.isPopular && (
        <div className="absolute -right-3 -top-3 z-30 flex items-center gap-1.5 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 px-5 py-2 text-[10px] font-black uppercase tracking-[0.15em] text-white shadow-[0_10px_20px_rgba(245,158,11,0.3)] ring-4 ring-white animate-in zoom-in duration-500">
          <Star className="h-3.5 w-3.5 fill-current" />
          Popular
        </div>
      )}

      {/* Modern Preview Area */}
      <div
        className={`relative mb-8 aspect-[3/4] w-full overflow-hidden rounded-[2rem] border border-slate-100/50 ${template.thumbnailColor || "bg-slate-50"} shadow-[inset_0_2px_15px_rgba(0,0,0,0.02)] transition-colors duration-500 group-hover:bg-slate-100/50`}
        ref={(el) => {
          if (el && !el.dataset.observerAttached) {
            el.dataset.observerAttached = "true";
            const child = el.querySelector(".template-container") as HTMLElement;

            const updateScale = () => {
              if (!child) return;
              const rect = el.getBoundingClientRect();
              const availableW = rect.width - 40; // 20px padding each side
              const availableH = rect.height - 40;

              const childW = 675;
              const childH = child.scrollHeight || 842;

              const scaleX = availableW / childW;
              const scaleY = availableH / childH;
              const scale = Math.min(scaleX, scaleY, 1); // Don't scale up beyond 1

              child.style.transformOrigin = "center center";
              child.style.transform = `translate(-50%, -50%) scale(${scale})`;
            };

            const observer = new ResizeObserver(updateScale);
            observer.observe(el);
            if (child) observer.observe(child);
            setTimeout(updateScale, 50);
          }
        }}
      >
        {/* Subtle Decorative Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

        <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110 pointer-events-none">
          <div className="template-container absolute top-1/2 left-1/2 pointer-events-none rounded-xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)] bg-white border border-slate-100" style={{ width: '675px' }}>
            <DesignComponent data={mockData} />
          </div>
        </div>

        {/* Modern Hover Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/0 transition-all duration-700 group-hover:bg-slate-900/20 backdrop-blur-0 group-hover:backdrop-blur-[2px]">
          <Link
            href={`/template/${template.id}`}
            className="translate-y-8 scale-75 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-[#b11e24] shadow-[0_20px_40px_rgba(0,0,0,0.3)] ring-8 ring-white/10 hover:scale-110 transition-transform">
              <ArrowRight className="h-8 w-8" />
            </div>
          </Link>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col px-3">
        <div className="mb-4 flex flex-wrap gap-2">
          {template.tags?.map((tag) => (
            <span key={tag} className="rounded-full bg-slate-100/50 px-3.5 py-1.5 text-[9px] font-black uppercase tracking-[0.15em] text-slate-500 border border-slate-200/50 backdrop-blur-sm group-hover:bg-white group-hover:border-[#b11e24]/10 group-hover:text-[#b11e24] transition-colors">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-[family-name:var(--font-display)] text-[1.65rem] font-bold text-slate-900 leading-tight group-hover:text-[#b11e24] transition-colors">
          <Link href={`/template/${template.id}`}>
            {template.name}
          </Link>
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-500 font-medium line-clamp-2">
          {template.description}
        </p>

        {/* Premium Action Button */}
        <Link
          href={`/?template=${template.id}#builder`}
          className="group/btn mt-8 relative flex h-14 w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-slate-900 px-6 text-sm font-black uppercase tracking-widest text-white transition-all duration-500 hover:bg-[#aa1d1f] hover:shadow-[0_20px_40px_rgba(170,29,31,0.25)]"
        >
          <span className="relative z-10">Use This Template</span>
          <Check className="relative z-10 h-4 w-4 transition-transform group-hover/btn:scale-125" />
          <div className="absolute inset-0 -z-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
        </Link>
      </div>
    </div>
  );
}
