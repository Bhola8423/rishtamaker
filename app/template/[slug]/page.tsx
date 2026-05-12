import { Metadata } from "next";
import { notFound } from "next/navigation";
import { biodataTemplates } from "@/components/biodata/templates";
import { SeoLandingPage } from "@/components/marketing/seo-landing-page";
import { templateLongContent } from "@/lib/template-content";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return biodataTemplates.map((template) => ({
    slug: template.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const template = biodataTemplates.find((t) => t.id === slug);

  if (!template) {
    return {
      title: "Template Not Found | RishtaMaker",
    };
  }

  const title = `${template.name} Marriage Biodata Template | Download Free PDF`;
  const description = `Create a beautiful biodata with the ${template.name} template. ${template.description} 100% free to edit and download.`;

  return {
    title,
    description,
    keywords: [`${template.name} biodata`, "marriage biodata format", "biodata template"],
    alternates: {
      canonical: `https://rishtamaker.in/template/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://rishtamaker.in/template/${slug}`,
      siteName: "RishtaMaker",
      images: [
        {
          url: "https://rishtamaker.in/images/templates-hero-3d.png", // Fallback image
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://rishtamaker.in/images/templates-hero-3d.png"],
    },
  };
}

export default async function TemplatePage({ params }: Props) {
  const { slug } = await params;
  const template = biodataTemplates.find((t) => t.id === slug);

  if (!template) {
    notFound();
  }

  const heroData = {
    badge: "Premium Template",
    title: (
      <>
        {template.name} <br />
        <span className="text-[#b11e24] italic">Biodata Format</span>
      </>
    ),
    subtitle: template.description,
    ctaText: "Use This Template",
    ctaHref: `/?template=${template.id}#builder`,
    secondaryCtaText: "View All Templates",
    secondaryCtaHref: "/templates",
    imageSrc: "/images/templates-hero-3d.png", // Fallback image
    imageAlt: `${template.name} Template Preview`,
  };

  const longContent = templateLongContent[slug];

  const seoContentData = longContent || {
    title: `About the ${template.name} Biodata Template`,
    blocks: [
      {
        title: "Why Choose This Template",
        text: [
          `The ${template.name} template is designed to make a strong impression. With its unique layout and color scheme, it helps your details stand out.`,
          "It features clearly defined sections for personal details, education, family background, and partner expectations, ensuring a professional presentation.",
        ],
      },
      {
        title: "Best Suited For",
        text: [
          template.gender === "boy"
            ? "This template is specifically tailored for boys, with a focus on professional and clean aesthetics."
            : template.gender === "girl"
            ? "This template is specifically tailored for girls, with elegant and graceful design elements."
            : "This template is versatile and suitable for both boys and girls, offering a balanced and professional look.",
        ],
      },
      {
        title: "How to Use This Template",
        text: [
          "Click the 'Use This Template' button to open it in our builder. Fill in your details in the form, and you will see a live preview. Once satisfied, download the high-quality PDF instantly.",
        ],
      },
    ],
    benefitsTitle: "Key Features",
    benefits: [
      "Instant live preview as you type",
      "High-quality PDF download",
      "No registration or login required",
      "Mobile-friendly editor",
      ...template.tags ? template.tags : [],
    ],
  };

  const faqs = [
    {
      q: `Is the ${template.name} template free?`,
      a: "Yes, our standard templates are free to use and download. Premium templates may have a small fee.",
    },
    {
      q: "Can I change the colors of this template?",
      a: "The colors are fixed for each template to maintain design integrity, but you can choose from a variety of other templates if you prefer a different color scheme.",
    },
    {
      q: "How long does it take to create a biodata?",
      a: "It takes less than 2 minutes! Just fill in the form and your biodata is ready.",
    },
  ];

  return (
    <SeoLandingPage
      hero={heroData}
      seoContent={seoContentData}
      faqs={faqs}
      gender={template.gender === "both" ? undefined : template.gender}
      breadcrumbItems={[
        { name: "Home", url: "https://rishtamaker.in" },
        { name: "Templates", url: "https://rishtamaker.in/templates" },
        { name: template.name, url: `https://rishtamaker.in/template/${template.id}` },
      ]}
    />
  );
}
