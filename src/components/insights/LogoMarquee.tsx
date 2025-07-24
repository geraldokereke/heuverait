'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const companies = [
  { name: 'Company 1', logo: '/company-1.png' },
  { name: 'Company 2', logo: '/company-2.png' },
  { name: 'Company 3', logo: '/company-3.png' },
  { name: 'Company 4', logo: '/company-4.png' },
  { name: 'Company 5', logo: '/company-5.png' },
  { name: 'Company 6', logo: '/company-6.png' },
  { name: 'Company 7', logo: '/company-7.png' },
  { name: 'Company 8', logo: '/company-8.png' },
];

const LogoMarquee = () => {
  return (
    <div className="w-full overflow-hidden bg-red-200 py-8">
      <div className="relative flex items-center">
        {/* First set of logos */}
        <motion.div
          className="flex items-center space-x-12"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {companies.map((company, index) => (
            <div
              key={`first-${index}`}
              className="flex items-center justify-center w-32 h-20 bg-red-400 relative"
            >
              <Image
                src={company.logo}
                alt={company.name}
                fill
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>

        {/* Duplicate set of logos for seamless loop */}
        {/* <motion.div
          className="flex space-x-12"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {companies.map((company, index) => (
            <div
              key={`second-${index}`}
              className="flex items-center justify-center w-32 h-16 relative"
            >
              <Image
                src={company.logo}
                alt={company.name}
                fill
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div> */}
      </div>
    </div>
  );
};

export default LogoMarquee; 