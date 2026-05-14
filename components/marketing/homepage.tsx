"use client";

import { BiodataFormBuilder } from "@/components/biodata/biodata-form-builder";
import { biodataTemplates } from "@/components/biodata/templates";
import { TemplateCard } from "@/components/templates/TemplateCard";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/constants/site-content";
import { PageShell } from "@/components/shared/page-shell";
import { getAllPosts } from "@/lib/blog";
import { SectionHeading } from "@/components/marketing/section-heading";
import { BiodataCTA } from "@/components/biodata/CTA";



const heroBiodataImages = [
  {
    src: "/images/bioDataImg1.jpg",
    alt: "Traditional biodata template preview",
    className: "left-[0%] top-[20%] z-10 w-[35%] rotate-[-10deg] lg:left-[1%] lg:top-[21%]",
  },
  {
    src: "/images/bioDataImg2.webp",
    alt: "Centered biodata template preview",
    className: "left-1/2 top-[3%] z-20 w-[37%] -translate-x-1/2 rotate-0 lg:top-[4%]",
  },
  {
    src: "/images/bioDataImg3.webp",
    alt: "Modern biodata template preview",
    className: "right-[0%] top-[20%] z-10 w-[35%] rotate-[9deg] lg:right-[1%] lg:top-[21%]",
  },
];

export function Homepage() {
  return (
    <PageShell>
      {/* Hero Section */}
      <section className="relative -mt-10 overflow-hidden border-b border-white/70 bg-[#fffdfc]">
        {/* Animated Background Gradients & Patterns */}
        <div className="absolute inset-0 w-full bg-[radial-gradient(circle_at_top_left,_rgba(177,30,36,0.08),_transparent_40%),radial-gradient(circle_at_80%_60%,_rgba(215,163,71,0.1),_transparent_50%),linear-gradient(180deg,#ffffff_0%,#fdf8f5_100%)]" />

        {/* Floating blobs */}
        <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-red-500/10 blur-[100px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute right-0 top-10 h-[500px] w-[500px] rounded-full bg-amber-400/10 blur-[120px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }} />

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

        <div className="relative flex flex-col px-4 pb-20 pt-10 sm:px-6 lg:px-8">
          <div className="grid flex-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-10 relative z-10 animate-in fade-in slide-in-from-left-8 duration-1000 ease-out">
              <div className="flex flex-wrap items-center gap-4">
                <div className="inline-flex items-center gap-2.5 rounded-full border border-[#b11e24]/20 bg-white/60 px-5 py-2.5 backdrop-blur-md shadow-sm glass">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-[#b11e24] animate-ping" />
                  <p className="text-[0.7rem] font-bold uppercase tracking-[0.25em] text-[#b11e24]">
                    The Best Marriage Biodata Maker
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-50 px-4 py-2 glass">
                  <p className="text-[10px] font-black uppercase tracking-widest text-emerald-700">
                    Free • No Login Required
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h1 className="font-[family-name:var(--font-display)] text-[3.5rem] font-bold leading-[1.05] tracking-tight text-[#120d0e] sm:text-[4.5rem] lg:text-[5rem] xl:text-[5.5rem]">
                  Free Marriage <span className="text-[#b11e24] relative">
                    Biodata Template
                    <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#b11e24]/20" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" /></svg>
                  </span> & Maker
                </h1>
                <p className="max-w-[640px] text-lg leading-relaxed text-slate-600 sm:text-xl lg:text-[1.4rem] lg:leading-[1.6] font-medium">
                  Create beautiful profiles with our free <strong>marriage biodata format</strong> for boys and girls. Best <strong>shaadi biodata maker</strong> to instantly download your <strong>matrimonial profile</strong> as PDF.
                </p>
              </div>

              <div className="flex flex-col gap-6 sm:flex-row sm:items-center pt-4">
                <Link
                  href="/#builder"
                  className="group relative inline-flex h-16 items-center justify-center gap-3 overflow-hidden rounded-full bg-[#b11e24] px-10 text-lg font-bold text-white shadow-[0_20px_40px_rgba(177,30,36,0.25)] transition-all hover:scale-105 hover:bg-[#931719] active:scale-95 sm:w-auto"
                >
                  <span className="relative z-10">Create Biodata</span>
                  <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Link>

                <Link
                  href="/templates"
                  className="inline-flex h-16 items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white px-8 text-lg font-bold text-slate-700 transition-all hover:border-[#b11e24]/30 hover:bg-slate-50 active:scale-95 sm:w-auto glass"
                >
                  Browse Templates
                </Link>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-12 w-12 rounded-full border-4 border-white bg-slate-200 shadow-md transition-transform hover:-translate-y-2 hover:z-20 ring-1 ring-slate-100" style={{ backgroundImage: `url(https://i.pravatar.cc/100?img=${i + 20})`, backgroundSize: 'cover' }} />
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <span className="text-[0.7rem] font-bold text-slate-400 uppercase tracking-widest">Loved by 10k+ families</span>
                </div>
              </div>
            </div>

            <div className="relative flex min-h-[500px] items-center justify-center lg:min-h-[700px] animate-in fade-in zoom-in duration-1000 ease-out">
              {/* Main glowing background for the images */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(177,30,36,0.1),_transparent_70%)] blur-3xl" />
              
              <div className="absolute bottom-10 left-1/2 h-32 w-[85%] -translate-x-1/2 bg-[radial-gradient(circle,_rgba(32,24,26,0.1),_transparent_70%)] blur-3xl opacity-40" />
              
              {heroBiodataImages.map((image, idx) => (
                <div
                  key={image.src}
                  className={`absolute flex items-center justify-center p-3 sm:p-5 rounded-[2.5rem] overflow-hidden bg-white/40 shadow-[0_32px_64px_rgba(32,24,26,0.12)] border border-white/80 backdrop-blur-md transition-all duration-700 hover:scale-105 hover:z-30 hover:shadow-[0_45px_80px_rgba(32,24,26,0.2)] animate-float ${image.className}`}
                  style={{ 
                    animationDelay: `${idx * 1.5}s`,
                    animationDuration: '6s',
                    transitionDelay: `${idx * 150}ms` 
                  }}
                >
                  <div className="w-full bg-white shadow-[0_12px_40px_rgba(0,0,0,0.15)] rounded-2xl overflow-hidden flex-none relative">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={560}
                      height={760}
                      className="h-auto w-full object-cover"
                      priority={idx === 1}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div id="builder" className="scroll-mt-6">
        <BiodataFormBuilder />
      </div>

      {/* Why Choose RishtaMaker Section */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 -mt-10">
        <div className="rounded-[2rem] border border-white/60 bg-white/70 p-8 shadow-[0_20px_60px_rgba(177,30,36,0.06)] backdrop-blur-xl sm:p-12">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-slate-900 sm:text-4xl">
              Why Choose RishtaMaker
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              The most trusted platform for creating professional marriage biodata.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Instant PDF Download", desc: "Download your biodata instantly in high-quality PDF format.", icon: "⬇️" },
              { title: "Modern Biodata Templates", desc: "Choose from a variety of clean, modern, and traditional designs.", icon: "🎨" },
              { title: "Easy Customization", desc: "Add, remove, or edit fields to fit your specific needs.", icon: "⚙️" },
              { title: "Mobile Friendly", desc: "Create your biodata easily on any device, mobile or desktop.", icon: "📱" },
              { title: "Hindi Biodata Support", desc: "Create biodata in Hindi or other regional languages.", icon: "🇮🇳" },
              { title: "Fast & Free Biodata Builder", desc: "No registration required, create your biodata in minutes for free.", icon: "⚡" },
            ].map((feature) => (
              <div key={feature.title} className="flex flex-col p-6 bg-white rounded-2xl border border-slate-100 shadow-sm transition hover:shadow-md hover:border-[#b11e24]/10">
                <div className="mb-4 text-3xl">{feature.icon}</div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Trust Section */}
      <section className="bg-[#2a050c] text-white py-12 mt-16 rounded-[2rem] mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {[
            { label: "10,000+", detail: "Biodatas Created" },
            { label: "Trusted", detail: "By Families Across India" },
            { label: "50+", detail: "Modern Templates" },
            { label: "100% Free", detail: "No Hidden Charges" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <p className="font-[family-name:var(--font-display)] text-4xl font-bold text-[#D7A347] mb-2">{stat.label}</p>
              <p className="text-sm text-slate-300 font-medium">{stat.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Design Your Perfect Impression Section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16 border-t border-slate-100 mt-16">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#D7A347]">
            Create Impact
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold text-slate-900 sm:text-4xl">
            Design Your Perfect Impression
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Your biodata is your first introduction. We help you make it count.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
          {/* Pillar 1 */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-slate-50 shadow-sm hover:shadow-md transition">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#b11e24]/10 to-[#b11e24]/5 text-[#b11e24]">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Stunning Aesthetics</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Choose from a variety of professionally designed templates that balance tradition and modernity.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-slate-50 shadow-sm hover:shadow-md transition">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#b11e24]/10 to-[#b11e24]/5 text-[#b11e24]">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Seamless Experience</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our intuitive builder makes it easy to add your details, customize fields, and see live updates.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-slate-50 shadow-sm hover:shadow-md transition">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#b11e24]/10 to-[#b11e24]/5 text-[#b11e24]">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Instant Shareability</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Download your biodata as a high-quality PDF, ready to be shared with families on WhatsApp or email.
            </p>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-slate-900 sm:text-4xl">
            Free Marriage Biodata Format & Shaadi Biodata Maker
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about creating the perfect matrimonial profile.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
          {/* Block 1 */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-800">What is a Marriage Biodata?</h3>
            <p className="text-base text-slate-600 leading-relaxed">
              A <span className="font-semibold text-slate-800">marriage biodata</span> (also known as a <span className="font-semibold text-slate-800">shaadi biodata</span> or <span className="font-semibold text-slate-800">matrimonial biodata</span>) is an essential document in the process of arranged marriages. It serves as your <span className="font-semibold text-slate-800">marriage resume</span> or <span className="font-semibold text-slate-800">marriage CV format</span>, providing a first introduction to potential life partners and their families.
            </p>
          </div>

          {/* Block 2 */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-800">Free Marriage Biodata Template</h3>
            <p className="text-base text-slate-600 leading-relaxed">
              At RishtaMaker, we offer an extensive collection of <span className="font-semibold text-slate-800">marriage biodata template</span> options. Whether you need an <span className="font-semibold text-slate-800">editable marriage biodata</span> or a <span className="font-semibold text-slate-800">modern marriage biodata</span>, our designs are optimized for impact. Our <span className="font-semibold text-slate-800">marriage biodata maker</span> ensures you can create an <span className="font-semibold text-slate-800">attractive marriage biodata</span> in minutes.
            </p>
          </div>

          {/* Block 3 */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-800">Professional Marriage Biodata Design</h3>
            <p className="text-base text-slate-600 leading-relaxed">
              Our <span className="font-semibold text-slate-800">marriage biodata design</span> philosophy focuses on elegance and clarity. From a <span className="font-semibold text-slate-800">simple marriage biodata format</span> to a more complex <span className="font-semibold text-slate-800">professional marriage biodata</span>, we provide choices that suit every family's needs. Experience the best <span className="font-semibold text-slate-800">online marriage biodata</span> creation process.
            </p>
          </div>

          {/* Block 4 */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-800">Online Bio Data for Marriage</h3>
            <p className="text-base text-slate-600 leading-relaxed">
              Creating your <span className="font-semibold text-slate-800">bio data for marriage</span> is simple with our online tool. Simply fill in your details, choose a <span className="font-semibold text-slate-800">marriage biodata format</span>, and download your <span className="font-semibold text-slate-800">marriage biodata pdf</span> instantly. Our PDF downloads are high-quality and ready to be shared on WhatsApp.
            </p>
          </div>
        </div>

        {/* Bullet Points Section */}
        <div className="max-w-4xl mx-auto mt-12 bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Key Benefits of Using RishtaMaker</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "100% Free to use for standard templates",
              "No registration or login required",
              "Mobile-friendly builder interface",
              "Secure and private - your data is not stored",
              "High-quality PDF export ready for print",
              "Support for Hindi and regional languages",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <svg className="h-5 w-5 text-emerald-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <span className="text-slate-600 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links / Explore Categories */}
        <div className="max-w-4xl mx-auto mt-12 text-center">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D7A347] mb-6">
            Explore Categories
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Biodata for Boy", href: "/biodata-for-boy" },
              { label: "Biodata for Girl", href: "/biodata-for-girl" },
              { label: "Marriage Biodata Format", href: "/marriage-biodata-format" },
              { label: "Marriage Biodata PDF", href: "/#builder" },
              { label: "Hindi Biodata", href: "/hindi-biodata" },
              { label: "Blog", href: "/blog" },
              { label: "Templates", href: "/templates" },
            ].map(item => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-all hover:border-[#b11e24]/40 hover:text-[#b11e24] hover:shadow-md"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Form Builder Anchor */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <BiodataCTA />
      </div>

      {/* Wall of Love Section */}
      <section className="bg-slate-50 py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Wall of Love"
            title="Trusted by thousands of families"
            description="Don't just take our word for it. Read what people have to say about our marriage biodata formats."
          />
        </div>

        <div className="mt-16 w-full relative group">
          <style>{`
            @keyframes slide {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-slide {
              animation: slide 60s linear infinite;
            }
            .group:hover .animate-slide {
              animation-play-state: paused;
            }
          `}</style>

          <div className="flex animate-slide gap-6 w-max pr-6">
            {[...siteContent.testimonials, ...siteContent.testimonials].map((testimonial, i) => (
              <div
                key={`${testimonial.name}-${i}`}
                className="w-[320px] sm:w-[380px] shrink-0 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 transition hover:shadow-md flex flex-col"
              >
                <div className="flex items-center gap-4 border-b border-slate-100 pb-5 mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="h-12 w-12 rounded-full object-cover shadow-sm bg-slate-100" />
                  <div>
                    <h4 className="font-semibold text-slate-900 leading-tight">{testimonial.name}</h4>
                    <div className="flex gap-1 text-[#d7a347] mt-1.5">
                      {[...Array(5)].map((_, idx) => (
                        <svg key={idx} className="h-3 w-3 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-[1.05rem] leading-relaxed text-slate-700 font-medium italic mt-1">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>

          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-slate-50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-slate-50 to-transparent" />
        </div>
      </section>

      {/* Blog Section */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#D7A347]">
            Blog
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold text-slate-900 sm:text-4xl">
            Latest from our Blog
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Expert advice and guides for your matrimonial journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getAllPosts().slice(0, 3).map((post) => (
            <article key={post.slug} className="group relative flex flex-col h-full rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all hover:-translate-y-1">
              <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-10">
                <span className="sr-only">View Article</span>
              </Link>
              <div className="aspect-[4/3] w-full bg-slate-100 overflow-hidden relative">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3 font-medium">
                  <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#b11e24] transition-colors line-clamp-2 leading-tight">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 mt-auto text-[#b11e24] font-semibold text-sm group-hover:underline">
                  <span>Read article</span>
                  <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:border-[#b11e24] hover:text-[#b11e24] transition-all"
          >
            View All Articles
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </Link>
        </div>
      </section>

      {/* FAQ Section - Clean Accordion */}
      <section className="mx-auto max-w-3xl px-6 pt-8 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#D7A347]">
            FAQ
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mx-auto w-full rounded-3xl bg-white p-6 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
          <div className="divide-y divide-slate-100">
            {[
              {
                question: "What is marriage biodata?",
                answer: "A marriage biodata is a document that summarizes a person's personal, family, educational, and professional details. It is used in arranged marriages to introduce potential candidates to each other.",
              },
              {
                question: "How to create marriage biodata online?",
                answer: "You can create it easily on RishtaMaker. Simply fill out the form with your details, choose a template, and download the PDF. No sign-up required.",
              },
              {
                question: "Is RishtaMaker free?",
                answer: "Yes, RishtaMaker offers a free biodata builder. You can create and download your biodata without paying anything. We also offer premium templates for a small fee.",
              },
              {
                question: "Can I download biodata PDF?",
                answer: "Yes, once you fill in your details and select a template, you can instantly download your biodata in high-quality PDF format.",
              },
              {
                question: "Which biodata format is best for marriage?",
                answer: "The best format is one that is clean, easy to read, and presents your information clearly. RishtaMaker offers both traditional and modern formats to suit your preference.",
              },
            ].map((faq) => (
              <details
                key={faq.question}
                className="group py-6 first:pt-0 last:pb-0"
              >
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-slate-800 pr-2 list-none marker:hidden [&::-webkit-details-marker]:hidden hover:text-[#b11e24] transition-colors">
                  <span className="text-base sm:text-lg pr-6">{faq.question}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-50 border border-slate-200 group-open:bg-[#b11e24] group-open:border-[#b11e24] transition-all">
                    <svg className="h-4 w-4 text-slate-400 group-open:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" /></svg>
                    <svg className="hidden h-4 w-4 text-white group-open:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" /></svg>
                  </span>
                </summary>
                <p className="mt-4 text-base leading-7 text-slate-600 sm:pr-12">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center ">
          <Link
            href="/#builder"
            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#aa1d1f] px-10 text-[1.05rem] font-medium text-white shadow-[0_20px_40px_rgba(170,29,31,0.2)] transition hover:scale-105 hover:bg-[#931719]"
          >
            Create My Biodata Now
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </Link>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is marriage biodata?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A marriage biodata is a document that summarizes a person's personal, family, educational, and professional details. It is used in arranged marriages to introduce potential candidates to each other."
                }
              },
              {
                "@type": "Question",
                "name": "How to create marriage biodata online?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can create it easily on RishtaMaker. Simply fill out the form with your details, choose a template, and download the PDF. No sign-up required."
                }
              },
              {
                "@type": "Question",
                "name": "Is RishtaMaker free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, RishtaMaker offers a free biodata builder. You can create and download your biodata without paying anything. We also offer premium templates for a small fee."
                }
              },
              {
                "@type": "Question",
                "name": "Can I download biodata PDF?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, once you fill in your details and select a template, you can instantly download your biodata in high-quality PDF format."
                }
              },
              {
                "@type": "Question",
                "name": "Which biodata format is best for marriage?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The best format is one that is clean, easy to read, and presents your information clearly. RishtaMaker offers both traditional and modern formats to suit your preference."
                }
              }
            ]
          })
        }}
      />

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "RishtaMaker",
            "url": "https://rishtamaker.in",
            "logo": "https://rishtamaker.in/images/short_logo.png",
            "sameAs": [
              "https://www.facebook.com/rishtamaker",
              "https://www.instagram.com/rishtamaker",
              "https://twitter.com/rishtamaker"
            ]
          })
        }}
      />

      {/* Website Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://rishtamaker.in"
          })
        }}
      />
    </PageShell>
  );
}
