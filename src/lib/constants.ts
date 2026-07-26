export const BUSINESS = {
  name: "Kids' Gym Preschool & Daycare",
  nameRendered: "Kids’ Gym Preschool & Daycare",
  tagline: "The Only Preschool in Model Town with a Built-In Kids Gym",
  address: "Plot # 132, 3, Block D, Model Town, Lahore 54700, Pakistan",
  coordinates: {
    lat: 31.4908916,
    lng: 74.320072,
  },
  placeId: "ChIJQVyf398FGTkRYjUeAYbeKnc",
  mapsLink: "https://maps.app.goo.gl/Euya2j2mbYaZQZ6Z9",
  phoneDisplay: "0333 3138985",
  phoneE164: "+923333138985",
  whatsAppE164: "923333138985",
  hoursDisplay: "Mon-Fri 8:00am - 5:00pm | Sat & Sun CLOSED",
  operatingSince: 2020,
  googleRating: 4.5,
  googleReviewCount: 35,
  childTeacherRatio: "10:1",
};

export const LAHORE_AREAS = [
  "Model Town",
  "Model Town Extension",
  "Faisal Town",
  "Garden Town",
  "Muslim Town",
  "Gulberg",
  "Johar Town",
  "Township",
  "Kot Lakhpat",
  "Shadman",
  "Allama Iqbal Town",
  "Wapda Town",
  "Cantt / Askari",
  "DHA",
  "Other",
] as const;

export type LahoreArea = typeof LAHORE_AREAS[number];

export const PROGRAMS = [
  {
    id: "infant-daycare",
    title: "Infant Daycare",
    age: "Contact for age details",
    timing: "8:00 AM – 5:00 PM",
    description: "Nurturing infant care focusing on sensory development, safe sleeping routines, and loving individual attention.",
    badge: "Daycare",
    highlights: ["Sensory exploration", "Strict sanitization", "Attentive care routines"],
  },
  {
    id: "playgroup",
    title: "Playgroup",
    age: "2 – 3 yrs",
    timing: "Half-day morning session",
    description: "First step into social play, speech development, movement skills, and structured group activities.",
    badge: "Preschool",
    highlights: ["Speech & vocabulary growth", "Social interaction", "Daily kids gym sessions"],
  },
  {
    id: "nursery",
    title: "Nursery",
    age: "3 – 4 yrs",
    timing: "Half-day morning session",
    description: "Hands-on Montessori-inspired learning, early phonics, creative arts, and gross motor skill refinement.",
    badge: "Preschool",
    highlights: ["Early phonics & counting", "Hands-on activity stations", "Gymnastics & coordination"],
  },
  {
    id: "prep-kg",
    title: "Prep / KG",
    age: "4 – 5 yrs",
    timing: "Half-day morning session",
    description: "Comprehensive kindergarten readiness feeding directly into top Lahore formal school admissions.",
    badge: "Preschool",
    highlights: ["School admission preparation", "Reading & math foundations", "Leadership & confidence"],
  },
  {
    id: "daycare-extended",
    title: "Daycare (Extended)",
    age: "2 – 6 yrs",
    timing: "After-preschool wraparound (till 5:00 PM)",
    description: "Safe, home-like after-school environment with nutritious meals, rest routines, and supervised play.",
    badge: "Wraparound Care",
    highlights: ["Rest & meal routines", "Supervised free play", "Peace of mind for working parents"],
  },
  {
    id: "kids-gym",
    title: "Kids Gym",
    age: "1 – 8 yrs",
    timing: "Integrated & Standalone Classes",
    description: "Our signature physical development program using child-safe gymnastics apparatus to build strength & posture.",
    badge: "Signature Gym",
    highlights: ["Physical gymnastics apparatus", "Posture & core strength", "Boosts confidence & focus"],
  },
] as const;

export const CHILD_AGE_OPTIONS = [
  "Under 1",
  "1–2",
  "2–3",
  "3–4",
  "4–5",
  "5–6",
  "6+",
] as const;

export function buildWhatsAppUrl(contextMessage?: string): string {
  const defaultText = "Assalam-o-Alaikum, I saw your website and want fee details for my child.";
  const text = contextMessage ? encodeURIComponent(contextMessage) : encodeURIComponent(defaultText);
  return `https://wa.me/${BUSINESS.whatsAppE164}?text=${text}`;
}

export function buildWhatsAppProgramUrl(programTitle: string, ageGroup?: string): string {
  const ageSnippet = ageGroup ? ` for my ${ageGroup} year old` : "";
  const text = `Assalam-o-Alaikum, I saw your website and want 2026 fee details for the ${programTitle} program${ageSnippet}.`;
  return buildWhatsAppUrl(text);
}
