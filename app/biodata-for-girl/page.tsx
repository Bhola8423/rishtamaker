import { Metadata } from "next";
import { PageShell } from "@/components/shared/page-shell";
import Link from "next/link";
import { Heart, Stars, UserCircle, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { BiodataCTA } from "@/components/biodata/CTA";
import { PopularTemplatesSection } from "@/components/marketing/popular-templates";

export const metadata: Metadata = {
  title: "Marriage Biodata Format for Girl | Beautiful Templates 2026",
  description: "Create a beautiful and graceful marriage biodata for girls. High-quality elegant formats for brides. Free PDF download, AI assisted bio, and aesthetic designs.",
  alternates: {
    canonical: "/biodata-for-girl",
  },
};

export default function BiodataForGirlPage() {
  const faqData = [
    {
      q: "What makes a good marriage biodata for a girl?",
      a: "A girl's biodata should be elegant, clean, and focus on her personality, education, and family values. Adding details about hobbies and expectations can also help in finding a compatible partner."
    },
    {
      q: "Should I include a photo in my biodata?",
      a: "Yes, a clear and aesthetic photo is highly recommended for a girl's profile. It adds a personal touch and makes the biodata more engaging for the groom's family."
    },
    {
      q: "How can AI help in creating a girl's biodata?",
      a: "Our AI tool can help write a polite and graceful self-introduction, ensuring the tone is respectful and culturally appropriate for Indian matrimony."
    }
  ];

  return (
    <PageShell>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#fffafb] pt-20 pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(225,29,72,0.05),_transparent_40%)]" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-600/15 bg-rose-50 px-4 py-2 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-rose-600 animate-pulse" />
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-rose-600">
                Elegant Bride Formats
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-display)] font-bold text-slate-900 leading-tight mb-6">
              Marriage Biodata Format <br />
              <span className="text-rose-600">for Girls & Women</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mb-10">
              Create a stunning matrimonial profile that reflects your grace, education, and family heritage. Choose from our collection of beautiful and aesthetic designs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/create-biodata" className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-rose-600 px-8 text-base font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-rose-700">
                Create My Profile <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-slate prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Crafting the Perfect Marriage Biodata for a Girl</h2>
            <p>
              In the Indian wedding journey, the <strong>marriage biodata for a girl</strong> is often the first step toward a beautiful new beginning. It is a graceful representation of who you are—your education, your upbringing, and your aspirations for the future. A well-designed biodata can leave a lasting positive impression on potential life partners and their families.
            </p>
            <p>
              When creating a <em>matrimonial biodata for a bride</em>, the focus should be on authenticity and elegance. In 2026, modern families value a balance between traditional roots and progressive education. Whether you are a professional, an artist, or a home-maker, your biodata should tell your unique story with poise.
            </p>
            <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">What to Include in Your Profile?</h3>
            <p>
              An ideal girl's biodata format should clearly organize information to help the other family understand your background:
            </p>
            <ul>
              <li><strong>Elegant Self-Introduction:</strong> A polite and warm "About Me" section that reflects your personality and values.</li>
              <li><strong>Educational Achievements:</strong> Highlight your degrees and specialized skills, as education is highly valued in modern matches.</li>
              <li><strong>Family Heritage:</strong> Briefly describe your parents and siblings to provide a sense of your family environment.</li>
              <li><strong>Cultural & Lifestyle Preferences:</strong> Mention your hobbies, diet, and what you value in a life partner.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 rounded-3xl bg-white shadow-sm border border-slate-100">
              <div className="mx-auto h-12 w-12 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Graceful Designs</h4>
              <p className="text-slate-500 text-sm">Aesthetic templates with soft tones and elegant typography perfect for brides.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white shadow-sm border border-slate-100">
              <div className="mx-auto h-12 w-12 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center mb-6">
                <Stars className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">AI Bio Assistant</h4>
              <p className="text-slate-500 text-sm">Our AI tool helps write a polite and beautiful introduction for you instantly.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white shadow-sm border border-slate-100">
              <div className="mx-auto h-12 w-12 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Secure & Private</h4>
              <p className="text-slate-500 text-sm">Your data is safe with us. We do not share your profile without your permission.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Preview */}
      <PopularTemplatesSection />

      {/* Step Guide */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">Create Your Biodata in 5 Easy Steps</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { s: "Select a Theme", d: "Choose an elegant floral or minimal design." },
              { s: "Add Your Photo", d: "Upload a clear and aesthetic profile picture." },
              { s: "Enter Details", d: "Fill in your education, career, and family info." },
              { s: "AI Bio Draft", d: "Let AI write a graceful introduction for you." },
              { s: "Get Your PDF", d: "Download and share it instantly on WhatsApp." }
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-rose-600 font-bold mb-4">
                  {i + 1}
                </div>
                <h5 className="font-bold text-slate-900 text-sm mb-2">{step.s}</h5>
                <p className="text-xs text-slate-500 leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">FAQ for Girls Biodata</h2>
          <div className="space-y-4">
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
