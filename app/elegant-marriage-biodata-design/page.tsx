"use client";

import { SeoLandingPage } from "@/components/marketing/seo-landing-page";
import Link from "next/link";

export default function ElegantMarriageBiodataDesignPage() {
  const heroData = {
    badge: "Premium Collection 2026",
    title: "Elegant Marriage Biodata Design",
    subtitle: "Make a beautiful first impression with an elegant marriage biodata design. Customize traditional, floral, or modern slate layouts online and download a print-ready PDF instantly.",
    ctaText: "Choose Elegant Design",
    ctaHref: "/templates",
    secondaryCtaText: "Create Online",
    secondaryCtaHref: "/#builder",
    imageSrc: "/images/marriage-biodata-hero.png",
    imageAlt: "Elegant Marriage Biodata Designs Gallery",
  };

  const seoContentData = {
    title: "How to Create an Elegant Marriage Biodata Design",
    blocks: [
      {
        title: "The Importance of an Elegant Matrimonial Design",
        text: [
          <>Your matrimonial profile is a reflection of your personality and family heritage. An **elegant marriage biodata design** balances classic details with clean presentation, ensuring your details are easy to read and visually impressive. In competitive matchmaking, a beautifully arranged layout helps you stand out immediately, conveying care, seriousness, and maturity.</>,
          <>Traditional designs, like our gold-patterned 'Golden Vintage' or delicate floral border 'Golden Floral', are highly popular because they blend cultural respect with modern spacing. You can browse our wide range of aesthetic templates in our <Link href="/templates" className="text-[#b11e24] hover:underline">designs gallery</Link>.</>,
          <>Using a neat, balanced layout ensures that your family profile, educational background, and contact details look structured and professional when shared or printed.</>
        ],
      },
      {
        title: "Key Features of a Beautiful Matrimonial Template",
        text: [
          <>An **elegant matrimonial profile** should include specific design qualities:</>,
          <><strong>1. Curated Color Palettes:</strong> Soft maroon, cream, rose pink, or teal gold accents that look sophisticated without being distracting.</>,
          <><strong>2. Classic Borders & Motifs:</strong> Intricate corners, border frames, or religious motifs (like Ganesha or Khanda) that honor family traditions.</>,
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
      "Sophisticated floral, traditional, and modern layouts",
      "Instant PDF downloads optimized for WhatsApp and print",
      "Safe and secure processing - your personal data is never stored",
      "Full support for multilingual text input (Hindi, Marathi, Gujarati, etc.)",
    ],
  };

  const faqs = [
    {
      q: "What defines an elegant marriage biodata design?",
      a: "An elegant design features harmonious color combinations, sophisticated border details, clear headings, and clean text layout. It looks attractive and professional, honoring tradition while maintaining readability.",
    },
    {
      q: "Are the elegant templates free to download?",
      a: "Yes! All standard templates on RishtaMaker are 100% free to edit, preview, and download as a high-quality PDF. There are no sign-up forms or hidden fees.",
    },
    {
      q: "Can I add my photo to the elegant design?",
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
        { name: "Elegant Marriage Biodata Design", url: "https://rishtamaker.in/elegant-marriage-biodata-design" }
      ]}
    />
  );
}
