export const metadata = {
  title: 'Culvert Rehabilitation | SIPP Technology | Trenchless Pipe Repair',
  description: 'Nationwide culvert rehabilitation using advanced SIPP (Spray In Place Pipe) technology. Cost-effective polyurea spray coatings that restore structural integrity and extend culvert life by decades. Minimal downtime, no full replacement needed.',
  keywords: 'culvert rehabilitation, SIPP technology, spray in place pipe, trenchless pipe repair, culvert repair, polyurea pipe lining, culvert restoration, pipe rehabilitation, infrastructure repair, highway culvert repair',
  openGraph: {
    title: 'Culvert Rehabilitation | SIPP Technology | ASFI Construction',
    description: 'Advanced SIPP technology for cost-effective culvert rehabilitation nationwide. Restore structural integrity without full replacement. Fast curing, minimal downtime.',
    type: 'website',
    url: 'https://www.asficonstruction.com/culvert-rehabilitation',
    images: [
      {
        url: 'https://www.asficonstruction.com/images/culvert-rehabilitation.jpg',
        width: 1200,
        height: 630,
        alt: 'ASFI Construction SIPP robot applying polyurea coating inside culvert',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Culvert Rehabilitation | SIPP Technology | ASFI Construction',
    description: 'Cost-effective culvert rehabilitation using advanced SIPP technology. Nationwide service, minimal downtime.',
    images: ['https://www.asficonstruction.com/images/culvert-rehabilitation.jpg'],
  },
  alternates: {
    canonical: 'https://www.asficonstruction.com/culvert-rehabilitation',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CulvertRehabilitationLayout({ children }) {
  return children;
}
