"use client";

import React, { useState } from 'react';
import {
  Building2,
  Heart,
  GraduationCap,
  Landmark,
  Scale,
  ShoppingCart,
  Factory,
  Store,
  Car,
  Plane,
  Home,
  Hotel,
  Users,
  Gamepad2,
  Music,
  Camera,
  Truck,
  Wheat,
  HardHat,
  Zap,
  Globe,
  TreePine,
  Banknote,
  ArrowRight,
  Dot
} from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

interface Industry {
  name: string;
  icon: React.ComponentType<any>;
  description: string;
}

interface IndustrySection {
  title: string;
  description: string;
  industries: Industry[];
  color: string;
  accent: string;
}

const Industries = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);
  const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null);

  const industrySections: IndustrySection[] = [
    {
      title: "Financial & Legal Services",
      description: "Secure, compliant solutions for regulated industries",
      color: "#1e40af",
      accent: "#3b82f6",
      industries: [
        { name: "Banking & Finance", icon: Building2, description: "Digital banking, fintech, and financial platforms" },
        { name: "Insurance", icon: Banknote, description: "Claims processing, risk assessment, and customer portals" },
        { name: "Legal Services", icon: Scale, description: "Case management, document automation, and compliance tools" },
        { name: "Government", icon: Landmark, description: "Public sector digital services and citizen portals" }
      ]
    },
    {
      title: "Healthcare & Life Sciences",
      description: "HIPAA-compliant solutions for better patient outcomes",
      color: "#dc2626",
      accent: "#ef4444",
      industries: [
        { name: "Healthcare Providers", icon: Heart, description: "Electronic health records and patient management" },
        { name: "Pharmaceuticals", icon: Heart, description: "Drug discovery, clinical trials, and regulatory compliance" },
        { name: "Medical Devices", icon: Heart, description: "IoT health monitoring and diagnostic tools" },
        { name: "Telemedicine", icon: Heart, description: "Virtual care platforms and remote patient monitoring" }
      ]
    },
    {
      title: "Education & Non-Profit",
      description: "Empowering learning and social impact through technology",
      color: "#059669",
      accent: "#10b981",
      industries: [
        { name: "Higher Education", icon: GraduationCap, description: "Learning management systems and student portals" },
        { name: "K-12 Education", icon: GraduationCap, description: "Educational apps and classroom management tools" },
        { name: "Non-Profit Organizations", icon: Users, description: "Donor management and volunteer coordination platforms" },
        { name: "Training & Development", icon: GraduationCap, description: "Corporate learning and certification platforms" }
      ]
    },
    {
      title: "Retail & E-commerce",
      description: "Omnichannel experiences that drive sales and engagement",
      color: "#ea580c",
      accent: "#f97316",
      industries: [
        { name: "E-commerce Platforms", icon: ShoppingCart, description: "Custom online stores and marketplace solutions" },
        { name: "Retail Chains", icon: Store, description: "POS systems, inventory management, and customer analytics" },
        { name: "Software & SaaS", icon: Globe, description: "Scalable platforms and API-first architectures" },
        { name: "Logistics & Shipping", icon: Truck, description: "Fleet management and route optimization systems" },
      ]
    },
    {
      title: "Manufacturing & Industrial",
      description: "Industry 4.0 solutions for operational excellence",
      color: "#7c3aed",
      accent: "#8b5cf6",
      industries: [
        { name: "Automotive", icon: Car, description: "Supply chain optimization and quality management systems" },
        { name: "Aerospace", icon: Plane, description: "Maintenance tracking and compliance management" },
        { name: "Manufacturing", icon: Factory, description: "IoT monitoring, predictive maintenance, and automation" },
        { name: "Construction", icon: HardHat, description: "Project management and resource optimization tools" }
      ]
    },
    {
      title: "Technology & Media",
      description: "Next-generation platforms for digital-first businesses",
      color: "#0891b2",
      accent: "#06b6d4",
      industries: [
        { name: "Software & SaaS", icon: Globe, description: "Scalable platforms and API-first architectures" },
        { name: "Gaming & Entertainment", icon: Gamepad2, description: "Interactive experiences and content management" },
        { name: "Media & Broadcasting", icon: Camera, description: "Content distribution and audience engagement platforms" },
        { name: "Music & Audio", icon: Music, description: "Streaming platforms and audio processing tools" }
      ]
    }
  ];

  return (
    <section className="w-full">
      {/* Header */}
      <SectionTitle
      section='Industry Expertise'
      title='Industries We Transform'
      subtitle='Delivering Specialized technology solutions across diverse verticals with deep domain expertise and proven results.'
      />

      {/* Industries List */}
      <div className="space-y-6">
        {industrySections.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="border border-gray-200 rounded-xl 2xl:rounded-2xl overflow-hidden transition-all duration-300 hover:border-gray-300"
          >
            {/* Section Header */}
            <div
              className={`p-4 2xl:p-6 cursor-pointer transition-all duration-300 ${
                expandedSection === sectionIndex ? 'bg-gray-50' : 'bg-white hover:bg-gray-50'
              }`}
              onClick={() => setExpandedSection(expandedSection === sectionIndex ? null : sectionIndex)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 xl:gap-4">
                  <div 
                    className="w-0.5 xl:w-1 2xl:w-2 h-8 xl:h-10 2xl:h-12 rounded-full"
                    style={{ backgroundColor: section.color }}
                  ></div>
                  <div>
                    <h3 className="text-sm md:text-base lg:text-sm xl:text-base 2xl:text-2xl font-semibold font-montserrat text-gray-900 mb-[-2] xl:mb-1">
                      {section.title}
                    </h3>
                    <p className="text-[8px] md:text-[10px] xl:text-xs 2xl:text-base text-gray-600 ">{section.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[8px] xl:text-[10px] 2xl:text-sm text-gray-500 font-medium">
                    {section.industries.length} Specializations
                  </span>
                  <ArrowRight 
                    className={`size-2 xl:size-3 2xl:size-5 text-gray-400 transition-transform duration-300 ${
                      expandedSection === sectionIndex ? 'rotate-90' : ''
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Expanded Content */}
            <div className={`overflow-hidden transition-all duration-500 ${
              expandedSection === sectionIndex ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="p-2 xl:p-4 2xl:p-6 pt-0 bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.industries.map((industry, industryIndex) => {
                    const industryId = `${sectionIndex}-${industryIndex}`;
                    const isHovered = hoveredIndustry === industryId;
                    
                    return (
                      <div
                        key={industryIndex}
                        className="group flex items-start gap-2 xl:gap-4 p-2 xl:p-4 rounded-lg xl:rounded-xl bg-white border border-gray-100 hover:border-gray-200 transition-all duration-200 cursor-pointer"
                        onMouseEnter={() => setHoveredIndustry(industryId)}
                        onMouseLeave={() => setHoveredIndustry(null)}
                      >
                        <div 
                          className={`flex-shrink-0 size-6 xl:size-8 2xl:size-10 rounded-sm 2xl:rounded-lg flex items-center justify-center transition-all duration-200 ${
                            isHovered ? 'scale-110' : ''
                          }`}
                          style={{
                            backgroundColor: isHovered ? section.color : `${section.color}15`,
                          }}
                        >
                          <industry.icon 
                            className="size-2 xl:size-3 2xl:size-5 transition-colors duration-200"
                            style={{ color: isHovered ? 'white' : section.color }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-[8px] xl:text-[10px] 2xl:text-base font-semibold text-gray-900 mb-1 group-hover:text-gray-700">
                            {industry.name}
                          </h4>
                          <p className="text-[6px] xl:text-[8px] 2xl:text-sm text-gray-600 leading-relaxed">
                            {industry.description}
                          </p>
                        </div>
                        <ArrowRight className="size-2 xl:size-3 2xl:size-4 text-gray-300 group-hover:text-gray-500 transition-colors flex-shrink-0 mt-1" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Industries;