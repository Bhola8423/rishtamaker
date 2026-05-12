import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marriage Biodata for Girl | Download Bride Biodata Format",
  description: "Create a beautiful marriage biodata for girls. Choose from elegant designs, fill in your details, and download a high-quality PDF for free.",
  keywords: ["biodata format for girl", "marriage biodata for girl", "bride biodata format", "girl biodata for marriage", "shaadi biodata for girl"],
  alternates: {
    canonical: "https://rishtamaker.in/biodata-for-girl",
  },
};

export default function GirlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
