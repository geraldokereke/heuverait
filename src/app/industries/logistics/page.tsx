"use client";
import React from "react";
import { Truck } from "lucide-react";
import SectionContainer from "@/components/ui/sectionContainer";
import SectionTitle from "@/components/ui/SectionTitle";
import { logisticsCaseStudies } from "@/components/data/Healthcare";
import Hero from "@/components/hero";
import SideImage from "@/components/ui/SideImage";

export default function LogisticsIndustry() {
  return (
    <>
      <Hero
        imgLink="https://images.unsplash.com/photo-1519494080410-f9aa8f52f1e9?w=600&q=80"
        section="industries"
        title="Logistics & Supply Chain Solutions"
        description="Digital platforms and analytics for faster, smarter, and more resilient logistics and supply chains."
        height="h-[50vh]"
      />

      {/* SECTION 1: Fleet & Route Optimization */}
      <SectionContainer className="py-10 md:py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <SideImage
            imgsrc='https://images.unsplash.com/photo-1519494080410-f9aa8f52f1e9?w=600&q=80'
            borderSide='left'
            height='xl'
          />
          <div className="order-1 md:order-2">
            <SectionTitle
              section="Operations"
              title="Fleet & Route Optimization"
              subtitle="AI-driven route planning and real-time fleet management for cost savings and reliability."
              className="mb-6"
            />
            <ul className="list-disc ml-3 xl:ml-4 2xl:ml-6 text-slate-700 space-y-2 text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-lg">
              <li>Dynamic route optimization</li>
              <li>Telematics integration</li>
              <li>Real-time tracking</li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* SECTION 2: Supply Chain Visibility */}
      <div className="w-full bg-[#f1f5f9]">
        <SectionContainer className="py-10 md:py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <SectionTitle
                section="Visibility"
                title="Supply Chain Transparency"
                subtitle="End-to-end visibility and analytics for agile, resilient supply chains."
                className="mb-6"
              />
              <ul className="list-disc ml-3 xl:ml-4 2xl:ml-6 text-slate-700 space-y-2 text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-lg">
                <li>Shipment tracking portals</li>
                <li>Inventory analytics</li>
                <li>Supplier collaboration tools</li>
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
          title="Logistics Impact"
          subtitle="How our digital solutions streamline logistics."
          className="text-center"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {logisticsCaseStudies.map((study, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-xl p-6 flex flex-col"
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
