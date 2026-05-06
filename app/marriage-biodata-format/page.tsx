"use client";

import { PageShell } from "@/components/shared/page-shell";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Download, FileText, Sparkles, Layout, Star, ChevronRight, Quote, Clock } from "lucide-react";
import { BiodataCTA } from "@/components/biodata/CTA";
import { PopularTemplatesSection } from "@/components/marketing/popular-templates";

export default function MarriageBiodataFormatPage() {
  const faqData = [
    {
      q: "What is a marriage biodata?",
      a: "A marriage biodata is a document that summarizes a person's personal, educational, and professional background, along with family details and partner preferences, specifically for matrimonial purposes."
    },
    {
      q: "What should be included in a marriage biodata format?",
      a: "A standard format includes Personal Details (Name, DOB, Height), Educational Qualification, Professional Career, Family Details (Parents, Siblings), and Partner Expectations."
    },
    {
      q: "Is RishtaMaker's biodata format free?",
      a: "Yes, you can create and download basic professional biodata formats for free on RishtaMaker. We also offer premium designs for a small fee."
    },
    {
      q: "Can I download the biodata in PDF format?",
      a: "Absolutely! Once you fill in your details and choose a template, you can download your biodata as a high-quality PDF instantly."
    }
  ];

  return (
    <PageShell>
      {/* Premium Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#fffcfb] pt-20 pb-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(177,30,36,0.06),_transparent_50%)]" />
        <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-red-500/[0.02] blur-[120px]" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#b11e24]/20 bg-[#b11e24]/5 px-4 py-2 mb-8">
                <span className="flex h-2 w-2 rounded-full bg-[#b11e24] animate-pulse" />
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#b11e24]">
                  Trending Formats 2026
                </p>
              </div>
              <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-display)] font-bold text-slate-900 leading-[1.1] mb-8 tracking-tight">
                Modern Marriage <br />
                <span className="text-[#b11e24] italic">Biodata Formats</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-xl mb-12 leading-relaxed">
                Stop using boring Word documents. Create a stunning, professional marriage biodata format that makes a lasting impression on the bride or groom's family.
              </p>
              <div className="flex flex-wrap gap-5">
                <Link href="/#builder" className="inline-flex h-16 items-center justify-center gap-3 rounded-full bg-[#b11e24] px-10 text-lg font-bold text-white shadow-[0_20px_50px_rgba(177,30,36,0.25)] transition-all hover:scale-105 hover:bg-[#8b1c31] active:scale-95">
                  Create My Biodata <ArrowRight className="w-6 h-6" />
                </Link>
                <Link href="/templates" className="inline-flex h-16 items-center justify-center gap-3 rounded-full border-2 border-slate-200 bg-white px-10 text-lg font-bold text-slate-700 transition-all hover:border-red-100 hover:bg-red-50">
                  View All Formats
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="mt-12 flex items-center gap-8">
                <div className="flex items-center gap-2">
                   <Clock className="h-5 w-5 text-slate-400" />
                   <p className="text-sm font-medium text-slate-500">2 Mins to Create</p>
                </div>
                <div className="flex items-center gap-2">
                   <Download className="h-5 w-5 text-slate-400" />
                   <p className="text-sm font-medium text-slate-500">Instant PDF Export</p>
                </div>
              </div>
            </div>

            {/* Hero Image Section */}
            <div className="relative group">
              <div className="absolute -inset-10 bg-red-100/50 rounded-[5rem] rotate-3 transition-transform duration-700 group-hover:rotate-0" />
              <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white">
                <Image 
                  src="/images/marriage-biodata-hero.png" 
                  alt="Premium Marriage Biodata Formats" 
                  width={800} 
                  height={800}
                  className="w-full h-auto transition-transform duration-1000 group-hover:scale-105"
                  priority
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -right-8 -top-8 h-24 w-24 bg-[#b11e24] rounded-full flex items-center justify-center text-white text-center p-2 shadow-2xl z-20 animate-bounce-slow">
                <p className="text-[10px] font-black uppercase leading-tight">100%<br/>Free<br/>Basic</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
               <div className="aspect-video bg-red-50 rounded-[3rem] absolute inset-0 -z-10 translate-x-4 translate-y-4" />
               <div className="relative bg-white p-12 rounded-[3rem] shadow-xl border border-slate-100">
                  <h2 className="text-3xl font-bold text-slate-900 mb-8 font-[family-name:var(--font-display)]">The Importance of a Well-Structured Format</h2>
                  <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                    <p>
                      In the world of arranged marriages, your <strong>marriage biodata format</strong> acts as your first introduction. It represents your personality, your family values, and your professional achievements.
                    </p>
                    <p>
                      A cluttered or poorly formatted biodata can often lead to missed opportunities. With <strong>RishtaMaker</strong>, we have revolutionized the way people create their matrimonial profiles.
                    </p>
                  </div>
               </div>
            </div>

            <div className="space-y-12">
              <h3 className="text-3xl font-bold text-slate-900 font-[family-name:var(--font-display)]">What's inside our formats?</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { t: "Personal Details", d: "Name, Age, Height, and 'About Me'.", icon: <CheckCircle2 className="h-5 w-5" /> },
                  { t: "Career Path", d: "Degrees and current job role.", icon: <CheckCircle2 className="h-5 w-5" /> },
                  { t: "Family Roots", d: "Details about parents and siblings.", icon: <CheckCircle2 className="h-5 w-5" /> },
                  { t: "Cultural Info", d: "Horoscope and Gotra details.", icon: <CheckCircle2 className="h-5 w-5" /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start p-4 rounded-2xl bg-slate-50 transition-all hover:bg-white hover:shadow-md">
                    <div className="text-green-500 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.t}</h4>
                      <p className="text-sm text-slate-500">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="preview">
        <PopularTemplatesSection />
      </section>

      {/* Modern Step Guide */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(177,30,36,0.1),_transparent_50%)]" />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-display)] font-bold mb-4">Create in 5 Simple Steps</h2>
            <p className="text-slate-400">Professional biodata creation, simplified for everyone.</p>
          </div>
          <div className="grid md:grid-cols-5 gap-12">
            {[
              { t: "Pick Template", d: "Select from our premium designs." },
              { t: "Fill Details", d: "Enter career and family info." },
              { t: "AI Magic", d: "Auto-generate your bio." },
              { t: "Live Preview", d: "See changes instantly." },
              { t: "PDF Export", d: "Get your high-quality PDF." }
            ].map((s, i) => (
              <div key={i} className="text-center group">
                <div className="mx-auto h-20 w-20 rounded-[2.5rem] bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-3xl font-black text-white transition-all group-hover:bg-[#b11e24] group-hover:scale-110">
                  {i + 1}
                </div>
                <h4 className="text-xl font-bold mb-3">{s.t}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
           <h2 className="text-4xl font-[family-name:var(--font-display)] font-bold text-slate-900 text-center mb-16">Expert Advice & FAQs</h2>
           <div className="grid gap-6">
              {faqData.map((faq, i) => (
                <div key={i} className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:shadow-xl hover:border-red-100">
                  <h4 className="text-xl font-bold text-slate-900 mb-4">{faq.q}</h4>
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
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
