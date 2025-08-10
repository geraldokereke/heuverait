'use client';
import React from 'react';
import { Brain } from 'lucide-react';
import SectionContainer from '@/components/ui/sectionContainer';
import SectionTitle from '@/components/ui/SectionTitle';
import Hero from '@/components/hero';

export default function AiMlSolution() {
  return (
    <>
      <Hero
        imgLink="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        section="solutions"
        title="AI & Machine Learning"
        height="h-[50vh]"
        description="Unlock the power of AI to automate, predict, and optimize your business. We deliver intelligent solutions for the modern enterprise."
      />

      {/* SECTION 1: Predictive Analytics & Automation */}
      <SectionContainer className="py-10 md:py-16 border-b">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80" alt="Predictive Analytics" className="rounded-lg shadow-lg w-full max-h-72 object-cover order-2 md:order-1" />
          <div className="order-1 md:order-2">
            <SectionTitle
              section="Capabilities"
              title="Predictive Analytics & Automation"
              subtitle="We build AI models that forecast outcomes and automate decisions, driving efficiency and insight across your organization."
              className="mb-6"
            />
            <ul className="list-disc ml-6 text-slate-200 space-y-2">
              <li>Forecasting & demand planning</li>
              <li>Process automation</li>
              <li>Intelligent dashboards</li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* SECTION 2: Natural Language & Vision */}
      <SectionContainer className="py-10 md:py-16 border-b bg-[#1e293b]">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <SectionTitle
              section="Innovation"
              title="Natural Language & Vision"
              subtitle="We unlock meaning from text, images, and audio with advanced NLP and computer vision."
              className="mb-6"
            />
            <ul className="list-disc ml-6 text-slate-200 space-y-2">
              <li>Chatbots & virtual assistants</li>
              <li>Document & image analysis</li>
              <li>Speech-to-text solutions</li>
            </ul>
          </div>
          <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80" alt="NLP & Vision" className="rounded-lg shadow-lg w-full max-h-72 object-cover" />
        </div>
      </SectionContainer>

      {/* CASE STUDIES SECTION */}
      <SectionContainer className="py-14">
        <SectionTitle
          section="Case Studies"
          title="AI Success Stories"
          subtitle="Real-world impact from our AI solutions."
          className="mb-12 text-center"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {/* Case Study 1 */}
          <div className="bg-[#1e293b] rounded-xl shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-semibold mb-2 text-white">Retail Demand Forecasting</h3>
            <img src="https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?w=400&q=80" alt="Retail AI" className="rounded-lg shadow mb-4 w-full h-40 object-cover" />
            <p className="text-slate-200 mb-4">
              Built a predictive model for a retailer, improving inventory accuracy and reducing stockouts by 30%.
            </p>
          </div>
          {/* Case Study 2 */}
          <div className="bg-[#1e293b] rounded-xl shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-semibold mb-2 text-white">Automated Customer Support</h3>
            <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&q=80" alt="AI Support" className="rounded-lg shadow mb-4 w-full h-40 object-cover" />
            <p className="text-slate-200 mb-4">
              Deployed a multilingual chatbot, reducing response times by 70% and boosting customer satisfaction.
            </p>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
