"use client";

import { PageShell } from "@/components/shared/page-shell";
import { premiumTemplates } from "@/components/biodata/premium-templates";
import { TemplateCard } from "@/components/templates/TemplateCard";
import { PremiumHero } from "@/components/marketing/premium-hero";
import { BiodataCTA } from "@/components/biodata/CTA";
import { ArrowRight, Crown, Sparkles, Diamond, Palette } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import RoyalFloralTemplate from "@/components/biodata/premium-templates/RoyalFloralTemplate";

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

            <div className="flex flex-col items-center">
              <div className="relative group max-w-[850px] w-full">
                 <div className="absolute -inset-10 bg-gradient-to-r from-amber-200 via-[#b11e24]/20 to-amber-200 blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity animate-pulse" />
                 
                 <div className="relative bg-white p-4 md:p-8 rounded-[3rem] md:rounded-[4.5rem] shadow-[0_60px_120px_-20px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden flex justify-center">
                    <div className="scale-[0.4] sm:scale-[0.55] md:scale-[0.75] lg:scale-[0.9] xl:scale-100 origin-top transform-gpu h-[450px] sm:h-[600px] md:h-[840px] lg:h-[1000px] xl:h-[1123px] overflow-hidden">
                       <RoyalFloralTemplate data={{
                         fullName: "Priya Sharma",
                         profileImage: "https://images.unsplash.com/photo-1594744803329-a584af1af518?q=80&w=1000&auto=format&fit=crop",
                         sections: [
                           {
                             id: "personal",
                             title: "Personal Details",
                             fields: [
                               { id: "1", label: "Full Name", value: "Priya Sharma" },
                               { id: "2", label: "Nickname", value: "Piku" },
                               { id: "3", label: "Marital Status", value: "Unmarried" },
                               { id: "4", label: "Nationality", value: "Indian" },
                             ]
                           },
                           {
                             id: "education",
                             title: "Education & Career",
                             fields: [
                               { id: "10", label: "Education", value: "MBA in Finance" },
                               { id: "11", label: "Profession", value: "Investment Banker" },
                             ]
                           },
                           {
                             id: "family",
                             title: "Family Details",
                             fields: [
                               { id: "15", label: "Father's Name", value: "Mr. Rajesh Sharma" },
                               { id: "17", label: "Mother's Name", value: "Mrs. Sunita Sharma" },
                             ]
                           }
                         ]
                       }} />
                    </div>
                    
                    {/* Floating Action Badge */}
                    <div className="absolute top-12 right-12 z-20 animate-bounce-slow">
                       <div className="bg-[#b11e24] text-white px-6 py-3 rounded-2xl font-bold shadow-2xl flex items-center gap-2 border-2 border-white/20">
                          <Crown className="w-5 h-5 text-amber-400" />
                          Signature Design
                       </div>
                    </div>

                    {/* Bottom Action Overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/95 to-transparent flex flex-col items-center justify-end pb-12 z-30">
                       <div className="flex flex-col items-center gap-6">
                          <div className="flex items-center gap-4 text-slate-400 text-sm font-bold uppercase tracking-widest">
                             <div className="h-px w-8 bg-slate-200" />
                             Elite Experience
                             <div className="h-px w-8 bg-slate-200" />
                          </div>
                          <Link href="/#builder" className="bg-[#2a050c] text-white px-12 py-5 rounded-full font-bold shadow-[0_20px_40px_rgba(42,5,12,0.3)] hover:scale-105 hover:bg-black transition-all flex items-center gap-3 text-lg">
                             Personalize This Template <ArrowRight className="w-6 h-6" />
                          </Link>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="mt-16 flex flex-wrap justify-center gap-8 text-slate-400">
                {[
                  { icon: <Diamond className="w-5 h-5" />, text: "Premium Texture" },
                  { icon: <Palette className="h-5 w-5" />, text: "Royal Colors" },
                  { icon: <Crown className="h-5 w-5" />, text: "Signature Fonts" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white border border-slate-100 shadow-sm">
                    <div className="text-amber-500">{item.icon}</div>
                    <span className="text-xs font-bold uppercase tracking-widest">{item.text}</span>
                  </div>
                ))}
              </div>
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
