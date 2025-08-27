export default function Head() {
  const title = 'About Heuvera | Global IT Consulting Partner';
  const description =
    'Heuvera helps enterprises accelerate digital transformation with secure, scalable, and future-ready technology solutions. Strategic insight + hands-on engineering.';
  const keywords = [
    'About Heuvera',
    'IT consulting',
    'digital transformation',
    'enterprise technology solutions',
    'global consulting',
  ].join(', ');
  const url = (process.env.NEXT_PUBLIC_SITE_URL || 'https://heuvera.com') + '/about-us/who-we-are';
  const ogImage = '/og-image.png';

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Heuvera IT Consulting" />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <meta name="robots" content="index, follow, max-image-preview:large" />
    </>
  );
}
