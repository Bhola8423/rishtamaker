import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marriage Biodata Template | Free Matrimonial Formats & Designs",
  description: "Browse and download premium marriage biodata templates. Choose from elegant traditional styles or clean modern layout designs. Instantly editable PDF formats.",
  keywords: ["marriage biodata template", "free marriage biodata template", "marriage biodata design", "editable marriage biodata", "matrimonial profile template"],
  alternates: {
    canonical: "https://rishtamaker.in/marriage-biodata-template",
  },
};

export default function MarriageBiodataTemplateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
