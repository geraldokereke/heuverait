import { notFound } from 'next/navigation';
import { ProductsData } from '@/data/ProductsData';
import { Metadata } from 'next';
import Image from 'next/image';

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
      {/* Hero Section */}
      <div className="min-h-[50vh] flex items-center bg-muted/50">
        <div className="container mx-auto px-4 py-16 text-center">
          <ProductIcon className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {product.description}
          </p>
        </div>
      </div>

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
