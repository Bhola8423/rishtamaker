import { Metadata } from "next";
import { PageShell } from "@/components/shared/page-shell";
import Link from "next/link";
import { ArrowRight, Languages, Sparkles, Download, CheckCircle } from "lucide-react";
import { BiodataCTA } from "@/components/biodata/CTA";
import { PopularTemplatesSection } from "@/components/marketing/popular-templates";

export const metadata: Metadata = {
  title: "शादी के लिए बायोडाटा फॉर्मेट | Hindi Marriage Biodata Maker",
  description: "शादी के लिए बेहतरीन बायोडाटा फॉर्मेट हिंदी में बनाएं। Create professional marriage biodata in Hindi for boys and girls. Free PDF download and AI support.",
  alternates: {
    canonical: "/hindi-biodata",
  },
};

export default function HindiBiodataPage() {
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
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#fffcf5] pt-20 pb-32 border-b border-amber-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(217,119,6,0.05),_transparent_40%)]" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-600/15 bg-amber-50 px-4 py-2 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-amber-600 animate-pulse" />
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-amber-700">
              Traditional Hindi Formats
            </p>
          </div>
          <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-display)] font-bold text-slate-900 leading-tight mb-6">
            शादी के लिए <span className="text-amber-600">बायोडाटा फॉर्मेट</span> <br />
            हिंदी में बनाएं
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            अपनी मातृभाषा में एक प्रभावशाली और पारंपरिक शादी का बायोडाटा तैयार करें। हमारे हिंदी फॉर्मेट्स आपके व्यक्तित्व और संस्कारों को बखूबी दर्शाते हैं।
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#builder" className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-amber-600 px-8 text-base font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-amber-700">
              अभी बायोडाटा बनाएं <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-slate prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">हिंदी में शादी का बायोडाटा क्यों जरूरी है?</h2>
            <p>
              भारत में आज भी कई परिवार पारंपरिक रीति-रिवाजों और अपनी भाषा को बहुत महत्व देते हैं। एक <strong>हिंदी बायोडाटा फॉर्मेट (Hindi Biodata Format)</strong> न केवल जानकारी साझा करता है, बल्कि आपके संस्कारों और जड़ों के प्रति आपके सम्मान को भी दर्शाता है। खासकर बड़े-बुजुर्गों को अपनी भाषा में बायोडाटा पढ़ना अधिक सहज और सुखद लगता है।
            </p>
            <p>
              <strong>RishtaMaker</strong> पर हमने विशेष रूप से उन लोगों के लिए डिजाइन तैयार किए हैं जो अपना <em>शादी का बायोडाटा हिंदी में</em> बनाना चाहते हैं। हमारे प्लेटफॉर्म पर आपको शुद्ध और सुंदर हिंदी फॉन्ट के साथ बेहतरीन लेआउट मिलते हैं, जिन्हें आप व्हाट्सएप या प्रिंट के लिए आसानी से उपयोग कर सकते हैं।
            </p>
            <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">हिंदी बायोडाटा के मुख्य भाग</h3>
            <p>
              एक आदर्श हिंदी शादी के बायोडाटा में निम्नलिखित जानकारियां स्पष्ट रूप से होनी चाहिए:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>व्यक्तिगत विवरण:</strong> नाम, जन्म तिथि, समय और स्थान।</li>
              <li><strong>शिक्षा और कार्य:</strong> आपकी डिग्रियां और वर्तमान नौकरी।</li>
              <li><strong>पारिवारिक जानकारी:</strong> माता-पिता का नाम, व्यवसाय और भाई-बहनों का विवरण।</li>
              <li><strong>सांस्कृतिक जानकारी:</strong> गोत्र, कुलदेवता, और मांगलिक स्थिति (यदि हो)।</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Unique Features */}
      <section className="py-20 bg-amber-50/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Languages className="h-6 w-6" />, t: "शुद्ध हिंदी फॉन्ट", d: "सुंदर और पठनीय हिंदी फोंट्स का उपयोग।" },
              { icon: <Sparkles className="h-6 w-6" />, t: "AI बायो जनरेटर", d: "AI की मदद से सुंदर हिंदी परिचय लिखें।" },
              { icon: <Download className="h-6 w-6" />, t: "फ्री PDF डाउनलोड", d: "बिना किसी शुल्क के हाई-क्वालिटी PDF पाएं।" },
              { icon: <CheckCircle className="h-6 w-6" />, t: "पारंपरिक डिजाइन", d: "भारतीय संस्कृति के अनुकूल भव्य लेआउट।" }
            ].map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-amber-100 text-center">
                <div className="mx-auto h-12 w-12 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center mb-4">
                  {f.icon}
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{f.t}</h4>
                <p className="text-xs text-slate-500">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Previews */}
      <PopularTemplatesSection />

      {/* FAQ in Hindi */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">अक्सर पूछे जाने वाले प्रश्न (FAQ)</h2>
          <div className="space-y-4">
            {faqData.map((faq, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
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
