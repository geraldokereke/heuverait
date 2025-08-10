'use client';
import React from 'react';
import { BookOpen, X, TrendingUp, Users, Award } from 'lucide-react';
import SectionContainer from '@/components/ui/sectionContainer';
import SectionTitle from '@/components/ui/SectionTitle';
import Hero from '@/components/hero';

// Type definitions
interface CaseStudyContent {
  client: string;
  challenge: string;
  solution: string;
  results: string[];
  timeline: string;
  technologies: string[];
}

interface CaseStudy {
  id: number;
  category: string;
  title: string;
  preview: string;
  metric: string;
  fullContent: CaseStudyContent;
}

export default function CaseStudiesResources() {
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      category: "Technology • Retail",
      title: "Digital Transformation Success",
      preview: "How we helped a major retailer increase online sales by 150% through strategic digital transformation.",
      metric: "150% Growth",
      fullContent: {
        client: "RetailMax Corporation",
        challenge: "A traditional brick-and-mortar retailer struggling with declining foot traffic and limited online presence. Their e-commerce platform was outdated, customer experience was fragmented, and they lacked data-driven insights.",
        solution: "We implemented a comprehensive digital transformation strategy including a modern e-commerce platform, omnichannel customer experience, advanced analytics, and mobile-first design. Our team integrated inventory management systems and implemented personalized marketing automation.",
        results: [
          "150% increase in online sales within 6 months",
          "40% improvement in customer satisfaction scores",
          "65% increase in mobile conversions",
          "25% reduction in cart abandonment rate"
        ],
        timeline: "6 months",
        technologies: ["React", "Node.js", "AWS", "Shopify Plus", "Google Analytics"]
      }
    },
    {
      id: 2,
      category: "Healthcare • Operations",
      title: "Operational Excellence",
      preview: "Streamlined processes that reduced costs by 30% while improving patient satisfaction scores.",
      metric: "30% Cost Reduction",
      fullContent: {
        client: "Regional Medical Center",
        challenge: "Inefficient patient flow, redundant administrative processes, and poor communication between departments leading to high operational costs and declining patient satisfaction.",
        solution: "We redesigned patient journey workflows, implemented digital scheduling systems, automated administrative tasks, and created real-time communication platforms between departments. Staff training programs were developed to ensure smooth adoption.",
        results: [
          "30% reduction in operational costs",
          "45% decrease in patient wait times",
          "60% improvement in staff efficiency",
          "35% increase in patient satisfaction scores"
        ],
        timeline: "8 months",
        technologies: ["Electronic Health Records", "Workflow Automation", "Communication Platforms", "Analytics Dashboard"]
      }
    },
    {
      id: 3,
      category: "Manufacturing • Innovation",
      title: "Innovation Implementation",
      preview: "Revolutionary approach to manufacturing that increased efficiency by 40% and reduced waste.",
      metric: "40% Efficiency Gain",
      fullContent: {
        client: "Industrial Solutions Inc.",
        challenge: "Outdated manufacturing processes, high waste production, equipment downtime issues, and inability to meet increasing demand while maintaining quality standards.",
        solution: "We introduced IoT sensors for predictive maintenance, implemented lean manufacturing principles, automated quality control processes, and created real-time production monitoring systems. Employee training programs ensured successful adoption.",
        results: [
          "40% increase in production efficiency",
          "50% reduction in material waste",
          "60% decrease in equipment downtime",
          "25% improvement in product quality scores"
        ],
        timeline: "10 months",
        technologies: ["IoT Sensors", "Predictive Analytics", "Automation Systems", "Quality Control Software"]
      }
    }
  ];

  return (
    <>
      <Hero
        imgLink="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        section="solutions"
        title="Case Studies"
        height="h-[50vh]"
        description="Real-world stories of how our solutions drive transformation and measurable results for our clients."
      />

      {/* SECTION 1: Client Success Stories */}
      <SectionContainer className="py-10 md:py-16 border-b border-gray-200">
        <SectionTitle
          section="Results"
          title="Client Success Stories"
          subtitle="Discover how we've helped organizations across industries achieve their goals through innovative solutions and strategic partnerships."
        />

        {/* Case Study Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200"></div>
              <div className="p-6">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  {study.category}
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  {study.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {study.preview}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-black">
                    {study.metric}
                  </span>
                  <a
                    href={`/resources/case-studies/${study.fullContent.client.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}
                    className="text-black hover:text-primary font-medium text-sm transition-colors duration-200 underline"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* SECTION 2: Industries We Serve */}
      <SectionContainer className="py-10 md:py-16 bg-gray-50">
        <SectionTitle
          section="Expertise"
          title="Industries We Serve"
          subtitle="Our proven methodologies adapt to the unique challenges and opportunities across diverse sectors."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Healthcare", description: "Patient care optimization and operational excellence" },
            { name: "Technology", description: "Digital transformation and innovation strategies" },
            { name: "Manufacturing", description: "Process improvement and supply chain optimization" },
            { name: "Retail", description: "Customer experience and omnichannel solutions" }
          ].map((industry, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">
                {industry.name}
              </h3>
              <p className="text-gray-600 text-sm">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* SECTION 3: Call to Action */}
      <SectionContainer className="py-16 md:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join the companies that have transformed their operations and achieved remarkable results with our proven methodologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300">
              Start Your Project
            </button>
            <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold border-2 border-black hover:bg-gray-50 transition-colors duration-300">
              View All Case Studies
            </button>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}