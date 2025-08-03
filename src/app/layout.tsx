import './globals.css';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* Google Fonts: Montserrat Alternates & Manrope */}
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
        <style>{`
          :root {
            --font-montserrat: 'Montserrat', Arial, sans-serif;
            --font-poppins: 'Poppins', Arial, sans-serif;
          }
        `}</style>
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
