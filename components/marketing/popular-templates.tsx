"use client";

import React from "react";
import Link from "next/link";
import { biodataTemplates } from "@/components/biodata/templates";
import { TemplateCard } from "@/components/templates/TemplateCard";
import { ArrowRight } from "lucide-react";

interface PopularTemplatesSectionProps {
  gender?: "boy" | "girl";
}

export function PopularTemplatesSection({ gender }: PopularTemplatesSectionProps) {
  const popularTemplates = gender 
    ? biodataTemplates.filter(t => t.gender === gender || t.gender === "both")
    : biodataTemplates;

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1440px]">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl text-left">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 font-[family-name:var(--font-display)] tracking-tight">
              Premium <span className="text-[#b11e24] italic">Design Gallery</span>
            </h2>
            <p className="text-xl text-slate-500 font-medium">
              Select from our curated collection of professional and elegant biodata formats.
            </p>
          </div>
          <Link 
            href="/templates"
            className="flex items-center gap-3 rounded-full bg-slate-900 px-8 py-4 text-white font-bold hover:bg-[#b11e24] transition-all shadow-lg hover:scale-105"
          >
            Explore All 12+ Designs
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-16 xl:grid-cols-2">
          {popularTemplates.map((template) => (
            <TemplateCard key={template.id} template={template} gender={gender} />
          ))}
        </div>
      </div>
    </section>
  );
}
