import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marriage Biodata Format for Hindi | शादी के लिए बायोडाटा",
  description: "Create your marriage biodata in Hindi online. Choose from beautiful Hindi matrimonial formats and download high-quality PDF instantly.",
  keywords: ["hindi marriage biodata", "shaadi biodata in hindi", "matrimonial biodata hindi", "hindi biodata creator", "biodata format hindi"],
};

export default function HindiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
