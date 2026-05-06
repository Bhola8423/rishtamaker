export type BlogCategory = 
  | "Biodata Guides"
  | "Templates & Formats"
  | "Tips & Advice"
  | "Religion-Based Biodata"
  | "Regional (India-focused)"
  | "Tools & Comparisons";

export type FAQ = {
  question: string;
  answer: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  author: string;
  category: BlogCategory;
  tags: string[];
  faqs?: FAQ[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-make-marriage-biodata-step-by-step",
    title: "How to Make a Marriage Biodata (Step-by-Step)",
    metaTitle: "How to Make a Marriage Biodata | Step-by-Step Guide 2026",
    metaDescription: "Learn how to make a perfect marriage biodata with this comprehensive step-by-step guide. Create an impressive profile that attracts the right matches.",
    excerpt: "A complete, easy-to-follow guide on creating a stunning marriage biodata from scratch.",
    content: `
Creating a marriage biodata is one of the most important steps in the matchmaking process. It serves as your very first impression to potential matches and their entire families. In traditional matchmaking and arranged marriages, this single document acts as your proxy, speaking on your behalf before you ever get the chance to meet in person. Because of this immense weight, crafting it perfectly is non-negotiable. Here is a highly detailed, step-by-step guide to writing the perfect marriage biodata:

## 1. Gather Your Information
Before you even begin typing, take out a notepad and start collecting all your accurate details. You will need your exact age, accurate height, verifiable educational background, and a clear breakdown of your current occupation. Additionally, gather your family's background information, including your parents' exact professions and the marital or occupational status of your siblings.

## 2. Choose a Professional Template
A beautifully written biodata will fail if it is presented poorly. Skip the outdated MS Word documents. Use a clean, modern, and aesthetically pleasing template that highlights your best features without being overly cluttered. Formats like 'Classic Traditional' or 'Elegant Gold' ensure that older family members can read the text easily while still looking premium and modern.

## 3. Write a Compelling 'About Me'
This is the heart of your biodata. Be honest, humble, and positive. Avoid cliches like "I am a simple person". Instead, write about your core values, your genuine hobbies, your career aspirations, and how you spend your weekends. Are you an avid reader? A weekend trekker? Do you value family time above all else? Share this here to attract like-minded individuals.

## 4. Select the Perfect Photo
Your photo is the first thing people look at—it is undeniable. Include a high-quality, recently taken photograph. Avoid using heavily edited pictures, Snapchat filters, or group photos where people have to guess who you are. A genuine, warm smile in natural lighting works wonders and instantly builds trust.

## 5. Be Clear About Expectations
State your preferences clearly but politely. Mention your baseline expectations regarding a partner's education, profession, or core lifestyle traits. Being specific helps filter out incompatible matches early on, saving both families a massive amount of time and emotional energy.
    `,
    coverImage: "/images/blog-1.jpg",
    date: "2026-05-04",
    author: "RishtaMaker Team",
    category: "Biodata Guides",
    tags: ["Guide", "Step-by-step", "Biodata"],
    faqs: [
      { question: "How long should a marriage biodata be?", answer: "Ideally, it should be 1 to 2 pages. Keep it concise while including all necessary details." }
    ]
  },
  {
    slug: "how-to-create-biodata-arranged-marriage",
    title: "How to Create Biodata for Arranged Marriage",
    metaTitle: "How to Create an Impressive Biodata for Arranged Marriage",
    metaDescription: "Discover the specific elements required for an arranged marriage biodata, including family heritage, expectations, and astrological details.",
    excerpt: "Arranged marriages require specific details. Learn exactly how to format your biodata for the traditional matchmaking process.",
    content: `
Arranged marriages operate on a completely different set of rules compared to modern dating. In this traditional matchmaking process, your biodata is evaluated not just by a potential partner, but by their parents, extended relatives, and sometimes even family friends or matchmakers. Because of this multi-layered scrutiny, your biodata must strike a perfect balance between personal expression and traditional respect. 

Here is exactly how to format your biodata for the arranged marriage process:

## 1. Emphasize Family Background
In arranged marriages, the common saying is that "families marry families." Your biodata must reflect this. Dedicate a substantial section to detailing your family heritage. Clearly mention your father's occupation and your mother's background. If your parents are retired, mention their previous notable professions. Additionally, list your siblings, their educational qualifications, and whether they are currently married or single. A strong, transparent family background builds instant credibility.

## 2. Include Astrological Details
If your specific community or family strictly follows astrology, do not bury this information. Include your astrological details prominently, usually right below your basic personal information. The essential fields to include are your Rasi (Moon Sign), Nakshatra (Birth Star), and Gotra. Furthermore, if you are a Manglik (or Anshik Manglik), state it clearly. Transparency here prevents matches from falling apart later in the process due to astrological incompatibility.

## 3. Be Clear About Partner Expectations
Arranged marriages are fundamentally about aligning life goals and family values. Use the final section of your biodata to state your expectations regarding education, profession, and lifestyle. Do you prefer a partner who is a working professional? Are you looking for someone from a specific geographic region? Stating this clearly ensures that family matchmakers only bring you profiles that actually align with your vision for the future.
    `,
    coverImage: "/images/blog-2.jpg",
    date: "2026-05-04",
    author: "RishtaMaker Team",
    category: "Tips & Advice",
    tags: ["Arranged Marriage", "Tradition"],
    faqs: [
      { question: "Is Kundli necessary for arranged marriage biodata?", answer: "It depends on your cultural background, but including basic details like Gotra and Nakshatra is highly recommended in India." }
    ]
  },
  {
    slug: "what-to-include-in-marriage-biodata",
    title: "What to Include in Marriage Biodata",
    metaTitle: "What to Include in a Marriage Biodata | Essential Checklist",
    metaDescription: "Not sure what to write? Here is the ultimate checklist of what to include in your marriage biodata for maximum impact.",
    excerpt: "A complete checklist of everything you must include in your matrimonial profile.",
    content: "## 1. Personal Details\nName, Age, Height, Weight, Blood Group, and Contact Information.\n\n## 2. Professional & Educational\nHighest degree, current occupation, income (optional but helpful), and future career goals.\n\n## 3. Family Details\nFather's name and occupation, mother's background, and details about siblings.",
    coverImage: "/images/blog-3.jpg",
    date: "2026-05-04",
    author: "RishtaMaker Team",
    category: "Biodata Guides",
    tags: ["Checklist", "Essentials"],
    faqs: [
      { question: "Should I include my salary in my marriage biodata?", answer: "It is optional. Men often include it, but you can also mention 'Well-settled' and discuss exact figures later." }
    ]
  },
  {
    slug: "how-to-write-perfect-marriage-profile",
    title: "How to Write a Perfect Marriage Profile",
    metaTitle: "How to Write a Perfect Marriage Profile | Expert Tips",
    metaDescription: "Write a marriage profile that stands out! Learn the exact words and formatting to use to attract the perfect life partner.",
    excerpt: "Your profile is your pitch. Learn how to write compelling copy for your biodata.",
    content: "## 1. The Tone Matters\nWrite in a polite, humble, yet confident tone.\n\n## 2. Focus on Compatibility\nMention your lifestyle choices (diet, drinking/smoking habits, religious beliefs) clearly so you attract like-minded people.",
    coverImage: "/images/blog-4.jpg",
    date: "2026-05-04",
    author: "RishtaMaker Team",
    category: "Tips & Advice",
    tags: ["Profile", "Writing"],
    faqs: [
      { question: "Should I write the profile myself or ask my parents to write it?", answer: "Writing it yourself adds a personal, authentic touch, but getting your parents' input ensures all traditional bases are covered." }
    ]
  },
  {
    slug: "marriage-biodata-mistakes-to-avoid",
    title: "Marriage Biodata Mistakes to Avoid",
    metaTitle: "Top 10 Marriage Biodata Mistakes to Avoid in 2026",
    metaDescription: "Don't ruin your first impression. Learn the most common marriage biodata mistakes and how to fix them immediately.",
    excerpt: "Avoid these common red flags that instantly get your biodata rejected by families.",
    content: "## 1. Spelling and Grammar Errors\nNothing screams 'careless' like typos. Always proofread.\n\n## 2. Overly Demanding Expectations\nHaving preferences is fine, but listing a massive checklist of demands for a partner is a huge red flag.\n\n## 3. Using Old/Filtered Photos\nUsing a 5-year-old photo or a heavily Snapchat-filtered selfie destroys trust immediately.",
    coverImage: "/images/blog-5.jpg",
    date: "2026-05-04",
    author: "RishtaMaker Team",
    category: "Tips & Advice",
    tags: ["Mistakes", "Advice"],
    faqs: [
      { question: "Can I use a selfie in my biodata?", answer: "It is highly discouraged. Use a professionally taken portrait or a high-quality photo taken by someone else." }
    ]
  },
  {
    slug: "how-to-make-biodata-attractive",
    title: "How to Make Your Biodata Attractive",
    metaTitle: "How to Make an Attractive Marriage Biodata | Design Tips",
    metaDescription: "Make your biodata visually stunning. Discover design tricks, color psychologies, and layout secrets for matrimonial profiles.",
    excerpt: "Visual presentation is 50% of the battle. Here is how to make your biodata visually appealing.",
    content: "## 1. Use Premium Templates\nSkip MS Word. Use a dedicated builder like RishtaMaker that offers balanced, aesthetic templates.\n\n## 2. Use Whitespace\nDon't cram text together. Let the layout breathe so it is easy for older family members to read.\n\n## 3. Pick Elegant Colors\nStick to rich, traditional colors like Maroon, Gold, or elegant pastels like Floral Pink.",
    coverImage: "/images/blog-6.jpg",
    date: "2026-05-04",
    author: "RishtaMaker Design Team",
    category: "Templates & Formats",
    tags: ["Design", "Attractive"],
    faqs: [
      { question: "Should I use a colorful background?", answer: "Subtle backgrounds (like soft florals or mandalas) are great. Avoid loud, neon colors that make text hard to read." }
    ]
  },
  {
    slug: "how-to-add-horoscope-in-biodata",
    title: "How to Add Horoscope in Biodata",
    metaTitle: "How to Add Horoscope and Astrological Details in Biodata",
    metaDescription: "Learn exactly how to format and include your Gotra, Rasi, Nakshatra, and Manglik status in your marriage biodata.",
    excerpt: "For many Indian families, astrology is the first filter. Learn how to present your details correctly.",
    content: "## 1. Create a Dedicated Section\nDon't mix it with your personal hobbies. Create a 'Horoscope Details' section.\n\n## 2. Essential Fields\nInclude Time of Birth, Date of Birth, Place of Birth, Gotra, Rasi (Moon Sign), and Nakshatra (Star).\n\n## 3. Be Transparent About Doshas\nIf you are Manglik, state it clearly (e.g., Anshik Manglik). It saves everyone time.",
    coverImage: "/images/blog-7.jpg",
    date: "2026-05-04",
    author: "RishtaMaker Team",
    category: "Religion-Based Biodata",
    tags: ["Horoscope", "Astrology"],
    faqs: [
      { question: "Is exact time of birth necessary?", answer: "Yes, for accurate Kundli matching, the exact minute of birth is crucial." }
    ]
  },
  {
    slug: "how-to-write-about-family-in-biodata",
    title: "How to Write About Family in Biodata",
    metaTitle: "How to Write About Family Background in Marriage Biodata",
    metaDescription: "Learn how to respectfully and impressively describe your family background, parents' professions, and siblings in your biodata.",
    excerpt: "Your family's reputation matters in arranged marriages. Here's how to highlight your heritage.",
    content: "## 1. Keep It Structured\nStart with Father's Name and Occupation, followed by Mother's Details, and then Siblings.\n\n## 2. Highlight Respectable Professions\nIf your family has a strong business background or holds government positions, mention it proudly but humbly.\n\n## 3. Sibling Details\nMention what your siblings do and if they are married (e.g., '1 Elder Brother (Married, Software Engineer)').",
    coverImage: "/images/blog-8.jpg",
    date: "2026-05-04",
    author: "RishtaMaker Team",
    category: "Biodata Guides",
    tags: ["Family", "Background"],
    faqs: [
      { question: "Should I include my grandparents' details?", answer: "Usually, parents and siblings are enough. However, if your grandparents are highly renowned in your community, a brief mention is beneficial." }
    ]
  },
  {
    slug: "how-to-write-perfect-marriage-biodata",
    title: "How to Write the Perfect Marriage Biodata",
    metaTitle: "How to Write a Perfect Marriage Biodata | Step-by-Step Guide",
    metaDescription: "Learn exactly how to write an impressive marriage biodata. Discover what details to include, which photos to choose, and how to stand out to potential matches.",
    excerpt: "Learn the essential tips and tricks to create a marriage biodata that stands out and makes a great first impression.",
    content: `
Creating a marriage biodata is one of the most important steps in the matchmaking process. It serves as your very first impression to potential matches and their entire families. In traditional matchmaking and arranged marriages, this single document acts as your proxy, speaking on your behalf before you ever get the chance to meet in person.

![Indian couple holding biodata](/images/blog/happy-couple.png)

## 1. Be Honest and Authentic
The foundation of a good biodata is honesty. Always provide accurate information about your age, height, education, and profession. Authenticity builds trust from the very beginning. Avoid exaggerating your achievements or background, as transparency is key to a long-lasting relationship.

## 2. Choose the Right Photo
Your photo is the first thing people look at—it is undeniable. Include a high-quality, recently taken photograph. Avoid using heavily edited pictures, Snapchat filters, or group photos where people have to guess who you are. A genuine, warm smile in natural lighting works wonders and instantly builds trust.

## 3. Highlight Your Personality
Beyond basic details, include information about your hobbies, interests, and life goals. This helps potential matches understand your personality and see if your lifestyles align. Are you an avid reader? A weekend trekker? Do you value family time above all else? Share this here to attract like-minded individuals.

![Biodata templates collection](/images/blog/templates-collage.png)

## 4. Clear Family Background
In Indian marriages, families marry families. Provide a concise but clear overview of your family background. Mention your parents' professions and your siblings, as family compatibility is often considered important. If your parents are retired, mention their previous notable professions to build credibility.

## 5. Be Specific About Expectations
Arranged marriages are fundamentally about aligning life goals and family values. Use the final section of your biodata to state your expectations regarding education, profession, and lifestyle. Stating this clearly ensures that family matchmakers only bring you profiles that actually align with your vision for the future.
    `,
    coverImage: "/images/blog/biodata-guide-cover.png",
    date: "2026-05-01",
    author: "RishtaMaker Team",
    category: "Biodata Guides",
    tags: ["Biodata", "Marriage", "Guide"],
    faqs: [
      { question: "What should I write in about me in biodata for marriage?", answer: "Write a brief, honest summary of your personality, your career goals, and your values. Keep it positive and concise." },
      { question: "Is a photo compulsory for a marriage biodata?", answer: "While not strictly compulsory, a clear and pleasant photo drastically increases your chances of getting a positive response." }
    ]
  },
  {
    slug: "top-5-biodata-formats",
    title: "Top 5 Biodata Formats for 2026",
    metaTitle: "Top 5 Marriage Biodata Formats & Templates for 2026 | Free Download",
    metaDescription: "Explore the top 5 most elegant and modern biodata formats for 2026. Choose from classic traditional to floral pink designs.",
    excerpt: "Discover the most popular and elegant biodata formats that are trending this year.",
    content: `
Choosing the right format for your biodata can make a significant difference. Here are the top 5 biodata formats trending in 2026:

## 1. The Classic Traditional
Perfect for those who prefer a formal and structured approach. This format focuses heavily on family background and astrological details.

## 2. The Modern Elegant
A clean, minimalist design that prioritizes readability and aesthetic appeal. Great for modern professionals.

## 3. The Royal Heritage
Rich colors like maroon and gold, perfect for giving a premium and culturally rich impression.

## 4. The Minimalist White
For those who believe less is more. This format uses plenty of whitespace and clean typography.

## 5. The Floral Pink
A beautiful, aesthetic design that incorporates subtle floral patterns, very popular among young brides.
    `,
    coverImage: "/images/blog-10.jpg",
    date: "2026-05-03",
    author: "RishtaMaker Design Team",
    category: "Templates & Formats",
    tags: ["Templates", "Design", "Trends"],
    faqs: [
      { question: "Which biodata format is best for marriage?", answer: "The best format depends on your audience. Traditional families prefer detailed, astrology-heavy formats, while modern professionals often prefer clean, minimalist designs." },
      { question: "Can I download these templates for free?", answer: "Yes, you can create and download basic templates for free using the RishtaMaker builder, with premium designs available for a small fee." }
    ]
  }
];

export function getAllPosts(): BlogPost[] {
  return BLOG_POSTS.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find(post => post.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  const decodedCategory = decodeURIComponent(category).toLowerCase();
  return getAllPosts().filter(post => post.category.toLowerCase() === decodedCategory);
}

export function getPostsByTag(tag: string): BlogPost[] {
  const decodedTag = decodeURIComponent(tag).toLowerCase();
  return getAllPosts().filter(post => post.tags.some(t => t.toLowerCase() === decodedTag));
}

export const MAIN_CATEGORIES: BlogCategory[] = [
  "Biodata Guides",
  "Templates & Formats",
  "Tips & Advice",
  "Religion-Based Biodata",
  "Regional (India-focused)",
  "Tools & Comparisons"
];

export function getAllCategories(): string[] {
  return MAIN_CATEGORIES;
}

export function getAllTags(): string[] {
  const tags = new Set(BLOG_POSTS.flatMap(post => post.tags));
  return Array.from(tags);
}
