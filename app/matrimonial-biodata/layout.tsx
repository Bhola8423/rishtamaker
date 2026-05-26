import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Matrimonial Biodata Maker | Professional Marriage Biodata Template",
  description: "Create a beautiful matrimonial biodata online for marriage. Select from modern templates, customize sections, and download your free marriage profile PDF instantly.",
  keywords: ["matrimonial biodata", "biodata for marriage", "marriage biodata maker", "wedding biodata format"],
  alternates: {
    canonical: "https://rishtamaker.in/matrimonial-biodata",
  },
};

export default function MatrimonialBiodataLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
