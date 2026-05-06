import type { ComponentType } from "react";
import type { BiodataTemplateProps } from "@/components/biodata/types";

export type PremiumTemplateDefinition = {
  id: string;
  name: string;
  description: string;
  price: number;
  isPopular?: boolean;
  gender: "boy" | "girl" | "both";
  tags?: string[];
  thumbnailColor?: string;
  Component: ComponentType<BiodataTemplateProps>;
};

// Removed templates per user request. Will add them one by one as suggested.
export const premiumTemplates: PremiumTemplateDefinition[] = [];
