"use client";
import React from "react";
import SectionContainer from "@/components/ui/sectionContainer";
import SectionTitle from "@/components/ui/SectionTitle";
import {
  complianceFeatures,
  digitalBankingFeatures,
  financeCaseStudies,
} from "@/components/data/Finance";
import Hero from "@/components/hero";
import SideImage from "@/components/ui/SideImage";

export default function FinanceIndustry() {
  return (
    <>
      <Hero
        imgLink="https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=1200&q=80"
        section="Finance & Fintech Solutions"
        title="Healthcare Solutions"
        description="Secure, scalable, and innovative digital products for banks, fintechs, and financial institutions."
        height="h-[50vh]"
      />

      {/* SECTION 1: Digital Banking Platforms */}
      <SectionContainer className="py-10 md:py-16 border-b">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <SideImage
            imgsrc='https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&q=80" alt="Patient Engagement'
            borderSide='left'
            height='xl'
          />
          <div className="order-1 md:order-2">
            <SectionTitle
              section="Fintech"
              title="Digital Banking Platforms"
              subtitle="Modern banking apps and platforms that deliver seamless, secure digital experiences."
              className="mb-6"
            />
            <ul className="list-disc ml-3 xl:ml-4 2xl:ml-6 text-slate-700 space-y-2 text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-lg">
              {digitalBankingFeatures.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* SECTION 2: Risk & Compliance Solutions */}
      <div className="w-full bg-[#f1f5f9]">
        <SectionContainer className="py-10 md:py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <SectionTitle
                section="Compliance"
                title="Risk & Compliance Solutions"
                subtitle="Tools to help financial institutions manage risk and meet regulatory requirements."
                className="mb-6"
              />
              <ul className="list-disc ml-3 xl:ml-4 2xl:ml-6 text-slate-700 space-y-2 text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-lg">
                {complianceFeatures.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
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
          title="Finance Impact"
          subtitle="How our digital products transform financial services."
          className="mb-12 text-center"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {financeCaseStudies.map((study, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col"
            >
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
