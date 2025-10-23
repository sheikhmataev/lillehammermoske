import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/features/Navbar';
import { Footer } from '@/components/features/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lillehammer Moske - The Muslim Cultural Center',
  description: 'Offisiell nettside for The Muslim Cultural Center Lillehammer. Bønnetider, Ramadan kalender, Quranskole og mer.',
  keywords: 'moske, lillehammer, islam, bønnetider, ramadan, quranskole',
  authors: [{ name: 'The Muslim Cultural Center Lillehammer' }],
  openGraph: {
    title: 'Lillehammer Moske',
    description: 'The Muslim Cultural Center Lillehammer',
    type: 'website',
    locale: 'nb_NO',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no" dir="ltr">
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
