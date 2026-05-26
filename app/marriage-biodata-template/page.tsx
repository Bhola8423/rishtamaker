"use client";

import { SeoLandingPage } from "@/components/marketing/seo-landing-page";
import Link from "next/link";

export default function MarriageBiodataTemplatePage() {
  const heroData = {
    badge: "12+ Premium Layouts",
    title: "Marriage Biodata Template",
    subtitle: "Select and download the best marriage biodata template for your matrimonial profile. Free traditional and modern layouts, fully customizable online, and instantly exportable to high-quality PDF.",
    ctaText: "Choose a Template",
    ctaHref: "/templates",
    secondaryCtaText: "Create Biodata",
    secondaryCtaHref: "/#builder",
    imageSrc: "/images/marriage-biodata-hero.png",
    imageAlt: "Matrimonial Marriage Biodata Templates",
  };

  const seoContentData = {
    title: "How to Choose the Best Marriage Biodata Template",
    blocks: [
      {
        title: "The Importance of an Attractive Marriage Biodata Template",
        text: [
          <>In arranged marriages, the visual presentation of your profile is just as important as the details it contains. A professionally designed **marriage biodata template** highlights your career, education, and family background in a structured manner. It serves as your first introduction to potential matches and their families, conveying respect, clarity, and seriousness from the start.</>,
          <>Using messy text files or outdated layouts can make your profile look cluttered and difficult to read. By choosing a modern **marriage biodata design**, you ensure that your information is organized and stands out immediately. Our builder offers a variety of standard designs, from gold-accented traditional themes to minimalist modern layouts. You can browse all of them in our <Link href="/templates" className="text-[#b11e24] hover:underline">templates gallery</Link>.</>,
          <>Choosing a high-quality template ensures that your profile looks clean, polished, and readable on all screens and devices, which is where most parents and matches will review it.</>
        ],
      },
      {
        title: "Key Elements of a Matrimonial Profile Template",
        text: [
          <>A complete **matrimonial template** should feature standard divisions to represent all aspects of your life beautifully:</>,
          <><strong>1. Personal Attributes:</strong> Name, age, height, date of birth, time of birth, native place, and optionally horoscope details (Gotra, Rashi, Nakshatra).</>,
          <><strong>2. Academic & Career Profile:</strong> Details of your degrees, universities, current job role, employer, and location. Grooms can read our specialized <Link href="/biodata-for-boy" className="text-[#b11e24] hover:underline">biodata format for boy</Link> guide, while brides can refer to our <Link href="/biodata-for-girl" className="text-[#b11e24] hover:underline">biodata format for girl</Link> guide for tailored section ideas.</>,
          <><strong>3. Family Values & Info:</strong> Parents' names, occupations, native place, and information about siblings to present a complete family background.</>
        ],
      },
      {
        title: "Writing a Clear Partner Expectations Section",
        text: [
          <>The "Partner Expectations" section allows you to describe what you seek in a life partner. It is best to write this section politely and clearly. Instead of listing demands, state core preferences regarding values, education, lifestyle, and career views.</>,
          <>For example: *'Looking for a well-educated, progressive partner who values family unity and mutual support. A working professional based in a metro city would be an ideal match.'* This keeps your profile positive and welcoming.</>,
          <>For guidance on section layout and spacing, check our general <Link href="/marriage-biodata-format" className="text-[#b11e24] hover:underline">marriage biodata format guide</Link>.</>
        ],
      },
      {
        title: "Why Use Our Free Online Templates Over MS Word?",
        text: [
          <>Designing a profile in Microsoft Word often leads to alignment errors and font shifts when viewed on mobile screens. Our **free marriage biodata template builder** solves these issues entirely:</>,
          <>- **Locked Formatting:** Columns and layouts are locked automatically to fit clean A4 margins.</>,
          <>- **Responsive Editing:** Edit text on your phone and see updates instantly on our live preview canvas.</>,
          <>- **Privacy Protected:** We do not require registration or account creation. Your details are processed securely and never saved.</>,
          <>- **High-Quality PDF Export:** Download a crisp, print-ready PDF that looks perfect on WhatsApp or physical paper. Learn more on our <Link href="/marriage-biodata-pdf" className="text-[#b11e24] hover:underline">marriage biodata PDF download</Link> page.</>
        ],
      },
    ],
    benefitsTitle: "Why Choose RishtaMaker's Biodata Templates?",
    benefits: [
      "100% Free standard templates with no registration required",
      "Dynamic field editor lets you add, delete, and rename sections",
      "Print-ready high-resolution PDF downloads ready for sharing",
      "Safe and secure processing - your personal data is never stored",
      "Full support for multilingual text input (Hindi, Marathi, Gujarati, etc.)",
      "A wide range of design choices from traditional to modern minimalist",
    ],
  };

  const faqs = [
    {
      q: "Which biodata template is best for marriage?",
      a: "The best template is one that is clean, easy to read, and represents you authentically. Modern corporate professionals often choose minimalist layouts, while traditional families prefer ornate designs with religious motifs.",
    },
    {
      q: "Are the marriage biodata templates free to download?",
      a: "Yes! All standard templates on RishtaMaker are 100% free to edit, preview, and download as a high-quality PDF. There are no sign-up forms or hidden fees.",
    },
    {
      q: "Can I add my photo to the template?",
      a: "Yes, our builder includes an image picker. Simply upload a clear portrait, and the builder will frame and position it perfectly within the selected template layout automatically.",
    },
    {
      q: "How do I edit my profile after downloading the PDF?",
      a: "Because we do not store your data to protect your privacy, you cannot edit the downloaded PDF file directly. However, you can return to our site, enter your details again, and download a new PDF in seconds.",
    },
  ];

  return (
    <SeoLandingPage
      hero={heroData}
      seoContent={seoContentData}
      faqs={faqs}
      breadcrumbItems={[
        { name: "Home", url: "https://rishtamaker.in" },
        { name: "Marriage Biodata Template", url: "https://rishtamaker.in/marriage-biodata-template" }
      ]}
    />
  );
}
