import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shaadi Biodata Maker | Matrimonial Biodata Format & Template",
  description: "Create a beautiful shaadi biodata or matrimonial profile online. Choose from professional wedding biodata formats, fill in your details, and download a free PDF instantly.",
  keywords: ["shaadi biodata", "matrimonial biodata", "wedding biodata format", "marriage resume format", "biodata format for marriage"],
  alternates: {
    canonical: "https://rishtamaker.in/shaadi-biodata",
  },
};

export default function ShaadiBiodataLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
