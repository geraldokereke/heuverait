'use client';
import React, { useState } from 'react';
import {
  Code,
  Brain,
  Globe,
  Smartphone,
  Database,
  Shield,
  Cloud,
  Cog,
  Zap,
  ArrowRight,
  ChevronRight,
  Target,
  Award,
  LucideIcon
} from 'lucide-react';
import SectionContainer from '../ui/sectionContainer';
import SectionTitle from '../ui/SectionTitle';
import CTA from '../ui/cta';
import Button from '../ui/button';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  summary: string;
  features: string[];
  color: string;
  gradientFrom: string;
  gradientTo: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
  isHovered: boolean;
  onHover: (index: number) => void;
  onLeave: () => void;
}

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
}

interface SectionTitleProps {
  section: string;
  title: string;
  subtitle: string;
}

interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
}

const services: Service[] = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored solutions built for your unique needs",
    summary: 'From concept to deployment, we architect scalable, maintainable software that drives measurable business growth and operational efficiency.',
    features: ['Full-stack Development', 'API Integration', 'Legacy Modernization', 'Custom Applications'],
    color: '#41a7ad',
    gradientFrom: 'from-[#41a7ad]',
    gradientTo: 'to-[#41a7ad]'
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent automation and data-driven insights",
    summary: 'Harness the transformative power of AI to automate complex processes, extract actionable insights, and enable data-driven strategic decisions.',
    features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Process Automation'],
    color: '#3b82f6',
    gradientFrom: 'from-[#3b82f6]',
    gradientTo: 'to-[#3b82f6]'
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive websites and applications",
    summary: 'Craft engaging, responsive web applications that deliver seamless experiences across all devices using modern frameworks and technologies.',
    features: ['React/Next.js', 'Responsive Design', 'Progressive Web Apps', 'E-commerce Solutions'],
    color: '#f59e0b',
    gradientFrom: 'from-[#f59e0b]',
    gradientTo: 'to-[#f59e0b]'
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile solutions",
    summary: 'Build powerful mobile applications for iOS and Android with native performance and cross-platform compatibility.',
    features: ['iOS Development', 'Android Development', 'React Native', 'Flutter Apps'],
    color: '#ef4444',
    gradientFrom: 'from-[#ef4444]',
    gradientTo: 'to-[#ef4444]'
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transform data into actionable business intelligence",
    summary: 'Unlock the power of your data with advanced analytics, visualization, and business intelligence solutions.',
    features: ['Data Visualization', 'Business Intelligence', 'Data Warehousing', 'Reporting Dashboards'],
    color: '#8b5cf6',
    gradientFrom: 'from-[#8b5cf6]',
    gradientTo: 'to-[#8b5cf6]'
  },
  {
    icon: Shield,
    title: "IT Consulting",
    description: "Strategic technology guidance and support",
    summary: 'Navigate complex technology decisions with expert guidance on architecture, digital transformation, and strategic IT roadmapping.',
    features: ['Technology Strategy', 'Digital Transformation', 'Architecture Review', 'Vendor Selection'],
    color: '#06b6d4',
    gradientFrom: 'from-[#06b6d4]',
    gradientTo: 'to-[#06b6d4]'
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services",
    summary: 'Optimize operations with robust cloud architectures, migration services, and infrastructure-as-code for enhanced reliability.',
    features: ['AWS/Azure/GCP', 'Cloud Migration', 'Infrastructure as Code', 'Serverless Solutions'],
    color: '#ec4899',
    gradientFrom: 'from-[#ec4899]',
    gradientTo: 'to-[#ec4899]'
  },
  {
    icon: Cog,
    title: "DevOps & Automation",
    description: "Streamlined deployment and continuous integration",
    summary: 'Accelerate development cycles with automated CI/CD pipelines, infrastructure automation, and DevOps best practices.',
    features: ['CI/CD Pipelines', 'Infrastructure Automation', 'Monitoring & Logging', 'Container Orchestration'],
    color: '#10b981',
    gradientFrom: 'from-[#10b981]',
    gradientTo: 'to-[#10b981]'
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Enhanced speed and efficiency for existing systems",
    summary: 'Boost your application performance with optimization techniques, caching strategies, and system tuning.',
    features: ['Speed Optimization', 'Database Tuning', 'Caching Solutions', 'System Monitoring'],
    color: '#f97316',
    gradientFrom: 'from-[#f97316]',
    gradientTo: 'to-[#f97316]'
  }
];

const stats: Stat[] = [
  { icon: Target, value: '200+', label: 'Projects Delivered' },
  { icon: Award, value: '98%', label: 'Client Satisfaction' },
  { icon: Zap, value: '24/7', label: 'Support Available' }
];

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, isHovered, onHover, onLeave }) => {
  return (
    <div
      className={`group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border border-gray-100 ${isHovered ? 'scale-105 z-10' : ''
        }`}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={onLeave}
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
        style={{ background: `linear-gradient(135deg, ${service.color}22, ${service.color}11)` }}
      />

      {/* Content */}
      <div className="relative p-8 lg:p-6 xl:p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-3 2xl:mb-6">
          <div
            className="p-2 md:p-1 xl:p-2 2xl:p-4 rounded-sm xl:rounded-lg 2xl:rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300"
            style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)` }}
          >
            <service.icon className="size-5 md:size-3 xl:size-4 2xl:size-8 text-white" />
          </div>
          <div className="flex items-center text-gray-400 group-hover:text-black/70 transition-colors duration-300">
            <span className="text-[10px] md:text-[8px] xl:text-[10px] 2xl:text-sm font-medium mr-2">Learn More</span>
            <ArrowRight className="size-3 md:size-2 xl:size-4 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-base md:text-xs 2xl:text-xl font-bold text-black md-0.5 md:mb-1.5 2xl:mb-3 group-hover:text-gray-800">
          {service.title}
        </h3>
        <p className="text-sm md:text-[10px] 2xl:text-base text-black/70 leading-relaxed mb-3 2xl:mb-6 group-hover:text-gray-700">
          {service.description}
        </p>

        {/* Features */}
        <div className="space-y-1 2xl:space-y-2 mb-3 2xl:mb-6">
          {service.features.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="flex items-center text-sm md:text-[10px] 2xl:text-sm text-gray-500">
              <ChevronRight className="w-4 h-4 mr-2 text-gray-400" />
              {feature}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-[10px] 2xl:text-sm font-medium text-gray-500">
            {service.features.length} Specializations
          </span>
          <div
            className="size-1 2xl:size-2 rounded-full group-hover:scale-150 transition-transform duration-300"
            style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)` }}
          />
        </div>
      </div>

      {/* Hover effect border */}
      <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
    </div>
  );
};

const Services: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className='bg-white'>
      <SectionContainer className="py-24">
        <SectionTitle
          section="Our Solutions"
          title="Transformative Technology Solutions"
          subtitle="We deliver enterprise-grade solutions that drive digital transformation and accelerate business growth across industries."
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              isHovered={hoveredCard === index}
              onHover={setHoveredCard}
              onLeave={() => setHoveredCard(null)}
            />
          ))}
        </div>
      </SectionContainer>
      <CTA
        bgColor='black'
        headerText='Ready to Transform Your Business?'
        headerTextColor='white'
        subHeaderText="Let's discuss how our expertise can accelerate your digital transformation journey and drive measurable results."
        subHeaderTextColor='white'
      >
        <Button
          type='default'
          textColor='black'
          backgroundColor='white'
        >
          Schedule Consultation
        </Button>
        <Button
          type='link'
          textColor='white'
          backgroundColor='transparent'
        >
          View Portfolio
        </Button>
      </CTA>
    </div>
  );
};

export default Services;