'use client';
import React from 'react';
import { ShoppingBag } from 'lucide-react';
import SectionContainer from '@/components/ui/sectionContainer';
import SectionTitle from '@/components/ui/SectionTitle';
import { retailCaseStudies } from '@/components/data/Healthcare';
import Hero from '@/components/hero';
import SideImage from '@/components/ui/SideImage';

export default function RetailIndustry() {
  return (
    <>
      <Hero
        imgLink="https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=1200&q=80"
        section="industries"
        title="Retail & E-Commerce Solutions"
        description="Engaging digital commerce platforms and retail tools that drive sales, loyalty, and operational excellence."
        height="h-[50vh]"
      />

      {/* SECTION 1: Omnichannel Commerce */}
      <SectionContainer className="py-10 md:py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <SideImage
            imgsrc='https://images.unsplash.com/photo-1519494080410-f9aa8f52f1e9?w=600&q=80" alt="Omnichannel" alt="Patient Engagement'
            borderSide='left'
            height='xl'
          />
          <div className="order-1 md:order-2">
            <SectionTitle
              section="Commerce"
              title="Omnichannel Platforms"
              subtitle="Unified online and in-store experiences for modern shoppers."
              className="mb-6"
            />
            <ul className="list-disc ml-3 xl:ml-4 2xl:ml-6 text-slate-700 space-y-2 text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-lg">
              <li>Integrated POS & inventory</li>
              <li>Mobile & web storefronts</li>
              <li>Personalized promotions</li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* SECTION 2: Customer Engagement & Analytics */}
      <div className='w-full bg-[#f1f5f9]'>
        <SectionContainer className="py-10 md:py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <SectionTitle
                section="Loyalty"
                title="Customer Engagement & Analytics"
                subtitle="Data-driven tools to understand, engage, and retain customers."
                className="mb-6"
              />
              <ul className="list-disc ml-3 xl:ml-4 2xl:ml-6 text-slate-700 space-y-2 text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-lg">
                <li>Loyalty programs & rewards</li>
                <li>Customer segmentation</li>
                <li>Real-time analytics</li>
              </ul>
            </div>
            <SideImage
              imgsrc='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80'
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
          title="Retail Impact"
          subtitle="How our digital solutions boost revenue and loyalty."
          className="mb-12 text-center"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {retailCaseStudies.map((study, idx) => (
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
