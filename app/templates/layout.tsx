import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marriage Biodata Templates | Modern & Traditional Formats",
  description: "Browse our full collection of marriage biodata templates. Choose from professional, modern, and traditional formats to create your matrimonial profile instantly.",
  keywords: ["marriage biodata templates", "biodata format for boy", "biodata format for girl", "modern biodata designs", "traditional marriage formats"],
};

export default function TemplatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
