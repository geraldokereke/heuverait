import { notFound } from 'next/navigation';
import { IndustriesData } from '@/data/IndustriesData';
import { Metadata } from 'next';
import Hero from '@/components/hero';
import SectionContainer from '@/components/ui/sectionContainer';
import SectionTitle from '@/components/ui/SectionTitle';
import Image from 'next/image';

export async function generateStaticParams() {
  return IndustriesData.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const industry = IndustriesData.find((ind) => ind.slug === params.slug);
  
  if (!industry) {
    return {};
  }

  return {
    title: `${industry.name} | Heuver AI Technologies`,
    description: industry.heroDescription,
    openGraph: {
      title: `${industry.name} | Heuver AI Technologies`,
      description: industry.heroDescription,
      images: [industry.heroImage],
    },
  };
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = IndustriesData.find((ind) => ind.slug === params.slug);

  if (!industry) {
    notFound();
  }

  return (
    <main>
      <Hero
        imgLink={industry.heroImage}
        section={industry.name}
        title={industry.heroTitle}
        description={industry.heroDescription}
        height="h-[50vh]"
      />
      
      {industry.features.map((feature, idx) => (
        <SectionContainer key={idx} className="py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">{feature.title}</h2>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="list-disc pl-5 space-y-2">
                {feature.features.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="relative h-64 md:h-80">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </SectionContainer>
      ))}
    </main>
  );
}
