import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Attractive Bio Data for Marriage | Beautiful Matrimonial Designs",
  description: "Create an attractive bio data for marriage online. Choose from a selection of beautiful, clean, and modern template designs. Free high-quality PDF downloads.",
  keywords: ["attractive bio data for marriage", "beautiful bio data for marriage", "attractive matrimonial profile", "attractive marriage biodata design"],
  alternates: {
    canonical: "https://rishtamaker.in/attractive-bio-data-for-marriage",
  },
};

export default function AttractiveBioDataLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
