import { LucideIcon } from 'lucide-react';

export interface ProductFeature {
  title: string;
  description: string;
  icon: LucideIcon;
  category: string;
}

export interface ProductPricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface ProductUseCase {
  title: string;
  description: string;
  industry: string;
}

export interface ProductTechnicalSpecs {
  [key: string]: string;
}

export interface ProductTestimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
}

export interface ProductScreenshot {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface ProductData {
  slug: string;
  name: string;
  icon: LucideIcon;
  category: string;
  shortDescription: string;
  description: string;
  heroImage: string;
  heroTitle: string;
  heroDescription: string;
  keyBenefits: string[];
  useCases: ProductUseCase[];
  features: ProductFeature[];
  technicalSpecs: ProductTechnicalSpecs;
  integrations: string[];
  pricingTiers?: ProductPricingTier[];
  highlights?: string[];
  testimonials?: ProductTestimonial[];
  screenshots?: ProductScreenshot[];
  faqs?: ProductFAQ[];
  documentationUrl?: string;
  demoUrl?: string;
  videoUrl?: string;
  caseStudyUrl?: string;
  whitepaperUrl?: string;
  releaseNotes?: {
    version: string;
    date: string;
    changes: string[];
  }[];
  certifications?: string[];
  supportedLanguages?: string[];
  systemRequirements?: {
    minimum: string[];
    recommended: string[];
  };
  apiReference?: string;
  sdkSupport?: string[];
  communityLinks?: {
    github?: string;
    discord?: string;
    stackoverflow?: string;
    forum?: string;
  };
}