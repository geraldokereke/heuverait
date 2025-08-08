"use client";

import React from "react";
import { BarChart3 } from "lucide-react";
import SectionContainer from "@/components/ui/sectionContainer";
import SectionTitle from "@/components/ui/SectionTitle";
import { analyticsImpact, analyticsTools } from "@/components/data/Analytics";

export default function AnalyticsSuiteProduct() {
  return (
    <>
      {/* HERO SECTION - Data-Driven, Insightful, Distinct */}
      <div className="relative min-h-[60vh] md:min-h-[70vh] flex items-center bg-gradient-to-br from-[#f1f5f9] via-[#a7f3d0] to-[#f1f5f9] overflow-hidden">
        <SectionContainer className="z-10 w-full flex flex-col items-center justify-center text-center py-16 md:py-28">
          <BarChart3 size={54} className="text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-4 drop-shadow-lg">
            Analytics Suite
          </h1>
          <p className="text-lg md:text-2xl font-light text-green-800 max-w-2xl mx-auto mb-6 md:mb-8">
            Advanced analytics and BI tools to unlock actionable insights and
            drive business growth.
          </p>
        </SectionContainer>
        <img
          src="/products-analytics-hero.jpg"
          alt="Analytics Suite"
          className="absolute right-0 bottom-0 w-1/3 max-w-xs md:max-w-md opacity-70 hidden md:block"
        />
      </div>

      {/* SECTION 1: Core Analytics Tools */}
      <SectionContainer className="py-10 md:py-16 border-b">
        <SectionTitle
          section="Tools"
          title="Core Analytics"
          subtitle="Comprehensive BI, reporting, and visualization modules."
          className="mb-12 text-center"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {analyticsTools.map((tool, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col"
            >
              <h3 className="text-2xl font-semibold mb-2">{tool.title}</h3>
              <p className="text-green-800 mb-4">{tool.description}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* SECTION 2: Customer Impact */}
      <SectionContainer className="py-10 md:py-16">
        <SectionTitle
          section="Impact"
          title="Customer Impact"
          subtitle="How our analytics suite delivers measurable results."
          className="mb-12 text-center"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {analyticsImpact.map((impact, idx) => (
            <div
              key={idx}
              className="bg-green-50 rounded-xl shadow-lg p-8 flex flex-col"
            >
              <h4 className="text-xl font-semibold mb-2">{impact.title}</h4>
              <p className="text-green-900 mb-4">{impact.description}</p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </>
  );
}
