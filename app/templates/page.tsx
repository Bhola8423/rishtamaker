"use client";

import { PageShell } from "@/components/shared/page-shell";
import { biodataTemplates } from "@/components/biodata/templates";
import { TemplateCard } from "@/components/templates/TemplateCard";
import { BiodataCTA } from "@/components/biodata/CTA";

export default function TemplatesPage() {
  return (
    <PageShell>
      <div className="bg-white">
        {/* Header Section */}
        <section className="pt-20 pb-16 border-b border-slate-100">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight">
              Marriage Biodata <span className="text-[#b11e24]">Templates</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
              Select from our collection of professional and elegant biodata formats.
            </p>
          </div>
        </section>

        {/* Template Grid */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {biodataTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="pb-24 pt-10">
          <div className="container mx-auto px-4">
            <BiodataCTA />
          </div>
        </section>
      </div>
    </PageShell>
  );
}
