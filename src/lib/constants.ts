// {{NEEDS_CLIENT_INPUT: CONFIRM PREMISES ADDRESS.
//  Google Business Profile: Plot # 132, Block D, Model Town (31.4908916, 74.320072)
//  kidsgym's own website:   Plot # 134, Block J, Model Town (31.497125, 74.33174)
//  These are ~1km apart. Whichever is current, the other listing must be corrected —
//  a wrong map pin sends parents to the wrong gate, and inconsistent NAP damages
//  local search ranking. BLOCKS: LocalBusiness schema, map embed, directions CTA. }}

// {{NEEDS_CLIENT_INPUT: FOUNDING YEAR. Your website says "Since 2013, Kids' Gym has developed…". You told us 2020. Which year did THIS centre in Model Town open? Needed for the LocalBusiness schema and the "serving families since" badge.}}

// {{NEEDS_CLIENT_INPUT: INSTAGRAM HANDLES. Two handles linked on your site: @kidsgympreschool and @kidsgympreschooldaycare. Confirm which is current.}}

export const BUSINESS = {
  name: "Kids' Gym Preschool & Daycare",
  nameRendered: "Kids’ Gym Preschool & Daycare",
  tagline: "Nature-Based Early Learning & Play-Led Preschool in Model Town, Lahore",
  address: "Plot # 132, 3, Block D, Model Town, Lahore 54700, Pakistan",
  blockJAddress: "Plot # 134, Block J, Model Town, Lahore, Pakistan",
  coordinates: {
    lat: 31.4908916,
    lng: 74.320072,
  },
  placeId: "ChIJQVyf398FGTkRYjUeAYbeKnc",
  mapsLink: "https://maps.app.goo.gl/Euya2j2mbYaZQZ6Z9",
  phoneDisplay: "0333 313 8985",
  phoneE164: "+923333138985",
  whatsAppE164: "923333138985",
  email: "kidsgympk@gmail.com",
  hoursDisplay: "Mon-Fri 8:00am - 5:00pm | Sat & Sun CLOSED",
  googleRating: 4.5,
  googleReviewCount: 35,
  childTeacherRatio: "10:1",
  socials: {
    instagram: "https://instagram.com/kidsgympreschooldaycare",
    instagramAlt: "https://instagram.com/kidsgympreschool",
    facebook: "https://facebook.com/kidsgympreschool",
    linkedin: "https://linkedin.com/company/kids-gym",
  },
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
    id: "playgroup",
    title: "Playgroup",
    age: "2 – 3 yrs",
    timing: "Half-day morning session",
    description: "First step into social play, speech development, movement skills, and structured group activities.",
    badge: "Preschool",
    highlights: ["Speech & vocabulary growth", "Social interaction", "Daily kids gym sessions"],
    slot: "program-playgroup" as const,
  },
  {
    id: "nursery",
    title: "Nursery",
    age: "3 – 4 yrs",
    timing: "Half-day morning session",
    description: "Hands-on guided learning, early phonics, creative arts, and gross motor skill refinement.",
    badge: "Preschool",
    highlights: ["Early phonics & counting", "Hands-on activity stations", "Gymnastics & coordination"],
    slot: "program-nursery" as const,
  },
  {
    id: "prep-kg",
    title: "Prep / KG",
    age: "4 – 5 yrs",
    timing: "Half-day morning session",
    description: "Comprehensive kindergarten readiness feeding directly into top Lahore formal school admissions.",
    badge: "Preschool",
    highlights: ["School admission preparation", "Reading & math foundations", "Leadership & confidence"],
    slot: "program-prep-kg" as const,
  },
  {
    id: "after-school",
    title: "After-School Primary Support",
    age: "5 – 9 yrs",
    timing: "Afternoon session (till 5:00 PM)",
    description: "Supervised homework guidance, reading time, and structured physical activities for primary age children.",
    badge: "After-School",
    highlights: ["Homework guidance", "Reading & focus routine", "Active indoor/outdoor play"],
    slot: "program-after-school" as const,
  },
  {
    id: "daycare-extended",
    title: "Full-Day Daycare",
    age: "2 – 9 yrs",
    timing: "Full Day (8:00 AM – 5:00 PM)",
    description: "Safe, home-like daycare environment with quiet rest routines, healthy lunch time, and daily 4:00 PM bird feeding.",
    badge: "Full Daycare",
    highlights: ["Quiet rest & lunch routines", "4:00 PM bird feeding", "Complete peace of mind"],
    slot: "program-daycare" as const,
  },
  {
    id: "nature-programme",
    title: "Nature & Outdoor Discovery",
    age: "2 – 9 yrs (All Ages)",
    timing: "Integrated Daily Sessions",
    description: "Hands-on interaction with sand, soil, plants, water play, and animal feeding to nurture curiosity.",
    badge: "Nature Focus",
    highlights: ["Outdoor sand & water play", "Planting & soil exploration", "Kindness to animals"],
    slot: "program-nature" as const,
  },
] as const;

export const CHILD_AGE_OPTIONS = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
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
