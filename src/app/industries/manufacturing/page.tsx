'use client';
import React from 'react';
import { Factory } from 'lucide-react';
import SectionContainer from '@/components/ui/sectionContainer';
import SectionTitle from '@/components/ui/SectionTitle';

export default function ManufacturingIndustry() {
  return (
    <>
      {/* HERO SECTION - Industrial, Innovative, Distinct */}
      <div className="relative min-h-[60vh] md:min-h-[70vh] flex items-center bg-gradient-to-br from-[#f1f5f9] via-[#fed7aa] to-[#f1f5f9] overflow-hidden">
        <SectionContainer className="z-10 w-full flex flex-col items-center justify-center text-center py-16 md:py-28">
          <Factory size={54} className="text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-orange-900 mb-4 drop-shadow-lg">Manufacturing Solutions</h1>
          <p className="text-lg md:text-2xl font-light text-orange-800 max-w-2xl mx-auto mb-6 md:mb-8">
            Digital platforms and automation for smarter, more efficient factories and supply chains.
          </p>
        </SectionContainer>
        <img src="/industries-manufacturing-hero.jpg" alt="Manufacturing" className="absolute right-0 bottom-0 w-1/3 max-w-xs md:max-w-md opacity-70 hidden md:block" />
      </div>

      {/* SECTION 1: Smart Factory Automation */}
      <SectionContainer className="py-10 md:py-16 border-b">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src="https://images.unsplash.com/photo-1519494080410-f9aa8f52f1e9?w=600&q=80" alt="Smart Factory" className="rounded-lg shadow-lg w-full max-h-72 object-cover order-2 md:order-1" />
          <div className="order-1 md:order-2">
            <SectionTitle
              section="Industry 4.0"
              title="Smart Factory Automation"
              subtitle="IoT, robotics, and analytics to optimize production, reduce downtime, and boost quality."
              className="mb-6"
            />
            <ul className="list-disc ml-6 text-orange-800 space-y-2">
              <li>IoT-enabled equipment</li>
              <li>Predictive maintenance</li>
              <li>Automated quality control</li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* SECTION 2: Supply Chain Optimization */}
      <SectionContainer className="py-10 md:py-16 border-b bg-[#f1f5f9]">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <SectionTitle
              section="Logistics"
              title="Supply Chain Optimization"
              subtitle="Visibility and analytics for agile, resilient supply chains."
              className="mb-6"
            />
            <ul className="list-disc ml-6 text-orange-800 space-y-2">
              <li>Real-time inventory tracking</li>
              <li>Supplier collaboration portals</li>
              <li>Logistics and route planning</li>
            </ul>
          </div>
          <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80" alt="Supply Chain" className="rounded-lg shadow-lg w-full max-h-72 object-cover" />
        </div>
      </SectionContainer>

      {/* CASE STUDIES SECTION */}
      <SectionContainer className="py-14">
        <SectionTitle
          section="Case Studies"
          title="Manufacturing Impact"
          subtitle="How our digital solutions transform operations."
          className="mb-12 text-center"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {/* Case Study 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-semibold mb-2">Smart Factory Rollout</h3>
            <img src="https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?w=400&q=80" alt="Smart Factory" className="rounded-lg shadow mb-4 w-full h-40 object-cover" />
            <p className="text-orange-800 mb-4">
              Implemented IoT and robotics for a manufacturer, increasing throughput by 35% and reducing downtime.
            </p>
          </div>
          {/* Case Study 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-semibold mb-2">Supply Chain Analytics</h3>
            <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&q=80" alt="Supply Chain" className="rounded-lg shadow mb-4 w-full h-40 object-cover" />
            <p className="text-orange-800 mb-4">
              Delivered real-time analytics for a global supply chain, reducing costs by 20% and improving delivery accuracy.
            </p>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
