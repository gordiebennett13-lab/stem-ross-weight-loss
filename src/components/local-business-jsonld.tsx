export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Stem-Ross Weight Loss Center",
    url: "https://stemrossweightloss.com",
    logo: "https://stemrossweightloss.com/brand/logo.svg",
    description:
      "Physician-supervised weight loss programs in Baltimore, MD since 1994. Semaglutide, Phentermine, and EvolveX body contouring.",
    foundingDate: "1994",
    founder: { "@type": "Person", name: "Dr. Emil Kfoury" },
    priceRange: "$$",
    telephone: "+14107803640",
    address: {
      "@type": "PostalAddress",
      streetAddress: "617 Stemmers Run Rd",
      addressLocality: "Baltimore",
      addressRegion: "MD",
      postalCode: "21221",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 39.2816,
      longitude: -76.4516,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Monday",
        opens: "11:00",
        closes: "14:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday"],
        opens: "08:30",
        closes: "19:00",
      },
    ],
    sameAs: [
      "https://www.google.com/maps/search/Stem-Ross+Weight+Loss+Baltimore",
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
