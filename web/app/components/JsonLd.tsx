import website from "../config/website";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Florist",
  "@id": `${website.url}/#florist`,
  name: website.title,
  description: website.summary,
  url: website.url,
  image: website.image,
  email: website.email,
  founder: {
    "@type": "Person",
    name: website.founder,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: website.city,
    addressRegion: website.region,
    addressCountry: website.country,
  },
  areaServed: [website.city, website.region],
  knowsLanguage: website.languages,
  makesOffer: website.services.map((name) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name },
  })),
  sameAs: [website.instagram],
};

export default function JsonLd() {
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
