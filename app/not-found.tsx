"use client";

import Link from "next/link";
import { PageShell } from "@/components/shared/page-shell";
import { ArrowRight, HelpCircle, Heart, FileText, Layout, Crown, Languages } from "lucide-react";

export default function NotFound() {
  return (
    <PageShell>
      <div className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#fffcfb] to-white py-16 px-6">
        {/* Decorative background glows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(177,30,36,0.04),_transparent_70%)]" />
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-red-500/5 blur-3xl" />
        <div className="absolute right-0 bottom-10 h-96 w-96 rounded-full bg-amber-400/5 blur-3xl" />

        <div className="relative max-w-4xl w-full text-center z-10 space-y-12">
          {/* Main 404 Typography Block */}
          <div className="relative inline-block select-none">
            <span className="font-[family-name:var(--font-display)] text-[8rem] sm:text-[11rem] font-black leading-none bg-clip-text text-transparent bg-gradient-to-r from-[#b11e24] via-[#8e1933] to-[#D7A347] tracking-tighter filter drop-shadow-md">
              404
            </span>
            <div className="absolute -top-4 -right-4 bg-amber-50 border border-amber-200/60 p-2 rounded-full shadow-lg rotate-12 flex items-center justify-center">
              <Heart className="w-6 h-6 text-[#b11e24] fill-[#b11e24] animate-pulse" />
            </div>
          </div>

          {/* Core Message */}
          <div className="space-y-4 max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-[family-name:var(--font-display)]">
              Looking for the <span className="text-[#b11e24] italic">Perfect Match</span>?
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed font-medium">
              We couldn't find the page you are looking for. The link may have changed, or the matrimonial profile has moved. Let's get you back on track!
            </p>
          </div>

          {/* Quick Core Action CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-5 pt-4">
            <Link
              href="/#builder"
              className="inline-flex h-16 items-center justify-center gap-3 rounded-full bg-[#b11e24] px-10 text-lg font-bold text-white shadow-[0_20px_40px_rgba(177,30,36,0.2)] transition-all hover:scale-105 hover:bg-[#8e1933] active:scale-95"
            >
              Build Biodata Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/templates"
              className="inline-flex h-16 items-center justify-center gap-3 rounded-full border-2 border-slate-200 bg-white px-10 text-lg font-bold text-slate-700 transition-all hover:border-[#b11e24]/30 hover:bg-slate-50 active:scale-95"
            >
              Browse Templates
            </Link>
          </div>

          {/* SEO Content & Navigational Help Section */}
          <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-md border border-slate-100 rounded-3xl p-8 shadow-xl shadow-slate-100/50">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D7A347] mb-6 flex items-center justify-center gap-2">
              <HelpCircle className="w-4 h-4 text-amber-500" />
              Explore Top Matrimonial Formats
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 text-left">
              {[
                {
                  title: "Biodata by Categories",
                  desc: "Create personalized designs tailored for grooms or brides.",
                  links: [
                    { label: "Biodata for Boy", href: "/biodata-for-boy" },
                    { label: "Biodata for Girl", href: "/biodata-for-girl" },
                  ],
                  icon: <FileText className="w-5 h-5 text-[#b11e24]" />,
                },
                {
                  title: "Popular Formats & PDF",
                  desc: "Instantly downloadable layouts optimized for WhatsApp.",
                  links: [
                    { label: "Marriage Biodata Format", href: "/marriage-biodata-format" },
                    { label: "Matrimonial Biodata", href: "/matrimonial-biodata" },
                  ],
                  icon: <Layout className="w-5 h-5 text-amber-500" />,
                },
                {
                  title: "Premium & Word Alternatives",
                  desc: "Modern layouts replacing Microsoft Word templates.",
                  links: [
                    { label: "Premium Templates", href: "/premium-templates" },
                    { label: "Marriage Biodata in Word", href: "/marriage-biodata-format-in-word" },
                  ],
                  icon: <Crown className="w-5 h-5 text-emerald-500" />,
                },
                {
                  title: "Regional & Indian Languages",
                  desc: "Create marriage biodatas in your regional mother tongue.",
                  links: [
                    { label: "Hindi Marriage Biodata", href: "/hindi-biodata" },
                    { label: "Marriage Biodata Download", href: "/marriage-biodata-download" },
                  ],
                  icon: <Languages className="w-5 h-5 text-blue-500" />,
                },
              ].map((category, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-50 transition hover:shadow-md">
                  <div className="h-10 w-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0">
                    {category.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-slate-800 text-sm leading-none">{category.title}</h3>
                    <p className="text-xs text-slate-500 leading-normal">{category.desc}</p>
                    <div className="flex gap-3 text-xs font-semibold text-[#b11e24]">
                      {category.links.map((link, lIdx) => (
                        <Link key={lIdx} href={link.href} className="hover:underline">
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
