import { LucideIcon } from 'lucide-react';

export interface IndustryFeature {
  title: string;
  description: string;
  features: string[];
  image: string;
}

export interface IndustryCaseStudy {
  title: string;
  description: string;
  results: string[];
  image: string;
}

export interface IndustryData {
  slug: string;
  name: string;
  icon: LucideIcon;
  description: string;
  heroImage: string;
  heroTitle: string;
  heroDescription: string;
  features: IndustryFeature[];
  caseStudies: IndustryCaseStudy[];
  solutions: {
    title: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
      icon: LucideIcon;
    }>;
  };
}

export interface IndustryItem {
  slug: string;
  name: string;
  icon: LucideIcon;
  description: string;
  heroImage: string;
}
