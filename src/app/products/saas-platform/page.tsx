import React from 'react';
import { Server } from 'lucide-react';
import SectionContainer from '@/components/ui/sectionContainer';
import SectionTitle from '@/components/ui/SectionTitle';

export default function SaaSPlatformProduct() {
  return (
    <>
      {/* HERO SECTION - Modern, Scalable, Distinct */}
      <div className="relative min-h-[60vh] md:min-h-[70vh] flex items-center bg-gradient-to-br from-[#f0fdfa] via-[#bae6fd] to-[#f0fdfa] overflow-hidden">
        <SectionContainer className="z-10 w-full flex flex-col items-center justify-center text-center py-16 md:py-28">
          <Server size={54} className="text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 drop-shadow-lg">SaaS Platform</h1>
          <p className="text-lg md:text-2xl font-light text-blue-800 max-w-2xl mx-auto mb-6 md:mb-8">
            A robust, cloud-native SaaS platform built for scale, security, and seamless integration.
          </p>
        </SectionContainer>
        <img src="/products-saas-hero.jpg" alt="SaaS Platform" className="absolute right-0 bottom-0 w-1/3 max-w-xs md:max-w-md opacity-70 hidden md:block" />
      </div>

      {/* SECTION 1: Core Features */}
      <SectionContainer className="py-10 md:py-16 border-b">
        <SectionTitle
          section="Features"
          title="Core Capabilities"
          subtitle="Everything modern enterprises need in a SaaS solution."
          className="mb-12 text-center"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-semibold mb-2">Multi-Tenant Architecture</h3>
            <p className="text-blue-800 mb-4">Efficiently serve multiple clients with secure, isolated data and resources.</p>
          </div>
          {/* Feature 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-semibold mb-2">API-First Integration</h3>
            <p className="text-blue-800 mb-4">Easily connect with third-party services and enterprise systems.</p>
          </div>
        </div>
      </SectionContainer>

      {/* SECTION 2: Customer Success */}
      <SectionContainer className="py-10 md:py-16">
        <SectionTitle
          section="Success"
          title="Customer Impact"
          subtitle="How our SaaS platform drives results for leading organizations."
          className="mb-12 text-center"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {/* Success Story 1 */}
          <div className="bg-blue-50 rounded-xl shadow-lg p-8 flex flex-col">
            <h4 className="text-xl font-semibold mb-2">Global Rollout</h4>
            <p className="text-blue-900 mb-4">Enabled a multinational to launch in 12 markets in under 6 months.</p>
          </div>
          {/* Success Story 2 */}
          <div className="bg-blue-50 rounded-xl shadow-lg p-8 flex flex-col">
            <h4 className="text-xl font-semibold mb-2">99.99% Uptime</h4>
            <p className="text-blue-900 mb-4">Delivered mission-critical reliability for a financial services leader.</p>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
