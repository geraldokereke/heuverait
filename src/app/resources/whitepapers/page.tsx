'use client';

import React from 'react';
import { FileText } from 'lucide-react';
import SectionContainer from '@/components/ui/sectionContainer';
import SectionTitle from '@/components/ui/SectionTitle';

export default function WhitepapersResources() {
  return (
    <>
      {/* HERO SECTION - Authoritative, Clean, Distinct */}
      <div className="relative min-h-[60vh] md:min-h-[70vh] flex items-center bg-gradient-to-br from-[#f8fafc] via-[#bae6fd] to-[#f8fafc] overflow-hidden">
        <SectionContainer className="z-10 w-full flex flex-col items-center justify-center text-center py-16 md:py-28">
          <FileText size={54} className="text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 drop-shadow-lg">Whitepapers & Insights</h1>
          <p className="text-lg md:text-2xl font-light text-blue-800 max-w-2xl mx-auto mb-6 md:mb-8">
            In-depth research and analysis on technology, innovation, and digital transformation trends.
          </p>
        </SectionContainer>
        <img src="/resources-whitepapers-hero.jpg" alt="Whitepapers" className="absolute right-0 bottom-0 w-1/3 max-w-xs md:max-w-md opacity-70 hidden md:block" />
      </div>

      {/* SECTION 1: Featured Whitepapers */}
      <SectionContainer className="py-10 md:py-16 border-b">
        <SectionTitle
          section="Research"
          title="Featured Whitepapers"
          subtitle="Our latest thought leadership and technical deep-dives."
          className="mb-12 text-center"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {/* Whitepaper 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-semibold mb-2">AI in Healthcare: Opportunities & Challenges</h3>
            <img src="https://images.unsplash.com/photo-1519494080410-f9aa8f52f1e9?w=400&q=80" alt="AI in Healthcare" className="rounded-lg shadow mb-4 w-full h-40 object-cover" />
            <p className="text-blue-800 mb-4">
              Explore how artificial intelligence is transforming patient care, diagnostics, and hospital operations.
            </p>
            <a href="#" className="text-primary font-semibold hover:underline">Download PDF</a>
          </div>
          {/* Whitepaper 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-semibold mb-2">Cloud Migration Best Practices</h3>
            <img src="https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?w=400&q=80" alt="Cloud Migration" className="rounded-lg shadow mb-4 w-full h-40 object-cover" />
            <p className="text-blue-800 mb-4">
              A practical guide for enterprises moving to the cloud, covering strategy, security, and cost optimization.
            </p>
            <a href="#" className="text-primary font-semibold hover:underline">Download PDF</a>
          </div>
        </div>
      </SectionContainer>

      {/* SECTION 2: Industry Insights */}
      <SectionContainer className="py-10 md:py-16">
        <SectionTitle
          section="Insights"
          title="Industry Analysis"
          subtitle="Expert perspectives on digital trends and innovation."
          className="mb-12 text-center"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {/* Insight 1 */}
          <div className="bg-blue-50 rounded-xl shadow-lg p-8 flex flex-col">
            <h4 className="text-xl font-semibold mb-2">The Future of Fintech</h4>
            <p className="text-blue-900 mb-4">How digital banking and blockchain are reshaping financial services.</p>
            <a href="#" className="text-primary font-semibold hover:underline">Read More</a>
          </div>
          {/* Insight 2 */}
          <div className="bg-blue-50 rounded-xl shadow-lg p-8 flex flex-col">
            <h4 className="text-xl font-semibold mb-2">Manufacturing 4.0</h4>
            <p className="text-blue-900 mb-4">Smart factories, IoT, and analytics for next-gen manufacturing.</p>
            <a href="#" className="text-primary font-semibold hover:underline">Read More</a>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
