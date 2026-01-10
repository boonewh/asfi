export const metadata = {
  title: 'Food Grade Facility Coatings | USDA Approved Polyurea Systems',
  description: 'USDA-approved food grade polyurea coating systems for food processing, pharmaceutical, and cold storage facilities. Class A fire rated, ultra-low VOC, chemical resistant. Fast application, easy cleaning, pristine finish.',
  keywords: 'food grade coatings, USDA approved coatings, food processing facility coatings, pharmaceutical coatings, cold storage coatings, polyurea food plant, sanitary coatings, food safety coatings, cleanroom coatings',
  openGraph: {
    title: 'Food Grade Facility Coatings | ASFI Construction',
    description: 'USDA-approved polyurea coating systems for food processing and pharmaceutical facilities. Class A fire rated, ultra-low VOC, easy maintenance.',
    type: 'website',
    url: 'https://www.asficonstruction.com/food-plants',
    images: [
      {
        url: 'https://www.asficonstruction.com/images/food-bev.jpg',
        width: 1200,
        height: 630,
        alt: 'Pristine food processing facility with ASFI Construction polyurea coating',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Food Grade Facility Coatings | ASFI Construction',
    description: 'USDA-approved coating systems for food processing facilities. Class A fire rated, ultra-low VOC.',
    images: ['https://www.asficonstruction.com/images/food-bev.jpg'],
  },
  alternates: {
    canonical: 'https://www.asficonstruction.com/food-plants',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FoodPlantsLayout({ children }) {
  return children;
}
