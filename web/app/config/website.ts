const website = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: "Marcotte", // Navigation and Site Title
  titleAlt: "Marcotte", // Title for JSONLD
  description: "Aïdan Marcotte —  Floral Design — Florist in Paris",
  headline: "Marcotte - Agence de communication digitale", // Headline for schema.org JSONLD
  url: "https://mathieu-breliere-snowy.vercel.app", // Domain of your site. No trailing slash!
  image:
    "https://mathieu-breliere-snowy.vercel.app/media/flowers-optim/Marcotte_Flowers_1-optim.webp", // Used for SEO
  ogLanguage: "fr_FR", // Facebook Language

  // JSONLD / Manifest
  faviconLetter: "B",
  favicon: "src/images/logo.png", // Used for manifest favicon generation
  shortName: "aeai", // shortname for manifest. MUST be shorter than 12 characters
  author: "aeai", // Author for schemaORGJSONLD
  themeColor: "#000000",
  backgroundColor: "#000000",

  // Business info, shared by llms.txt and the Florist JSON-LD
  founder: "Aïdan Marcotte",
  summary:
    "Aïdan Marcotte is a floral designer based in Paris, creating arrangements for weddings, events, brands and private clients.",
  about:
    "Marcotte works on bespoke floral design: event and wedding installations, seasonal bouquets, set and editorial styling, and regular arrangements for shops, restaurants and offices.",
  neighbourhood: "[arrondissement / neighbourhood]", // TODO: studio location in Paris
  city: "Paris",
  region: "Île-de-France",
  country: "FR",
  areaServed: "Paris and Île-de-France",
  services: [
    "weddings",
    "events",
    "brand & editorial",
    "subscriptions",
    "bouquets",
  ],
  languages: ["French", "English"],
  email: "hello@marcotte.fr",

  instagram: "https://instagram.com/marcotte",
  twitter: "", // Twitter Username
  facebook: "", // Facebook Site Name
  googleAnalyticsID: "",

  skipNavId: "reach-skip-nav", // ID for the "Skip to content" a11y feature
};

export default website;
