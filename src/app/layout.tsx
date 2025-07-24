import './globals.css';
import Footer from '@/components/Footer';
import { Quicksand } from 'next/font/google';
import Navigation from '@/components/Navigation';

const quicksand = Quicksand({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={quicksand.className}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navigation />
        {/* Header will go here */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
