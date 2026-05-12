import React from "react";
import Link from "next/link";

export const templateLongContent: Record<string, { title: string; blocks: Array<{ title: string; text: React.ReactNode | React.ReactNode[] }> }> = {
  "modern-marriage-biodata": {
    title: "The Ultimate Guide to the Modern Marriage Biodata Template",
    blocks: [
      {
        title: "Why Choose the Modern Marriage Biodata Template?",
        text: [
          <>In today's digital age, the first impression of your matrimonial profile often happens on a screen. The <strong>Modern Marriage Biodata</strong> template is designed specifically for contemporary professionals who want to present themselves in a sleek, sophisticated manner. This template breaks away from traditional, overly ornate designs and focuses on clean lines, balanced typography, and a structured layout that is easy to read on both mobile and desktop devices.</>,
          <>Choosing this template shows that you value professionalism and modern aesthetics. It is particularly popular among individuals working in corporate sectors, IT, design, and creative fields where a polished presentation is highly valued. The layout ensures that your career achievements and education are highlighted effectively, making it a powerful tool in your matchmaking journey. For more advice on layout choices, read our guide on <Link href="/marriage-biodata-format" className="text-[#b11e24] hover:underline">marriage biodata format</Link>.</>,
          <>Furthermore, a modern design reflects a progressive mindset. It suggests that while you respect tradition, you are also aligned with contemporary values and lifestyles. This can be a strong filter to attract like-minded partners who share a similar outlook on life and career.</>,
        ],
      },
      {
        title: "Key Features of the Modern Layout",
        text: [
          <>- <strong>Sleek Typography</strong>: We use modern font stacks that ensure readability and give a premium feel to the document.</>,
          <>- <strong>Structured Sections</strong>: Clearly defined blocks for personal details, professional background, and family information prevent the document from looking cluttered.</>,
          <>- <strong>Balanced Color Palette</strong>: Subtle accents and a clean background make the text stand out without being distracting.</>,
          <>- <strong>Mobile Optimization</strong>: The design adapts perfectly to smaller screens, which is crucial since most profiles are shared on WhatsApp or viewed on phones.</>,
          <>Each of these features is carefully crafted to ensure that the reader's focus remains on your strengths and personality, rather than being distracted by unnecessary background elements. Check out our <Link href="/blog" className="text-[#b11e24] hover:underline">blog</Link> for more tips on creating a great profile.</>,
        ],
      },
    ],
  },
  "simple-biodata-format": {
    title: "The Power of Simplicity: Simple Biodata Format Guide",
    blocks: [
      {
        title: "Why a Simple Biodata Format Works Best",
        text: [
          <>Sometimes, less is more. The <strong>Simple Biodata Format</strong> is designed for those who believe that clarity and simplicity are the ultimate forms of sophistication. In a stack of complex and decorated profiles, a clean and straightforward layout can often be the one that catches the eye and holds attention.</>,
          <>This template focuses entirely on the content. It removes unnecessary decorations and background patterns to ensure that your details are the hero of the page. It is highly readable, making it a favorite among older family members who often review these documents first.</>,
          <>A simple layout also conveys a sense of honesty and transparency. It suggests that you are confident in who you are and do not need flashy designs to make an impression. This can build immediate trust with the reader. Learn more about writing about yourself in our article on <Link href="/blog/about-me-for-marriage-biodata" className="text-[#b11e24] hover:underline">About Me for Marriage Biodata</Link>.</>,
        ],
      },
      {
        title: "Elements of the Simple Layout",
        text: [
          <>- <strong>Generous Whitespace</strong>: Proper spacing ensures that the eye can easily scan the information without feeling overwhelmed.</>,
          <>- <strong>Clear Hierarchy</strong>: Bold headings and organized lists make finding specific details (like education or Gotra) effortless.</>,
          <>- <strong>Universal Appeal</strong>: This design works well across all communities and regions, making it a versatile choice for anyone.</>,
          <>The absence of heavy borders or background images makes this template extremely lightweight and fast to load, ensuring a smooth experience for anyone viewing it on a mobile network.</>,
        ],
      },
    ],
  },
  "hindu-biodata-template": {
    title: "Honoring Tradition: The Hindu Biodata Template",
    blocks: [
      {
        title: "A Design Rooted in Tradition",
        text: [
          <>For families where cultural values and astrological compatibility are of utmost importance, the <strong>Hindu Biodata Template</strong> offers the perfect solution. This template is designed with traditional aesthetics in mind, featuring subtle cultural motifs and a layout that prioritizes details like Gotra, Rasi, and Nakshatra.</>,
          <>It creates an immediate sense of familiarity and respect for tradition, which is often appreciated by elders in the family. The color palette typically features auspicious tones like maroon, gold, or cream, making the document feel like a formal and sacred introduction.</>,
          <>Using a traditionally styled template shows that you value your roots and are respectful of the family's cultural practices. This can be very comforting to families looking for a match within similar cultural backgrounds. For more examples, see our <Link href="/blog/marriage-biodata-examples" className="text-[#b11e24] hover:underline">marriage biodata examples</Link>.</>,
        ],
      },
      {
        title: "Dedicated Astrological Sections",
        text: [
          <>- <strong>Horoscope Details</strong>: Dedicated space for date, time, and place of birth.</>,
          <>- <strong>Astrological Marks</strong>: Fields for Rasi, Nakshatra, and Gotra are prominently displayed.</>,
          <>- <strong>Family Lineage</strong>: Space to mention native place and grandparents' details, which are often important in traditional matches.</>,
          <>Having these details upfront saves time for both families. It allows for quick kundali matching and ensures that conversations proceed on a foundation of compatibility.</>,
        ],
      },
    ],
  },
};
