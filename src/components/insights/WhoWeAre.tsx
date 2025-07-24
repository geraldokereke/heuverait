'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import ServicesMarquee from './ServicesMarquee';

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

const WhoWeAre = () => {
  return (
    <section className="pb-20 bg-white">
      
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-40 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h2
              variants={fadeInUp}
              custom={0.2}
              className="text-3xl md:text-5xl font-bold text-gray-900"
            >
              Architects of Intelligent Solutions
            </motion.h2>
            
            <motion.p
              variants={fadeInUp}
              custom={0.4}
              className="text-lg text-gray-600 leading-relaxed"
            >
              We are a team of passionate technologists dedicated to transforming businesses through innovative digital solutions. With expertise spanning software development, artificial intelligence, and cloud technologies, we help organizations across various industries achieve their digital transformation goals.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              custom={0.6}
              className="pt-4"
            >
              <button className="group items-center flex px-6 py-3 bg-[#2cd16c] text-sm rounded-full text-black font-semibold transition-all duration-300 hover:bg-[#25b05c]">
                Learn More About Us
                <ArrowRight className="size-4 ml-2 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="relative h-[400px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/team.jpg"
              alt="Our Team"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre; 