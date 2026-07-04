export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "KARAMON CONSEIL SARLU",
  alternateName: "KARAMON CONSEIL",
  description:
    "Cabinet environnemental au Togo, basé à Lomé, spécialisé dans les études d'impact environnemental et social (EIES), les Plans de Gestion Environnementale et Sociale (PGES), les Plans d'Action de Réinstallation (PAR), les audits environnementaux et le développement durable.",
  url: "https://karamon-conseil-sarlu.com",
  logo: "https://karamon-conseil-sarlu.com/images/logo.png",
  image: "https://karamon-conseil-sarlu.com/images/og-image.jpg",
  telephone: "+228-91-52-26-79",
  email: "infokaramonconseilsarlu@gmail.com",
  foundingDate: "2018",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Route de Ségbé",
    addressLocality: "Lomé",
    addressCountry: "TG",
  },
  areaServed: {
    "@type": "Continent",
    name: "Africa",
  },
  priceRange: "$$",
  knowsAbout: [
    "Étude d'Impact Environnemental et Social",
    "Plan de Gestion Environnementale et Sociale",
    "Plan d'Action de Réinstallation",
    "Audit environnemental et social",
    "Biodiversité",
    "Développement durable",
  ],
  sameAs: [] as string[],
}
