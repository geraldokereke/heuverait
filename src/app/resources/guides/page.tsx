'use client';

import React from 'react';
import { Book } from 'lucide-react';
import SectionContainer from '@/components/ui/sectionContainer';
import SectionTitle from '@/components/ui/SectionTitle';

export default function GuidesResources() {
  return (
    <>
      {/* HERO SECTION - Practical, Supportive, Distinct */}
      <div className="relative min-h-[60vh] md:min-h-[70vh] flex items-center bg-gradient-to-br from-[#f1f5f9] via-[#a7f3d0] to-[#f1f5f9] overflow-hidden">
        <SectionContainer className="z-10 w-full flex flex-col items-center justify-center text-center py-16 md:py-28">
          <Book size={54} className="text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-4 drop-shadow-lg">Guides & Tutorials</h1>
          <p className="text-lg md:text-2xl font-light text-green-800 max-w-2xl mx-auto mb-6 md:mb-8">
            Step-by-step guides and tutorials to help you get the most out of digital solutions and tools.
          </p>
        </SectionContainer>
        <img src="/resources-guides-hero.jpg" alt="Guides" className="absolute right-0 bottom-0 w-1/3 max-w-xs md:max-w-md opacity-70 hidden md:block" />
      </div>

      {/* SECTION 1: Getting Started */}
      <SectionContainer className="py-10 md:py-16 border-b">
        <SectionTitle
          section="Basics"
          title="Getting Started"
          subtitle="Simple guides for onboarding and setup."
          className="mb-12 text-center"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {/* Guide 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-semibold mb-2">Cloud Platform Onboarding</h3>
            <img src="https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?w=400&q=80" alt="Cloud Onboarding" className="rounded-lg shadow mb-4 w-full h-40 object-cover" />
            <p className="text-green-800 mb-4">
              A step-by-step guide to getting started with our enterprise cloud solutions.
            </p>
            <a href="#" className="text-primary font-semibold hover:underline">Read Guide</a>
          </div>
          {/* Guide 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-semibold mb-2">Mobile App Integration</h3>
            <img src="https://images.unsplash.com/photo-1519494080410-f9aa8f52f1e9?w=400&q=80" alt="Mobile Integration" className="rounded-lg shadow mb-4 w-full h-40 object-cover" />
            <p className="text-green-800 mb-4">
              Learn how to connect your mobile apps to our backend services and APIs.
            </p>
            <a href="#" className="text-primary font-semibold hover:underline">Read Guide</a>
          </div>
        </div>
      </SectionContainer>

      {/* SECTION 2: Advanced Tutorials */}
      <SectionContainer className="py-10 md:py-16">
        <SectionTitle
          section="Advanced"
          title="Deep Dive Tutorials"
          subtitle="Master advanced features and integrations."
          className="mb-12 text-center"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {/* Tutorial 1 */}
          <div className="bg-green-50 rounded-xl shadow-lg p-8 flex flex-col">
            <h4 className="text-xl font-semibold mb-2">API Security Best Practices</h4>
            <p className="text-green-900 mb-4">Ensure your integrations are safe, secure, and scalable.</p>
            <a href="#" className="text-primary font-semibold hover:underline">View Tutorial</a>
          </div>
          {/* Tutorial 2 */}
          <div className="bg-green-50 rounded-xl shadow-lg p-8 flex flex-col">
            <h4 className="text-xl font-semibold mb-2">Automating Workflows</h4>
            <p className="text-green-900 mb-4">How to automate business processes using our platform’s tools.</p>
            <a href="#" className="text-primary font-semibold hover:underline">View Tutorial</a>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
