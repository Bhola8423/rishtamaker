"use client";

import { PageShell } from "@/components/shared/page-shell";
import Link from "next/link";
import Image from "next/image";
import { biodataTemplates } from "@/components/biodata/templates";
import { TemplateCard } from "@/components/templates/TemplateCard";
import { BiodataCTA } from "@/components/biodata/CTA";
import { Sparkles, Layout, Palette, ArrowRight } from "lucide-react";

export default function TemplatesPage() {
  return (
    <PageShell>
      <div className="bg-[#fffdfc]">
        {/* Premium Split Header Section */}
        <section className="relative overflow-hidden pt-12 pb-8 border-b border-slate-100/50">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(177,30,36,0.04),_transparent_50%)]" />
          <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-red-500/[0.01] blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
              <div className="animate-in fade-in slide-in-from-left-8 duration-1000 ease-out">
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 mb-8 shadow-sm">
                  <Sparkles className="h-3 w-3 text-amber-500 animate-pulse" />
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-amber-700">
                    Premium Gallery 2026
                  </p>
                </div>
                <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.05] mb-8">
                  Stunning <br />
                  <span className="text-[#b11e24] italic">Biodata Formats</span>
                </h1>
                <p className="text-xl text-slate-500 max-w-xl mb-12 leading-relaxed font-medium">
                  Our expert designers have crafted these unique, clean, and perfect matrimonial formats to help you make the best first impression.
                </p>

                {/* Integrated Compact Stats */}
                <div className="flex flex-wrap gap-8 items-center pt-4">
                   {[
                     { icon: <Layout className="h-5 w-5" />, label: "Layouts", value: "12+" },
                     { icon: <Palette className="h-5 w-5" />, label: "Designs", value: "Smart" },
                     { icon: <ArrowRight className="h-5 w-5" />, label: "Export", value: "PDF" }
                   ].map((stat, i) => (
                     <div key={i} className="flex items-center gap-4 group">
                        <div className="h-12 w-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-slate-400 group-hover:text-[#b11e24] group-hover:scale-110 transition-all">
                          {stat.icon}
                        </div>
                        <div>
                          <p className="text-lg font-bold text-slate-900">{stat.value}</p>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
                        </div>
                     </div>
                   ))}
                </div>
              </div>

              {/* High-End Showcase Image */}
              <div className="relative animate-in fade-in zoom-in duration-1200 ease-out lg:block hidden">
                <div className="absolute -inset-4 bg-red-100/30 rounded-[4rem] blur-2xl opacity-50" />
                <div className="relative rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] border-8 border-white group">
                  <Image 
                    src="/images/templates-hero-3d.png" 
                    alt="Premium Templates Showcase" 
                    width={800} 
                    height={800}
                    className="w-full h-auto transition-transform duration-1000 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                {/* Floating Elements */}
                <div className="absolute -right-8 -top-8 h-20 w-20 bg-[#b11e24] rounded-full flex items-center justify-center text-white text-center p-2 shadow-2xl z-20 animate-bounce-slow">
                  <p className="text-[9px] font-black uppercase leading-tight">New<br/>Designs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Templates Grid Section - More Spacing and Polish */}
        <section className="relative py-20 bg-white">
          <div className="container mx-auto px-6 max-w-[1440px]">
            <div className="grid grid-cols-1 gap-16 xl:grid-cols-2">
              {biodataTemplates.map((template) => (
                <div key={template.id} className="transition-transform hover:-translate-y-2 duration-500">
                   <TemplateCard template={template} gender={template.gender} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-24">
          <div className="container mx-auto px-6 max-w-7xl">
             <div className="relative rounded-[4rem] bg-slate-900 p-12 md:p-24 overflow-hidden text-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(177,30,36,0.15),_transparent_70%)]" />
                <div className="relative z-10">
                   <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-8">Ready to create yours?</h2>
                   <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">Join thousands of happy users who found their match using our professional biodata formats.</p>
                   <Link href="/#builder" className="inline-flex h-16 items-center justify-center gap-3 rounded-full bg-[#aa1d1f] px-12 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-[#931719]">
                     Start Building Now <ArrowRight className="w-6 h-6" />
                   </Link>
                </div>
             </div>
          </div>
        </section>

        {/* Final CTA Spacer */}
        <div className="container mx-auto px-6 pb-20">
          <BiodataCTA />
        </div>
      </div>
    </PageShell>
  );
}
