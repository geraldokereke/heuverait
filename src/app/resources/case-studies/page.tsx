import React from 'react';
import { BookOpen } from 'lucide-react';
import SectionContainer from '@/components/ui/sectionContainer';
import SectionTitle from '@/components/ui/SectionTitle';

export default function CaseStudiesResources() {
  return (
    <>
      {/* HERO SECTION - Insightful, Trust-Building, Distinct */}
      <div className="relative min-h-[60vh] md:min-h-[70vh] flex items-center bg-gradient-to-br from-[#f8fafc] via-[#fbbf24] to-[#f8fafc] overflow-hidden">
        <SectionContainer className="z-10 w-full flex flex-col items-center justify-center text-center py-16 md:py-28">
          <BookOpen size={54} className="text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-900 mb-4 drop-shadow-lg">Case Studies</h1>
          <p className="text-lg md:text-2xl font-light text-yellow-800 max-w-2xl mx-auto mb-6 md:mb-8">
            Real-world stories of how our solutions drive transformation and measurable results for our clients.
          </p>
        </SectionContainer>
        <img src="/resources-case-studies-hero.jpg" alt="Case Studies" className="absolute right-0 bottom-0 w-1/3 max-w-xs md:max-w-md opacity-70 hidden md:block" />
      </div>

      {/* SECTION 1: Client Success Stories */}
      <SectionContainer className="py-10 md:py-16 border-b">
        <SectionTitle
          section="Results"
          title="Client Success Stories"
          subtitle="A closer look at our impact across industries."
          className="mb-12 text-center"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {/* Case Study 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-semibold mb-2">AI-Driven Retail Analytics</h3>
            <img src="https://images.unsplash.com/photo-1519494080410-f9aa8f52f1e9?w=400&q=80" alt="AI Retail" className="rounded-lg shadow mb-4 w-full h-40 object-cover" />
            <p className="text-yellow-800 mb-4">
              Enabled a retailer to increase sales by 30% and reduce out-of-stocks with predictive analytics.
            </p>
          </div>
          {/* Case Study 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-semibold mb-2">Cloud Migration for Healthcare</h3>
            <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&q=80" alt="Cloud Healthcare" className="rounded-lg shadow mb-4 w-full h-40 object-cover" />
            <p className="text-yellow-800 mb-4">
              Migrated a hospital network to the cloud, improving uptime, security, and reducing IT costs by 25%.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* SECTION 2: Industry Spotlights */}
      <SectionContainer className="py-10 md:py-16">
        <SectionTitle
          section="Spotlights"
          title="Industry Highlights"
          subtitle="How we help leaders in finance, manufacturing, and more."
          className="mb-12 text-center"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {/* Spotlight 1 */}
          <div className="bg-yellow-50 rounded-xl shadow-lg p-8 flex flex-col">
            <h4 className="text-xl font-semibold mb-2">Fintech Automation</h4>
            <p className="text-yellow-900 mb-4">Automated compliance and reporting for a fintech, reducing costs and improving audit readiness.</p>
          </div>
          {/* Spotlight 2 */}
          <div className="bg-yellow-50 rounded-xl shadow-lg p-8 flex flex-col">
            <h4 className="text-xl font-semibold mb-2">Smart Manufacturing</h4>
            <p className="text-yellow-900 mb-4">IoT-enabled factory rollout for a manufacturer, increasing throughput and reducing downtime.</p>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
