"use client";

import { PageShell } from "@/components/shared/page-shell";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Layout, Zap, Smartphone, CheckCircle, Star, Quote, ChevronRight, PenTool } from "lucide-react";
import { BiodataCTA } from "@/components/biodata/CTA";
import { PopularTemplatesSection } from "@/components/marketing/popular-templates";

export default function SimpleBiodataFormatPage() {
  const faqData = [
    {
      q: "Why choose a simple biodata format?",
      a: "A simple biodata format ensures that the reader focuses on your information rather than distracting designs. It looks professional, is easy to read, and works perfectly for print."
    },
    {
      q: "Can I use a simple format for both boys and girls?",
      a: "Yes, our simple and minimalistic templates are gender-neutral and can be easily customized for anyone looking for a professional matrimonial profile."
    },
    {
      q: "Is a simple biodata better than a colorful one?",
      a: "It depends on personal preference, but simple designs are often perceived as more elegant and serious, especially by conservative families."
    }
  ];

  return (
    <PageShell>
      {/* Premium Minimal Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-white pt-20 pb-20">
        {/* Subtle Texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/white-diamond.png')] opacity-20 pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 mb-8">
                <PenTool className="h-4 w-4 text-slate-500" />
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
                  Minimalist Collection 2026
                </p>
              </div>
              <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-display)] font-bold text-slate-900 leading-[1.1] mb-8 tracking-tight">
                Simple & Clean <br />
                <span className="text-slate-400 italic">Biodata Formats</span>
              </h1>
              <p className="text-xl text-slate-500 max-w-xl mb-12 leading-relaxed font-medium">
                Sometimes, less is more. Our simple biodata templates focus on clarity and readability, ensuring your details shine through without unnecessary clutter.
              </p>
              <div className="flex flex-wrap gap-5">
                <Link href="/#builder" className="inline-flex h-16 items-center justify-center gap-3 rounded-full bg-slate-900 px-10 text-lg font-bold text-white shadow-2xl transition-all hover:scale-105 hover:bg-slate-800 active:scale-95">
                  Start Building <ArrowRight className="w-6 h-6" />
                </Link>
                <Link href="/templates" className="inline-flex h-16 items-center justify-center gap-3 rounded-full border-2 border-slate-100 bg-white px-10 text-lg font-bold text-slate-600 transition-all hover:bg-slate-50">
                  See Minimalism
                </Link>
              </div>

              {/* Minimal Trust Badge */}
              <div className="mt-12 flex items-center gap-4 text-slate-400">
                 <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                   <Star className="h-5 w-5 fill-slate-300" />
                 </div>
                 <p className="text-sm font-medium">The choice of modern Indian professionals</p>
              </div>
            </div>

            {/* Premium Preview Image */}
            <div className="relative group">
              <div className="absolute -inset-8 bg-slate-50 rounded-[4rem] transition-transform duration-700 group-hover:scale-95" />
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] border-[10px] border-white">
                <Image 
                  src="/images/simple-biodata-hero.png" 
                  alt="Simple Minimalist Biodata Format" 
                  width={800} 
                  height={800}
                  className="w-full h-auto transition-transform duration-1000 group-hover:scale-105"
                  priority
                />
              </div>
              {/* Overlay Stat */}
              <div className="absolute -left-10 bottom-10 p-6 bg-white border border-slate-100 rounded-3xl shadow-2xl z-20">
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Clarity Score</p>
                <p className="text-2xl font-bold text-slate-900">100%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Simplicity Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-display)] font-bold text-slate-900 mb-6 leading-tight">
              Why Simplicity Wins in <br /> Matrimonial Profiles
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed">
               A simple format ensures that the reader focuses on your information rather than distracting designs. It looks professional and is incredibly easy to read.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                icon: <Zap className="h-7 w-7" />, 
                t: "Instant Creation", 
                d: "No need to spend hours on formatting. Our builder does it for you in seconds.",
                label: "Fast"
              },
              { 
                icon: <Smartphone className="h-7 w-7" />, 
                t: "WhatsApp Optimized", 
                d: "Sized perfectly for mobile devices. Looks great on every screen.",
                label: "Mobile"
              },
              { 
                icon: <Layout className="h-7 w-7" />, 
                t: "High Legibility", 
                d: "Using premium fonts and balanced spacing for a clean reading experience.",
                label: "Clear"
              }
            ].map((item, i) => (
              <div key={i} className="group p-10 rounded-[2.5rem] border border-slate-50 transition-all hover:bg-slate-50 hover:border-slate-200">
                <div className="inline-block p-4 rounded-2xl bg-white border border-slate-100 shadow-sm mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{item.t}</h4>
                <p className="text-slate-500 leading-relaxed mb-6">{item.d}</p>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Templates */}
      <section id="preview">
        <PopularTemplatesSection />
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl">
           <div className="relative p-12 md:p-20 text-center">
              <Quote className="h-20 w-20 text-white/5 absolute top-10 left-10" />
              <h3 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-medium leading-relaxed mb-10 italic">
                "Simplicity is the ultimate sophistication. Our minimal biodata formats speak volumes without saying a word about vanity."
              </h3>
              <div className="flex items-center justify-center gap-4">
                 <div className="h-px w-10 bg-white/20" />
                 <p className="text-sm font-bold tracking-widest uppercase text-slate-400">The RishtaMaker Philosophy</p>
                 <div className="h-px w-10 bg-white/20" />
              </div>
           </div>
        </div>
      </section>

      {/* FAQ Modernized */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-display)] font-bold text-slate-900 text-center mb-16 tracking-tight">Common Questions</h2>
          <div className="space-y-12">
            {faqData.map((faq, i) => (
              <div key={i} className="group">
                <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <ChevronRight className="h-5 w-5 text-slate-300 group-hover:text-slate-900 transition-colors" />
                  {faq.q}
                </h4>
                <p className="text-slate-500 leading-relaxed text-lg pl-8">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-24 max-w-6xl">
        <BiodataCTA />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(f => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": f.a
              }
            }))
          })
        }}
      />
    </PageShell>
  );
}
