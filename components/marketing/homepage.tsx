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
      <section className="relative -mt-10  overflow-hidden border-b border-white/70 bg-[#fcf9f7]">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 w-full bg-[radial-gradient(circle_at_top_left,_rgba(177,30,36,0.06),_transparent_35%),radial-gradient(circle_at_80%_60%,_rgba(215,163,71,0.08),_transparent_40%),linear-gradient(180deg,#fffdfc_0%,#fcf7f4_100%)]" />
        <div className="absolute -left-10 top-20 h-64 w-64 rounded-full bg-red-400/20 blur-3xl mix-blend-multiply opacity-50" />
        <div className="absolute right-20 top-40 h-80 w-80 rounded-full bg-amber-200/40 blur-3xl mix-blend-multiply opacity-40" />

        <div className="absolute inset-x-0 top-[96px] h-px bg-gradient-to-r from-transparent via-[#20181a]/10 to-transparent" />

        <div className="relative flex flex-col px-4 pb-12 pt-5 sm:px-6 lg:px-8">

          <div className="grid flex-1 items-center gap-12 py-10 lg:grid-cols-[minmax(0,1fr)_minmax(520px,1.08fr)] lg:gap-4 lg:py-12 xl:grid-cols-[minmax(0,1.02fr)_minmax(620px,0.98fr)]">
            <div className="space-y-6 pr-0 lg:pr-4 relative z-10">
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#b11e24]/15 bg-[#b11e24]/5 px-4 py-2 backdrop-blur-sm">
                  <span className="flex h-2 w-2 rounded-full bg-[#b11e24] animate-pulse" />
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#b11e24]">
                    {siteContent.hero.eyebrow}
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-green-600/15 bg-green-50 px-4 py-2">
                  <p className="text-[10px] font-black uppercase tracking-widest text-green-700">
                    No Login Required • 100% Free
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <h1 className="font-[family-name:var(--font-display)] text-[2.8rem] font-semibold leading-[1.08] tracking-[-0.02em] text-[#120d0e] sm:text-[3.6rem] lg:text-[4.2rem] xl:text-[4.6rem]">
                  Create <span className="bg-gradient-to-r from-[#b11e24] to-[#e44b52] bg-clip-text text-transparent">beautiful biodata</span> for marriage in minutes.
                </h1>
                <p className="max-w-[620px] text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:text-[1.25rem] lg:leading-[1.6]">
                  {siteContent.hero.description}
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center pt-4">
                <Link
                  href="/create-biodata"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#aa1d1f] px-8 text-base font-bold text-white shadow-[0_20px_40px_rgba(170,29,31,0.25)] transition-all hover:scale-105 hover:bg-[#931719] hover:shadow-[0_25px_50px_rgba(170,29,31,0.3)] sm:w-auto"
                >
                  Create My Biodata Now
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Link>

                <Link
                  href="/templates"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 text-base font-bold text-slate-700 transition-all hover:bg-slate-50 sm:w-auto"
                >
                  See Sample Biodata
                </Link>

                <div className="flex items-center gap-3 px-4 text-sm text-slate-500">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-8 w-8 rounded-full border-2 border-[#fcf9f7] bg-slate-200" style={{ backgroundImage: `url(https://i.pravatar.cc/100?img=${i + 10})`, backgroundSize: 'cover' }} />
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-3.5 w-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      ))}
                    </div>
                    <span className="text-xs font-medium tracking-tight">Used by 1,000+ users today • Trusted by Indian families</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex min-h-[320px] items-center justify-center sm:min-h-[400px] lg:min-h-[500px] xl:min-h-[520px]">
              <div className="absolute bottom-8 left-1/2 h-20 w-[72%] -translate-x-1/2 bg-[radial-gradient(circle,_rgba(32,24,26,0.18),_transparent_68%)] blur-2xl" />
              {heroBiodataImages.map((image) => (
                <div
                  key={image.src}
                  className={`absolute flex items-center justify-center p-3 sm:p-5 lg:p-6 rounded-[2rem] overflow-hidden bg-gradient-to-br from-rose-100 via-violet-50 to-amber-100/60 shadow-[0_28px_60px_rgba(32,24,26,0.18)] border border-white/60 ${image.className}`}
                >
                  <div className="w-full bg-white shadow-[0_10px_35px_rgba(0,0,0,0.18)] rounded-xl overflow-hidden flex-none relative">
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-xl z-10" />
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
                  <h3 className="font-[family-name:var(--font-body)] text-[1.25rem] font-bold tracking-tight text-slate-900">
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
                  <h3 className="font-sans text-lg font-semibold tracking-tight text-slate-800 leading-snug">
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
            href="/create-biodata"
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
                href="/create-biodata"
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
