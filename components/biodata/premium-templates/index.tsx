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
import RoyalFloralTemplate from "./RoyalFloralTemplate";

export const premiumTemplates: PremiumTemplateDefinition[] = [
  {
    id: "royal-floral-signature",
    name: "Royal Floral Signature",
    description: "An elite, ornate design featuring watercolor florals and classic script typography. Perfect for a first-class impression.",
    price: 49,
    gender: "both",
    isPopular: true,
    thumbnailColor: "#2a050c",
    Component: RoyalFloralTemplate,
  }
];
