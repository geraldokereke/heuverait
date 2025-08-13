"use client";

import { notFound, useParams, useRouter } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Hero from '@/components/hero';
import {
  CheckCircle,
  Star,
  ArrowRight,
  Users,
  Building,
  Clock,
  Shield,
  Zap,
  Target,
  Quote,
  ChevronRight,
  ChevronLeft,
  Home,
  ArrowUp
} from 'lucide-react';
import { ProductsData } from '@/data/ProductsData';
import SectionContainer from '@/components/ui/sectionContainer';
import Text from '@/components/ui/text';
import SectionTitle from '@/components/ui/SectionTitle';

// Smooth scroll to anchor links
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Table of contents component
const TableOfContents = ({ sections }: { sections: string[] }) => (
  <div className="sticky top-24 hidden lg:block">
    <div className="border-l-2 border-gray-200 pl-4">
      <h3 className="text-sm font-semibold font-montserrat text-gray-900 mb-4">On this page</h3>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section}>
            <button
              onClick={() => scrollToSection(section.toLowerCase().replace(/\s+/g, '-'))}
              className="text-sm font-poppins text-gray-600 hover:text-black transition-colors text-left"
            >
              {section}
            </button>
          </li>
        ))}
      </ul>
    </div>
  </div>
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
  const slug = params.slug as string;

  const product = ProductsData.find((s) => s.slug === slug);

  // Handle client-side metadata update
  useEffect(() => {
    if (product) {
      document.title = `${product.name} | Heuver AI Technologies`;

      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', product.description);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = product.description;
        document.head.appendChild(meta);
      }
    }
  }, [product]);

  if (!product) {
    notFound();
  }

  const ProductIcon = product.icon;

  // Define sections for table of contents
  const sections = [
    'Overview',
    ...(product.useCases && product.useCases.length > 0 ? ['Use Cases'] : []),
    ...(product.features && product.features.length > 0 ? ['Features'] : []),
    ...(product.technicalSpecs ? ['Technical Specifications'] : []),
    ...(product.testimonials && product.testimonials.length > 0 ? ['Testimonials'] : []),
    ...(product.pricingTiers && product.pricingTiers.length > 0 ? ['Pricing'] : [])
  ];

  return (
    <main className="bg-white">
      <Hero
        imgLink={product.heroImage || ''}
        section={product.name}
        title={product.heroTitle}
        description={product.heroDescription}
        height="h-[50vh]"
      />

      {/* Table of Contents */}
      <SectionContainer className="py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:hidden mb-8">
            <h3 className="text-sm font-medium text-gray-900 mb-4">Jump to:</h3>
            <div className="flex flex-wrap gap-2">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section.toLowerCase().replace(/\s+/g, '-'))}
                  className="text-sm px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
          <div className="hidden lg:block w-64 flex-shrink-0">
            <TableOfContents sections={sections} />
          </div>
          <div className="flex-1">

            {/* Key Benefits Strip */}
            {product.keyBenefits && product.keyBenefits.length > 0 && (
              <section className="py-12 text-black">
                <div className="container mx-auto px-4">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {product.keyBenefits.map((benefit, i) => (
                      <div key={i} className="text-center">
                        <CheckCircle className="w-8 h-8 mx-auto mb-3 text-[#41a7ad]" />
                        <Text size='sm' font='poppins' weight='medium'>{benefit}</Text>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

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
                            <div className="size-10 lg:size-8 xl:size-10 2xl:size-12 bg-black rounded-lg flex items-center justify-center">
                              <Target className="size-4 lg:size-2 xl:size-4 2xl:size-6 text-white" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <Text size='xl' weight='bold' color='black' className="mb-2">{useCase.title}</Text>
                            <Text size='lg' color='gray-600' className="mb-3">{useCase.description}</Text>
                            <div className="flex items-center gap-4 flex-wrap">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-[8px] xl:text-[10px] 2xl:text-xs font-medium bg-gray-100 text-gray-700">
                                <Building className="size-3 lg:size-1 xl:size-3 mr-1" />
                                {useCase.industry}
                              </span>
                              {useCase.roi && (
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-[8px] xl:text-[10px] 2xl:text-xs font-medium bg-black text-white">
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
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      <div key={i} className="bg-white p-6 rounded-xl border border-black">
                        <Text size='sm' weight='medium' font='montserrat' color='black' className="uppercase tracking-wide mb-2">
                          {key}
                        </Text>
                        <Text size='lg' color='gray-700' weight='medium' font='poppins'>{value}</Text>
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
                  <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                      Implementation Process
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      Our proven methodology ensures successful deployment
                    </p>
                  </div>
                  <SectionTitle
                    section='implmentation'
                    title='Implementation Process'
                    subtitle='Our proven methodology ensures successful deployment'
                  />
                  <div className="max-w-4xl mx-auto">
                    <div className="space-y-6">
                      {product.implementationPhases.map((phase, i) => (
                        <div key={i} className="flex items-start gap-4">
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
                          <Clock className="size-2 lg:size-1 xl:size-2 2xl:size-4" />
                          <Text size='lg' color='white' font='poppins' weight='medium' className="font-medium">Typical Timeline: {product.projectTimeline}</Text>
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
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
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
                            <span className="inline-block text-[8px] xl:text-[10px] 2xl:text-xs px-2 py-1 bg-black text-white rounded">
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
              <section id="pricing" className="py-20 bg-black text-white scroll-mt-20">
                <div className="container mx-auto px-4">
                  <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                      Choose Your Plan
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                      Flexible pricing options to match your business needs
                    </p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {product.pricingTiers.map((tier, i) => (
                      <div key={i} className={`relative p-8 rounded-2xl border-2 ${tier.popular
                        ? 'border-white bg-white text-black'
                        : 'border-gray-700 bg-gray-900'
                        }`}>
                        {tier.popular && (
                          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <span className="bg-black text-white px-4 py-1 rounded-full text-sm font-medium">
                              Most Popular
                            </span>
                          </div>
                        )}
                        <div className="text-center">
                          <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                          <div className="mb-4">
                            <span className="text-4xl font-bold">{tier.price}</span>
                            {tier.period !== 'per month' ? (
                              <span className="text-sm opacity-75 ml-2">{tier.period}</span>
                            ) : (
                              <span className="text-sm opacity-75">/month</span>
                            )}
                          </div>
                          <p className={`mb-8 ${tier.popular ? 'text-gray-600' : 'text-gray-300'}`}>
                            {tier.description}
                          </p>
                        </div>
                        <ul className="space-y-3 mb-8">
                          {tier.features.map((feature, j) => (
                            <li key={j} className="flex items-start gap-3">
                              <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${tier.popular ? 'text-black' : 'text-white'
                                }`} />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Link
                          href="/contact?interest=demo"
                          className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${tier.popular
                            ? 'bg-black text-white hover:bg-gray-800'
                            : 'bg-white text-black hover:bg-gray-100'
                            }`}
                        >
                          {tier.cta}
                        </Link>
                        {tier.targetAudience && (
                          <p className={`text-[8px] xl:text-[10px] 2xl:text-xs mt-4 text-center ${tier.popular ? 'text-gray-500' : 'text-gray-400'
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
            <section className="py-20 bg-white" id="contact">
              <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                    Ready to Transform Your Business?
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Join thousands of organizations that trust Heuver AI Technologies to drive their success.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/contact?interest=demo"
                      className="bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                    >
                      Schedule a Demo
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/contact?interest=sales"
                      className="border-2 border-black text-black px-8 py-4 rounded-lg font-medium hover:bg-black hover:text-white transition-colors"
                    >
                      Contact Sales
                    </Link>
                  </div>
                </div>
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