'use client';
import BlogPreview from '@/components/insights/BlogPreview';
import CaseStudies from '@/components/insights/CaseStudies';
import { Contact } from '@/components/insights/ContactCTA';
import Hero from '@/components/insights/Hero';
import { Industries } from '@/components/insights/Industries';
import Services from '@/components/insights/Services';
import { Stories } from '@/components/insights/Stories';
import Technologies from '@/components/insights/Technologies';
import { ClientTestimonials } from '@/components/insights/Testimonials';
import WhoWeAre from '@/components/insights/WhoWeAre';
import WhyChooseUs from '@/components/insights/WhyChooseUs';
import React from 'react';

const Home = () => {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Technologies/>
      <WhoWeAre />
      <Industries />
      <Services />
      <Stories />
      <BlogPreview />
      <ClientTestimonials />
      <Contact />
    </>
  );
};

export default Home;