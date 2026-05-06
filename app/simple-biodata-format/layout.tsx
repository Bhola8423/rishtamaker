import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simple Marriage Biodata Format | Minimalist Matrimonial Designs",
  description: "Create a simple and clean marriage biodata. Perfect for those who prefer a minimalist and professional look for their matrimonial profile.",
  keywords: ["simple biodata format", "minimalist marriage biodata", "clean matrimonial profile", "basic biodata templates", "simple shaadi biodata"],
};

export default function SimpleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
