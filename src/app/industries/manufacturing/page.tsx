"use client";
import React from "react";
import { Factory } from "lucide-react";
import SectionContainer from "@/components/ui/sectionContainer";
import SectionTitle from "@/components/ui/SectionTitle";
import { manufacturingCaseStudies } from "@/components/data/Manufacturing";
import Hero from "@/components/hero";
import SideImage from "@/components/ui/SideImage";

export default function ManufacturingIndustry() {
  return (
    <>
      <Hero
        imgLink="https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=1200&q=80"
        section="industries"
        title="Manufacturing Solutions"
        description="Digital platforms and automation for smarter, more efficient factories and supply chains."
        height="h-[50vh]"
      />
      {/* SECTION 1: Smart Factory Automation */}
      <SectionContainer className="py-10 md:py-16 border-b">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <SideImage
            imgsrc='https://images.unsplash.com/photo-1519494080410-f9aa8f52f1e9?w=600&q=80" alt="Patient Engagement'
            borderSide='left'
            height='xl'
          />
          <div className="order-1 md:order-2">
            <SectionTitle
              section="Industry 4.0"
              title="Smart Factory Automation"
              subtitle="IoT, robotics, and analytics to optimize production, reduce downtime, and boost quality."
              className="mb-6"
            />
            <ul className="list-disc ml-3 xl:ml-4 2xl:ml-6 text-slate-700 space-y-2 text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-lg">
              <li>IoT-enabled equipment</li>
              <li>Predictive maintenance</li>
              <li>Automated quality control</li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* SECTION 2: Supply Chain Optimization */}
      <div className="w-full bg-[#f1f5f9]">
        <SectionContainer className="py-10 md:py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <SectionTitle
                section="Logistics"
                title="Supply Chain Optimization"
                subtitle="Visibility and analytics for agile, resilient supply chains."
                className="mb-6"
              />
              <ul className="list-disc ml-3 xl:ml-4 2xl:ml-6 text-slate-700 space-y-2 text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-lg">
                <li>Real-time inventory tracking</li>
                <li>Supplier collaboration portals</li>
                <li>Logistics and route planning</li>
              </ul>
            </div>
            <SideImage
              imgsrc='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80'
              borderSide='right'
              height='xl'
            />
          </div>
        </SectionContainer>
      </div>

      {/* CASE STUDIES SECTION */}
      <SectionContainer className="py-14">
        <SectionTitle
          section="Case Studies"
          title="Manufacturing Impact"
          subtitle="How our digital solutions transform operations."
          className="text-center"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {manufacturingCaseStudies.map((study, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col"
            >
              <SideImage
                imgsrc={study.img.src}
                height='lg'
                borderSide='all'
              />
              <h3 className="text-sm md:text-base lg:text-sm xl:text-base 2xl:text-2xl font-semibold mt-3 2xl:mt-5">{study.title}</h3>
              <p className="text-slate-700 text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-lg mt-1">{study.description}</p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </>
  );
}
