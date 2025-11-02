'use client';
import React from 'react';
import { motion } from 'framer-motion';
import SectionContainer from '../ui/sectionContainer';
import SectionTitle from '../ui/SectionTitle';
import Stats from '../about/team/stats';


const WhyChooseUs = () => {
  return (
    <div className='py-20'>
      <SectionContainer>
        <SectionTitle
          section='Company Overview'
          title="Key Facts About Heuvera"
          subtitle="Discover the numbers that define our journey and showcase our commitment to excellence in technology solutions."
        />

        <Stats/>
      </SectionContainer>
    </div>
  );
};

export default WhyChooseUs; 