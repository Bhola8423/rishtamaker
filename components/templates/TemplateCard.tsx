import { BiodataTemplateDefinition } from "@/components/biodata/templates";
import { defaultBiodataData } from "@/components/biodata/mock-data";
import { Check, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

interface TemplateCardProps {
  template: BiodataTemplateDefinition;
  onSelect?: (id: string) => void;
}

export function TemplateCard({ template, onSelect }: TemplateCardProps) {
  const DesignComponent = template.Component;

  return (
    <div className="group relative flex flex-col rounded-[2.5rem] border border-slate-200 bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)]">
      {/* Popular Badge */}
      {template.isPopular && (
        <div className="absolute -right-2 -top-2 z-20 flex items-center gap-1 rounded-full bg-amber-400 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white shadow-lg ring-4 ring-white">
          <Star className="h-3 w-3 fill-current" />
          Popular
        </div>
      )}

      {/* Preview Area */}
      <div className={`relative mb-8 aspect-[3/4] w-full overflow-hidden rounded-[2rem] border border-slate-100 ${template.thumbnailColor || "bg-slate-50"} shadow-inner flex items-center justify-center`}>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="origin-center scale-[0.46] shadow-2xl bg-transparent transition-transform duration-700 group-hover:scale-[0.48]" style={{ width: '675px', height: '950px' }}>
             <DesignComponent data={defaultBiodataData} />
          </div>
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/0 transition-all duration-500 group-hover:bg-slate-900/10">
          <Link
            href={`/#builder?template=${template.id}`}
            className="translate-y-4 scale-95 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-slate-900 shadow-2xl ring-4 ring-white/20">
              <ArrowRight className="h-6 w-6" />
            </div>
          </Link>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col px-2">
        <div className="mb-3 flex flex-wrap gap-2">
          {template.tags?.map((tag) => (
            <span key={tag} className="rounded-full bg-slate-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border border-slate-100">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-slate-900">{template.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-500 line-clamp-2">
          {template.description}
        </p>

        <Link
          href={`/#builder?template=${template.id}`}
          className="mt-8 flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-slate-900 px-6 text-sm font-bold text-white transition-all hover:bg-[#aa1d1f] hover:shadow-[0_15px_30px_rgba(170,29,31,0.2)]"
        >
          Use This Template
          <Check className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
