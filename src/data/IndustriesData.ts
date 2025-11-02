import {
  Landmark,
  HeartPulse,
  Truck,
  Factory,
  ShoppingCart,
  School,
  Shield,
  Leaf,
  Plane,
  Film,
  Home,
  Database,
  Server,
  Lock,
  Smartphone,
  BarChart2,
  Cpu,
  Zap,
  Code,
  Users,
  Package,
  Globe,
  Wrench,
  Award,
  Briefcase,
  ClipboardCheck,
  TrendingUp,
  FileText,
  Clock,
  Mail,
  MessageSquare,
  Cloud,
  GitBranch,
  Headphones,
  Key,
  Layout,
  Monitor,
  PieChart,
  Settings,
  Tag,
  Target,
  Terminal,
  User,
  Building2,
  Banknote,
  Laptop,
  Network,
  ShieldCheck,
  BarChart3,
  FileCheck,
  Smartphone as MobileIcon,
  ServerCrash,
  CloudLightning,
  DatabaseBackup,
  Cpu as CpuIcon,
  Shield as ShieldIcon,
  Zap as ZapIcon,
  Video,
  CreditCard,
  Building,
  TestTube2,
  Microscope,
  Pill,
  Stethoscope,
  Syringe,
  Activity,
  ShoppingBag,
  Store,
  Percent,
  PackageSearch,
  ShoppingBasket,
  Gauge,
  Drill,
  Hammer,
  Cog,
  HardHat,
  EyeOff,
  Fingerprint,
  UserCheck,
  UserX,
  UserPlus,
  UserMinus,
  UserCog,
  BookOpen,
  CheckCircle,
  HardDrive,
  PhoneCall,
  Lightbulb,
  Tractor,
  Scale,
  Coffee
} from "lucide-react";
import { IndustryData } from "@/types/industries";

// Main industries data structure
export const IndustriesData: IndustryData[] = [
  // 1. Financial Services
  {
    slug: "financial-services",
    name: "Financial Services & Banking",
    icon: Landmark,
    description: "Accelerate digital transformation in banking, insurance, and capital markets with our secure, regulatory-compliant technology solutions that drive operational excellence and customer engagement.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    heroTitle: "Digital Transformation for Financial Services",
    heroDescription: "Future-proof your financial institution with our strategic technology solutions that balance innovation with regulatory compliance and security.",
    features: [
      {
        title: "Core Banking Modernization",
        description: "Transform legacy infrastructure with cloud-native, microservices-based core banking platforms that enable real-time processing and scalability.",
        features: [
          "Cloud-native core banking solutions",
          "Real-time payment processing engines",
          "Omnichannel digital banking platforms"
        ],
        image: "https://images.unsplash.com/photo-1554224155-3a58922a22c3?w=600&q=80"
      },
      {
        title: "Regulatory Technology (RegTech)",
        description: "Automate compliance and risk management with AI-powered regulatory technology solutions that adapt to evolving financial regulations.",
        features: [
          "AI/ML-driven AML/CFT monitoring",
          "Automated KYC/onboarding workflows",
          "Real-time fraud detection and prevention"
        ],
        image: "https://images.unsplash.com/photo-1554224155-3a58922a22c3?w=600&q=80"
      },
      {
        title: "Wealth & Asset Management",
        description: "Next-generation digital platforms that transform wealth management through automation and personalization.",
        features: [
          "AI-driven robo-advisory platforms",
          "Unified wealth management dashboards",
          "Automated portfolio rebalancing"
        ],
        image: "https://images.unsplash.com/photo-1554224155-3a58922a22c3?w=600&q=80"
      }
    ],
    caseStudies: [
      {
        title: "Digital Banking Transformation",
        description: "Modernized core banking infrastructure for a leading bank, reducing transaction processing time by 70%.",
        results: [
          "70% faster transactions",
          "40% cost reduction",
          "99.99% system availability"
        ],
        image: "https://images.unsplash.com/photo-1554224155-3a58922a22c3?w=400&q=80"
      },
      {
        title: "Regulatory Compliance Platform",
        description: "Built a comprehensive compliance platform for a global financial institution, reducing audit findings by 85%.",
        results: [
          "85% reduction in audit findings",
          "90% faster reporting",
          "100% audit readiness"
        ],
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&q=80"
      }
    ],
    solutions: {
      title: "Strategic Financial Technology Solutions",
      description: "Leverage our deep domain expertise and innovative technology stack to solve complex financial services challenges and drive sustainable growth.",
      items: [
        {
          title: "Digital Banking Transformation",
          description: "End-to-end digital transformation services for traditional and challenger banks, from strategy to implementation.",
          icon: Landmark
        },
        {
          title: "Next-Gen Payment Solutions",
          description: "Modern payment architectures supporting real-time processing, blockchain, and cross-border transactions.",
          icon: CreditCard
        },
        {
          title: "Wealth & Asset Management",
          description: "AI-powered platforms for personalized investment strategies and automated portfolio management.",
          icon: BarChart3
        },
        {
          title: "Regulatory & Risk Technology",
          description: "End-to-end compliance solutions powered by AI and advanced analytics to mitigate risk and ensure regulatory adherence.",
          icon: ShieldCheck
        }
      ]
    }
  },
  // 2. Healthcare & Life Sciences
  {
    slug: "healthcare",
    name: "Healthcare & Life Sciences",
    icon: HeartPulse,
    description: "Innovative technology solutions for healthcare providers, pharma, and medical research.",
    heroImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    heroTitle: "Healthcare Technology Solutions",
    heroDescription: "Transforming healthcare delivery with secure, compliant, and patient-centric technology.",
    features: [
      {
        title: "Electronic Health Records (EHR)",
        description: "Comprehensive EHR solutions for better patient care coordination.",
        features: [
          "Interoperable health records",
          "Clinical decision support",
          "Patient portals"
        ],
        image: "/health-industry.jpg"
      },
      {
        title: "Telemedicine Platforms",
        description: "Secure virtual care solutions for remote patient consultations.",
        features: [
          "Video consultations",
          "Remote monitoring",
          "Prescription management"
        ],
        image: "/health-industry2.jpg"
      },
      {
        title: "Healthcare Analytics",
        description: "Data-driven insights for improved patient outcomes and operational efficiency.",
        features: [
          "Population health management",
          "Clinical analytics",
          "Predictive modeling"
        ],
        image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=600&q=80"
      }
    ],
    caseStudies: [
      {
        title: "Hospital Digital Transformation",
        description: "Implemented a comprehensive digital health platform for a hospital network, reducing patient wait times by 45%.",
        results: [
          "45% reduction in wait times",
          "30% increase in patient satisfaction",
          "Improved care coordination"
        ],
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80"
      },
      {
        title: "Pharma Research Platform",
        description: "Developed a clinical trial management system that accelerated drug development by 30%.",
        results: [
          "30% faster drug development",
          "Improved data accuracy",
          "Regulatory compliance"
        ],
        image: "https://images.unsplash.com/photo-1631549916768-4119c2cbfae3?w=400&q=80"
      }
    ],
    solutions: {
      title: "Healthcare Technology Solutions",
      description: "Comprehensive technology solutions for the healthcare and life sciences industry.",
      items: [
        {
          title: "EHR & EMR Systems",
          description: "Integrated electronic health record solutions for better patient care.",
          icon: HeartPulse
        },
        {
          title: "Telehealth Platforms",
          description: "Secure and scalable virtual care solutions.",
          icon: Video
        },
        {
          title: "Healthcare Analytics",
          description: "Data-driven insights for improved healthcare delivery.",
          icon: BarChart2
        },
        {
          title: "Regulatory Compliance",
          description: "Solutions to meet healthcare regulations and standards.",
          icon: ShieldCheck
        }
      ]
    }
  },
  // 3. Retail & E-commerce
  {
    slug: "telecommunications",
    name: "Telecommunications",
    icon: PhoneCall,
    description: "Drive digital transformation in telecommunications with next-gen networks, 5G, and customer experience solutions that redefine connectivity.",
    heroImage: "/retail.jpg",
    heroTitle: "Telecom Digital Transformation",
    heroDescription: "Empowering telecom operators with innovative technology solutions that enhance network performance, customer experience, and operational efficiency.",
    features: [
      {
        title: "E-commerce Platforms",
        description: "Scalable online shopping experiences that convert visitors into customers.",
        features: [
          "Mobile-optimized stores",
          "Personalized recommendations",
          "Seamless checkout"
        ],
        image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&q=80"
      },
      {
        title: "Inventory Management",
        description: "Real-time inventory tracking and optimization across all channels.",
        features: [
          "Automated stock control",
          "Demand forecasting",
          "Vendor management"
        ],
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80"
      }
    ],
    caseStudies: [
      {
        title: "Omnichannel Retail Platform",
        description: "Created a unified commerce platform for a national retailer, increasing online sales by 120%.",
        results: [
          "120% increase in online sales",
          "Seamless in-store pickup",
          "Improved inventory accuracy"
        ],
        image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&q=80"
      }
    ],
    solutions: {
      title: "Retail Technology Solutions",
      description: "End-to-end technology solutions for modern retail and e-commerce businesses.",
      items: [
        {
          title: "E-commerce Platforms",
          description: "Custom online stores with seamless shopping experiences.",
          icon: ShoppingCart
        },
        {
          title: "POS Systems",
          description: "Modern point-of-sale solutions for in-store and online sales.",
          icon: CreditCard
        },
        {
          title: "Inventory Management",
          description: "Real-time inventory tracking and optimization.",
          icon: Package
        },
        {
          title: "Customer Analytics",
          description: "Data-driven insights to understand customer behavior.",
          icon: BarChart3
        }
      ]
    }
  },
  // 4. Manufacturing & Industrial
  {
    slug: "manufacturing",
    name: "Industrial Manufacturing",
    icon: Factory,
    description: "Accelerate your Industry 4.0 transformation with intelligent manufacturing solutions that drive efficiency, quality, and supply chain resilience.",
    heroImage: "/manufacture.jpg",
    heroTitle: "Industry 4.0 Digital Transformation",
    heroDescription: "Transform manufacturing operations with our integrated suite of smart factory solutions that connect people, processes, and machines.",
    features: [
      {
        title: "Industrial IoT & Edge Computing",
        description: "Deploy scalable IIoT solutions that provide real-time visibility and control across your manufacturing operations.",
        features: [
          "Predictive maintenance systems",
          "Edge analytics for real-time decision making",
          "Connected worker solutions"
        ],
        image: "/manufacture.jpg"
      },
      {
        title: "Smart Factory Integration",
        description: "Implement AI-driven automation and digital twin technology to optimize production efficiency and quality.",
        features: [
          "AI-powered quality inspection",
          "Automated guided vehicles (AGVs)",
          "Digital twin simulation"
        ],
        image: "/manufacture2.jpg"
      },
      {
        title: "Digital Supply Chain",
        description: "Transform your supply chain with end-to-end visibility and intelligent planning capabilities.",
        features: [
          "AI-driven demand forecasting",
          "Blockchain for supply chain transparency",
          "Automated inventory optimization"
        ],
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80"
      }
    ],
    caseStudies: [
      {
        title: "Smart Factory Implementation",
        description: "Transformed a traditional factory with IoT and AI, reducing downtime by 40%.",
        results: [
          "40% reduction in downtime",
          "25% increase in production efficiency",
          "Real-time quality control"
        ],
        image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=400&q=80"
      },
      {
        title: "Supply Chain Digitalization",
        description: "End-to-end supply chain visibility for a global manufacturer.",
        results: [
          "30% reduction in lead times",
          "20% inventory reduction",
          "Improved supplier collaboration"
        ],
        image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=400&q=80"
      }
    ],
    solutions: {
      title: "Smart Manufacturing Solutions",
      description: "End-to-end digital transformation services that empower manufacturers to achieve operational excellence and competitive advantage.",
      items: [
        {
          title: "Industry 4.0 Roadmap",
          description: "Strategic planning and implementation of digital manufacturing initiatives.",
          icon: Factory
        },
        {
          title: "IIoT & Edge Computing",
          description: "Connected factory solutions that drive real-time operational intelligence.",
          icon: Cpu
        },
        {
          title: "Digital Supply Chain",
          description: "End-to-end supply chain visibility and optimization.",
          icon: Network
        },
        {
          title: "Advanced Analytics",
          description: "AI/ML-powered insights for predictive maintenance and quality control.",
          icon: BarChart3
        }
      ]
    }
  },

// ... (rest of the code remains the same)
  // 5. Education & E-learning
  {
    slug: "education",
    name: "Education Technology",
    icon: School,
    description: "Transform educational experiences with cutting-edge learning technologies that enable personalized, accessible, and data-driven learning environments.",
    heroImage: "/educate2.jpg",
    heroTitle: "Digital Transformation in Education",
    heroDescription: "Empower educators and learners with innovative technology solutions that enhance engagement, accessibility, and learning outcomes.",
    features: [
      {
        title: "Next-Gen Learning Platforms",
        description: "Scalable, cloud-based learning management systems that support diverse educational models and pedagogies.",
        features: [
          "AI-powered personalized learning paths",
          "Competency-based education frameworks",
          "Integrated learning analytics dashboards"
        ],
        image: "/educate.jpg"
      },
      {
        title: "Immersive Learning Experiences",
        description: "Leverage cutting-edge technologies to create engaging, interactive learning environments.",
        features: [
          "Virtual and augmented reality (VR/AR) applications",
          "Interactive video learning platforms",
          "Gamified learning experiences"
        ],
        image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80"
      },
      {
        title: "Learning Analytics & Insights",
        description: "Data-driven decision making for educational institutions and corporate learning.",
        features: [
          "Predictive analytics for student success",
          "Learning experience analytics",
          "ROI measurement for training programs"
        ],
        image: "https://images.unsplash.com/photo-1495465798138-718f86d1a4bc?w=600&q=80"
      }
    ],
    caseStudies: [
      {
        title: "University Digital Transformation",
        description: "Deployed a campus-wide learning management system serving 50,000+ students.",
        results: [
          "Improved student engagement",
          "Centralized learning resources",
          "Enhanced collaboration"
        ],
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80"
      },
      {
        title: "K-12 E-learning Platform",
        description: "Developed a customized e-learning platform for K-12 education.",
        results: [
          "Increased accessibility",
          "Personalized learning paths",
          "Parent-teacher collaboration"
        ],
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0a?w=400&q=80"
      }
    ],
    solutions: {
      title: "Comprehensive EdTech Solutions",
      description: "End-to-end technology solutions that address the evolving needs of educational institutions and corporate learning environments.",
      items: [
        {
          title: "Digital Learning Platforms",
          description: "Enterprise-grade LMS and learning experience platforms tailored to your needs.",
          icon: School
        },
        {
          title: "Content Development",
          description: "Interactive, accessible, and engaging digital learning content.",
          icon: BookOpen
        },
        {
          title: "Immersive Technologies",
          description: "VR/AR and simulation-based learning experiences.",
          icon: Monitor
        },
        {
          title: "Learning Intelligence",
          description: "Advanced analytics for measuring and improving learning outcomes.",
          icon: BarChart2
        }
      ]
    }
  },

  // 6. Government & Public Sector
  {
    slug: "government",
    name: "Government & Public Sector",
    icon: Shield,
    description: "Transform public service delivery with secure, scalable, and citizen-centric digital solutions that enhance operational efficiency and trust in government.",
    heroImage: "/educate2.jpg",
    heroTitle: "Digital Government Transformation",
    heroDescription: "Empowering public sector organizations with innovative technology solutions that drive efficiency, transparency, and citizen engagement.",
    features: [
      {
        title: "Digital Services",  
        description: "Citizen-facing digital services that improve accessibility and efficiency.",
        features: [
          "Online applications",
          "Permit processing",
          "Service portals"
        ],
        image: "/educate.jpg"
      },
      {
        title: "Cybersecurity",
        description: "Robust security solutions to protect sensitive government data.",
        features: [
          "Threat detection",
          "Incident response",
          "Compliance management"
        ],
        image: "/manufacture.jpg"
      },
      {
        title: "Data Management",
        description: "Secure and efficient management of government data assets.",
        features: [
          "Data governance",
          "Records management",
          "Open data initiatives"
        ],
        image: "/manufacture2.jpg"
      }
    ],
    caseStudies: [
      {
        title: "Digital Government Portal",
        description: "Developed a centralized portal for government services, reducing processing times by 60%.",
        results: [
          "60% faster service delivery",
          "Improved citizen satisfaction",
          "Reduced operational costs"
        ],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&q=80"
      },
      {
        title: "Cybersecurity Modernization",
        description: "Implemented a comprehensive cybersecurity framework for a state government.",
        results: [
          "99.9% threat detection rate",
          "Reduced incident response time",
          "Regulatory compliance"
        ],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80"
      }
    ],
    solutions: {
      title: "Government Technology Solutions",
      description: "Comprehensive technology solutions for the public sector.",
      items: [
        {
          title: "Digital Services",
          description: "Citizen-facing digital platforms and services.",
          icon: Globe
        },
        {
          title: "Cybersecurity",
          description: "Protecting sensitive government data and systems.",
          icon: Shield
        },
        {
          title: "Data Management",
          description: "Secure and efficient government data solutions.",
          icon: Database
        },
        {
          title: "Cloud Solutions",
          description: "Secure cloud infrastructure for government agencies.",
          icon: Cloud
        }
      ]
    }
  },
  // Logistics & Transportation
  {
    slug: "logistics",
    name: "Logistics & Transportation",
    icon: Truck,
    description: "Secure and compliant technology solutions for government agencies.",
    heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    heroTitle: "Government Technology Solutions",
    heroDescription: "Modernizing government services with secure, citizen-centric technology.",
    features: [
      {
        title: "Digital Services",
        description: "Citizen-facing digital services that improve accessibility and efficiency.",
        features: [
          "Online applications",
          "Permit processing",
          "Service portals"
        ],
        image: "/educate2.jpg"
      },
      {
        title: "Cybersecurity",
        description: "Robust security solutions to protect sensitive government data.",
        features: [
          "Threat detection",
          "Incident response",
          "Compliance management"
        ],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80"
      },
      {
        title: "Data Management",
        description: "Secure and efficient management of government data assets.",
        features: [
          "Data governance",
          "Records management",
          "Open data initiatives"
        ],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80"
      }
    ],
    caseStudies: [
      {
        title: "Digital Government Portal",
        description: "Developed a centralized portal for government services, reducing processing times by 60%.",
        results: [
          "60% faster service delivery",
          "Improved citizen satisfaction",
          "Reduced operational costs"
        ],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&q=80"
      },
      {
        title: "Cybersecurity Modernization",
        description: "Implemented a comprehensive cybersecurity framework for a state government.",
        results: [
          "99.9% threat detection rate",
          "Reduced incident response time",
          "Regulatory compliance"
        ],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80"
      }
    ],
    solutions: {
      title: "Government Technology Solutions",
      description: "Comprehensive technology solutions for the public sector.",
      items: [
        {
          title: "Digital Services",
          description: "Citizen-facing digital platforms and services.",
          icon: Globe
        },
        {
          title: "Cybersecurity",
          description: "Protecting sensitive government data and systems.",
          icon: Shield
        },
        {
          title: "Data Management",
          description: "Secure and efficient government data solutions.",
          icon: Database
        },
        {
          title: "Cloud Solutions",
          description: "Secure cloud infrastructure for government agencies.",
          icon: Cloud
        }
      ]
    }
  },
  {
    slug: "energy",
    name: "Energy & Utilities",
    icon: Lightbulb,
    description: "Secure and compliant technology solutions for government agencies.",
    heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    heroTitle: "Government Technology Solutions",
    heroDescription: "Modernizing government services with secure, citizen-centric technology.",
    features: [
      {
        title: "Digital Services",
        description: "Citizen-facing digital services that improve accessibility and efficiency.",
        features: [
          "Online applications",
          "Permit processing",
          "Service portals"
        ],
        image: "/retail.jpg"
      },
      {
        title: "Cybersecurity",
        description: "Robust security solutions to protect sensitive government data.",
        features: [
          "Threat detection",
          "Incident response",
          "Compliance management"
        ],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80"
      },
      {
        title: "Data Management",
        description: "Secure and efficient management of government data assets.",
        features: [
          "Data governance",
          "Records management",
          "Open data initiatives"
        ],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80"
      }
    ],
    caseStudies: [
      {
        title: "Digital Government Portal",
        description: "Developed a centralized portal for government services, reducing processing times by 60%.",
        results: [
          "60% faster service delivery",
          "Improved citizen satisfaction",
          "Reduced operational costs"
        ],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&q=80"
      },
      {
        title: "Cybersecurity Modernization",
        description: "Implemented a comprehensive cybersecurity framework for a state government.",
        results: [
          "99.9% threat detection rate",
          "Reduced incident response time",
          "Regulatory compliance"
        ],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80"
      }
    ],
    solutions: {
      title: "Government Technology Solutions",
      description: "Comprehensive technology solutions for the public sector.",
      items: [
        {
          title: "Digital Services",
          description: "Citizen-facing digital platforms and services.",
          icon: Globe
        },
        {
          title: "Cybersecurity",
          description: "Protecting sensitive government data and systems.",
          icon: Shield
        },
        {
          title: "Data Management",
          description: "Secure and efficient government data solutions.",
          icon: Database
        },
        {
          title: "Cloud Solutions",
          description: "Secure cloud infrastructure for government agencies.",
          icon: Cloud
        }
      ]
    }
  },
  {
    slug: "media",
    name: "Media & Entertainment",
    icon: Film,
    description: "Secure and compliant technology solutions for government agencies.",
    heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    heroTitle: "Government Technology Solutions",
    heroDescription: "Modernizing government services with secure, citizen-centric technology.",
    features: [
      {
        title: "Digital Services",
        description: "Citizen-facing digital services that improve accessibility and efficiency.",
        features: [
          "Online applications",
          "Permit processing",
          "Service portals"
        ],
        image: "/retail.jpg"
      },
      {
        title: "Cybersecurity",
        description: "Robust security solutions to protect sensitive government data.",
        features: [
          "Threat detection",
          "Incident response",
          "Compliance management"
        ],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80"
      },
      {
        title: "Data Management",
        description: "Secure and efficient management of government data assets.",
        features: [
          "Data governance",
          "Records management",
          "Open data initiatives"
        ],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80"
      }
    ],
    caseStudies: [
      {
        title: "Digital Government Portal",
        description: "Developed a centralized portal for government services, reducing processing times by 60%.",
        results: [
          "60% faster service delivery",
          "Improved citizen satisfaction",
          "Reduced operational costs"
        ],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&q=80"
      },
      {
        title: "Cybersecurity Modernization",
        description: "Implemented a comprehensive cybersecurity framework for a state government.",
        results: [
          "99.9% threat detection rate",
          "Reduced incident response time",
          "Regulatory compliance"
        ],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80"
      }
    ],
    solutions: {
      title: "Government Technology Solutions",
      description: "Comprehensive technology solutions for the public sector.",
      items: [
        {
          title: "Digital Services",
          description: "Citizen-facing digital platforms and services.",
          icon: Globe
        },
        {
          title: "Cybersecurity",
          description: "Protecting sensitive government data and systems.",
          icon: Shield
        },
        {
          title: "Data Management",
          description: "Secure and efficient government data solutions.",
          icon: Database
        },
        {
          title: "Cloud Solutions",
          description: "Secure cloud infrastructure for government agencies.",
          icon: Cloud
        }
      ]
    }
  },
  {
    slug: "agriculture",
    name: "Agriculture",
    icon: Tractor,
    description: "Secure and compliant technology solutions for government agencies.",
    heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    heroTitle: "Government Technology Solutions",
    heroDescription: "Modernizing government services with secure, citizen-centric technology.",
    features: [
      {
        title: "Digital Services",
        description: "Citizen-facing digital services that improve accessibility and efficiency.",
        features: [
          "Online applications",
          "Permit processing",
          "Service portals"
        ],
        image: "/retail.jpg"
      },
      {
        title: "Cybersecurity",
        description: "Robust security solutions to protect sensitive government data.",
        features: [
          "Threat detection",
          "Incident response",
          "Compliance management"
        ],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80"
      },
      {
        title: "Data Management",
        description: "Secure and efficient management of government data assets.",
        features: [
          "Data governance",
          "Records management",
          "Open data initiatives"
        ],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80"
      }
    ],
    caseStudies: [
      {
        title: "Digital Government Portal",
        description: "Developed a centralized portal for government services, reducing processing times by 60%.",
        results: [
          "60% faster service delivery",
          "Improved citizen satisfaction",
          "Reduced operational costs"
        ],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&q=80"
      },
      {
        title: "Cybersecurity Modernization",
        description: "Implemented a comprehensive cybersecurity framework for a state government.",
        results: [
          "99.9% threat detection rate",
          "Reduced incident response time",
          "Regulatory compliance"
        ],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80"
      }
    ],
    solutions: {
      title: "Government Technology Solutions",
      description: "Comprehensive technology solutions for the public sector.",
      items: [
        {
          title: "Digital Services",
          description: "Citizen-facing digital platforms and services.",
          icon: Globe
        },
        {
          title: "Cybersecurity",
          description: "Protecting sensitive government data and systems.",
          icon: Shield
        },
        {
          title: "Data Management",
          description: "Secure and efficient government data solutions.",
          icon: Database
        },
        {
          title: "Cloud Solutions",
          description: "Secure cloud infrastructure for government agencies.",
          icon: Cloud
        }
      ]
    }
  },
  {
    slug: "legal",
    name: "Legal",
    icon: Scale,
    description: "Secure and compliant technology solutions for government agencies.",
    heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    heroTitle: "Government Technology Solutions",
    heroDescription: "Modernizing government services with secure, citizen-centric technology.",
    features: [
      {
        title: "Digital Services",
        description: "Citizen-facing digital services that improve accessibility and efficiency.",
        features: [
          "Online applications",
          "Permit processing",
          "Service portals"
        ],
        image: "https://images.unsplash.com/photo-1601584357456-112d7c8ae43d?w=600&q=80"
      },
      {
        title: "Cybersecurity",
        description: "Robust security solutions to protect sensitive government data.",
        features: [
          "Threat detection",
          "Incident response",
          "Compliance management"
        ],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80"
      },
      {
        title: "Data Management",
        description: "Secure and efficient management of government data assets.",
        features: [
          "Data governance",
          "Records management",
          "Open data initiatives"
        ],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80"
      }
    ],
    caseStudies: [
      {
        title: "Digital Government Portal",
        description: "Developed a centralized portal for government services, reducing processing times by 60%.",
        results: [
          "60% faster service delivery",
          "Improved citizen satisfaction",
          "Reduced operational costs"
        ],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&q=80"
      },
      {
        title: "Cybersecurity Modernization",
        description: "Implemented a comprehensive cybersecurity framework for a state government.",
        results: [
          "99.9% threat detection rate",
          "Reduced incident response time",
          "Regulatory compliance"
        ],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80"
      }
    ],
    solutions: {
      title: "Government Technology Solutions",
      description: "Comprehensive technology solutions for the public sector.",
      items: [
        {
          title: "Digital Services",
          description: "Citizen-facing digital platforms and services.",
          icon: Globe
        },
        {
          title: "Cybersecurity",
          description: "Protecting sensitive government data and systems.",
          icon: Shield
        },
        {
          title: "Data Management",
          description: "Secure and efficient government data solutions.",
          icon: Database
        },
        {
          title: "Cloud Solutions",
          description: "Secure cloud infrastructure for government agencies.",
          icon: Cloud
        }
      ]
    }
  },
  {
    slug: "hospitality",
    name: "Hospitality & Tourism",
    icon: Coffee,
    description: "Secure and compliant technology solutions for government agencies.",
    heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    heroTitle: "Government Technology Solutions",
    heroDescription: "Modernizing government services with secure, citizen-centric technology.",
    features: [
      {
        title: "Digital Services",
        description: "Citizen-facing digital services that improve accessibility and efficiency.",
        features: [
          "Online applications",
          "Permit processing",
          "Service portals"
        ],
        image: "https://images.unsplash.com/photo-1601584357456-112d7c8ae43d?w=600&q=80"
      },
      {
        title: "Cybersecurity",
        description: "Robust security solutions to protect sensitive government data.",
        features: [
          "Threat detection",
          "Incident response",
          "Compliance management"
        ],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80"
      },
      {
        title: "Data Management",
        description: "Secure and efficient management of government data assets.",
        features: [
          "Data governance",
          "Records management",
          "Open data initiatives"
        ],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80"
      }
    ],
    caseStudies: [
      {
        title: "Digital Government Portal",
        description: "Developed a centralized portal for government services, reducing processing times by 60%.",
        results: [
          "60% faster service delivery",
          "Improved citizen satisfaction",
          "Reduced operational costs"
        ],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&q=80"
      },
      {
        title: "Cybersecurity Modernization",
        description: "Implemented a comprehensive cybersecurity framework for a state government.",
        results: [
          "99.9% threat detection rate",
          "Reduced incident response time",
          "Regulatory compliance"
        ],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80"
      }
    ],
    solutions: {
      title: "Government Technology Solutions",
      description: "Comprehensive technology solutions for the public sector.",
      items: [
        {
          title: "Digital Services",
          description: "Citizen-facing digital platforms and services.",
          icon: Globe
        },
        {
          title: "Cybersecurity",
          description: "Protecting sensitive government data and systems.",
          icon: Shield
        },
        {
          title: "Data Management",
          description: "Secure and efficient government data solutions.",
          icon: Database
        },
        {
          title: "Cloud Solutions",
          description: "Secure cloud infrastructure for government agencies.",
          icon: Cloud
        }
      ]
    }
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: Home,
    description: "Secure and compliant technology solutions for government agencies.",
    heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    heroTitle: "Government Technology Solutions",
    heroDescription: "Modernizing government services with secure, citizen-centric technology.",
    features: [
      {
        title: "Digital Services",
        description: "Citizen-facing digital services that improve accessibility and efficiency.",
        features: [
          "Online applications",
          "Permit processing",
          "Service portals"
        ],
        image: "https://images.unsplash.com/photo-1601584357456-112d7c8ae43d?w=600&q=80"
      },
      {
        title: "Cybersecurity",
        description: "Robust security solutions to protect sensitive government data.",
        features: [
          "Threat detection",
          "Incident response",
          "Compliance management"
        ],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80"
      },
      {
        title: "Data Management",
        description: "Secure and efficient management of government data assets.",
        features: [
          "Data governance",
          "Records management",
          "Open data initiatives"
        ],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80"
      }
    ],
    caseStudies: [
      {
        title: "Digital Government Portal",
        description: "Developed a centralized portal for government services, reducing processing times by 60%.",
        results: [
          "60% faster service delivery",
          "Improved citizen satisfaction",
          "Reduced operational costs"
        ],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&q=80"
      },
      {
        title: "Cybersecurity Modernization",
        description: "Implemented a comprehensive cybersecurity framework for a state government.",
        results: [
          "99.9% threat detection rate",
          "Reduced incident response time",
          "Regulatory compliance"
        ],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80"
      }
    ],
    solutions: {
      title: "Government Technology Solutions",
      description: "Comprehensive technology solutions for the public sector.",
      items: [
        {
          title: "Digital Services",
          description: "Citizen-facing digital platforms and services.",
          icon: Globe
        },
        {
          title: "Cybersecurity",
          description: "Protecting sensitive government data and systems.",
          icon: Shield
        },
        {
          title: "Data Management",
          description: "Secure and efficient government data solutions.",
          icon: Database
        },
        {
          title: "Cloud Solutions",
          description: "Secure cloud infrastructure for government agencies.",
          icon: Cloud
        }
      ]
    }
  },
];
