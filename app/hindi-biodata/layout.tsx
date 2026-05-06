import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hindi Marriage Biodata Maker | हिंदी में विवाह बायोडाटा बनाएं",
  description: "हिंदी में विवाह बायोडाटा बनाने के लिए सबसे अच्छा ऑनलाइन टूल। अपनी पसंद का फॉर्मेट चुनें और तुरंत डाउनलोड करें।",
  keywords: ["hindi biodata", "marriage biodata in hindi", "हिंदी बायोडाटा", "विवाह बायोडाटा"],
  alternates: {
    canonical: "https://rishtamaker.in/hindi-biodata",
  },
};

export default function HindiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
