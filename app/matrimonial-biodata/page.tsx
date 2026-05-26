"use client";

import { SeoLandingPage } from "@/components/marketing/seo-landing-page";
import Link from "next/link";

export default function MatrimonialBiodataPage() {
  const heroData = {
    badge: "Create Premium Profiles",
    title: "Matrimonial Biodata Maker",
    subtitle: "Design a professional matrimonial biodata online for free. Choose from clean, modern templates, fill in your details, and download your print-ready PDF instantly.",
    ctaText: "Create Matrimonial Biodata",
    ctaHref: "/#builder",
    secondaryCtaText: "Browse Templates",
    secondaryCtaHref: "/templates",
    imageSrc: "/images/marriage-biodata-hero.png",
    imageAlt: "Matrimonial Biodata Templates Online",
  };

  const seoContentData = {
    title: "How to Build the Perfect Matrimonial Biodata for Marriage",
    blocks: [
      {
        title: "The Importance of a Well-Structured Matrimonial Biodata",
        text: [
          <>When searching for a life partner through arranged channels, your **matrimonial biodata** serves as your initial introduction. It summarizes your personal details, education, professional career, family background, and partner preferences in a single page. Having an organized profile indicates seriousness and respect for the process, making a lasting positive impression on potential matches and their families.</>,
          <>A common mistake is using messy, unstructured text or poorly formatted files. A professional **matrimonial biodata format** ensures that all your key details are laid out in a visually pleasing manner. Our templates, such as 'Midnight Modern' and 'Royal Maroon', are built by design experts to balance modern aesthetics with traditional requirements. You can explore all our design options in our <Link href="/templates" className="text-[#b11e24] hover:underline">matrimonial templates gallery</Link>.</>,
          <>Creating a clean, structured presentation helps potential matches quickly evaluate compatibility, making the matchmaking process smoother and more efficient.</>
        ],
      },
      {
        title: "Key Information Checklist for a Matrimonial Profile",
        text: [
          <>To build an impactful **marriage biodata**, you should divide your details logically into clear sections:</>,
          <><strong>1. Personal Attributes:</strong> Include your full name, age, height, date of birth, time of birth, and native place. Astro details like Gotra, Rashi, and Nakshatra are also highly recommended if horoscope matching is important to your family.</>,
          <><strong>2. Academic & Professional Details:</strong> Clearly list your educational qualifications and the universities or colleges you attended. Under career details, mention your job title, current employer, working location, and annual income (optional). If you are creating a groom's profile, read our <Link href="/biodata-for-boy" className="text-[#b11e24] hover:underline">biodata format for boy</Link> guide. For a bride's profile, refer to our <Link href="/biodata-for-girl" className="text-[#b11e24] hover:underline">biodata format for girl</Link> page.</>,
          <><strong>3. Family Profile:</strong> Parents' names, occupations, native place, and current residence. Also include details about your siblings and their marital status to give a complete picture of your family background.</>
        ],
      },
      {
        title: "Tips for Writing Partner Expectations Professionally",
        text: [
          <>The "Partner Expectations" section is where you state the qualities you look for in a spouse. Writing this section with maturity and politeness is essential. Avoid rigid lists of demands, as they can come across as demanding. Instead, focus on core values, compatibility factors, education, and career preferences.</>,
          <>For instance, you could write: *'We are looking for a well-educated, family-oriented partner who value mutual respect and career growth. A working professional with progressive views would be a great match.'* This keeps expectations clear and welcoming.</>,
          <>To see how this section fits into the overall page layout, read our general <Link href="/marriage-biodata-format" className="text-[#b11e24] hover:underline">marriage biodata format guide</Link>.</>
        ],
      },
      {
        title: "Why Use Our Matrimonial Biodata Maker?",
        text: [
          <>Creating a profile in Word often leads to alignment and layout issues that look unprofessional. Our **matrimonial biodata online builder** simplifies the process:</>,
          <>- **Instant Previews:** See your edits update in real-time on our live preview canvas.</>,
          <>- **No Sign-Up Needed:** We value your privacy. You can build and download your profile without registering or sharing your email address.</>,
          <>- **Locked A4 Boundaries:** Our templates are mathematically designed to lock standard details beautifully onto a single A4 page, preventing awkward layout shifts.</>,
          <>- **Print-Ready PDF:** Download a clean, high-resolution PDF file ready to be shared on WhatsApp or printed. Refer to our <Link href="/marriage-biodata-pdf" className="text-[#b11e24] hover:underline">marriage biodata PDF download</Link> page for specific file optimization tips.</>
        ],
      },
    ],
    benefitsTitle: "Benefits of Creating Your Matrimonial Profile with RishtaMaker",
    benefits: [
      "100% Free standard templates with no registration required",
      "Dynamic field editor lets you add, delete, and rename sections",
      "Professional layouts optimized for both digital sharing and print",
      "Safe and secure processing - your personal data is never stored",
      "Multilingual support - type in Hindi, Marathi, and other regional languages",
      "A wide range of design choices from traditional to modern minimalist",
    ],
  };

  const faqs = [
    {
      q: "What should be included in a matrimonial biodata?",
      a: "A standard profile includes Personal details, Astro details (optional), Education/Career details, Family background, and Partner expectations, along with a clear, well-lit photograph.",
    },
    {
      q: "Is this matrimonial biodata maker free?",
      a: "Yes! All standard templates on RishtaMaker are completely free. You can edit, preview, and download your final PDF without any cost or registration.",
    },
    {
      q: "Can I print the downloaded PDF file?",
      a: "Absolutely! The downloaded PDF is in print-ready high-resolution. You can print it on any standard home printer or take it to a print shop. We recommend using high-quality paper for a premium feel.",
    },
    {
      q: "How do I edit my profile after downloading the PDF?",
      a: "Since we do not store your data on our servers to ensure privacy, you cannot edit the downloaded PDF file directly. However, you can return to our website, fill out the form again, and download a new PDF in seconds.",
    },
  ];

  return (
    <SeoLandingPage
      hero={heroData}
      seoContent={seoContentData}
      faqs={faqs}
      breadcrumbItems={[
        { name: "Home", url: "https://rishtamaker.in" },
        { name: "Matrimonial Biodata", url: "https://rishtamaker.in/matrimonial-biodata" }
      ]}
    />
  );
}
