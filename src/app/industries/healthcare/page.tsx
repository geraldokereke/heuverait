'use client';
import React from 'react';
import { HeartPulse } from 'lucide-react';
import SectionContainer from '@/components/ui/sectionContainer';
import SectionTitle from '@/components/ui/SectionTitle';
import { healthcareCaseStudies } from '@/components/data/Healthcare';
import Hero from '@/components/hero';
import SideImage from '@/components/ui/SideImage';

export default function HealthcareIndustry() {
  return (
    <>
      <Hero
        imgLink="https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=1200&q=80"
        section="industries"
        title="Healthcare Solutions"
        description="Empowering care providers and patients with secure, intuitive, and innovative digital healthcare platforms."
        height="h-[50vh]"
      />

      {/* SECTION 1: Patient Engagement Platforms */}
      <SectionContainer className="py-10 md:py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <SideImage
            imgsrc='https://images.unsplash.com/photo-1519494080410-f9aa8f52f1e9?w=600&q=80" alt="Patient Engagement'
            borderSide='left'
            height='xl'
          />
          <div className="order-1 md:order-2">
            <SectionTitle
              section="Digital Health"
              title="Patient Engagement Platforms"
              subtitle="Seamless portals and mobile apps that connect patients with care, improve outcomes, and boost satisfaction."
              className="mb-6"
            />
            <ul className="list-disc ml-3 xl:ml-4 2xl:ml-6 text-slate-700 space-y-2 text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-lg">
              <li>Online appointment booking</li>
              <li>Telemedicine integration</li>
              <li>Personal health records</li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* SECTION 2: Provider & Operations Solutions */}
      <div className='w-full bg-[#f1f5f9]'>
        <SectionContainer className="py-10 md:py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <SectionTitle
                section="Care Delivery"
                title="Provider & Operations Solutions"
                subtitle="Streamlining workflows for clinicians and administrators with secure, interoperable tools."
                className="mb-6"
              />
              <ul className="list-disc ml-3 xl:ml-4 2xl:ml-6 text-slate-700 space-y-2 text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-lg">
                <li>EHR/EMR system integration</li>
                <li>Workflow automation</li>
                <li>HIPAA-compliant data security</li>
              </ul>
            </div>
            <SideImage
              imgsrc='https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&q=80'
              borderSide='right'
              height='xl'
            />
          </div>
        </SectionContainer>
      </div>

      {/* CASE STUDIES SECTION */}
      <SectionContainer className="py-14">
        <SectionTitle
          section="Case Studies"
          title="Healthcare Impact"
          subtitle="How our digital solutions improve care delivery."
          className="text-center"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {healthcareCaseStudies.map((study, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
              <SideImage
                imgsrc={study.img.src}
                height='lg'
                borderSide='all'
              />
              <h3 className="text-sm md:text-base lg:text-sm xl:text-base 2xl:text-2xl font-semibold mt-3 2xl:mt-5">{study.title}</h3>
              <p className="text-slate-700 text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-lg mt-1">{study.description}</p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </>
  );
}
