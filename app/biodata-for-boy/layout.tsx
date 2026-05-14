import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marriage Biodata for Boy | Download Groom Biodata Format",
  description: "Create a professional marriage biodata for boys. Choose from clean, masculine designs, fill in your details, and download a high-quality PDF for free.",
  keywords: ["biodata format for boy", "marriage biodata for boy", "groom biodata", "boy biodata for marriage", "shaadi biodata for boy", "marriage resume for boy", "matrimonial profile for boy"],
  alternates: {
    canonical: "https://rishtamaker.in/biodata-for-boy",
  },
};

export default function BoyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
