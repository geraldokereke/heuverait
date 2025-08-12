"use client";

import { notFound, useParams } from 'next/navigation';
import { IndustriesData } from '@/data/IndustriesData';
import Hero from '@/components/hero';
import SectionContainer from '@/components/ui/sectionContainer';
import SectionTitle from '@/components/ui/SectionTitle';
import Image from 'next/image';
import SideImage from '@/components/ui/SideImage';
import { useEffect } from 'react';

export default function IndustryPage() {

  const params = useParams();
  const slug = params.slug as string;

  const industry = IndustriesData.find((s) => s.slug === slug);

  // Handle client-side metadata update
  useEffect(() => {
    if (industry) {
      document.title = `${industry.name} | Heuver AI Technologies`;

      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', industry.description);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = industry.description;
        document.head.appendChild(meta);
      }
    }
  }, [industry]);

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
          <div className={`flex flex-col lg:flex-row items-center gap-12 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
            <div>
              <SectionTitle
                section='Industries'
                title={feature.title}
                subtitle={feature.description}
                subtitleClassname='text-start'
              />
              <ul className="list-disc pl-5 space-y-2">
                {feature.features.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className='w-1/2'>
              <SideImage
                imgsrc={feature.image}
                borderSide='all'
                height='xl'
              />
            </div>
          </div>
        </SectionContainer>
      ))}
    </main>
  );
}
