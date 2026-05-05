import type { ComponentType } from "react";

import { ClassicMaroonTemplate } from "@/components/biodata/templates/classic-maroon-template";
import { FloralCreamTemplate } from "@/components/biodata/templates/floral-cream-template";
import { MinimalSlateTemplate } from "@/components/biodata/templates/minimal-slate-template";
import { OceanWaveTemplate } from "@/components/biodata/templates/ocean-wave-template";
import { EmeraldRoyalTemplate } from "@/components/biodata/templates/emerald-royal-template";
import { ModernDarkTemplate } from "@/components/biodata/templates/modern-dark-template";
import { GoldenVintageTemplate } from "@/components/biodata/templates/golden-vintage-template";
import { RoyalCrimsonTemplate } from "@/components/biodata/templates/royal-crimson-template";
import { ElegantHeritageTemplate } from "@/components/biodata/templates/elegant-heritage-template";
import { TealGoldTemplate } from "@/components/biodata/templates/teal-gold-template";
import { MaroonSplitTemplate } from "@/components/biodata/templates/maroon-split-template";
import { FloralPinkTemplate } from "@/components/biodata/templates/floral-pink-template";

import type { BiodataTemplateProps } from "@/components/biodata/types";

export type BiodataTemplateDefinition = {
  id: string;
  name: string;
  description: string;
  price?: number;
  isPopular?: boolean;
  tags?: string[];
  thumbnailColor?: string;
  Component: ComponentType<BiodataTemplateProps>;
};

export const biodataTemplates: BiodataTemplateDefinition[] = [
  {
    id: "classic-maroon",
    name: "Royal Maroon",
    description: "Deep maroon biodata with gold styling and traditional section headers.",
    tags: ["Traditional", "Elegant"],
    thumbnailColor: "bg-rose-50",
    Component: ClassicMaroonTemplate,
  },
  {
    id: "floral-cream",
    name: "Golden Floral",
    description: "Cream biodata frame with floral-style golden corner decoration.",
    tags: ["Elegant", "Floral"],
    isPopular: true,
    thumbnailColor: "bg-amber-50",
    Component: FloralCreamTemplate,
  },
  {
    id: "minimal-slate",
    name: "Sacred Classic",
    description: "White traditional layout with top mantra styling and side portrait placement.",
    tags: ["Simple", "Classic"],
    thumbnailColor: "bg-slate-50",
    Component: MinimalSlateTemplate,
  },
  {
    id: "ocean-wave",
    name: "Ocean Minimal",
    description: "Modern minimalist layout with ocean blue tones and rounded playful borders.",
    tags: ["Modern", "Simple"],
    thumbnailColor: "bg-blue-50",
    Component: OceanWaveTemplate,
  },
  {
    id: "emerald-royal",
    name: "Emerald Prestige",
    description: "A rich prestige emerald biodata for noble and elegant presentations.",
    price: 49,
    tags: ["Premium", "Royal"],
    thumbnailColor: "bg-emerald-50",
    Component: EmeraldRoyalTemplate,
  },
  {
    id: "modern-dark",
    name: "Midnight Modern",
    description: "Sleek, dark, and highly modern layout for urban matching.",
    price: 49,
    tags: ["Modern", "Dark"],
    thumbnailColor: "bg-slate-900 text-white",
    Component: ModernDarkTemplate,
  },
  {
    id: "golden-vintage",
    name: "Golden Vintage",
    description: "Traditional Hindu biodata with a golden border and intricate corners.",
    price: 29,
    tags: ["Vintage", "Traditional"],
    thumbnailColor: "bg-yellow-50",
    Component: GoldenVintageTemplate,
  },
  {
    id: "royal-crimson",
    name: "Royal Crimson",
    description: "A rich maroon template with golden borders and yellow highlights.",
    price: 39,
    tags: ["Premium", "Rich"],
    thumbnailColor: "bg-red-50",
    Component: RoyalCrimsonTemplate,
  },
  {
    id: "elegant-heritage",
    name: "Elegant Heritage",
    description: "A beautiful elegant template based on your secondary background design.",
    price: 39,
    tags: ["Elegant", "Heritage"],
    thumbnailColor: "bg-orange-50",
    Component: ElegantHeritageTemplate,
  },
  {
    id: "teal-gold-royal",
    name: "Teal Gold Royal",
    description: "A gorgeous dark teal design featuring golden accents and rounded pill headers.",
    price: 49,
    tags: ["Royal", "Modern"],
    thumbnailColor: "bg-teal-50",
    Component: TealGoldTemplate,
  },
  {
    id: "maroon-split",
    name: "Maroon Split",
    description: "A stunning two-column design with a maroon arch and cursive typography.",
    price: 49,
    tags: ["Modern", "Two-Column"],
    thumbnailColor: "bg-rose-50",
    Component: MaroonSplitTemplate,
  },
  {
    id: "floral-pink",
    name: "Floral Pink",
    description: "A beautiful pink watercolor floral design featuring a classic two-column layout.",
    price: 49,
    tags: ["Floral", "Soft"],
    thumbnailColor: "bg-pink-50",
    Component: FloralPinkTemplate,
  },
];
