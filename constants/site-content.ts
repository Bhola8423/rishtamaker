export type NavItem = {
  label: string;
  href: string;
};

export type Stat = {
  value: string;
  label: string;
  detail: string;
};

export type Feature = {
  title: string;
  description: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  image: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type SocialLink = {
  name: string;
  href: string;
  icon: string;
};

export const siteContent = {
  brand: {
    name: "RishtaMaker",
    tagline: "Instant marriage profile builder. Create biodata in 2 minutes.",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Create Biodata", href: "/#builder" },
    { label: "Templates", href: "/templates" },
    { label: "Blogs", href: "/blog" },
    { label: "Hindi Biodata", href: "/hindi-biodata" },
    { label: "Format for Boy", href: "/biodata-for-boy" },
    { label: "Format for Girl", href: "/biodata-for-girl" },
  ] satisfies NavItem[],
  hero: {
    eyebrow: "The Best Marriage Biodata Maker In India",
    title: "Instant marriage profile builder. Create your biodata in 2 minutes!",
    description:
      "Use our free biodata maker for shaadi to create your matrimonial CV online. Choose from modern biodata templates free and download your marriage profile instantly.",
  },
  features: [
    {
      title: "Easy to use",
      description: "No Sign up / Registration required. Enter your details, choose template and voila!! Your biodata in PDF format is ready."
    },
    {
      title: "Customization made simple",
      description: "You have full control of what you want in your marriage biodata. You can add new fields and delete or rename the existing fields."
    },
    {
      title: "Great Looking Templates",
      description: "We have designed these templates which are unique, clean and perfect for a matrimonial biodata."
    }
  ] satisfies Feature[],
  testimonials: [
    {
      name: "Vinod Jethwa",
      role: "Happy User",
      image: "https://i.pravatar.cc/150?u=Vinod",
      quote: "Its seamless work and less time consuming, just have your details ready for input and off you go choosing your desired template. Price is reasonable and instant download.",
    },
    {
      name: "Nehal Patel",
      role: "Happy User",
      image: "https://i.pravatar.cc/150?u=Nehal",
      quote: "Excellent website to create Bio-data. Very good premium formats are available. Much better than trying to make something in Word.",
    },
    {
      name: "Niraj Panchal",
      role: "Happy User",
      image: "https://i.pravatar.cc/150?u=Niraj",
      quote: "Amazing service by team! Helped me adjust my name and update details quickly. 5 star from my end. Beautiful designs.",
    },
    {
      name: "Priyanka Sharma",
      role: "Happy User",
      image: "https://i.pravatar.cc/150?u=Priyanka",
      quote: "The interface is incredibly straightforward. I made my biodata in literally 5 minutes and it looks so professional and aesthetic.",
    },
    {
      name: "Rohan Desai",
      role: "Happy User",
      image: "https://i.pravatar.cc/150?u=Rohan",
      quote: "I was struggling with format until I found this. The layouts are so nice and being able to customize sections is a game changer.",
    },
    {
      name: "Sneha Reddy",
      role: "Happy User",
      image: "https://i.pravatar.cc/150?u=Sneha",
      quote: "This is exactly what I was looking for. No signups, no hidden fees jumping out randomly, just clean matrimonial templates.",
    },
    {
      name: "Aditya Verma",
      role: "Happy User",
      image: "https://i.pravatar.cc/150?u=Aditya",
      quote: "Super convenient platform. I created biodatas for both myself and my sister in one sitting. High quality PDF exports too.",
    },
    {
      name: "Meera Iyer",
      role: "Happy User",
      image: "https://i.pravatar.cc/150?u=Meera",
      quote: "Love the maroon classic template! It has the perfect traditional touch with an extremely modern layout.",
    },
    {
      name: "Karan Singh",
      role: "Happy User",
      image: "https://i.pravatar.cc/150?u=Karan",
      quote: "Fantastic experience all around. It made the stressful process of formatting matrimonial details honestly very easy.",
    },
    {
      name: "Anjali Gupta",
      role: "Happy User",
      image: "https://i.pravatar.cc/150?u=Anjali",
      quote: "What you see is what you get. The live preview updates exactly as you type. Really great job building this website.",
    }
  ] satisfies Testimonial[],
  faqs: [
    {
      question: "Do I need design skills to create a good-looking marriage biodata?",
      answer: "No design skills are required to create a biodata. Simply enter your details, choose a template, and your beautiful marriage biodata will be ready to download in PDF format.",
    },
    {
      question: "Is it possible to include a profile photo in the biodata?",
      answer: "Certainly! You can easily upload your photo (up to 20MB) and it will beautifully format into the templates.",
    },
    {
      question: "Do i need to sign up/register in order to create a biodata?",
      answer: "No, signing up/registration is not required to create your biodata. Simply enter your details and go.",
    },
    {
      question: "What format will I get my biodata in?",
      answer: "We'll provide your marriage biodata as a high-quality PDF, which you can easily download.",
    },
    {
      question: "Is it possible to include custom fields or data?",
      answer: "Yes, with our biodata builder, you have the flexibility to personalise your information. Add new fields or modify existing ones easily.",
    },
  ] satisfies Faq[],
  seoFormatGuide: [
    {
      heading: "Marriage Biodata Format: Crafting Your Perfect Introduction",
      content: "A professional marriage biodata is a comprehensive document that includes details about your background, education, career, family and cultural beliefs. This is the first thing your potential partner will see so you should make it as informative and attractive as possible to make that lasting impression. Using an online biodata generator like RishtaMaker makes this simple.\n\n✅ Include essential sections such as Personal Details, Hobbies & Values, Cultural & Astrological Details, Educational & Professional Details, Family Details, and Contact Details.\n✅ Use our free marriage biodata maker to choose a professional format and present your information beautifully."
    },
    {
      heading: "Personal Details, Hobbies & Values",
      content: "Always try to include your full name. Date of Birth is one of the most important attributes for marriage biodata. Place of Birth is important for astrological purposes. Adding hobbies makes it more relatable and helps start conversations."
    },
    {
      heading: "Cultural & Astrological Details",
      content: "The Rashi, or Moon Sign, is an important aspect of Vedic Astrology. Nakshatras provide deeper insights into personality traits. Gotra gives an idea of a person's ancestral lineage. If Gotra is not relevant to your culture, this section can be removed easily with our builder."
    },
    {
      heading: "Educational & Professional Details",
      content: "The Educational background tells a lot about lifestyle, values, and career goals. Professional background gives an idea about your financial position and stability."
    },
    {
      heading: "Family Details",
      content: "Sharing your family background helps potential matches understand your support system and values. Highlight father's and mother's occupation, and details about siblings."
    }
  ],
  socialMedia: [
    { name: "Facebook", href: "#", icon: "facebook" },
    { name: "Instagram", href: "#", icon: "instagram" },
    { name: "Twitter", href: "#", icon: "twitter" },
    { name: "YouTube", href: "#", icon: "youtube" },
  ] satisfies SocialLink[]
} as const;
