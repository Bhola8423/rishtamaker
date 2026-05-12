import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marriage Biodata PDF | Download Editable Biodata PDF Online",
  description: "Create and download your marriage biodata PDF instantly. Choose from professional templates, fill in your details, and get a high-quality PDF for free.",
  keywords: ["marriage biodata pdf", "biodata pdf", "editable biodata pdf", "biodata download", "shaadi biodata pdf"],
  alternates: {
    canonical: "https://rishtamaker.in/marriage-biodata-pdf",
  },
};

export default function PdfLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
