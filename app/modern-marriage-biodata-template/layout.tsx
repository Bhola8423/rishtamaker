import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modern Marriage Biodata Template | Sleek Matrimonial Layouts",
  description: "Create a modern marriage biodata online. Choose from professional, sleek, and minimalist design templates. Free high-quality PDF downloads.",
  keywords: ["modern marriage biodata template", "modern matrimonial profile", "sleek biodata for marriage", "minimalist marriage biodata design", "modern shaadi biodata"],
  alternates: {
    canonical: "https://rishtamaker.in/modern-marriage-biodata-template",
  },
};

export default function ModernMarriageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
