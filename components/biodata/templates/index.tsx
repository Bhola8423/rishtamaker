import type { ComponentType } from "react";

import { ClassicMaroonTemplate } from "@/components/biodata/templates/classic-maroon-template";
import { FloralCreamTemplate } from "@/components/biodata/templates/floral-cream-template";
import { MinimalSlateTemplate } from "@/components/biodata/templates/minimal-slate-template";
import { OceanWaveTemplate } from "@/components/biodata/templates/ocean-wave-template";

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
];
