export const metadata = {
  title: 'About ASFI Construction | Woman-Owned WBENC Certified | Polyurea Coating Specialists',
  description: 'ASFI Construction LLC - Woman-owned, WBENC certified leader in polyurea coating solutions since 2006. Specializing in culvert rehabilitation, bridge waterproofing, and food-grade facility coatings nationwide. 18+ years of proven expertise.',
  keywords: 'ASFI Construction, woman owned business, WBENC certified, polyurea coating company, Rachel Corbin, infrastructure coatings, culvert specialists, bridge waterproofing company, woman-owned construction',
  openGraph: {
    title: 'About ASFI Construction | Woman-Owned WBENC Certified',
    description: 'Woman-owned, WBENC certified leader in polyurea coating solutions since 2006. 18+ years specializing in infrastructure protection nationwide.',
    type: 'website',
    url: 'https://www.asficonstruction.com/about',
    images: [
      {
        url: 'https://www.asficonstruction.com/images/rachel.jpg',
        width: 1200,
        height: 630,
        alt: 'Rachel Corbin, President and Founder of ASFI Construction',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About ASFI Construction | Woman-Owned WBENC Certified',
    description: 'Woman-owned, WBENC certified leader in polyurea coating solutions. 18+ years of infrastructure protection expertise.',
    images: ['https://www.asficonstruction.com/images/rachel.jpg'],
  },
  alternates: {
    canonical: 'https://www.asficonstruction.com/about',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutLayout({ children }) {
  return children;
}
