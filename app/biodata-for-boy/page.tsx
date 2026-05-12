"use client";

import { SeoLandingPage } from "@/components/marketing/seo-landing-page";
import Link from "next/link";

export default function BiodataForBoyPage() {
  const heroData = {
    badge: "Tailored for Grooms",
    title: "Biodata Format for Boy",
    subtitle: "Create a strong, professional marriage biodata that highlights your career and personality. Choose from clean designs optimized for grooms.",
    ctaText: "Create Biodata",
    ctaHref: "/#builder",
    secondaryCtaText: "Use Template",
    secondaryCtaHref: "/templates",
    imageSrc: "/images/biodata-boy-hero.png",
    imageAlt: "Groom Biodata Formats",
  };

  const seoContentData = {
    title: "The Ultimate Guide to Creating the Perfect Biodata for a Boy",
    blocks: [
      {
        title: "The Importance of a Strong Biodata Format for a Boy",
        text: [
          <>In the context of arranged marriages, the <strong>biodata format for boy</strong> plays a crucial role in creating a positive first impression. It is often the first piece of information a bride's family receives about a potential groom. Therefore, it needs to be professional, clean, and comprehensive. A well-organized document reflects your seriousness and respect for the process.</>,
          <>Many boys make the mistake of using casual layouts or not providing enough details about their career and family. In competitive matrimonial searches, a professional design can make a significant difference. You can explore our <Link href="/templates" className="text-[#b11e24] hover:underline">template pages</Link> to find a style that matches your professional standing.</>,
          <>A good profile should strike a balance between personal details and professional achievements. It should showcase not just what you do, but also who you are as a person and what values you hold dear.</>,
        ],
      },
      {
        title: "Key Elements to Include in a Groom Biodata",
        text: [
          <>A comprehensive <strong>marriage biodata for boy</strong> should include specific sections to give a complete picture. These typically include Personal Details, Educational Background, Professional Career, Family Details, and Partner Expectations.</>,
          <>Personal details should cover your full name, date of birth, height, and a brief 'About Me' section. The educational section should highlight your degrees and the institutions you attended. For the professional section, mention your current job title, company, and location. This is often a key area of interest for the bride's family.</>,
          <>Family details are equally important. Mention your parents' professions and your siblings. If you are creating a profile for a girl or want to see the other side, check out our <Link href="/biodata-for-girl" className="text-[#b11e24] hover:underline">biodata for girl</Link> page. For more general advice on layout, visit our <Link href="/marriage-biodata-format" className="text-[#b11e24] hover:underline">marriage biodata format</Link> guide.</>,
        ],
      },
      {
        title: "How to Choose the Right Boy Biodata for Marriage",
        text: [
          <>Choosing the right <strong>boy biodata for marriage</strong> depends on your background and preferences. If you are a professional in a corporate field, a clean, minimalist design like our 'Ocean Minimal' or 'Midnight Modern' templates works best. These designs focus on readability and a modern aesthetic.</>,
          <>If your family values tradition and cultural details heavily, a more ornate layout like 'Royal Maroon' with sections for horoscope and gotra might be more appropriate. RishtaMaker offers a variety of options to suit every need.</>,
          <>Ultimately, the best format is one that presents your information clearly without being cluttered. Avoid using bright, distracting colors and stick to a professional palette that conveys maturity and stability.</>,
        ],
      },
      {
        title: "Tips for Highlighting Career and Education",
        text: [
          <>For a <strong>groom biodata</strong>, the career and education sections are often scrutinized the most. Here are some tips to make them stand out:</>,
          <>- Be Specific: Instead of just saying 'Software Engineer', mention the specific domain or company if you are comfortable. E.g., 'Senior Software Engineer at a leading tech firm'.</>,
          <>- Mention Growth: If you have had significant career progression, you can mention it briefly in the 'About Me' section to show ambition and stability.</>,
          <>- Educational Pedigree: If you attended well-known universities or colleges, make sure to highlight them as they add credibility to your profile.</>,
          <>Presenting this information clearly helps the other family assess compatibility regarding lifestyle and future goals.</>,
        ],
      },
      {
        title: "Why Use RishtaMaker for Groom Biodatas",
        text: [
          <>RishtaMaker provides a specialized platform for creating a <strong>simple biodata for boy</strong>. Our tool is designed to be fast, easy, and secure. Here are the benefits of using our platform:</>,
          <>- No Account Needed: Create your document without sharing your email or phone number. We respect your privacy.</>,
          <>- Live Preview: See exactly how your document will look as you fill in the details.</>,
          <>- High-Quality PDF: Download a crisp, clean PDF that is ready to be shared on WhatsApp or printed.</>,
          <>- Mobile-Friendly: Our builder works perfectly on mobile devices, allowing you to create your profile anytime, anywhere. Start creating from the <Link href="/" className="text-[#b11e24] hover:underline">homepage</Link>.</>,
        ],
      },
      {
        title: "Common Mistakes Boys Make in Their Biodata",
        text: [
          <>To ensure your profile makes the best impression, avoid these common pitfalls:</>,
          <>- Casual Photos: Using group photos, selfies with filters, or blurred images is a big no-no. Use a professional or clear, well-lit photograph.</>,
          <>- Spelling Errors: Typos in your job title or education make the document look careless. Always proofread.</>,
          <>- Vague Descriptions: Saying 'I work in business' is too vague. Be more descriptive about your role or industry.</>,
          <>- Neglecting the 'About Me' Section: This is your voice. Use it to describe your personality and values, not just repeat your facts.</>,
        ],
      },
    ],
    benefitsTitle: "Why Choose RishtaMaker's Groom Templates?",
    benefits: [
      "Designs optimized specifically for a masculine and professional look",
      "100% Free to use and download standard templates",
      "No registration required - create in total privacy",
      "Instant PDF generation ready for digital sharing",
      "Support for detailed family and astrological information",
      "Easy-to-use form with live preview functionality",
    ],
  };

  const faqs = [
    {
      q: "What is the best biodata format for a boy?",
      a: "The best format is one that is clean, professional, and clearly highlights your career, education, and family background. Minimalist designs are very popular for modern professionals.",
    },
    {
      q: "Should I include a photo in my biodata?",
      a: "Yes, including a clear, professional-looking photo drastically increases the chances of a positive response. Avoid casual selfies.",
    },
    {
      q: "Is RishtaMaker free for creating boy biodatas?",
      a: "Yes, we offer free professional templates that you can fill and download as a PDF without any cost.",
    },
    {
      q: "Can I create a biodata in Hindi?",
      a: "Yes, our builder supports typing in Hindi and other regional languages, and it will be rendered correctly in the template.",
    },
  ];

  return (
    <SeoLandingPage
      hero={heroData}
      seoContent={seoContentData}
      faqs={faqs}
      gender="boy"
      breadcrumbItems={[
        { name: "Home", url: "https://rishtamaker.in" },
        { name: "Biodata for Boy", url: "https://rishtamaker.in/biodata-for-boy" }
      ]}
    />
  );
}
