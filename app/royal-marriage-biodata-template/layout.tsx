import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Royal Marriage Biodata Template | Premium Matrimonial Designs",
  description: "Create a royal marriage biodata template online. Choose from premium, rich, and traditional golden or maroon layouts. Free high-quality PDF downloads.",
  keywords: ["royal marriage biodata template", "royal matrimonial profile", "premium biodata for marriage", "golden marriage biodata template"],
  alternates: {
    canonical: "https://rishtamaker.in/royal-marriage-biodata-template",
  },
};

export default function RoyalMarriageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
