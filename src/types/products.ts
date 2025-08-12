import { LucideIcon } from 'lucide-react';

export interface ProductFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProductPricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface ProductData {
  slug: string;
  name: string;
  icon: LucideIcon;
  description: string;
  heroImage: string;
  heroTitle: string;
  heroDescription: string;
  features: ProductFeature[];
  pricingTiers?: ProductPricingTier[];
  documentationUrl?: string;
  demoUrl?: string;
  screenshots?: {
    src: string;
    alt: string;
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
}
