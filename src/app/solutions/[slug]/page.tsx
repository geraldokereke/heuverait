"use client";

import { useParams, notFound } from 'next/navigation';
import { SolutionsData } from '@/data/SolutionsData';
import { useEffect } from 'react';
import Hero from '@/components/hero';
import SectionContainer from '@/components/ui/sectionContainer';
import SideImage from '@/components/ui/SideImage';
import SectionTitle from '@/components/ui/SectionTitle';
import Text from '@/components/ui/text';
import CTA from '@/components/ui/cta';
import Button from '@/components/ui/button';

export default function SolutionPage() {
  const params = useParams();
  const slug = params.slug as string;

  const solution = SolutionsData.find((s) => s.slug === slug);

  // Handle client-side metadata update
  useEffect(() => {
    if (solution) {
      document.title = `${solution.name} | Heuver AI Technologies`;

      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', solution.description);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = solution.description;
        document.head.appendChild(meta);
      }
    }
  }, [solution]);

  if (!solution) {
    notFound();
  }

  return (
    <main className="">
      <Hero
        imgLink={solution.heroImg}
        section='Solutions'
        title={solution.heroTitle}
        description={solution.heroDescription}
        height='h-[50vh]'
      />

      {/* Solution Sections */}
      <div className="bg-white">
        {solution.sections.map((section, index) => (
          <section
            key={section.name}
            className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <SectionContainer>
              <div className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}>
                <div className="lg:w-1/2">
                  <SectionTitle
                    section={section.name}
                    title={section.title}
                    subtitle={section.subtitle}
                    subtitleClassname='text-start'
                  />
                  <div className="space-y-4">
                    {section.links.map((link, i) => (
                      <div key={i} className="flex items-start group">
                        <div className="flex-shrink-0 size-4 lg:size-3 xl:size-4 2xl:size-6 rounded-full bg-black/10 flex items-center justify-center mt-1 mr-4 group-hover:bg-[#41a7ad] transition-colors">
                          <div className="w-2 h-2 rounded-full bg-black/60 group-hover:bg-white transition-colors" />
                        </div>
                        <Text size='lg' leading='relaxed' color='gray-700' className="group-hover:text-gray-900 transition-colors">
                          {link}
                        </Text>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <SideImage
                    imgsrc={section.image || ''}
                    height='xl'
                    borderSide='all'
                  />
                </div>
              </div>
            </SectionContainer>
          </section>
        ))}
      </div>

      {/* Case Studies Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-world impact and measurable results from our {solution.name.toLowerCase()} implementations
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {solution.caseStudies.map((caseStudy, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                <div className="h-64 overflow-hidden">
                  <SideImage
                    imgsrc={caseStudy.image}
                    height='xl'
                    borderSide='none'
                  />
                </div>
                <div className="p-8">
                  <Text color='gray-900' size='2xl' leading='tight' className="mb-4">
                    {caseStudy.title}
                  </Text>
                  <Text color='gray-600' size='lg' leading='relaxed' className="mb-6">
                    {caseStudy.description}
                  </Text>
                  <div className="space-y-3">
                    <Text size='lg' color='gray-900' className="mb-3 font-semibold">Key Achievements:</Text>
                    {caseStudy.links.map((link, i) => (
                      <div key={i} className="flex items-start">
                        <div className="flex-shrink-0 w-3 h-3 rounded-full bg-black/10 flex items-center justify-center mt-1 2xl:mt-2 mr-3">
                          <div className="w-2 h-2 rounded-full bg-black/70" />
                        </div>
                        <Text size='lg' color='gray-700' leading='relaxed'>{link}</Text>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        bgColor='white'
        headerText='Ready to Transform Your Business?'
        headerTextColor='black'
        subHeaderText={`Let's discuss how our ${solution.name.toLowerCase()} can drive innovation and growth for your organization.`}
        subHeaderTextColor='black'
      >
        <Button backgroundColor='black' type='default' textColor='white'>Schedule Consultation</Button>
        <Button backgroundColor='white' type='link' textColor='black'>Download Case Study</Button>
      </CTA>
    </main>
  );
}