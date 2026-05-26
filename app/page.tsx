import { Metadata } from "next";
import { Homepage } from "@/components/marketing/homepage";

export const metadata: Metadata = {
  title: "Marriage Biodata Maker | Free Marriage Biodata Format for Boy & Girl",
  description: "Create your perfect matrimonial profile with our free marriage biodata maker. Best marriage biodata format for boys and girls. Download shaadi biodata, wedding resume, and marriage profile instantly as PDF.",
  keywords: "marriage biodata, marriage biodata format, biodata for marriage, shaadi biodata, matrimonial biodata, wedding biodata, marriage profile format, marriage resume, bio data for marriage, marriage CV format, marriage biodata template, marriage biodata maker, free marriage biodata template, editable marriage biodata, online marriage biodata, marriage biodata design, simple marriage biodata format, modern marriage biodata, professional marriage biodata, attractive marriage biodata",
  alternates: {
    canonical: "https://rishtamaker.in",
  },
};

export default function Home() {
  return <Homepage />;
}
