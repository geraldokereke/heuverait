"use client";

import { notFound, useParams, useRouter } from 'next/navigation';
import { useEffect, useMemo, useCallback, lazy, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { ProductsData } from '@/data/ProductsData';

// Lazy load heavy components
const Hero = dynamic(() => import('@/components/hero'), { 
  loading: () => <div className="h-[50vh] bg-gray-100 animate-pulse" /> 
});

// Lazy load icons
const CheckCircle = dynamic(() => import('lucide-react').then(mod => mod.CheckCircle), { ssr: false });
const Star = dynamic(() => import('lucide-react').then(mod => mod.Star), { ssr: false });
const ArrowRight = dynamic(() => import('lucide-react').then(mod => mod.ArrowRight), { ssr: false });
const Users = dynamic(() => import('lucide-react').then(mod => mod.Users), { ssr: false });
const Building = dynamic(() => import('lucide-react').then(mod => mod.Building), { ssr: false });
const Clock = dynamic(() => import('lucide-react').then(mod => mod.Clock), { ssr: false });
const Shield = dynamic(() => import('lucide-react').then(mod => mod.Shield), { ssr: false });
const Zap = dynamic(() => import('lucide-react').then(mod => mod.Zap), { ssr: false });
const Target = dynamic(() => import('lucide-react').then(mod => mod.Target), { ssr: false });
const Quote = dynamic(() => import('lucide-react').then(mod => mod.Quote), { ssr: false });
const ChevronRight = dynamic(() => import('lucide-react').then(mod => mod.ChevronRight), { ssr: false });
const ChevronLeft = dynamic(() => import('lucide-react').then(mod => mod.ChevronLeft), { ssr: false });
const Home = dynamic(() => import('lucide-react').then(mod => mod.Home), { ssr: false });
const ArrowUp = dynamic(() => import('lucide-react').then(mod => mod.ArrowUp), { ssr: false });

// Lazy load other components
const SectionContainer = dynamic(() => import('@/components/ui/sectionContainer'));
const Text = dynamic(() => import('@/components/ui/text'));
const SectionTitle = dynamic(() => import('@/components/ui/SectionTitle'));
const Button = dynamic(() => import('@/components/ui/button'));

// Memoized components
const MemoizedCheckCircle = ({ className }: { className?: string }) => (
  <CheckCircle className={className} />
);

// Type definitions for better type safety
interface UseCase {
  title: string;
  description: string;
  industry: string;
  roi?: string;
}

interface Feature {
  title: string;
  description: string;
  icon: any;
  category: string;
  technicalDetail?: string;
}

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  targetAudience?: string;
}

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  industry?: string;
}

interface ProductData {
  slug: string;
  name: string;
  icon: any;
  category: string;
  shortDescription: string;
  description: string;
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  keyBenefits: string[];
  useCases: UseCase[];
  features: Feature[];
  technicalSpecs?: Record<string, string>;
  implementationPhases: string[];
  testimonials: Testimonial[];
  pricingTiers: PricingTier[];
  projectTimeline?: string;
}

type ProductDataWithDefaults = Omit<ProductData, 'keyBenefits' | 'useCases' | 'features' | 'implementationPhases' | 'testimonials' | 'pricingTiers'> & {
  keyBenefits?: string[];
  useCases?: UseCase[];
  features?: Feature[];
  implementationPhases?: string[];
  testimonials?: Testimonial[];
  pricingTiers?: PricingTier[];
};

export default function ProductPage() {
  const params = useParams();
  const slug = useMemo(() => params.slug as string, [params.slug]);

  // Memoize product data to prevent unnecessary re-renders
  const product = useMemo(() => 
    ProductsData.find((s) => s.slug === slug),
    [slug]
  );

  // Memoized smooth scroll to anchor links - MOVED INSIDE COMPONENT
  const scrollToSection = useCallback((id: string) => {
    // Use requestAnimationFrame for better performance
    requestAnimationFrame(() => {
      const element = document.getElementById(id);
      if (element) {
        // Use scrollIntoView with options for better performance
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }
    });
  }, []);

  // Memoized Table of contents component
  const TableOfContents = React.memo(({ sections }: { sections: string[] }) => {
    const handleClick = useCallback((section: string) => {
      scrollToSection(section.toLowerCase().replace(/\s+/g, '-'));
    }, [scrollToSection]);

    return (
      <div className="sticky top-24 hidden lg:block">
        <div className="border-l-2 border-gray-200 pl-4">
          <h3 className="text-sm font-semibold font-montserrat text-gray-900 mb-4">On this page</h3>
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section}>
                <button
                  onClick={() => handleClick(section)}
                  className="text-sm font-poppins text-gray-600 hover:text-black transition-colors text-left"
                  aria-label={`Scroll to ${section} section`}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  });
  TableOfContents.displayName = 'TableOfContents';

  // Handle client-side metadata update with debounce
  useEffect(() => {
    if (!product) return;

    // Update document title
    document.title = `${product.name} | Heuver AI Technologies`;

    // Debounce meta description update
    const timeoutId = setTimeout(() => {
      let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
      
      if (metaDescription) {
        metaDescription.content = product.description;
      } else {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        metaDescription.content = product.description;
        document.head.appendChild(metaDescription);
      }
    }, 100);

    // Cleanup function
    return () => clearTimeout(timeoutId);
  }, [product]);

  // Handle 404 if product not found
  if (!product) {
    notFound();
  }

  // Memoize the icon component
  const ProductIcon = useMemo(() => product.icon, [product.icon]);

  // Memoize sections for table of contents
  const sections = useMemo(() => [
    'Overview',
    ...(product.useCases?.length ? ['Use Cases'] : []),
    ...(product.features?.length ? ['Features'] : []),
    ...(product.technicalSpecs ? ['Technical Specifications'] : []),
    ...(product.testimonials?.length ? ['Testimonials'] : []),
    ...(product.pricingTiers?.length ? ['Pricing'] : [])
  ], [product]);

  // Memoize the hero section to prevent unnecessary re-renders
  const heroSection = useMemo(() => (
    <Hero
      imgLink={product.heroImage || ''}
      section={product.name}
      title={product.heroTitle}
      description={product.heroDescription}
      height="h-[50vh]"
    />
  ), [product.heroImage, product.name, product.heroTitle, product.heroDescription]);

  // Memoize the key benefits section
  const keyBenefitsSection = useMemo(() => {
    if (!product.keyBenefits?.length) return null;
    
    return (
      <section className="py-12 text-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-3 md:gap-0 md:grid-cols-2 lg:grid-cols-4">
            {product.keyBenefits.map((benefit, i) => (
              <div 
                key={i} 
                className="flex flex-col items-center justify-center h-28 text-center mx-auto md:border-l md:border-l-gray-100 border-l-0:first"
                data-testid="benefit-item"
              >
                <Suspense fallback={<div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse" />}>
                  <MemoizedCheckCircle className="w-8 h-8 mx-auto mb-3 text-[#41a7ad]" />
                </Suspense>
                <Text size='sm' font='poppins' weight='medium'>{benefit}</Text>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }, [product.keyBenefits]);

  return (
    <main className="bg-white">
      <Suspense fallback={<div className="h-[50vh] bg-gray-100 animate-pulse" />}>
        {heroSection}
      </Suspense>

      {/* Table of Contents */}
      <SectionContainer className="py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile TOC */}
          <div className="lg:hidden mb-8">
            <h3 className="text-sm font-medium text-gray-900 mb-4">Jump to:</h3>
            <div className="flex flex-wrap gap-2">
              {sections.map((section) => {
                const sectionId = section.toLowerCase().replace(/\s+/g, '-');
                return (
                  <button
                    key={section}
                    onClick={() => scrollToSection(sectionId)}
                    className="text-sm px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                    aria-label={`Jump to ${section} section`}
                  >
                    {section}
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* Desktop TOC */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <Suspense fallback={<div className="h-64 bg-gray-100 rounded-lg animate-pulse" />}>
              <TableOfContents sections={sections} />
            </Suspense>
          </div>
          
          <div className="flex-1">
            {/* Key Benefits Strip */}
            {keyBenefitsSection}

            {/* Product Overview */}
            <section id="overview" className="py-20 bg-white scroll-mt-20">
              <SectionTitle
                section={product.name}
                title={`Why Choose ${product.name}?`}
                subtitle={`${product.description}`}
              />
            </section>

            {/* Use Cases */}
            {product.useCases && product.useCases.length > 0 && (
              <section id="use-cases" className="py-20 scroll-mt-20">
                <div className="container mx-auto px-4">
                  <SectionTitle
                    section='Applications'
                    title='Real-World Application'
                    subtitle='Our product is designed to be versatile and adaptable to various industries and use cases.'
                  />
                  <div className="grid md:grid-cols-2 gap-8 mt-5">
                    {product.useCases.map((useCase, i) => (
                      <div key={i} className="bg-white p-6 lg:p-4 xl:p-6 2xl:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="size-10 lg:size-8 xl:size-8 2xl:size-12 bg-black rounded-lg flex items-center justify-center">
                              <Target className="size-4 lg:size-2 xl:size-3 2xl:size-6 text-white" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <Text size='xl' weight='bold' color='black' className="mb-2">{useCase.title}</Text>
                            <Text size='sm' color='gray-600' className="mb-3">{useCase.description}</Text>
                            <div className="flex items-center gap-4 flex-wrap">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-[8px] xl:text-[8px] 2xl:text-xs font-medium bg-gray-100 text-gray-700">
                                <Building className="size-3 lg:size-1 xl:size-3 mr-1" />
                                {useCase.industry}
                              </span>
                              {useCase.roi && (
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-[8px] xl:text-[8px] 2xl:text-xs font-medium bg-black text-white">
                                  <Zap className="size-3 lg:size-1 xl:size-3 mr-1" />
                                  {useCase.roi}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <section id="features" className="py-20 bg-white scroll-mt-20">
                <div className="container mx-auto px-4">
                  <SectionTitle
                    section='features'
                    title='Powerful Features'
                    subtitle='Everything you need to transform your business operations'
                  />
                  <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-8 mt-4">
                    {product.features.map((feature, i) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <div key={i} className="group">
                          <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-black transition-all duration-300 hover:shadow-lg">
                            <div className="size-10 lg:size-8 xl:size-10 2xl:size-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-black transition-colors duration-300">
                              <FeatureIcon className="size-4 lg:size-2 xl:size-4 2xl:size-6 text-black group-hover:text-white transition-colors duration-300" />
                            </div>
                            <Text size='xl' weight='bold' color='black' className="mb-3">{feature.title}</Text>
                            <Text size='lg' color='gray-600' className="mb-4">{feature.description}</Text>
                            {feature.technicalDetail && (
                              <Text size='sm' color='gray-500' className="italic mb-4">{feature.technicalDetail}</Text>
                            )}
                            <span className="inline-block text-[8px] xl:text-[10px] 2xl:text-xs font-medium px-2 py-1 bg-gray-100 text-gray-700 rounded">
                              {feature.category}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            )}

            {/* Technical Specifications */}
            {product.technicalSpecs && (
              <section id="technical-specifications" className="py-20 text-black scroll-mt-20">
                <div className="container mx-auto px-4">
                  <SectionTitle
                    section='specifications'
                    title='Technical Specifications'
                    subtitle='Detailed information about our product'
                  />
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(product.technicalSpecs).map(([key, value], i) => (
                      <div key={i} className="bg-white p-6 rounded-lg 2xl:rounded-xl border border-black">
                        <Text size='sm' weight='medium' font='montserrat' color='black' className="uppercase tracking-wide mb-2">
                          {key}
                        </Text>
                        <Text size='sm' color='gray-700' weight='medium' font='poppins'>{value}</Text>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Implementation Process */}
            {product.implementationPhases && product.implementationPhases.length > 0 && (
              <section className="py-20">
                <div className="container mx-auto px-4">
                  <SectionTitle
                    section='implmentation'
                    title='Implementation Process'
                    subtitle='Our proven methodology ensures successful deployment'
                  />
                  <div className="max-w-4xl mx-auto">
                    <div className="space-y-6">
                      {product.implementationPhases.map((phase, i) => (
                        <div key={i} className="flex items-start justify-center gap-4">
                          <div className="flex-shrink-0">
                            <div className="size-8 lg:size-6 xl:size-8 2xl:size-10 bg-black rounded-full flex items-center justify-center text-white text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-lg font-bold">
                              {i + 1}
                            </div>
                          </div>
                          <div className="flex-1 bg-white p-4 lg:p-2 xl:p-4 2xl:p-6 rounded-xl lg:rounded-lg xl:rounded-xl shadow-sm border border-gray-100">
                            <Text size='lg' color='gray-800' weight='medium' font='poppins'>{phase}</Text>
                          </div>
                        </div>
                      ))}
                    </div>
                    {product.projectTimeline && (
                      <div className="text-center mt-12">
                        <div className="inline-flex items-center gap-2 bg-black text-white px-4 lg:px-2 xl:px-4 2xl:px-6 py-1.5 lg:py-1 xl:py-1.5 2xl:py-3 rounded-full">
                          <Clock className="size-3 lg:size-2 xl:size-3 2xl:size-4" />
                          <h1 className="font-medium font-poppins text-white text-xs md:text-lg lg:text-xs xl:text-sm 2xl:text-lg">Typical Timeline: {product.projectTimeline}</h1>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </section>
            )}

            {/* Testimonials */}
            {product.testimonials && product.testimonials.length > 0 && (
              <section id="testimonials" className="py-20 bg-white scroll-mt-20">
                <div className="container mx-auto px-4">
                  <SectionTitle
                    section='testimonials'
                    title='Client success Stories'
                    subtitle='Hear from organizations that transformed their operations'
                  />
                  <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-8 mt-10">
                    {product.testimonials.map((testimonial, i) => (
                      <div key={i} className="bg-gray-50 p-6 lg:p-4 xl:p-6 2xl:p-8 rounded-2xl relative">
                        <Quote className="size-6 lg:size-4 xl:size-6 2xl:size-8 text-black mb-4" />
                        <blockquote className="text-gray-700 text-[10px] xl:text-sm 2xl:text-md font-poppins-italic mb-6">
                          &ldquo;{testimonial.quote}&rdquo;
                        </blockquote>
                        <div className="space-y-1">
                          <p className="font-bold text-[10px] xl:text-sm 2xl:text-md text-black">{testimonial.author}</p>
                          <p className="text-[8px] md:text-xs lg:text-[6px] xl:text-[8px] 2xl:text-sm text-gray-600">{testimonial.position}</p>
                          <p className="text-[8px] md:text-xs lg:text-[6px] xl:text-[8px] 2xl:text-sm font-medium text-black mb-2">{testimonial.company}</p>
                          {testimonial.industry && (
                            <span className="inline-block text-[8px] xl:text-[10px] 2xl:text-xs px-2 py-1 bg-black text-white rounded-md">
                              {testimonial.industry}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Pricing */}
            {product.pricingTiers && product.pricingTiers.length > 0 && (
              <section id="pricing" className="py-20 scroll-mt-20">
                <div className="container mx-auto px-4">
                  <div className="text-center mb-16">
                    <Text size='3xl' color='black' font='montserrat' weight='bold' className="mb-4">
                      Choose Your Plan
                    </Text>
                    <Text size='lg' color='gray-500' className="max-w-2xl mx-auto">
                      Flexible pricing options to match your business needs
                    </Text>
                  </div>
                  <div className="grid md:grid-cols-3 gap-1 2xl:gap-8 max-w-6xl mx-auto">
                    {product.pricingTiers.map((tier, i) => (
                      <div key={i} className={`relative p-8 rounded-2xl border-2 ${tier.popular
                        ? 'border-black bg-white text-black'
                        : 'bg-black text-white'
                        }`}>
                        {tier.popular && (
                          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <Text color='white' size='sm' font='montserrat' weight='medium' className="bg-black px-4 py-1 rounded-full">
                              Most Popular
                            </Text>
                          </div>
                        )}
                        <div className="text-center">
                          <h1 className="mb-2 text-sm xl:text-lg 2xl:text-2xl font-montserrat font-bold">{tier.name}</h1>
                          <div className="mb-4">
                            <h1 className={`text-xl lg:text-2xl xl:text-2xl 2xl:text-4xl font-bold font-montserrat ${tier.popular ? 'text-black' : 'text-white'}`}>{tier.price}</h1>
                            {tier.period !== 'per month' ? (
                              <h1 className="text-sm text-white opacity-75 ml-2">{tier.period}</h1>
                            ) : (
                              <h1 className="text-sm text-white opacity-75">/month</h1>
                            )}
                          </div>
                          <Text size='sm' className={`mb-8 ${tier.popular ? 'text-gray-600' : 'text-gray-300'}`}>
                            {tier.description}
                          </Text>
                        </div>
                        <ul className="space-y-3 mb-8">
                          {tier.features.map((feature, j) => (
                            <li key={j} className="flex items-start gap-3">
                              <CheckCircle className={`size-3 2xl:size-5 mt-0.5 flex-shrink-0 ${tier.popular ? 'text-black' : 'text-white'
                                }`} />
                              <h1 className='text-[8px] md:text-xs lg:text-[6px] xl:text-[8px] 2xl:text-sm'>{feature}</h1>
                            </li>
                          ))}
                        </ul>
                        <div className='flex flex-row items-center justify-center w-full'>
                          <Link
                            href="/contact?interest=demo"
                            className={`max-w-fit text-xs md:text-sm lg:text-[8px] 2xl:text-lg py-2 lg:py-1 xl:py-2 2xl:py-3 px-4 lg:px-3 xl:px-4 2xl:px-6 rounded-sm 2xl:rounded-lg font-medium transition-colors ${tier.popular
                              ? 'bg-black text-white hover:bg-gray-800'
                              : 'bg-white text-black hover:bg-gray-100'
                              }`}
                          >
                            {tier.cta}
                          </Link>
                        </div>

                        {tier.targetAudience && (
                          <p className={`text-[8px] xl:text-[8px] 2xl:text-xs mt-4 text-center ${tier.popular ? 'text-gray-500' : 'text-gray-400'
                            }`}>
                            {tier.targetAudience}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* CTA Section */}
            <section id='contact' className='text-center w-full mt-0 xl:mt-20 bg-white py-16 text-white overflow-hidden'>
              <Text size="4xl" weight="bold" font="montserrat" color="black" className="mb-1 xl:mb-4">
                Ready to Transform Your Business?
              </Text>
              <Text size="lg" color="black" className="mb-5 xl:mb-8 max-w-2xl mx-auto">
                Join thousands of organizations that trust Heuver AI Technologies to drive their success.
              </Text>
              <div className="w-full flex flex-row gap-6 justify-center">
                <Button backgroundColor='black' onClick='/contact-us' textColor='white' type='default'>Schedule a Demo</Button>
                <Button textColor='black' onClick='/contact-us' type='link'>Contact Sales</Button>
              </div>
            </section>
          </div>
        </div>
      </SectionContainer>

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </main>
  );
}