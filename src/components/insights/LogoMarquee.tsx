'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionContainer from '../ui/sectionContainer';
import SectionTitle from '../ui/SectionTitle';

const companies = [
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
  { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
  { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
  { name: 'Tesla', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg' },
  { name: 'Spotify', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg' },
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

const LogoMarquee = () => {
  // Calculate the width needed for seamless animation
  const logoWidth = 128; // w-32 = 128px
  const spacing = 48; // space-x-12 = 48px
  const totalWidth = companies.length * (logoWidth + spacing);

  return (
    <div className='w-full py-20'>

      {/* Bottom indicator - Responsive positioning */}
      <SectionContainer className='pb-10'>
        <SectionTitle
        section='our clients'
        title='Clients we serve'
        subtitle='Take a look at people who trust our services'
        />
      </SectionContainer>

      {/* Logo Marquee Section */}
      <div className="w-full overflow-hidden relative bg-white">
        <div className="relative">
          {/* Container for seamless infinite scroll */}
          <motion.div
            className="flex items-center"
            animate={{
              x: [0, -totalWidth],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
            style={{ width: `${totalWidth * 2}px` }}
          >
            {/* First set of logos */}
            {companies.map((company, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center justify-center w-24 2xl:w-32 h-12 2xl:h-20 mx-6 relative flex-shrink-0"
              >
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  fill
                  className="object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  unoptimized // Since we're using external URLs
                />
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {companies.map((company, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center justify-center w-24 2xl:w-32 h-12 2xl:h-20 mx-6 relative flex-shrink-0"
              >
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  fill
                  className="object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  unoptimized // Since we're using external URLs
                />
              </div>
            ))}

            {companies.map((company, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center justify-center w-24 2xl:w-32 h-12 2xl:h-20 mx-6 relative flex-shrink-0"
              >
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  fill
                  className="object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  unoptimized // Since we're using external URLs
                />
              </div>
            ))}
          </motion.div>

          {/* Gradient fade effects on sides - properly contained */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;