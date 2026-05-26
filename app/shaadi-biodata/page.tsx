"use client";

import { SeoLandingPage } from "@/components/marketing/seo-landing-page";
import Link from "next/link";

export default function ShaadiBiodataPage() {
  const heroData = {
    badge: "Traditional & Modern Formats",
    title: "Shaadi Biodata Maker",
    subtitle: "Design an elegant matrimonial profile with the best shaadi biodata maker. Select from a variety of traditional and modern layouts, edit details, and download as a high-quality PDF for free.",
    ctaText: "Create Shaadi Biodata",
    ctaHref: "/#builder",
    secondaryCtaText: "Browse Templates",
    secondaryCtaHref: "/templates",
    imageSrc: "/images/marriage-biodata-hero.png",
    imageAlt: "Matrimonial Shaadi Biodata Templates",
  };

  const seoContentData = {
    title: "Create a Stunning Matrimonial Profile with Our Shaadi Biodata Maker",
    blocks: [
      {
        title: "The Cultural Importance of a Shaadi Biodata in Arranged Marriages",
        text: [
          <>In many cultures across India, a **shaadi biodata** is the very first step in the journey of finding a life partner. It serves as your official introduction, summarizing your personality, education, profession, family background, and partner preferences in a structured document. When families share profiles, a beautiful, well-formatted **matrimonial biodata** stands out immediately, indicating seriousness and respect for the process.</>,
          <>Many families still rely on simple text messages or messy screenshots that lack key details or structure. Using a dedicated **wedding biodata format** ensures that all your credentials are presented cleanly. Our editor provides a range of options, from traditional layouts with gold accents like 'Royal Maroon' to contemporary minimalist designs like 'Midnight Modern'. Check out our <Link href="/templates" className="text-[#b11e24] hover:underline">matrimonial templates gallery</Link> to explore all styles.</>,
          <>By using a professional generator, you can balance modern layouts with traditional details, ensuring that both young matches and elder family members are pleased with the presentation.</>
        ],
      },
      {
        title: "Key Sections of a Professional Matrimonial Profile",
        text: [
          <>To create an impactful **marriage resume format**, you need to lay out your information clearly. A comprehensive profile contains the following crucial sections:</>,
          <><strong>1. Personal Attributes:</strong> Full name, age, date of birth, time of birth, height, skin tone (optional), and physical status. Astrological details like Gothra, Rashi, and Nakshatra are often included here as well.</>,
          <><strong>2. Academic & Career Details:</strong> Mention your highest qualification, college or university names, and current job role. Under career, list your current employer, industry type, and annual income (optional, but commonly shared). For more gender-specific tips, you can read our guides on <Link href="/biodata-for-boy" className="text-[#b11e24] hover:underline">biodata format for boys</Link> and <Link href="/biodata-for-girl" className="text-[#b11e24] hover:underline">biodata format for girls</Link>.</>,
          <><strong>3. Family Background:</strong> This is a key section for parents. List your father's and mother's names and occupations, details about siblings, and their marital status. Mentioning your family's native place and current residential location helps establish background details.</>
        ],
      },
      {
        title: "Writing a Respectful and Warm Partner Expectations Section",
        text: [
          <>The "Partner Expectations" block is where you communicate what you are looking for in a spouse. Writing this section with maturity and politeness is key. Avoid listing a long list of demands, which can sound off-putting. Instead, state your preferences regarding values, educational background, career choice, and family orientation.</>,
          <>For example, you could write: *'We are looking for a well-educated, family-oriented partner with a positive outlook on life, who value mutual respect and support. A working professional residing in metro cities would be a good match.'* This keeps expectations clear without sounding restrictive.</>,
          <>If you need inspiration on how to format this section on a printed page, our <Link href="/marriage-biodata-format" className="text-[#b11e24] hover:underline">marriage biodata format guide</Link> provides multiple templates showing ideal placement.</>
        ],
      },
      {
        title: "How Our Online Builder Simplifies Matrimonial Profile Creation",
        text: [
          <>Creating a biodata in MS Word often leads to formatting headaches—margins shift, fonts change unexpectedly when shared, and photos get misaligned. Our **online shaadi biodata maker** solves all these issues:</>,
          <>- **Automatic Formatting:** Columns, spacing, and headers are perfectly locked into A4 boundaries automatically.</>,
          <>- **Responsive Editing:** Edit fields on your phone or desktop and see changes instantly on a live canvas preview.</>,
          <>- **No Account/Login Required:** Your personal privacy is paramount. Create, preview, and download your profile without registering or sharing contact info.</>,
          <>- **Instant high-quality PDF Download:** The file generated is in high resolution, optimized to be shared on WhatsApp or printed on physical paper. Go to our <Link href="/marriage-biodata-pdf" className="text-[#b11e24] hover:underline">marriage biodata PDF</Link> page to learn more about printing options.</>
        ],
      },
    ],
    benefitsTitle: "Why Families Choose Our Matrimonial Biodata Maker",
    benefits: [
      "100% Free standard templates with no registration required",
      "Dynamic section control - add, delete, and rename fields easily",
      "Traditional templates featuring religious symbols and border styles",
      "Instant PDF downloads that look clean and crisp on all screen sizes",
      "Safe and secure processing - your personal data is never stored",
      "Full support for regional languages including Hindi and Marathi",
    ],
  };

  const faqs = [
    {
      q: "What is the difference between a marriage biodata and a resume?",
      a: "A resume focuses strictly on professional achievements and work experience. A marriage biodata balances your career details with personal attributes, family background, astrological details, and partner expectations.",
    },
    {
      q: "Can I download my shaadi biodata for free?",
      a: "Yes! All standard templates on RishtaMaker are completely free. You can edit, preview, and download your final PDF without any cost or registration.",
    },
    {
      q: "How can I add a photo to my matrimonial profile?",
      a: "Our builder includes an integrated photo picker. Simply upload a clear, well-lit, professional portrait, and it will be framed perfectly within the selected template layout automatically.",
    },
    {
      q: "Can I edit my biodata after generating the PDF?",
      a: "Since we do not save your details on our servers, you cannot edit the downloaded PDF directly. However, you can return to our website, fill out the details again, and download a new updated PDF in seconds.",
    },
  ];

  return (
    <SeoLandingPage
      hero={heroData}
      seoContent={seoContentData}
      faqs={faqs}
      breadcrumbItems={[
        { name: "Home", url: "https://rishtamaker.in" },
        { name: "Shaadi Biodata", url: "https://rishtamaker.in/shaadi-biodata" }
      ]}
    />
  );
}
