"use client";

import { SeoLandingPage } from "@/components/marketing/seo-landing-page";
import Link from "next/link";

export default function RoyalMarriageBiodataTemplatePage() {
  const heroData = {
    badge: "Elite Collection 2026",
    title: "Royal Marriage Biodata Template",
    subtitle: "Create a premium, majestic matrimonial profile with a royal marriage biodata template. Select traditional maroon or golden vintage layouts and download a high-quality PDF instantly.",
    ctaText: "Choose Royal Template",
    ctaHref: "/templates",
    secondaryCtaText: "Create Online",
    secondaryCtaHref: "/#builder",
    imageSrc: "/images/marriage-biodata-hero.png",
    imageAlt: "Royal Marriage Biodata Templates Gallery",
  };

  const seoContentData = {
    title: "Why Choose a Royal Marriage Biodata Template?",
    blocks: [
      {
        title: "The Appeal of a Rich, Royal Matrimonial Layout",
        text: [
          <>For families who value heritage, culture, and high-end presentation, a **royal marriage biodata template** is the perfect choice. These designs use deep, rich colors like royal maroon, classic gold, and vintage beige, combined with ornate border designs and traditional motifs. A royal template makes a powerful first impression, conveying stability, respect for family traditions, and attention to detail.</>,
          <>Traditional designs, like our gold-patterned 'Royal Maroon' or 'Golden Vintage', are highly popular because they blend cultural respect with modern spacing. You can browse our wide range of aesthetic templates in our <Link href="/templates" className="text-[#b11e24] hover:underline">designs gallery</Link>.</>,
          <>Using a neat, balanced layout ensures that your family profile, educational background, and contact details look structured and professional when shared or printed.</>
        ],
      },
      {
        title: "Key Features of a Premium Matrimonial Template",
        text: [
          <>A **royal matrimonial profile** should include specific design highlights:</>,
          <><strong>1. Ornate Borders & Motifs:</strong> Gold leaf patterns, traditional mandates, or spiritual symbols (like Ganesha, Om, or Swastik) that honor family values.</>,
          <><strong>2. Classic Color Themes:</strong> Deep maroon, golden vintage cream, and elegant navy combinations that create a premium feel.</>,
          <><strong>3. Clear Section Spacing:</strong> Ample padding between sections like personal details, career credentials, and family background to prioritize readability. Refer to our <Link href="/marriage-biodata-format" className="text-[#b11e24] hover:underline">marriage biodata format guide</Link> for styling tips.</>
        ],
      },
      {
        title: "Writing a Warm and Respectful Description",
        text: [
          <>Keep your text descriptive, confident, and polite. In the 'About Me' block, share your personality traits, values, and hobbies. Write your partner expectations section warmly, focusing on core values, compatibility, and mutual support rather than listing strict rules.</>,
          <>Ensure your profile photo is a clear, well-lit portrait. A professional portrait fits perfectly into our elegant frame layouts, creating a premium feel. For gender-specific tips, read our guides on <Link href="/biodata-for-boy" className="text-[#b11e24] hover:underline">biodata format for boy</Link> and <Link href="/biodata-for-girl" className="text-[#b11e24] hover:underline">biodata format for girl</Link>.</>
        ],
      },
      {
        title: "Benefits of Our Free Online Design Exporter",
        text: [
          <>Struggling with margins and alignment in MS Word can lead to messy formatting. Our online builder automatically handles the formatting for you:</>,
          <>- **Responsive Editing:** Edit text on your phone and see updates instantly on our live preview canvas.</>,
          <>- **No Sign-Up Required:** We prioritize your privacy. Build and download your profile without registering or sharing your email address.</>,
          <>- **Locked Layout Margins:** All templates fit standard details perfectly onto a single A4 page, preventing formatting issues.</>,
          <>- **Print-Ready PDF:** Get a clean vector PDF optimized for fast digital sharing and high-quality printing. Refer to our <Link href="/marriage-biodata-pdf" className="text-[#b11e24] hover:underline">marriage biodata PDF</Link> page for specific download tips.</>
        ],
      },
    ],
    benefitsTitle: "Benefits of Creating Your Profile with RishtaMaker",
    benefits: [
      "100% Free standard templates with no registration required",
      "Dynamic section control - add, delete, and rename fields easily",
      "Ornate golden, traditional maroon, and vintage border layouts",
      "Instant PDF downloads optimized for WhatsApp and print",
      "Safe and secure processing - your personal data is never stored",
      "Full support for multilingual text input (Hindi, Marathi, Gujarati, etc.)",
    ],
  };

  const faqs = [
    {
      q: "What defines a royal marriage biodata template?",
      a: "A royal template uses rich color themes like maroon and gold, features detailed vintage border patterns, and includes sections for horoscope and extensive family background. It feels premium and traditional.",
    },
    {
      q: "Are the royal templates free to download?",
      a: "Yes! All standard templates on RishtaMaker are 100% free to edit, preview, and download as a high-quality PDF. There are no sign-up forms or hidden fees.",
    },
    {
      q: "Can I add my photo to the royal template?",
      a: "Yes, our builder includes an image picker. Simply upload a clear portrait, and the builder will frame and position it perfectly within the selected layout automatically.",
    },
  ];

  return (
    <SeoLandingPage
      hero={heroData}
      seoContent={seoContentData}
      faqs={faqs}
      breadcrumbItems={[
        { name: "Home", url: "https://rishtamaker.in" },
        { name: "Royal Marriage Biodata Template", url: "https://rishtamaker.in/royal-marriage-biodata-template" }
      ]}
    />
  );
}
