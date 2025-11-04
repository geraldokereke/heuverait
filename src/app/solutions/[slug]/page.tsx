"use client";

import { useParams, notFound } from 'next/navigation';
import { SolutionsData } from '@/data/SolutionsData';
import { useEffect } from 'react';
import Hero from '@/components/hero';
import SectionContainer from '@/components/ui/sectionContainer';
import SideImage from '@/components/ui/SideImage';
import Text from '@/components/ui/text';
import CTA from '@/components/ui/cta';
import Button from '@/components/ui/button';
import { Clock } from 'lucide-react';
import Stats from '@/components/about/team/stats';

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
      {/* Hero Section */}
      <Hero
        imgLink={solution.heroImg}
        section='Solutions'
        title={solution.heroTitle}
        description={solution.heroDescription}
        height='h-[50vh]'
      />

      <SectionContainer className="py-16 -mt-32 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
          <Stats />
        </div>
      </SectionContainer>

      {/* Solution Sections */}
      <div className="bg-white">
        {solution.sections.map((section, index) => (
          <section
            key={section.name}
            className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <SectionContainer>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="mb-4">
                    <span className="inline-block px-4 py-2 bg-[#41a7ad] text-white text-xs 2xl:text-sm font-semibold rounded-full mb-4">
                      {section.name}
                    </span>
                  </div>
                  <Text size='3xl' weight='bold' className="text-gray-900 mb-1 lg:mb-0 xl:mb-2 2xl:mb-4">
                    {section.title}
                  </Text>
                  <Text size="lg" color="gray-600" leading="relaxed" className="mb-4 lg:mb-2 xl:mb-4 2xl:mb-8">
                    {section.subtitle}
                  </Text>

                  {/* Features List */}
                  <div className="space-y-4">
                    {section.links.map((link, i) => (
                      <div key={i} className="flex items-center">
                        <div className="flex-shrink-0 size-4 lg:size-3 xl:size-4 2xl:size-6 rounded-full bg-[#41a7ad] flex items-center justify-center mr-2 2xl:mr-4">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <Text size="lg" color="gray-700" leading="relaxed">
                          {link}
                        </Text>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className={`flex-1 relative ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                    <SideImage
                      imgsrc={section.image || ''}
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
          </section>
        ))}
      </div>

      {/* Key Benefits Section */}
      <section className="py-20 bg-gray-50">
        <SectionContainer>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our {solution.name}?</h2>
            <Text size="xl" color="gray-600" leading="relaxed" className="max-w-3xl mx-auto">
              Our proven methodology and deep expertise deliver exceptional results across industries
            </Text>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#41a7ad] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Accelerated Implementation</h3>
              <Text size='lg' color="gray-600" leading="relaxed">
                Rapid deployment with minimal disruption to your existing operations
              </Text>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#41a7ad] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Reliability</h3>
              <Text size='lg' color="gray-600" leading="relaxed">
                Enterprise-grade solutions with 99.9% uptime and comprehensive support
              </Text>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#41a7ad] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Measurable ROI</h3>
              <Text size='lg' color="gray-600" leading="relaxed">
                Track performance improvements and cost savings with detailed analytics
              </Text>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* Case Studies Section */}
      {/* <section className="py-20 bg-black">
        <SectionContainer>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Success Stories</h2>
            <Text size="xl" color="gray-300" leading="relaxed" className="max-w-3xl mx-auto">
              Real-world impact and measurable results from our {solution.name.toLowerCase()} implementations
            </Text>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solution.caseStudies.map((caseStudy, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <SideImage
                    imgsrc={caseStudy.image}
                    height="xl"
                    borderSide="none"
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {caseStudy.title}
                  </h3>
                  <Text color="gray-600" size="lg" leading="relaxed" className="mb-6">
                    {caseStudy.description}
                  </Text>

                  <div className="border-t border-gray-200 pt-6">
                    <Text size="lg" color="gray-900" className="mb-4 font-semibold">Key Achievements:</Text>
                    <div className="space-y-3">
                      {caseStudy.links.map((link, i) => (
                        <div key={i} className="flex items-start">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#41a7ad] flex items-center justify-center mt-0.5 mr-3">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <Text size="lg" color="gray-700" leading="relaxed">{link}</Text>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionContainer>
      </section> */}

      {/* CTA Section */}
      <CTA
        bgColor="white"
        headerText="Ready to Transform Your Business?"
        headerTextColor="black"
        subHeaderText={`Let's discuss how our ${solution.name.toLowerCase()} can drive innovation and growth for your organization.`}
        subHeaderTextColor="black"
      >
        <Button backgroundColor="black" onClick='/contact-us' type="default" textColor="white">
          Schedule Consultation
        </Button>
        {/* <Button backgroundColor="white" onClick='/resources/case-studies/digital-transformation-success' type="link" textColor="black">
          Download Case Study
        </Button> */}
      </CTA>
    </main>
  );
}