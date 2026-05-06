import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Marriage Biodata Collection | Elite & Royal Formats",
  description: "Explore our exclusive collection of premium marriage biodata templates. Handcrafted royal designs with gold-foil aesthetics for a high-end matrimonial profile.",
  keywords: ["premium marriage biodata", "royal biodata format", "luxury matrimonial profile", "elite biodata templates", "gold foil biodata"],
  openGraph: {
    title: "Premium Marriage Biodata Collection | RishtaMaker",
    description: "Handcrafted elite biodata formats for a stunning first impression. Download premium matrimonial templates instantly.",
    images: ["/images/premium/hero-1.png"],
  },
};

export default function PremiumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
