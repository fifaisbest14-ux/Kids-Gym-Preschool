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
  | "special-services-1"
  | "special-services-2"
  | "og-default"
  | "gallery";

export type MediaCategory =
  | "outdoor"
  | "learning-spaces"
  | "activities"
  | "team"
  | "entrance"
  | "gym"
  | "special-services";

export interface MediaItem {
  id: string;
  src: string; // "/images/name-without-extension"
  alt: string; // descriptive, factual, no claims, never starts with "Image of"
  caption?: string;
  category: MediaCategory;
  showsChildFace: boolean;
  consent: boolean | "owner-published"; // true or "owner-published" for published site photos
  slots: Slot[];
}

export const MEDIA_REGISTRY: MediaItem[] = [
  {
    id: "source-03",
    src: "/images/source-03",
    alt: "Children engaged in outdoor sand play under tree shade",
    caption: "Outdoor natural sand area with tree shade",
    category: "outdoor",
    showsChildFace: true,
    consent: "owner-published",
    slots: ["hero-primary", "program-nature", "gallery"],
  },
  {
    id: "source-05",
    src: "/images/source-05",
    alt: "Children exploring outdoor natural garden area",
    caption: "Natural outdoor garden exploration area",
    category: "outdoor",
    showsChildFace: true,
    consent: "owner-published",
    slots: ["hero-secondary-a", "day-in-life-outdoor", "gallery"],
  },
  {
    id: "source-06",
    src: "/images/source-06",
    alt: "Children working together at creative learning table",
    caption: "Indoor creative learning and activity table",
    category: "activities",
    showsChildFace: true,
    consent: "owner-published",
    slots: ["hero-secondary-b", "program-nursery", "gallery"],
  },
  {
    id: "source-09",
    src: "/images/source-09",
    alt: "Indoor classroom area with children's artwork displayed on walls",
    caption: "Classroom learning area with displayed children's artwork",
    category: "learning-spaces",
    showsChildFace: false,
    consent: "owner-published",
    slots: ["program-playgroup", "why-us-environment", "gallery"],
  },
  {
    id: "source-10",
    src: "/images/source-10",
    alt: "Outdoor play area and natural environment",
    caption: "Outdoor natural play area and discovery space",
    category: "outdoor",
    showsChildFace: true,
    consent: "owner-published",
    slots: ["safety-entrance", "location-exterior", "gallery"],
  },
  {
    id: "source-12",
    src: "/images/source-12",
    alt: "Founder Batool Ishaque guiding children in learning environment",
    caption: "Founder Batool Ishaque with students in learning space",
    category: "team",
    showsChildFace: true,
    consent: "owner-published",
    slots: ["founder-portrait", "founder-with-children", "gallery"],
  },
  {
    id: "source-13",
    src: "/images/source-13",
    alt: "Children engaged in guided classroom activities",
    caption: "Guided learning activity session",
    category: "activities",
    showsChildFace: true,
    consent: "owner-published",
    slots: ["program-prep-kg", "day-in-life-morning", "gallery"],
  },
  {
    id: "source-14",
    src: "/images/source-14",
    alt: "Children engaging in outdoor play area",
    caption: "Outdoor group play area",
    category: "outdoor",
    showsChildFace: true,
    consent: "owner-published",
    slots: ["program-after-school", "gallery"],
  },
  {
    id: "source-15",
    src: "/images/source-15",
    alt: "Child engaged in individual sensory and cognitive development activity",
    caption: "1-on-1 sensory & skill development session",
    category: "special-services",
    showsChildFace: true,
    consent: "owner-published",
    slots: ["special-services-1", "gallery"],
  },
  {
    id: "source-16",
    src: "/images/source-16",
    alt: "Sensory learning tools and quiet focus area for developmental support",
    caption: "Sensory processing and learning support station",
    category: "special-services",
    showsChildFace: true,
    consent: "owner-published",
    slots: ["special-services-2", "gallery"],
  },
  {
    id: "source-17",
    src: "/images/source-17",
    alt: "Daycare children exploring outdoor nature environment",
    caption: "Daycare outdoor play and nature exploration",
    category: "outdoor",
    showsChildFace: true,
    consent: "owner-published",
    slots: ["program-daycare", "gallery"],
  },
  {
    id: "source-19",
    src: "/images/source-19",
    alt: "Quiet daycare relaxation and afternoon rest space",
    caption: "Daycare rest and relaxation room",
    category: "learning-spaces",
    showsChildFace: false,
    consent: "owner-published",
    slots: ["day-in-life-rest", "gallery"],
  },
  {
    id: "source-20",
    src: "/images/source-20",
    alt: "Children participating in 4:00 PM outdoor bird feeding activity",
    caption: "Daily 4:00 PM bird feeding and nature interaction",
    category: "outdoor",
    showsChildFace: true,
    consent: "owner-published",
    slots: ["gallery"],
  },
  {
    id: "source-21",
    src: "/images/source-21",
    alt: "Children enjoying outdoor slides and swing play",
    caption: "Outdoor slides and swings area",
    category: "outdoor",
    showsChildFace: true,
    consent: "owner-published",
    slots: ["gallery"],
  },
];

export function getMediaForSlot(slot: Slot): MediaItem | undefined {
  return MEDIA_REGISTRY.find((item) => item.slots.includes(slot));
}

export function getMediaDimensions(src: string) {
  const nameWithoutExt = src.replace(/^\/images\//, "");
  return GENERATED_MEDIA[nameWithoutExt] || null;
}
