import type { ComponentType } from "react";

import { ClassicMaroonTemplate } from "@/components/biodata/templates/classic-maroon-template";
import { ElegantHeritageTemplate } from "@/components/biodata/templates/elegant-heritage-template";
import { EmeraldRoyalTemplate } from "@/components/biodata/templates/emerald-royal-template";
import { FloralCreamTemplate } from "@/components/biodata/templates/floral-cream-template";
import { FloralPinkTemplate } from "@/components/biodata/templates/floral-pink-template";
import { GoldenVintageTemplate } from "@/components/biodata/templates/golden-vintage-template";
import { MaroonSplitTemplate } from "@/components/biodata/templates/maroon-split-template";
import { MinimalSlateTemplate } from "@/components/biodata/templates/minimal-slate-template";
import { ModernDarkTemplate } from "@/components/biodata/templates/modern-dark-template";
import { OceanWaveTemplate } from "@/components/biodata/templates/ocean-wave-template";
import { RoyalCrimsonTemplate } from "@/components/biodata/templates/royal-crimson-template";
import { TealGoldTemplate } from "@/components/biodata/templates/teal-gold-template";

import type { BiodataTemplateProps } from "@/components/biodata/types";

export type BiodataTemplateDefinition = {
  id: string;
  name: string;
  description: string;
  price?: number;
  isPopular?: boolean;
  gender: "boy" | "girl" | "both";
  tags?: string[];
  thumbnailColor?: string;
  Component: ComponentType<BiodataTemplateProps>;
};

export const biodataTemplates: BiodataTemplateDefinition[] = [
  {
    id: "classic-maroon",
    name: "Royal Maroon",
    description: "Deep maroon biodata with gold styling and traditional section headers.",
    gender: "boy",
    tags: ["Traditional", "Elegant"],
    thumbnailColor: "bg-rose-50",
    Component: ClassicMaroonTemplate,
  },
  {
    id: "floral-cream",
    name: "Golden Floral",
    description: "Cream biodata frame with floral-style golden corner decoration.",
    gender: "girl",
    tags: ["Elegant", "Floral"],
    isPopular: true,
    thumbnailColor: "bg-amber-50",
    Component: FloralCreamTemplate,
  },
  {
    id: "minimal-slate",
    name: "Sacred Classic",
    description: "White traditional layout with top mantra styling and side portrait placement.",
    gender: "boy",
    tags: ["Simple", "Classic"],
    thumbnailColor: "bg-slate-50",
    Component: MinimalSlateTemplate,
  },
  {
    id: "elegant-heritage",
    name: "Elegant Heritage",
    description: "A traditional heritage layout with sophisticated brown and cream tones.",
    gender: "boy",
    tags: ["Traditional", "Heritage"],
    thumbnailColor: "bg-orange-50",
    Component: ElegantHeritageTemplate,
  },
  {
    id: "emerald-royal",
    name: "Emerald Royal",
    description: "Luxury green and gold theme for a rich, royal matrimonial profile.",
    gender: "boy",
    tags: ["Premium", "Royal"],
    thumbnailColor: "bg-emerald-50",
    Component: EmeraldRoyalTemplate,
  },
  {
    id: "floral-pink",
    name: "Blossom Pink",
    description: "Delicate floral design with soft pink accents for a graceful look.",
    gender: "girl",
    tags: ["Floral", "Soft"],
    thumbnailColor: "bg-pink-50",
    Component: FloralPinkTemplate,
  },
  {
    id: "golden-vintage",
    name: "Golden Vintage",
    description: "Timeless vintage design with intricate golden patterns and frames.",
    gender: "both",
    tags: ["Vintage", "Gold"],
    isPopular: true,
    thumbnailColor: "bg-yellow-50",
    Component: GoldenVintageTemplate,
  },
  {
    id: "maroon-split",
    name: "Maroon Split",
    description: "Modern split layout with a bold maroon sidebar and clean typography.",
    gender: "boy",
    tags: ["Modern", "Maroon"],
    thumbnailColor: "bg-red-50",
    Component: MaroonSplitTemplate,
  },
  {
    id: "modern-dark",
    name: "Midnight Modern",
    description: "Sleek and professional dark-themed layout for a modern touch.",
    gender: "boy",
    tags: ["Modern", "Dark"],
    thumbnailColor: "bg-zinc-100",
    Component: ModernDarkTemplate,
  },
  {
    id: "ocean-wave",
    name: "Ocean Minimal",
    description: "Modern minimalist layout with ocean blue tones and rounded playful borders.",
    gender: "both",
    tags: ["Modern", "Simple"],
    thumbnailColor: "bg-blue-50",
    Component: OceanWaveTemplate,
  },
  {
    id: "royal-crimson",
    name: "Royal Crimson",
    description: "Bold crimson theme with high-contrast elements and royal styling.",
    gender: "boy",
    tags: ["Premium", "Bold"],
    thumbnailColor: "bg-red-50",
    Component: RoyalCrimsonTemplate,
  },
  {
    id: "teal-gold",
    name: "Teal Gold",
    description: "Elegant teal and gold combination for a balanced professional look.",
    gender: "girl",
    tags: ["Elegant", "Unique"],
    thumbnailColor: "bg-teal-50",
    Component: TealGoldTemplate,
  },
];
