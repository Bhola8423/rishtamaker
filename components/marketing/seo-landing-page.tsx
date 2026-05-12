"use client";

import React from "react";
import { PageShell } from "@/components/shared/page-shell";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Download, Clock } from "lucide-react";
import { BiodataCTA } from "@/components/biodata/CTA";
import { PopularTemplatesSection } from "@/components/marketing/popular-templates";

interface SeoLandingPageProps {
  hero: {
    badge: string;
    title: React.ReactNode;
    subtitle: string;
    ctaText: string;
    ctaHref: string;
    secondaryCtaText?: string;
    secondaryCtaHref?: string;
    imageSrc: string;
    imageAlt: string;
  };
  seoContent: {
    title: string;
    blocks: Array<{ title: string; text: React.ReactNode | React.ReactNode[] }>;
    benefitsTitle?: string;
    benefits?: string[];
  };
  faqs: Array<{ q: string; a: string }>;
  gender?: "boy" | "girl";
  breadcrumbItems?: Array<{ name: string; url: string }>;
}

export function SeoLandingPage({ hero, seoContent, faqs, gender, breadcrumbItems }: SeoLandingPageProps) {
  return (
    <PageShell>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#fffcfb] pt-20 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(177,30,36,0.06),_transparent_50%)]" />
        <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-red-500/[0.02] blur-[120px]" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#b11e24]/20 bg-[#b11e24]/5 px-4 py-2 mb-8">
                <span className="flex h-2 w-2 rounded-full bg-[#b11e24] animate-pulse" />
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#b11e24]">
                  {hero.badge}
                </p>
              </div>
              <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-display)] font-bold text-slate-900 leading-[1.1] mb-8 tracking-tight">
                {hero.title}
              </h1>
              <p className="text-xl text-slate-600 max-w-xl mb-12 leading-relaxed">
                {hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-5">
                <Link href={hero.ctaHref} className="inline-flex h-16 items-center justify-center gap-3 rounded-full bg-[#b11e24] px-10 text-lg font-bold text-white shadow-[0_20px_50px_rgba(177,30,36,0.25)] transition-all hover:scale-105 hover:bg-[#8b1c31] active:scale-95">
                  {hero.ctaText} <ArrowRight className="w-6 h-6" />
                </Link>
                {hero.secondaryCtaText && hero.secondaryCtaHref && (
                  <Link href={hero.secondaryCtaHref} className="inline-flex h-16 items-center justify-center gap-3 rounded-full border-2 border-slate-200 bg-white px-10 text-lg font-bold text-slate-700 transition-all hover:border-red-100 hover:bg-red-50">
                    {hero.secondaryCtaText}
                  </Link>
                )}
              </div>

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

            <div className="relative group">
              <div className="absolute -inset-10 bg-red-100/50 rounded-[5rem] rotate-3 transition-transform duration-700 group-hover:rotate-0" />
              <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white">
                <Image 
                  src={hero.imageSrc} 
                  alt={hero.imageAlt} 
                  width={800} 
                  height={800}
                  className="w-full h-auto transition-transform duration-1000 group-hover:scale-105"
                  priority
                />
              </div>
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 font-[family-name:var(--font-display)] mb-4">{seoContent.title}</h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 max-w-5xl mx-auto">
            {seoContent.blocks.map((block, i) => (
              <div key={i} className="space-y-4">
                <h3 className="text-xl font-bold text-slate-800">{block.title}</h3>
                <div className="text-base text-slate-600 leading-relaxed space-y-4">
                  {Array.isArray(block.text) ? (
                    block.text.map((p, j) => <p key={j}>{p}</p>)
                  ) : (
                    <p>{block.text}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {seoContent.benefits && (
            <div className="max-w-4xl mx-auto mt-16 bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">{seoContent.benefitsTitle || "Key Benefits"}</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {seoContent.benefits.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5" />
                    <span className="text-slate-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Templates Section */}
      <section id="preview">
        <PopularTemplatesSection gender={gender} />
      </section>

      {/* Modern FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
           <h2 className="text-4xl font-[family-name:var(--font-display)] font-bold text-slate-900 text-center mb-16">Expert Advice & FAQs</h2>
           <div className="grid gap-6">
              {faqs.map((faq, i) => (
                <div key={i} className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:shadow-xl hover:border-red-100">
                  <h4 className="text-xl font-bold text-slate-900 mb-4">{faq.q}</h4>
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="container mx-auto px-6 py-24 max-w-6xl">
        <BiodataCTA />
      </div>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(f => ({
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

      {/* Breadcrumb Schema */}
      {breadcrumbItems && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": breadcrumbItems.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": item.name,
                "item": item.url
              }))
            })
          }}
        />
      )}
    </PageShell>
  );
}
