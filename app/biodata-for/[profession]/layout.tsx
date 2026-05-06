import type { Metadata } from "next";

interface Props {
  params: Promise<{ profession: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { profession } = await params;
  const name = profession.charAt(0).toUpperCase() + profession.slice(1).replace("-", " ");
  
  return {
    title: `Marriage Biodata for ${name} | Professional Matrimonial Formats`,
    description: `Create a professional marriage biodata for ${name}s. Specialized formats that highlight career achievements and family background for matrimonial profiles.`,
    keywords: [`biodata for ${name}`, `${name} matrimonial format`, `${name} marriage profile`, `professional biodata for ${name}`],
  };
}

export default function ProfessionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
