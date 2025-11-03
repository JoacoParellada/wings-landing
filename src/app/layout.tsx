import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "WINGS S.A.S | Servicios Eléctricos e Instalaciones Solares en Mendoza",
  description:
    "Empresa especializada en obras eléctricas, instalaciones de paneles solares y proyectos industriales en Mendoza. Ofrecemos mantenimiento eléctrico, tableros, sub estaciones y energía solar con partner Vittec.",
  keywords: [
    "servicios eléctricos Mendoza",
    "instalación paneles solares Mendoza",
    "obras eléctricas industriales",
    "mantenimiento eléctrico Mendoza",
    "tableros eléctricos",
    "sub estaciones transformadoras",
    "energía solar industrial",
    "Vittec partner",
    "electricidad industrial Mendoza",
    "proyectos eléctricos Mendoza",
    "redes de distribución eléctrica",
    "calidad de energía",
    "bobinado motores eléctricos",
    "generadores eléctricos Mendoza",
    "cableado estructurado",
    "fibra óptica Mendoza",
    "Wings SAS",
    "Wings Electric",
    "instalaciones eléctricas comerciales",
    "electricista industrial Mendoza",
  ],
  authors: [{ name: "WINGS S.A.S" }],
  creator: "WINGS S.A.S",
  publisher: "WINGS S.A.S",
  category: "Servicios Eléctricos",
  other: {
    "contact:email": "ropardo3@gmail.com",
    "contact:phone_number": "+54 261 527 5304",
    "business:contact_data:street_address": "El Parral 2214",
    "business:contact_data:locality": "Mendoza",
    "business:contact_data:region": "Mendoza",
    "business:contact_data:postal_code": "5500",
    "business:contact_data:country_name": "Argentina",
  },
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "WINGS S.A.S",
  image: "/logo-wings.jpg",
  "@id": "https://wingselectric.com.ar",
  url: "https://wingselectric.com.ar",
  telephone: "+54-261-527-5304",
  address: {
    "@type": "PostalAddress",
    streetAddress: "El Parral 2214",
    addressLocality: "Mendoza",
    addressRegion: "Mendoza",
    postalCode: "5500",
    addressCountry: "AR",
  },
  sameAs: ["https://www.instagram.com/wingselectric"],
  description:
    "Empresa especializada en obras eléctricas, instalaciones de paneles solares y proyectos industriales en Mendoza. Soluciones eficientes, proactivas y personalizadas.",
  areaServed: {
    "@type": "City",
    name: "Mendoza",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios Eléctricos",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Instalación de Paneles Solares",
          description:
            "Sistemas de abastecimiento eléctrico mediante paneles solares para industria y agro",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mantenimiento Eléctrico",
          description:
            "Mantenimiento preventivo y correctivo de instalaciones eléctricas",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tableros Eléctricos",
          description:
            "Provisión y montaje de tableros eléctricos industriales",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sub Estaciones Transformadoras",
          description: "Montaje de sub estaciones transformadoras",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <Head>
        <link rel="icon" href="/logo-wings.png" />{" "}
        <meta property="og:image" content="/logo-wings.jpg"></meta>
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
