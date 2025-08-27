export default function Head() {
  const title = 'Heuvera | Enterprise IT Consulting & Digital Transformation';
  const description =
    'Heuvera empowers innovation with enterprise technology solutions—IT strategy, software engineering, cloud consulting, and cybersecurity—to accelerate growth and resilience.';
  const keywords = [
    'IT consulting',
    'enterprise technology solutions',
    'digital transformation',
    'cloud consulting',
    'cybersecurity solutions',
    'software development',
    'Heuvera'
  ].join(', ');
  const url = process.env.NEXT_PUBLIC_SITE_URL || 'https://heuvera.com';
  const ogImage = '/og-image.png';

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Heuvera IT Consulting" />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Robots */}
      <meta name="robots" content="index, follow, max-image-preview:large" />
    </>
  );
}
