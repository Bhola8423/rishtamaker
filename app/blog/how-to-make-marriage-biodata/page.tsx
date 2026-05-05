import { Metadata } from "next";
import { PageShell } from "@/components/shared/page-shell";
import Link from "next/link";
import { BookOpen, Star, UserPlus, Info, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Make Marriage Biodata | Complete Guide",
  description: "Learn how to make an impressive marriage biodata with our complete guide. Tips, formats, and best practices for creating a matrimonial profile.",
};

export default function HowToMakeBiodataPage() {
  return (
    <PageShell>
      <div className="container mx-auto px-4 py-16 sm:py-24 max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-600/15 bg-teal-600/5 px-4 py-2 backdrop-blur-sm">
            <BookOpen className="h-4 w-4 text-teal-600" />
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-600">
              Complete Guide
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-semibold text-slate-900 tracking-tight">
            How to Make a <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">Marriage Biodata</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Creating a marriage biodata is an important step in finding your life partner. Follow our comprehensive guide to create one that stands out.
          </p>
        </div>

        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-100">
          <div className="prose prose-slate prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-slate-600 mb-10">
              Your matrimonial profile is the first impression you make on prospective families. A well-structured, honest, and aesthetically pleasing biodata significantly increases your chances of finding the right match.
            </p>

            <div className="grid gap-8 mb-12">
              {[
                {
                  title: "1. Personal Information",
                  icon: <UserPlus className="h-6 w-6 text-teal-500" />,
                  content: "Start with basic details like your full name, date of birth, time of birth, place of birth, height, and blood group. A clear, recent photograph is highly recommended."
                },
                {
                  title: "2. Education & Career",
                  icon: <Star className="h-6 w-6 text-amber-500" />,
                  content: "Highlight your highest qualifications, college/university, and current profession. Mention your company name and your role. You can optionally include income if you are comfortable."
                },
                {
                  title: "3. Family Background",
                  icon: <Info className="h-6 w-6 text-indigo-500" />,
                  content: "Provide details about your parents' professions, family type (nuclear/joint), and siblings. This gives a good understanding of your family values and background."
                },
                {
                  title: "4. Contact Details",
                  icon: <CheckCircle className="h-6 w-6 text-emerald-500" />,
                  content: "Always provide an active email address and phone number for communication. You can also mention your current residential address."
                }
              ].map((section, idx) => (
                <div key={idx} className="flex gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-md transition-all">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                      {section.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 m-0">{section.title}</h3>
                    <p className="text-slate-600 m-0">{section.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-teal-50 rounded-2xl p-8 border border-teal-100 mb-10">
              <h3 className="text-2xl font-bold text-teal-900 mb-4 mt-0">Pro Tips for a Great Biodata</h3>
              <ul className="space-y-3 m-0 pl-0 list-none">
                {[
                  "Keep it concise and honest. Avoid exaggeration.",
                  "Use a clear, professional format that is easy to read.",
                  "Proofread thoroughly for spelling and grammar errors.",
                  "Ensure your photograph is recent, clear, and taken in good lighting."
                ].map((tip, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-teal-800">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="text-center pt-8 border-t border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 mt-0">Ready to put this into practice?</h3>
              <Link href="/#builder" className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-teal-600 px-8 text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-teal-700 no-underline">
                Start Building Your Biodata
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
