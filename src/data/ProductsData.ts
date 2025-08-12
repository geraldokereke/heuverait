import { BarChart3, Smartphone, Cloud, Zap } from "lucide-react";
import { ProductData } from "@/types/products";

export const ProductsData: ProductData[] = [
  {
    slug: "analytics-suite",
    name: "Analytics Suite",
    icon: BarChart3,
    description: "Advanced analytics and BI tools for business insights.",
    heroImage: "/products-analytics-hero.jpg",
    heroTitle: "Analytics Suite",
    heroDescription: "Advanced analytics and BI tools for business insights.",
    features: [
      {
        title: "Real-Time Dashboards",
        description: "Monitor KPIs with interactive dashboards.",
        icon: BarChart3
      },
      {
        title: "Automated Reporting",
        description: "Schedule and distribute reports automatically.",
        icon: BarChart3
      }
    ],
    pricingTiers: [
      {
        name: "Starter",
        price: "$99",
        description: "For small teams",
        features: ["Up to 5 users", "Basic dashboards"],
        cta: "Get Started"
      },
      {
        name: "Professional",
        price: "$499",
        description: "For growing businesses",
        features: ["Up to 25 users", "Advanced analytics"],
        cta: "Start Trial",
        popular: true
      }
    ]
  },
  {
    slug: "mobile-suite",
    name: "Mobile Suite",
    icon: Smartphone,
    description: "Build cross-platform mobile applications.",
    heroImage: "/products-mobile-hero.jpg",
    heroTitle: "Mobile Suite",
    heroDescription: "Build cross-platform mobile applications.",
    features: [
      {
        title: "Cross-Platform",
        description: "Build once, run anywhere.",
        icon: Smartphone
      },
      {
        title: "Cloud Sync",
        description: "Seamless cloud integration.",
        icon: Cloud
      }
    ]
  },
  {
    slug: "cloud-platform",
    name: "Cloud Platform",
    icon: Cloud,
    description: "Scalable cloud infrastructure solutions.",
    heroImage: "/products-cloud-hero.jpg",
    heroTitle: "Cloud Platform",
    heroDescription: "Scalable cloud infrastructure solutions.",
    features: [
      {
        title: "Auto-Scaling",
        description: "Scale resources automatically.",
        icon: Zap
      },
      {
        title: "High Availability",
        description: "99.9% uptime guarantee.",
        icon: Cloud
      }
    ]
  }
];
