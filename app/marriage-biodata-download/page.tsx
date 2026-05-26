"use client";

import { SeoLandingPage } from "@/components/marketing/seo-landing-page";
import Link from "next/link";

export default function MarriageBiodataDownloadPage() {
  const heroData = {
    badge: "Free Instant Access",
    title: "Marriage Biodata Download",
    subtitle: "Create, customize, and download your marriage biodata instantly. Choose from premium, print-ready templates and get a high-quality PDF to share on WhatsApp.",
    ctaText: "Download Biodata Now",
    ctaHref: "/#builder",
    secondaryCtaText: "Browse Templates",
    secondaryCtaHref: "/templates",
    imageSrc: "/images/marriage-biodata-hero.png",
    imageAlt: "Matrimonial Biodata PDF Download Gallery",
  };

  const seoContentData = {
    title: "The Easiest Way to Create and Download a Marriage Biodata",
    blocks: [
      {
        title: "The Importance of a High-Quality Marriage Biodata Download",
        text: [
          <>In arranged marriages, a professional **marriage biodata download** is the most common and effective way to introduce yourself to a potential life partner. A high-quality PDF file keeps your formatting perfectly locked across all devices, ensuring your details look exactly as intended when viewed on mobile screens or physically printed. Unlike Word files, a PDF cannot be accidentally altered.</>,
          <>Many families judge a matrimonial proposal's seriousness based on the quality of the biodata layout. Using a messy screenshot or unstructured text can create a bad first impression. By using a polished **biodata download**, you show maturity and respect for the process. You can browse our standard styles in our <Link href="/templates" className="text-[#b11e24] hover:underline">matrimonial templates gallery</Link>.</>,
          <>Having a print-ready, high-resolution copy on hand allows you to share your profile instantly whenever requested by matchmaking platforms or family members.</>
        ],
      },
      {
        title: "Key Sections of a Matrimonial Profile Download",
        text: [
          <>To get the best response from your search, format your **marriage resume download** with clear subheadings:</>,
          <><strong>1. Personal Attributes:</strong> Full name, age, height, date of birth, time of birth, native place, and horoscope details (Gotra, Rashi, Nakshatra) if relevant.</>,
          <><strong>2. Academic & Professional Details:</strong> High-resolution representation of your degrees, colleges, current job role, company name, and location. Grooms can read our specialized <Link href="/biodata-for-boy" className="text-[#b11e24] hover:underline">biodata format for boy</Link> guide, and brides can check our <Link href="/biodata-for-girl" className="text-[#b11e24] hover:underline">biodata format for girl</Link> guide.</>,
          <><strong>3. Family Profile:</strong> Occupations and names of parents, siblings' details, and native place to give a comprehensive background overview.</>
        ],
      },
      {
        title: "Writing Clear Partner Expectations in Your Profile",
        text: [
          <>The "Partner Expectations" section allows you to describe what you seek in a spouse. Keep this section positive, polite, and realistic. Focus on values, career support, education, and lifestyle compatibility.</>,
          <>For example: *'Looking for a well-educated, progressive partner with strong family values, who supports mutual respect and career growth. A working professional residing in metro cities would be an ideal match.'* This keeps expectations clear and welcoming.</>,
          <>For structural layout guidance, view our general <Link href="/marriage-biodata-format" className="text-[#b11e24] hover:underline">marriage biodata format guide</Link>.</>
        ],
      },
      {
        title: "Why Choose Our Free Online Download Builder?",
        text: [
          <>Creating a profile manually in Word often leads to formatting and alignment errors. Our **free marriage biodata download builder** automates all the design work for you:</>,
          <>- **Responsive Editing:** Enter details on your mobile or desktop and see updates instantly on our live preview canvas.</>,
          <>- **No Sign-Up Required:** We prioritize your privacy. Build and download your profile without registering or sharing your email address.</>,
          <>- **Locked Layout Margins:** All templates fit standard details perfectly onto a single A4 page, preventing formatting issues.</>,
          <>- **Instant high-resolution PDF:** Get a clean vector PDF optimized for fast digital sharing and high-quality printing. Refer to our <Link href="/marriage-biodata-pdf" className="text-[#b11e24] hover:underline">marriage biodata PDF</Link> page for specific download tips.</>
        ],
      },
    ],
    benefitsTitle: "Benefits of Using RishtaMaker's Biodata Exporter",
    benefits: [
      "100% Free standard templates with no registration required",
      "Dynamic section control - add, delete, and rename fields easily",
      "Instant PDF downloads optimized for WhatsApp and print",
      "Safe and secure processing - your personal data is never stored",
      "Multilingual support - type in Hindi, Marathi, and other regional languages",
      "A wide range of design choices from traditional to modern minimalist",
    ],
  };

  const faqs = [
    {
      q: "How can I download my marriage biodata in PDF?",
      a: "Simply fill in your details in our builder form, choose a template you like, and click the 'Confirm Download' button. Your PDF file will be generated and downloaded instantly.",
    },
    {
      q: "Are the download templates free to use?",
      a: "Yes! All standard templates on RishtaMaker are 100% free to build, preview, and download. Some premium designs may carry a small fee.",
    },
    {
      q: "Can I print the downloaded PDF file?",
      a: "Absolutely! The downloaded PDF is in print-ready high-resolution. You can print it on any standard home printer or take it to a print shop. We recommend printing on high-quality, slightly thick paper for a premium feel.",
    },
    {
      q: "How do I edit my profile after downloading the PDF?",
      a: "Since we do not save your details on our servers to ensure privacy, you cannot edit the downloaded PDF file directly. However, you can return to our website, fill out the form again, and download a new PDF in seconds.",
    },
  ];

  return (
    <SeoLandingPage
      hero={heroData}
      seoContent={seoContentData}
      faqs={faqs}
      breadcrumbItems={[
        { name: "Home", url: "https://rishtamaker.in" },
        { name: "Marriage Biodata Download", url: "https://rishtamaker.in/marriage-biodata-download" }
      ]}
    />
  );
}
