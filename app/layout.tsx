import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://rishtamaker.in'),
  title: "RishtaMaker | Free Marriage Biodata Template & Maker Online",
  description: "Create your marriage biodata with our free templates. Best marriage biodata format for boy and girl. Create shaadi biodata, matrimonial profile, and wedding resume in 2 minutes. Free PDF download.",
  icons: {
    icon: '/images/short_logo.png',
    shortcut: '/images/short_logo.png',
    apple: '/images/short_logo.png',
  },
  openGraph: {
    title: "RishtaMaker | Free Marriage Biodata Template & Maker Online",
    description: "Create your marriage biodata with our free templates. Best marriage biodata format for boy and girl. Create shaadi biodata, matrimonial profile, and wedding resume in 2 minutes. Free PDF download.",
    url: "https://rishtamaker.in",
    siteName: "RishtaMaker",
    images: [
      {
        url: "/images/templates-hero-3d.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RishtaMaker | Free Marriage Biodata Template & Maker Online",
    description: "Create your marriage biodata with our free templates. Best marriage biodata format for boy and girl. Create shaadi biodata, matrimonial profile, and wedding resume in 2 minutes. Free PDF download.",
    images: ["/images/templates-hero-3d.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-body">{children}</body>
    </html>
  );
}
