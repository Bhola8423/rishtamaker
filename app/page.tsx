import { Metadata } from "next";
import { Homepage } from "@/components/marketing/homepage";

export const metadata: Metadata = {
  title: "Free Marriage Biodata Template & Maker Online",
  description: "Create your perfect matrimonial profile with our free marriage biodata templates. Best format for boy and girl, instantly download as high-quality PDF.",
  keywords: "marriage biodata template, biodata format for marriage, marriage biodata maker, online biodata maker, hindu marriage biodata",
};

export default function Home() {
  return <Homepage />;
}
