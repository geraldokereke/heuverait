'use client';

import { notFound } from "next/navigation";
import SectionContainer from "@/components/ui/sectionContainer";
import SectionTitle from "@/components/ui/SectionTitle";
import Text from "@/components/ui/text";
import Hero from "@/components/hero";

// Dummy data import or fetch logic here
const caseStudies = [
  {
    slug: "digital-transformation-success",
    title: "Digital Transformation Success",
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
  // Add more case studies as needed
];

import React from "react";

export default function CaseStudyDetail({ params }: { params: Promise<{ caseStudy: string }> }) {
  const { caseStudy } = React.use(params);
  const study = caseStudies.find(cs => cs.slug === caseStudy);
  if (!study) return notFound();

  return (
    <div className="w-full bg-white text-black flex flex-col gap-16">
      {/* HERO HEADER */}
      <Hero
        imgLink="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80"
        section="Case Study"
        title={study.title}
        description={study.client}
        height="h-[50vh] md:h-[60vh]"
      />
      <SectionContainer className="py-16 space-y-12">
        <SectionTitle
          section="Case Study Details"
          title={study.title}
          subtitle={study.client}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <Text size="xl" font="montserrat" weight="bold">Challenge</Text>
            <Text size="lg" font="poppins" color="gray-700">{study.challenge}</Text>
            <Text size="xl" font="montserrat" weight="bold" className="mt-6">Solution</Text>
            <Text size="lg" font="poppins" color="gray-700">{study.solution}</Text>
            <Text size="xl" font="montserrat" weight="bold" className="mt-6">Timeline</Text>
            <Text size="lg" font="poppins" color="gray-700">{study.timeline}</Text>
            <Text size="xl" font="montserrat" weight="bold" className="mt-6">Technologies</Text>
            <div className="flex flex-wrap gap-2">
              {study.technologies.map(tech => (
                <span key={tech} className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">{tech}</span>
              ))}
            </div>
          </div>
          <div>
            <Text size="xl" font="montserrat" weight="bold">Results</Text>
            <ul className="list-disc ml-6 mt-2">
              {study.results.map(r => <li key={r} className="text-black text-base font-poppins mb-2">{r}</li>)}
            </ul>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
