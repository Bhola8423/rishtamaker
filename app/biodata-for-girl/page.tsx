"use client";

import { PageShell } from "@/components/shared/page-shell";
import Link from "next/link";
import Image from "next/image";
import { Heart, Stars, UserCircle, ArrowRight, ShieldCheck, Sparkles, Star, CheckCircle2, Quote, Flower2 } from "lucide-react";
import { BiodataCTA } from "@/components/biodata/CTA";
import { PopularTemplatesSection } from "@/components/marketing/popular-templates";

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
      {/* Premium Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#fffafb] pt-20 pb-20">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(225,29,72,0.08),_transparent_50%)]" />
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-rose-500/[0.02] blur-[120px]" />
        
        <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-3 rounded-full border border-rose-600/20 bg-rose-50 px-4 py-2 mb-8">
                <span className="flex h-2 w-2 rounded-full bg-rose-600 animate-pulse" />
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-rose-700">
                  Elegant Bride Formats 2026
                </p>
              </div>
              <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-display)] font-bold text-slate-900 leading-[1.1] mb-8 tracking-tight">
                Create a Graceful <br />
                <span className="text-rose-600 italic">Matrimonial Profile</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-xl mb-12 leading-relaxed">
                Reflect your personality, education, and values with our collection of beautiful and aesthetic designs. Make your first impression unforgettable.
              </p>
              <div className="flex flex-wrap gap-5">
                <Link href="/#builder" className="inline-flex h-16 items-center justify-center gap-3 rounded-full bg-rose-600 px-10 text-lg font-bold text-white shadow-[0_20px_50px_rgba(225,29,72,0.25)] transition-all hover:scale-105 hover:bg-rose-700 active:scale-95">
                  Create My Profile <ArrowRight className="w-6 h-6" />
                </Link>
                <Link href="#preview" className="inline-flex h-16 items-center justify-center gap-3 rounded-full border-2 border-rose-100 bg-white px-10 text-lg font-bold text-rose-700 transition-all hover:bg-rose-50">
                  Browse Designs
                </Link>
              </div>

              {/* Social Proof Mini */}
              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="h-12 w-12 rounded-full border-2 border-white bg-rose-100 overflow-hidden">
                       <img src={`https://i.pravatar.cc/150?u=${i+20}`} alt="User" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-slate-900 font-bold">Loved by 25,000+ Brides</p>
                  <p className="text-sm text-slate-500 font-medium">Top choice for Indian families</p>
                </div>
              </div>
            </div>

            {/* Premium Preview Image */}
            <div className="relative group">
              <div className="absolute -inset-10 bg-rose-100 rounded-[5rem] -rotate-6 transition-transform duration-700 group-hover:rotate-0" />
              <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(225,29,72,0.15)] border-[12px] border-white">
                <Image 
                  src="/images/biodata-girl-hero.png" 
                  alt="Elegant Girl Biodata Design" 
                  width={800} 
                  height={1000}
                  className="w-full h-auto transition-transform duration-1000 group-hover:scale-105"
                  priority
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -right-12 -bottom-12 p-8 bg-white rounded-[3rem] shadow-2xl z-20 animate-bounce-slow">
                <Flower2 className="h-10 w-10 text-rose-400 mb-2" />
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Aesthetic</p>
                <p className="text-sm font-bold text-slate-900">Floral Themes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Graceful Features */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1440px]">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            {[
              { 
                icon: <Heart className="h-8 w-8" />, 
                t: "Graceful Designs", 
                d: "Aesthetic templates with soft tones and elegant typography perfect for brides.",
                bg: "bg-rose-50 text-rose-600"
              },
              { 
                icon: <Stars className="h-8 w-8" />, 
                t: "AI Bio Assistant", 
                d: "Our AI tool helps write a polite and beautiful introduction for you instantly.",
                bg: "bg-amber-50 text-amber-600"
              },
              { 
                icon: <ShieldCheck className="h-8 w-8" />, 
                t: "Secure & Private", 
                d: "Your data is safe with us. We do not share your profile without your permission.",
                bg: "bg-green-50 text-green-600"
              }
            ].map((f, i) => (
              <div key={i} className="p-12 rounded-[3rem] border border-slate-50 transition-all hover:bg-slate-50 hover:shadow-inner">
                <div className={`mx-auto h-20 w-20 rounded-[2rem] flex items-center justify-center mb-8 transition-all hover:scale-110 ${f.bg}`}>
                  {f.icon}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{f.t}</h4>
                <p className="text-slate-500 leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section with Image */}
      <section className="py-24 bg-[#fffcfd]">
        <div className="container mx-auto px-6 max-w-[1440px]">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
               <div className="aspect-[4/5] bg-rose-100 rounded-[4rem] -rotate-3 absolute inset-0" />
               <div className="relative bg-white p-4 rounded-[4rem] shadow-2xl">
                 <img 
                    src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800" 
                    alt="Elegant Bride Profile" 
                    className="rounded-[3.5rem] w-full h-full object-cover"
                 />
               </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-display)] font-bold text-slate-900 mb-10 leading-tight">
                Crafting the Perfect <br />
                <span className="text-rose-600">Matrimonial Journey</span>
              </h2>
              <div className="space-y-8">
                {[
                  "Elegant Self-Introduction: A polite and warm 'About Me' section.",
                  "Educational Achievements: Highlight your degrees and skills.",
                  "Family Heritage: Describe your parents and siblings with pride.",
                  "Lifestyle Preferences: Share your values and expectations."
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <p className="text-lg text-slate-700 font-medium">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 p-8 rounded-[2.5rem] bg-rose-50 border border-rose-100 relative">
                <Quote className="h-10 w-10 text-rose-200 absolute top-6 right-8" />
                <p className="text-rose-900 font-medium italic leading-relaxed pr-10">
                  "A girl's biodata is her proxy in traditional matchmaking. We ensure it speaks with grace and authenticity."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Preview */}
      <section id="preview">
        <PopularTemplatesSection gender="girl" />
      </section>

      {/* Soft CTA Section */}
      <div className="container mx-auto px-6 py-24 max-w-[1440px]">
        <div className="relative rounded-[4rem] overflow-hidden bg-white border border-rose-100 p-12 md:p-24 text-center shadow-2xl shadow-rose-100">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(225,29,72,0.05),_transparent_50%)]" />
           <div className="relative z-10">
             <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-display)] font-bold text-slate-900 mb-8">
               Ready to find your <br />
               <span className="text-rose-600">perfect match?</span>
             </h2>
             <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
               Create a stunning biodata in less than 2 minutes and share it with families who share your values.
             </p>
             <div className="flex flex-wrap justify-center gap-6">
               <Link href="/#builder" className="h-16 inline-flex items-center justify-center rounded-full bg-rose-600 px-12 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-rose-700">
                 Create My Profile
               </Link>
               <Link href="/templates" className="h-16 inline-flex items-center justify-center rounded-full border-2 border-rose-100 bg-white px-12 text-lg font-bold text-rose-700 transition-all hover:bg-rose-50">
                 View Samples
               </Link>
             </div>
           </div>
        </div>
      </div>

      {/* FAQ Modernized */}
      <section className="py-24 bg-[#fffafb]">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-display)] font-bold text-slate-900 text-center mb-16">Frequently Asked</h2>
          <div className="grid gap-6">
            {faqData.map((faq, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-white border border-rose-50 shadow-sm transition-all hover:shadow-xl hover:scale-[1.02]">
                <h4 className="text-xl font-bold text-slate-900 mb-4">{faq.q}</h4>
                <p className="text-slate-600 leading-relaxed text-lg">{faq.a}</p>
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
