import { Metadata } from "next";
import { PageShell } from "@/components/shared/page-shell";
import Link from "next/link";
import { UserCircle, Briefcase, GraduationCap, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { BiodataCTA } from "@/components/biodata/CTA";
import { PopularTemplatesSection } from "@/components/marketing/popular-templates";

export const metadata: Metadata = {
  title: "Marriage Biodata Format for Boy | Free Professional Maker 2026",
  description: "Create an impressive marriage biodata for boys in 2 minutes. High-quality professional formats for grooms. Free PDF download, AI assisted bio, and modern designs.",
  alternates: {
    canonical: "/biodata-for-boy",
  },
};

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
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 pt-20 pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.05),_transparent_40%)]" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-600/15 bg-blue-50 px-4 py-2 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                Premium Groom Formats
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-display)] font-bold text-slate-900 leading-tight mb-6">
              Marriage Biodata Format <br />
              <span className="text-blue-600">for Boys & Men</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mb-10">
              Design a professional matrimonial profile that highlights your career, family, and values. Stand out with our masculine and elegant designs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/create-biodata" className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-blue-600 px-8 text-base font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-blue-700">
                Start Building Now <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-slate prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">How to Create an Impressive Marriage Biodata for Boys</h2>
            <p>
              In the Indian matrimonial landscape, the <strong>marriage biodata for a boy</strong> is a critical document. It serves as the primary bridge between two families. While many believe that only physical appearance or salary matters, a well-structured biodata tells a story of character, ambition, and family roots.
            </p>
            <p>
              When creating a <em>matrimonial biodata for a groom</em>, it is essential to highlight your professional stability. In 2026, families look for partners who are not only well-settled but also have a clear vision for the future. Whether you are a software engineer, an entrepreneur, or a government official, presenting your career path clearly is vital.
            </p>
            <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Essential Sections for a Groom's Profile</h3>
            <p>
              A perfect groom's biodata should be divided into logical sections that answer the common questions asked by a bride's family:
            </p>
            <ul>
              <li><strong>Professional Pedigree:</strong> Don't just mention your job title; mention your company and location. It provides a sense of security.</li>
              <li><strong>Educational Background:</strong> Highlighting your degrees from reputable institutions signals intellect and hard work.</li>
              <li><strong>Family Structure:</strong> Mentioning your father's and mother's occupations helps the other family understand your upbringing.</li>
              <li><strong>Personal Values:</strong> Are you family-oriented? Do you love traveling? Use the "About Me" section to express your true self.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Grid Features */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="h-12 w-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Briefcase className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Career Focused</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Templates designed to give your professional achievements the spotlight they deserve.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="h-12 w-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Trustworthy Look</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Clean and authoritative layouts that build immediate trust with the bride's parents.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="h-12 w-12 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">AI Assisted Bio</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Let our AI write a polite and professional self-introduction for your matrimonial profile.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <PopularTemplatesSection />

      {/* Step Guide */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">Steps to Create Your Matrimonial Profile</h2>
          <div className="space-y-4">
            {[
              { t: "Pick a masculine template", d: "Choose from 'Modern', 'Royal Blue', or 'Classic Slate' styles." },
              { t: "Fill your professional details", d: "Enter your occupation, company, and annual income." },
              { t: "Add family information", d: "Mention your father, mother, and siblings clearly." },
              { t: "Generate Bio with AI", d: "Use our '✨ Generate' button for a perfect about me section." },
              { t: "Download and Share", d: "Get your PDF instantly and share it on WhatsApp or email." }
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4 p-6 rounded-2xl hover:bg-slate-50 transition-colors">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-bold">
                  {i + 1}
                </div>
                <div>
                  <h5 className="font-bold text-slate-900">{step.t}</h5>
                  <p className="text-sm text-slate-500">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">FAQ for Boys Biodata</h2>
          <div className="space-y-6">
            {faqData.map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-24 max-w-5xl">
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
