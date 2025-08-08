'use client';
import React from 'react';
import { motion } from 'framer-motion';
import SectionContainer from '../ui/sectionContainer';
import SectionTitle from '../ui/SectionTitle';

const stats = [
  {
    value: '50+',
    label: 'Successful Projects',
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

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 justify-between gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              custom={0.2 + index * 0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="px-4 border-l-2 border-l-gray-300 cursor-pointer group hover:border-l-[#41a7ad] transition-colors duration-300"
            >
              <h3 className="text-2xl xl:text-3xl 2xl:text-5xl font-montserrat font-medium text-primary mb-2 group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </h3>
              <p className="text-xs xl:text-sm 2xl:text-xl font-poppins font-medium text-black group-hover:text-primary transition-colors duration-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
};

export default WhyChooseUs; 