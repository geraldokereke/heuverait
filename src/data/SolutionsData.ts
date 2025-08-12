import { Brain, Cloud, Code, Globe, Shield, Database, Cpu, Users, BarChart3, Smartphone, Bot, Settings } from "lucide-react";
import { SolutionData } from "@/types/solutions";

export const SolutionsData: SolutionData[] = [
  {
    slug: "cloud-solutions",
    name: "Cloud Solutions",
    icon: Cloud,
    description: "Enterprise-grade cloud migration and infrastructure optimization",
    heroImg: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    heroTitle: "Cloud Excellence",
    heroDescription: "Transform your business with scalable, secure, and intelligent cloud solutions. From migration to modernization, we deliver enterprise-grade cloud architectures that drive innovation and operational excellence.",
    sections: [
      {
        name: "Migration",
        title: "Strategic Cloud Migration & Modernization",
        subtitle: "Execute seamless cloud transformations with our battle-tested methodologies. We ensure zero-downtime migrations while optimizing for performance, security, and cost-effectiveness at enterprise scale.",
        links: [
          "Cloud-native architecture design & assessment",
          "Microservices decomposition & containerization",
          "Zero-downtime migration with rollback capabilities",
          "Legacy system modernization & refactoring",
          "Performance optimization & cost modeling"
        ],
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80"
      },
      {
        name: "Architecture",
        title: "Hybrid & Multi-Cloud Excellence",
        subtitle: "Design and implement sophisticated cloud architectures that leverage the best of multiple providers. Our solutions ensure vendor independence, optimal resource utilization, and seamless workload portability.",
        links: [
          "Multi-cloud orchestration & workload distribution",
          "Hybrid cloud connectivity & network optimization",
          "Cross-cloud data synchronization & governance",
          "Disaster recovery & high availability design",
          "Edge computing integration & CDN optimization"
        ],
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80"
      },
      {
        name: "Security",
        title: "Zero-Trust Cloud Security",
        subtitle: "Implement comprehensive security frameworks that protect your cloud assets with defense-in-depth strategies. Our security-first approach ensures compliance with the most stringent industry standards.",
        links: [
          "Zero-trust architecture implementation",
          "Advanced threat detection & response automation",
          "Multi-factor authentication & privilege management",
          "Data loss prevention & encryption at rest/transit",
          "Compliance automation (SOC2, ISO 27001, GDPR, HIPAA)"
        ],
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80"
      },
      {
        name: "Automation",
        title: "DevSecOps & Infrastructure Automation",
        subtitle: "Accelerate delivery with intelligent automation pipelines that embed security throughout the development lifecycle. Our DevSecOps practices ensure rapid, reliable, and secure deployments.",
        links: [
          "GitOps-based infrastructure as code (Terraform, Pulumi)",
          "Advanced CI/CD with security gates & automated testing",
          "Container orchestration with Kubernetes & service mesh",
          "Observability & intelligent monitoring (APM, logging, metrics)",
          "Cost optimization & resource governance automation"
        ],
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&q=80"
      }
    ],
    caseStudies: [
      {
        image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?w=400&q=80",
        title: "Fortune 500 Financial Services: Cloud-Native Transformation",
        description: "Architected a complete cloud-native transformation for a major financial institution, migrating 200+ applications with zero downtime. Achieved 75% cost reduction, 90% faster deployments, and enhanced security posture with automated compliance monitoring.",
        links: [
          "Microservices architecture with event-driven design",
          "Multi-region active-active deployment strategy",
          "Real-time fraud detection with ML pipelines",
          "Regulatory compliance automation & reporting"
        ]
      },
      {
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
        title: "Global Healthcare Network: HIPAA-Compliant Multi-Cloud",
        description: "Designed and implemented a HIPAA-compliant multi-cloud infrastructure serving 50M+ patients across 15 countries. Delivered 99.99% uptime, enhanced data sovereignty, and 40% improvement in clinical workflow efficiency.",
        links: [
          "End-to-end encryption with HSM key management",
          "Cross-border data residency & sovereignty",
          "Real-time patient data synchronization",
          "Automated breach detection & incident response"
        ]
      }
    ]
  },
  {
    slug: "digital-transformation",
    name: "Digital Transformation",
    icon: Settings,
    description: "Strategic technology initiatives that reshape business operations",
    heroImg: "https://images.unsplash.com/photo-1518186233392-c232efbf2373?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    heroTitle: "Digital Transformation",
    heroDescription: "Reimagine your business for the digital age. We orchestrate comprehensive transformation initiatives that modernize operations, enhance customer experiences, and create new revenue streams through strategic technology adoption.",
    sections: [
      {
        name: "Strategy",
        title: "Digital Strategy & Roadmapping",
        subtitle: "Develop comprehensive digital strategies aligned with business objectives. Our strategic frameworks ensure your transformation initiatives deliver measurable ROI while building sustainable competitive advantages.",
        links: [
          "Digital maturity assessment & gap analysis",
          "Technology roadmap & investment prioritization",
          "Operating model design & change management",
          "Innovation labs & proof-of-concept development",
          "Digital ecosystem partnership strategy"
        ],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
      },
      {
        name: "Process",
        title: "Business Process Automation",
        subtitle: "Streamline operations with intelligent process automation that eliminates manual work and reduces errors. Our solutions integrate seamlessly with existing systems while providing scalability for future growth.",
        links: [
          "Robotic process automation (RPA) implementation",
          "Workflow orchestration & business rules engines",
          "Document processing & intelligent data extraction",
          "API-first integration & system modernization",
          "Process mining & continuous optimization"
        ],
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80"
      },
      {
        name: "Experience",
        title: "Customer Experience Transformation",
        subtitle: "Create exceptional digital experiences that drive customer satisfaction and loyalty. Our omnichannel solutions deliver consistent, personalized interactions across all touchpoints.",
        links: [
          "Customer journey mapping & experience design",
          "Omnichannel platform development",
          "Personalization engines & recommendation systems",
          "Customer data platform (CDP) implementation",
          "Voice of customer analytics & sentiment analysis"
        ],
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80"
      },
      {
        name: "Culture",
        title: "Digital Culture & Change Management",
        subtitle: "Foster a digital-first culture that embraces innovation and continuous learning. Our change management expertise ensures successful adoption and sustained transformation outcomes.",
        links: [
          "Digital skills assessment & training programs",
          "Agile transformation & team restructuring",
          "Innovation culture development & governance",
          "Digital workplace solutions & collaboration tools",
          "Performance management & KPI dashboard design"
        ],
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80"
      }
    ],
    caseStudies: [
      {
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&q=80",
        title: "Manufacturing Giant: Industry 4.0 Transformation",
        description: "Led a comprehensive digital transformation for a global manufacturer, implementing IoT sensors, predictive maintenance, and AI-driven quality control. Achieved 35% reduction in downtime and 25% improvement in overall equipment effectiveness.",
        links: [
          "IoT sensor network & edge computing deployment",
          "Predictive maintenance with machine learning",
          "Real-time production optimization dashboards",
          "Digital twin implementation for product design"
        ]
      },
      {
        image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&q=80",
        title: "Retail Chain: Omnichannel Commerce Platform",
        description: "Transformed a traditional retailer into a digital-first organization with unified commerce, personalized experiences, and data-driven insights. Increased online revenue by 300% and improved customer satisfaction scores by 40%.",
        links: [
          "Unified commerce platform with real-time inventory",
          "AI-powered personalization & recommendation engine",
          "Augmented reality try-on experiences",
          "Customer data platform with 360-degree view"
        ]
      }
    ]
  },
  {
    slug: "ai-machine-learning",
    name: "AI & Machine Learning",
    icon: Brain,
    description: "Intelligent solutions that harness the power of artificial intelligence",
    heroImg: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    heroTitle: "AI & Machine Learning",
    heroDescription: "Unlock the transformative power of artificial intelligence to drive innovation, automate complex processes, and create intelligent business solutions. From predictive analytics to generative AI, we deliver cutting-edge solutions that provide competitive advantage.",
    sections: [
      {
        name: "Strategy",
        title: "AI Strategy & Implementation",
        subtitle: "Develop comprehensive AI strategies that align with business objectives and ethical principles. Our approach ensures responsible AI deployment with measurable business impact and sustainable competitive advantages.",
        links: [
          "AI readiness assessment & strategic roadmapping",
          "Use case identification & ROI modeling",
          "AI ethics framework & governance implementation",
          "Model lifecycle management & MLOps setup",
          "AI center of excellence establishment"
        ],
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80"
      },
      {
        name: "Analytics",
        title: "Advanced Analytics & Data Science",
        subtitle: "Transform raw data into actionable insights with sophisticated analytics solutions. Our data science expertise helps you uncover patterns, predict trends, and make data-driven decisions that drive growth.",
        links: [
          "Predictive modeling & forecasting algorithms",
          "Customer segmentation & behavioral analysis",
          "Anomaly detection & fraud prevention systems",
          "Real-time analytics & streaming data processing",
          "Advanced visualization & interactive dashboards"
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
      },
      {
        name: "Automation",
        title: "Intelligent Process Automation",
        subtitle: "Combine AI with automation to create intelligent systems that learn and adapt. Our solutions go beyond traditional RPA to deliver cognitive automation that handles complex, unstructured tasks.",
        links: [
          "Computer vision & image recognition systems",
          "Natural language processing & document understanding",
          "Conversational AI & intelligent chatbots",
          "Robotic process automation with ML integration",
          "Decision engines & automated reasoning systems"
        ],
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
      },
      {
        name: "GenAI",
        title: "Generative AI & Large Language Models",
        subtitle: "Harness the power of generative AI to create content, automate complex reasoning, and build intelligent applications. Our expertise spans foundation models, fine-tuning, and enterprise-grade AI deployment.",
        links: [
          "Custom LLM fine-tuning & domain adaptation",
          "Retrieval-augmented generation (RAG) systems",
          "AI-powered content generation & automation",
          "Multimodal AI applications (text, image, audio)",
          "AI safety, alignment & responsible deployment"
        ],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80"
      }
    ],
    caseStudies: [
      {
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80",
        title: "Investment Firm: AI-Powered Trading Platform",
        description: "Developed an AI-driven trading platform that processes millions of market signals in real-time, delivering 23% improvement in risk-adjusted returns and reducing trade execution time by 85%.",
        links: [
          "Real-time market signal processing & analysis",
          "Deep learning models for price prediction",
          "Risk management with Monte Carlo simulations",
          "Automated portfolio optimization & rebalancing"
        ]
      },
      {
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&q=80",
        title: "Healthcare Provider: Diagnostic AI Assistant",
        description: "Built an AI-powered diagnostic assistant that analyzes medical imaging and patient data, improving diagnostic accuracy by 32% and reducing average diagnosis time from hours to minutes.",
        links: [
          "Medical image analysis with deep learning",
          "Clinical decision support system integration",
          "Patient risk stratification & early warning systems",
          "HIPAA-compliant AI model deployment"
        ]
      }
    ]
  },
  {
    slug: "enterprise-software",
    name: "Enterprise Software Development",
    icon: Code,
    description: "Custom enterprise applications that scale with your business",
    heroImg: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    heroTitle: "Enterprise Software Development",
    heroDescription: "Build robust, scalable enterprise applications that drive business growth. Our full-stack development expertise delivers mission-critical software solutions with enterprise-grade security, performance, and reliability.",
    sections: [
      {
        name: "Architecture",
        title: "Enterprise Architecture & Design",
        subtitle: "Design scalable, maintainable enterprise architectures that support your business objectives. Our architectural expertise ensures your applications can handle enterprise-scale loads while remaining flexible for future evolution.",
        links: [
          "Domain-driven design & microservices architecture",
          "Event-driven architecture & distributed systems",
          "API-first design & enterprise service bus",
          "Database architecture & data modeling",
          "Performance engineering & scalability planning"
        ],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80"
      },
      {
        name: "Development",
        title: "Full-Stack Enterprise Development",
        subtitle: "Deliver comprehensive enterprise applications with modern development practices. Our agile development teams build robust solutions that integrate seamlessly with your existing enterprise ecosystem.",
        links: [
          "Modern web applications with React, Angular, Vue.js",
          "Enterprise backend services with Java, .NET, Python",
          "Cloud-native development & containerized deployment",
          "Enterprise integration & legacy system connectivity",
          "Mobile-first responsive design & PWA development"
        ],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80"
      },
      {
        name: "Quality",
        title: "Quality Assurance & Testing",
        subtitle: "Ensure enterprise-grade quality with comprehensive testing strategies. Our QA processes cover functional, performance, and security testing to deliver bulletproof enterprise applications.",
        links: [
          "Automated testing frameworks & continuous testing",
          "Performance testing & load testing at scale",
          "Security testing & penetration testing",
          "User acceptance testing & accessibility compliance",
          "Test data management & synthetic data generation"
        ],
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80"
      },
      {
        name: "Support",
        title: "Application Modernization & Support",
        subtitle: "Modernize legacy applications and provide ongoing support for enterprise systems. Our support services ensure your applications remain secure, performant, and aligned with evolving business needs.",
        links: [
          "Legacy application modernization & refactoring",
          "Performance optimization & technical debt reduction",
          "24/7 application monitoring & support",
          "Version upgrades & technology stack migration",
          "Documentation & knowledge transfer services"
        ],
        image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&q=80"
      }
    ],
    caseStudies: [
      {
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
        title: "Fortune 100 Energy Company: Operations Management Platform",
        description: "Developed a comprehensive operations management platform serving 50,000+ employees across global facilities. The system processes 1M+ transactions daily with 99.99% uptime and has reduced operational costs by 40%.",
        links: [
          "Microservices architecture with event sourcing",
          "Real-time dashboard with 500+ KPIs",
          "Mobile-first design for field operations",
          "Advanced analytics & predictive maintenance"
        ]
      },
      {
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80",
        title: "Global Bank: Core Banking System Modernization",
        description: "Modernized a core banking system serving 10M+ customers, migrating from legacy mainframes to cloud-native architecture. Achieved 70% reduction in transaction processing time and enhanced security compliance.",
        links: [
          "Strangler fig pattern for gradual migration",
          "Event-driven architecture with Apache Kafka",
          "Real-time fraud detection & risk management",
          "PCI DSS & regulatory compliance automation"
        ]
      }
    ]
  },
  {
    slug: "data-analytics",
    name: "Data & Analytics",
    icon: BarChart3,
    description: "Turn your data into strategic business intelligence and insights",
    heroImg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    heroTitle: "Data & Analytics Solutions",
    heroDescription: "Unlock the value of your data with comprehensive analytics solutions. From data engineering to advanced analytics, we help you build data-driven organizations that make informed decisions and drive competitive advantage.",
    sections: [
      {
        name: "Engineering",
        title: "Data Engineering & Infrastructure",
        subtitle: "Build robust data infrastructure that scales with your business. Our data engineering solutions ensure reliable, high-performance data pipelines that support real-time analytics and machine learning workloads.",
        links: [
          "Modern data stack with cloud-native technologies",
          "Real-time streaming & batch processing pipelines",
          "Data lake & data warehouse architecture design",
          "ETL/ELT automation & data quality monitoring",
          "Master data management & data governance"
        ],
        image: "https://images.unsplash.com/photo-1518186233392-c232efbf2373?w=600&q=80"
      },
      {
        name: "Analytics",
        title: "Advanced Analytics & Business Intelligence",
        subtitle: "Transform raw data into actionable business insights with sophisticated analytics platforms. Our BI solutions provide self-service analytics capabilities while maintaining enterprise-grade governance.",
        links: [
          "Self-service BI & interactive dashboards",
          "Advanced statistical analysis & data mining",
          "Predictive analytics & forecasting models",
          "Customer analytics & behavioral insights",
          "Financial analytics & performance management"
        ],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
      },
      {
        name: "Governance",
        title: "Data Governance & Privacy",
        subtitle: "Implement comprehensive data governance frameworks that ensure data quality, privacy, and compliance. Our solutions balance data accessibility with security and regulatory requirements.",
        links: [
          "Data catalog & metadata management systems",
          "Data privacy & GDPR compliance automation",
          "Data lineage tracking & impact analysis",
          "Data quality monitoring & remediation",
          "Access control & data security frameworks"
        ],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80"
      },
      {
        name: "Visualization",
        title: "Data Visualization & Storytelling",
        subtitle: "Create compelling data narratives that drive action. Our visualization experts design intuitive dashboards and reports that communicate complex insights clearly to all stakeholders.",
        links: [
          "Executive dashboards & KPI scorecards",
          "Interactive data exploration tools",
          "Embedded analytics & white-label solutions",
          "Mobile-responsive dashboard design",
          "Data storytelling & presentation automation"
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
      }
    ],
    caseStudies: [
      {
        image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&q=80",
        title: "Retail Conglomerate: Customer 360 Analytics Platform",
        description: "Built a unified customer analytics platform processing 100TB+ of daily transactions across 20+ brands. Delivered 25% increase in customer lifetime value and 40% improvement in marketing campaign effectiveness.",
        links: [
          "Real-time customer data platform (CDP)",
          "Advanced customer segmentation & persona analysis",
          "Cross-channel attribution modeling",
          "Automated personalization & recommendation engines"
        ]
      },
      {
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80",
        title: "Telecommunications Provider: Network Operations Intelligence",
        description: "Implemented a comprehensive network analytics solution processing 1B+ network events daily. Reduced network outages by 60% and improved customer satisfaction through proactive issue resolution.",
        links: [
          "Real-time network monitoring & anomaly detection",
          "Predictive maintenance for network infrastructure",
          "Customer impact analysis & SLA tracking",
          "Geographic performance optimization"
        ]
      }
    ]
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    icon: Shield,
    description: "Comprehensive security solutions to protect your digital assets",
    heroImg: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    heroTitle: "Cybersecurity Excellence",
    heroDescription: "Protect your organization with enterprise-grade security solutions. Our comprehensive cybersecurity services safeguard your digital assets, ensure compliance, and build resilience against evolving cyber threats.",
    sections: [
      {
        name: "Assessment",
        title: "Security Assessment & Risk Management",
        subtitle: "Identify vulnerabilities and strengthen your security posture with comprehensive assessments. Our risk-based approach ensures you invest in the right security controls to protect what matters most.",
        links: [
          "Comprehensive security posture assessments",
          "Penetration testing & ethical hacking",
          "Vulnerability management & remediation",
          "Risk assessment & threat modeling",
          "Security architecture reviews & recommendations"
        ],
        image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&q=80"
      },
      {
        name: "Operations",
        title: "Security Operations & Incident Response",
        subtitle: "Build robust security operations capabilities with 24/7 monitoring and rapid incident response. Our SOC services provide continuous threat detection and expert incident management.",
        links: [
          "24/7 Security Operations Center (SOC) services",
          "Threat hunting & advanced persistent threat detection",
          "Incident response & digital forensics",
          "Security orchestration & automated response",
          "Threat intelligence integration & analysis"
        ],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80"
      },
      {
        name: "Identity",
        title: "Identity & Access Management",
        subtitle: "Implement zero-trust identity solutions that secure user access while enhancing user experience. Our IAM solutions scale from small teams to global enterprises with millions of users.",
        links: [
          "Single sign-on (SSO) & multi-factor authentication",
          "Privileged access management (PAM)",
          "Identity governance & administration (IGA)",
          "Zero-trust network access (ZTNA)",
          "Identity federation & directory services"
        ],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80"
      },
      {
        name: "Compliance",
        title: "Compliance & Governance",
        subtitle: "Navigate complex regulatory requirements with automated compliance solutions. Our governance frameworks ensure continuous compliance while reducing administrative overhead.",
        links: [
          "Regulatory compliance automation (SOX, PCI DSS, GDPR)",
          "Security policy development & enforcement",
          "Audit preparation & evidence collection",
          "Privacy program implementation & management",
          "Third-party risk management & vendor assessments"
        ],
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
      }
    ],
    caseStudies: [
      {
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&q=80",
        title: "Financial Institution: Zero-Trust Security Transformation",
        description: "Implemented a comprehensive zero-trust security framework for a major bank, protecting 100,000+ employees and $500B+ in assets. Reduced security incidents by 85% and achieved regulatory compliance across multiple jurisdictions.",
        links: [
          "Zero-trust architecture with micro-segmentation",
          "Advanced threat detection with AI/ML",
          "Privileged access management for critical systems",
          "Continuous compliance monitoring & reporting"
        ]
      },
      {
        image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&q=80",
        title: "Healthcare Network: HIPAA-Compliant Security Operations",
        description: "Established a 24/7 SOC for a healthcare network serving 5M+ patients. Implemented advanced threat detection, reduced mean time to detection by 75%, and maintained zero HIPAA violations over 3 years.",
        links: [
          "Healthcare-specific threat intelligence",
          "Patient data protection & encryption",
          "Medical device security monitoring",
          "Breach prevention & incident response automation"
        ]
      }
    ]
  },
  {
    slug: "mobile-development",
    name: "Mobile Development",
    icon: Smartphone,
    description: "Native and cross-platform mobile applications for iOS and Android",
    heroImg: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    heroTitle: "Mobile Development",
    heroDescription: "Create exceptional mobile experiences that engage users and drive business growth. Our mobile development expertise spans native iOS/Android apps, cross-platform solutions, and emerging mobile technologies.",
    sections: [
      {
        name: "Native",
        title: "Native iOS & Android Development",
        subtitle: "Build high-performance native mobile applications that leverage platform-specific capabilities. Our native development approach ensures optimal user experience and seamless integration with device features.",
        links: [
          "Swift/SwiftUI development for iOS applications",
          "Kotlin/Java development for Android applications",
          "Platform-specific UI/UX design & optimization",
          "Advanced device feature integration (Camera, GPS, NFC)",
          "App Store optimization & submission support"
        ],
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80"
      },
      {
        name: "CrossPlatform",
        title: "Cross-Platform Development",
        subtitle: "Maximize development efficiency with cross-platform solutions that deliver native performance. Our expertise in modern frameworks enables rapid deployment across multiple platforms while maintaining code quality.",
        links: [
          "React Native development with native module integration",
          "Flutter development with custom widgets",
          "Xamarin development for enterprise applications",
          "Progressive Web Apps (PWA) for mobile-first experiences",
          "Code sharing strategies & platform-specific optimizations"
        ],
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80"
      },
      {
        name: "Enterprise",
        title: "Enterprise Mobile Solutions",
        subtitle: "Develop secure, scalable mobile solutions for enterprise environments. Our enterprise mobile expertise includes device management, security frameworks, and integration with corporate systems.",
        links: [
          "Enterprise mobile device management (MDM/EMM)",
          "Mobile application management & security",
          "Offline-first applications with data synchronization",
          "Enterprise authentication & single sign-on integration",
          "Corporate app store & distribution management"
        ],
        image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&q=80"
      },
      {
        name: "Emerging",
        title: "Emerging Mobile Technologies",
        subtitle: "Stay ahead with cutting-edge mobile technologies including AR/VR, IoT integration, and AI-powered features. Our innovation lab explores next-generation mobile experiences.",
        links: [
          "Augmented reality (AR) & virtual reality (VR) applications",
          "AI-powered mobile features & on-device machine learning",
          "IoT device integration & sensor data processing",
          "5G-enabled applications & edge computing",
          "Wearable device integration & health monitoring"
        ],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80"
      }
    ],
    caseStudies: [
      {
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80",
        title: "Global Bank: Mobile Banking Transformation",
        description: "Developed a comprehensive mobile banking platform serving 15M+ users across 25 countries. The app achieved 4.8-star ratings, processed $50B+ in transactions, and increased mobile engagement by 200%.",
        links: [
          "Biometric authentication with facial recognition",
          "Real-time fraud detection & transaction monitoring",
          "Multi-currency support & international transfers",
          "AI-powered financial insights & spending analytics"
        ]
      },
      {
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&q=80",
        title: "Logistics Company: Fleet Management Mobile Solution",
        description: "Built a comprehensive mobile solution for a logistics company managing 10,000+ vehicles. Improved delivery efficiency by 45%, reduced fuel costs by 30%, and enhanced customer satisfaction through real-time tracking.",
        links: [
          "Real-time GPS tracking & route optimization",
          "Driver performance monitoring & coaching",
          "Proof of delivery with digital signatures",
          "Predictive maintenance alerts & scheduling"
        ]
      }
    ]
  },
  {
    slug: "consulting-advisory",
    name: "Technology Consulting & Advisory",
    icon: Users,
    description: "Strategic technology guidance and executive advisory services",
    heroImg: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    heroTitle: "Technology Consulting & Advisory",
    heroDescription: "Navigate complex technology decisions with expert guidance from our seasoned consultants. We provide strategic technology advisory services that align IT investments with business objectives and drive sustainable competitive advantage.",
    sections: [
      {
        name: "Strategy",
        title: "Technology Strategy & Planning",
        subtitle: "Develop comprehensive technology strategies that support long-term business growth. Our strategic planning expertise helps organizations make informed technology investments and build sustainable competitive advantages.",
        links: [
          "Technology roadmap development & portfolio planning",
          "Digital transformation strategy & execution planning",
          "IT operating model design & organizational transformation",
          "Technology investment analysis & business case development",
          "Innovation strategy & emerging technology adoption"
        ],
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
      },
      {
        name: "Architecture",
        title: "Enterprise Architecture Advisory",
        subtitle: "Design and optimize enterprise architecture that scales with your business. Our architects provide guidance on technology selection, integration patterns, and architectural governance frameworks.",
        links: [
          "Enterprise architecture assessment & modernization",
          "Technology stack evaluation & selection",
          "Integration architecture & API strategy design",
          "Cloud architecture consulting & migration planning",
          "Architecture governance & standards development"
        ],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
      },
      {
        name: "Leadership",
        title: "Technology Leadership & Governance",
        subtitle: "Strengthen technology leadership capabilities and establish effective governance frameworks. Our advisory services help organizations build high-performing technology teams and processes.",
        links: [
          "CTO/CIO advisory & technology leadership coaching",
          "IT governance framework design & implementation",
          "Technology team assessment & capability building",
          "Vendor management & strategic partnership advisory",
          "Technology risk management & compliance guidance"
        ],
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80"
      },
      {
        name: "Innovation",
        title: "Innovation Labs & Proof of Concepts",
        subtitle: "Explore emerging technologies and validate innovative concepts through structured experimentation. Our innovation methodology helps organizations identify breakthrough opportunities and de-risk new initiatives.",
        links: [
          "Innovation lab setup & methodology development",
          "Rapid prototyping & proof of concept development",
          "Emerging technology research & feasibility studies",
          "Innovation pipeline management & prioritization",
          "Technology scouting & startup partnership facilitation"
        ],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80"
      }
    ],
    caseStudies: [
      {
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
        title: "Fortune 500 Conglomerate: Technology Transformation Strategy",
        description: "Developed a 5-year technology transformation strategy for a diversified conglomerate with $100B+ revenue. The strategy enabled $2B in cost savings, accelerated time-to-market by 50%, and positioned the company for digital leadership.",
        links: [
          "Multi-business unit technology strategy alignment",
          "Cloud-first architecture & migration roadmap",
          "Innovation portfolio optimization & governance",
          "Technology talent strategy & capability development"
        ]
      },
      {
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
        title: "Private Equity Firm: Technology Due Diligence Portfolio",
        description: "Provided technology due diligence for a $5B private equity portfolio, evaluating 50+ companies across multiple sectors. Identified $500M in value creation opportunities and established standardized technology assessment frameworks.",
        links: [
          "Technology risk assessment & mitigation strategies",
          "Scalability analysis & growth enablement planning",
          "Cybersecurity posture evaluation & improvement",
          "Post-acquisition technology integration planning"
        ]
      }
    ]
  },
  {
    slug: "integration-apis",
    name: "System Integration & APIs",
    icon: Globe,
    description: "Seamless system integration and API development services",
    heroImg: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    heroTitle: "System Integration & APIs",
    heroDescription: "Connect your systems and unlock data silos with sophisticated integration solutions. Our API-first approach enables seamless connectivity, real-time data exchange, and scalable system architectures that grow with your business.",
    sections: [
      {
        name: "APIs",
        title: "API Design & Development",
        subtitle: "Build robust, scalable APIs that enable seamless integration and drive digital ecosystem growth. Our API expertise covers design, development, security, and lifecycle management.",
        links: [
          "RESTful & GraphQL API design & development",
          "API security with OAuth 2.0, JWT, and rate limiting",
          "API documentation & developer portal creation",
          "API versioning strategies & backward compatibility",
          "Microservices API orchestration & service mesh"
        ],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80"
      },
      {
        name: "Integration",
        title: "Enterprise System Integration",
        subtitle: "Integrate complex enterprise systems with reliable, high-performance integration solutions. Our integration expertise spans legacy systems, cloud applications, and real-time data synchronization.",
        links: [
          "Enterprise service bus (ESB) & integration platforms",
          "Legacy system integration & mainframe connectivity",
          "Cloud-to-cloud & hybrid integration solutions",
          "Real-time data streaming & event-driven integration",
          "B2B integration with EDI & partner connectivity"
        ],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
      },
      {
        name: "Middleware",
        title: "Middleware & Message Broker Solutions",
        subtitle: "Implement robust middleware solutions that ensure reliable message delivery and system decoupling. Our expertise includes message queues, event streaming, and distributed system patterns.",
        links: [
          "Message queue implementation (RabbitMQ, Apache Kafka)",
          "Event streaming & real-time data processing",
          "Distributed transaction management & saga patterns",
          "Load balancing & high availability configurations",
          "Monitoring & observability for integration systems"
        ],
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
      },
      {
        name: "Management",
        title: "API Management & Governance",
        subtitle: "Establish comprehensive API governance and management practices that scale across your organization. Our solutions provide security, analytics, and developer experience optimization.",
        links: [
          "API gateway deployment & traffic management",
          "Developer onboarding & API marketplace creation",
          "API analytics, monitoring & performance optimization",
          "API lifecycle management & deprecation strategies",
          "Partner ecosystem development & monetization"
        ],
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80"
      }
    ],
    caseStudies: [
      {
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80",
        title: "Insurance Giant: Policy Management System Integration",
        description: "Integrated 25+ legacy systems for a major insurance company, enabling real-time policy processing and customer service. Reduced policy issuance time by 70% and improved customer satisfaction scores by 45%.",
        links: [
          "Legacy mainframe integration with modern APIs",
          "Real-time policy data synchronization",
          "Customer portal with unified data access",
          "Automated underwriting process integration"
        ]
      },
      {
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
        title: "E-commerce Platform: Partner Ecosystem Integration",
        description: "Built a comprehensive partner integration platform processing 10M+ API calls daily across 500+ partners. Enabled rapid partner onboarding, reduced integration time by 80%, and increased marketplace revenue by 150%.",
        links: [
          "Self-service partner onboarding & API provisioning",
          "Real-time inventory & pricing synchronization",
          "Advanced rate limiting & quota management",
          "Partner analytics dashboard & revenue tracking"
        ]
      }
    ]
  }
];