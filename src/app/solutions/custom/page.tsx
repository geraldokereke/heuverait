'use client';
import React from 'react';
import { Code, Users, Layers, Star, CheckCircle } from 'lucide-react';
import SectionContainer from '@/components/ui/sectionContainer';
import SectionTitle from '@/components/ui/SectionTitle';

export default function CustomSoftwareDevelopment() {
  return (
    <>
      {/* HERO SECTION - Clean, Modern, Professional */}
      <div className="relative min-h-[60vh] md:min-h-[70vh] flex items-center bg-gradient-to-br from-[#f8fafc] via-[#e0f7fa] to-[#f8fafc] overflow-hidden">
        <SectionContainer className="z-10 w-full flex flex-col items-center justify-center text-center py-16 md:py-28">
          <div className="flex flex-col items-center gap-4 mb-4">
            <Code size={54} className="text-primary mx-auto" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 drop-shadow-lg">Custom Software Development</h1>
          <p className="text-lg md:text-2xl font-light text-gray-700 max-w-2xl mx-auto mb-6 md:mb-8">
            Bespoke digital solutions engineered for your unique business goals. From concept to launch, we deliver robust, scalable, and innovative software that drives real results.
          </p>
        </SectionContainer>
        <img src="/custom-software-hero.jpg" alt="Custom Software" className="absolute right-0 bottom-0 w-1/3 max-w-xs md:max-w-md opacity-70 hidden md:block" />
      </div>

      {/* SECTION 1: Discovery & Strategy */}
      <SectionContainer className="py-10 md:py-16 border-b">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80" alt="Discovery" className="rounded-lg shadow-lg w-full max-h-72 object-cover order-2 md:order-1" />
          <div className="order-1 md:order-2">
            <SectionTitle
              section="Approach"
              title="Discovery & Strategy"
              subtitle="We start by deeply understanding your business, challenges, and opportunities. Our experts collaborate with you to define a clear vision and roadmap for your custom solution."
              className="mb-6"
            />
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>In-depth requirements gathering</li>
              <li>Stakeholder workshops & ideation</li>
              <li>Technical feasibility analysis</li>
              <li>Strategic solution planning</li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* SECTION 2: Agile Development Excellence */}
      <SectionContainer className="py-10 md:py-16 border-b bg-[#f8fafc]">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <SectionTitle
              section="Execution"
              title="Agile Development Excellence"
              subtitle="Our multidisciplinary teams use agile methodologies to deliver high-quality, iterative results. We emphasize transparency, collaboration, and rapid feedback at every stage."
              className="mb-6"
            />
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Modern technology stacks</li>
              <li>Continuous integration & delivery</li>
              <li>Automated testing & QA</li>
              <li>Regular sprint reviews & demos</li>
            </ul>
          </div>
          <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&q=80" alt="Agile Development" className="rounded-lg shadow-lg w-full max-h-72 object-cover" />
        </div>
      </SectionContainer>

      {/* SECTION 3: User-Centric Design & Experience */}
      <SectionContainer className="py-10 md:py-16 border-b">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80" alt="UX Design" className="rounded-lg shadow-lg w-full max-h-72 object-cover order-2 md:order-1" />
          <div className="order-1 md:order-2">
            <SectionTitle
              section="Experience"
              title="User-Centric Design"
              subtitle="We craft intuitive, delightful interfaces that put your users first. Our design process balances beauty, usability, and accessibility for maximum impact."
              className="mb-6"
            />
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Wireframes & interactive prototypes</li>
              <li>Brand-aligned visual design</li>
              <li>Accessibility & inclusivity</li>
              <li>Usability testing & iteration</li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* SECTION 4: Launch & Ongoing Partnership */}
      <SectionContainer className="py-10 md:py-16 border-b bg-[#f8fafc]">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <SectionTitle
              section="Growth"
              title="Launch & Ongoing Partnership"
              subtitle="Our commitment extends beyond launch. We provide proactive support, performance optimization, and continuous enhancements to ensure your solution’s long-term success."
              className="mb-6"
            />
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Seamless go-live & deployment</li>
              <li>Comprehensive documentation</li>
              <li>Performance monitoring & analytics</li>
              <li>Dedicated support & evolution</li>
            </ul>
          </div>
          <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80" alt="Partnership" className="rounded-lg shadow-lg w-full max-h-72 object-cover" />
        </div>
      </SectionContainer>

      {/* CASE STUDIES SECTION */}
      <SectionContainer className="py-14">
        <SectionTitle
          section="Case Studies"
          title="Custom Software Success"
          subtitle="Real-world results from our tailor-made solutions."
          className="mb-12 text-center"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {/* Case Study 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-semibold mb-2">Fintech Platform Modernization</h3>
            <img src="https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?w=400&q=80" alt="Fintech" className="rounded-lg shadow mb-4 w-full h-40 object-cover" />
            <p className="text-gray-700 mb-4">
              We rebuilt a leading fintech company’s legacy platform, enabling scalable growth, improved security, and a 40% increase in customer satisfaction.
            </p>
            <ul className="list-disc ml-6 text-gray-700 mb-2">
              <li>Microservices architecture</li>
              <li>Real-time analytics dashboard</li>
              <li>Cloud-native deployment</li>
            </ul>
          </div>
          {/* Case Study 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-semibold mb-2">Retail Automation Suite</h3>
            <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&q=80" alt="Retail Automation" className="rounded-lg shadow mb-4 w-full h-40 object-cover" />
            <p className="text-gray-700 mb-4">
              Delivered a custom retail automation suite that streamlined inventory, sales, and reporting, reducing operational costs by 35%.
            </p>
            <ul className="list-disc ml-6 text-gray-700 mb-2">
              <li>Integrated POS & inventory</li>
              <li>Automated reporting tools</li>
              <li>Mobile management app</li>
            </ul>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}

