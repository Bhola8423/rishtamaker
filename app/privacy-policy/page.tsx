import { PageShell } from "@/components/shared/page-shell";
import { Metadata } from "next";
import Image from "next/image";
import { Shield, Eye, Lock, Database, Cookie, Share2, UserCheck, Smile, Mail, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | RishtaMaker",
  description: "Read the Privacy Policy for RishtaMaker to understand how we collect, use, and protect your personal information when creating marriage biodata.",
  alternates: {
    canonical: "https://rishtamaker.in/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  const sections = [
    { id: "info-collect", title: "1. Information We Collect", icon: <Eye className="w-5 h-5" /> },
    { id: "how-use", title: "2. How We Use Information", icon: <Shield className="w-5 h-5" /> },
    { id: "storage", title: "3. Data Storage & Retention", icon: <Database className="w-5 h-5" /> },
    { id: "cookies", title: "4. Cookies & Web Beacons", icon: <Cookie className="w-5 h-5" /> },
    { id: "third-party", title: "5. Third-Party Policies", icon: <Share2 className="w-5 h-5" /> },
    { id: "rights", title: "6. Your Data Rights", icon: <UserCheck className="w-5 h-5" /> },
    { id: "children", title: "7. Children's Privacy", icon: <Smile className="w-5 h-5" /> },
    { id: "consent", title: "8. Consent", icon: <CheckCircle2 className="w-5 h-5" /> },
    { id: "contact", title: "9. Contact Us", icon: <Mail className="w-5 h-5" /> },
  ];

  return (
    <PageShell>
      <div className="bg-[#fffcfb] min-h-screen">
        {/* Modern Hero Section */}
        <section className="relative py-24 overflow-hidden border-b border-red-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(177,30,36,0.05),_transparent_50%)]" />
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-red-500/[0.03] blur-3xl" />
          
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#b11e24]/10 bg-[#b11e24]/5 px-4 py-1.5 mb-6">
                  <span className="flex h-2 w-2 rounded-full bg-[#b11e24]" />
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#b11e24]">
                    Trust & Transparency
                  </p>
                </div>
                <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-display)] font-bold text-slate-900 leading-tight mb-6">
                  Privacy Policy
                </h1>
                <p className="text-xl text-slate-600 mb-4 font-light leading-relaxed">
                  At RishtaMaker, we value your trust above all else. This policy outlines how we handle your data with the highest standards of security and respect.
                </p>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <span className="font-medium">Last Updated:</span>
                  <span>May 13, 2026</span>
                </div>
              </div>
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md aspect-square rounded-[3rem] overflow-hidden bg-white shadow-[0_20px_50px_rgba(177,30,36,0.08)] border border-red-50 p-4">
                  <Image
                    src="/images/privacy_hero.png"
                    alt="Privacy and Security Illustration"
                    fill
                    className="object-cover rounded-[2.5rem]"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-red-50 flex items-center gap-3">
                  <div className="h-10 w-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">End-to-End Privacy</p>
                    <p className="text-[10px] text-slate-500">No account required to start</p>
                  </div>
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
                    Welcome to RishtaMaker. Your privacy is of paramount importance to us. This Privacy Policy document contains types of information that is collected and recorded by RishtaMaker and how we use it.
                  </p>
                  <p className="text-slate-600 leading-relaxed font-light">
                    At RishtaMaker, accessible from rishtamaker.in, one of our main priorities is the privacy of our visitors. This Privacy Policy document applies to all users of our website and services, particularly those creating marriage biodata profiles. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
                  </p>
                </div>

                {/* Section 1 */}
                <div id="info-collect" className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm scroll-mt-24">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 bg-red-50 rounded-2xl flex items-center justify-center text-[#b11e24]">
                      <Eye className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-slate-900">1. Information We Collect</h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-light mb-6">
                    RishtaMaker provides a service to help you create beautiful marriage biodata. To provide this service, we collect information that you voluntarily provide when using our biodata builder.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-[#fffcfb] p-6 rounded-2xl border border-red-50">
                      <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#b11e24]" />
                        1.1 Personal Data You Provide
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed font-light mb-4">
                        When you use our biodata builder, we collect the personal details you input to generate your document. This may include:
                      </p>
                      <ul className="grid grid-cols-1 gap-2 text-sm text-slate-600 font-light">
                        <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#b11e24]" /> Personal Identity (Name, DOB)</li>
                        <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#b11e24]" /> Physical Attributes</li>
                        <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#b11e24]" /> Professional & Education</li>
                        <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#b11e24]" /> Family Details</li>
                        <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#b11e24]" /> Cultural & Religious Info</li>
                        <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#b11e24]" /> Photographs</li>
                      </ul>
                    </div>
                    
                    <div className="bg-[#fffcfb] p-6 rounded-2xl border border-red-50">
                      <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#b11e24]" />
                        1.2 Automatically Collected
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed font-light mb-4">
                        Like most websites, we automatically collect certain information when you visit and interact with our site:
                      </p>
                      <ul className="grid grid-cols-1 gap-2 text-sm text-slate-600 font-light">
                        <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#b11e24]" /> Device & browser information</li>
                        <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#b11e24]" /> IP address & ISP details</li>
                        <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#b11e24]" /> Pages viewed & time spent</li>
                        <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#b11e24]" /> Referring URLs</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 2 */}
                <div id="how-use" className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm scroll-mt-24">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 bg-red-50 rounded-2xl flex items-center justify-center text-[#b11e24]">
                      <Shield className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-slate-900">2. How We Use Your Information</h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-light mb-6">
                    We use the information we collect in various ways, including to:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { title: "Generate PDF", desc: "To create the marriage biodata PDF based on the information you provide." },
                      { title: "Improve UI/UX", desc: "To understand how users interact with our site and make improvements." },
                      { title: "No Registration", desc: "We are proud to offer a service that does not require registration." },
                      { title: "Analytics", desc: "To monitor and analyze usage trends and preferences." },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="h-8 w-8 bg-white rounded-lg flex items-center justify-center text-[#b11e24] border border-red-50 flex-shrink-0">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h4>
                          <p className="text-xs text-slate-500 font-light">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 3 */}
                <div id="storage" className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm scroll-mt-24">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 bg-red-50 rounded-2xl flex items-center justify-center text-[#b11e24]">
                      <Database className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-slate-900">3. Data Storage and Retention</h2>
                  </div>
                  <div className="bg-[#fffcfb] p-6 rounded-2xl border border-red-50 mb-6">
                    <p className="text-[#b11e24] text-sm font-bold mb-2">Core Principle: Zero Indefinite Storage</p>
                    <p className="text-slate-600 text-sm leading-relaxed font-light">
                      The personal information you enter into the biodata builder is processed to generate your PDF document. We do not store your highly sensitive personal biodata details on our servers indefinitely. Once your session ends or after a short processing period necessary to generate and deliver your PDF, this data is typically purged from our active systems.
                    </p>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-light text-sm">
                    We may retain anonymized or aggregated data that does not identify you for statistical purposes and to improve our templates and services.
                  </p>
                </div>

                {/* Section 4 */}
                <div id="cookies" className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm scroll-mt-24">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 bg-red-50 rounded-2xl flex items-center justify-center text-[#b11e24]">
                      <Cookie className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-slate-900">4. Cookies and Web Beacons</h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-light mb-4">
                    Like any other website, RishtaMaker uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited.
                  </p>
                  <p className="text-slate-600 leading-relaxed font-light text-sm">
                    You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.
                  </p>
                </div>

                {/* Section 5 */}
                <div id="third-party" className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm scroll-mt-24">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 bg-red-50 rounded-2xl flex items-center justify-center text-[#b11e24]">
                      <Share2 className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-slate-900">5. Third-Party Privacy Policies</h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-light mb-6">
                    RishtaMaker's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party servers.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                      <h4 className="font-bold text-slate-900 mb-2">Google Analytics</h4>
                      <p className="text-xs text-slate-500 font-light leading-relaxed">We use Google Analytics to help us understand how our customers use the site. This helps us make better decisions about layout and features.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                      <h4 className="font-bold text-slate-900 mb-2">Payment Processors</h4>
                      <p className="text-xs text-slate-500 font-light leading-relaxed">If you purchase premium templates, your payment information is handled by secure third-party payment gateways. We do not store your credit card details.</p>
                    </div>
                  </div>
                </div>

                {/* Section 6 */}
                <div id="rights" className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm scroll-mt-24">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 bg-red-50 rounded-2xl flex items-center justify-center text-[#b11e24]">
                      <UserCheck className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-slate-900">6. Your Data Protection Rights</h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-light mb-6">
                    We want to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
                  </p>
                  <div className="space-y-4">
                    {[
                      { title: "The right to access", desc: "You have the right to request copies of your personal data." },
                      { title: "The right to rectification", desc: "You have the right to request that we correct any information you believe is inaccurate." },
                      { title: "The right to erasure", desc: "You have the right to request that we erase your personal data, under certain conditions." },
                    ].map((right, i) => (
                      <div key={i} className="flex gap-4 p-4 rounded-xl bg-[#fffcfb] border border-red-50">
                        <div className="h-6 w-6 bg-[#b11e24]/10 rounded-full flex items-center justify-center text-[#b11e24] flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold">{i+1}</span>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 mb-1">{right.title}</h4>
                          <p className="text-xs text-slate-500 font-light">{right.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 7, 8, 9 grouped or styled simply */}
                <div id="children" className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm scroll-mt-24">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 bg-red-50 rounded-2xl flex items-center justify-center text-[#b11e24]">
                      <Smile className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-slate-900">7. Children's Information</h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-light text-sm">
                    RishtaMaker does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information.
                  </p>
                </div>

                <div id="consent" className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm scroll-mt-24">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-slate-900">8. Consent</h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-light text-sm">
                    By using our website, you hereby consent to our Privacy Policy and agree to its terms.
                  </p>
                </div>

                <div id="contact" className="bg-slate-900 text-white p-8 md:p-10 rounded-3xl shadow-xl scroll-mt-24">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                      <Mail className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold">9. Contact Us</h2>
                  </div>
                  <p className="text-slate-300 leading-relaxed font-light text-sm mb-6">
                    If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.
                  </p>
                  <a href="mailto:support@rishtamaker.in" className="inline-flex items-center gap-2 text-[#fffcfb] hover:underline font-medium">
                    support@rishtamaker.in
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
