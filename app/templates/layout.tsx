import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marriage Biodata Template | Download Format & Designs",
  description: "Browse 12+ premium marriage biodata templates. Choose from professional, modern, and traditional formats for boys and girls. Download high-quality PDF in minutes.",
  keywords: ["marriage biodata template", "marriage biodata maker", "free marriage biodata template", "editable marriage biodata", "online marriage biodata", "marriage biodata design", "simple marriage biodata format", "modern marriage biodata", "professional marriage biodata", "attractive marriage biodata"],
  alternates: {
    canonical: "https://rishtamaker.in/templates",
  },
};

export default function TemplatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
