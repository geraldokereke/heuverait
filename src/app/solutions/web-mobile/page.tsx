'use client';
import React from 'react';
import { Globe } from 'lucide-react';
import SectionContainer from '@/components/ui/sectionContainer';
import SectionTitle from '@/components/ui/SectionTitle';

export default function WebMobileSolution() {
  return (
    <>
      {/* HERO SECTION - Vibrant, Modern, Distinct */}
      <div className="relative min-h-[60vh] md:min-h-[70vh] flex items-center bg-gradient-to-br from-[#f0fdfa] via-[#a7f3d0] to-[#f0fdfa] overflow-hidden">
        <SectionContainer className="z-10 w-full flex flex-col items-center justify-center text-center py-16 md:py-28">
          <Globe size={54} className="text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 drop-shadow-lg">Web & Mobile App Development</h1>
          <p className="text-lg md:text-2xl font-light text-gray-700 max-w-2xl mx-auto mb-6 md:mb-8">
            Cutting-edge solutions for every screen. We create seamless, high-performance web and mobile apps tailored to your goals.
          </p>
        </SectionContainer>
        <img src="/web-mobile-hero.jpg" alt="Web & Mobile" className="absolute left-0 bottom-0 w-1/3 max-w-xs md:max-w-md opacity-70 hidden md:block" />
      </div>

      {/* SECTION 1: Cross-Platform Expertise */}
      <SectionContainer className="py-10 md:py-16 border-b">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&q=80" alt="Cross Platform" className="rounded-lg shadow-lg w-full max-h-72 object-cover order-2 md:order-1" />
          <div className="order-1 md:order-2">
            <SectionTitle
              section="Expertise"
              title="Cross-Platform Mastery"
              subtitle="Apps that run flawlessly on web, iOS, and Android. We leverage the latest frameworks for maximum reach and performance."
              className="mb-6"
            />
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>React, Next.js, Flutter, React Native</li>
              <li>Native iOS & Android development</li>
              <li>Progressive Web Apps (PWAs)</li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* SECTION 2: User Experience & Interface Design */}
      <SectionContainer className="py-10 md:py-16 border-b bg-[#f0fdfa]">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <SectionTitle
              section="Design"
              title="User Experience First"
              subtitle="We design beautiful, intuitive interfaces that keep users coming back. Our process is rooted in research, prototyping, and real feedback."
              className="mb-6"
            />
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>UI/UX research & wireframing</li>
              <li>Mobile-first, responsive design</li>
              <li>Accessibility & inclusivity</li>
            </ul>
          </div>
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80" alt="UX Design" className="rounded-lg shadow-lg w-full max-h-72 object-cover" />
        </div>
      </SectionContainer>

      {/* SECTION 3: Agile Delivery & DevOps */}
      <SectionContainer className="py-10 md:py-16 border-b">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80" alt="DevOps" className="rounded-lg shadow-lg w-full max-h-72 object-cover order-2 md:order-1" />
          <div className="order-1 md:order-2">
            <SectionTitle
              section="Delivery"
              title="Agile & DevOps Excellence"
              subtitle="We deliver fast, iterate often, and automate everything. Our DevOps approach ensures quality, security, and rapid releases."
              className="mb-6"
            />
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Continuous integration & deployment</li>
              <li>Automated testing & QA</li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* CASE STUDIES SECTION */}
      <SectionContainer className="py-14">
        <SectionTitle
          section="Case Studies"
          title="Web & Mobile Success"
          subtitle="How we’ve helped clients win on every screen."
          className="mb-12 text-center"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {/* Case Study 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-semibold mb-2">E-Commerce App Transformation</h3>
            <img src="https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?w=400&q=80" alt="E-Commerce App" className="rounded-lg shadow mb-4 w-full h-40 object-cover" />
            <p className="text-gray-700 mb-4">
              Built a cross-platform e-commerce app for a global retailer, boosting conversion rates by 50% and customer engagement by 70%.
            </p>
          </div>
          {/* Case Study 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-semibold mb-2">Healthcare Mobile Portal</h3>
            <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&q=80" alt="Healthcare Mobile" className="rounded-lg shadow mb-4 w-full h-40 object-cover" />
            <p className="text-gray-700 mb-4">
              Delivered a secure, HIPAA-compliant mobile portal for a healthcare provider, improving patient access and satisfaction by 60%.
            </p>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}

