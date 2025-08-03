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
  ArrowUpRight
} from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import SectionContainer from '../ui/sectionContainer';

interface Industry {
  name: string;
  icon: React.ComponentType<any>;
  description: string;
}

interface MoreIndustry {
  name: string;
  icon: React.ComponentType<any>;
  description: string;
  color: string;
}

interface IndustrySection {
  title: string;
  description: string;
  industries: Industry[];
  color: string;
  bgColor: string;
}

interface MoreIndustrySection {
  title: string;
  description: string;
  industries: MoreIndustry[];
}


const Industries = () => {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const industrySections: IndustrySection[] = [
    {
      title: "Financial & Legal Services",
      description: "Secure, compliant solutions for regulated industries",
      color: "#41a7ad",
      bgColor: "#41a7ad",
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
      color: "#ef4444",
      bgColor: "#ef4444",
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
      color: "#3b82f6",
      bgColor: "#3b82f6",
      industries: [
        { name: "Higher Education", icon: GraduationCap, description: "Learning management systems and student portals" },
        { name: "K-12 Education", icon: GraduationCap, description: "Educational apps and classroom management tools" },
        { name: "Non-Profit Organizations", icon: Users, description: "Donor management and volunteer coordination platforms" },
        { name: "Training & Development", icon: GraduationCap, description: "Corporate learning and certification platforms" }
      ]
    },
    // {
    //   title: "More",
    //   description: "Other sections",
    //   color: "#f59e0b",
    //   bgColor: "#f59e0b",
    //   industries: [
    //     { name: "E-commerce Platforms", icon: ShoppingCart, description: "Custom online stores and marketplace solutions" },
    //     { name: "Automotive", icon: Car, description: "Supply chain optimization and quality management systems" },
    //     { name: "Fashion & Apparel", icon: Store, description: "Virtual try-on, size recommendation, and trend analytics" },
    //     { name: "Consumer Electronics", icon: Store, description: "Product configurators and technical support platforms" }
    //   ]
    // },
    // {
    //   title: "Retail & E-commerce",
    //   description: "Omnichannel experiences that drive sales and engagement",
    //   color: "#f59e0b",
    //   bgColor: "#f59e0b",
    //   industries: [
    //     { name: "E-commerce Platforms", icon: ShoppingCart, description: "Custom online stores and marketplace solutions" },
    //     { name: "Retail Chains", icon: Store, description: "POS systems, inventory management, and customer analytics" },
    //     { name: "Software & SaaS", icon: Globe, description: "Scalable platforms and API-first architectures" },
    //     { name: "Logistics & Shipping", icon: Truck, description: "Fleet management and route optimization systems" },
    //   ]
    // },
    // {
    //   title: "Manufacturing & Industrial",
    //   description: "Industry 4.0 solutions for operational excellence",
    //   color: "#8b5cf6",
    //   bgColor: "#8b5cf6",
    //   industries: [
    //     { name: "Automotive", icon: Car, description: "Supply chain optimization and quality management systems" },
    //     { name: "Aerospace", icon: Plane, description: "Maintenance tracking and compliance management" },
    //     { name: "Manufacturing", icon: Factory, description: "IoT monitoring, predictive maintenance, and automation" },
    //     { name: "Construction", icon: HardHat, description: "Project management and resource optimization tools" }
    //   ]
    // },
    // {
    //   title: "Technology & Media",
    //   description: "Next-generation platforms for digital-first businesses",
    //   color: "#10b981",
    //   bgColor: "#10b981",
    //   industries: [
    //     { name: "Software & SaaS", icon: Globe, description: "Scalable platforms and API-first architectures" },
    //     { name: "Gaming & Entertainment", icon: Gamepad2, description: "Interactive experiences and content management" },
    //     { name: "Media & Broadcasting", icon: Camera, description: "Content distribution and audience engagement platforms" },
    //     { name: "Music & Audio", icon: Music, description: "Streaming platforms and audio processing tools" }
    //   ]
    // },
    // {
    //   title: "Transportation & Logistics",
    //   description: "Smart mobility and supply chain optimization",
    //   color: "#ec4899",
    //   bgColor: "#ec4899",
    //   industries: [
    //     { name: "Logistics & Shipping", icon: Truck, description: "Fleet management and route optimization systems" },
    //     { name: "Transportation", icon: Car, description: "Ride-sharing and mobility-as-a-service platforms" },
    //     { name: "Supply Chain", icon: Truck, description: "Inventory tracking and demand forecasting tools" },
    //     { name: "Warehousing", icon: Factory, description: "Automated sorting and inventory management systems" }
    //   ]
    // },
    // {
    //   title: "Energy & Environment",
    //   description: "Sustainable solutions for a greener future",
    //   color: "#06b6d4",
    //   bgColor: "#06b6d4",
    //   industries: [
    //     { name: "Renewable Energy", icon: Zap, description: "Smart grid management and energy optimization" },
    //     { name: "Oil & Gas", icon: Zap, description: "Asset monitoring and predictive maintenance systems" },
    //     { name: "Environmental Services", icon: TreePine, description: "Compliance tracking and environmental monitoring" },
    //     { name: "Agriculture", icon: Wheat, description: "Precision farming and crop management systems" }
    //   ]
    // },
    // {
    //   title: "Hospitality & Real Estate",
    //   description: "Enhanced experiences in property and hospitality",
    //   color: "#f97316",
    //   bgColor: "#f97316",
    //   industries: [
    //     { name: "Hotels & Resorts", icon: Hotel, description: "Booking systems and guest experience platforms" },
    //     { name: "Real Estate", icon: Home, description: "Property management and virtual tour solutions" },
    //     { name: "Property Management", icon: Building2, description: "Tenant portals and maintenance tracking systems" },
    //     { name: "Travel & Tourism", icon: Plane, description: "Trip planning and destination management platforms" }
    //   ]
    // }
  ];

  const MoreIndustrySections: MoreIndustrySection[] = [
    {
      title: "More",
      description: "Other sections",
      industries: [
        { name: "E-commerce Platforms", icon: ShoppingCart, description: "Custom online stores and marketplace solutions", color: "#f59e0b" },
        { name: "Automotive", icon: Car, description: "Supply chain optimization and quality management systems", color: "#8b5cf6" },
        { name: "Fashion & Apparel", icon: Store, description: "Virtual try-on, size recommendation, and trend analytics", color: "#10b981" },
        { name: "Consumer Electronics", icon: Store, description: "Product configurators and technical support platforms", color: "#ec4899" }
      ]
    },
  ];

  return (
    <section className="py-24">
      <SectionContainer>
        {/* Header */}
        <SectionTitle
          section='Industry Expertise'
          title='Industries We Transform'
          subtitle='Delivering specialized technology solutions across diverse industry verticals with deep domain expertise and proven results.'
        />

        {/* Industry Sections */}
        <div className="space-y-16">
          {industrySections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="group"
              onMouseEnter={() => setActiveSection(sectionIndex)}
              onMouseLeave={() => setActiveSection(null)}
            >
              {/* Section Header */}
              <div className="mb-6">
                <h1 className={`text-base 2xl:text-xl font-medium text-black`}>
                  {section.title}
                </h1>
              </div>

              {/* Industries Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {section.industries.map((industry, industryIndex) => (
                  <div
                    key={industryIndex}
                    className="group/card bg-white p-4 2xl:p-6 rounded-md shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 cursor-pointer hover:-translate-y-1 relative"
                  >

                    <ArrowUpRight className={`hidden size-3 2xl:size-5 group-hover/card:block right-6 absolute`} style={{ color: section.color }} />

                    {/* Icon */}
                    <div
                      className="size-10 2xl:size-14 rounded-lg 2xl:rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover/card:scale-110"
                      style={{
                        backgroundColor: `${section.color}15`,
                        border: `2px solid ${section.color}25`
                      }}
                    >
                      <industry.icon
                        className="size-4 2xl:size-7 transition-colors duration-300"
                        style={{ color: section.color }}
                      />
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3
                        className="text-sm 2xl:text-base font-semibold text-gray-900 mb-2 group-hover/card:transition-colors duration-300"
                        style={{
                          color: activeSection === sectionIndex ? section.color : '#111827'
                        }}
                      >
                        {industry.name}
                      </h3>
                      <p className="text-xs 2xl:text-sm text-gray-600 leading-relaxed">
                        {industry.description}
                      </p>
                    </div>

                    {/* Hover indicator */}
                    <div
                      className="w-full h-1 mt-4 rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"
                      style={{ backgroundColor: section.color }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {MoreIndustrySections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <div className="mb-6">
              <h1 className={`text-base 2xl:text-xl font-medium text-black`}>
                More
              </h1>
            </div>
            {/* Industries Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {section.industries.map((industry, industryIndex) => (
                <div
                  key={industryIndex}
                  className="group/card bg-white p-6 rounded-md shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 cursor-pointer hover:-translate-y-1 relative"
                >

                  <ArrowUpRight className={`hidden size-3 2xl:size-5 group-hover/card:block right-6 absolute`} style={{ color: industry.color }} />

                  {/* Icon */}
                  <div
                    className="size-10 2xl:size-14 rounded-lg 2xl:rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover/card:scale-110"
                    style={{
                      backgroundColor: `${industry.color}15`,
                      border: `2px solid ${industry.color}25`
                    }}
                  >
                    <industry.icon
                      className="size-4 2xl:size-7 transition-colors duration-300"
                      style={{ color: industry.color }}
                    />
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3
                      className="text-sm 2xl:text-base font-semibold text-gray-900 mb-2 group-hover/card:transition-colors duration-300"
                      style={{
                        color: activeSection === sectionIndex ? industry.color : '#111827'
                      }}
                    >
                      {industry.name}
                    </h3>
                    <p className="text-xs 2xl:text-sm text-gray-600 leading-relaxed">
                      {industry.description}
                    </p>
                  </div>

                  {/* Hover indicator */}
                  <div
                    className="w-full h-1 mt-4 rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: industry.color }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* CTA Section */}
        <div className="text-center mt-20 bg-gradient-to-r from-gray-900 to-black rounded-2xl p-12 text-white overflow-hidden">
          <h3 className="text-2xl md:text-3xl lg:text-2xl xl:text-2xl 2xl:text-4xl font-bold mb-4">
            Don't See Your Industry?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto xl:text-xs 2xl:text-lg">
            We adapt our expertise to serve unique industry requirements. Let's discuss your specific challenges and opportunities.
          </p>
          <button
            className="bg-white text-black mx-auto flex items-center px-3 md:px-4 lg:px-2 xl:px-3 2xl:px-6 py-2 md:py-1.5 lg:py-1 xl:py-1.5 2xl:py-2.5 text-[8px] md:text-xs lg:text-[6px] xl:text-[8px] 2xl:text-sm font-semibold rounded-full transition-all duration-300 whitespace-nowrap uppercase"
          >
            Discuss Your Industry
          </button>
        </div>
      </SectionContainer>
    </section>
  );
};

export default Industries;