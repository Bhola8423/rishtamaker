import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://rishtamaker.in'),
  title: "RishtaMaker | Create Beautiful Marriage Biodata Online",
  description: "Instant marriage profile builder. Create professional matrimonial biodata in 2 minutes. Choose from premium templates, no login required.",
  icons: {
    icon: '/images/short_logo.png',
    shortcut: '/images/short_logo.png',
    apple: '/images/short_logo.png',
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
