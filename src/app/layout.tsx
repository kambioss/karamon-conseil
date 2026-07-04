import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://karamon-conseil-sarlu.com"),

  title: {
    default: "KARAMON CONSEIL SARLU — Cabinet environnemental au Togo",
    template: "%s | KARAMON CONSEIL SARLU",
  },

  description:
    "KARAMON CONSEIL SARLU est un cabinet environnemental au Togo basé à Lomé, spécialisé dans les études d'impact environnemental et social (EIES), les Plans de Gestion Environnementale et Sociale (PGES), les Plans d'Action de Réinstallation (PAR), les audits environnementaux, la biodiversité, les formations et le développement durable, intervenant dans toute l'Afrique.",

  keywords: [
    "KARAMON CONSEIL",
    "cabinet environnemental au Togo",
    "cabinet environnement Togo",
    "cabinet d'études environnementales Togo",
    "bureau d'études environnementales Togo",
    "bureau d'études environnementales et sociales Lomé",
    "consultant environnemental Togo",
    "consultant environnemental Lomé",
    "cabinet environnement",
    "étude d'impact environnemental",
    "étude d'impact social",
    "EIES",
    "PGES",
    "PAR",
    "plan d'action de réinstallation",
    "audit environnemental",
    "audit environnemental et social",
    "biodiversité",
    "développement durable",
    "gestion environnementale",
    "consultant environnement",
    "cabinet environnemental Afrique",
    "Afrique",
    "Togo",
    "Lomé",
  ],

  authors: [
    {
      name: "KARAMON CONSEIL SARLU",
    },
  ],

  creator: "KARAMON CONSEIL SARLU",

  publisher: "KARAMON CONSEIL SARLU",

  applicationName: "KARAMON CONSEIL",

  category: "Environmental Consulting",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://karamon-conseil-sarlu.com/fr",
    languages: {
      fr: "https://karamon-conseil-sarlu.com/fr",
      en: "https://karamon-conseil-sarlu.com/en",
    },
  },

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://karamon-conseil-sarlu.com/fr",
    siteName: "KARAMON CONSEIL SARLU",
    title: "KARAMON CONSEIL SARLU — Cabinet environnemental au Togo",
    description:
      "Cabinet environnemental au Togo, basé à Lomé, spécialisé dans les études environnementales, sociales, la biodiversité, les audits et le développement durable à travers l'Afrique.",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KARAMON CONSEIL SARLU",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "KARAMON CONSEIL SARLU — Cabinet environnemental au Togo",
    description:
      "Cabinet environnemental au Togo spécialisé dans les études environnementales et sociales à travers l'Afrique.",

    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
}
