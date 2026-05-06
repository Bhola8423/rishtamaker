import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marriage Biodata for Boy | Professional Groom Formats 2026",
  description: "Create a professional marriage biodata for boys. High-impact matrimonial profiles for grooms with career-focused templates and AI-powered bios.",
  keywords: ["biodata for boy", "marriage biodata format for boy", "groom biodata template", "professional matrimonial profile", "marriage cv for boy"],
  alternates: {
    canonical: "https://rishtamaker.in/biodata-for-boy",
  },
  openGraph: {
    title: "Marriage Biodata for Boy | Premium Groom Formats",
    description: "Design a high-impact matrimonial profile that highlights your career, education, and values.",
    images: ["/images/biodata-boy-hero.png"],
  },
};

export default function BoyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
