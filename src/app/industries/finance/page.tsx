'use client';
import React from 'react';
import { Banknote } from 'lucide-react';
import SectionContainer from '@/components/ui/sectionContainer';
import SectionTitle from '@/components/ui/SectionTitle';

export default function FinanceIndustry() {
  return (
    <>
      {/* HERO SECTION - Confident, Modern, Distinct */}
      <div className="relative min-h-[60vh] md:min-h-[70vh] flex items-center bg-gradient-to-br from-[#fef9c3] via-[#fde68a] to-[#fef9c3] overflow-hidden">
        <SectionContainer className="z-10 w-full flex flex-col items-center justify-center text-center py-16 md:py-28">
          <Banknote size={54} className="text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-900 mb-4 drop-shadow-lg">Finance & Fintech Solutions</h1>
          <p className="text-lg md:text-2xl font-light text-yellow-800 max-w-2xl mx-auto mb-6 md:mb-8">
            Secure, scalable, and innovative digital products for banks, fintechs, and financial institutions.
          </p>
        </SectionContainer>
        <img src="/industries-finance-hero.jpg" alt="Finance" className="absolute right-0 bottom-0 w-1/3 max-w-xs md:max-w-md opacity-70 hidden md:block" />
      </div>

      {/* SECTION 1: Digital Banking Platforms */}
      <SectionContainer className="py-10 md:py-16 border-b">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&q=80" alt="Digital Banking" className="rounded-lg shadow-lg w-full max-h-72 object-cover order-2 md:order-1" />
          <div className="order-1 md:order-2">
            <SectionTitle
              section="Fintech"
              title="Digital Banking Platforms"
              subtitle="Modern banking apps and platforms that deliver seamless, secure digital experiences."
              className="mb-6"
            />
            <ul className="list-disc ml-6 text-yellow-800 space-y-2">
              <li>Mobile banking apps</li>
              <li>Customer onboarding & KYC</li>
              <li>Secure payments & transfers</li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* SECTION 2: Risk & Compliance Solutions */}
      <SectionContainer className="py-10 md:py-16 border-b bg-[#fef9c3]">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <SectionTitle
              section="Compliance"
              title="Risk & Compliance Solutions"
              subtitle="Tools to help financial institutions manage risk and meet regulatory requirements."
              className="mb-6"
            />
            <ul className="list-disc ml-6 text-yellow-800 space-y-2">
              <li>AML & fraud detection</li>
              <li>Regulatory reporting</li>
              <li>Audit trails & transparency</li>
            </ul>
          </div>
          <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80" alt="Compliance" className="rounded-lg shadow-lg w-full max-h-72 object-cover" />
        </div>
      </SectionContainer>

      {/* CASE STUDIES SECTION */}
      <SectionContainer className="py-14">
        <SectionTitle
          section="Case Studies"
          title="Finance Impact"
          subtitle="How our digital products transform financial services."
          className="mb-12 text-center"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {/* Case Study 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-semibold mb-2">Mobile Banking Suite</h3>
            <img src="https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?w=400&q=80" alt="Mobile Banking" className="rounded-lg shadow mb-4 w-full h-40 object-cover" />
            <p className="text-yellow-800 mb-4">
              Built a mobile banking app for a regional bank, increasing customer engagement by 60% and reducing branch visits.
            </p>
          </div>
          {/* Case Study 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-semibold mb-2">RegTech Automation</h3>
            <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&q=80" alt="RegTech" className="rounded-lg shadow mb-4 w-full h-40 object-cover" />
            <p className="text-yellow-800 mb-4">
              Automated regulatory reporting for a fintech, reducing compliance costs by 35% and improving audit readiness.
            </p>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
