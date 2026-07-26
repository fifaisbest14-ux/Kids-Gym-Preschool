import { BUSINESS } from "@/lib/constants";

export function JsonLd() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ChildCare",
    "@id": "https://kidsgym.pk/#organization",
    "name": BUSINESS.name,
    "alternateName": "Kids Gym Preschool",
    "url": "https://kidsgym.pk",
    "logo": "https://kidsgym.pk/icon.png",
    "image": "https://kidsgym.pk/og.png",
    "telephone": BUSINESS.phoneE164,
    "priceRange": "PKR",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot # 132, 3, Block D, Model Town",
      "addressLocality": "Lahore",
      "postalCode": "54700",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": BUSINESS.coordinates.lat,
      "longitude": BUSINESS.coordinates.lng
    },
    "hasMap": BUSINESS.mapsLink,
    "sameAs": [
      BUSINESS.mapsLink,
      "https://www.instagram.com/kidsgympreschooldaycare",
      "https://www.facebook.com/share/1C7aD8KVfB/"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": BUSINESS.googleRating.toString(),
      "reviewCount": BUSINESS.googleReviewCount.toString()
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
