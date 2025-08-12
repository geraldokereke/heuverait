import { notFound } from 'next/navigation';
import { ProductsData } from '@/data/ProductsData';
import { Metadata } from 'next';
import Image from 'next/image';
import Hero from '@/components/hero';

export async function generateStaticParams() {
  return ProductsData.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = ProductsData.find((p) => p.slug === params.slug);

  if (!product) {
    return {};
  }

  return {
    title: `${product.name} | Heuver AI Technologies`,
    description: product.heroDescription,
    openGraph: {
      title: `${product.name} | Heuver AI Technologies`,
      description: product.heroDescription,
      images: [product.heroImage],
    },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = ProductsData.find((p) => p.slug === params.slug);
  if (!product) notFound();
  const ProductIcon = product.icon;

  return (
    <main>
      <Hero
        imgLink={product.heroImage}
        section={product.name}
        title={product.heroTitle}
        description={product.heroDescription}
        height="h-[50vh]"
      />

      {/* Features */}
      {product.features?.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {product.features.map((feature, i) => {
                const FeatureIcon = feature.icon;
                return (
                  <div key={i} className="bg-card p-6 rounded-lg border">
                    <FeatureIcon className="w-8 h-8 mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
