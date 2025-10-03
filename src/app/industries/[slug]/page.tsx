"use client";

import { notFound, useParams } from 'next/navigation';
import { IndustriesData } from '@/data/IndustriesData';
import Hero from '@/components/hero';
import SectionContainer from '@/components/ui/sectionContainer';
import SectionTitle from '@/components/ui/SectionTitle';
import Image from 'next/image';
import SideImage from '@/components/ui/SideImage';
import { useEffect, useState } from 'react';
import { ChevronRight, CheckCircle, TrendingUp, Award, Users, Clock } from 'lucide-react';
import CTA from '@/components/ui/cta';
import Button from '@/components/ui/button';
import Text from '@/components/ui/text';
import Stats from '@/components/about/team/stats';

export default function IndustryPage() {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
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

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  if (!industry) {
    notFound();
  }

  return (
    <main className="relative">
      {/* Enhanced Hero with overlay pattern */}
      <div className="relative">
        <Hero
          imgLink={industry.heroImage}
          section={industry.name}
          title={industry.heroTitle}
          description={industry.heroDescription}
          height="h-[60vh]"
        />
      </div>

      {/* Enhanced Stats Section */}
      <SectionContainer className="py-16 -mt-32 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
          <Stats/>
        </div>
      </SectionContainer>

      {/* Enhanced Features Section */}
      {industry.features.map((feature, idx) => (
        <SectionContainer key={idx} className="py-16">
          <div
            id={`feature-${idx}`}
            data-animate
            className={`flex flex-col lg:flex-row items-center gap-16 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } ${isVisible[`feature-${idx}`] ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{
              animation: isVisible[`feature-${idx}`] ? 'fadeInUp 0.8s ease-out forwards' : 'none',
              animationDelay: `${idx * 0.2}s`
            }}
          >
            <div className="flex-1">

              <SectionTitle
                section='Industries'
                title={feature.title}
                subtitle={feature.description}
                subtitleClassname='text-start text-lg leading-relaxed'
              />

              {/* Enhanced feature list */}
              <div className="space-y-4">
                {feature.features.map((item, i) => (
                  <div key={i} className="flex items-center">
                    <div className="flex-shrink-0 size-4 lg:size-3 xl:size-4 2xl:size-6 rounded-full bg-[#41a7ad] flex items-center justify-center mr-2 2xl:mr-4">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <Text size="lg" color="gray-700" leading="relaxed">
                      {item}
                    </Text>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced image container */}
            <div className='flex-1 relative'>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <SideImage
                  imgsrc={feature.image}
                  borderSide='all'
                  height='xl'
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-20" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-100 rounded-full opacity-20" />
              </div>
            </div>
          </div>
        </SectionContainer>
      ))}

      {/* Enhanced Case Studies Section */}
      {industry.caseStudies && (
        <div className='bg-black'>
          <SectionContainer className="py-20">

            <SectionTitle
              section="Success Stories"
              sectionClassname='text-white/80'
              title="Proven Results for Industry Leaders"
              titleClassname='text-white'
              subtitle="Discover how we've helped organizations transform their operations and achieve measurable success."
              subtitleClassname='text-white/50'
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {industry.caseStudies.map((study, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-6">
                      <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">
                        <Clock className="w-3 h-3 mr-1" />
                        Case Study
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <Text size='xl' weight='bold' className="text-gray-900 mb-1 2xl:mb-3">{study.title}</Text>
                    <Text size='lg' leading='relaxed' color='gray-600' className="mb-4 lg:mb-3 xl:mb-4 mb-6">{study.description}</Text>

                    <div className="space-y-2 lg:space-y-1 xl:space-y-2 2xl:space-y-3">
                      <Text size='sm' weight='semibold' className="text-gray-900 mb-2 lg:mb-1 xl:mb-2 2xl:mb-3">Key Results:</Text>
                      {study.results.map((result, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#41a7ad] flex items-center justify-center mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <Text size="lg" color="gray-700" leading="relaxed">{result}</Text>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SectionContainer>
        </div>

      )}

      {/* Enhanced Solutions Grid */}
      {industry.solutions && (
        <SectionContainer className="py-20">

          <SectionTitle
            section="Our Solutions"
            title={industry.solutions.title}
            subtitle={industry.solutions.description}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 xl:gap-6 2xl:gap-8">
            {industry.solutions.items.map((solution, idx) => {
              const IconComponent = solution.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 lg:p-4 xl:p-6 2xl:p-8 rounded-2xl shadow-lg"
                >
                  <div className="size-12 lg:size-8 xl:size-12 2xl:size-14 bg-[#41a7ad]/30 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="size-6 lg:size-4 xl:size-6 2xl:size-7 text-[#41a7ad]" />
                  </div>
                  <Text size="lg" weight='bold' className="text-gray-900 mb-2 lg:mb-1 xl:mb-2 2xl:mb-3">{solution.title}</Text>
                  <Text size='sm' leading='relaxed' className="text-gray-600 mb-3 lg:mb-2 xl:mb-3 mb-4">{solution.description}</Text>
                </div>
              );
            })}
          </div>
        </SectionContainer>
      )}

      {/* Call-to-Action Section */}
      <CTA
        bgColor="black"
        headerText="Ready to Transform Your Business?"
        headerTextColor="white"
        subHeaderText={`Let's discuss how our ${industry.name.toLowerCase()} can drive innovation and growth for your organization.`}
        subHeaderTextColor="white"
      >
        <Button backgroundColor="white" onClick='/contact-us' type="default" textColor="black">
          Schedule Consultation
        </Button>
      </CTA>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}