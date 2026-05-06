import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marriage Biodata Formats & Templates | Choose Your Design",
  description: "Browse 12+ premium marriage biodata formats. Choose from professional, modern, and traditional templates for boys and girls. Download high-quality PDF in minutes.",
  keywords: ["biodata templates", "marriage biodata format", "matrimonial biodata design", "biodata download", "biodata sample"],
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
