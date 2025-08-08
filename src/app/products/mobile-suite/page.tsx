"use client";

import React from "react";
import { Smartphone } from "lucide-react";
import SectionContainer from "@/components/ui/sectionContainer";
import SectionTitle from "@/components/ui/SectionTitle";
import { mobileApps } from "@/components/data/MobileSuite";

export default function MobileSuiteProduct() {
  return (
    <>
      {/* HERO SECTION - Sleek, Innovative, Distinct */}
      <div className="relative min-h-[60vh] md:min-h-[70vh] flex items-center bg-gradient-to-br from-[#f0fdfa] via-[#fbbf24] to-[#f0fdfa] overflow-hidden">
        <SectionContainer className="z-10 w-full flex flex-col items-center justify-center text-center py-16 md:py-28">
          <Smartphone size={54} className="text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-900 mb-4 drop-shadow-lg">
            Mobile App Suite
          </h1>
          <p className="text-lg md:text-2xl font-light text-yellow-800 max-w-2xl mx-auto mb-6 md:mb-8">
            A suite of high-performance mobile apps for business productivity,
            engagement, and growth.
          </p>
        </SectionContainer>
        <img
          src="/products-mobile-hero.jpg"
          alt="Mobile Suite"
          className="absolute right-0 bottom-0 w-1/3 max-w-xs md:max-w-md opacity-70 hidden md:block"
        />
      </div>

      {/* SECTION 1: Core Apps */}
      <SectionContainer className="py-10 md:py-16 border-b">
        <SectionTitle
          section="Apps"
          title="Core Mobile Solutions"
          subtitle="Ready-to-use apps for every business need."
          className="mb-12 text-center"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {mobileApps.map((app, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col"
            >
              <h3 className="text-2xl font-semibold mb-2">{app.title}</h3>
              <p className="text-yellow-800 mb-4">{app.description}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* SECTION 2: Customer Results */}
      <SectionContainer className="py-10 md:py-16">
        <SectionTitle
          section="Results"
          title="Customer Results"
          subtitle="How our mobile suite accelerates business outcomes."
          className="mb-12 text-center"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {/* Result 1 */}
          <div className="bg-yellow-50 rounded-xl shadow-lg p-8 flex flex-col">
            <h4 className="text-xl font-semibold mb-2">
              30% Faster Sales Cycles
            </h4>
            <p className="text-yellow-900 mb-4">
              Clients close deals faster with mobile CRM and instant
              notifications.
            </p>
          </div>
          {/* Result 2 */}
          <div className="bg-yellow-50 rounded-xl shadow-lg p-8 flex flex-col">
            <h4 className="text-xl font-semibold mb-2">
              Employee Engagement Up 40%
            </h4>
            <p className="text-yellow-900 mb-4">
              Mobile self-service increases productivity and satisfaction.
            </p>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
