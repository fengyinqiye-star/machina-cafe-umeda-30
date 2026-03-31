import type { Metadata } from 'next';
import { Noto_Sans_JP, Playfair_Display } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { shopInfo } from '@/data/shop-info';
import './globals.css';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-body',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://cafe-umeda.vercel.app'),
  title: {
    default: 'Cafe Umeda - 梅田の小さなカフェ',
    template: '%s | Cafe Umeda',
  },
  description:
    '大阪・梅田にある小さなカフェ。こだわりのドリンクと居心地の良い空間をお届けします。',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: 'Cafe Umeda',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Cafe Umeda',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': '#cafe-umeda',
    name: shopInfo.name,
    alternateName: shopInfo.nameJa,
    address: {
      '@type': 'PostalAddress',
      postalCode: shopInfo.postalCode,
      addressRegion: '大阪府',
      addressLocality: '大阪市北区',
      streetAddress: '梅田X-X-X',
      addressCountry: 'JP',
    },
    telephone: shopInfo.phone,
    email: shopInfo.email,
    openingHours: 'Tu-Su 10:00-20:00',
    priceRange: '$$',
    servesCuisine: 'Coffee',
    image:
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&h=630&fit=crop',
  };

  return (
    <html lang="ja" className={`${notoSansJP.variable} ${playfairDisplay.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-foreground font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
