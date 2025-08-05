"use client";

'use client';
import React from 'react';
import { Cloud, Shield, Zap, Database, Rocket } from 'lucide-react';
import SectionContainer from '@/components/ui/sectionContainer';
import SectionTitle from '@/components/ui/SectionTitle';

export default function CloudSolution() {
  return (
    <>
      {/* HERO SECTION - Professional Parallax Style */}
      <div className="relative min-h-[60vh] md:min-h-[80vh] flex items-center overflow-hidden bg-black">
        {/* Parallax Background */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/cloud-hero.jpg"
            alt="Cloud Hero Background"
            className="object-cover w-full h-full"
            style={{ filter: 'brightness(0.7)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20" />
        </div>
        {/* Content */}
        <SectionContainer className="relative z-10 w-full flex flex-col items-center justify-center text-center py-20 md:py-32">
          <div className="flex flex-col items-center gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-px bg-gradient-to-r from-transparent via-[#41a7ad] to-transparent" />
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#41a7ad] rounded-full shadow-lg shadow-[#41a7ad]/50 animate-pulse" />
              </div>
              <span className="text-white/80 text-xs font-light tracking-wider uppercase font-montserrat">Solutions</span>
            </div>
            <Cloud size={56} className="text-primary mx-auto" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">Cloud Services</h1>
          <p className="text-lg md:text-2xl font-light text-white/90 max-w-2xl mx-auto mb-6 md:mb-8">
            Enterprise-grade, secure, and scalable cloud solutions that accelerate your digital transformation. Harness the power of the cloud for innovation, resilience, and operational excellence.
          </p>
        </SectionContainer>
      </div>

      {/* SECTION 1: Cloud Migration & Modernization */}
      <SectionContainer className="py-10 md:py-16 border-b">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <SectionTitle
              section="Migration"
              title="Cloud Migration & Modernization"
              subtitle="Seamlessly transition your legacy systems and applications to the cloud with minimal disruption. Our proven frameworks ensure a secure, efficient, and cost-effective migration, unlocking agility and future-readiness for your business."
              className="mb-6"
            />
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Assessment & cloud strategy development</li>
              <li>Lift-and-shift, re-platforming, and re-architecting</li>
              <li>Zero-downtime migrations</li>
              <li>Change management & user training</li>
            </ul>
          </div>
          <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80" alt="Cloud Migration" className="rounded-lg shadow-lg w-full max-h-80 object-cover" />
        </div>
      </SectionContainer>

      {/* SECTION 2: Hybrid & Multi-Cloud Solutions */}
      <SectionContainer className="py-10 md:py-16 border-b bg-gray-50">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80" alt="Hybrid Cloud" className="rounded-lg shadow-lg w-full max-h-80 object-cover order-2 md:order-1" />
          <div className="order-1 md:order-2">
            <SectionTitle
              section="Architecture"
              title="Hybrid & Multi-Cloud Solutions"
              subtitle="Achieve flexibility and resilience by leveraging multiple cloud providers and on-premises resources. We design, implement, and manage hybrid and multi-cloud architectures tailored to your compliance, performance, and budget needs."
              className="mb-6"
            />
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Custom hybrid cloud architectures</li>
              <li>Multi-cloud workload management</li>
              <li>Unified monitoring & governance</li>
              <li>Disaster recovery & business continuity</li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* SECTION 3: Cloud Security & Compliance */}
      <SectionContainer className="py-10 md:py-16 border-b">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <SectionTitle
              section="Security"
              title="Cloud Security & Compliance"
              subtitle="Protect your digital assets with robust cloud security frameworks and ensure compliance with industry regulations. Our security-first approach covers everything from identity management to threat detection and incident response."
              className="mb-6"
            />
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Identity & access management</li>
              <li>Data encryption & privacy controls</li>
              <li>Continuous security monitoring</li>
              <li>Regulatory compliance (GDPR, HIPAA, etc.)</li>
            </ul>
          </div>
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80" alt="Cloud Security" className="rounded-lg shadow-lg w-full max-h-80 object-cover" />
        </div>
      </SectionContainer>

      {/* SECTION 4: DevOps & Cloud Automation */}
      <SectionContainer className="py-10 md:py-16 border-b bg-gray-50">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&q=80" alt="DevOps Automation" className="rounded-lg shadow-lg w-full max-h-80 object-cover order-2 md:order-1" />
          <div className="order-1 md:order-2">
            <SectionTitle
              section="Automation"
              title="DevOps & Cloud Automation"
              subtitle="Accelerate your software delivery and operations with DevOps best practices and cloud automation. We help you build CI/CD pipelines, automate infrastructure, and ensure rapid, reliable deployments."
              className="mb-6"
            />
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Infrastructure as code (IaC)</li>
              <li>Automated CI/CD pipelines</li>
              <li>Monitoring & logging automation</li>
              <li>Cost and resource optimization</li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* CASE STUDIES SECTION */}
      <SectionContainer className="py-14">
        <SectionTitle
          section="Case Studies"
          title="Cloud Success Stories"
          subtitle="See how we’ve helped organizations transform with cloud technology."
          className="mb-12 text-center"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {/* Case Study 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-semibold mb-2">Global Retailer: Multi-Cloud Transformation</h3>
            <img src="https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?w=400&q=80" alt="Retailer Cloud" className="rounded-lg shadow mb-4 w-full h-40 object-cover" />
            <p className="text-gray-700 mb-4">
              We migrated a global retailer’s legacy infrastructure to a multi-cloud environment, resulting in 60% faster deployments and a 30% reduction in IT costs. Our team ensured zero downtime and full regulatory compliance.
            </p>
            <ul className="list-disc ml-6 text-gray-700 mb-2">
              <li>Zero-downtime migration</li>
              <li>Multi-cloud orchestration</li>
              <li>Automated monitoring & reporting</li>
            </ul>
          </div>
          {/* Case Study 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-semibold mb-2">Healthcare Provider: Secure Cloud Adoption</h3>
            <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&q=80" alt="Healthcare Cloud" className="rounded-lg shadow mb-4 w-full h-40 object-cover" />
            <p className="text-gray-700 mb-4">
              Enabled a healthcare provider to adopt cloud for sensitive patient data, implementing advanced encryption and continuous compliance monitoring. Achieved HIPAA compliance and improved data accessibility for clinicians.
            </p>
            <ul className="list-disc ml-6 text-gray-700 mb-2">
              <li>HIPAA-compliant cloud architecture</li>
              <li>End-to-end data encryption</li>
              <li>Real-time compliance dashboards</li>
            </ul>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}


