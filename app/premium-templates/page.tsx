"use client";

import { PageShell } from "@/components/shared/page-shell";
import { premiumTemplates } from "@/components/biodata/premium-templates";
import { TemplateCard } from "@/components/templates/TemplateCard";
import { PremiumHero } from "@/components/marketing/premium-hero";
import { BiodataCTA } from "@/components/biodata/CTA";
import { ArrowRight, Crown, Sparkles, Diamond, Palette } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function PremiumTemplatesPage() {
  return (
    <PageShell>
      <div className="bg-[#fffdfc] min-h-screen">
        <PremiumHero />

        {/* Templates Grid Section */}
        <section className="relative py-24 bg-white overflow-hidden">
          {/* Subtle Background Elements */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-amber-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-red-500/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
            <div className="mb-20 flex flex-col items-center text-center">
               <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 mb-6">
                 <Sparkles className="w-4 h-4 text-amber-500" />
                 <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Exclusivity Guaranteed</span>
               </div>
               <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 font-[family-name:var(--font-display)]">Select Your Signature Style</h2>
               <div className="w-24 h-1.5 bg-gradient-to-r from-amber-400 via-[#b11e24] to-amber-400 rounded-full" />
            </div>

            <div className="grid grid-cols-1 gap-16 xl:grid-cols-2 min-h-[500px] relative">
              {premiumTemplates.length > 0 ? (
                premiumTemplates.map((template) => (
                  <div key={template.id} className="transition-transform hover:-translate-y-2 duration-500">
                     <TemplateCard template={template as any} gender={template.gender} />
                  </div>
                ))
              ) : (
                <div className="col-span-full py-20 flex flex-col items-center justify-center relative">
                  {/* Floating Mockup Images for 'Cool' Factor */}
                  <div className="absolute -left-20 top-0 w-64 md:w-80 h-96 opacity-20 md:opacity-40 rotate-[-12deg] blur-[2px] hover:blur-0 transition-all duration-700 hover:scale-105 hover:opacity-100 z-0">
                     <Image 
                       src="/images/premium/mockup-1.png" 
                       alt="Premium Mockup" 
                       width={400} 
                       height={600} 
                       className="rounded-3xl shadow-2xl border-4 border-white"
                     />
                  </div>
                  <div className="absolute -right-20 bottom-10 w-64 md:w-80 h-96 opacity-20 md:opacity-40 rotate-[8deg] blur-[2px] hover:blur-0 transition-all duration-700 hover:scale-105 hover:opacity-100 z-0">
                     <Image 
                       src="/images/premium/mockup-2.png" 
                       alt="Traditional Mockup" 
                       width={400} 
                       height={600} 
                       className="rounded-3xl shadow-2xl border-4 border-white"
                     />
                  </div>

                  {/* Modern Glassmorphism Card for Coming Soon */}
                  <div className="relative p-12 md:p-20 rounded-[3rem] bg-white/80 border border-amber-200/40 shadow-[0_40px_100px_rgba(212,175,55,0.12)] max-w-4xl w-full text-center backdrop-blur-md overflow-hidden group z-10">
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-400/10 blur-[80px] rounded-full group-hover:bg-amber-400/20 transition-all duration-700" />
                    
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="mb-10 relative">
                        <div className="absolute inset-0 bg-amber-500/20 blur-2xl rounded-full scale-150 animate-pulse" />
                        <div className="relative h-24 w-24 rounded-[2rem] bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white shadow-2xl">
                          <Crown className="w-12 h-12" />
                        </div>
                      </div>

                      <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-[family-name:var(--font-display)] leading-tight">
                        Our <span className="text-[#b11e24] italic text-shadow-sm">Signature Collection</span> <br /> is being Handcrafted
                      </h3>
                      
                      <p className="text-xl text-slate-500 mb-12 max-w-xl mx-auto leading-relaxed">
                        We are collaborating with top designers to bring you a new era of matrimonial elegance. New exclusive templates arrive shortly.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-2xl">
                        {[
                          { icon: <Diamond className="w-5 h-5" />, text: "Premium Paper Textures" },
                          { icon: <Palette className="h-5 w-5" />, text: "Smart Color Palettes" },
                          { icon: <Crown className="h-5 w-5" />, text: "Elite Typography" }
                        ].map((item, i) => (
                          <div key={i} className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm transition-all hover:border-amber-200 hover:-translate-y-1">
                            <div className="text-amber-500">{item.icon}</div>
                            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-tight">{item.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Bottom Premium CTA */}
        <section className="py-24 border-t border-slate-100">
          <div className="container mx-auto px-6 max-w-7xl">
             <div className="relative rounded-[4rem] bg-gradient-to-br from-white to-slate-50 p-12 md:p-24 overflow-hidden text-center border border-amber-500/20 shadow-[0_40px_100px_rgba(0,0,0,0.05)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.08),_transparent_70%)]" />
                <div className="relative z-10">
                   <Crown className="w-16 h-16 text-amber-600 mx-auto mb-8 animate-pulse" />
                   <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-display)] font-bold text-slate-900 mb-8">Elevate Your Presence</h2>
                   <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto">Our premium templates are designed to make you stand out in the most elegant way possible.</p>
                   <Link href="/#builder" className="inline-flex h-16 items-center justify-center gap-3 rounded-full bg-[#b11e24] px-12 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-[#931719]">
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
