'use client';
import React from 'react';
import { ShoppingBag } from 'lucide-react';
import SectionContainer from '@/components/ui/sectionContainer';
import SectionTitle from '@/components/ui/SectionTitle';

export default function RetailIndustry() {
  return (
    <>
      {/* HERO SECTION - Lively, Customer-Focused, Distinct */}
      <div className="relative min-h-[60vh] md:min-h-[70vh] flex items-center bg-gradient-to-br from-[#f0fdfa] via-[#fbbf24] to-[#f0fdfa] overflow-hidden">
        <SectionContainer className="z-10 w-full flex flex-col items-center justify-center text-center py-16 md:py-28">
          <ShoppingBag size={54} className="text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-900 mb-4 drop-shadow-lg">Retail & E-Commerce Solutions</h1>
          <p className="text-lg md:text-2xl font-light text-yellow-800 max-w-2xl mx-auto mb-6 md:mb-8">
            Engaging digital commerce platforms and retail tools that drive sales, loyalty, and operational excellence.
          </p>
        </SectionContainer>
        <img src="/industries-retail-hero.jpg" alt="Retail" className="absolute right-0 bottom-0 w-1/3 max-w-xs md:max-w-md opacity-70 hidden md:block" />
      </div>

      {/* SECTION 1: Omnichannel Commerce */}
      <SectionContainer className="py-10 md:py-16 border-b">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src="https://images.unsplash.com/photo-1519494080410-f9aa8f52f1e9?w=600&q=80" alt="Omnichannel" className="rounded-lg shadow-lg w-full max-h-72 object-cover order-2 md:order-1" />
          <div className="order-1 md:order-2">
            <SectionTitle
              section="Commerce"
              title="Omnichannel Platforms"
              subtitle="Unified online and in-store experiences for modern shoppers."
              className="mb-6"
            />
            <ul className="list-disc ml-6 text-yellow-800 space-y-2">
              <li>Integrated POS & inventory</li>
              <li>Mobile & web storefronts</li>
              <li>Personalized promotions</li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* SECTION 2: Customer Engagement & Analytics */}
      <SectionContainer className="py-10 md:py-16 border-b bg-[#f0fdfa]">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <SectionTitle
              section="Loyalty"
              title="Customer Engagement & Analytics"
              subtitle="Data-driven tools to understand, engage, and retain customers."
              className="mb-6"
            />
            <ul className="list-disc ml-6 text-yellow-800 space-y-2">
              <li>Loyalty programs & rewards</li>
              <li>Customer segmentation</li>
              <li>Real-time analytics</li>
            </ul>
          </div>
          <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80" alt="Engagement" className="rounded-lg shadow-lg w-full max-h-72 object-cover" />
        </div>
      </SectionContainer>

      {/* CASE STUDIES SECTION */}
      <SectionContainer className="py-14">
        <SectionTitle
          section="Case Studies"
          title="Retail Impact"
          subtitle="How our digital solutions boost revenue and loyalty."
          className="mb-12 text-center"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {/* Case Study 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-semibold mb-2">Unified Commerce Rollout</h3>
            <img src="https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?w=400&q=80" alt="Unified Commerce" className="rounded-lg shadow mb-4 w-full h-40 object-cover" />
            <p className="text-yellow-800 mb-4">
              Launched a unified commerce platform for a retailer, increasing sales by 40% and improving customer retention.
            </p>
          </div>
          {/* Case Study 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-semibold mb-2">Loyalty Analytics Suite</h3>
            <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&q=80" alt="Loyalty Analytics" className="rounded-lg shadow mb-4 w-full h-40 object-cover" />
            <p className="text-yellow-800 mb-4">
              Delivered a loyalty analytics platform, increasing repeat purchases by 25% and enabling targeted marketing.
            </p>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
