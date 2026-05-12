"use client";

import { SeoLandingPage } from "@/components/marketing/seo-landing-page";

export default function BiodataForGirlPage() {
  const heroData = {
    badge: "For Brides",
    title: (
      <>
        Marriage Biodata <br />
        <span className="text-[#b11e24] italic">For Girls</span>
      </>
    ),
    subtitle: "Create a beautiful and elegant marriage biodata for girls. Choose from premium, soft designs and download as PDF instantly.",
    ctaText: "Create Girl's Biodata",
    ctaHref: "/#builder",
    secondaryCtaText: "Browse Templates",
    secondaryCtaHref: "/templates",
    imageSrc: "/images/marriage-biodata-hero.png",
    imageAlt: "Marriage Biodata for Girl",
  };

  const seoContentData = {
    title: "How to Create a Beautiful Biodata for a Girl",
    blocks: [
      {
        title: "Key Information for a Bride's Biodata",
        text: [
          "A marriage biodata for a girl (bride) should be a balanced reflection of her personality, education, family values, and aspirations. While all details are important, there is often a special interest in the girl's nature, hobbies, and family background.",
          "It's essential to include accurate personal details like date of birth, height, and education. If you are working, clearly state your profession and company. If you have specific talents or hobbies like painting, music, or cooking, mentioning them can add a personal touch.",
        ],
      },
      {
        title: "Choosing the Right Biodata Format for a Girl",
        text: [
          "Girls often prefer templates that are elegant, soft, and aesthetically pleasing. While traditional formats are always a safe choice, many modern girls prefer clean layouts with soft pastels, floral accents, or classic borders.",
          "At RishtaMaker, we have a curated collection of templates that are perfect for girls. They combine traditional respect with modern sensibilities, ensuring your profile looks both beautiful and professional.",
        ],
      },
      {
        title: "Crafting a Compelling 'About Me' Section",
        text: [
          "The 'About Me' section is where you can let your personality shine. Describe yourself in a few positive sentences. Mention your values, what you enjoy doing in your free time, and your outlook on life.",
          "Are you a family-oriented person who also loves her career? Do you enjoy reading or traveling? Be genuine and let the other family get a sense of the real you. This helps in finding a truly compatible match.",
        ],
      },
      {
        title: "Expressing Partner Expectations Gracefully",
        text: [
          "When describing what you are looking for in a life partner, aim for a tone that is clear yet graceful. Mention key qualities that matter to you, such as mutual respect, shared values, or educational background.",
          "Instead of a list of demands, frame it as a vision of a shared future. For example, 'I am looking for a well-educated, understanding partner who values family traditions and supports my career aspirations.'",
        ],
      },
    ],
    benefitsTitle: "Why Use RishtaMaker for a Girl's Biodata?",
    benefits: [
      "Elegant and beautiful template designs",
      "Easy to showcase education, talents, and hobbies",
      "Secure and private - your data is not stored",
      "Download as high-quality PDF for easy sharing",
      "Support for traditional fields like horoscope",
      "Completely free to create standard profiles",
    ],
  };

  const faqs = [
    {
      q: "What should be included in a girl's marriage biodata?",
      a: "Key sections include Personal Details, Educational Qualifications, Professional details (if applicable), Family Background, Hobbies/Interests, and Partner Expectations.",
    },
    {
      q: "Which template is best for a girl's biodata?",
      a: "Templates with soft colors, elegant borders, and clean typography are very popular. RishtaMaker offers many such designs.",
    },
    {
      q: "Is it safe to create a biodata online?",
      a: "Yes, RishtaMaker does not require registration and does not store your personal data on our servers, ensuring your privacy is protected.",
    },
    {
      q: "Can I add a photo to the biodata?",
      a: "Yes, most of our templates have space for a profile photo. You can easily upload it in the builder.",
    },
  ];

  return (
    <SeoLandingPage
      hero={heroData}
      seoContent={seoContentData}
      faqs={faqs}
      gender="girl"
      breadcrumbItems={[
        { name: "Home", url: "https://rishtamaker.in" },
        { name: "Biodata for Girl", url: "https://rishtamaker.in/biodata-for-girl" }
      ]}
    />
  );
}
