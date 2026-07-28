import { BUSINESS } from "@/lib/constants";

export function JsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kidsgym.pk";

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ChildCare",
    "@id": `${siteUrl}/#organization`,
    "name": BUSINESS.name,
    "alternateName": "Kids Gym Preschool",
    "url": siteUrl,
    "logo": `${siteUrl}/icon.png`,
    "image": `${siteUrl}/og`,
    "telephone": BUSINESS.phoneE164,
    "email": BUSINESS.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot # 132, 3, Block D, Model Town",
      "addressLocality": "Lahore",
      "postalCode": "54700",
      "addressCountry": "PK",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": BUSINESS.coordinates.lat,
      "longitude": BUSINESS.coordinates.lng,
    },
    "hasMap": BUSINESS.mapsLink,
    "sameAs": [
      BUSINESS.mapsLink,
      BUSINESS.socials.instagram,
      BUSINESS.socials.facebook,
      BUSINESS.socials.linkedin,
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": BUSINESS.googleRating.toString(),
      "reviewCount": BUSINESS.googleReviewCount.toString(),
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are your operating hours and timings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our center operates Monday through Friday from 8:00 AM to 5:00 PM. Morning preschool sessions run during half-day hours, while Extended Daycare continues through 5:00 PM.",
        },
      },
      {
        "@type": "Question",
        "name": "What does a daily schedule look like for daycare children?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The daycare day includes morning activity & concept learning, outdoor nature play, healthy lunch, 2 hours of quiet sleep/relaxation (2:00-4:00 PM), daily 4:00 PM bird feeding, slides & swings, and supervised homework time until 5:00 PM.",
        },
      },
      {
        "@type": "Question",
        "name": "Do you provide supervised nap and rest time?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, daycare children have a dedicated 2-hour quiet sleep and relaxation block from 2:00 PM to 4:00 PM every afternoon under caregiver supervision.",
        },
      },
      {
        "@type": "Question",
        "name": "Do you offer support for children with Autism (ASD) and ADHD?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer specialized support programs focusing on life skills, cognitive development, self-regulation, sensory processing, and social inclusion in Model Town.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Programs",
        "item": `${siteUrl}/programs`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Daycare",
        "item": `${siteUrl}/daycare`,
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Special Support",
        "item": `${siteUrl}/special-needs-support`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
