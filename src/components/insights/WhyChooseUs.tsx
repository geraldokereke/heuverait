'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  Users,
  Globe,
  Briefcase
} from 'lucide-react';
import ServicesMarquee from './ServicesMarquee';

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
    <section className="py-20 bg-white">
      <div className="px-4 md:px-8 lg:px-16 xl:px-40 2xl:px-72">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8"
        >
          <motion.h2
            variants={fadeInUp}
            custom={0.2}
            className="text-3xl md:text-6xl font-bold text-gray-900 mb-4"
          >
            Our journey of building success
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            custom={0.4}
            className="text-xl text-gray-600 max-w-3xl"
          >
            We are a full-cycle product development company that combines creative thinking with technical expertise to create user-centric products that solve real problems and drive business growth.
          </motion.p>
        </motion.div>

        <div className="flex flex-wrap gap-20 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              custom={0.2 + index * 0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="py-6 rounded-xl cursor-pointer group"
            >
              <h3 className="text-6xl font-bold text-gray-900 mb-2 group-hover:text-[#2cd16c]">
                {stat.value}
              </h3>
              <p className="text-2xl font-medium text-gray-900 group-hover:underline">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="w-full bg-white py-20 px-8">
        <ServicesMarquee />
      </div>
    </section>
  );
};

export default WhyChooseUs; 