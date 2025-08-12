import { LucideIcon } from 'lucide-react';

export interface SolutionSection {
  name: string;
  title: string;
  subtitle: string;
  links: string[];
  image?: string;
}

export interface CaseStudy {
  image: string;
  title: string;
  description: string;
  links: string[];
}

export interface SolutionData {
  slug: string;
  name: string;
  icon: LucideIcon;
  description: string;
  heroImg: string;
  heroTitle: string;
  heroDescription: string;
  sections: SolutionSection[];
  caseStudies: CaseStudy[];
}

export interface SolutionItem {
  slug: string;
  name: string;
  icon: LucideIcon;
  description: string;
  heroImg: string;
  heroTitle: string;
  heroDescription: string;
  sections: SolutionSection[];
  caseStudies: CaseStudy[];
}
