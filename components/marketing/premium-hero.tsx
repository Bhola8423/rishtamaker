"use client";

import { Sparkles, Crown, ShieldCheck, Gem } from "lucide-react";
import Image from "next/image";

export function PremiumHero() {
  return (
    <section className="relative overflow-hidden bg-[#fffdfc] pt-24 pb-20 border-b border-amber-100">
      {/* Luxurious Background Elements - Light Version */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,0.08),_transparent_50%)]" />
      <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-amber-500/[0.02] blur-[120px]" />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Decorative Image */}
          <div className="hidden lg:block lg:col-span-3 relative animate-in fade-in slide-in-from-left-12 duration-1000">
            <div className="relative rounded-[3rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.1)] border-8 border-white rotate-[-6deg] hover:rotate-0 transition-transform duration-700">
              <Image 
                src="/images/premium/hero-1.png" 
                alt="Luxury Stationery" 
                width={400} 
                height={500} 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 h-16 w-16 bg-amber-500 rounded-2xl flex items-center justify-center text-white shadow-xl z-20">
              <Sparkles className="w-8 h-8" />
            </div>
          </div>

          {/* Central Content */}
          <div className="col-span-12 lg:col-span-6 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-50 px-6 py-2 mb-8 backdrop-blur-md shadow-sm">
              <Crown className="h-4 w-4 text-amber-600" />
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-700">
                Elite Collection 2026
              </p>
            </div>
            
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl xl:text-8xl font-bold tracking-tight text-slate-900 leading-[1] mb-8">
              The <span className="text-[#b11e24] italic text-shadow-sm">Signature</span> <br />
              Collection
            </h1>
            
            <p className="text-xl text-slate-500 max-w-2xl mb-12 leading-relaxed font-medium">
              Exquisite matrimonial formats designed for those who settle for nothing less than perfection. Handcrafted with gold-foil aesthetics and elite typography.
            </p>

            <div className="flex flex-wrap justify-center gap-6 items-center pt-4">
               {[
                 { icon: <Gem className="h-5 w-5" />, label: "Quality", value: "Ultra HD" },
                 { icon: <ShieldCheck className="h-5 w-5" />, label: "Designs", value: "Exclusive" },
                 { icon: <Sparkles className="h-5 w-5" />, label: "Support", value: "Priority" }
               ].map((stat, i) => (
                 <div key={i} className="flex items-center gap-4 group border-r border-slate-100 pr-6 last:border-0 last:pr-0">
                    <div className="h-10 w-10 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-amber-600 group-hover:scale-110 transition-all">
                      {stat.icon}
                    </div>
                    <div className="text-left">
                      <p className="text-base font-bold text-slate-900">{stat.value}</p>
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>

          {/* Right Decorative Image */}
          <div className="hidden lg:block lg:col-span-3 relative animate-in fade-in slide-in-from-right-12 duration-1000">
            <div className="relative rounded-[3rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.1)] border-8 border-white rotate-[6deg] hover:rotate-0 transition-transform duration-700">
              <Image 
                src="/images/premium/hero-2.png" 
                alt="Luxury Rings" 
                width={400} 
                height={500} 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 h-16 w-16 bg-[#b11e24] rounded-2xl flex items-center justify-center text-white shadow-xl z-20">
              <Crown className="w-8 h-8" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
