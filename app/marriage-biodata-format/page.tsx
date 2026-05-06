import { Metadata } from "next";
import { PageShell } from "@/components/shared/page-shell";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Download, FileText, Sparkles, Layout } from "lucide-react";
import { BiodataCTA } from "@/components/biodata/CTA";
import { PopularTemplatesSection } from "@/components/marketing/popular-templates";

export const metadata: Metadata = {
  title: "Marriage Biodata Format 2026 | Free PDF Download & Maker",
  description: "Download the latest marriage biodata format for boys and girls. Create professional matrimonial profiles with AI in 2 minutes. Free PDF download.",
  alternates: {
    canonical: "/marriage-biodata-format",
  },
};

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
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#fcf9f7] pt-20 pb-32">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#b11e24]/15 bg-white px-4 py-2 shadow-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-[#b11e24] animate-pulse" />
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#b11e24]">
                Trending Format 2026
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-display)] font-bold text-slate-900 leading-tight mb-6">
              Marriage Biodata Format <br />
              <span className="text-[#b11e24]">Free Download & Maker</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mb-10">
              Stop using boring Word documents. Create a stunning, professional marriage biodata format that makes a lasting impression on the bride or groom's family.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#builder" className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#b11e24] px-8 text-base font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-[#8b1c31]">
                Create My Biodata <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/templates" className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 text-base font-bold text-slate-700 transition-all hover:bg-slate-50">
                View All Formats
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-slate prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Importance of a Well-Structured Marriage Biodata Format</h2>
            <p>
              In the world of arranged marriages, your <strong>marriage biodata format</strong> acts as your first introduction. It is more than just a piece of paper; it represents your personality, your family values, and your professional achievements. A cluttered or poorly formatted biodata can often lead to missed opportunities, regardless of how qualified you are.
            </p>
            <p>
              With <strong>RishtaMaker</strong>, we have revolutionized the way people create their matrimonial profiles. Gone are the days of struggling with Microsoft Word or searching for outdated templates. Our platform provides modern, aesthetically pleasing, and culturally appropriate <em>biodata formats for marriage</em> that are designed to catch the eye of potential life partners and their families.
            </p>
            <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">What to look for in a 2026 Biodata Format?</h3>
            <p>
              A modern biodata should be clean, readable, and well-organized. It should balance traditional requirements (like religion, caste, and horoscope) with modern expectations (like career goals and lifestyle choices). Key sections include:
            </p>
            <ul className="space-y-2 list-disc pl-6">
              <li><strong>Personal Profile:</strong> Name, Age, Height, and a brief "About Me".</li>
              <li><strong>Education & Career:</strong> Your degrees and current job role.</li>
              <li><strong>Family Background:</strong> Details about parents and siblings.</li>
              <li><strong>Horoscope/Cultural Details:</strong> Rashi, Nakshatra, and Gotra (if applicable).</li>
              <li><strong>Contact Information:</strong> How the families can reach out.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Template Preview */}
      <PopularTemplatesSection />

      {/* How to Create Guide */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How to Create Your Marriage Biodata in 5 Steps</h2>
            <p className="text-slate-600">Creating a professional biodata has never been easier.</p>
          </div>
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Select Template", desc: "Choose from our wide range of professional designs." },
              { step: "02", title: "Enter Details", desc: "Fill in your personal, career, and family information." },
              { step: "03", title: "Use AI Help", desc: "Generate a polite 'About Me' section using our AI tool." },
              { step: "04", title: "Live Preview", desc: "See your changes instantly in the live preview sidebar." },
              { step: "05", title: "Download PDF", desc: "Download your high-quality PDF and share it on WhatsApp." }
            ].map((s, i) => (
              <div key={i} className="relative">
                <div className="text-4xl font-black text-slate-200 mb-4">{s.step}</div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                {i < 4 && <ArrowRight className="hidden md:block absolute -right-6 top-10 h-4 w-4 text-slate-300" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Download className="h-6 w-6" />, title: "Free PDF Download", desc: "Get high-quality PDF exports ready for print or mobile sharing." },
              { icon: <Sparkles className="h-6 w-6" />, title: "AI Content Generator", desc: "Auto-fill your bio and expectations with professional Indian tone." },
              { icon: <Layout className="h-6 w-6" />, title: "Modern Designs", desc: "20+ designs ranging from traditional to contemporary styles." },
              { icon: <FileText className="h-6 w-6" />, title: "No Registration", desc: "Create your biodata instantly without creating an account." }
            ].map((f, i) => (
              <div key={i} className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#b11e24] shadow-sm ring-1 ring-slate-100">
                  {f.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h4>
                <p className="text-sm text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqData.map((faq, i) => (
              <div key={i} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
                <h4 className="text-lg font-bold text-slate-900 mb-3">{faq.q}</h4>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* FAQ JSON-LD */}
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
        </div>
      </section>

      {/* Final CTA */}
      <div className="container mx-auto px-4 py-24 max-w-5xl">
        <BiodataCTA />
      </div>
    </PageShell>
  );
}
