import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elegant Marriage Biodata Design | Beautiful Matrimonial Templates",
  description: "Create an elegant marriage biodata design online. Choose from beautiful floral, traditional, and modern layouts. Free PDF downloads for brides and grooms.",
  keywords: ["elegant marriage biodata design", "beautiful biodata for marriage", "elegant matrimonial profile templates", "attractive shaadi biodata"],
  alternates: {
    canonical: "https://rishtamaker.in/elegant-marriage-biodata-design",
  },
};

export default function ElegantMarriageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
