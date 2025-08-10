'use client';
import React from 'react';
import { Cloud, Shield, Zap, Database, Rocket } from 'lucide-react';
import SectionContainer from '@/components/ui/sectionContainer';
import SectionTitle from '@/components/ui/SectionTitle';
import Hero from '@/components/hero';
import SideImage from '@/components/ui/SideImage';

export default function CloudSolution() {
  return (
    <>
      <Hero
        imgLink="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        section="solutions"
        title="Cloud Services"
        height="h-[50vh]"
        description="Enterprise-grade, secure, and scalable cloud solutions that accelerate your digital transformation. Harness the power of the cloud for innovation, resilience, and operational excellence."
      />

      {/* SECTION 1: Cloud Migration & Modernization */}
      <SectionContainer className="py-10 md:py-16 border-b">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <SectionTitle
              section="Migration"
              title="Cloud Migration & Modernization"
              subtitle="Seamlessly transition your legacy systems and applications to the cloud with minimal disruption. Our proven frameworks ensure a secure, efficient, and cost-effective migration, unlocking agility and future-readiness for your business."
              subtitleClassname='text-left'
            />
            <ul className="list-disc ml-3 xl:ml-4 2xl:ml-6 text-slate-700 space-y-2 text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-lg">
              <li>Assessment & cloud strategy development</li>
              <li>Lift-and-shift, re-platforming, and re-architecting</li>
              <li>Zero-downtime migrations</li>
              <li>Change management & user training</li>
            </ul>
          </div>
          <SideImage
            imgsrc='https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80'
            borderSide='right'
            height='xl'
          />
        </div>
      </SectionContainer>

      {/* SECTION 2: Hybrid & Multi-Cloud Solutions */}
      <div className='w-full bg-gray-50'>
        <SectionContainer className="py-10 md:py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <SideImage
              imgsrc='https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80'
              borderSide='left'
              height='xl'
            />
            <div className="order-1 md:order-2">
              <SectionTitle
                section="Architecture"
                title="Hybrid & Multi-Cloud Solutions"
                subtitle="Achieve flexibility and resilience by leveraging multiple cloud providers and on-premises resources. We design, implement, and manage hybrid and multi-cloud architectures tailored to your compliance, performance, and budget needs."
                subtitleClassname='text-left'
              />
              <ul className="list-disc ml-3 xl:ml-4 2xl:ml-6 text-slate-700 space-y-2 text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-lg">
                <li>Custom hybrid cloud architectures</li>
                <li>Multi-cloud workload management</li>
                <li>Unified monitoring & governance</li>
                <li>Disaster recovery & business continuity</li>
              </ul>
            </div>
          </div>
        </SectionContainer>
      </div>

      {/* SECTION 3: Cloud Security & Compliance */}
      <SectionContainer className="py-10 md:py-16 border-b">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <SectionTitle
              section="Security"
              title="Cloud Security & Compliance"
              subtitle="Protect your digital assets with robust cloud security frameworks and ensure compliance with industry regulations. Our security-first approach covers everything from identity management to threat detection and incident response."
              subtitleClassname='text-left'
            />
            <ul className="list-disc ml-3 xl:ml-4 2xl:ml-6 text-slate-700 space-y-2 text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-lg">
              <li>Identity & access management</li>
              <li>Data encryption & privacy controls</li>
              <li>Continuous security monitoring</li>
              <li>Regulatory compliance (GDPR, HIPAA, etc.)</li>
            </ul>
          </div>
          <SideImage
            imgsrc='https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80'
            borderSide='right'
            height='xl'
          />
        </div>
      </SectionContainer>

      {/* SECTION 4: DevOps & Cloud Automation */}
      <div className='w-full bg-gray-50'>
        <SectionContainer className="py-10 md:py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <SideImage
              imgsrc='https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&q=80'
              borderSide='left'
              height='xl'
            />
            <div className="order-1 md:order-2">
              <SectionTitle
                section="Automation"
                title="DevOps & Cloud Automation"
                subtitle="Accelerate your software delivery and operations with DevOps best practices and cloud automation. We help you build CI/CD pipelines, automate infrastructure, and ensure rapid, reliable deployments."
                subtitleClassname='text-left'
              />
              <ul className="list-disc ml-3 xl:ml-4 2xl:ml-6 text-slate-700 space-y-2 text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-lg">
                <li>Infrastructure as code (IaC)</li>
                <li>Automated CI/CD pipelines</li>
                <li>Monitoring & logging automation</li>
                <li>Cost and resource optimization</li>
              </ul>
            </div>
          </div>
        </SectionContainer>
      </div>

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
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
            <SideImage
              imgsrc="https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?w=400&q=80"
              height='lg'
              borderSide='all'
            />
            <h3 className="text-sm md:text-base lg:text-sm xl:text-base 2xl:text-2xl font-semibold mt-4 mb-2">Global Retailer: Multi-Cloud Transformation</h3>
            <p className="text-slate-700 text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-lg mb-4">
              We migrated a global retailer’s legacy infrastructure to a multi-cloud environment, resulting in 60% faster deployments and a 30% reduction in IT costs. Our team ensured zero downtime and full regulatory compliance.
            </p>
            <ul className="list-disc ml-3 xl:ml-4 2xl:ml-6 text-slate-700 space-y-2 text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-lg">
              <li>Zero-downtime migration</li>
              <li>Multi-cloud orchestration</li>
              <li>Automated monitoring & reporting</li>
            </ul>
          </div>
          {/* Case Study 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
            <SideImage
              imgsrc="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&q=80"
              height='lg'
              borderSide='all'
            />
            <h3 className="text-sm md:text-base lg:text-sm xl:text-base 2xl:text-2xl font-semibold mt-4 mb-2">Healthcare Provider: Secure Cloud Adoption</h3>
            <p className="text-slate-700 text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-lg mb-4">
              Enabled a healthcare provider to adopt cloud for sensitive patient data, implementing advanced encryption and continuous compliance monitoring. Achieved HIPAA compliance and improved data accessibility for clinicians.
            </p>
            <ul className="list-disc ml-3 xl:ml-4 2xl:ml-6 text-slate-700 space-y-2 text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-lg">
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


