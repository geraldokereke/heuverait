import {  HeartPulse, Truck, Factory, ShoppingCart, Landmark } from "lucide-react";
import { IndustryData } from "@/types/industries";

export const IndustriesData: IndustryData[] = [
  {
    slug: "finance",
    name: "Finance & Fintech",
    icon: Landmark,
    description: "Secure, scalable, and innovative digital products for banks, fintechs, and financial institutions.",
    heroImage: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=1200&q=80",
    heroTitle: "Finance & Fintech Solutions",
    heroDescription: "Secure, scalable, and innovative digital products for banks, fintechs, and financial institutions.",
    features: [
      {
        title: "Digital Banking Platforms",
        description: "Modern banking apps and platforms that deliver seamless, secure digital experiences.",
        features: [
          "Mobile banking apps",
          "Customer onboarding & KYC",
          "Secure payments & transfers"
        ],
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&q=80"
      },
      {
        title: "Risk & Compliance Solutions",
        description: "Automated compliance and risk management systems that keep you ahead of regulations.",
        features: [
          "AML & fraud detection",
          "Regulatory reporting",
          "Audit trails & transparency"
        ],
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&q=80"
      }
    ],
    caseStudies: [
      {
        title: "Mobile Banking Suite",
        description: "Built a mobile banking app for a regional bank, increasing customer engagement by 60% and reducing branch visits.",
        results: [
          "60% increase in customer engagement",
          "Reduced branch visits by 45%",
          "99.9% app uptime"
        ],
        image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?w=400&q=80"
      },
      {
        title: "RegTech Automation",
        description: "Automated regulatory reporting for a fintech, reducing compliance costs by 35% and improving audit readiness.",
        results: [
          "35% reduction in compliance costs",
          "90% faster reporting",
          "100% audit readiness"
        ],
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&q=80"
      }
    ],
    solutions: {
      title: "Tailored Solutions for Finance",
      description: "Our comprehensive suite of fintech solutions is designed to address the unique challenges of the financial sector.",
      items: [
        {
          title: "Digital Banking",
          description: "End-to-end digital transformation for traditional and challenger banks.",
          icon: Landmark
        },
        {
          title: "Payment Solutions",
          description: "Secure, scalable payment processing and money transfer systems.",
          icon: Landmark
        },
        {
          title: "Wealth Management",
          description: "Digital platforms for investment management and financial planning.",
          icon: Landmark
        },
        {
          title: "Regulatory Compliance",
          description: "Automated compliance and risk management solutions.",
          icon: Landmark
        }
      ]
    }
  },
  // Additional industries will be added here with the same structure
];
