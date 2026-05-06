import { Metadata } from "next";
import { PageShell } from "@/components/shared/page-shell";
import Link from "next/link";
import { ArrowRight, Layout, Zap, Smartphone, CheckCircle } from "lucide-react";
import { BiodataCTA } from "@/components/biodata/CTA";
import { PopularTemplatesSection } from "@/components/marketing/popular-templates";

export const metadata: Metadata = {
  title: "Simple Biodata Format for Marriage | Minimalistic Designs",
  description: "Looking for a simple biodata format? Create a clean, minimalistic matrimonial profile in minutes. Free PDF download, easy to use, no registration.",
  alternates: {
    canonical: "/simple-biodata-format",
  },
};

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
      {/* Hero Section */}
      <section className="bg-white pt-24 pb-32 border-b border-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-widest mb-6">
              Minimalist & Clean
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-[1.1] mb-8">
              Simple Biodata Format <br />
              <span className="text-slate-400">for a Professional Impression</span>
            </h1>
            <p className="text-xl text-slate-500 mb-10 leading-relaxed">
              Sometimes, less is more. Our simple biodata templates focus on clarity and readability, ensuring your details shine through without unnecessary clutter.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/#builder" className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-slate-900 px-8 text-base font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-slate-800">
                Create Simple Biodata <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Simplicity Wins in Matrimonial Profiles</h2>
          <div className="prose prose-slate prose-lg max-w-none">
            <p>
              In a world filled with flashy designs, a <strong>simple biodata format</strong> stands out for its elegance and professionalism. Whether you are creating a biodata for a boy or a girl, choosing a clean layout ensures that essential details like education, career, and family background are communicated effectively.
            </p>
            <p>
              At <strong>RishtaMaker</strong>, we understand that not everyone wants a "royal" or "traditional" look. Some users prefer the <em>minimalistic approach</em>. Our simple formats are optimized for WhatsApp sharing and home printing, using standard fonts and balanced white space to create a premium feel.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Templates */}
      <PopularTemplatesSection />

      {/* Comparison Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Modern Features for Simple Profiles</h2>
              <ul className="space-y-6">
                {[
                  { icon: <Zap className="h-5 w-5" />, title: "Instant Generation", desc: "No need to spend hours on formatting. Just type and download." },
                  { icon: <Layout className="h-5 w-5" />, title: "WhatsApp Friendly", desc: "Our simple layouts are perfectly sized for mobile screens." },
                  { icon: <Smartphone className="h-5 w-5" />, title: "Edit Anytime", desc: "Need to change a phone number? Come back and edit for free." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200 text-slate-900">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-square rounded-[3rem] bg-gradient-to-br from-slate-200 to-slate-100 overflow-hidden border border-slate-200 shadow-inner">
               <div className="absolute inset-10 bg-white rounded-2xl shadow-2xl p-8 border border-slate-50">
                  <div className="h-4 w-1/3 bg-slate-100 rounded mb-6" />
                  <div className="space-y-3">
                    <div className="h-2 w-full bg-slate-50 rounded" />
                    <div className="h-2 w-5/6 bg-slate-50 rounded" />
                    <div className="h-2 w-4/6 bg-slate-50 rounded" />
                  </div>
                  <div className="mt-12 h-32 w-full border-2 border-dashed border-slate-100 rounded-xl flex items-center justify-center text-slate-300 text-xs">
                    Clean Content Only
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-10 text-center">Simple Biodata FAQ</h2>
          <div className="space-y-8">
            {faqData.map((faq, i) => (
              <div key={i}>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{faq.q}</h4>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
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
