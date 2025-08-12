import { 
  BarChart3, 
  Smartphone, 
  Cloud, 
  Zap, 
  Shield, 
  Database, 
  Code, 
  Server, 
  Globe, 
  Lock, 
  Cpu, 
  ZapOff,
  MessageSquare,
  Users,
  FileText,
  Settings,
  Layers,
  GitBranch,
  Monitor,
  Smartphone as Mobile,
  CloudRain,
  Box,
  GitMerge,
  HardDrive,
  Network,
  Terminal,
  Wifi,
  Bell,
  BarChart2,
  PieChart,
  LineChart,
  TrendingUp,
  Filter,
  Download,
  Share2,
  AlertTriangle,
  CheckCircle,
  Clock,
  Target,
  Briefcase,
  Activity,
  RefreshCw,
  Workflow,
  Bot,
  Brain,
  Eye,
  Gauge,
  Truck,
  CreditCard,
  Phone,
  Mail,
  Calendar,
  Building2,
  Award,
  Rocket,
  Search,
} from "lucide-react";
import { ProductData } from "@/types/products";

export const ProductsData: ProductData[] = [
  {
    slug: "enterprise-analytics-platform",
    name: "Enterprise Analytics Platform",
    icon: BarChart3,
    category: "Analytics & Intelligence",
    shortDescription: "Transform raw data into actionable business insights with our comprehensive analytics platform.",
    description: "Comprehensive data analytics and business intelligence solution for data-driven decision making across all business functions.",
    heroImage: "/products/analytics-platform-hero.jpg",
    heroTitle: "Transform Data into Actionable Insights",
    heroDescription: "Unlock the full potential of your data with our powerful analytics platform that delivers real-time insights, predictive analytics, and comprehensive business intelligence to drive informed decision-making across your organization.",
    keyBenefits: [
      "90% faster reporting compared to traditional BI tools",
      "Reduce data preparation time by 75%",
      "Increase data accuracy by 95%",
      "Enable self-service analytics for all teams"
    ],
    useCases: [
      {
        title: "Sales Performance Optimization",
        description: "Track sales metrics, identify trends, and optimize performance across teams and regions.",
        industry: "Retail & E-commerce"
      },
      {
        title: "Financial Risk Management",
        description: "Monitor financial KPIs, detect anomalies, and ensure regulatory compliance.",
        industry: "Financial Services"
      },
      {
        title: "Supply Chain Analytics",
        description: "Optimize inventory, reduce costs, and improve delivery performance.",
        industry: "Manufacturing"
      },
      {
        title: "Customer Journey Analysis",
        description: "Understand customer behavior and optimize conversion funnels.",
        industry: "Technology"
      }
    ],
    features: [
      {
        title: "Real-Time Analytics",
        description: "Process and analyze streaming data with sub-second latency for instant insights and immediate decision-making capability.",
        icon: BarChart3,
        category: "Core Analytics"
      },
      {
        title: "Predictive Modeling",
        description: "Leverage advanced machine learning algorithms to forecast trends, behaviors, and business outcomes with high accuracy.",
        icon: LineChart,
        category: "AI/ML"
      },
      {
        title: "Custom Dashboards",
        description: "Create personalized dashboards with drag-and-drop interface and 50+ visualization options including charts, graphs, and KPI widgets.",
        icon: Monitor,
        category: "Visualization"
      },
      {
        title: "Automated Reporting",
        description: "Schedule and distribute reports to stakeholders with customizable templates, formats, and delivery methods.",
        icon: FileText,
        category: "Reporting"
      },
      {
        title: "Data Governance",
        description: "Ensure data quality, security, and compliance with robust governance features including lineage tracking and access controls.",
        icon: Shield,
        category: "Governance"
      },
      {
        title: "Collaboration Tools",
        description: "Share insights and collaborate with team members through integrated annotation, commenting, and sharing capabilities.",
        icon: Users,
        category: "Collaboration"
      },
      {
        title: "Advanced Filtering",
        description: "Apply complex filters and drill-down capabilities to explore data at granular levels.",
        icon: Filter,
        category: "Data Exploration"
      },
      {
        title: "Export & Integration",
        description: "Export data and reports in multiple formats and integrate with existing business applications.",
        icon: Download,
        category: "Integration"
      },
      {
        title: "Anomaly Detection",
        description: "Automatically detect unusual patterns and outliers in your data with AI-powered anomaly detection.",
        icon: AlertTriangle,
        category: "AI/ML"
      },
      {
        title: "Performance Optimization",
        description: "Optimized query engine ensures fast performance even with large datasets and complex queries.",
        icon: Gauge,
        category: "Performance"
      }
    ],
    technicalSpecs: {
      dataProcessing: "Up to 10M records/second",
      storage: "Unlimited cloud storage",
      apis: "REST, GraphQL, WebSocket APIs",
      integrations: "500+ pre-built connectors",
      security: "SOC 2, GDPR, HIPAA compliant",
      uptime: "99.99% SLA guarantee"
    },
    integrations: [
      "Salesforce", "HubSpot", "Microsoft Office 365", "Google Workspace", 
      "AWS", "Azure", "Slack", "Teams", "Tableau", "Power BI", "Snowflake", 
      "PostgreSQL", "MySQL", "MongoDB", "Redis"
    ],
    pricingTiers: [
      {
        name: "Starter",
        price: "$299",
        period: "per month",
        description: "Perfect for small teams getting started with analytics",
        features: [
          "Up to 5 users", 
          "10 data sources",
          "Basic dashboards & reports",
          "Email support",
          "1M monthly data points",
          "Standard visualizations",
          "Basic data exports"
        ],
        cta: "Start Free Trial",
        popular: false
      },
      {
        name: "Professional",
        price: "$999",
        period: "per month",
        description: "For growing businesses with advanced analytics needs",
        features: [
          "Up to 25 users", 
          "Unlimited data sources",
          "Advanced analytics & AI",
          "Priority support",
          "10M monthly data points",
          "Full API access",
          "Custom visualizations",
          "Advanced reporting",
          "Data governance tools"
        ],
        cta: "Start Free Trial",
        popular: true
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "per month",
        description: "Custom solution for large organizations",
        features: [
          "Unlimited users",
          "Unlimited data sources",
          "Premium 24/7 support",
          "Unlimited data points",
          "Dedicated account manager",
          "On-premise deployment",
          "Custom integrations",
          "Advanced security features",
          "Training & onboarding",
          "Custom SLAs"
        ],
        cta: "Contact Sales",
        popular: false
      }
    ],
    highlights: [
      "90% faster reporting compared to traditional BI tools",
      "Used by 10,000+ businesses worldwide",
      "99.99% uptime SLA guarantee",
      "GDPR, SOC 2 & HIPAA compliant",
      "500+ pre-built data connectors",
      "24/7 enterprise support available"
    ],
    testimonials: [
      {
        quote: "This platform transformed how we make data-driven decisions. Our reporting time decreased by 80%.",
        author: "Sarah Johnson",
        position: "VP of Analytics",
        company: "TechCorp Inc."
      }
    ]
  },
  {
    slug: "mobile-application-suite",
    name: "Mobile Application Suite",
    icon: Mobile,
    category: "Development & Deployment",
    shortDescription: "Build, test, and deploy cross-platform mobile applications with enterprise-grade tools.",
    description: "End-to-end platform for building, testing, and deploying cross-platform mobile applications with native performance and enterprise security.",
    heroImage: "/products/mobile-suite-hero.jpg",
    heroTitle: "Build Better Mobile Experiences",
    heroDescription: "Accelerate your mobile development with our comprehensive suite of tools and services for creating high-performance, secure, and scalable mobile applications that deliver exceptional user experiences across all devices.",
    keyBenefits: [
      "70% faster development time with cross-platform approach",
      "Single codebase for iOS and Android deployment",
      "Enterprise-grade security and compliance",
      "Automatic scaling and performance optimization"
    ],
    useCases: [
      {
        title: "E-commerce Mobile Apps",
        description: "Build feature-rich shopping experiences with payment integration and inventory management.",
        industry: "Retail & E-commerce"
      },
      {
        title: "Healthcare Applications",
        description: "Develop secure patient portals and telemedicine platforms with HIPAA compliance.",
        industry: "Healthcare"
      },
      {
        title: "Financial Services Apps",
        description: "Create secure banking and investment applications with advanced authentication.",
        industry: "Financial Services"
      },
      {
        title: "Enterprise Productivity Tools",
        description: "Build internal tools for employee productivity and business process management.",
        industry: "Enterprise"
      }
    ],
    features: [
      {
        title: "Cross-Platform Development",
        description: "Build once and deploy to both iOS and Android with native performance using advanced cross-platform frameworks.",
        icon: GitMerge,
        category: "Development"
      },
      {
        title: "Cloud Backend",
        description: "Scalable backend services with automatic scaling, global CDN, and managed databases for seamless app performance.",
        icon: CloudRain,
        category: "Infrastructure"
      },
      {
        title: "Offline-First Architecture",
        description: "Full offline support with intelligent data synchronization when connectivity returns, ensuring uninterrupted user experience.",
        icon: Wifi,
        category: "User Experience"
      },
      {
        title: "Push Notifications",
        description: "Engage users with targeted, personalized push notifications with advanced segmentation and A/B testing capabilities.",
        icon: Bell,
        category: "Engagement"
      },
      {
        title: "Analytics Integration",
        description: "Built-in analytics to track user behavior, app performance, and business metrics with detailed reporting dashboards.",
        icon: BarChart2,
        category: "Analytics"
      },
      {
        title: "Enterprise Security",
        description: "End-to-end encryption, secure authentication protocols, and compliance with industry security standards.",
        icon: Lock,
        category: "Security"
      },
      {
        title: "App Store Optimization",
        description: "Built-in tools for app store optimization including metadata management and review monitoring.",
        icon: Target,
        category: "Marketing"
      },
      {
        title: "Performance Monitoring",
        description: "Real-time performance monitoring with crash reporting and performance optimization suggestions.",
        icon: Activity,
        category: "Monitoring"
      },
      {
        title: "CI/CD Pipeline",
        description: "Automated build, test, and deployment pipeline with integrated quality assurance and testing tools.",
        icon: Workflow,
        category: "DevOps"
      },
      {
        title: "Multi-language Support",
        description: "Built-in internationalization and localization support for global app deployment.",
        icon: Globe,
        category: "Localization"
      }
    ],
    technicalSpecs: {
      platforms: "iOS, Android, Progressive Web Apps",
      frameworks: "React Native, Flutter, Ionic",
      backend: "Node.js, Python, Java, .NET",
      databases: "PostgreSQL, MongoDB, Firebase",
      storage: "AWS S3, Azure Blob, Google Cloud Storage",
      authentication: "OAuth 2.0, SAML, JWT, Biometric"
    },
    integrations: [
      "Firebase", "AWS Amplify", "Stripe", "PayPal", "Twilio", "SendGrid",
      "Google Maps", "Apple Pay", "Google Pay", "Salesforce", "HubSpot",
      "Zendesk", "Intercom", "Mixpanel", "Google Analytics"
    ],
    pricingTiers: [
      {
        name: "Developer",
        price: "$49",
        period: "per month",
        description: "For individual developers and small projects",
        features: [
          "1 mobile app",
          "10K monthly active users",
          "Basic analytics dashboard",
          "Community support",
          "Standard templates",
          "Basic push notifications"
        ],
        cta: "Get Started",
        popular: false
      },
      {
        name: "Team",
        price: "$299",
        period: "per month",
        description: "For professional development teams",
        features: [
          "5 mobile apps",
          "100K monthly active users",
          "Advanced analytics & insights",
          "Priority support",
          "Team collaboration tools",
          "Custom branding",
          "A/B testing capabilities",
          "Advanced push notifications"
        ],
        cta: "Start Free Trial",
        popular: true
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "per month",
        description: "For large organizations with custom requirements",
        features: [
          "Unlimited mobile apps",
          "Unlimited monthly users",
          "Dedicated infrastructure",
          "24/7 premium support",
          "Custom SLAs & guarantees",
          "On-premise deployment option",
          "Advanced security features",
          "Custom integrations",
          "White-label solutions",
          "Dedicated account team"
        ],
        cta: "Contact Sales",
        popular: false
      }
    ],
    highlights: [
      "70% faster development time vs native development",
      "Native performance with cross-platform development",
      "Enterprise-grade security and compliance",
      "Used by Fortune 500 companies worldwide",
      "99.9% app uptime guarantee",
      "Supports 50+ languages and regions"
    ],
    testimonials: [
      {
        quote: "We launched our mobile app 6 months earlier than planned. The platform saved us significant development costs.",
        author: "Mike Chen",
        position: "CTO",
        company: "StartupTech"
      }
    ]
  },
  {
    slug: "cloud-infrastructure",
    name: "Cloud Infrastructure",
    icon: Cloud,
    category: "Infrastructure & DevOps",
    shortDescription: "Scalable, secure, and reliable cloud infrastructure for modern applications and workloads.",
    description: "Scalable, secure, and reliable cloud infrastructure platform designed for modern applications with enterprise-grade performance, security, and compliance.",
    heroImage: "/products/cloud-infra-hero.jpg",
    heroTitle: "Enterprise-Grade Cloud Infrastructure",
    heroDescription: "Deploy and manage your applications with our fully managed cloud infrastructure, designed for performance, security, and scalability. Built for modern workloads with automatic scaling, global reach, and enterprise-level security.",
    keyBenefits: [
      "99.99% uptime SLA with global redundancy",
      "Auto-scaling reduces infrastructure costs by 40%",
      "Deploy across 50+ regions worldwide",
      "Enterprise-grade security and compliance"
    ],
    useCases: [
      {
        title: "High-Traffic Web Applications",
        description: "Scale web applications automatically to handle traffic spikes and ensure optimal performance.",
        industry: "Technology"
      },
      {
        title: "Data Processing Pipelines",
        description: "Process large volumes of data with serverless computing and managed data services.",
        industry: "Financial Services"
      },
      {
        title: "Disaster Recovery Solutions",
        description: "Implement robust backup and disaster recovery strategies with multi-region deployment.",
        industry: "Healthcare"
      },
      {
        title: "Development Environments",
        description: "Provide isolated development and testing environments with rapid provisioning.",
        industry: "Software Development"
      }
    ],
    features: [
      {
        title: "Global Infrastructure",
        description: "Deploy across 50+ regions worldwide for optimal performance with edge computing capabilities and low-latency access.",
        icon: Globe,
        category: "Global Reach"
      },
      {
        title: "Auto-Scaling",
        description: "Automatically scale resources based on demand with zero downtime and intelligent load balancing algorithms.",
        icon: Zap,
        category: "Performance"
      },
      {
        title: "Container Orchestration",
        description: "Managed Kubernetes and Docker support for containerized applications with automatic updates and security patches.",
        icon: Box,
        category: "Containerization"
      },
      {
        title: "Serverless Computing",
        description: "Run code without managing servers with automatic scaling, pay-per-use pricing, and sub-second cold start times.",
        icon: ZapOff,
        category: "Serverless"
      },
      {
        title: "Hybrid Cloud",
        description: "Seamlessly integrate with on-premises infrastructure using secure VPN connections and hybrid networking solutions.",
        icon: Network,
        category: "Connectivity"
      },
      {
        title: "Compliance & Security",
        description: "Enterprise-grade security with SOC 2, ISO 27001, HIPAA, and PCI DSS compliance certifications.",
        icon: Shield,
        category: "Security"
      },
      {
        title: "Database Management",
        description: "Managed database services with automatic backups, scaling, and performance optimization.",
        icon: Database,
        category: "Data Management"
      },
      {
        title: "Monitoring & Alerting",
        description: "Comprehensive monitoring with real-time alerts, performance metrics, and detailed logging capabilities.",
        icon: Activity,
        category: "Monitoring"
      },
      {
        title: "Load Balancing",
        description: "Intelligent traffic distribution with health checks and automatic failover capabilities.",
        icon: RefreshCw,
        category: "Traffic Management"
      },
      {
        title: "Backup & Recovery",
        description: "Automated backup solutions with point-in-time recovery and cross-region replication.",
        icon: HardDrive,
        category: "Data Protection"
      }
    ],
    technicalSpecs: {
      compute: "Virtual machines, containers, serverless functions",
      storage: "Object, block, and file storage with 99.999999999% durability",
      networking: "Global CDN, VPN, private networking",
      databases: "SQL, NoSQL, graph, and time-series databases",
      regions: "50+ global regions with 200+ edge locations",
      sla: "99.99% uptime SLA with credits for downtime"
    },
    integrations: [
      "Kubernetes", "Docker", "Terraform", "Ansible", "Jenkins", "GitLab",
      "Prometheus", "Grafana", "ELK Stack", "Datadog", "New Relic",
      "AWS", "Azure", "Google Cloud", "VMware", "OpenStack"
    ],
    pricingTiers: [
      {
        name: "Starter",
        price: "$99",
        period: "per month",
        description: "For small projects and development environments",
        features: [
          "2 vCPUs, 8GB RAM",
          "100GB SSD storage",
          "1TB monthly data transfer",
          "Basic monitoring & alerts",
          "Email support",
          "99.9% uptime SLA"
        ],
        cta: "Get Started",
        popular: false
      },
      {
        name: "Business",
        price: "$499",
        period: "per month",
        description: "For production workloads and growing businesses",
        features: [
          "8 vCPUs, 32GB RAM",
          "500GB SSD storage",
          "5TB monthly data transfer",
          "Advanced monitoring & alerting",
          "Priority support",
          "99.9% uptime SLA",
          "Auto-scaling capabilities",
          "Load balancing"
        ],
        cta: "Start Free Trial",
        popular: true
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "per month",
        description: "For mission-critical applications and large enterprises",
        features: [
          "Dedicated compute resources",
          "Custom server configurations",
          "Unlimited storage options",
          "Unlimited data transfer",
          "24/7 premium support",
          "99.99% uptime SLA",
          "Dedicated account team",
          "Custom compliance requirements",
          "Private cloud options",
          "Advanced security features"
        ],
        cta: "Contact Sales",
        popular: false
      }
    ],
    highlights: [
      "99.99% uptime SLA with credit guarantees",
      "Global low-latency network across 50+ regions",
      "Fully managed services reduce admin overhead by 80%",
      "Enterprise-grade security and compliance certifications",
      "Auto-scaling saves up to 40% on infrastructure costs",
      "24/7 expert support with guaranteed response times"
    ],
    testimonials: [
      {
        quote: "Our application performance improved by 60% after migrating to this cloud platform. The auto-scaling feature is incredible.",
        author: "Jennifer Martinez",
        position: "Infrastructure Lead",
        company: "ScaleUp Solutions"
      }
    ]
  },
  {
    slug: "ai-ml-platform",
    name: "AI/ML Platform",
    icon: Cpu,
    category: "Artificial Intelligence",
    shortDescription: "Build, train, and deploy machine learning models at scale with our comprehensive AI platform.",
    description: "End-to-end platform for building, training, and deploying machine learning models at scale with automated MLOps, no-code tools, and enterprise-grade infrastructure.",
    heroImage: "/products/ai-ml-hero.jpg",
    heroTitle: "Democratizing AI for Every Business",
    heroDescription: "Build, train, and deploy machine learning models with our comprehensive AI platform that makes artificial intelligence accessible to everyone, from data scientists to business users, with powerful no-code tools and enterprise-grade MLOps capabilities.",
    keyBenefits: [
      "5x faster model development with automated ML",
      "No-code AI tools for business users",
      "Enterprise-grade model deployment and monitoring",
      "Pre-built models for common use cases"
    ],
    useCases: [
      {
        title: "Fraud Detection Systems",
        description: "Deploy real-time fraud detection models to protect financial transactions and reduce losses.",
        industry: "Financial Services"
      },
      {
        title: "Predictive Maintenance",
        description: "Predict equipment failures before they occur to minimize downtime and maintenance costs.",
        industry: "Manufacturing"
      },
      {
        title: "Customer Behavior Prediction",
        description: "Analyze customer data to predict churn, lifetime value, and purchasing patterns.",
        industry: "Retail & E-commerce"
      },
      {
        title: "Medical Image Analysis",
        description: "Develop AI models for medical image analysis and diagnostic assistance.",
        industry: "Healthcare"
      }
    ],
    features: [
      {
        title: "No-Code AI Builder",
        description: "Build sophisticated AI models without writing code using intuitive drag-and-drop interface and guided workflows.",
        icon: Code,
        category: "Accessibility"
      },
      {
        title: "AutoML Capabilities",
        description: "Automated machine learning for faster model development with hyperparameter optimization and feature engineering.",
        icon: Bot,
        category: "Automation"
      },
      {
        title: "Model Deployment",
        description: "One-click deployment of models to production with automatic scaling, versioning, and A/B testing capabilities.",
        icon: Cloud,
        category: "Deployment"
      },
      {
        title: "Pre-built Model Library",
        description: "Access to a comprehensive library of pre-trained models for common use cases across industries.",
        icon: Box,
        category: "Templates"
      },
      {
        title: "MLOps Integration",
        description: "End-to-end machine learning operations for model lifecycle management, monitoring, and governance.",
        icon: Settings,
        category: "Operations"
      },
      {
        title: "Explainable AI",
        description: "Understand and interpret model predictions with advanced explainability tools and visualization features.",
        icon: Eye,
        category: "Interpretability"
      },
      {
        title: "Data Pipeline Management",
        description: "Automated data pipelines for model training with data validation, transformation, and quality monitoring.",
        icon: Workflow,
        category: "Data Management"
      },
      {
        title: "Model Performance Monitoring",
        description: "Real-time monitoring of model performance with drift detection and automatic retraining capabilities.",
        icon: Gauge,
        category: "Monitoring"
      },
      {
        title: "Collaboration Tools",
        description: "Team collaboration features with version control, experiment tracking, and knowledge sharing capabilities.",
        icon: Users,
        category: "Collaboration"
      },
      {
        title: "Custom Model Development",
        description: "Advanced tools for data scientists to build custom models with support for popular frameworks.",
        icon: Brain,
        category: "Advanced Development"
      }
    ],
    technicalSpecs: {
      frameworks: "TensorFlow, PyTorch, Scikit-learn, XGBoost",
      languages: "Python, R, SQL, Julia",
      deployment: "REST API, batch inference, real-time streaming",
      storage: "Model registry with versioning and metadata",
      compute: "GPU/CPU clusters with auto-scaling",
      monitoring: "Performance metrics, drift detection, alerts"
    },
    integrations: [
      "Jupyter Notebooks", "Apache Spark", "Databricks", "Snowflake",
      "AWS SageMaker", "Azure ML", "Google AI Platform", "Kubeflow",
      "MLflow", "DVC", "Weights & Biases", "ClearML", "Neptune"
    ],
    pricingTiers: [
      {
        name: "Starter",
        price: "$199",
        period: "per month",
        description: "For individuals and small teams getting started with AI",
        features: [
          "100 model training hours",
          "10GB model storage",
          "Community support",
          "Basic pre-built models",
          "Standard deployment options",
          "Basic monitoring dashboard"
        ],
        cta: "Get Started",
        popular: false
      },
      {
        name: "Professional",
        price: "$999",
        period: "per month",
        description: "For data science teams and growing businesses",
        features: [
          "500 model training hours",
          "100GB model storage",
          "Priority support",
          "Advanced pre-built models",
          "Team collaboration tools",
          "Advanced monitoring & alerts",
          "API access & integrations",
          "Custom model development",
          "A/B testing capabilities"
        ],
        cta: "Start Free Trial",
        popular: true
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "per month",
        description: "For organizations with custom AI requirements",
        features: [
          "Unlimited training hours",
          "Unlimited model storage",
          "24/7 premium support",
          "Custom model development",
          "Dedicated infrastructure",
          "On-premise deployment",
          "Advanced security features",
          "Custom compliance requirements",
          "Dedicated data science team",
          "Training & consultation services"
        ],
        cta: "Contact Sales",
        popular: false
      }
    ],
    highlights: [
      "5x faster model development with AutoML",
      "Enterprise-grade security and compliance",
      "Seamless integration with existing data infrastructure",
      "Used by leading AI research teams worldwide",
      "99.9% model deployment success rate",
      "Supports 20+ machine learning frameworks"
    ],
    testimonials: [
      {
        quote: "This platform democratized AI in our organization. Our business teams can now build models without depending on data scientists.",
        author: "Dr. Alex Wang",
        position: "Head of Data Science",
        company: "InnovateCorp"
      }
    ]
  }
];