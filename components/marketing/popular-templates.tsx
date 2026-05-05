import React from "react";
import Link from "next/link";
import { biodataTemplates } from "@/components/biodata/templates";
import { TemplateCard } from "@/components/templates/TemplateCard";
import { ArrowRight } from "lucide-react";

export function PopularTemplatesSection() {
  const popularTemplates = biodataTemplates.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 font-[family-name:var(--font-display)]">
              Choose Your <span className="text-[#b11e24]">Template</span>
            </h2>
            <p className="text-lg text-slate-600">
              Select from our collection of professional and elegant biodata formats.
            </p>
          </div>
          <Link 
            href="/templates"
            className="flex items-center gap-2 text-[#b11e24] font-bold hover:underline group"
          >
            View All Templates
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {popularTemplates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      </div>
    </section>
  );
}
