import { Metadata } from "next";
import { PageShell } from "@/components/shared/page-shell";
import Link from "next/link";
import { ArrowRight, Briefcase, GraduationCap, CheckCircle2 } from "lucide-react";
import { BiodataCTA } from "@/components/biodata/CTA";
import { PopularTemplatesSection } from "@/components/marketing/popular-templates";

interface Props {
  params: Promise<{ profession: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { profession } = await params;
  const name = profession.charAt(0).toUpperCase() + profession.slice(1);
  
  return {
    title: `Marriage Biodata for ${name} | Professional Format & Maker`,
    description: `Create a professional marriage biodata for ${name}s. Custom templates designed for ${name} matrimonial profiles. Free PDF download and AI tools.`,
    alternates: {
      canonical: `/biodata-for-${profession}`,
    },
  };
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
      {/* Hero Section */}
      <section className="bg-slate-50 pt-20 pb-28 border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-600/15 bg-blue-50 px-4 py-2 mb-6">
            <Briefcase className="h-4 w-4 text-blue-600" />
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Specialized Format
            </p>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
            Marriage Biodata for <span className="text-blue-600">{name}s</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            {details.intro} Choose a professional format that respects your hard-earned career.
          </p>
          <Link href="/create-biodata" className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-blue-600 px-8 text-base font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-blue-700">
            Create {name} Biodata <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Expert Tips */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-blue-50 rounded-[2.5rem] p-10 md:p-16 border border-blue-100">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              Expert Tips for {name} Biodata
            </h2>
            <div className="space-y-6">
              {details.tips.map((tip: string, i: number) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm border border-blue-100">
                    <CheckCircle2 className="h-3 w-3" />
                  </div>
                  <p className="text-slate-700 leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <PopularTemplatesSection />

      {/* Internal Linking SEO Boost */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h3 className="text-xl font-bold text-slate-900 mb-8">More Specialized Formats</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Engineer", "Doctor", "Teacher", "Lawyer", "Accountant", "Software Developer", "Business Owner"].map(p => (
              <Link 
                key={p} 
                href={`/biodata-for-${p.toLowerCase().replace(" ", "-")}`}
                className="p-4 rounded-2xl bg-white border border-slate-200 text-center text-sm font-bold text-slate-600 hover:border-blue-500 hover:text-blue-600 transition-all"
              >
                Biodata for {p}
              </Link>
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
