import { PageShell } from "@/components/shared/page-shell";
import { Metadata } from "next";
import Image from "next/image";
import { FileText, Shield, Scale, AlertTriangle, UserX, Globe, RefreshCw, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | RishtaMaker",
  description: "Read the Terms and Conditions for RishtaMaker to understand the rules and guidelines for using our marriage biodata creation service.",
  alternates: {
    canonical: "https://rishtamaker.in/terms-and-conditions",
  },
};

export default function TermsAndConditions() {
  const sections = [
    { id: "acceptance", title: "1. Acceptance of Terms", icon: <FileText className="w-5 h-5" /> },
    { id: "use-service", title: "2. Use of Service", icon: <Shield className="w-5 h-5" /> },
    { id: "intellectual", title: "3. Intellectual Property", icon: <Scale className="w-5 h-5" /> },
    { id: "liability", title: "4. Limitation of Liability", icon: <AlertTriangle className="w-5 h-5" /> },
    { id: "termination", title: "5. Termination", icon: <UserX className="w-5 h-5" /> },
    { id: "governing", title: "6. Governing Law", icon: <Globe className="w-5 h-5" /> },
    { id: "changes", title: "7. Changes to Terms", icon: <RefreshCw className="w-5 h-5" /> },
  ];

  return (
    <PageShell>
      <div className="bg-[#fffcfb] min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden border-b border-red-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(177,30,36,0.05),_transparent_50%)]" />
          
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#b11e24]/10 bg-[#b11e24]/5 px-4 py-1.5 mb-6">
                  <span className="flex h-2 w-2 rounded-full bg-[#b11e24]" />
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#b11e24]">
                    Rules & Guidelines
                  </p>
                </div>
                <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-display)] font-bold text-slate-900 leading-tight mb-6">
                  Terms & Conditions
                </h1>
                <p className="text-xl text-slate-600 mb-4 font-light leading-relaxed">
                  Please read these terms carefully before using our service. By using RishtaMaker, you agree to comply with these guidelines.
                </p>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <span className="font-medium">Last Updated:</span>
                  <span>May 13, 2026</span>
                </div>
              </div>
              
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md aspect-square rounded-[3rem] overflow-hidden bg-white shadow-[0_20px_50px_rgba(177,30,36,0.08)] border border-red-50 p-4">
                  <Image
                    src="/images/terms_hero.png"
                    alt="Terms and Conditions Illustration"
                    fill
                    className="object-cover rounded-[2.5rem]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section with Sticky Sidebar */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid lg:grid-cols-4 gap-12">
              
              {/* Sticky Sidebar Navigation */}
              <div className="hidden lg:block">
                <div className="sticky top-24 space-y-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <h4 className="text-xs font-black uppercase tracking-[0.1em] text-slate-400 mb-4 px-3">Quick Navigation</h4>
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-600 rounded-lg hover:bg-red-50 hover:text-[#b11e24] transition-colors"
                    >
                      <span className="text-slate-400 group-hover:text-[#b11e24]">{section.icon}</span>
                      {section.title.split('. ')[1]}
                    </a>
                  ))}
                </div>
              </div>

              {/* Main Content Area */}
              <div className="lg:col-span-3 space-y-12">
                
                {/* Intro Card */}
                <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm">
                  <p className="text-lg text-slate-700 leading-relaxed mb-6 font-light">
                    Welcome to RishtaMaker. These Terms and Conditions govern your use of our website located at rishtamaker.in and our services.
                  </p>
                  <p className="text-slate-600 leading-relaxed font-light">
                    By accessing or using our service, you agree to be bound by these terms. If you disagree with any part of the terms, then you may not access the service.
                  </p>
                </div>

                {/* Section 1 */}
                <div id="acceptance" className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm scroll-mt-24">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 bg-red-50 rounded-2xl flex items-center justify-center text-[#b11e24]">
                      <FileText className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-slate-900">1. Acceptance of Terms</h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-light mb-4">
                    By creating a biodata on RishtaMaker, you confirm that you are of legal marriageable age in your jurisdiction and that the information you provide is true and accurate.
                  </p>
                  <p className="text-slate-600 leading-relaxed font-light text-sm">
                    You agree that you are solely responsible for the content you input into our platform and for any consequences that may arise from sharing your generated biodata with third parties.
                  </p>
                </div>

                {/* Section 2 */}
                <div id="use-service" className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm scroll-mt-24">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 bg-red-50 rounded-2xl flex items-center justify-center text-[#b11e24]">
                      <Shield className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-slate-900">2. Use of Service</h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-light mb-4">
                    You are granted a limited, non-exclusive, non-transferable license to use RishtaMaker to create marriage biodatas for personal use.
                  </p>
                  <div className="bg-[#fffcfb] p-6 rounded-2xl border border-red-50 mb-4">
                    <p className="text-[#b11e24] text-sm font-bold mb-2">Prohibited Uses:</p>
                    <ul className="grid grid-cols-1 gap-2 text-sm text-slate-600 font-light">
                      <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#b11e24]" /> Using the service for any illegal purpose.</li>
                      <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#b11e24]" /> Impersonating any person or entity.</li>
                      <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#b11e24]" /> Uploading malicious code or viruses.</li>
                      <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#b11e24]" /> Scraping or extracting data from our platform.</li>
                    </ul>
                  </div>
                </div>

                {/* Section 3 */}
                <div id="intellectual" className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm scroll-mt-24">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 bg-red-50 rounded-2xl flex items-center justify-center text-[#b11e24]">
                      <Scale className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-slate-900">3. Intellectual Property</h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-light mb-4">
                    The templates, designs, logos, and content on RishtaMaker are the intellectual property of RishtaMaker and are protected by copyright laws.
                  </p>
                  <p className="text-slate-600 leading-relaxed font-light text-sm">
                    You retain ownership of the personal data you input. However, by using our platform, you grant us the right to process that data to generate your biodata document.
                  </p>
                </div>

                {/* Section 4 */}
                <div id="liability" className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm scroll-mt-24">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 bg-red-50 rounded-2xl flex items-center justify-center text-[#b11e24]">
                      <AlertTriangle className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-slate-900">4. Limitation of Liability</h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-light mb-4">
                    RishtaMaker is provided "as is" without any warranties, express or implied. We do not guarantee that the service will be uninterrupted or error-free.
                  </p>
                  <p className="text-slate-600 leading-relaxed font-light text-sm">
                    In no event shall RishtaMaker be liable for any indirect, incidental, special, consequential or punitive damages arising out of or in connection with your use of the service.
                  </p>
                </div>

                {/* Section 5 */}
                <div id="termination" className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm scroll-mt-24">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 bg-red-50 rounded-2xl flex items-center justify-center text-[#b11e24]">
                      <UserX className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-slate-900">5. Termination</h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-light text-sm">
                    We reserve the right to terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                  </p>
                </div>

                {/* Section 6 */}
                <div id="governing" className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm scroll-mt-24">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 bg-red-50 rounded-2xl flex items-center justify-center text-[#b11e24]">
                      <Globe className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-slate-900">6. Governing Law</h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-light text-sm">
                    These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                  </p>
                </div>

                {/* Section 7 */}
                <div id="changes" className="bg-slate-900 text-white p-8 md:p-10 rounded-3xl shadow-xl scroll-mt-24">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                      <RefreshCw className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold">7. Changes to Terms</h2>
                  </div>
                  <p className="text-slate-300 leading-relaxed font-light text-sm mb-4">
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
                  </p>
                  <p className="text-slate-300 leading-relaxed font-light text-sm">
                    By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the service.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
