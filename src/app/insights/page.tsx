'use client';
import React from 'react';
import WhoWeAre from '@/components/insights/WhoWeAre';
import Services from '@/components/insights/Services';
import WhyChooseUs from '@/components/insights/WhyChooseUs';
import CaseStudies from '@/components/insights/CaseStudies';
import BlogPreview from '@/components/insights/BlogPreview';
// import ContactCTA from '@/components/insights/ContactCTA';

const InsightsPage = () => {
  return (
    <main>
      
      <WhoWeAre />
      <Services />
      <WhyChooseUs />
      <CaseStudies />
      <BlogPreview />
      {/* <ContactCTA /> */}
    </main>
  );
};

export default InsightsPage; 