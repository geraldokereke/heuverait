"use client";

import React from "react";
import SectionContainer from "@/components/ui/sectionContainer";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import Hero from "@/components/hero";
import Link from "next/link";
import { projectsData } from "@/data/projectsData";

export default function PortfolioWork() {
  return (
    <>
      <Hero
        imgLink="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?q=80&w=1680&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        height="h-[50vh]"
        section="Portfolio"
        title="Heuvera's Portfolio"
        description="Showcasing our most impactful digital solutions and successful client partnerships across industries."
      />
      {/* SECTION 1: Featured Projects */}
      <SectionContainer className="py-10 md:py-16 border-b">
        <SectionTitle
          section="Highlights"
          title="Featured Projects"
          subtitle="A selection of our most innovative and high-impact work."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {projectsData.map((project) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="bg-white rounded-xl shadow-lg flex flex-col min-h-fit relative group overflow-hidden cursor-pointer"
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.name}
                  className="w-full h-56 object-cover"
                  width={1000}
                  height={600}
                />
              )}

              {project.logo && (
                <div className="size-24 bg-white rounded-xl opacity-90 absolute left-1/2 transform -translate-x-1/2 top-40 rounded-xl transition-all duration-500 ease-in-out group-hover:w-full group-hover:h-56 group-hover:top-0 group-hover:rounded-none group-hover:opacity-80 shadow shadow-md">
                  <Image
                    src={project.logo}
                    alt={`${project.name} Logo`}
                    className="size-full object-contain px-1"
                    width={100}
                    height={100}
                  />
                </div>
              )}
              <div className="w-full text-center px-2 relative z-10 pt-10 h-36">
                <h3 className="text-base font-semibold font-montserrat mb-2 truncate">
                  {project.name}
                </h3>
                <p className="text-slate-800 text-sm line-clamp-4">{project.description}</p>
              </div>
              {/* Read More - animated on hover */}
              <div className="text-center relative z-10 my-5">
                <h1 className="text-white hover:underline cursor-pointer text-sm opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                  Read More
                </h1>
                {/* Animated Read More on hover */}
                <h1 className="text-[#41a7ad] font-montserrat uppercase hover:underline cursor-pointer text-xs font-semibold absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  Read More
                </h1>
              </div>
            </Link>
          ))}
        </div>
      </SectionContainer>
    </>
  );
}
