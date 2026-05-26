import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biodata for Marriage | Free Marriage Biodata Maker Online",
  description: "Create a professional biodata for marriage online. Choose from premium matrimonial profile templates, customize sections, and download your free marriage biodata PDF.",
  keywords: ["biodata for marriage", "bio data for marriage", "marriage biodata online", "free marriage biodata", "matrimonial profile", "marriage biodata maker"],
  alternates: {
    canonical: "https://rishtamaker.in/biodata-for-marriage",
  },
};

export default function BiodataForMarriageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
