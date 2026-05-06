import type { Metadata } from "next";
import { PageShell } from "@/components/shared/page-shell";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Briefcase, GraduationCap, CheckCircle2, Star, ChevronRight, Quote, ShieldCheck, Zap } from "lucide-react";
import { BiodataCTA } from "@/components/biodata/CTA";
import { PopularTemplatesSection } from "@/components/marketing/popular-templates";

interface Props {
  params: Promise<{ profession: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { profession } = await params;
  const name = profession.charAt(0).toUpperCase() + profession.slice(1).replace("-", " ");
  return {
    title: `Marriage Biodata for ${name} | Professional ${name} Formats 2026`,
    description: `Create a professional marriage biodata specifically designed for ${name}s. Highlight your career and educational achievements with our elite templates.`,
    alternates: {
      canonical: `https://rishtamaker.in/biodata-for/${profession}`,
    },
  };
}

export async function generateStaticParams() {
  const professions = ["engineer", "doctor", "teacher", "lawyer", "accountant", "software-developer", "business-owner", "architect", "nurse", "banker", "management-professional", "government-employee", "pharmacist", "professor", "chef", "artist", "designer", "scientist", "police", "defence-personnel"];
  return professions.map((p) => ({
    profession: p,
  }));
}

const professionDetails: Record<string, any> = {
  engineer: {
    intro: "For Engineers, a biodata should highlight both technical pedigree and career growth. Whether you are in IT, Mechanical, or Civil engineering, your profile needs to reflect stability and ambition.",
    tips: ["Mention your specific branch and college clearly.", "Highlight if you work in a reputed MNC or Government sector.", "Mention work-life balance and interests beyond coding/machines."]
  },
  doctor: {
    intro: "Doctor matrimonial profiles require a balance of high educational achievement and compassionate personality. Specialization details are the most sought-after information in a doctor's biodata.",
    tips: ["Clearly state your MBBS/MD/MS specialization.", "Mention your hospital affiliation or private clinic details.", "Highlight your busy schedule and dedication to the profession."]
  },
  teacher: {
    intro: "A biodata for teachers should emphasize patience, values, and educational impact. Whether you teach in a school or a university, your profile should reflect a balanced and knowledgeable personality.",
    tips: ["Mention your subject of expertise and level of teaching.", "Highlight your contribution to student success.", "Mention your hobbies related to reading or creative arts."]
  },
  default: {
    intro: "A professional biodata is essential to highlight your career and family background. Our specialized formats help you present your professional journey with grace and authority.",
    tips: ["Keep your career summary concise and clear.", "Highlight your educational milestones.", "Use AI to write a polite and professional bio."]
  }
};

export default async function ProfessionBiodataPage({ params }: Props) {
  const { profession } = await params;
  const name = profession.charAt(0).toUpperCase() + profession.slice(1).replace("-", " ");
  const details = professionDetails[profession.toLowerCase()] || professionDetails.default;

  return (
    <PageShell>
      {/* Premium Corporate Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-slate-900 pt-20 pb-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(99,102,241,0.1),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-3 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-4 py-2 mb-8 backdrop-blur-sm">
                <Briefcase className="h-4 w-4 text-indigo-400" />
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400">
                  Specialized {name} Format 2026
                </p>
              </div>
              <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-display)] font-bold text-white leading-[1.1] mb-8 tracking-tight">
                Marriage Biodata <br />
                <span className="text-indigo-500 italic">for {name}s</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-xl mb-12 leading-relaxed">
                {details.intro} Choose a professional format that respects your hard-earned career and achievements.
              </p>
              <div className="flex flex-wrap gap-5">
                <Link href="/#builder" className="inline-flex h-16 items-center justify-center gap-3 rounded-full bg-indigo-600 px-10 text-lg font-bold text-white shadow-[0_20px_50px_rgba(99,102,241,0.3)] transition-all hover:scale-105 hover:bg-indigo-700 active:scale-95">
                  Create {name} Biodata <ArrowRight className="w-6 h-6" />
                </Link>
                <Link href="#preview" className="inline-flex h-16 items-center justify-center gap-3 rounded-full border border-slate-700 bg-white/5 px-10 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10">
                  View Formats
                </Link>
              </div>

              {/* Authority Badge */}
              <div className="mt-12 flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 max-w-md">
                <div className="h-12 w-12 rounded-full bg-indigo-500/20 flex items-center justify-center">
                  <Star className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <p className="text-white font-bold">Trusted by Professionals</p>
                  <p className="text-slate-500 text-sm">Premium layouts for elite career profiles</p>
                </div>
              </div>
            </div>

            {/* Premium Preview Image */}
            <div className="relative group">
              <div className="absolute -inset-10 bg-indigo-500/20 rounded-[4rem] blur-3xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative z-10 rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-slate-800/50 backdrop-blur-md">
                <Image 
                  src="/images/profession-biodata-hero.png" 
                  alt={`Premium ${name} Biodata Design`} 
                  width={800} 
                  height={1000}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Tips - Modern Cards */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
           <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-display)] font-bold text-slate-900 mb-6">Expert Tips for <span className="text-indigo-600">{name}s</span></h2>
              <p className="text-xl text-slate-500 leading-relaxed">Stand out from the crowd with these professional recommendations tailored for your career path.</p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-10">
              {details.tips.map((tip: string, i: number) => (
                <div key={i} className="group p-10 rounded-[2.5rem] border border-slate-100 bg-slate-50/30 transition-all hover:bg-white hover:shadow-2xl hover:-translate-y-2">
                  <div className="h-14 w-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <p className="text-lg text-slate-700 font-medium leading-relaxed">{tip}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="preview">
        <PopularTemplatesSection />
      </section>

      {/* Internal Linking SEO Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-12">Browse Other Specialized Formats</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Engineer", "Doctor", "Teacher", "Lawyer", "Accountant", "Software Developer", "Business Owner"].map(p => (
              <Link 
                key={p} 
                href={`/biodata-for/${p.toLowerCase().replace(" ", "-")}`}
                className="px-8 py-4 rounded-2xl bg-white border border-slate-200 text-sm font-bold text-slate-600 hover:border-indigo-500 hover:text-indigo-600 hover:shadow-lg transition-all"
              >
                Biodata for {p}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Quote */}
      <section className="py-24 bg-indigo-600 text-white">
        <div className="container mx-auto px-6 max-w-5xl text-center">
           <Quote className="h-16 w-16 mx-auto mb-10 opacity-20" />
           <h3 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-medium italic leading-relaxed mb-10">
             "Your career is a testament to your discipline. Your biodata should be a testament to your legacy."
           </h3>
           <div className="h-px w-20 bg-white/20 mx-auto" />
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
            "mainEntity": [
              {
                "@type": "Question",
                "name": `How to create a marriage biodata for ${name}?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `Simply choose a template on RishtaMaker, enter your professional and family details, use AI to write your bio, and download the PDF in 2 minutes.`
                }
              },
              {
                "@type": "Question",
                "name": `Is there a specific format for ${name}s?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `Yes, we have designed specific templates that highlight professional achievements and stability, which are ideal for ${name} matrimonial profiles.`
                }
              }
            ]
          })
        }}
      />
    </PageShell>
  );
}
