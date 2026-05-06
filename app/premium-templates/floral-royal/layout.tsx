import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Royal Floral Signature Template Preview | RishtaMaker",
  description: "Preview the Royal Floral Signature matrimonial biodata template. An elite design featuring watercolor florals and classic script typography.",
  keywords: ["floral marriage biodata", "royal matrimonial template", "signature biodata design", "premium marriage profile"],
};

export default function FloralRoyalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
