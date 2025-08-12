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
  HardDrive
} from "lucide-react";
import { IndustryData } from "@/types/industries";

// Main industries data structure
export const IndustriesData: IndustryData[] = [
  // 1. Financial Services
  {
    slug: "financial-services",
    name: "Financial Services",
    icon: Landmark,
    description: "Transform your financial services with cutting-edge technology solutions for banking, insurance, and fintech.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    heroTitle: "Financial Services Technology",
    heroDescription: "Secure, compliant, and innovative technology solutions for the financial sector.",
    features: [
      {
        title: "Core Banking Modernization",
        description: "Transform legacy systems with modern, cloud-native banking platforms.",
        features: [
          "Core banking systems",
          "Payment processing",
          "Digital wallets"
        ],
        image: "https://images.unsplash.com/photo-1554224155-3a58922a22c3?w=600&q=80"
      },
      {
        title: "Regulatory Technology",
        description: "Stay compliant with automated regulatory reporting and risk management.",
        features: [
          "Anti-money laundering",
          "KYC/AML compliance",
          "Fraud detection"
        ],
        image: "https://images.unsplash.com/photo-1554224155-3a58922a22c3?w=600&q=80"
      },
      {
        title: "Wealth Management",
        description: "Digital platforms for investment management and financial advisory.",
        features: [
          "Robo-advisors",
          "Portfolio management",
          "Financial planning"
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
        image: "https://images.unsplash.com/photo-1505751172876-fa186e64442f?w=600&q=80"
      },
      {
        title: "Telemedicine Platforms",
        description: "Secure virtual care solutions for remote patient consultations.",
        features: [
          "Video consultations",
          "Remote monitoring",
          "Prescription management"
        ],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25af1?w=600&q=80"
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
    slug: "retail",
    name: "Retail & E-commerce",
    icon: ShoppingCart,
    description: "Omnichannel retail solutions that drive sales and enhance customer experiences.",
    heroImage: "https://images.unsplash.com/photo-1607082349565-0022eeddd58e?auto=format&fit=crop&w=1200&q=80",
    heroTitle: "Retail Technology Solutions",
    heroDescription: "Transforming retail operations with innovative technology and data-driven insights.",
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
    name: "Manufacturing",
    icon: Factory,
    description: "Industry 4.0 solutions for smart factories and connected manufacturing.",
    heroImage: "https://images.unsplash.com/photo-1531403007395-8c9302175e0c?auto=format&fit=crop&w=1200&q=80",
    heroTitle: "Smart Manufacturing Solutions",
    heroDescription: "Driving efficiency and innovation in manufacturing with cutting-edge technology.",
    features: [
      {
        title: "Industrial IoT",
        description: "Connected devices and sensors for real-time monitoring and control.",
        features: [
          "Predictive maintenance",
          "Asset tracking",
          "Quality control"
        ],
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80"
      },
      {
        title: "Supply Chain Optimization",
        description: "End-to-end visibility and optimization of manufacturing supply chains.",
        features: [
          "Demand forecasting",
          "Inventory optimization",
          "Supplier collaboration"
        ],
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
      },
      {
        title: "Quality Management",
        description: "Advanced quality control and assurance systems.",
        features: [
          "Automated inspection",
          "Defect detection",
          "Compliance tracking"
        ],
        image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&q=80"
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
      title: "Manufacturing Technology Solutions",
      description: "Comprehensive technology solutions for modern manufacturing.",
      items: [
        {
          title: "Smart Factory",
          description: "IoT and AI-powered manufacturing solutions.",
          icon: Cpu
        },
        {
          title: "Quality Management",
          description: "Advanced quality control and assurance.",
          icon: CheckCircle
        },
        {
          title: "Supply Chain",
          description: "End-to-end supply chain visibility.",
          icon: Package
        },
        {
          title: "Asset Management",
          description: "Comprehensive asset tracking and maintenance.",
          icon: HardDrive
        }
      ]
    }
  },
  
  // 5. Education & E-learning
  {
    slug: "education",
    name: "Education Technology",
    icon: School,
    description: "Innovative learning platforms and educational technology solutions.",
    heroImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    heroTitle: "Education Technology Solutions",
    heroDescription: "Transforming education with technology that enhances learning experiences.",
    features: [
      {
        title: "Learning Management Systems",
        description: "Comprehensive platforms for managing and delivering educational content.",
        features: [
          "Course management",
          "Student tracking",
          "Assessment tools"
        ],
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80"
      },
      {
        title: "Virtual Classrooms",
        description: "Interactive online learning environments for remote education.",
        features: [
          "Live video sessions",
          "Collaborative tools",
          "Content sharing"
        ],
        image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80"
      },
      {
        title: "Student Analytics",
        description: "Data-driven insights to improve student outcomes and engagement.",
        features: [
          "Performance tracking",
          "Early warning systems",
          "Personalized learning"
        ],
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80"
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
      title: "Education Technology Solutions",
      description: "Comprehensive technology solutions for educational institutions.",
      items: [
        {
          title: "LMS Platforms",
          description: "Learning management systems for all education levels.",
          icon: BookOpen
        },
        {
          title: "Virtual Classrooms",
          description: "Interactive online learning environments.",
          icon: Video
        },
        {
          title: "Student Information",
          description: "Comprehensive student data management.",
          icon: User
        },
        {
          title: "Analytics & Reporting",
          description: "Data-driven insights for education.",
          icon: BarChart2
        }
      ]
    }
  },
  
  // 6. Government & Public Sector
  {
    slug: "government",
    name: "Government",
    icon: Shield,
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
  }
];
