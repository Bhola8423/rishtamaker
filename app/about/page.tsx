import { PageShell } from "@/components/shared/page-shell";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Heart, Sparkles, ShieldCheck, Zap, Users, Target, ArrowRight } from "lucide-react";
import { BiodataCTA } from "@/components/biodata/CTA";

export const metadata: Metadata = {
  title: "About Us | RishtaMaker",
  description: "Learn about RishtaMaker, our mission to simplify the marriage biodata creation process, and our commitment to privacy and design.",
  alternates: {
    canonical: "https://rishtamaker.in/about",
  },
};

export default function AboutUs() {
  const values = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Privacy First",
      desc: "We believe your personal data belongs to you. That is why we do not require account creation and do not store your sensitive biodata indefinitely.",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Premium Design",
      desc: "First impressions matter. Our templates are crafted by professional designers to ensure your profile looks elegant and standout.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Effortless Simplicity",
      desc: "Create a complete, beautiful biodata in under 2 minutes. No complicated forms, just intuitive fields and live previews.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Inclusive Access",
      desc: "We support regional languages and cultural details because marriage traditions are diverse. We cater to every background.",
    },
  ];

  return (
    <PageShell>
      <div className="bg-[#fffcfb] min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden border-b border-red-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(177,30,36,0.05),_transparent_50%)]" />
          
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#b11e24]/10 bg-[#b11e24]/5 px-4 py-1.5 mb-6">
                  <span className="flex h-2 w-2 rounded-full bg-[#b11e24]" />
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#b11e24]">
                    Our Story
                  </p>
                </div>
                <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-display)] font-bold text-slate-900 leading-tight mb-6">
                  Simplifying Your Matrimonial Journey
                </h1>
                <p className="text-xl text-slate-600 mb-6 font-light leading-relaxed">
                  RishtaMaker was born out of a simple observation: creating a marriage biodata is often stressful, time-consuming, and results in outdated designs.
                </p>
                <p className="text-slate-600 mb-8 font-light leading-relaxed">
                  We set out to build a platform that respects your time and privacy, offering beautiful, modern templates that you can fill out and download in minutes. No accounts, no spam, just pure utility.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/#builder" className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#b11e24] px-8 text-base font-bold text-white shadow-[0_20px_50px_rgba(177,30,36,0.2)] transition-all hover:scale-105 hover:bg-[#8b1c31] active:scale-95">
                    Create Your Biodata <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link href="/templates" className="inline-flex h-14 items-center justify-center gap-3 rounded-full border-2 border-slate-200 bg-white px-8 text-base font-bold text-slate-700 transition-all hover:border-red-100 hover:bg-red-50">
                    Browse Templates
                  </Link>
                </div>
              </div>
              
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md aspect-square rounded-[3rem] overflow-hidden bg-white shadow-[0_20px_50px_rgba(177,30,36,0.08)] border border-red-50 p-4">
                  <Image
                    src="/images/about_hero.png"
                    alt="About RishtaMaker Illustration"
                    fill
                    className="object-cover rounded-[2.5rem]"
                    priority
                  />
                </div>
                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-red-50 flex items-center gap-3">
                  <div className="h-10 w-10 bg-red-50 rounded-full flex items-center justify-center text-[#b11e24]">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Made with Love</p>
                    <p className="text-[10px] text-slate-500">For your special journey</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-5xl text-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-[#b11e24] mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-slate-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-slate-600 font-light leading-relaxed max-w-3xl mx-auto">
              "To empower individuals in their search for a life partner by providing the tools to create professional, culturally resonant, and visually stunning marriage biodatas effortlessly and securely."
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 bg-[#fffcfb] border-t border-b border-red-50">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-slate-900 mb-4">
                What We Stand For
              </h2>
              <p className="text-slate-500 font-light max-w-2xl mx-auto">
                These core principles guide everything we build and every feature we design.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-lg hover:border-red-50 group">
                  <div className="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center text-[#b11e24] mb-6 transition-colors group-hover:bg-[#b11e24] group-hover:text-white">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-light leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats or Trust Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div>
                <p className="text-5xl font-bold text-[#b11e24] mb-2 font-[family-name:var(--font-display)]">100k+</p>
                <p className="text-sm text-slate-500 font-light">Biodatas Created</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-slate-900 mb-2 font-[family-name:var(--font-display)]">2 Min</p>
                <p className="text-sm text-slate-500 font-light">Average Creation Time</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-slate-900 mb-2 font-[family-name:var(--font-display)]">100%</p>
                <p className="text-sm text-slate-500 font-light">Private & Secure</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="container mx-auto px-6 py-24 max-w-6xl">
          <BiodataCTA />
        </div>
      </div>
    </PageShell>
  );
}
