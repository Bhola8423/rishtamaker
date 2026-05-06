import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marriage Biodata Format for Girl | Matrimonial CV for Brides",
  description: "Create and download elegant marriage biodata formats for girls. Choose from dozens of modern and traditional designs for a perfect matrimonial impression.",
  keywords: ["biodata for girl", "marriage biodata for female", "matrimonial profile for bride", "bride biodata format", "shaadi biodata for girl"],
};

export default function GirlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
