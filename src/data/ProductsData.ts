import { 
  BarChart3, 
  Shield, 
  Users,
  FileText,
  Filter,
  Download,
  AlertTriangle,
  CheckCircle,
  Gauge,
  LineChart,
  Monitor,
  Database
} from "lucide-react";

// Types for better structure
interface UseCase {
  title: string;
  description: string;
  industry: string;
  roi?: string;
}

interface Feature {
  title: string;
  description: string;
  icon: any;
  category: string;
  technicalDetail?: string;
}

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
  targetAudience?: string;
}

interface TechnicalSpecs {
  [key: string]: string;
}

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  industry?: string;
  companySize?: string;
}

interface ProductData {
  // Core Identity
  slug: string;
  name: string;
  icon: any;
  category: string;
  
  // Marketing Content
  shortDescription: string;
  description: string;
  heroTitle: string;
  heroDescription: string;
  heroImage?: string;
  
  // Value Proposition
  keyBenefits: string[];
  highlights: string[];
  
  // Use Cases & Applications
  useCases: UseCase[];
  
  // Technical Details
  features: Feature[];
  technicalSpecs: TechnicalSpecs;
  integrations: string[];
  
  // Commercial
  pricingTiers: PricingTier[];
  
  // Social Proof
  testimonials: Testimonial[];
  
  // Additional Fields for IT Consulting
  projectTimeline?: string;
  implementationPhases?: string[];
  supportLevel?: string;
  customizationLevel?: "Low" | "Medium" | "High";
  industryFocus?: string[];
}

export const ProductsData: ProductData[] = [{
  // Core Identity
  slug: "enterprise-analytics-platform",
  name: "Enterprise Analytics Platform",
  icon: BarChart3,
  category: "Analytics & Business Intelligence",
  
  // Marketing Content
  shortDescription: "Transform raw data into actionable business insights with comprehensive analytics and AI-powered intelligence.",
  description: "A complete data analytics and business intelligence solution that enables data-driven decision making across all business functions with real-time insights, predictive analytics, and enterprise-grade security.",
  heroTitle: "Transform Data into Strategic Advantage",
  heroDescription: "Unlock the full potential of your organization's data with our powerful analytics platform that delivers real-time insights, predictive analytics, and comprehensive business intelligence to drive informed decision-making and accelerate growth.",
  heroImage: "https://images.unsplash.com/photo-1755001244508-58fcc65797ec?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
  // Value Proposition
  keyBenefits: [
    "Reduce reporting time by 90% with automated insights",
    "Increase data accuracy by 95% with AI-powered validation",
    "Cut data preparation time by 75% with smart connectors",
    "Enable self-service analytics for all business users"
  ],
  highlights: [
    "Deployed for 500+ enterprises globally",
    "99.99% uptime SLA with enterprise support",
    "ROI achieved within 6 months on average",
    "GDPR, SOC 2, and HIPAA compliant",
    "Integration with 200+ business applications",
    "24/7 expert support and consulting services"
  ],
  
  // Use Cases & Applications
  useCases: [
    {
      title: "Sales Performance Optimization",
      description: "Real-time sales analytics with predictive forecasting to optimize team performance and identify revenue opportunities across regions and product lines.",
      industry: "Technology & SaaS",
      roi: "35% increase in sales productivity"
    },
    {
      title: "Financial Risk Management",
      description: "Advanced financial analytics with anomaly detection for regulatory compliance, fraud prevention, and risk assessment across all business operations.",
      industry: "Financial Services",
      roi: "60% reduction in compliance costs"
    },
    {
      title: "Supply Chain Intelligence",
      description: "End-to-end supply chain visibility with predictive analytics for inventory optimization, demand forecasting, and supplier performance management.",
      industry: "Manufacturing & Retail",
      roi: "25% reduction in inventory costs"
    },
    {
      title: "Customer Experience Analytics",
      description: "360-degree customer journey analysis with behavioral insights to optimize conversion funnels and improve customer retention rates.",
      industry: "E-commerce & Retail",
      roi: "40% improvement in customer lifetime value"
    }
  ],
  
  // Technical Details
  features: [
    {
      title: "Real-Time Data Processing",
      description: "Process streaming data with sub-second latency for instant insights and immediate decision-making capability.",
      icon: Gauge,
      category: "Performance",
      technicalDetail: "Handles up to 1M events/second with Apache Kafka integration"
    },
    {
      title: "AI-Powered Predictive Analytics",
      description: "Advanced machine learning algorithms for trend forecasting, anomaly detection, and behavioral prediction with 95% accuracy.",
      icon: LineChart,
      category: "Intelligence",
      technicalDetail: "Supports TensorFlow, PyTorch, and custom ML models"
    },
    {
      title: "Interactive Dashboards",
      description: "Create personalized dashboards with drag-and-drop interface and 100+ visualization options including charts, maps, and KPI widgets.",
      icon: Monitor,
      category: "Visualization",
      technicalDetail: "React-based responsive design with mobile optimization"
    },
    {
      title: "Automated Reporting Engine",
      description: "Schedule and distribute reports with customizable templates, smart alerts, and multi-format delivery options.",
      icon: FileText,
      category: "Automation",
      technicalDetail: "Supports PDF, Excel, PowerPoint, and web formats"
    },
    {
      title: "Enterprise Data Governance",
      description: "Complete data lineage tracking, access controls, audit trails, and compliance management for enterprise security requirements.",
      icon: Shield,
      category: "Security & Compliance",
      technicalDetail: "Role-based access control with SSO integration"
    },
    {
      title: "Advanced Data Filtering",
      description: "Complex multi-dimensional filtering with drill-down capabilities and saved filter sets for detailed data exploration.",
      icon: Filter,
      category: "Data Exploration",
      technicalDetail: "SQL-like query interface with visual query builder"
    },
    {
      title: "Seamless Data Integration",
      description: "Native connectors to 200+ data sources including databases, APIs, files, and cloud services with real-time synchronization.",
      icon: Database,
      category: "Integration",
      technicalDetail: "ETL/ELT pipelines with data transformation capabilities"
    },
    {
      title: "Collaboration & Sharing",
      description: "Team collaboration with commenting, annotation, sharing, and version control for analytics assets and insights.",
      icon: Users,
      category: "Collaboration",
      technicalDetail: "Slack, Teams, and email integration for notifications"
    }
  ],
  
  // Technical Specifications
  technicalSpecs: {
    "Data Processing": "Up to 1M records/second real-time processing",
    "Storage Capacity": "Unlimited cloud storage with data compression",
    "API Support": "REST, GraphQL, WebSocket APIs with SDKs",
    "Integration Connectors": "200+ pre-built connectors and custom API support",
    "Security & Compliance": "SOC 2 Type II, GDPR, HIPAA, PCI DSS compliant",
    "Performance SLA": "99.99% uptime with < 100ms query response time",
    "Deployment Options": "Cloud (AWS, Azure, GCP) or on-premises",
    "Supported Databases": "PostgreSQL, MySQL, MongoDB, Snowflake, BigQuery, Redshift",
    "Authentication": "SSO, SAML, OAuth 2.0, Active Directory integration",
    "Backup & Recovery": "Automated backups with point-in-time recovery"
  },
  
  // Integration Ecosystem
  integrations: [
    "Salesforce", "HubSpot", "Microsoft Office 365", "Google Workspace",
    "AWS Services", "Azure Services", "Google Cloud Platform",
    "Slack", "Microsoft Teams", "Zoom", "Tableau", "Power BI",
    "Snowflake", "Databricks", "PostgreSQL", "MySQL", "MongoDB",
    "SAP", "Oracle", "ServiceNow", "Jira", "Zendesk"
  ],
  
  // Commercial Structure
  pricingTiers: [
    {
      name: "Professional",
      price: "$2,500",
      period: "per month",
      description: "Perfect for small to medium businesses starting their analytics journey",
      features: [
        "Up to 10 users with role-based access",
        "5 data source connections",
        "Standard dashboard templates",
        "Email and chat support",
        "1M monthly data points processing",
        "Basic reporting and exports",
        "99.9% uptime SLA"
      ],
      cta: "Start 30-Day Trial",
      popular: false,
      targetAudience: "Small to medium businesses (50-200 employees)"
    },
    {
      name: "Enterprise",
      price: "$8,500",
      period: "per month",
      description: "Advanced analytics for growing organizations with complex data needs",
      features: [
        "Up to 50 users with advanced permissions",
        "Unlimited data source connections",
        "Advanced AI/ML analytics capabilities",
        "Priority phone and email support",
        "10M monthly data points processing",
        "Custom dashboard development",
        "API access and white-labeling",
        "Advanced security and audit features",
        "99.99% uptime SLA"
      ],
      cta: "Schedule Demo",
      popular: true,
      targetAudience: "Medium to large enterprises (200-2000 employees)"
    },
    {
      name: "Custom",
      price: "Custom Quote",
      period: "per month",
      description: "Tailored solution for large enterprises with specific requirements",
      features: [
        "Unlimited users and data sources",
        "Custom feature development",
        "Dedicated infrastructure and deployment",
        "24/7 premium support with SLA",
        "Unlimited data processing",
        "On-premise deployment option",
        "Custom integrations and APIs",
        "Advanced compliance features",
        "Dedicated customer success team",
        "Training and change management"
      ],
      cta: "Contact Sales",
      popular: false,
      targetAudience: "Large enterprises (2000+ employees)"
    }
  ],
  
  // Social Proof
  testimonials: [
    {
      quote: "This platform transformed our decision-making process. We reduced reporting time by 80% and gained insights we never had before. The ROI was evident within the first quarter.",
      author: "Sarah Johnson",
      position: "VP of Analytics",
      company: "TechFlow Solutions",
      industry: "Technology",
      companySize: "500+ employees"
    },
    {
      quote: "The predictive analytics capabilities helped us identify market opportunities 6 months in advance. Our sales team's efficiency improved dramatically with real-time insights.",
      author: "Michael Rodriguez",
      position: "Chief Data Officer",
      company: "GlobalTrade Inc.",
      industry: "Financial Services",
      companySize: "2000+ employees"
    },
    {
      quote: "Implementation was seamless and the support team was exceptional. We're now making data-driven decisions across all departments, not just IT.",
      author: "Dr. Lisa Chen",
      position: "Director of Operations",
      company: "MedTech Innovations",
      industry: "Healthcare",
      companySize: "1200+ employees"
    }
  ],
  
  // IT Consulting Specific Fields
  projectTimeline: "3-6 months implementation",
  implementationPhases: [
    "Discovery & Requirements Analysis (2-4 weeks)",
    "Data Architecture & Infrastructure Setup (4-6 weeks)",
    "Custom Development & Integration (6-8 weeks)",
    "Testing & Quality Assurance (2-3 weeks)",
    "Training & Change Management (2-3 weeks)",
    "Go-Live & Post-Launch Support (Ongoing)"
  ],
  supportLevel: "24/7 Premium Support with dedicated account management",
  customizationLevel: "High",
  industryFocus: [
    "Financial Services",
    "Healthcare",
    "Manufacturing",
    "Retail & E-commerce",
    "Technology",
    "Government"
  ]
}];

// Additional recommendations for IT Consulting Projects Page:

export const ProjectPageRecommendations = {
  essentialSections: [
    "Product Overview with clear value proposition",
    "Use Cases by industry with ROI metrics",
    "Technical specifications and architecture",
    "Implementation methodology and timeline",
    "Pricing with clear tier differentiation",
    "Client testimonials with specific outcomes",
    "Integration capabilities and ecosystem",
    "Support and maintenance offerings"
  ],
  
  keyMetrics: [
    "Implementation success rate",
    "Average ROI timeline",
    "Client retention rate",
    "Industry-specific case studies",
    "Technical performance benchmarks",
    "Support response times",
    "Security certifications",
    "Global deployment statistics"
  ],
  
  trustBuilders: [
    "Industry certifications and partnerships",
    "Security compliance badges",
    "Client logos and case studies",
    "Awards and recognition",
    "Technical whitepapers and resources",
    "Free trial or demo options",
    "Transparent pricing",
    "Detailed implementation methodology"
  ]
};