'use client';

import React from 'react';
import { Briefcase } from 'lucide-react';
import SectionContainer from '@/components/ui/sectionContainer';
import SectionTitle from '@/components/ui/SectionTitle';

export default function PortfolioWork() {
  return (
    <>
      {/* HERO SECTION - Elegant, Inspiring, Distinct */}
      <div className="relative min-h-[60vh] md:min-h-[70vh] flex items-center bg-gradient-to-br from-[#f8fafc] via-[#dbeafe] to-[#f8fafc] overflow-hidden">
        <SectionContainer className="z-10 w-full flex flex-col items-center justify-center text-center py-16 md:py-28">
          <Briefcase size={54} className="text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 drop-shadow-lg">Project Portfolio</h1>
          <p className="text-lg md:text-2xl font-light text-blue-800 max-w-2xl mx-auto mb-6 md:mb-8">
            Showcasing our most impactful digital solutions and successful client partnerships across industries.
          </p>
        </SectionContainer>
        <img src="/work-portfolio-hero.jpg" alt="Portfolio" className="absolute right-0 bottom-0 w-1/3 max-w-xs md:max-w-md opacity-70 hidden md:block" />
      </div>

      {/* SECTION 1: Featured Projects */}
      <SectionContainer className="py-10 md:py-16 border-b">
        <SectionTitle
          section="Highlights"
          title="Featured Projects"
          subtitle="A selection of our most innovative and high-impact work."
          className="mb-12 text-center"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-semibold mb-2">Global E-Commerce Platform</h3>
            <img src="https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?w=400&q=80" alt="E-Commerce" className="rounded-lg shadow mb-4 w-full h-40 object-cover" />
            <p className="text-blue-800 mb-4">
              Built a scalable e-commerce platform serving millions worldwide, with advanced analytics and seamless checkout.
            </p>
          </div>
          {/* Project 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-semibold mb-2">AI-Driven Healthcare Portal</h3>
            <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&q=80" alt="Healthcare Portal" className="rounded-lg shadow mb-4 w-full h-40 object-cover" />
            <p className="text-blue-800 mb-4">
              Delivered a HIPAA-compliant portal with AI triage and telemedicine, improving patient outcomes and access.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* SECTION 2: Client Testimonials */}
      <SectionContainer className="py-10 md:py-16">
        <SectionTitle
          section="Testimonials"
          title="Client Success Stories"
          subtitle="Hear from the organizations we've helped transform."
          className="mb-12 text-center"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-blue-50 rounded-xl shadow-lg p-8 flex flex-col">
            <p className="text-lg text-blue-900 mb-4">“Their expertise and commitment helped us launch on time and exceed our KPIs. We couldn’t have asked for a better partner.”</p>
            <span className="font-semibold text-blue-800">— CTO, Global Retailer</span>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-blue-50 rounded-xl shadow-lg p-8 flex flex-col">
            <p className="text-lg text-blue-900 mb-4">“The team’s technical skill and communication set them apart. Our new platform is a game-changer for our business.”</p>
            <span className="font-semibold text-blue-800">— COO, Healthcare Network</span>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
