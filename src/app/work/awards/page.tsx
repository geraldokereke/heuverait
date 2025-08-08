"use client";

import React from "react";
import {
  Trophy,
  Award,
  Star,
  Users,
  Calendar,
  ExternalLink,
} from "lucide-react";
import SectionContainer from "@/components/ui/sectionContainer";
import SectionTitle from "@/components/ui/SectionTitle";
import Hero from "@/components/hero";
import { awards, certifications, media, testimonials } from "@/components/data/Awards";
import CTA from "@/components/ui/cta";

export default function AwardsWork() {
  return (
    <>
      <Hero
        imgLink="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        section="awards"
        title="Awards & Recognition"
        height="h-[50vh]"
        description="Celebrating our achievements and industry recognition for excellence in digital solutions."
      />

      {/* SECTION 1: Recent Major Awards */}
      <SectionContainer className="py-10 md:py-16">
        <SectionTitle
          section="Latest Honors"
          title="Recent Major Awards"
          subtitle="Our most prestigious recognitions from the past year."
          className="mb-12 text-center"
        />
        <div className="grid md:grid-cols-3 gap-8">
          {awards.map((award, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={award.src}
                alt={award.alt}
                className="size-20 md:size-16 lg:size-12 xl:size-16 2xl:size-20 object-cover rounded-full mb-4 shadow-md"
              />
              <h3 className="text-sm lg:text-xs 2xl:text-xl font-semibold mb-0 2xl:mb-2 text-center">
                {award.title}
              </h3>
              <span className="text-slate-800 text-xs md:text-lg lg:text-xs xl:text-sm 2xl:text-lg mb-1 2xl:mb-2 font-medium">
                {award.organization}
              </span>
              <p className="text-slate-700 text-center text-xs lg:text-[6px] xl:text-[8px] 2xl:text-sm mb-2 2xl:mb-4">
                {award.description}
              </p>
              <div className="gap-1 flex items-center text-black text-xs lg:text-[6px] xl:text-[8px] 2xl:text-sm">
                <Calendar className="size-3 2xl:size-4" />
                <span>{award.date}</span>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* SECTION 2: Industry Recognition Timeline - 3D Concept */}
      <SectionContainer className="py-16 md:py-24 relative overflow-hidden">
        <SectionTitle
          section="Our Journey"
          title="Recognition Timeline"
          subtitle="A decade of consistent excellence and industry leadership."
          className="mb-16 text-center relative z-10"
        />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* 3D Timeline Container */}
          <div className="relative">
            {/* Central Timeline Line - 3D Effect */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 w-2 bg-gradient-to-b from-black to-[#41a7ad] via-[#41a7ad] rounded-full shadow-lg"
              style={{ height: "100%", top: "0" }}
            ></div>
            <div
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-black to-[#41a7ad] via-[#41a7ad] rounded-full"
              style={{ height: "100%", top: "0", marginLeft: "0.5px" }}
            ></div>

            <div className="space-y-16">
              {/* 2024 - Right Side */}
              <div className="flex items-center">
                <div className="w-1/2 pr-12">
                  {/* Empty space for right alignment */}
                </div>

                {/* Central Node - 3D */}
                <div className="flex-shrink-0 relative z-20">
                  <div className="w-24 h-24 bg-black/50 rounded-full flex items-center justify-center shadow-2xl border-4 border-white transform hover:scale-110 transition-all duration-300 hover:rotate-3">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-inner">
                      <span className="font-black text-black text-lg drop-shadow-md">
                        2024
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-1/2 pl-12">
                  <div className="bg-white rounded-2xl p-8 shadow-2xl transform hover:-translate-y-2 hover:shadow-3xl transition-all duration-500 border border-yellow-100 relative overflow-hidden group">
                    {/* Card background gradient */}
                    <div className="absolute inset-0 bg-white group-hover:opacity-80 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <h4 className="font-bold text-xl mb-4 text-black drop-shadow-sm">
                        Outstanding Year of Innovation
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                          <div className="w-3 h-3 bg-[#41a7ad] rounded-full mr-3 shadow-md"></div>
                          <span className="text-slate-800 text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-lg font-medium">
                            Best Digital Transformation - Tech Leaders Summit
                          </span>
                        </div>
                        <div className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-75">
                          <div className="w-3 h-3 bg-[#41a7ad] rounded-full mr-3 shadow-md"></div>
                          <span className="text-slate-800 text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-lg font-medium">
                            Top UX Design Excellence - Global Web Awards
                          </span>
                        </div>
                        <div className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-150">
                          <div className="w-3 h-3 bg-[#41a7ad] rounded-full mr-3 shadow-md"></div>
                          <span className="text-slate-800 text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-lg font-medium">
                            AI Innovation of the Year - Future Tech Awards
                          </span>
                        </div>
                        <div className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-225">
                          <div className="w-3 h-3 bg-[#41a7ad] rounded-full mr-3 shadow-md"></div>
                          <span className="text-slate-800 text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-lg font-medium">
                            Client Satisfaction Award - Business Excellence
                            Forum
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2023 - Left Side */}
              <div className="flex items-center">
                <div className="w-1/2 pr-12">
                  <div className="bg-white rounded-2xl p-8 shadow-2xl transform hover:-translate-y-2 hover:shadow-3xl transition-all duration-500 border border-yellow-100 relative overflow-hidden group">
                    {/* Card background gradient */}
                    <div className="absolute inset-0 bg-white group-hover:opacity-80 transition-opacity duration-300"></div>

                    <div className="relative z-10">
                      <h4 className="font-bold text-xl mb-4 text-black drop-shadow-sm">
                        Growth & Excellence
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                          <div className="w-3 h-3 bg-[#41a7ad] rounded-full mr-3 shadow-md"></div>
                          <span className="text-black text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-lg font-medium">
                            Rising Star Company - Tech Innovation Awards
                          </span>
                        </div>
                        <div className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-75">
                          <div className="w-3 h-3 bg-[#41a7ad] rounded-full mr-3 shadow-md"></div>
                          <span className="text-black text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-lg font-medium">
                            Best Mobile App Development - Digital Excellence
                          </span>
                        </div>
                        <div className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-150">
                          <div className="w-3 h-3 bg-[#41a7ad] rounded-full mr-3 shadow-md"></div>
                          <span className="text-black text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-lg font-medium">
                            Outstanding Customer Service - Service Quality
                            Awards
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Central Node - 3D */}
                <div className="flex-shrink-0 relative z-20">
                  <div className="w-24 h-24 bg-[#41a7ad] rounded-full flex items-center justify-center shadow-2xl border-4 border-white transform hover:scale-110 transition-all duration-300 hover:-rotate-3">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-inner">
                      <span className="font-black text-[#41a7ad] text-lg drop-shadow-md">
                        2023
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-1/2 pl-12">
                  {/* Empty space for left alignment */}
                </div>
              </div>

              {/* 2022 - Right Side */}
              <div className="flex items-center">
                <div className="w-1/2 pr-12">
                  {/* Empty space for right alignment */}
                </div>

                {/* Central Node - 3D */}
                <div className="flex-shrink-0 relative z-20">
                  <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center shadow-2xl border-4 border-white transform hover:scale-110 transition-all duration-300 hover:rotate-6">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-inner">
                      <span className="font-black text-black text-lg drop-shadow-md">
                        2022
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-1/2 pl-12">
                  <div className="bg-white rounded-2xl p-8 shadow-2xl transform hover:-translate-y-2 hover:shadow-3xl transition-all duration-500 border border-orange-100 relative overflow-hidden group">

                    <div className="relative z-10">
                      <h4 className="font-bold text-2xl mb-4 text-black drop-shadow-sm">
                        Foundation of Success
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                          <div className="w-3 h-3 bg-[#41a7ad] rounded-full mr-3 shadow-md"></div>
                          <span className="text-black font-medium">
                            Emerging Technology Leader - StartupTech Awards
                          </span>
                        </div>
                        <div className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-75">
                          <div className="w-3 h-3 bg-[#41a7ad] rounded-full mr-3 shadow-md"></div>
                          <span className="text-black font-medium">
                            Best New Business Solution - Innovation Hub
                          </span>
                        </div>
                        <div className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-150">
                          <div className="w-3 h-3 bg-[#41a7ad] rounded-full mr-3 shadow-md"></div>
                          <span className="text-black font-medium">
                            Quality Assurance Excellence - Tech Quality Forum
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* SECTION 3: Client Testimonials & Success Stories */}
      <SectionContainer className="py-10 md:py-16">
        <SectionTitle
          section="Client Success"
          title="Testimonials & Success Stories"
          subtitle="Real results from our valued partners and clients."
          className="mb-12 text-center"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-xl shadow-lg p-6 md:p-6 lg:p-4 xl:p-6 2xl:p-8 flex flex-col hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.src}
                  alt={testimonial.alt}
                  className="size-10 md:size-10 lg:size-8 xl:size-10 2xl:size-12 rounded-full object-cover mr-3"
                />
                <div>
                  <h4 className="font-semibold text-[10px] xl:text-sm 2xl:text-xl text-black">
                    {testimonial.name}
                  </h4>
                  <p className="text-[8px] md:text-xs lg:text-[6px] xl:text-[8px] 2xl:text-sm text-slate-700">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-lg text-slate-800 mb-4 italic">
                "{testimonial.subHeading}"
              </p>
              <div className="flex text-yellow-500 mb-1 2xl:mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 md:size-4 lg:size-3 xl:size-4 2xl:size-6" fill="currentColor" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* SECTION 4: Certifications & Partnerships */}
      <SectionContainer className="py-10 md:py-16">
        <SectionTitle
          section="Credentials"
          title="Certifications & Partnerships"
          subtitle="Validated expertise through industry certifications and strategic partnerships."
          className="mb-12 text-center"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 md:p-4 lg:p-3 xl:p-4 2xl:p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={cert.src}
                alt={cert.alt}
                className="size-14 md:size-14 lg:size-12 xl:size-14 2xl:size-16 mx-auto mb-4 rounded-lg shadow-sm"
              />
              <h4 className="font-semibold text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-lg text-black mb-2">{cert.heading}</h4>
              <p className="text-[8px] md:text-xs lg:text-[6px] xl:text-[8px] 2xl:text-sm text-slate-800">{cert.subHeading}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* SECTION 5: Featured Media Coverage */}
      <SectionContainer className="py-10 md:py-16 border-b">
        <SectionTitle
          section="In The News"
          title="Media Coverage & Features"
          subtitle="Our achievements recognized by leading industry publications."
          className="mb-12 text-center"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Media 1 */}
          {media.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-44 md:h-44 lg:h-40 xl:h-44 2xl:h-48 object-cover"
              />
              <div className="p-4 md:p-4 lg:p-3 xl:p-4 2xl:p-6">
                <h4 className="font-semibold text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-lg text-black mb-2">
                  {item.heading}
                </h4>
                <p className="text-slate-800 text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-lg mb-4">{item.subHeading}</p>
                <div className="flex items-center text-black text-[8px] md:text-xs lg:text-[6px] xl:text-[8px] 2xl:text-sm">
                  <ExternalLink className="mr-2 size-4 md:size-4 lg:size-3 xl:size-4 2xl:size-5" />
                  <span>{item.span}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* SECTION 6: Call to Action */}
      <CTA
        bgColor="black"
        headerText="Ready to Win Together?"
        subHeaderText="Join our award-winning team and let's create solutions that earn recognition and drive real results for your business."
        headerTextColor="white"
        subHeaderTextColor="white"
      >
        <button className="bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors duration-200">
          Start Your Project
        </button>
        <button className="border border-yellow-600 text-yellow-700 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-colors duration-200">
          View Our Portfolio
        </button>
      </CTA>
    </>
  );
}
