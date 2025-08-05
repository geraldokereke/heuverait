'use client';
import React from 'react';
import { HeartPulse } from 'lucide-react';
import SectionContainer from '@/components/ui/sectionContainer';
import SectionTitle from '@/components/ui/SectionTitle';

export default function HealthcareIndustry() {
  return (
    <>
      {/* HERO SECTION - Calm, Trustworthy, Distinct */}
      <div className="relative min-h-[60vh] md:min-h-[70vh] flex items-center bg-gradient-to-br from-[#f1f5f9] via-[#bae6fd] to-[#f1f5f9] overflow-hidden">
        <SectionContainer className="z-10 w-full flex flex-col items-center justify-center text-center py-16 md:py-28">
          <HeartPulse size={54} className="text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 drop-shadow-lg">Healthcare Solutions</h1>
          <p className="text-lg md:text-2xl font-light text-slate-700 max-w-2xl mx-auto mb-6 md:mb-8">
            Empowering care providers and patients with secure, intuitive, and innovative digital healthcare platforms.
          </p>
        </SectionContainer>
        <img src="/industries-healthcare-hero.jpg" alt="Healthcare" className="absolute right-0 bottom-0 w-1/3 max-w-xs md:max-w-md opacity-70 hidden md:block" />
      </div>

      {/* SECTION 1: Patient Engagement Platforms */}
      <SectionContainer className="py-10 md:py-16 border-b">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src="https://images.unsplash.com/photo-1519494080410-f9aa8f52f1e9?w=600&q=80" alt="Patient Engagement" className="rounded-lg shadow-lg w-full max-h-72 object-cover order-2 md:order-1" />
          <div className="order-1 md:order-2">
            <SectionTitle
              section="Digital Health"
              title="Patient Engagement Platforms"
              subtitle="Seamless portals and mobile apps that connect patients with care, improve outcomes, and boost satisfaction."
              className="mb-6"
            />
            <ul className="list-disc ml-6 text-slate-700 space-y-2">
              <li>Online appointment booking</li>
              <li>Telemedicine integration</li>
              <li>Personal health records</li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* SECTION 2: Provider & Operations Solutions */}
      <SectionContainer className="py-10 md:py-16 border-b bg-[#f1f5f9]">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <SectionTitle
              section="Care Delivery"
              title="Provider & Operations Solutions"
              subtitle="Streamlining workflows for clinicians and administrators with secure, interoperable tools."
              className="mb-6"
            />
            <ul className="list-disc ml-6 text-slate-700 space-y-2">
              <li>EHR/EMR system integration</li>
              <li>Workflow automation</li>
              <li>HIPAA-compliant data security</li>
            </ul>
          </div>
          <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&q=80" alt="Provider Solutions" className="rounded-lg shadow-lg w-full max-h-72 object-cover" />
        </div>
      </SectionContainer>

      {/* CASE STUDIES SECTION */}
      <SectionContainer className="py-14">
        <SectionTitle
          section="Case Studies"
          title="Healthcare Impact"
          subtitle="How our digital solutions improve care delivery."
          className="mb-12 text-center"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {/* Case Study 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-semibold mb-2">Telemedicine Platform Launch</h3>
            <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&q=80" alt="Telemedicine" className="rounded-lg shadow mb-4 w-full h-40 object-cover" />
            <p className="text-slate-700 mb-4">
              Built a secure telemedicine platform for a hospital network, enabling 24/7 virtual care and increasing patient access by 45%.
            </p>
          </div>
          {/* Case Study 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-semibold mb-2">EHR Workflow Automation</h3>
            <img src="https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?w=400&q=80" alt="EHR Automation" className="rounded-lg shadow mb-4 w-full h-40 object-cover" />
            <p className="text-slate-700 mb-4">
              Automated EHR workflows for a clinic, reducing admin time by 30% and improving data accuracy.
            </p>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
