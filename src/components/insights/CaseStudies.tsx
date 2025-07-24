'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import LogoMarquee from './LogoMarquee';

const caseStudies = [
  {
    title: 'Digital Transformation for FinTech',
    sector: 'Financial Services',
    description: 'Implemented AI-powered solutions that increased operational efficiency by 40%',
    image: '/case-study-1.jpg',
    logo: '/client-logo-1.png'
  },
  {
    title: 'Healthcare Platform Modernization',
    sector: 'Healthcare',
    description: 'Developed a scalable platform serving 1M+ patients with 99.9% uptime',
    image: '/case-study-2.jpg',
    logo: '/client-logo-2.png'
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

const CaseStudies = () => {
  return (
    <section className="pb-20">
      <div className="w-full bg-gray-50 pb-20">
        <LogoMarquee />
      </div>
      <div className="px-4 md:px-8 lg:px-16 xl:px-40 2xl:px-72">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 flex justify-between"
        >
          <motion.h2
            variants={fadeInUp}
            custom={0.2}
            className="text-3xl md:text-6xl font-bold text-gray-900 mb-4"
          >
            Our success stories
          </motion.h2>
          <button className="group text-black font-semibold flex items-center transition-colors duration-300">
            More Case Studies
            <ArrowRight className="size-4 ml-2 transition-transform group-hover:translate-x-1 group-hover:text-[#25B05C]" />
          </button>
        </motion.div>
        <div className='w-full flex flex-row justify-between gap-20'>
          <div className="flex flex-col overflow-x-auto pb-8 gap-8 snap-x snap-mandatory">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                variants={fadeInUp}
                custom={0.2 + index * 0.1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex-none w-150 snap-center"
              >
                <div className="">
                  <div className="relative h-150 rounded-2xl bg-red-200">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="py-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="relative w-16 h-8 grayscale hover:grayscale-0 transition-all duration-300">
                        <Image
                          src={study.logo}
                          alt="Client Logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-sm font-semibold text-[#2cd16c]">
                        {study.sector}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {study.description}
                    </p>
                    <button className="text-[#2cd16c] font-semibold flex items-center hover:text-[#25b05c] transition-colors duration-300">
                      Read Case Study
                      <ArrowRight className="size-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col overflow-x-auto pb-8 gap-8 snap-x snap-mandatory pt-40">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                variants={fadeInUp}
                custom={0.2 + index * 0.1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex-none w-150 snap-center"
              >
                <div className="">
                  <div className="relative h-150 rounded-2xl bg-red-200">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="py-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="relative w-16 h-8 grayscale hover:grayscale-0 transition-all duration-300">
                        <Image
                          src={study.logo}
                          alt="Client Logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-sm font-semibold text-[#2cd16c]">
                        {study.sector}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {study.description}
                    </p>
                    <button className="text-[#2cd16c] font-semibold flex items-center hover:text-[#25b05c] transition-colors duration-300">
                      Read Case Study
                      <ArrowRight className="size-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies; 