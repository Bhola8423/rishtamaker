import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marriage Biodata Format for Boy | Matrimonial CV for Grooms",
  description: "Download professional marriage biodata formats for boys. Create a stunning matrimonial profile with our easy-to-use builder and premium designs.",
  keywords: ["biodata for boy", "marriage biodata for male", "matrimonial profile for groom", "groom biodata format", "shaadi biodata for boy"],
};

export default function BoyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
