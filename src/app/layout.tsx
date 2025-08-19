import './globals.css';
import { Inter, Poppins, Montserrat } from 'next/font/google';
import { Metadata } from 'next';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

// Optimize font loading with next/font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  preload: true,
});

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Heuvera IT Consulting - Innovative Tech Solutions for Business',
  description:
    'Heuvera is a trusted IT consulting company delivering tailored solutions in cloud, software, and business technology to help organizations scale and thrive.',
  keywords: [
    'IT Consulting',
    'Cloud Solutions',
    'Business Technology',
    'Digital Transformation',
    'Software Development',
    'Heuvera'
  ],
  authors: [{ name: 'Heuvera IT Consulting' }],
  creator: 'Heuvera Team',
  publisher: 'Heuvera IT Consulting',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://heuvera.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Heuvera IT Consulting - Innovative Tech Solutions for Business',
    description:
      'Trusted IT consulting partner providing tailored cloud, digital, and software solutions to transform businesses.',
    url: '/',
    siteName: 'Heuvera IT Consulting',
    locale: 'en_US',
    type: 'website',
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
  twitter: {
    card: 'summary_large_image',
    title: 'Heuvera IT Consulting',
    description: 'Innovative IT Solutions for Business Growth',
    creator: '@heuvera', // Replace with your actual handle
    site: '@heuvera',    // Usually same as creator
    images: ['/og-image.png'], // Replace with your actual OG image path
  },
  verification: {
    google: '', // Add Google Search Console verification code
    yandex: '', // Add Yandex verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${montserrat.variable} scroll-smooth`}>
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/Inter.var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Poppins.var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Montserrat.var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Preload critical CSS */}
        <style dangerouslySetInnerHTML={{
          __html: `
            :root {
              --font-inter: ${inter.style.fontFamily};
              --font-poppins: ${poppins.style.fontFamily};
              --font-montserrat: ${montserrat.style.fontFamily};
            }
            
            /* Critical CSS for above-the-fold content */
            body { 
              font-family: var(--font-inter), system-ui, -apple-system, sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              text-rendering: optimizeLegibility;
              overflow-x: hidden;
            }
            
            /* Smooth scrolling */
            html {
              scroll-behavior: smooth;
            }
            
            /* Focus styles for accessibility */
            *:focus-visible {
              outline: 2px solid #3b82f6;
              outline-offset: 2px;
            }
          `
        }} />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />

        {/* Preload critical JS */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Load non-critical JS after page load
              function loadScripts() {
                const scripts = [
                  // Add any non-critical scripts here
                ];
                
                scripts.forEach(src => {
                  const script = document.createElement('script');
                  script.src = src;
                  script.async = true;
                  document.body.appendChild(script);
                });
              }
              
              // Load non-critical CSS after page load
              function loadStyles() {
                const links = [
                  // Add any non-critical CSS here
                ];
                
                links.forEach(href => {
                  const link = document.createElement('link');
                  link.rel = 'stylesheet';
                  link.href = href;
                  document.head.appendChild(link);
                });
              }
              
              // Run after page load
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => {
                  loadScripts();
                  loadStyles();
                });
              } else {
                loadScripts();
                loadStyles();
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
