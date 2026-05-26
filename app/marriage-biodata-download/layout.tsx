import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marriage Biodata Download | Free Editable Matrimonial Profiles",
  description: "Create and download your marriage biodata instantly. Choose from professional, printable templates, fill in your details, and download a high-quality PDF for free.",
  keywords: ["marriage biodata download", "biodata download", "download marriage biodata format", "free marriage biodata pdf", "matrimonial profile download"],
  alternates: {
    canonical: "https://rishtamaker.in/marriage-biodata-download",
  },
};

export default function MarriageBiodataDownloadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
