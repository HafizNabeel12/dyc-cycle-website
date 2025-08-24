import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DYU Cycle - Back to School | Premium E-Bikes for Students',
  description: 'Transform your campus experience with DYU premium e-bikes. Up to 50% OFF Back to School Sale. Free shipping, 2-year warranty, perfect for students.',
  keywords: 'e-bikes, electric bikes, student bikes, campus transportation, DYU, back to school, folding bikes',
  authors: [{ name: 'DYU Cycle Team' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'DYU Cycle - Back to School E-Bikes',
    description: 'Premium e-bikes designed for students. Up to 50% OFF + Free Shipping.',
    type: 'website',
    url: 'https://dyucycle.com',
    siteName: 'DYU Cycle',
    images: [
      {
        url: '/og-image.jpg', // Add your OpenGraph image
        width: 1200,
        height: 630,
        alt: 'DYU E-Bikes for Students',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DYU Cycle - Back to School E-Bikes',
    description: 'Premium e-bikes designed for students. Up to 50% OFF + Free Shipping.',
    images: ['/twitter-image.jpg'], // Add your Twitter image
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/inter-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          />
        
        {/* Analytics - Replace with your tracking codes */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script> */}
      </head>
      <body className={`${inter.className} antialiased`}>
          <Navbar />
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-4 z-50"
        >
          Skip to main content
        </a>
        
        <div id="main-content">
          {children}
        </div>
        
        {/* Global scripts can be added here */}
        <Footer />
      </body>
    </html>
  );
}