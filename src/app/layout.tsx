import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/features/Navbar';
import { Footer } from '@/components/features/Footer';

const inter = Inter({ subsets: ['latin'] });

const SITE_URL = 'https://lillehammermoske.no';
const SITE_NAME = 'Lillehammer Moske';
const SITE_DESCRIPTION =
  'Lillehammer Moske – bønnetider, Ramadan-kalender, Quranskole og fellesskap i Lillehammer. The Muslim Cultural Center Lillehammer (Orgnr: 988 588 660).';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Lillehammer Moske – Bønnetider, Ramadan og Fellesskap | Innlandet',
    template: '%s | Lillehammer Moske',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'lillehammer moske',
    'moske lillehammer',
    'bønnetider lillehammer',
    'prayer times lillehammer',
    'ramadan lillehammer',
    'quranskole lillehammer',
    'muslim lillehammer',
    'islamsk senter lillehammer',
    'the muslim cultural center lillehammer',
    'moské innlandet',
    'jummah lillehammer',
    'iftar lillehammer',
    'taraweeh lillehammer',
  ],
  authors: [{ name: 'The Muslim Cultural Center Lillehammer' }],
  creator: 'The Muslim Cultural Center Lillehammer',
  publisher: 'The Muslim Cultural Center Lillehammer',
  icons: {
    icon: '/assets/favicons/favicon.ico',
    shortcut: '/assets/favicons/favicon.ico',
    apple: '/assets/favicons/favicon.ico',
  },
  openGraph: {
    title: 'Lillehammer Moske – Bønnetider, Ramadan og Fellesskap',
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: 'website',
    locale: 'nb_NO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lillehammer Moske – Bønnetider, Ramadan og Fellesskap',
    description: SITE_DESCRIPTION,
  },
  alternates: {
    canonical: SITE_URL,
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
  verification: {},
  category: 'religion',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Mosque',
  name: 'Lillehammer Moske',
  alternateName: 'The Muslim Cultural Center Lillehammer',
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  telephone: '',
  email: 'info@lillehammermoske.no',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bankgata 12',
    addressLocality: 'Lillehammer',
    postalCode: '2609',
    addressRegion: 'Innlandet',
    addressCountry: 'NO',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 61.1153,
    longitude: 10.4663,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday',
        'Friday', 'Saturday', 'Sunday',
      ],
      opens: '06:00',
      closes: '22:00',
    },
  ],
  sameAs: [],
  foundingDate: '2005',
  isAccessibleForFree: true,
  publicAccess: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nb" dir="ltr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} min-h-screen bg-white`}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
