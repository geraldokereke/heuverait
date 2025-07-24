'use client';
import BlogPreview from '@/components/insights/BlogPreview';
import CaseStudies from '@/components/insights/CaseStudies';
import Hero from '@/components/insights/Hero';
import Services from '@/components/insights/Services';
import Technologies from '@/components/insights/Technologies';
import WhoWeAre from '@/components/insights/WhoWeAre';
import WhyChooseUs from '@/components/insights/WhyChooseUs';
import React from 'react';

const Home = () => {
  return (
    <>
      <Hero />
      <CaseStudies />
      <WhyChooseUs />
      <Technologies/>
      <WhoWeAre />
      <Services />
      <BlogPreview />
    </>
  );
};

export default Home;