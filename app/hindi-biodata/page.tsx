"use client";

import { PageShell } from "@/components/shared/page-shell";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Languages, Sparkles, Download, CheckCircle, Quote, Star, Users, ShieldCheck } from "lucide-react";
import { BiodataCTA } from "@/components/biodata/CTA";
import { PopularTemplatesSection } from "@/components/marketing/popular-templates";
import { useState } from "react";

export default function HindiBiodataPage() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { t: "विवरण भरें", d: "अपना नाम, शिक्षा और परिवार की जानकारी हिंदी या अंग्रेजी में दर्ज करें।" },
    { t: "डिजाइन चुनें", d: "हमारे भव्य और पारंपरिक हिंदी टेंपलेट्स में से अपना पसंदीदा चुनें।" },
    { t: "PDF डाउनलोड", d: "एक क्लिक में हाई-क्वालिटी हिंदी बायोडाटा PDF प्राप्त करें।" }
  ];

  const faqData = [
    {
      q: "क्या मैं हिंदी में बायोडाटा बना सकता हूँ?",
      a: "हाँ, RishtaMaker पर आप आसानी से शादी के लिए बायोडाटा हिंदी में बना सकते हैं। हमारे फॉर्मेट्स में हिंदी फॉन्ट का बहुत ही सुंदर उपयोग किया गया है।"
    },
    {
      q: "बायोडाटा में क्या-क्या जानकारी होनी चाहिए?",
      a: "एक अच्छे बायोडाटा में आपका नाम, जन्म तिथि, समय, स्थान, शिक्षा, व्यवसाय, और परिवार की जानकारी होनी चाहिए।"
    },
    {
      q: "क्या यह फ्री है?",
      a: "हाँ, आप RishtaMaker पर फ्री में बेसिक हिंदी बायोडाटा बना सकते हैं और उसे PDF में डाउनलोड कर सकते हैं।"
    }
  ];

  return (
    <PageShell>
      {/* Premium Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#fffdfa] pt-20 pb-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(217,119,6,0.08),_transparent_50%)]" />
        <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-amber-500/[0.03] blur-[120px]" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-600/20 bg-amber-50 px-4 py-2 mb-8">
                <span className="flex h-2 w-2 rounded-full bg-amber-600 animate-pulse" />
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-700">
                  Premium Hindi Templates 2026
                </p>
              </div>
              <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-display)] font-bold text-slate-900 leading-[1.1] mb-8 tracking-tight">
                शादी के लिए <br />
                <span className="text-amber-600 italic">बायोडाटा फॉर्मेट</span> <br />
                हिंदी में बनाएं
              </h1>
              <p className="text-xl text-slate-600 max-w-xl mb-12 leading-relaxed">
                अपनी मातृभाषा में एक प्रभावशाली और पारंपरिक शादी का बायोडाटा तैयार करें। हमारे हिंदी फॉर्मेट्स आपके व्यक्तित्व और संस्कारों को बखूबी दर्शाते हैं।
              </p>
              <div className="flex flex-wrap gap-5">
                <Link href="/#builder" className="inline-flex h-16 items-center justify-center gap-3 rounded-full bg-amber-600 px-10 text-lg font-bold text-white shadow-[0_20px_50px_rgba(217,119,6,0.25)] transition-all hover:scale-105 hover:bg-amber-700 active:scale-95">
                  अभी शुरू करें <ArrowRight className="w-6 h-6" />
                </Link>
                <Link href="#templates" className="inline-flex h-16 items-center justify-center gap-3 rounded-full border-2 border-slate-200 bg-white px-10 text-lg font-bold text-slate-700 transition-all hover:border-amber-200 hover:bg-amber-50">
                  डिजाइन देखें
                </Link>
              </div>

              {/* Social Proof Mini */}
              <div className="mt-12 flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${i+10}`} alt="User" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-500 font-medium">
                  <span className="text-slate-900 font-bold">10,000+</span> लोगों ने हिंदी बायोडाटा बनाया
                </p>
              </div>
            </div>

            {/* Hero Image / Preview */}
            <div className="relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[12px] border-white group">
                <Image 
                  src="/images/hindi-biodata-hero.png" 
                  alt="Hindi Marriage Biodata" 
                  width={800} 
                  height={1000}
                  className="w-full h-auto transition-transform duration-1000 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              {/* Decorative Cards */}
              <div className="absolute -right-8 -bottom-8 h-32 w-32 bg-amber-100 rounded-3xl -z-0 rotate-12" />
              <div className="absolute -left-8 top-10 p-6 bg-white rounded-3xl shadow-2xl z-20 animate-bounce-slow">
                <CheckCircle className="h-8 w-8 text-green-500 mb-2" />
                <p className="text-xs font-black uppercase text-slate-400 tracking-tighter">Verified Content</p>
                <p className="text-sm font-bold text-slate-900">100% शुद्ध हिंदी</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works - Interactive Steps */}
      <section className="py-24 bg-white border-y border-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-display)] font-bold text-slate-900 mb-4">
              सिर्फ 3 आसान <span className="text-amber-600">चरणों में</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">RishtaMaker के साथ अपना प्रोफेशनल हिंदी बायोडाटा बनाना बहुत ही सरल है।</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div 
                key={i} 
                className={`relative p-10 rounded-[2.5rem] border-2 transition-all duration-500 cursor-default ${activeStep === i ? 'border-amber-500 bg-amber-50/50 shadow-xl scale-105' : 'border-slate-100 bg-white hover:border-amber-200'}`}
                onMouseEnter={() => setActiveStep(i)}
              >
                <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-black transition-all ${activeStep === i ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                  0{i + 1}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.t}</h3>
                <p className="text-slate-600 leading-relaxed">{step.d}</p>
                {activeStep === i && (
                  <div className="absolute bottom-6 right-8">
                    <Sparkles className="h-6 w-6 text-amber-400 animate-pulse" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO & Education Section */}
      <section className="py-24 bg-[#fffdfc] relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
               <div className="aspect-square bg-amber-100 rounded-[4rem] -rotate-6 absolute inset-0" />
               <div className="relative bg-white p-12 rounded-[3.5rem] shadow-xl border border-amber-50">
                  <Quote className="h-12 w-12 text-amber-200 mb-8" />
                  <h2 className="text-3xl font-bold text-slate-900 mb-8 font-[family-name:var(--font-display)]">हिंदी में बायोडाटा क्यों जरूरी है?</h2>
                  <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                    <p>
                      भारत में आज भी कई परिवार पारंपरिक रीति-रिवाजों और अपनी भाषा को बहुत महत्व देते हैं। एक <strong>हिंदी बायोडाटा फॉर्मेट (Hindi Biodata Format)</strong> न केवल जानकारी साझा करता है, बल्कि आपके संस्कारों और जड़ों के प्रति आपके सम्मान को भी दर्शाता है।
                    </p>
                    <p>
                      खासकर बड़े-बुजुर्गों को अपनी भाषा में बायोडाटा पढ़ना अधिक सहज और सुखद लगता है। यह एक भावनात्मक जुड़ाव पैदा करता है जो अंग्रेजी बायोडाटा में अक्सर नहीं मिल पाता।
                    </p>
                  </div>
               </div>
            </div>

            <div className="space-y-12">
              <h3 className="text-3xl font-bold text-slate-900 font-[family-name:var(--font-display)]">हिंदी बायोडाटा के मुख्य भाग</h3>
              <div className="grid gap-6">
                {[
                  { t: "व्यक्तिगत विवरण", d: "नाम, जन्म तिथि, समय और स्थान।", icon: <Users className="h-5 w-5" /> },
                  { t: "शिक्षा और कार्य", d: "आपकी डिग्रियां और वर्तमान नौकरी।", icon: <Star className="h-5 w-5" /> },
                  { t: "पारिवारिक जानकारी", d: "माता-पिता का नाम और भाई-बहनों का विवरण।", icon: <ShieldCheck className="h-5 w-5" /> },
                  { t: "सांस्कृतिक जानकारी", d: "गोत्र, कुलदेवता, और मांगलिक स्थिति।", icon: <Sparkles className="h-5 w-5" /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-3xl bg-white border border-slate-100 hover:shadow-md transition-all">
                    <div className="flex-shrink-0 h-12 w-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.t}</h4>
                      <p className="text-sm text-slate-500">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Previews */}
      <section id="templates">
        <PopularTemplatesSection />
      </section>

      {/* Unique Features Icons Grid */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,_rgba(217,119,6,0.1),_transparent_50%)]" />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { icon: <Languages className="h-8 w-8" />, t: "शुद्ध हिंदी फॉन्ट", d: "सुंदर और पठनीय हिंदी फोंट्स।" },
              { icon: <Sparkles className="h-8 w-8" />, t: "AI बायो जनरेटर", d: "AI से हिंदी परिचय लिखें।" },
              { icon: <Download className="h-8 w-8" />, t: "फ्री PDF डाउनलोड", d: "हाई-क्वालिटी PDF डाउनलोड करें।" },
              { icon: <CheckCircle className="h-8 w-8" />, t: "पारंपरिक डिजाइन", d: "संस्कृति के अनुकूल लेआउट।" }
            ].map((f, i) => (
              <div key={i} className="text-center group">
                <div className="mx-auto h-20 w-20 bg-white/5 border border-white/10 rounded-[2rem] flex items-center justify-center mb-8 transition-all group-hover:bg-amber-600 group-hover:scale-110">
                  <div className="text-amber-500 group-hover:text-white transition-colors">
                    {f.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3">{f.t}</h4>
                <p className="text-slate-400 text-sm">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ in Hindi */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-[family-name:var(--font-display)] font-bold text-slate-900 mb-4">अक्सर पूछे जाने वाले प्रश्न</h2>
             <p className="text-slate-500">हिंदी बायोडाटा बनाने से संबंधित आपके सवालों के जवाब यहाँ हैं।</p>
          </div>
          <div className="grid gap-4">
            {faqData.map((faq, i) => (
              <details key={i} className="group bg-slate-50 rounded-[2rem] border border-slate-100 overflow-hidden">
                <summary className="list-none p-8 flex items-center justify-between cursor-pointer font-bold text-slate-900 text-lg">
                  {faq.q}
                  <span className="transition-transform group-open:rotate-180">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </summary>
                <div className="px-8 pb-8 text-slate-600 leading-relaxed text-[1.05rem]">
                  {faq.a}
                </div>
              </details>
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
