import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '../components/Header';
import Footer from '../components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://www.asficonstruction.com'),
  title: {
    default: "ASFI Construction | Culvert Rehabilitation & Bridge Waterproofing | Polyurea Coating Specialists",
    template: "%s | ASFI Construction"
  },
  description: "Nationwide polyurea coating specialists. 18+ years expertise in culvert rehabilitation (SIPP), bridge deck waterproofing, and food-grade facility coatings. Woman-owned, WBENC certified. Fast-cure technology, minimal downtime.",
  keywords: "polyurea coatings, culvert rehabilitation, SIPP technology, bridge waterproofing, spray in place pipe, infrastructure repair, food grade coatings, woman owned business, WBENC certified",
  authors: [{ name: "ASFI Construction LLC" }],
  creator: "ASFI Construction LLC",
  publisher: "ASFI Construction LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.asficonstruction.com',
    siteName: 'ASFI Construction LLC',
    title: 'ASFI Construction | Culvert Rehabilitation & Bridge Waterproofing Specialists',
    description: 'Nationwide polyurea coating specialists. 18+ years expertise in culvert rehabilitation, bridge waterproofing, and infrastructure protection. Woman-owned, WBENC certified.',
    images: [
      {
        url: 'https://www.asficonstruction.com/images/culvert-rehabilitation.jpg',
        width: 1200,
        height: 630,
        alt: 'ASFI Construction culvert rehabilitation and infrastructure protection services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ASFI Construction | Culvert Rehabilitation & Bridge Waterproofing',
    description: 'Nationwide polyurea coating specialists. 18+ years in culvert rehabilitation, bridge waterproofing, infrastructure protection.',
    images: ['https://www.asficonstruction.com/images/culvert-rehabilitation.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification code when available
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ASFI Construction LLC",
    "alternateName": "ASFI Construction",
    "url": "https://www.asficonstruction.com",
    "logo": "https://www.asficonstruction.com/images/asfi-logo.png",
    "description": "Nationwide polyurea coating specialists. 18+ years expertise in culvert rehabilitation, bridge waterproofing, and infrastructure protection. Woman-owned, WBENC certified.",
    "foundingDate": "2006",
    "founder": {
      "@type": "Person",
      "name": "Rachel Corbin",
      "jobTitle": "President & Founder",
      "email": "rachel@asficonstruction.com"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-940-391-1230",
      "contactType": "Customer Service",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressRegion": "TX"
    },
    "sameAs": [
      "https://www.wbenc.org"
    ],
    "knowsAbout": [
      "Culvert Rehabilitation",
      "SIPP Technology",
      "Bridge Waterproofing",
      "Polyurea Coatings",
      "Infrastructure Protection",
      "Food Grade Facility Coatings"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Business Certification",
        "name": "WBENC Certified Women's Business Enterprise"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Business Certification",
        "name": "Woman Owned Small Business"
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.asficonstruction.com",
    "name": "ASFI Construction LLC",
    "image": "https://www.asficonstruction.com/images/asfi-logo.png",
    "telephone": "+1-940-391-1230",
    "email": "rachel@asficonstruction.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressRegion": "TX"
    },
    "url": "https://www.asficonstruction.com",
    "priceRange": "$$",
    "serviceArea": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Polyurea Coating Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Culvert Rehabilitation",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "SIPP Technology - Spray In Place Pipe",
                "description": "Cost-effective culvert rehabilitation using advanced SIPP technology"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Bridge Waterproofing",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Bridge Deck Waterproofing",
                "description": "Rapid-cure elastomeric membrane systems for highway and railway bridges"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Food Grade Facility Coatings",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "USDA Approved Food Processing Coatings",
                "description": "Class A fire rated, ultra-low VOC polyurea coating systems"
              }
            }
          ]
        }
      ]
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
