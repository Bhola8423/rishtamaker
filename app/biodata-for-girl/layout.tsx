import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marriage Biodata for Girl | Beautiful Bride Formats 2026",
  description: "Create a beautiful marriage biodata for girls. Choose from elegant and modern bride biodata templates. Download PDF in 2 minutes.",
  keywords: ["biodata for girl", "marriage biodata format for girl", "bride biodata template", "elegant matrimonial profile", "marriage cv for girl"],
  alternates: {
    canonical: "https://rishtamaker.in/biodata-for-girl",
  },
  openGraph: {
    title: "Marriage Biodata for Girl | Elegant Bride Formats",
    description: "Create a stunning matrimonial profile that highlights your personality and family background.",
    images: ["/images/biodata-girl-hero.png"],
  },
};

export default function GirlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
