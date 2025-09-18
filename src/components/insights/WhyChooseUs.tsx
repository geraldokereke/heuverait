'use client';
import React from 'react';
import { motion } from 'framer-motion';
import SectionContainer from '../ui/sectionContainer';
import SectionTitle from '../ui/SectionTitle';
import Stats from '../about/team/stats';

const stats = [
  {
    value: '50+',
    label: 'Suc  cessful Projects',
  },
  {
    value: '80+',
    label: 'Talented Developers',
  },
  {
    value: '120+',
    label: 'Satisfied Clients',
  },
  {
    value: '30+',
    label: 'Industries Covered'
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      type: "spring",
      stiffness: 60,
      damping: 18,
    },
  }),
};

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