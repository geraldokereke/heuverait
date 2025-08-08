"use client";
import React from "react";
import { Truck } from "lucide-react";
import SectionContainer from "@/components/ui/sectionContainer";
import SectionTitle from "@/components/ui/SectionTitle";
import { logisticsCaseStudies } from "@/components/data/Healthcare";

export default function LogisticsIndustry() {
  return (
    <>
      {/* HERO SECTION - Efficient, Dynamic, Distinct */}
      <div className="relative min-h-[60vh] md:min-h-[70vh] flex items-center bg-gradient-to-br from-[#e0f2fe] via-[#bae6fd] to-[#e0f2fe] overflow-hidden">
        <SectionContainer className="z-10 w-full flex flex-col items-center justify-center text-center py-16 md:py-28">
          <Truck size={54} className="text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-sky-900 mb-4 drop-shadow-lg">
            Logistics & Supply Chain Solutions
          </h1>
          <p className="text-lg md:text-2xl font-light text-sky-800 max-w-2xl mx-auto mb-6 md:mb-8">
            Digital platforms and analytics for faster, smarter, and more
            resilient logistics and supply chains.
          </p>
        </SectionContainer>
        <img
          src="/industries-logistics-hero.jpg"
          alt="Logistics"
          className="absolute right-0 bottom-0 w-1/3 max-w-xs md:max-w-md opacity-70 hidden md:block"
        />
      </div>

      {/* SECTION 1: Fleet & Route Optimization */}
      <SectionContainer className="py-10 md:py-16 border-b">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://images.unsplash.com/photo-1519494080410-f9aa8f52f1e9?w=600&q=80"
            alt="Fleet Optimization"
            className="rounded-lg shadow-lg w-full max-h-72 object-cover order-2 md:order-1"
          />
          <div className="order-1 md:order-2">
            <SectionTitle
              section="Operations"
              title="Fleet & Route Optimization"
              subtitle="AI-driven route planning and real-time fleet management for cost savings and reliability."
              className="mb-6"
            />
            <ul className="list-disc ml-6 text-sky-800 space-y-2">
              <li>Dynamic route optimization</li>
              <li>Telematics integration</li>
              <li>Real-time tracking</li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* SECTION 2: Supply Chain Visibility */}
      <SectionContainer className="py-10 md:py-16 border-b bg-[#e0f2fe]">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <SectionTitle
              section="Visibility"
              title="Supply Chain Transparency"
              subtitle="End-to-end visibility and analytics for agile, resilient supply chains."
              className="mb-6"
            />
            <ul className="list-disc ml-6 text-sky-800 space-y-2">
              <li>Shipment tracking portals</li>
              <li>Inventory analytics</li>
              <li>Supplier collaboration tools</li>
            </ul>
          </div>
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80"
            alt="Supply Chain"
            className="rounded-lg shadow-lg w-full max-h-72 object-cover"
          />
        </div>
      </SectionContainer>

      {/* CASE STUDIES SECTION */}
      <SectionContainer className="py-14">
        <SectionTitle
          section="Case Studies"
          title="Logistics Impact"
          subtitle="How our digital solutions streamline logistics."
          className="mb-12 text-center"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {logisticsCaseStudies.map((study, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col"
            >
              <h3 className="text-2xl font-semibold mb-2">{study.title}</h3>
              <img
                src={study.img.src}
                alt={study.img.alt}
                className="rounded-lg shadow mb-4 w-full h-40 object-cover"
              />
              <p className="text-sky-800 mb-4">{study.description}</p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </>
  );
}
