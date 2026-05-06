import { BiodataFormBuilder } from "@/components/biodata/biodata-form-builder";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/constants/site-content";
import { PageShell } from "@/components/shared/page-shell";
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
                <div className="inline-flex items-center gap-2.5 rounded-full border border-[#b11e24]/20 bg-white/60 px-5 py-2.5 backdrop-blur-md shadow-sm">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-[#b11e24] animate-ping" />
                  <p className="text-[0.7rem] font-bold uppercase tracking-[0.25em] text-[#b11e24]">
                    {siteContent.hero.eyebrow}
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-50 px-4 py-2">
                  <p className="text-[10px] font-black uppercase tracking-widest text-emerald-700">
                    Free • No Login Required
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h1 className="font-[family-name:var(--font-display)] text-[3.2rem] font-semibold leading-[1.08] tracking-[-0.02em] text-[#120d0e] sm:text-[4.5rem] lg:text-[4.8rem] xl:text-[5.5rem]">
                  Create <span className="italic text-[#b11e24]">beautiful biodata</span> for marriage in minutes.
                </h1>
                <p className="max-w-[640px] text-lg leading-relaxed text-slate-600 sm:text-xl lg:text-[1.35rem] lg:leading-[1.6]">
                  {siteContent.hero.description}
                </p>
              </div>

              <div className="flex flex-col gap-5 sm:flex-row sm:items-center pt-2">
                <Link
                  href="/#builder"
                  className="group relative inline-flex h-16 items-center justify-center gap-3 overflow-hidden rounded-full bg-[#aa1d1f] px-10 text-lg font-bold text-white shadow-[0_20px_40px_rgba(170,29,31,0.3)] transition-all hover:scale-105 hover:bg-[#931719] active:scale-95 sm:w-auto"
                >
                  <span className="relative z-10">Create My Biodata Now</span>
                  <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <div className="absolute inset-0 -z-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </Link>

                <Link
                  href="/templates"
                  className="inline-flex h-16 items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white px-8 text-lg font-bold text-slate-700 transition-all hover:border-[#b11e24]/30 hover:bg-slate-50 active:scale-95 sm:w-auto"
                >
                  See Samples
                </Link>

                <div className="flex items-center gap-4 px-2">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-slate-200 shadow-md transition-transform hover:-translate-y-1 hover:z-20" style={{ backgroundImage: `url(https://i.pravatar.cc/100?img=${i + 15})`, backgroundSize: 'cover' }} />
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      ))}
                    </div>
                    <span className="text-xs font-bold text-slate-500">1,000+ happy families today</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex min-h-[400px] items-center justify-center lg:min-h-[600px] animate-in fade-in zoom-in duration-1000 ease-out">
              <div className="absolute bottom-10 left-1/2 h-32 w-[85%] -translate-x-1/2 bg-[radial-gradient(circle,_rgba(32,24,26,0.15),_transparent_70%)] blur-3xl" />
              {heroBiodataImages.map((image, idx) => (
                <div
                  key={image.src}
                  className={`absolute flex items-center justify-center p-3 sm:p-5 rounded-[2.5rem] overflow-hidden bg-white/40 shadow-[0_32px_64px_rgba(32,24,26,0.12)] border border-white/80 backdrop-blur-sm transition-all duration-700 hover:scale-105 hover:z-30 hover:shadow-[0_45px_80px_rgba(32,24,26,0.2)] ${image.className}`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <div className="w-full bg-white shadow-[0_12px_40px_rgba(0,0,0,0.15)] rounded-2xl overflow-hidden flex-none relative">
                    <img
                      src={image.src}
                      alt={image.alt}
                      width={560}
                      height={760}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Features Section - Compact Glass Bar */}
      <section className="relative z-10 mx-auto  max-w-6xl px-6 lg:px-8 ">
        <div className="rounded-[2rem] border border-white/60 bg-white/70 p-6 shadow-[0_20px_60px_rgba(177,30,36,0.06)] backdrop-blur-xl sm:p-10">
          <div className="grid gap-10 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200/60">
            {siteContent.features.map((feature, idx) => {
              const icons = [
                <svg key="1" className="h-6 w-6 text-[#D7A347]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
                <svg key="2" className="h-6 w-6 text-[#D7A347]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>,
                <svg key="3" className="h-6 w-6 text-[#D7A347]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              ];
              return (
                <div key={feature.title} className="flex flex-col items-center text-center px-4 pt-8 md:pt-0 first:pt-0">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D7A347]/20 to-[#D7A347]/5 shadow-inner ring-1 ring-[#D7A347]/20">
                    {icons[idx]}
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-[1.35rem] font-bold tracking-tight text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-[1.05rem] leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form Builder Anchor */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <BiodataCTA />
      </div>

      <div id="builder" className="scroll-mt-6">
        <BiodataFormBuilder />
      </div>

      {/* SEO Content Section - Compact Split Layout */}
      <section className="mx-auto max-w-7xl px-6 -mt-6  lg:px-8  pb-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          {/* Left Column: Main Intro Sticky */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
              Guide
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl leading-tight text-slate-900 sm:text-4xl">
              {siteContent.seoFormatGuide[0].heading}
            </h2>
            <div className="mt-6 text-base leading-7 text-slate-600 space-y-4 whitespace-pre-wrap">
              {siteContent.seoFormatGuide[0].content}
            </div>
          </div>

          {/* Right Column: Grid of details */}
          <div className="grid gap-6 sm:grid-cols-2">
            {siteContent.seoFormatGuide.slice(1).map((section, idx) => {
              const icons = [
                <svg key="1" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
                <svg key="2" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                <svg key="3" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>,
                <svg key="4" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              ];
              return (
                <div
                  key={section.heading}
                  className="rounded-[1.75rem] border border-[rgba(177,30,36,0.08)] bg-white/50 p-6 shadow-sm backdrop-blur-md transition hover:bg-white hover:shadow-md"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#b11e24]/10 to-[#b11e24]/5 text-[#b11e24] ring-1 ring-[#b11e24]/10">
                    {icons[idx]}
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-slate-800 leading-snug">
                    {section.heading}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-slate-600 font-normal">
                    {section.content}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

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

      {/* FAQ Section - Clean Accordion */}
      <section className="mx-auto max-w-3xl px-6 pt-8  lg:px-8">
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
            {siteContent.faqs.map((faq) => (
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
      
      {/* SEO Footer Tags */}
      <section className="border-t border-[#b11e24]/10 bg-gradient-to-b from-transparent to-[#b11e24]/5 py-16 text-center">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12">
            <h3 className="mb-6 font-[family-name:var(--font-display)] text-[1.4rem] font-bold text-[#120d0e]">
              Trending Now 🚀
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "Biodata for Boy", href: "/biodata-for-boy" },
                { label: "Biodata for Girl", href: "/biodata-for-girl" },
                { label: "Hindi Biodata Format", href: "/hindi-biodata" },
                { label: "Marriage Biodata Format 2026", href: "/marriage-biodata-format" },
                { label: "Simple Biodata Format", href: "/simple-biodata-format" },
              ].map(page => (
                <Link 
                  key={page.href} 
                  href={page.href}
                  className="rounded-full border border-blue-100 bg-blue-50/50 px-5 py-2.5 text-xs font-bold text-blue-600 transition-all hover:bg-blue-100"
                >
                  {page.label}
                </Link>
              ))}
            </div>
          </div>

          <h3 className="mb-8 font-[family-name:var(--font-display)] text-[1.4rem] font-medium text-[#120d0e]">
            Everything you need for the perfect matrimonial profile
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "marriage biodata maker", "marriage biodata builder", "biodata for marriage online",
              "create marriage biodata online", "biodata maker for matrimony", "shaadi biodata maker",
              "matrimony biodata maker", "online biodata generator", "marriage CV maker",
              "rishta biodata creator", "free marriage biodata maker", "professional marriage biodata",
              "indian marriage biodata format", "biodata for arranged marriage", "best biodata maker online",
              "free marriage biodata maker with photo", "simple biodata format for marriage in india", "best matrimonial biodata format for boy",
              "marriage biodata format for girl pdf", "hindu marriage biodata format download", "muslim marriage biodata format",
              "marriage biodata template word format", "marriage biodata maker free download pdf", "create biodata for marriage online free india",
              "biodata format for arranged marriage boy india", "modern biodata format for marriage", "stylish marriage biodata template",
              "biodata maker with horoscope details", "kundli based biodata format for marriage", "marriage biodata in hindi format",
              "marriage biodata maker india", "biodata maker for marriage in mumbai", "shaadi biodata format india",
              "indian matrimonial biodata creator", "biodata format india for marriage", "rishta biodata india",
              "marriage profile maker india", "biodata builder for indian matrimony", "online biodata for shaadi india",
              "marriage resume india", "marriage biodata template free", "biodata format for marriage pdf download",
              "marriage biodata sample for boy", "marriage biodata sample for girl", "simple biodata format for marriage",
              "marriage bio data word format", "editable marriage biodata template", "modern biodata template for marriage",
              "traditional biodata format india", "creative marriage biodata template", "how to make marriage biodata",
              "what to include in marriage biodata", "best format for marriage biodata", "marriage biodata tips for boy",
              "marriage biodata tips for girl", "how to write biodata for arranged marriage", "difference between resume and biodata marriage",
              "marriage biodata mistakes to avoid", "biodata vs matrimonial profile", "how to create attractive marriage biodata",
              "शादी के लिए बायोडाटा", "मैरिज बायोडाटा फॉर्मेट", "बायोडाटा कैसे बनाएं शादी के लिए",
              "शादी का बायोडाटा ऑनलाइन बनाएं", "दूल्हे का बायोडाटा फॉर्मेट", "दुल्हन का बायोडाटा फॉर्मेट",
              "हिंदी में बायोडाटा फॉर्मेट", "फ्री शादी बायोडाटा डाउनलोड", "शादी का प्रोफाइल कैसे बनाएं",
              "ऑनलाइन बायोडाटा मेकर शादी", "best marriage biodata maker in india", "create biodata in 2 minutes",
              "free biodata maker for shaadi", "modern biodata templates free", "instant marriage profile builder"
            ].map(keyword => (
              <Link 
                key={keyword} 
                href="/#builder"
                className="rounded-full border border-[#b11e24]/15 bg-white px-5 py-2.5 text-[0.85rem] font-medium text-slate-600 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#b11e24]/40 hover:text-[#b11e24] hover:shadow-md"
              >
                {keyword}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
