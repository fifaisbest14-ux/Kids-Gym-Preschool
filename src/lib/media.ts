import { GENERATED_MEDIA } from "./media.generated";

export type Slot =
  | "hero-primary"
  | "hero-secondary-a"
  | "hero-secondary-b"
  | "founder-portrait"
  | "founder-with-children"
  | "program-playgroup"
  | "program-nursery"
  | "program-prep-kg"
  | "program-after-school"
  | "program-daycare"
  | "program-nature"
  | "why-us-environment"
  | "day-in-life-morning"
  | "day-in-life-outdoor"
  | "day-in-life-rest"
  | "safety-entrance"
  | "location-exterior"
  | "og-default"
  | "gallery";

export type MediaCategory =
  | "outdoor"
  | "learning-spaces"
  | "activities"
  | "team"
  | "entrance"
  | "gym";

export interface MediaItem {
  id: string;
  src: string; // "/images/name-without-extension"
  alt: string; // descriptive, factual, no claims, never starts with "Image of"
  caption?: string;
  category: MediaCategory;
  showsChildFace: boolean;
  consent: boolean; // true only for files from consented/
  slots: Slot[];
}

export const MEDIA_REGISTRY: MediaItem[] = [
  // Hand-maintained registry matching source files when provided by client
];

export function getMediaForSlot(slot: Slot): MediaItem | undefined {
  return MEDIA_REGISTRY.find((item) => item.slots.includes(slot));
}

export function getMediaDimensions(src: string) {
  const nameWithoutExt = src.replace(/^\/images\//, "");
  return GENERATED_MEDIA[nameWithoutExt] || null;
}
