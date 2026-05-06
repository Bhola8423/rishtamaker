"use client";

import { PageShell } from "@/components/shared/page-shell";
import Link from "next/link";
import Image from "next/image";
import { UserCircle, Briefcase, GraduationCap, ArrowRight, ShieldCheck, Zap, Star, CheckCircle2, ChevronRight, Quote } from "lucide-react";
import { BiodataCTA } from "@/components/biodata/CTA";
import { PopularTemplatesSection } from "@/components/marketing/popular-templates";

export default function BiodataForBoyPage() {
  const faqData = [
    {
      q: "What should be the focus of a boy's marriage biodata?",
      a: "A groom's biodata should focus on educational pedigree, career stability, family background, and values. Financial stability and long-term career prospects are often key considerations for the bride's family."
    },
    {
      q: "Is it necessary to add a photo in the boy's biodata?",
      a: "While optional, adding a professional and clear photograph significantly increases the chances of getting a positive response. It builds trust and provides a face to the profile."
    },
    {
      q: "How to write a bio for marriage biodata for a boy?",
      a: "Keep it polite and honest. Mention your personality, hobbies, and what you are looking for in a life partner. You can use RishtaMaker's AI tool to generate a professional bio automatically."
    }
  ];

  return (
    <PageShell>
      {/* Premium Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-slate-900 pt-20 pb-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.1),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        
        <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-3 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 mb-8 backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">
                  Professional Groom Formats 2026
                </p>
              </div>
              <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-display)] font-bold text-white leading-[1.1] mb-8 tracking-tight">
                Marriage Biodata <br />
                <span className="text-blue-500 italic">for Professionals</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-xl mb-12 leading-relaxed">
                Design a high-impact matrimonial profile that highlights your career, education, and values. Compete at the highest level with our sleek, masculine designs.
              </p>
              <div className="flex flex-wrap gap-5">
                <Link href="/#builder" className="inline-flex h-16 items-center justify-center gap-3 rounded-full bg-blue-600 px-10 text-lg font-bold text-white shadow-[0_20px_50px_rgba(37,99,235,0.3)] transition-all hover:scale-105 hover:bg-blue-700 active:scale-95">
                  Start Building Now <ArrowRight className="w-6 h-6" />
                </Link>
                <Link href="#preview" className="inline-flex h-16 items-center justify-center gap-3 rounded-full border border-slate-700 bg-white/5 px-10 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10">
                  View Formats
                </Link>
              </div>

              {/* Trust Badge */}
              <div className="mt-12 flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 max-w-md">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="h-10 w-10 rounded-full border-2 border-slate-900 bg-slate-800" />
                  ))}
                </div>
                <div className="text-sm">
                  <p className="text-white font-bold">Trusted by 50k+ Grooms</p>
                  <p className="text-slate-500">Rated 4.9/5 by Indian Families</p>
                </div>
              </div>
            </div>

            {/* Premium Preview Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-500/20 rounded-[4rem] blur-3xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative z-10 rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-slate-800/50 backdrop-blur-md">
                <Image 
                  src="/images/biodata-boy-hero.png" 
                  alt="Premium Boy Biodata Design" 
                  width={800} 
                  height={1000}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
              {/* Floating Stat Card */}
              <div className="absolute -left-10 bottom-20 p-6 bg-slate-800 border border-slate-700 rounded-3xl shadow-2xl z-20 animate-bounce-slow">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-8 w-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <Star className="h-4 w-4 text-blue-500" />
                  </div>
                  <p className="text-xs font-black uppercase text-slate-400">Success Rate</p>
                </div>
                <p className="text-2xl font-bold text-white">92% Match</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid - Modern Glass Cards */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1440px]">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { 
                icon: <Briefcase className="h-7 w-7" />, 
                t: "Career Focused", 
                d: "Specialized sections for corporate roles, business, and government services.",
                color: "bg-blue-50 text-blue-600"
              },
              { 
                icon: <ShieldCheck className="h-7 w-7" />, 
                t: "Authority Design", 
                d: "Clean, authoritative layouts that command respect and build immediate trust.",
                color: "bg-slate-900 text-white"
              },
              { 
                icon: <Zap className="h-7 w-7" />, 
                t: "AI Bio Generator", 
                d: "Let our AI draft a professional self-intro that reflects your true personality.",
                color: "bg-indigo-50 text-indigo-600"
              }
            ].map((f, i) => (
              <div key={i} className="group p-10 rounded-[2.5rem] border border-slate-100 bg-white transition-all hover:shadow-2xl hover:-translate-y-2">
                <div className={`h-16 w-16 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:rotate-6 ${f.color}`}>
                  {f.icon}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{f.t}</h4>
                <p className="text-slate-500 leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Content Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-[1440px]">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-[family-name:var(--font-display)] font-bold text-slate-900 mb-8">
                The Science of a <br /> Perfect Groom Profile
              </h2>
              <div className="space-y-6">
                {[
                  "Professional Stability: Clearly present your career trajectory.",
                  "Educational Pedigree: Highlight your academic milestones.",
                  "Family Foundation: Give families a clear view of your roots.",
                  "Aesthetic Appeal: Use designs that signal success."
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4 text-lg text-slate-700">
                    <CheckCircle2 className="h-6 w-6 text-blue-500 flex-shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-12 p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                <Quote className="h-8 w-8 text-blue-100 mb-4" />
                <p className="text-slate-600 italic leading-relaxed">
                  "A boy's biodata is the first interview of a lifetime partnership. We make sure you're dressed for success."
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
               <div className="aspect-square bg-blue-100 rounded-[4rem] rotate-3 absolute inset-0 -z-10" />
               <div className="relative bg-white p-4 rounded-[4rem] shadow-2xl">
                 <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                    alt="Confident Professional" 
                    className="rounded-[3.5rem] w-full h-full object-cover"
                 />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Preview */}
      <section id="preview">
        <PopularTemplatesSection gender="boy" />
      </section>

      {/* Dark Footer CTA */}
      <div className="container mx-auto px-6 py-24 max-w-[1440px]">
        <div className="relative rounded-[4rem] overflow-hidden bg-slate-900 p-12 md:p-24 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.15),_transparent_50%)]" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-8">
              Ready to take the <br /> next step?
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              Join thousands of professionals who have already built their perfect matrimonial profile with RishtaMaker.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/#builder" className="h-16 inline-flex items-center justify-center rounded-full bg-blue-600 px-12 text-lg font-bold text-white transition-all hover:scale-105 hover:bg-blue-700">
                Create My Biodata
              </Link>
              <Link href="/templates" className="h-16 inline-flex items-center justify-center rounded-full border border-slate-700 bg-white/5 px-12 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10">
                View All Designs
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Modernized */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-display)] font-bold text-slate-900 text-center mb-16">Expert Advice</h2>
          <div className="grid gap-6">
            {faqData.map((faq, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:shadow-xl hover:border-blue-100">
                <h4 className="text-xl font-bold text-slate-900 mb-4">{faq.q}</h4>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
