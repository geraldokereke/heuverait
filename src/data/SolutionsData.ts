import { Brain, Cloud, Code, Globe } from "lucide-react";
import { SolutionData } from "@/types/solutions";

export const SolutionsData: SolutionData[] = [
  {
    slug: "cloud-solutions",
    name: "Cloud Solutions",
    icon: Cloud,
    description: "Enterprise-grade cloud migration and infrastructure",
    heroImg: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    heroTitle: "Cloud Services",
    heroDescription: "Enterprise-grade, secure, and scalable cloud solutions that accelerate your digital transformation. Harness the power of the cloud for innovation, resilience, and operational excellence.",
    sections: [
      {
        name: "Migration",
        title: "Cloud Migration & Modernization",
        subtitle: "Seamlessly transition your legacy systems and applications to the cloud with minimal disruption. Our proven frameworks ensure a secure, efficient, and cost-effective migration, unlocking agility and future-readiness for your business.",
        links: [
          "Assessment & cloud strategy development",
          "Lift-and-shift, re-platforming, and re-architecting",
          "Zero-downtime migrations",
          "Change management & user training"
        ],
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80"
      },
      {
        name: "Architecture",
        title: "Hybrid & Multi-Cloud Solutions",
        subtitle: "Achieve flexibility and resilience by leveraging multiple cloud providers and on-premises resources. We design, implement, and manage hybrid and multi-cloud architectures tailored to your compliance, performance, and budget needs.",
        links: [
          "Custom hybrid cloud architectures",
          "Multi-cloud workload management",
          "Unified monitoring & governance",
          "Disaster recovery & business continuity"
        ],
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80"
      },
      {
        name: "Security",
        title: "Cloud Security & Compliance",
        subtitle: "Protect your digital assets with robust cloud security frameworks and ensure compliance with industry regulations. Our security-first approach covers everything from identity management to threat detection and incident response.",
        links: [
          "Identity & access management",
          "Data encryption & privacy controls",
          "Continuous security monitoring",
          "Regulatory compliance (GDPR, HIPAA, etc.)"
        ],
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80"
      },
      {
        name: "Automation",
        title: "DevOps & Cloud Automation",
        subtitle: "Accelerate your software delivery and operations with DevOps best practices and cloud automation. We help you build CI/CD pipelines, automate infrastructure, and ensure rapid, reliable deployments.",
        links: [
          "Infrastructure as code (IaC)",
          "Automated CI/CD pipelines",
          "Monitoring & logging automation",
          "Cost and resource optimization"
        ],
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&q=80"
      }
    ],
    caseStudies: [
      {
        image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?w=400&q=80",
        title: "Global Retailer: Multi-Cloud Transformation",
        description: "We migrated a global retailer's legacy infrastructure to a multi-cloud environment, resulting in 60% faster deployments and a 30% reduction in IT costs. Our team ensured zero downtime and full regulatory compliance.",
        links: [
          "Zero-downtime migration",
          "Multi-cloud orchestration",
          "Automated monitoring & reporting"
        ]
      },
      {
        image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?w=400&q=80",
        title: "Healthcare Provider: Secure Cloud Adoption",
        description: "Enabled a healthcare provider to adopt cloud for sensitive patient data, implementing advanced encryption and continuous compliance monitoring. Achieved HIPAA compliance and improved data accessibility for clinicians.",
        links: [
          "HIPAA-compliant cloud architecture",
          "End-to-end data encryption",
          "Real-time compliance dashboards"
        ]
      }
    ]
  },
  // Additional solutions will be added here with the same structure
];
